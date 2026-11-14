// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIUserAbortError, APIConnectionError, APIConnectionTimeoutError, APIError } from '../core/error';
import type { RequestOptions } from '../internal/request-options';
import { toBase64 } from '../internal/utils/base64';
import { buildHeaders } from '../internal/headers';

export function headerBoolean(value: string | null): boolean | undefined {
  return (
    value === 'true' ? true
    : value === 'false' ? false
    : undefined
  );
}

export class BinaryResult {
  constructor(
    readonly bytes: Uint8Array,
    readonly contentType: string | undefined,
  ) {}
  base64(): string {
    let encoded = '';
    // Multiples of three preserve grouping; bounded chunks also work with browser btoa.
    for (let offset = 0; offset < this.bytes.length; offset += 24576)
      encoded += toBase64(this.bytes.subarray(offset, offset + 24576));
    return encoded;
  }
  dataUrl(): string {
    return 'data:' + (this.contentType ?? 'application/octet-stream') + ';base64,' + this.base64();
  }
  blob(): Blob {
    return new Blob([this.bytes], { type: this.contentType ?? 'application/octet-stream' });
  }
  async save(path: string): Promise<string> {
    let fs: { writeFile(path: string, data: Uint8Array): Promise<void> };
    try {
      const moduleName = 'node:fs/promises';
      fs = await import(/* webpackIgnore: true */ /* @vite-ignore */ moduleName);
    } catch {
      throw new Error('Saving requires a local file system; use bytes or blob() in this runtime.');
    }
    await fs.writeFile(path, this.bytes);
    return path;
  }
}

export interface ObjectPage<T, R> {
  items: T[];
  response: R;
}
export class PagedObjectPage<T, R> implements ObjectPage<T, R>, AsyncIterable<T> {
  constructor(
    readonly items: T[],
    readonly response: R,
    private pagination?: {
      next: () => number | string | undefined;
      load(page: number | string | undefined): Promise<PagedObjectPage<T, R>>;
    },
  ) {}
  hasNextPage(): boolean {
    return this.pagination?.next() !== undefined;
  }
  async getNextPage(): Promise<PagedObjectPage<T, R>> {
    const next = this.pagination?.next();
    if (next === undefined) throw new Error('No next object page');
    return this.pagination!.load(next);
  }
  async *[Symbol.asyncIterator](): AsyncGenerator<T> {
    let page: PagedObjectPage<T, R> = this;
    while (true) {
      yield* page.items;
      if (!page.hasNextPage()) return;
      page = await page.getNextPage();
    }
  }
}

export class ObjectPager<T, R> implements PromiseLike<PagedObjectPage<T, R>>, AsyncIterable<T> {
  private first: Promise<PagedObjectPage<T, R>> | undefined;
  constructor(private load: () => Promise<PagedObjectPage<T, R>>) {}
  private get(): Promise<PagedObjectPage<T, R>> {
    return (this.first ??= Promise.resolve()
      .then(() => this.load())
      .catch((error) => {
        this.first = undefined;
        throw error;
      }));
  }
  catch<TResult = never>(
    onrejected?: ((reason: unknown) => TResult | PromiseLike<TResult>) | null,
  ): Promise<PagedObjectPage<T, R> | TResult> {
    return this.get().catch(onrejected);
  }
  finally(onfinally?: (() => void) | null): Promise<PagedObjectPage<T, R>> {
    return this.get().finally(onfinally);
  }
  then<TResult1 = PagedObjectPage<T, R>, TResult2 = never>(
    onfulfilled?: ((value: PagedObjectPage<T, R>) => TResult1 | PromiseLike<TResult1>) | null,
    onrejected?: ((reason: unknown) => TResult2 | PromiseLike<TResult2>) | null,
  ): Promise<TResult1 | TResult2> {
    return this.get().then(onfulfilled, onrejected);
  }
  async *[Symbol.asyncIterator](): AsyncGenerator<T> {
    yield* await this;
  }
}

export function nextObjectPage(
  current: number | undefined,
  hasNext: boolean | undefined,
  total: number | undefined,
  requested: number | string | undefined,
): number | undefined {
  if (
    typeof requested !== 'number' ||
    !Number.isInteger(requested) ||
    requested < 1 ||
    !Number.isInteger(current) ||
    current! < 0 ||
    !Number.isInteger(total) ||
    total! < 0 ||
    typeof hasNext !== 'boolean'
  )
    throw new Error('Invalid object pagination metadata');
  if (!hasNext || current! >= total!) return undefined;
  if (current! < requested) throw new Error('Object pagination made no forward progress');
  return current! + 1;
}
export function nextObjectCursor(
  next: unknown,
  requested: number | string | undefined,
  seen: ReadonlySet<string>,
): string | undefined {
  if (next === undefined || next === null || next === '') return undefined;
  if (typeof next !== 'string') throw new Error('Invalid object cursor pagination metadata');
  if (next === requested || seen.has(next)) throw new Error('Object pagination made no forward progress');
  return next;
}
export function pageRequestOptions(
  options: RequestOptions | undefined,
  name: string,
  page: number | string | undefined,
  query: Record<string, unknown>,
): RequestOptions {
  return {
    ...options,
    query: { ...query, ...(options?.query as Record<string, unknown> | undefined), [name]: page },
  };
}

export function createRequestOptions(
  options:
    | (RequestOptions & {
        waitReady?: boolean;
        readyTimeoutMs?: number;
        disposeOnReadyFailure?: boolean;
        wait?: boolean;
        waitTimeoutMs?: number;
      })
    | undefined,
): RequestOptions | undefined {
  if (!options) return undefined;
  if (
    options.readyTimeoutMs !== undefined &&
    (!Number.isFinite(options.readyTimeoutMs) || options.readyTimeoutMs <= 0)
  )
    throw new RangeError('readyTimeoutMs must be finite and positive');
  if (
    options.waitTimeoutMs !== undefined &&
    (!Number.isFinite(options.waitTimeoutMs) || options.waitTimeoutMs <= 0)
  )
    throw new RangeError('waitTimeoutMs must be finite and positive');
  const {
    wait: _wait,
    waitTimeoutMs: _waitTimeoutMs,
    waitReady: _waitReady,
    readyTimeoutMs: _readyTimeoutMs,
    disposeOnReadyFailure: _disposeOnReadyFailure,
    ...requestOptions
  } = options;
  return requestOptions;
}

export function boundOptions(
  options: RequestOptions | undefined,
  bindings: ReadonlyArray<{ name: string; location: string; value: unknown }>,
): RequestOptions | undefined {
  if (!options) return options;
  const result = { ...options };
  for (const binding of bindings) {
    if (binding.location === 'path' && options.path !== undefined)
      throw new TypeError('A bound path cannot be overridden');
    if (binding.location === 'body' || binding.location === 'query') {
      const key = binding.location;
      const extra = result[key];
      if (extra !== undefined && extra !== null) {
        if (typeof extra !== 'object' || Array.isArray(extra))
          throw new TypeError('Bound parameters require object request options');
        result[key] = { ...extra, [binding.name]: binding.value };
      }
      if (key === 'body' && options.fetchOptions?.body !== undefined)
        throw new TypeError('A bound body cannot be overridden by fetchOptions');
    }
    if (binding.location === 'header')
      result.headers = buildHeaders([
        result.headers,
        { [binding.name]: binding.value == null ? binding.value : String(binding.value) },
      ]).values;
  }
  return result;
}

export class WaitError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'WaitError';
  }
}
export interface OutputSchema<T> {
  jsonSchema: Record<string, unknown>;
  parse(value: unknown): T;
}
export interface WaitOutput<T, R> {
  output: T;
  response: R;
}
export type OutputSchemaValue<S> = S extends OutputSchema<infer T> ? T : never;
export function isOutputSchema<T>(value: unknown): value is OutputSchema<T> {
  return (
    typeof value === 'object' &&
    value !== null &&
    'jsonSchema' in value &&
    'parse' in value &&
    typeof value.parse === 'function'
  );
}
export class OutputValidationError<R = unknown> extends WaitError {
  readonly cause: unknown;
  constructor(
    readonly objectId: string,
    readonly response: R,
    readonly parserError: unknown,
  ) {
    super(
      'Output validation failed: ' +
        (parserError instanceof Error ? parserError.message : String(parserError)),
    );
    this.cause = parserError;
    this.name = 'OutputValidationError';
  }
}
export function parseOutput<T, R>(
  schema: OutputSchema<T>,
  value: unknown,
  response: R,
  objectId: string,
  objectName = 'object',
): WaitOutput<T, R> {
  try {
    if (value === undefined) throw new TypeError('Completed ' + objectName + ' has no output');
    return { output: schema.parse(value), response };
  } catch (error) {
    throw new OutputValidationError(objectId, response, error);
  }
}

/** Failed readiness after create disposes the new resource by default when disposal is declared.
 * The error retains the handle, readiness cause, disposal status and any cleanup error; callers can opt out per create.
 */
export class ObjectReadyError<T = unknown> extends Error {
  constructor(
    readonly object: T,
    readonly id: string,
    readonly cause: unknown,
    readonly disposed: boolean = false,
    readonly cleanupError: unknown = undefined,
  ) {
    super('Object readiness failed after creation');
    this.name = 'ObjectReadyError';
  }
}
export class WaitTimeoutError extends WaitError {
  constructor(readonly cause: unknown = undefined) {
    super('Wait timed out');
    this.name = 'WaitTimeoutError';
  }
}
export class WaitFailureError<T = unknown> extends WaitError {
  constructor(readonly response: T) {
    super('Object entered a failure state');
    this.name = 'WaitFailureError';
  }
}
export type ReadyOptions = Omit<WaitOptions, 'pollIntervalMs'>;
export interface WaitOptions extends RequestOptions {
  timeoutMs?: number | undefined;
  pollIntervalMs?: number | undefined;
  signal?: AbortSignal | undefined;
}

export function conditionMet(value: unknown, until: 'present' | 'non_empty'): boolean {
  if (until === 'present') return value !== undefined && value !== null;
  return (typeof value === 'string' || Array.isArray(value)) && value.length > 0;
}

export const SINGLE_CALL_INTERVAL_MS = 1;
const READINESS_RETRY_STATUSES: readonly number[] = [408, 409, 429];
const READINESS_IMMEDIATE_STATUSES: readonly number[] = [408];
const READINESS_SERVER_ERROR_MIN = 500;
const READINESS_BACKOFF_MS = 500;
const READINESS_MAX_BACKOFF_MS = 8000;
const READINESS_JITTER_MIN = 0.75;
export function retryReadiness(error: unknown, attempt = 0): number | undefined {
  if (error instanceof APIConnectionTimeoutError) return 0;
  if (!(error instanceof APIError)) return undefined;
  const hint = error.headers?.get('x-should-retry');
  if (hint === 'false') return undefined;
  if (
    hint !== 'true' &&
    !(
      error.status !== undefined &&
      (READINESS_RETRY_STATUSES.includes(error.status) || error.status >= READINESS_SERVER_ERROR_MIN)
    )
  )
    return undefined;
  if (error.status !== undefined && READINESS_IMMEDIATE_STATUSES.includes(error.status)) return 0;
  return retryBackoff(error, attempt);
}

export function retryPoll(error: unknown, attempt: number, interval: number): number | undefined {
  if (error instanceof APIConnectionTimeoutError || error instanceof APIConnectionError) return interval;
  if (
    !(error instanceof APIError) ||
    error.status === undefined ||
    !(READINESS_RETRY_STATUSES.includes(error.status) || error.status >= READINESS_SERVER_ERROR_MIN)
  )
    return undefined;
  return retryBackoff(error, attempt);
}

function retryBackoff(error: APIError, attempt: number): number {
  const millis = error.headers?.get('retry-after-ms');
  const after = error.headers?.get('retry-after');
  const ms = millis?.trim() ? Number(millis) : NaN;
  if (Number.isFinite(ms) && ms >= 0) return ms;
  const headerDelay =
    after?.trim() ?
      Number.isFinite(Number(after)) ?
        Number(after) * 1000
      : Date.parse(after) - Date.now()
    : NaN;
  if (Number.isFinite(headerDelay) && headerDelay >= 0) return headerDelay;
  const base = Math.min(READINESS_BACKOFF_MS * 2 ** Math.min(attempt, 10), READINESS_MAX_BACKOFF_MS);
  return base * (READINESS_JITTER_MIN + Math.random() * (1 - READINESS_JITTER_MIN));
}

function waitDelay(delay: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    const cancel = () => {
      clearTimeout(pause);
      signal.removeEventListener('abort', cancel);
      reject(new APIUserAbortError());
    };
    const pause = setTimeout(
      () => {
        signal.removeEventListener('abort', cancel);
        resolve();
      },
      Math.max(0, delay),
    );
    signal.addEventListener('abort', cancel, { once: true });
    if (signal.aborted) cancel();
  });
}

export async function waitFor<T>(
  options: WaitOptions,
  defaultTimeout: number,
  defaultInterval: number,
  poll: (signal: AbortSignal, timeout: number) => Promise<{ done: boolean; result: T }>,
  retry: (error: unknown, attempt: number, interval: number) => number | undefined = () => undefined,
  pollRequestTimeout = Infinity,
): Promise<T> {
  const timeout = options.timeoutMs ?? defaultTimeout;
  const interval = options.pollIntervalMs ?? defaultInterval;
  if (!Number.isFinite(timeout) || timeout <= 0 || !Number.isFinite(interval) || interval <= 0)
    throw new RangeError('timeoutMs and pollIntervalMs must be positive');
  const deadline = Date.now() + timeout;
  const controller = new AbortController();
  let timedOut = false;
  let retries = 0;
  let lastError: unknown;
  const abort = () => controller.abort();
  options.signal?.addEventListener('abort', abort, { once: true });
  if (options.signal?.aborted) abort();
  const timer = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeout);
  try {
    while (true) {
      if (Date.now() >= deadline) throw new WaitTimeoutError(lastError);
      if (controller.signal.aborted) throw new APIUserAbortError();
      let outcome: { done: boolean; result: T };
      try {
        outcome = await poll(
          controller.signal,
          Math.min(pollRequestTimeout, Math.max(1, deadline - Date.now())),
        );
      } catch (error) {
        const delay = retry(error, retries++, interval);
        if (delay !== undefined) lastError = error;
        if (delay === undefined || controller.signal.aborted) throw error;
        if (Date.now() >= deadline) throw new WaitTimeoutError(lastError);
        await waitDelay(Math.min(delay, Math.max(0, deadline - Date.now())), controller.signal);
        continue;
      }
      retries = 0;
      const { done, result } = outcome;
      if (Number.isFinite(pollRequestTimeout) && Date.now() >= deadline)
        throw new WaitTimeoutError(lastError);
      if (options.signal?.aborted) throw new APIUserAbortError();
      if (done) return result;
      if (controller.signal.aborted) throw new APIUserAbortError();
      await waitDelay(Math.min(interval, Math.max(0, deadline - Date.now())), controller.signal);
    }
  } catch (error) {
    if (timedOut) throw new WaitTimeoutError(lastError ?? error);
    throw error;
  } finally {
    clearTimeout(timer);
    options.signal?.removeEventListener('abort', abort);
  }
}

export function objectSnapshot(
  name: string,
  id?: string,
  fields?: Record<string, unknown>,
): {
  class: string;
  id?: string;
  [key: string]: unknown;
} {
  return { class: name, ...(id === undefined ? {} : { id }), ...fields };
}

function installInspection(value: { toJSON(): unknown }): void {
  Object.defineProperty(value, Symbol.for('nodejs.util.inspect.custom'), {
    value: () => value.toJSON(),
  });
}

export function configureObject(value: { api: unknown; toJSON(): unknown }): void {
  Object.defineProperty(value, 'api', { enumerable: false });
  installInspection(value);
}

export function objectNamespace<T extends object>(
  members: T,
  name = 'ObjectNamespace',
): T & {
  toJSON(): ReturnType<typeof objectSnapshot>;
} {
  const value = members as T & { toJSON(): ReturnType<typeof objectSnapshot> };
  Object.defineProperty(value, 'toJSON', { value: () => objectSnapshot(name) });
  installInspection(value);
  return value;
}

export function withResources<T extends object, R extends object>(
  resource: T,
  replacements: R,
  name = 'RawResource',
): Omit<T, keyof R> & R {
  const members = Object.assign(Object.create(resource), replacements);
  return objectNamespace(members, name) as Omit<T, keyof R> & R;
}

export function objectFieldValue(info: unknown, root: string, path: string): unknown {
  let value = info;
  for (const key of [root, path].filter(Boolean).join('.').split('.')) {
    if (value === null || typeof value !== 'object') return undefined;
    value = (value as Record<string, unknown>)[key];
  }
  return value;
}

export { APIUserAbortError };

export type SignatureHeaders = Headers | Record<string, string | string[] | undefined>;
export interface SignatureVerificationOptions {
  /** The raw request body, before JSON parsing. */
  body: string | Uint8Array;
  headers: SignatureHeaders;
  secret: string;
  toleranceSeconds?: number;
  /** Current time in milliseconds since the epoch. */
  now?: number;
}
export class WebhookVerificationError extends Error {
  constructor(
    readonly reason:
      'missing_header' | 'invalid_signature' | 'timestamp_out_of_tolerance' | 'malformed' | 'invalid_json',
  ) {
    super('Webhook verification failed: ' + reason);
    this.name = 'WebhookVerificationError';
  }
}
interface SignatureScheme {
  algorithm: 'hmac-sha256';
  signed_payload: '{timestamp}.{body}';
  signature_header: string;
  timestamp_header: string;
  signature_prefix: string;
  timestamp_unit: 'ms' | 's';
  tolerance_seconds: number;
}
function signatureHeader(headers: SignatureHeaders, name: string): string {
  const fail = () => {
    throw new WebhookVerificationError('malformed');
  };
  let value: unknown;
  if (headers instanceof Headers) value = headers.get(name);
  else if (headers && typeof headers === 'object') {
    const matches = Object.entries(headers).filter(([key]) => key.toLowerCase() === name.toLowerCase());
    if (matches.length > 1) fail();
    value = matches[0]?.[1];
  } else fail();
  if (value === undefined || value === null) throw new WebhookVerificationError('missing_header');
  if (Array.isArray(value)) {
    if (value.length !== 1) fail();
    value = value[0];
  }
  if (typeof value !== 'string') fail();
  return value as string;
}
export async function verifySignature(
  options: SignatureVerificationOptions,
  scheme: SignatureScheme,
): Promise<unknown> {
  const { body, headers, secret } = options;
  if (typeof body !== 'string' && !(body instanceof Uint8Array))
    throw new TypeError('Webhook body must be the raw string or bytes, before JSON parsing');
  const timestamp = signatureHeader(headers, scheme.timestamp_header);
  const signature = signatureHeader(headers, scheme.signature_header);
  const numeric = Number(timestamp);
  const tolerance = options.toleranceSeconds ?? scheme.tolerance_seconds;
  const now = options.now ?? Date.now();
  if (
    !/^\d+$/.test(timestamp) ||
    !Number.isSafeInteger(numeric) ||
    !Number.isFinite(now) ||
    !Number.isFinite(tolerance) ||
    tolerance < 0 ||
    typeof secret !== 'string' ||
    !secret.length
  )
    throw new WebhookVerificationError('malformed');
  if (!signature.startsWith(scheme.signature_prefix)) throw new WebhookVerificationError('malformed');
  const digest = signature.slice(scheme.signature_prefix.length);
  if (!/^[0-9a-fA-F]{64}$/.test(digest)) throw new WebhookVerificationError('malformed');
  const timestampMs = numeric * (scheme.timestamp_unit === 's' ? 1000 : 1);
  if (!Number.isSafeInteger(timestampMs)) throw new WebhookVerificationError('malformed');
  if (Math.abs(now - timestampMs) > tolerance * 1000)
    throw new WebhookVerificationError('timestamp_out_of_tolerance');
  const encoder = new TextEncoder();
  const bytes = typeof body === 'string' ? encoder.encode(body) : body;
  const prefix = encoder.encode(timestamp + '.');
  const payload = new Uint8Array(prefix.length + bytes.length);
  payload.set(prefix);
  payload.set(bytes, prefix.length);
  const supplied = Uint8Array.from(digest.match(/../g)!, (value) => parseInt(value, 16));
  const key = await globalThis.crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['verify'],
  );
  if (!(await globalThis.crypto.subtle.verify('HMAC', key, supplied, payload)))
    throw new WebhookVerificationError('invalid_signature');
  try {
    return JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes)) as unknown;
  } catch {
    throw new WebhookVerificationError('invalid_json');
  }
}

export function definiteConfirmFailure(error: unknown): boolean {
  return (
    error instanceof APIError &&
    error.status !== undefined &&
    error.status >= 400 &&
    error.status < 500 &&
    error.status !== 408
  );
}
export type UploadData = string | Blob | Uint8Array | ArrayBuffer | ReadableStream<Uint8Array>;
export type UploadFile =
  UploadData | { data: UploadData; filename?: string; contentType?: string; size?: number };
export interface PreparedUpload {
  filename: string;
  contentType: string;
  size: number;
  open(): Promise<{ body: NonNullable<RequestInit['body']>; close(): void }>;
}
export class UploadError extends Error {
  constructor(readonly cause: unknown) {
    super('Presigned upload failed');
    this.name = 'UploadError';
  }
}
export function uploadContentType(filename: string): string {
  const extension = filename.split('.').pop()?.toLowerCase();
  return (
    (
      {
        apk: 'application/vnd.android.package-archive',
        xapk: 'application/zip',
        apks: 'application/zip',
        ipa: 'application/octet-stream',
        json: 'application/json',
        txt: 'text/plain',
        csv: 'text/csv',
        pdf: 'application/pdf',
        png: 'image/png',
        jpg: 'image/jpeg',
        jpeg: 'image/jpeg',
        zip: 'application/zip',
      } as Record<string, string>
    )[extension ?? ''] ?? 'application/octet-stream'
  );
}
export async function prepareUpload(
  input: UploadFile,
  overrides: {
    filename?: string | undefined;
    contentType?: string | undefined;
    size?: number | undefined;
  } = {},
  allowedContentTypes?: readonly string[],
): Promise<PreparedUpload> {
  const wrapped = typeof input === 'object' && input !== null && 'data' in input ? input : { data: input };
  const data = wrapped.data;
  let filename = overrides.filename ?? wrapped.filename;
  let contentType = overrides.contentType ?? wrapped.contentType;
  let size = overrides.size ?? wrapped.size;
  let open: PreparedUpload['open'];
  let measured: number;
  if (typeof data === 'string') {
    const moduleName = 'node:fs';
    const fs = (await import(/* webpackIgnore: true */ /* @vite-ignore */ moduleName)) as {
      promises: { stat(path: string): Promise<{ size: number; isFile(): boolean }> };
      createReadStream(path: string): { destroy(): void };
      openAsBlob?: (path: string) => Promise<Blob>;
    };
    const stat = await fs.promises.stat(data);
    if (!stat.isFile()) throw new TypeError('Upload path must name a file');
    filename ??= data.split(/[\\/]/).pop();
    measured = stat.size;
    open = async () => {
      if (fs.openAsBlob) return { body: await fs.openAsBlob(data), close() {} };
      const stream = fs.createReadStream(data);
      return { body: stream as unknown as NonNullable<RequestInit['body']>, close: () => stream.destroy() };
    };
  } else if (data instanceof Blob) {
    filename ??= 'name' in data && typeof data.name === 'string' ? data.name : undefined;
    contentType ??=
      data.type && (!allowedContentTypes || allowedContentTypes.includes(data.type)) ? data.type : undefined;
    measured = data.size;
    open = async () => ({ body: data, close() {} });
  } else if (data instanceof Uint8Array || data instanceof ArrayBuffer) {
    const bytes = new Uint8Array(data instanceof ArrayBuffer ? data : data.slice().buffer);
    measured = bytes.byteLength;
    open = async () => ({ body: bytes, close() {} });
  } else if (data instanceof ReadableStream) {
    // A replayable disk-backed source is used for paths. A supplied stream is
    // materialized once so connection retries never send a consumed stream.
    const bytes = new Uint8Array(await new Response(data).arrayBuffer());
    measured = bytes.byteLength;
    open = async () => ({ body: bytes, close() {} });
  } else throw new TypeError('Unsupported upload input');
  if (!filename) throw new TypeError('Upload bytes, blobs and streams require a filename');
  if (size !== undefined && (!Number.isSafeInteger(size) || size !== measured))
    throw new TypeError('Upload size must match the measured byte count');
  size = measured;
  contentType ??= uploadContentType(filename);
  if (allowedContentTypes && !allowedContentTypes.includes(contentType))
    throw new TypeError('Unsupported upload content type');
  return { filename, contentType, size, open };
}
export function uploadURLs(
  response: unknown,
  files: PreparedUpload[],
  scheme: { url_path?: string; urls_path?: string; url_field?: string; name_field?: string } & Record<
    string,
    unknown
  >,
): string[] {
  if (scheme.url_path) {
    const url = objectFieldValue(response, '', scheme.url_path);
    if (files.length !== 1 || typeof url !== 'string') throw new Error('Invalid presigned upload URL');
    return [url];
  }
  const rows = objectFieldValue(response, '', scheme.urls_path!);
  if (
    !Array.isArray(rows) ||
    rows.length !== files.length ||
    new Set(files.map((file) => file.filename)).size !== files.length
  )
    throw new Error('Upload URL count or file names do not match');
  const names = new Set<string>();
  for (const row of rows) {
    const name = objectFieldValue(row, '', scheme.name_field!);
    if (typeof name !== 'string' || names.has(name)) throw new Error('Duplicate upload URL name');
    names.add(name);
  }
  return files.map((file) => {
    const row = rows.find((row) => objectFieldValue(row, '', scheme.name_field!) === file.filename);
    const url = objectFieldValue(row, '', scheme.url_field!);
    if (typeof url !== 'string') throw new Error('Missing upload URL for a file');
    return url;
  });
}
interface UploadTransport {
  timeout: number;
  maxRetries: number;
  fetchWithTimeout(
    url: string,
    init: RequestInit,
    ms: number,
    controller: AbortController,
  ): Promise<Response>;
}
export async function putUpload(
  client: UploadTransport,
  file: PreparedUpload,
  url: string,
  options?: RequestOptions,
): Promise<void> {
  const parsed = new URL(url);
  if (!['http:', 'https:'].includes(parsed.protocol) || parsed.username || parsed.password)
    throw new TypeError('Invalid presigned URL');
  const timeout = options?.timeout ?? client.timeout;
  const retries = options?.maxRetries ?? client.maxRetries;
  for (let attempt = 0; ; attempt++) {
    if (options?.signal?.aborted) throw new APIUserAbortError();
    const source = await file.open();
    const controller = new AbortController();
    let failure: APIError;
    try {
      const response = await client.fetchWithTimeout(
        url,
        {
          method: 'PUT',
          body: source.body,
          headers: { 'Content-Type': file.contentType, 'Content-Length': String(file.size) },
          redirect: 'error',
          credentials: 'omit',
          signal: options?.signal ?? null,
        },
        timeout,
        controller,
      );
      if (response.ok) {
        await response.body?.cancel();
        return;
      }
      await response.body?.cancel();
      failure = APIError.generate(response.status, undefined, 'Presigned PUT failed', response.headers);
      if (response.status < 500) throw failure;
    } catch (error) {
      if (options?.signal?.aborted) throw new APIUserAbortError();
      if (error instanceof APIError) throw error;
      failure = new APIConnectionError({ cause: error instanceof Error ? error : undefined });
    } finally {
      source.close();
    }
    if (attempt >= retries) throw failure;
    const delay = Math.min(60000, retryBackoff(failure, attempt));
    await waitDelay(delay, options?.signal ?? new AbortController().signal);
  }
}
