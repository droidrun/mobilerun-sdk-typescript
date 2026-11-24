// Function inspection and runs may incur compute charges. Run: pnpm tsn examples/compute.ts
import { randomUUID } from 'node:crypto';
import { setTimeout as pause } from 'node:timers/promises';
import { APIError, MobilerunSDK, Run, WaitFailureError } from '@mobilerun/sdk';

// The public mobilerun-functions greeting example; no hosts, credentials or scopes.
export const source = `from pydantic import BaseModel
from mobilerun_functions import Context, script
class Input(BaseModel):
    name: str = "world"
class Output(BaseModel):
    message: str
@script
def main(input: Input, ctx: Context) -> Output:
    ctx.log.info("greeting")
    return Output(message=f"Hello, {input.name}!")
`;

async function inspect<T>(load: (timeout: number) => Promise<T>, ready: (value: T) => boolean): Promise<T> {
  const deadline = Date.now() + 120_000;
  while (Date.now() < deadline) {
    const value = await load(Math.min(30_000, deadline - Date.now()));
    if (ready(value)) return value;
    await pause(Math.min(1000, Math.max(0, deadline - Date.now())));
  }
  throw new Error('Inspection deadline exceeded');
}

export async function compute(sdk: MobilerunSDK, name: string) {
  const validation = await sdk.compute.functions.validations.create({ source });
  await inspect(
    (timeout) =>
      sdk.compute.functions.validations.retrieve(
        validation.data.id,
        { waitS: 0 },
        { timeout, maxRetries: 0 },
      ),
    ({ data }) => {
      if (data.status === 'failed' || (data.status === 'done' && !data.valid))
        throw new Error('Validation failed');
      return data.status === 'done';
    },
  );
  const fn = await sdk.compute.functions.create({ name, source });
  let version: number | undefined;
  let run: Run | undefined;
  let original: unknown;
  try {
    await inspect(
      (timeout) => fn.refresh({ timeout, maxRetries: 0 }),
      ({ data }) => {
        if (data.latestVersion?.status === 'rejected') throw new Error('Function inspection failed');
        return data.latestVersion?.status === 'ready';
      },
    );
    await fn.source();
    const uploaded = await fn.versions.create({ source });
    if (!uploaded.data) throw new Error('Missing uploaded version');
    version = uploaded.data.version;
    await inspect(
      (timeout) => fn.versions.retrieve(version!, { timeout, maxRetries: 0 }),
      ({ data }) => {
        if (data?.status === 'rejected') throw new Error('Version inspection failed');
        return data?.status === 'ready';
      },
    );
    await fn.versions.list();
    await sdk.compute.functions.list({ search: name });
    run = await fn.runs.create({ input: { name: 'Ada' }, version, waitS: 0 });
    if (!(run instanceof Run)) throw new Error('Expected a Run handle');
    const finished = await run.wait({ timeoutMs: 600_000 });
    await run.waitLogs({ timeoutMs: 60_000 });
    const logs = await run.logs(); // A link envelope, not the log bytes.
    return { finished, logs };
  } catch (error) {
    original = error;
    throw error;
  } finally {
    try {
      if (run && run.status !== 'done' && run.status !== 'failed') {
        await run.cancel();
        try {
          await run.wait({ timeoutMs: 60_000 });
        } catch (error) {
          if (!(error instanceof WaitFailureError)) throw error;
        }
      }
      if (version !== undefined) await fn.versions.delete(version);
      await fn.delete();
    } catch (cleanupError) {
      if (original === undefined) throw cleanupError;
      // Preserve the initial SDK error; cleanup did not establish terminal state.
      console.error('Compute cleanup failed; inspect and clean up function', fn.id);
    }
  }
}

if (require.main === module) {
  compute(new MobilerunSDK(), `sdk-example-${randomUUID()}`).catch((error: unknown) => {
    console.error(
      error instanceof Error ? error.message : 'Example failed',
      error instanceof APIError ? error.status : undefined,
    );
    process.exitCode = 1;
  });
}
