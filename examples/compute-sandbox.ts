// Compute charges apply until stopped. Run: pnpm tsn examples/compute-sandbox.ts
import { APIError, MobilerunSDK } from '@mobilerun/sdk';

export async function computeSandbox(sdk: MobilerunSDK) {
  const sandbox = await sdk.compute.sandboxes.create({ timeoutS: 60, idleTimeoutS: 60 });
  let failed = false;
  try {
    await sdk.compute.sandboxes.list();
    return await sdk.compute.sandboxes.get(sandbox.id);
  } catch (error) {
    failed = true;
    throw error;
  } finally {
    try {
      await sandbox.delete();
    } catch (error) {
      if (!failed) throw error;
      console.error('Sandbox cleanup failed for', sandbox.id);
    }
  }
}

if (require.main === module) {
  computeSandbox(new MobilerunSDK()).catch((error: unknown) => {
    console.error(
      error instanceof Error ? error.message : 'Example failed',
      error instanceof APIError ? error.status : undefined,
    );
    process.exitCode = 1;
  });
}
