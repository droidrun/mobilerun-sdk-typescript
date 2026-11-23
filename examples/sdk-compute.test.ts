import type { FunctionRetrieveResponse } from '@mobilerun/sdk/resources/compute/functions';
import type { RunRetrieveResponse } from '@mobilerun/sdk/resources/compute/runs';
import type { SandboxRetrieveResponse } from '@mobilerun/sdk/resources/compute/sandboxes';
import type { ScheduledRunCreateResponse } from '@mobilerun/sdk/resources/workflows/flows/scheduled-runs';
import type { RoutineFileListResponse } from '@mobilerun/sdk/resources/routine-files';
import { createServer, Server } from 'node:http';
import { AddressInfo } from 'node:net';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  MobilerunSDK,
  ComputeFunction,
  Run,
  Sandbox,
  ScheduledRun,
  RoutineFile,
  WaitTimeoutError,
  BadRequestError,
} from '@mobilerun/sdk';
import { compute } from './compute';
import { computeSandbox } from './compute-sandbox';
import { scheduledRuns } from './scheduled-runs';
import { routineFiles } from './routine-files';
import { streamToken } from './stream-token';

// Literal HTTP envelopes from the public schemas; only the external service is faked.
const version = {
  functionId: 'fn-1',
  version: 2,
  status: 'ready',
  apiKey: { permissions: {} },
  inspectError: null,
  inputSchema: {},
  outputSchema: {},
  outputKind: 'value',
  manifest: { hosts: [], credentials: [], scopes: [] },
  sha256: '0000000000000000000000000000000000000000000000000000000000000000',
  sizeBytes: 12,
  runtimeVersion: 'r1',
  createdAt: '2026-11-23T00:00:00Z',
} satisfies NonNullable<FunctionRetrieveResponse['data']['latestVersion']>;
const fn = {
  id: 'fn-1',
  name: 'greeting',
  description: null,
  latestVersion: {
    functionId: 'fn-1',
    version: 2,
    status: 'ready',
    apiKey: { permissions: {} },
    inspectError: null,
    inputSchema: {},
    outputSchema: {},
    outputKind: 'value',
    manifest: { hosts: [], credentials: [], scopes: [] },
    sha256: '0000000000000000000000000000000000000000000000000000000000000000',
    sizeBytes: 12,
    runtimeVersion: 'r1',
    createdAt: '2026-11-23T00:00:00Z',
  },
  latestReadyVersion: 2,
  versionCount: 2,
  createdAt: '2026-11-23T00:00:00Z',
  updatedAt: '2026-11-23T00:00:00Z',
} satisfies FunctionRetrieveResponse['data'];
const running = {
  id: 'run-1',
  functionId: 'fn-1',
  version: 2,
  status: 'running',
  outcome: null,
  errorCode: null,
  logs: 'pending',
  startedAt: null,
  endedAt: null,
  durationMs: null,
  usedSeconds: null,
  input: { name: 'Ada' },
  result: null,
  stdout: '',
  stderr: '',
  truncated: false,
} satisfies RunRetrieveResponse['data'];
const done = {
  id: 'run-1',
  functionId: 'fn-1',
  version: 2,
  status: 'done',
  outcome: 'partial',
  errorCode: null,
  logs: 'available',
  startedAt: null,
  endedAt: null,
  durationMs: null,
  usedSeconds: null,
  input: { name: 'Ada' },
  result: { message: 'Hello, Ada!' },
  stdout: '',
  stderr: '',
  truncated: false,
} satisfies RunRetrieveResponse['data'];
const sandbox = {
  id: 'box-1',
  name: 'fixture',
  status: 'running',
  stopReason: null,
  createdAt: '2026-11-23T00:00:00Z',
  expiresAt: '2026-11-23T00:01:00Z',
  stoppedAt: null,
  idleTimeoutS: 60,
  allowedHosts: [],
  usedSeconds: 0,
} satisfies SandboxRetrieveResponse['data'];
const schedule = {
  id: 'schedule-1',
  flowId: 'flow-1',
  status: 'scheduled',
  runAt: '2026-11-23T12:00:00Z',
  payload: {},
  executionIds: [],
  skipReason: null,
  error: null,
  createdBy: 'user-1',
  createdAt: '2026-11-23T00:00:00Z',
  finishedAt: null,
  cancelledAt: null,
} satisfies ScheduledRunCreateResponse['data'];
const file = {
  id: 'file-1',
  filename: 'report.bin',
  folder: 'reports',
  kind: 'file',
  mimeType: 'application/octet-stream',
  sizeBytes: 4,
  flowId: 'flow-1',
  flowName: 'fixture',
  flowDeleted: false,
  executionId: 'exec-1',
  createdAt: null,
} satisfies RoutineFileListResponse['items'][number];
const pagination = { page: 1, pages: 1, hasNext: false, pageSize: 1, total: 1 };
const bytes = new Uint8Array([0, 255, 128, 10]);
type Reply = { body?: unknown; status?: number; headers?: Record<string, string> };
function transport(replies: Reply[]) {
  const requests: { url: URL; init: RequestInit }[] = [];
  const fetch: typeof globalThis.fetch = async (input, init) => {
    requests.push({ url: new URL(String(input)), init: init ?? {} });
    const reply = replies.shift();
    if (!reply) throw new Error('Unexpected HTTP request');
    return new Response(
      reply.body instanceof Uint8Array ? reply.body
      : reply.body === undefined ? null
      : JSON.stringify(reply.body),
      { status: reply.status ?? 200, headers: { 'content-type': 'application/json', ...reply.headers } },
    );
  };
  return {
    sdk: new MobilerunSDK({
      apiKey: 'contract-fixture',
      baseURL: 'https://api.example/v1',
      maxRetries: 0,
      fetch,
    }),
    requests,
    replies,
  };
}
const json = (body: unknown): Reply => ({ body });

test('compute example validates, inspects numeric versions, returns global Run and cleans up', async () => {
  const t = transport([
    json({ data: { id: 'validation-1', status: 'done', valid: true } }),
    json({ data: { id: 'validation-1', status: 'done', valid: true } }),
    json({ data: fn }),
    json({ data: fn }),
    json({ data: { source: 'greeting' } }),
    json({ data: version }),
    json({ data: version }),
    json({ data: { items: [version], pagination } }),
    json({ data: { items: [fn], pagination } }),
    json({ data: running }),
    json({ data: done }),
    json({ data: { url: 'https://storage.example/log', expiresAt: '2026-11-23T12:00:00Z', sizeBytes: 12 } }),
    { status: 204 },
    { status: 204 },
  ]);
  const result = await compute(t.sdk, 'greeting');
  expect(result.finished.data).toEqual(done); // done + partial is terminal success for wait.
  expect(t.requests.map((r) => r.url.pathname)).toEqual([
    '/v1/compute/functions/validations',
    '/v1/compute/functions/validations/validation-1',
    '/v1/compute/functions',
    '/v1/compute/functions/fn-1',
    '/v1/compute/functions/fn-1/source',
    '/v1/compute/functions/fn-1/versions',
    '/v1/compute/functions/fn-1/versions/2',
    '/v1/compute/functions/fn-1/versions',
    '/v1/compute/functions',
    '/v1/compute/functions/fn-1/runs',
    '/v1/compute/runs/run-1',
    '/v1/compute/runs/run-1/logs',
    '/v1/compute/functions/fn-1/versions/2',
    '/v1/compute/functions/fn-1',
  ]);
  expect(t.replies).toHaveLength(0);
  expect(t.sdk).not.toHaveProperty('functions');
  expect(t.sdk.api).not.toHaveProperty('functions');
  expect(t.sdk.compute.functions.fromId('fn-1')).toBeInstanceOf(ComputeFunction);
});

test('function run factory returns global Run and failed wait retains response', async () => {
  const failed = { data: { id: 'run-1', status: 'failed', outcome: 'failed' } };
  const t = transport([json({ data: running }), json(failed)]);
  const run = await t.sdk.compute.functions.fromId('fn-1').runs.create({ input: {}, waitS: 0 });
  expect(run).toBeInstanceOf(Run);
  await expect(run.wait()).rejects.toMatchObject({ response: failed, name: 'WaitFailureError' });
  expect(run.status).toBe('failed');
  expect(t.requests[1]?.url.pathname).toBe('/v1/compute/runs/run-1');
});

test('running wait spans its bounded caller deadline', async () => {
  jest.useFakeTimers();
  try {
    const t = transport([json({ data: running })]);
    const result = t.sdk.compute.runs.fromId('run-1').wait({ timeoutMs: 20, pollIntervalMs: 1000 });
    const assertion = expect(result).rejects.toBeInstanceOf(WaitTimeoutError);
    await jest.advanceTimersByTimeAsync(21);
    await assertion;
  } finally {
    jest.useRealTimers();
  }
});

test.each(['functions', 'runs', 'sandboxes'] as const)(
  '%s pages retain filters and produce handles',
  async (resource) => {
    const t = transport([
      json({
        data: {
          items: [
            resource === 'functions' ? fn
            : resource === 'runs' ? done
            : sandbox,
          ],
          pagination: { ...pagination, pages: 2, hasNext: true },
        },
      }),
      json({
        data: {
          items: [
            resource === 'functions' ? fn
            : resource === 'runs' ? done
            : sandbox,
          ],
          pagination: { ...pagination, page: 2, pages: 2 },
        },
      }),
    ]);
    const page = await t.sdk.compute[resource].list({ pageSize: 1 });
    const next = await page.getNextPage();
    expect(page.items[0]).toBeInstanceOf(
      { functions: ComputeFunction, runs: Run, sandboxes: Sandbox }[resource],
    );
    expect(next.items[0]).toBeInstanceOf(
      { functions: ComputeFunction, runs: Run, sandboxes: Sandbox }[resource],
    );
    expect(t.requests.map((r) => r.url.searchParams.get('page'))).toEqual(['1', '2']);
    expect(t.requests.map((r) => r.url.searchParams.get('pageSize'))).toEqual(['1', '1']);
  },
);

test('function update/get and child run pagination bind the stable function ID', async () => {
  const t = transport([
    json({ data: fn }),
    json({ data: fn }),
    json({ data: { items: [done], pagination: { ...pagination, pages: 2, hasNext: true } } }),
    json({ data: { items: [done], pagination: { ...pagination, page: 2, pages: 2 } } }),
  ]);
  const handle = await t.sdk.compute.functions.get('fn-1');
  expect(handle).toBeInstanceOf(ComputeFunction);
  await handle.update({ name: 'renamed' });
  const first = await handle.runs.list({ status: 'done', pageSize: 1 });
  expect((await first.getNextPage()).items[0]).toBeInstanceOf(Run);
  expect(t.requests.slice(2).map((r) => [r.url.pathname, r.url.searchParams.get('status')])).toEqual([
    ['/v1/compute/functions/fn-1/runs', 'done'],
    ['/v1/compute/functions/fn-1/runs', 'done'],
  ]);
});

test('sandbox example and binary/command methods use all nine operations', async () => {
  const t = transport([
    json({ data: sandbox }),
    json({ data: { items: [sandbox], pagination } }),
    json({ data: sandbox }),
    { status: 204 },
    json({ data: { id: 'cmd-1' } }),
    json({ data: { items: [] } }),
    json({ data: { id: 'cmd-1' } }),
    { status: 204 },
    { body: bytes, headers: { 'content-type': 'application/octet-stream' } },
    json({ data: { ...sandbox, status: 'stopped' } }),
  ]);
  expect(await computeSandbox(t.sdk)).toBeInstanceOf(Sandbox);
  const handle = t.sdk.compute.sandboxes.fromId('box-1');
  await handle.exec({ command: 'printf ok' });
  await handle.commands.list();
  await handle.commands.retrieve('cmd-1', { waitS: 0 });
  await handle.files.upload(bytes, { path: '/tmp/check.bin' });
  expect(await handle.files.download({ path: '/tmp/check.bin' })).toEqual(bytes);
  await handle.delete();
  expect(t.requests[7]?.init.body).toEqual(bytes);
  expect(new Headers(t.requests[7]?.init.headers).get('content-type')).toBe('application/octet-stream');
  expect(t.requests[7]?.url.searchParams.get('path')).toBe('/tmp/check.bin');
  expect(t.requests[6]?.url.pathname).toBe('/v1/compute/sandboxes/box-1/commands/cmd-1');
});

test('only create-owned sandbox handles dispose', async () => {
  const t = transport([
    json({ data: sandbox }),
    json({ data: sandbox }),
    json({ data: { items: [sandbox], pagination } }),
    { status: 202, body: { data: { ...sandbox, status: 'stopped' } } },
  ]);
  const owned = await t.sdk.compute.sandboxes.create();
  const got = await t.sdk.compute.sandboxes.get('box-1');
  const page = await t.sdk.compute.sandboxes.list();
  await got[Symbol.asyncDispose]();
  await page.items[0]![Symbol.asyncDispose]();
  await t.sdk.compute.sandboxes.fromId('box-1')[Symbol.asyncDispose]();
  await owned[Symbol.asyncDispose]();
  await owned[Symbol.asyncDispose]();
  expect(t.requests.map((r) => r.init.method)).toEqual(['POST', 'GET', 'GET', 'DELETE']);
});

test('scheduled example and from-ID cancellation preserve both bound IDs', async () => {
  const t = transport([
    json({ data: schedule }),
    json({ items: [schedule], pagination }),
    json({ data: { ...schedule, status: 'cancelled' } }),
    json({ items: [{ ...schedule, status: 'cancelled' }], pagination }),
    json({ data: { ...schedule, status: 'cancelled' } }),
  ]);
  expect(await scheduledRuns(t.sdk, 'flow-1')).toBeInstanceOf(ScheduledRun);
  const handle = t.sdk.workflows.flows.fromId('flow-1').scheduledRuns.fromId('schedule-1');
  await handle.cancel({ body: { flowId: 'wrong', scheduledRunId: 'wrong' } });
  expect(handle).not.toHaveProperty('refresh');
  expect(t.sdk.workflows.flows.fromId('flow-1').scheduledRuns).not.toHaveProperty('get');
  expect(t.requests[4]?.url.pathname).toBe('/v1/flows/flow-1/scheduled-runs/schedule-1/cancel');
});

test.each(['scheduled', 'files'])('%s root pages retain filters and snapshot fields', async (resource) => {
  const item = resource === 'files' ? file : schedule;
  const t = transport([
    json({ items: [item], pagination: { ...pagination, pages: 2, hasNext: true } }),
    json({ items: [item], pagination: { ...pagination, page: 2, pages: 2 } }),
  ]);
  const page =
    resource === 'files' ?
      await t.sdk.routineFiles.list({ executionId: 'exec-1', pageSize: 1 })
    : await t.sdk.workflows.flows.fromId('flow-1').scheduledRuns.list({ status: 'all', pageSize: 1 });
  const second = await page.getNextPage();
  expect(second.items[0]).toBeInstanceOf(resource === 'files' ? RoutineFile : ScheduledRun);
  expect(t.requests.map((r) => r.url.searchParams.get('page'))).toEqual(['1', '2']);
  expect(t.requests[1]?.url.searchParams.get(resource === 'files' ? 'executionId' : 'status')).toBe(
    resource === 'files' ? 'exec-1' : 'all',
  );
  expect(page.items[0]?.info).toEqual(item);
});

test('routine file deletes stay on their intended surfaces', async () => {
  const t = transport([{ status: 204 }, json({ deleted: 2 })]);
  const handle = t.sdk.routineFiles.fromId('file-1');
  expect(handle.info).toBeUndefined();
  expect(handle).not.toHaveProperty('refresh');
  expect(handle).not.toHaveProperty('deleteMany');
  expect(t.sdk.routineFiles).not.toHaveProperty('get');
  await handle.delete();
  await t.sdk.routineFiles.deleteMany({ folder: 'reports' });
  expect(t.requests.map((r) => r.url.pathname)).toEqual(['/v1/routine-files/file-1', '/v1/routine-files']);
});

async function listen(server: Server): Promise<string> {
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  return `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
}
async function close(server: Server) {
  await new Promise<void>((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
}

test('routine example downloads bytes through native cross-origin redirect without authorization', async () => {
  const storageHeaders: (string | undefined)[] = [];
  const storage = createServer((request, response) => {
    storageHeaders.push(request.headers.authorization);
    response.end(bytes);
  });
  const storageURL = await listen(storage);
  const api = createServer((request, response) => {
    if (request.url?.includes('/download')) {
      response.writeHead(302, { location: `${storageURL}/blob` });
      response.end();
      return;
    }
    response.setHeader('content-type', 'application/json');
    response.end(
      JSON.stringify(
        request.url?.includes('/folders') ? { items: [], pagination } : { items: [file], pagination },
      ),
    );
  });
  const baseURL = await listen(api);
  const dir = await mkdtemp(join(tmpdir(), 'sdk-routine-'));
  try {
    const sdk = new MobilerunSDK({ baseURL, apiKey: 'contract-fixture', maxRetries: 0 });
    expect(await routineFiles(sdk, 'exec-1', join(dir, 'file.bin'))).toEqual(bytes);
    expect(await readFile(join(dir, 'file.bin'))).toEqual(Buffer.from(bytes));
    expect(storageHeaders).toEqual([undefined]);
  } finally {
    await close(api);
    await close(storage);
    await rm(dir, { recursive: true });
  }
});

test('device binding preserves token parameters and top-level API without snapshot leakage', async () => {
  const token = { key: 'fixture-only-secret', keyId: 'key-1', expiresAt: '2026-11-23T12:00:00Z' };
  const t = transport([json(token), { status: 204 }, json(token), { status: 204 }]);
  await streamToken(t.sdk, 'device-1', ['https://app.example']);
  const device = t.sdk.devices.fromId('device-1');
  await device.createStreamToken({ ttlSeconds: 120 }, { body: { deviceId: 'wrong', ttlSeconds: 120 } });
  await t.sdk.streamTokens.delete('key-1');
  expect(JSON.parse(String(t.requests[0]?.init.body))).toEqual({
    deviceId: 'device-1',
    ttlSeconds: 120,
    allowedOrigins: ['https://app.example'],
  });
  expect(JSON.parse(String(t.requests[2]?.init.body))).toEqual({ deviceId: 'device-1', ttlSeconds: 120 });
  expect(device.info).toBeUndefined();
  expect(JSON.stringify(device)).not.toContain(token.key);
  expect(String(device)).not.toContain(token.key);
  expect(typeof t.sdk.streamTokens.create).toBe('function');
});

test('scenario cleanup preserves the original HTTP error when cancellation fails', async () => {
  const t = transport([
    json({ data: sandbox }),
    { status: 400, body: { message: 'initial failure' } },
    { status: 400, body: { message: 'cleanup failure' } },
  ]);
  const log = jest.spyOn(console, 'error').mockImplementation(() => {});
  try {
    await expect(computeSandbox(t.sdk)).rejects.toMatchObject({
      status: 400,
      message: expect.stringContaining('initial failure'),
    });
    expect(t.requests[2]?.init.method).toBe('DELETE');
  } finally {
    log.mockRestore();
  }
});

test.each([
  ['compute', (sdk: MobilerunSDK) => compute(sdk, 'greeting')],
  ['scheduled', (sdk: MobilerunSDK) => scheduledRuns(sdk, 'flow-1')],
  ['stream', (sdk: MobilerunSDK) => streamToken(sdk, 'device-1')],
  ['routine', (sdk: MobilerunSDK) => routineFiles(sdk, 'exec-1', '/unused')],
] as const)('%s scenario propagates native HTTP failure', async (_name, scenario) => {
  const t = transport([{ status: 400, body: { message: 'initial failure' } }]);
  await expect(scenario(t.sdk)).rejects.toBeInstanceOf(BadRequestError);
});

test('global Run get/refresh and numeric object version retrieval use their own URLs', async () => {
  const t = transport([json({ data: running }), json({ data: done }), json({ data: version })]);
  const run = await t.sdk.compute.runs.get('run-1');
  expect(run).toBeInstanceOf(Run);
  await run.refresh();
  expect(run.status).toBe('done');
  await t.sdk.compute.functions.fromId('fn-1').versions.retrieve(2);
  expect(t.requests.map((r) => r.url.pathname)).toEqual([
    '/v1/compute/runs/run-1',
    '/v1/compute/runs/run-1',
    '/v1/compute/functions/fn-1/versions/2',
  ]);
});

test('compute failure cancels and confirms terminal state before deleting its version and function', async () => {
  const t = transport([
    json({ data: { id: 'validation-1', status: 'done', valid: true } }),
    json({ data: { id: 'validation-1', status: 'done', valid: true } }),
    json({ data: fn }),
    json({ data: fn }),
    json({ data: { source: 'greeting' } }),
    json({ data: version }),
    json({ data: version }),
    json({ data: { items: [version], pagination } }),
    json({ data: { items: [fn], pagination } }),
    json({ data: running }),
    { status: 400, body: { message: 'initial run failure' } },
    json({ data: running }),
    json({ data: { ...done, status: 'failed', outcome: 'failed', errorCode: 'cancelled' } }),
    { status: 204 },
    { status: 204 },
  ]);
  await expect(compute(t.sdk, 'greeting')).rejects.toMatchObject({
    status: 400,
    message: expect.stringContaining('initial run failure'),
  });
  expect(t.requests.slice(11).map((r) => [r.init.method, r.url.pathname])).toEqual([
    ['POST', '/v1/compute/runs/run-1/cancel'],
    ['GET', '/v1/compute/runs/run-1'],
    ['DELETE', '/v1/compute/functions/fn-1/versions/2'],
    ['DELETE', '/v1/compute/functions/fn-1'],
  ]);
});
