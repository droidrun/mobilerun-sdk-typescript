# Mobilerun TypeScript API Library

[![NPM version](<https://img.shields.io/npm/v/@mobilerun/sdk.svg?label=npm%20(stable)>)](https://npmjs.org/package/@mobilerun/sdk) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@mobilerun/sdk)

This library provides convenient access to the Mobilerun REST API from server-side TypeScript or JavaScript.

The full API of this library can be found in [api.md](api.md).

## Installation

```sh
npm install @mobilerun/sdk
```

## Usage

Creating a device uses device minutes until you stop or terminate it. This example selects minute billing and stops the device at the end.

```ts
import { MobilerunSDK } from '@mobilerun/sdk';

const sdk = new MobilerunSDK();
const device = await sdk.devices.create({ billing: 'minute', deviceType: 'android_cloud_phone' });
try {
  const task = await device.run({ task: 'Open Settings' });
  const result = await task.wait();
  console.log(result.status, device.name);
} finally {
  await device.stop();
}
```

Stopping requires a device type that supports stop; otherwise use `device.terminate()`.

### Full client (`.api`)

The full API of this library can be found in [api.md](api.md).

<!-- prettier-ignore -->
```js
import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: process.env['MOBILERUN_API_KEY'], // This is the default and can be omitted
});

const devices = await client.devices.list();

console.log(devices.items);
```

### Request & Response types

This library includes TypeScript definitions for all request params and response fields. You may import and use them like so:

<!-- prettier-ignore -->
```ts
import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: process.env['MOBILERUN_API_KEY'], // This is the default and can be omitted
});

const devices: Mobilerun.DeviceListResponse = await client.devices.list();
```

Documentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.

## File uploads

Request parameters that correspond to file uploads can be passed in many different forms:

- `File` (or an object with the same structure)
- a `fetch` `Response` (or an object with the same structure)
- an `fs.ReadStream`
- the return value of our `toFile` helper

```ts
import fs from 'fs';
import Mobilerun, { toFile } from '@mobilerun/sdk';

const client = new Mobilerun();

// If you have access to Node `fs` we recommend using `fs.createReadStream()`:
await client.devices.files.upload('deviceId', {
  path: 'path',
  file: fs.createReadStream('/path/to/file'),
});

// Or if you have the web `File` API you can pass a `File` instance:
await client.devices.files.upload('deviceId', {
  path: 'path',
  file: new File(['my bytes'], 'file'),
});

// You can also pass a `fetch` `Response`:
await client.devices.files.upload('deviceId', {
  path: 'path',
  file: await fetch('https://somesite/file'),
});

// Finally, if none of the above are convenient, you can use our `toFile` helper:
await client.devices.files.upload('deviceId', {
  path: 'path',
  file: await toFile(Buffer.from('my bytes'), 'file'),
});
await client.devices.files.upload('deviceId', {
  path: 'path',
  file: await toFile(new Uint8Array([0, 1, 2]), 'file'),
});
```

## Object API

The object API is additive. Existing client APIs are unchanged and the complete raw client is available as `.api`. Properties such as `device.name` and `task.status` read the last response in `info` without making a request. Call `refresh()` to update it. Object-layer logs show class, ID and declared fields, never `info` or the client; the explicit `.api` escape hatch stays raw. Waits poll with bounded requests and back off on 408/409/429/5xx.

### Objects

| Object             | How to get it                    | Main methods                                                                               |
| ------------------ | -------------------------------- | ------------------------------------------------------------------------------------------ |
| Device             | `sdk.devices`                    | `get, list, create, run, screenshot, recordings`                                           |
| Task               | `sdk.tasks / device.run()`       | `run, get, list, wait, waitOutput`                                                         |
| App                | `sdk.apps`                       | `get, list, upload, delete, listVersions`                                                  |
| ProxyConfiguration | `sdk.proxies`                    | `get, list, create, update, delete`                                                        |
| Trigger            | `sdk.workflows.triggers`         | `get, list, create, update, delete, fire`                                                  |
| WorkflowAction     | `sdk.workflows.actions`          | `get, list, create, update, delete`                                                        |
| CatalogEntry       | `sdk.workflows.actionCatalog`    | `get, list`                                                                                |
| Flow               | `sdk.workflows.flows`            | `get, list, create, clone, run, verify`                                                    |
| Execution          | `sdk.workflows.executions`       | `get, list, wait`                                                                          |
| Agent              | `sdk.agents`                     | `create, list, profile.update, files.list, conversations, routines, requests.listForAgent` |
| AgentRequest       | `sdk.agents.requests`            | `get, list, retrieveBySession`                                                             |
| AgentFile          | `sdk.files / agent.files.list()` | `upload, list, update, delete, confirm, cancelPending, download`                           |
| ConnectUser        | `sdk.connect.users`              | `get, list, create, update, delete, listConnections`                                       |
| ConnectProxy       | `sdk.connect.proxies`            | `get, list, buy, update, ping, ensureHealthy, checkout, cancel`                            |
| CredentialPackage  | `sdk.credentials.packages`       | `get, list, create, credentials`                                                           |
| Credential         | `package.credentials`            | `create, list, delete, fields`                                                             |
| NumberMessage      | `sdk.messages`                   | `get, list`                                                                                |
| Mailbox            | `sdk.mailboxes`                  | `get, list, create, waitForOtp, messages`                                                  |
| MailboxMessage     | `mailbox.messages`               | `get, list`                                                                                |
| PhoneNumber        | `sdk.numbers`                    | `get, list, create, send, messages.list, waitUntilActive`                                  |
| Webhook            | `sdk.webhooks`                   | `get, list, create, verify, update, delete, test, rotateSecret`                            |
| TrafficSession     | `device.trafficSessions`         | `create, get, list, delete`                                                                |
| MailboxConnection  | `sdk.mailboxes.connections`      | `create, get`                                                                              |
| SavedScreenshot    | `device.screenshots`             | `list, image, delete`                                                                      |
| WebhookDelivery    | `webhook.deliveries`             | `get, list`                                                                                |
| Recording          | `device.recordings`              | `get, list, start, stop, wait, delete, trajectory, video, screenshots`                     |

Every manager has `fromId(id)` / `from_id(id)` for an unfetched handle. Child managers carry their parent context. Agent and AgentFile have no get or refresh: their fields carry only the last create/list snapshot; fromId/from_id handles have no data. Agent profile.update returns a fresh Agent and leaves the original snapshot unchanged. Package get retains the full credentials-array response and takes its canonical name from the first row; an empty response keeps the requested name. Credential list maps that same package route to child handles. Recording start is its only factory and owns stop on scope exit; handles from get/list/fromId never stop automatically. Recording video/trajectory and AgentFile download return bytes. SavedScreenshot.image returns bytes; Screenshot remains the capture result returned by device.screenshot().

Object purchase methods keep the API's own operation name:

- Device.create uses device minutes until the device is stopped or terminated.
- ConnectProxy.buy and ConnectProxy.checkout can incur upstream proxy charges.
- PhoneNumber.create can incur upstream number rental charges.
- Mailbox.create and Mailbox.restart can incur upstream mailbox rental charges; included capacity may apply.

### Upload an app

Uploading uses storage quota and may incur storage charges. A string upload input always names a local file path. Paths stream from disk with a measured Content-Length; bytes and blobs can specify a filename and content type with `{ data, filename, contentType }`. `sdk.files.upload({ file: 'notes.txt' })` uploads an agent file. Cleanup runs best-effort only for definite failures before confirmation; ambiguous confirm failures and failures after successful confirmation do not mark the upload failed; `UploadError.cause` retains the original failure.

```ts
import { MobilerunSDK } from '@mobilerun/sdk';

const sdk = new MobilerunSDK();
const app = await sdk.apps.upload({
  bundleId: 'com.example.app',
  displayName: 'Example',
  versionCode: 1,
  versionName: '1.0',
  files: ['app.apk'],
});
console.log(app.id);
```

### Verify webhook signatures

`invalid_json` means the signature is valid but the body is not UTF-8 JSON; respond with HTTP 400 instead of 401.

Verify the exact raw body before JSON parsing. Deduplicate replays within the tolerance window using an ID inside the signed body, never the unsigned `x-mobilerun-event-id` header. The helper needs the endpoint signing secret, but no API key. It checks both past and future timestamps with a five-minute tolerance. `sdk.webhooks.verify` offers the same verification. Failures raise `WebhookVerificationError` with a `reason` code. TypeScript requires `globalThis.crypto` (Node 19+ or modern runtimes). `now` is epoch milliseconds; `toleranceSeconds` overrides the tolerance in seconds.

```ts
import { verifyWebhook } from '@mobilerun/sdk';

export async function POST(request: Request): Promise<Response> {
  const body = new Uint8Array(await request.arrayBuffer());
  const event = await verifyWebhook({
    body,
    headers: request.headers,
    secret: process.env['WEBHOOK_SECRET']!,
  });
  return Response.json(event);
}
```

### Existing devices and screenshots

```ts
import { MobilerunSDK } from '@mobilerun/sdk';

const sdk = new MobilerunSDK();
const device = await sdk.devices.get('device-id');
await device.home();
await device.openApp('com.android.settings');
await device.back();
await device.stopApp('com.android.settings');
await device.swipe(300, 800, 300, 200, 400);
const screenshot = await device.screenshot();
await screenshot.save('screenshot.png');
for await (const existing of sdk.devices.list()) {
  console.log(existing.id, existing.name, existing.state);
}
```

### Park and wake a device

```ts
import { MobilerunSDK } from '@mobilerun/sdk';

const device = new MobilerunSDK().devices.fromId('device-id');
await device.stop();
// Later, when the customer returns:
await device.resume();
```

Both methods return the handle once the device has reached its target state: stopped or ready.

### Typed task output

Install Zod 4 to use the optional adapter. `waitOutput` validates the output and returns `WaitOutput` containing `output` and the raw `response`. Validation failures raise `OutputValidationError` with `objectId` and the response.

```ts
import { MobilerunSDK } from '@mobilerun/sdk';
import { output } from '@mobilerun/sdk/zod';
import { z } from 'zod/v4';

const sdk = new MobilerunSDK();
const device = await sdk.devices.get('device-id');
const task = await device.run({
  task: 'Read the visible heading',
  outputSchema: output(z.object({ heading: z.string() })),
});
const result = await task.waitOutput();
const heading: string = result.output.heading;
console.log(heading);
```

### Recording uploads

```ts
import { writeFile } from 'node:fs/promises';
import { MobilerunSDK } from '@mobilerun/sdk';

const sdk = new MobilerunSDK();
const device = sdk.devices.fromId('device-id');
const recording = await device.recordings.start();
const task = await device.run({ task: 'Open Settings' });
await task.wait();
await recording.stop();
await recording.wait();
const video = await recording.video();
await writeFile('recording.mp4', video);
```

### Stream a device in a web app

Install the React streaming package with `npm install @mobilerun/react`.

On your server, resolve a device the authenticated end user may see; never send the API key to the browser, only that device's `streamUrl` and `streamToken`.

```ts
import { MobilerunSDK } from '@mobilerun/sdk';

const sdk = new MobilerunSDK();
// Call from your authenticated route handler after checking device access.
export async function getDeviceStream(deviceId: string) {
  const device = await sdk.devices.get(deviceId);
  if (!device.info) throw new Error('Device info is unavailable');
  return { streamUrl: device.info.streamUrl, streamToken: device.info.streamToken };
}
```

Pass the returned values to your client component:

```tsx
import { DeviceStream } from '@mobilerun/react';
import '@mobilerun/react/styles.css';

export function DevicePanel({ streamUrl, streamToken }: { streamUrl: string; streamToken?: string }) {
  return <DeviceStream streamUrl={streamUrl} streamToken={streamToken} hasControl />;
}
```

See the [React package README](https://github.com/droidrun/mobilerun-react#readme) for hooks (`useDeviceStream`), reconnects and task approvals.

### Automatic cleanup

If readiness inside `create` fails, the new resource is disposed best-effort by default; set `disposeOnReadyFailure: false` to retain it. `ObjectReadyError` keeps the handle and readiness cause, with `disposed` and `cleanupError` reporting cleanup.

Only lifecycle factories own their resources: `create` normally, and `Recording.start` for recordings. `await using` terminates that device on exit. Handles from `get`, `fromId`, lists and returned task handles do not clean up automatically. `await using` needs TypeScript explicit resource management support and a compatible runtime.

```ts
import { MobilerunSDK } from '@mobilerun/sdk';

const sdk = new MobilerunSDK();
async function runOnce() {
  await using device = await sdk.devices.create({ billing: 'minute', deviceType: 'android_cloud_phone' });
  await (await device.run({ task: 'Open Settings' })).wait();
}
```

Examples: see [`examples/`](https://github.com/droidrun/mobilerun-sdk-typescript/tree/HEAD/examples)

## Handling errors

When the library is unable to connect to the API,
or if the API returns a non-success status code (i.e., 4xx or 5xx response),
a subclass of `APIError` will be thrown:

<!-- prettier-ignore -->
```ts
const devices = await client.devices.list().catch(async (err) => {
  if (err instanceof Mobilerun.APIError) {
    console.log(err.status); // 400
    console.log(err.name); // BadRequestError
    console.log(err.headers); // {server: 'nginx', ...}
  } else {
    throw err;
  }
});
```

Error codes are as follows:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequestError`          |
| 401         | `AuthenticationError`      |
| 403         | `PermissionDeniedError`    |
| 404         | `NotFoundError`            |
| 422         | `UnprocessableEntityError` |
| 429         | `RateLimitError`           |
| >=500       | `InternalServerError`      |
| N/A         | `APIConnectionError`       |

### Retries

Certain errors will be automatically retried 2 times by default, with a short exponential backoff.
Connection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,
429 Rate Limit, and >=500 Internal errors will all be retried by default.

You can use the `maxRetries` option to configure or disable this:

<!-- prettier-ignore -->
```js
// Configure the default for all requests:
const client = new Mobilerun({
  maxRetries: 0, // default is 2
});

// Or, configure per-request:
await client.devices.list({
  maxRetries: 5,
});
```

### Timeouts

Requests time out after 1 minute by default. You can configure this with a `timeout` option:

<!-- prettier-ignore -->
```ts
// Configure the default for all requests:
const client = new Mobilerun({
  timeout: 20 * 1000, // 20 seconds (default is 1 minute)
});

// Override per-request:
await client.devices.list({
  timeout: 5 * 1000,
});
```

On timeout, an `APIConnectionTimeoutError` is thrown.

Note that requests which time out will be [retried twice by default](#retries).

## Advanced Usage

### Accessing raw Response data (e.g., headers)

The "raw" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.
This method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.

You can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.
Unlike `.asResponse()` this method consumes the body, returning once it is parsed.

<!-- prettier-ignore -->
```ts
const client = new Mobilerun();

const response = await client.devices.list().asResponse();
console.log(response.headers.get('X-My-Header'));
console.log(response.statusText); // access the underlying Response object

const { data: devices, response: raw } = await client.devices.list().withResponse();
console.log(raw.headers.get('X-My-Header'));
console.log(devices.items);
```

### Logging

> [!IMPORTANT]
> All log messages are intended for debugging only. The format and content of log messages
> may change between releases.

#### Log levels

The log level can be configured in two ways:

1. Via the `MOBILERUN_LOG` environment variable
2. Using the `logLevel` client option (overrides the environment variable if set)

```ts
import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  logLevel: 'debug', // Show all log messages
});
```

Available log levels, from most to least verbose:

- `'debug'` - Show debug messages, info, warnings, and errors
- `'info'` - Show info messages, warnings, and errors
- `'warn'` - Show warnings and errors (default)
- `'error'` - Show only errors
- `'off'` - Disable all logging

At the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.
Some authentication-related headers are redacted, but sensitive data in request and response bodies
may still be visible.

#### Custom logger

By default, this library logs to `globalThis.console`. You can also provide a custom logger.
Most logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.

When providing a custom logger, the `logLevel` option still controls which messages are emitted, messages
below the configured level will not be sent to your logger.

```ts
import Mobilerun from '@mobilerun/sdk';
import pino from 'pino';

const logger = pino();

const client = new Mobilerun({
  logger: logger.child({ name: 'Mobilerun' }),
  logLevel: 'debug', // Send all messages to pino, allowing it to filter
});
```

### Making custom/undocumented requests

This library is typed for convenient access to the documented API. If you need to access undocumented
endpoints, params, or response properties, the library can still be used.

#### Undocumented endpoints

To make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.
Options on the client, such as retries, will be respected when making these requests.

```ts
await client.post('/some/path', {
  body: { some_prop: 'foo' },
  query: { some_query_arg: 'bar' },
});
```

#### Undocumented request params

To make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented
parameter. This library doesn't validate at runtime that the request matches the type, so any extra values you
send will be sent as-is.

```ts
client.devices.list({
  // ...
  // @ts-expect-error baz is not yet public
  baz: 'undocumented option',
});
```

For requests with the `GET` verb, any extra params will be in the query, all other requests will send the
extra param in the body.

If you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request
options.

#### Undocumented response properties

To access undocumented response properties, you may access the response object with `// @ts-expect-error` on
the response object, or cast the response object to the requisite type. Like the request params, we do not
validate or strip extra properties from the response from the API.

### Customizing the fetch client

By default, this library expects a global `fetch` function is defined.

If you want to use a different `fetch` function, you can either polyfill the global:

```ts
import fetch from 'my-fetch';

globalThis.fetch = fetch;
```

Or pass it to the client:

```ts
import Mobilerun from '@mobilerun/sdk';
import fetch from 'my-fetch';

const client = new Mobilerun({ fetch });
```

### Fetch options

If you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)

```ts
import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  fetchOptions: {
    // `RequestInit` options
  },
});
```

#### Configuring proxies

To modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy
options to requests:

<img src="https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg" align="top" width="18" height="21"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>

```ts
import Mobilerun from '@mobilerun/sdk';
import * as undici from 'undici';

const proxyAgent = new undici.ProxyAgent('http://localhost:8888');
const client = new Mobilerun({
  fetchOptions: {
    dispatcher: proxyAgent,
  },
});
```

<img src="https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg" align="top" width="18" height="21"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>

```ts
import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  fetchOptions: {
    proxy: 'http://localhost:8888',
  },
});
```

<img src="https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg" align="top" width="18" height="21"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>

```ts
import Mobilerun from 'npm:@mobilerun/sdk';

const httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });
const client = new Mobilerun({
  fetchOptions: {
    client: httpClient,
  },
});
```

## Frequently Asked Questions

## Semantic versioning

This package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:

1. Changes that only affect static types, without breaking runtime behavior.
2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_
3. Changes that we do not expect to impact the vast majority of users in practice.

We take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.

We are keen for your feedback; please open an [issue](https://www.github.com/droidrun/mobilerun-sdk-typescript/issues) with questions, bugs, or suggestions.

## Requirements

TypeScript >= 4.9 is supported.

The following runtimes are supported:

- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)
- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.
- Deno v1.28.0 or higher.
- Bun 1.0 or later.
- Cloudflare Workers.
- Vercel Edge Runtime.
- Jest 28 or greater with the `"node"` environment (`"jsdom"` is not supported at this time).
- Nitro v2.6 or greater.

Note that React Native is not supported at this time.

If you are interested in other runtime environments, please open or upvote an issue on GitHub.

## Contributing

See [the contributing documentation](./CONTRIBUTING.md).
