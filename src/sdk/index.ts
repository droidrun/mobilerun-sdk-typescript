// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as AppsAPI from '../resources/apps';
import * as FilesAPI from '../resources/files';
import * as ProxiesAPI from '../resources/proxies';
import * as Shared from '../resources/shared';
import * as AgentsAPI from '../resources/agents/agents';
import * as ConversationsAPI from '../resources/agents/conversations';
import * as AgentsFilesAPI from '../resources/agents/files';
import * as ProfileAPI from '../resources/agents/profile';
import * as RequestsAPI from '../resources/agents/requests';
import * as RoutinesAPI from '../resources/agents/routines';
import * as ConnectProxiesAPI from '../resources/connect/proxies';
import * as UsersAPI from '../resources/connect/users';
import * as ActionsAPI from '../resources/devices/actions';
import * as DevicesAppsAPI from '../resources/devices/apps';
import * as BrowserAPI from '../resources/devices/browser';
import * as ClipboardAPI from '../resources/devices/clipboard';
import * as DeepLinkAPI from '../resources/devices/deep-link';
import * as DevicesAPI from '../resources/devices/devices';
import * as DevicesFilesAPI from '../resources/devices/files';
import * as KeyboardAPI from '../resources/devices/keyboard';
import * as KioskAPI from '../resources/devices/kiosk';
import * as LanguageAPI from '../resources/devices/language';
import * as LocationAPI from '../resources/devices/location';
import * as NumberAPI from '../resources/devices/number';
import * as NumberBindingsAPI from '../resources/devices/number-bindings';
import * as PackagesAPI from '../resources/devices/packages';
import * as DevicesProfileAPI from '../resources/devices/profile';
import * as ProxyAPI from '../resources/devices/proxy';
import * as RecordingsAPI from '../resources/devices/recordings';
import * as ScreenshotsAPI from '../resources/devices/screenshots';
import * as StateAPI from '../resources/devices/state';
import * as TasksAPI from '../resources/devices/tasks';
import * as TimezoneAPI from '../resources/devices/timezone';
import * as TrafficSessionsAPI from '../resources/devices/traffic-sessions';
import * as ConnectionsAPI from '../resources/mailboxes/connections';
import * as MailboxesAPI from '../resources/mailboxes/mailboxes';
import * as MessagesAPI from '../resources/mailboxes/messages';
import * as MessagesConversationsAPI from '../resources/messages/conversations';
import * as ResourcesMessagesAPI from '../resources/messages/messages';
import * as NumbersMessagesAPI from '../resources/numbers/messages';
import * as NumbersAPI from '../resources/numbers/numbers';
import * as TasksScreenshotsAPI from '../resources/tasks/screenshots';
import * as ResourcesTasksAPI from '../resources/tasks/tasks';
import * as UiStatesAPI from '../resources/tasks/ui-states';
import * as DeliveriesAPI from '../resources/webhooks/deliveries';
import * as IntegrationsAPI from '../resources/webhooks/integrations';
import * as WebhooksAPI from '../resources/webhooks/webhooks';
import * as ActionCatalogAPI from '../resources/workflows/action-catalog';
import * as TriggersAPI from '../resources/workflows/triggers';
import * as LinksAPI from '../resources/credentials/packages/links';
import * as CredentialsPackagesAPI from '../resources/credentials/packages/packages';
import * as ApnAPI from '../resources/devices/esim/apn';
import * as EsimAPI from '../resources/devices/esim/esim';
import * as WorkflowsActionsAPI from '../resources/workflows/actions/actions';
import * as ServicesAPI from '../resources/workflows/actions/services';
import * as ExecutionsAPI from '../resources/workflows/executions/executions';
import * as FlowsActionsAPI from '../resources/workflows/flows/actions';
import * as FlowsAPI from '../resources/workflows/flows/flows';
import * as FlowsStateAPI from '../resources/workflows/flows/state';
import * as CredentialsAPI from '../resources/credentials/packages/credentials/credentials';
import * as FieldsAPI from '../resources/credentials/packages/credentials/fields';
import { APIPromise } from '../core/api-promise';

import { Mobilerun as Raw, type ClientOptions } from '../client';
import type { RequestOptions } from '../internal/request-options';
import {
  isOutputSchema,
  parseOutput,
  type OutputSchema,
  type OutputSchemaValue,
  type WaitOutput,
  ObjectReadyError,
  WaitFailureError,
  waitFor,
  conditionMet,
  objectFieldValue,
  BinaryResult,
  headerBoolean,
  retryReadiness,
  SINGLE_CALL_INTERVAL_MS,
  boundOptions,
  createRequestOptions,
  withResources,
  ObjectPager,
  PagedObjectPage,
  nextObjectPage,
  pageRequestOptions,
  type ReadyOptions,
  type WaitOptions,
  type ObjectPage,
  configureObject,
  objectSnapshot,
  retryPoll,
  type SignatureVerificationOptions,
  type UploadFile,
  UploadError,
  prepareUpload,
  putUpload,
  uploadURLs,
  verifySignature,
  nextObjectCursor,
  definiteConfirmFailure,
  APIUserAbortError,
} from './runtime';
export {
  OutputValidationError,
  type OutputSchema,
  type WaitOutput,
  ObjectReadyError,
  WaitError,
  WaitFailureError,
  WaitTimeoutError,
  ObjectPager,
  PagedObjectPage,
  type ReadyOptions,
  type WaitOptions,
  type ObjectPage,
  type SignatureVerificationOptions,
  type SignatureHeaders,
  WebhookVerificationError,
  type UploadFile,
  type UploadData,
  UploadError,
} from './runtime';

/** Verify the raw body before parsing it. No API client or API key is needed. */
export function verifyWebhook(options: SignatureVerificationOptions): Promise<unknown> {
  return verifySignature(options, {
    algorithm: 'hmac-sha256',
    signature_header: 'x-mobilerun-signature',
    signature_prefix: 'sha256=',
    timestamp_header: 'x-mobilerun-timestamp',
    timestamp_unit: 'ms',
    signed_payload: '{timestamp}.{body}',
    tolerance_seconds: 300,
  });
}

export class Screenshot extends BinaryResult {
  readonly id: string | undefined;
  readonly saved: boolean | undefined;
  constructor(bytes: Uint8Array, headers: Headers) {
    super(bytes, headers.get('Content-Type') ?? undefined);
    this.id = headers.get('X-Screenshot-Id') ?? undefined;
    this.saved = headerBoolean(headers.get('X-Screenshot-Saved'));
  }
}

type Without<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;
export class MobilerunSDK {
  readonly api: Raw;
  readonly apps: AppManager;
  readonly credentials: Without<Raw['credentials'], 'packages'> & { packages: CredentialPackageManager };
  readonly devices: DeviceManager;
  readonly models: Raw['models'];
  readonly proxies: ProxyConfigurationManager;
  readonly connect: Without<Raw['connect'], 'proxies' | 'users'> & {
    proxies: ConnectProxyManager;
    users: ConnectUserManager;
  };
  readonly tasks: TaskManager;
  readonly workflows: Without<
    Raw['workflows'],
    'triggers' | 'actionCatalog' | 'actions' | 'flows' | 'executions'
  > & {
    triggers: TriggerManager;
    actionCatalog: CatalogEntryManager;
    actions: WorkflowActionManager;
    flows: FlowManager;
    executions: ExecutionManager;
  };
  readonly webhooks: WebhookManager;
  readonly mailboxes: MailboxManager;
  readonly files: AgentFileManager;
  readonly agents: AgentManager;
  readonly assistant: Raw['assistant'];
  readonly messages: NumberMessageManager;
  readonly numbers: PhoneNumberManager;
  constructor(options: ClientOptions = {}) {
    this.api = new Raw(options);
    configureObject(this);
    this.apps = new AppManager(this.api);
    this.credentials = withResources(
      this.api.credentials,
      {
        packages: new CredentialPackageManager(this.api),
        onepassword: withResources(
          this.api.credentials.onepassword,
          {
            vaults: withResources(
              this.api.credentials.onepassword.vaults,
              {
                items: withResources(
                  this.api.credentials.onepassword.vaults.items,
                  {
                    fields: withResources(
                      this.api.credentials.onepassword.vaults.items.fields,
                      {},
                      'Fields',
                    ) as Raw['credentials']['onepassword']['vaults']['items']['fields'],
                  },
                  'Items',
                ) as Raw['credentials']['onepassword']['vaults']['items'],
              },
              'Vaults',
            ) as Raw['credentials']['onepassword']['vaults'],
          },
          'Onepassword',
        ) as Raw['credentials']['onepassword'],
      },
      'Credentials',
    );
    this.devices = new DeviceManager(this.api);
    this.models = withResources(this.api.models, {}, 'Models') as Raw['models'];
    this.proxies = new ProxyConfigurationManager(this.api);
    this.connect = withResources(
      this.api.connect,
      {
        countries: withResources(this.api.connect.countries, {}, 'Countries') as Raw['connect']['countries'],
        proxies: new ConnectProxyManager(this.api),
        users: new ConnectUserManager(this.api),
      },
      'Connect',
    );
    this.tasks = new TaskManager(this.api);
    this.workflows = withResources(
      this.api.workflows,
      {
        triggers: new TriggerManager(this.api),
        actionCatalog: new CatalogEntryManager(this.api),
        actions: new WorkflowActionManager(this.api),
        flows: new FlowManager(this.api),
        events: withResources(this.api.workflows.events, {}, 'Events') as Raw['workflows']['events'],
        executions: new ExecutionManager(this.api),
        timezones: withResources(
          this.api.workflows.timezones,
          {},
          'Timezones',
        ) as Raw['workflows']['timezones'],
      },
      'Workflows',
    );
    this.webhooks = new WebhookManager(this.api);
    this.mailboxes = new MailboxManager(this.api);
    this.files = new AgentFileManager(this.api);
    this.agents = new AgentManager(this.api);
    this.assistant = withResources(
      this.api.assistant,
      {
        conversations: withResources(
          this.api.assistant.conversations,
          {},
          'Conversations',
        ) as Raw['assistant']['conversations'],
      },
      'Assistant',
    ) as Raw['assistant'];
    this.messages = new NumberMessageManager(this.api);
    this.numbers = new PhoneNumberManager(this.api);
  }
  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('MobilerunSDK');
  }
}

export type AppListPage = PagedObjectPage<App, AppsAPI.AppListResponse>;
export class AppManager {
  constructor(readonly api: Raw) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('AppManager');
  }

  fromId(id: string): App {
    return new App(this.api, id);
  }

  async get(id: string, options?: RequestOptions): Promise<App> {
    const info = await this.api.apps.retrieve(
      id,
      boundOptions(options, [{ name: 'id', location: 'path', value: id }]),
    );
    return new App(this.api, id, info, false, 'data');
  }

  list(params?: AppsAPI.AppListParams, options?: RequestOptions): ObjectPager<App, AppsAPI.AppListResponse> {
    const load = async (page: number): Promise<PagedObjectPage<App, AppsAPI.AppListResponse>> => {
      const pageOptions = pageRequestOptions(options, 'page', page, {
        order: params?.['order'],
        page: params?.['page'],
        pageSize: params?.['pageSize'],
        platform: params?.['platform'],
        query: params?.['query'],
        sortBy: params?.['sortBy'],
        status: params?.['status'],
      });
      const response = await this.api.apps.list({ ...params }, pageOptions);
      return new PagedObjectPage(
        (response['items'] ?? []).map((info) => new App(this.api, info['id'], info, false, '')),
        response,
        {
          next: () =>
            nextObjectPage(
              response['pagination']['page'],
              response['pagination']['hasNext'],
              response['pagination']['pages'],
              page,
            ),
          load,
        },
      );
    };
    return new ObjectPager(() => load(params?.['page'] ?? 1));
  }

  /**
   * Creates or updates an app and returns pre-signed upload URLs for each file.
   * Honours an optional `Idempotency-Key` header: a retry with the same key and body
   * returns the same app and version with freshly signed URLs and
   * `Idempotent-Replayed: true`, and never creates a second version. An
   * Idempotency-Key is honoured for 7 days; after that it behaves like a fresh
   * request. A replay whose version was deleted is a 404; a replay whose version
   * already left the queued state is a 409 `idempotency_key_consumed`; a replay that
   * cannot get the version lock within 5 s is a 409
   * `idempotency_request_in_progress`. Every response produced by a replay,
   * including those 404/409 errors, carries `Idempotent-Replayed: true`. A same-key
   * request still in flight after a 5 s wait is a 409
   * `idempotency_request_in_progress` (retry after `Retry-After`). If signing fails,
   * nothing is persisted (with or without a key) and the same request, key included,
   * can be retried.
   *
   * @example
   * ```ts
   * const response = await client.apps.createSignedUploadURL({
   *   bundleId:
   *     'NX0.JB-_-.m-u--_-p.Z1-u_2I.D--_T-_.dzZ-.Wx.L_a8--_.w_D_',
   *   displayName: 'x',
   *   files: [
   *     {
   *       contentType:
   *         'application/vnd.android.package-archive',
   *       fileName: 'J!Q0Ok0bzJb7.apk/i',
   *     },
   *   ],
   *   versionCode: 0,
   *   versionName: 'x',
   * });
   * ```
   */
  createSignedUploadURL(
    params: AppsAPI.AppCreateSignedUploadURLParams,
    options?: RequestOptions,
  ): APIPromise<AppsAPI.AppCreateSignedUploadURLResponse> {
    const result = this.api.apps.createSignedUploadURL({ ...params }, options);
    return result;
  }

  /**
   * Returns the user’s storage allowance in bytes: bytes used, bytes included in the
   * plan, the hard maximum (included + max purchasable overage; null = unlimited)
   * and whether usage above the included amount is billed as overage. With storage
   * billing off there is no limit: only usedBytes is set.
   *
   * @example
   * ```ts
   * const response = await client.apps.storageUsage();
   * ```
   */
  storageUsage(options?: RequestOptions): APIPromise<AppsAPI.AppStorageUsageResponse> {
    const result = this.api.apps.storageUsage(options);
    return result;
  }

  /** Upload bytes to presigned storage, confirm, and return the object. Uploading uses storage quota. */
  async upload(
    params: Omit<AppsAPI.AppCreateSignedUploadURLParams, 'files'> & { files: readonly UploadFile[] },
    options?: RequestOptions,
  ): Promise<App> {
    const files = await Promise.all(
      params.files.map((file) =>
        prepareUpload(file, {}, [
          'application/vnd.android.package-archive',
          'application/octet-stream',
          'application/zip',
        ]),
      ),
    );
    if (!files.length || new Set(files.map((file) => file.filename)).size !== files.length)
      throw new TypeError('Upload needs unique, nonempty file names');
    const { files: _files, ...rest } = params;
    const requestParams = {
      ...rest,
      files: files.map((file) => ({ fileName: file.filename, contentType: file.contentType })),
    } as AppsAPI.AppCreateSignedUploadURLParams;
    const requestOptions = boundOptions(options, [
      { name: 'files', location: 'body', value: requestParams['files'] },
    ]);
    const issued = await this.api.apps.createSignedUploadURL({ ...requestParams }, requestOptions);
    let confirmed = false;
    let confirming = false;
    try {
      const urls = uploadURLs(issued, files, {
        request: 'create_signed_upload_url',
        files_param: 'files',
        urls_path: 'r2UploadUrls',
        url_field: 'r2UploadUrl',
        name_field: 'fileName',
        name_param: 'fileName',
        mime_param: 'contentType',
        id_path: 'versionId',
        confirm: 'confirm_upload',
        fail: 'mark_failed',
        returns: 'App',
        get: 'retrieve',
        get_id_path: 'appId',
      });
      for (const [index, file] of files.entries()) await putUpload(this.api, file, urls[index]!, options);
      confirming = true;
      await this.api.apps.confirmUpload(
        issued['versionId'],
        boundOptions(options, [{ name: 'id', location: 'path', value: issued['versionId'] }]),
      );
      confirmed = true;
      const info = await this.api.apps.retrieve(
        issued['appId'],
        boundOptions(options, [{ name: 'id', location: 'path', value: issued['appId'] }]),
      );
      return new App(this.api, info['data']['id'], info, false, 'data');
    } catch (error) {
      const cleanupOptions = { ...options, signal: undefined };
      if (!confirmed && (!confirming || definiteConfirmFailure(error))) {
        try {
          await this.api.apps.markFailed(
            issued['versionId'],
            boundOptions(cleanupOptions, [{ name: 'id', location: 'path', value: issued['versionId'] }]),
          );
        } catch {
          /* Preserve the original upload error. */
        }
      }
      if (error instanceof APIUserAbortError) throw error;
      throw new UploadError(error);
    }
  }
}

export type CredentialPackageListPage = ObjectPage<
  CredentialPackage,
  CredentialsPackagesAPI.PackageListAllResponse
>;
export class CredentialPackageManager {
  constructor(readonly api: Raw) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('CredentialPackageManager');
  }

  fromId(id: string): CredentialPackage {
    return new CredentialPackage(this.api, id);
  }

  async get(id: string, options?: RequestOptions): Promise<CredentialPackage> {
    const info = await this.api.credentials.packages.list(
      id,
      boundOptions(options, [{ name: 'packageName', location: 'path', value: id }]),
    );
    const rows = info['data'] ?? [];
    const objectID = rows.length ? rows[0]!['packageName'] : id;
    return new CredentialPackage(this.api, objectID, info, false);
  }

  /**
   * Creates a new package (identified by `packageName`) under which credentials can
   * be grouped. Returns a conflict if a package with the same name already exists
   * for the user.
   */
  async create(
    params: CredentialsPackagesAPI.PackageCreateParams,
    options?: RequestOptions,
  ): Promise<CredentialPackage> {
    const requestOptions = createRequestOptions(options);
    const info = await this.api.credentials.packages.create({ ...params }, requestOptions);
    const object = new CredentialPackage(this.api, info['data']['packageName'], info, true);
    return object;
  }

  list(
    options?: RequestOptions,
  ): ObjectPager<CredentialPackage, CredentialsPackagesAPI.PackageListAllResponse> {
    return new ObjectPager(async () => {
      const response = await this.api.credentials.packages.listAll(options);
      return new PagedObjectPage(
        (response['data'] ?? []).map(
          (info) => new CredentialPackage(this.api, info['packageName'], info, false),
        ),
        response,
      );
    });
  }
}

export type CredentialListPage = ObjectPage<Credential, CredentialsPackagesAPI.PackageListResponse>;
export class CredentialManager {
  constructor(
    readonly api: Raw,
    readonly packageName: string,
  ) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('CredentialManager');
  }

  fromId(id: string): Credential {
    return new Credential(this.api, this.packageName, id);
  }

  /**
   * Creates a credential under the given package with a `credentialName` and at
   * least one field. Each field has a `fieldType` (email, username, password,
   * api_token, phone_number, two_factor_secret, or backup_codes) and a value.
   */
  async create(params: CredentialsAPI.CredentialCreateParams, options?: RequestOptions): Promise<Credential> {
    const requestOptions = createRequestOptions(options);
    const info = await this.api.credentials.packages.credentials.create(
      this.packageName,
      { ...params },
      boundOptions(requestOptions, [{ name: 'packageName', location: 'path', value: this.packageName }]),
    );
    const object = new Credential(
      this.api,
      this.packageName,
      info['data']['credentialName'],
      info,
      true,
      'data',
    );
    return object;
  }

  list(options?: RequestOptions): ObjectPager<Credential, CredentialsPackagesAPI.PackageListResponse> {
    return new ObjectPager(async () => {
      const response = await this.api.credentials.packages.list(
        this.packageName,
        boundOptions(options, [{ name: 'packageName', location: 'path', value: this.packageName }]),
      );
      return new PagedObjectPage(
        (response['data'] ?? []).map(
          (info) => new Credential(this.api, this.packageName, info['credentialName'], info, false, ''),
        ),
        response,
      );
    });
  }
}

export type DeviceListPage = PagedObjectPage<Device, DevicesAPI.DeviceListResponse>;
export class DeviceManager {
  readonly numberBindings;

  constructor(readonly api: Raw) {
    configureObject(this);
    this.numberBindings = {
      list: (options?: RequestOptions): APIPromise<NumberBindingsAPI.NumberBindingListResponse> => {
        const result = this.api.devices.numberBindings.list(options);
        return result;
      },

      listCandidates: (
        options?: RequestOptions,
      ): APIPromise<NumberBindingsAPI.NumberBindingListCandidatesResponse> => {
        const result = this.api.devices.numberBindings.listCandidates(options);
        return result;
      },
    };
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('DeviceManager');
  }

  fromId(id: string): Device {
    return new Device(this.api, id);
  }

  async get(id: string, options?: RequestOptions): Promise<Device> {
    const info = await this.api.devices.retrieve(
      id,
      boundOptions(options, [{ name: 'deviceId', location: 'path', value: id }]),
    );
    return new Device(this.api, id, info, false, '');
  }

  /**
   * Starts billing for the device according to the selected billing mode.
   *
   * Requests a new device from the specification in the request body. Optional query
   * parameters select the canonical device type, country, billing mode, and base
   * profile. Returns the device, its resolved billing strategy, and its stream
   * token.
   */
  async create(
    params?: DevicesAPI.DeviceCreateParams,
    options?: RequestOptions & {
      waitReady?: boolean;
      readyTimeoutMs?: number;
      disposeOnReadyFailure?: boolean;
    },
  ): Promise<Device> {
    const requestOptions = createRequestOptions(options);
    const info = await this.api.devices.create({ ...params }, requestOptions);
    const object = new Device(this.api, info['id'], info, true, '');
    if (options?.waitReady !== false) {
      try {
        await object.waitReady({ signal: options?.signal ?? undefined, timeoutMs: options?.readyTimeoutMs });
      } catch (cause) {
        let disposed = false;
        let cleanupError: unknown;
        if (options?.disposeOnReadyFailure !== false) {
          try {
            await object[Symbol.asyncDispose]();
            disposed = true;
          } catch (error) {
            cleanupError = error;
          }
        }
        throw new ObjectReadyError(object, object.id, cause, disposed, cleanupError);
      }
    }
    return object;
  }

  list(
    params?: DevicesAPI.DeviceListParams,
    options?: RequestOptions,
  ): ObjectPager<Device, DevicesAPI.DeviceListResponse> {
    const load = async (page: number): Promise<PagedObjectPage<Device, DevicesAPI.DeviceListResponse>> => {
      const pageOptions = pageRequestOptions(options, 'page', page, {
        country: params?.['country'],
        createdAfter: params?.['createdAfter'],
        createdBefore: params?.['createdBefore'],
        createdBy: params?.['createdBy'],
        mine: params?.['mine'],
        name: params?.['name'],
        orderBy: params?.['orderBy'],
        orderByDirection: params?.['orderByDirection'],
        page: params?.['page'],
        pageSize: params?.['pageSize'],
        platform: params?.['platform'],
        providerId: params?.['providerId'],
        search: params?.['search'],
        state: params?.['state'],
        type: params?.['type'],
      });
      const response = await this.api.devices.list({ ...params }, pageOptions);
      return new PagedObjectPage(
        (response['items'] ?? []).map((info) => new Device(this.api, info['id'], info, false, '')),
        response,
        {
          next: () =>
            nextObjectPage(
              response['pagination']['page'],
              response['pagination']['hasNext'],
              response['pagination']['pages'],
              page,
            ),
          load,
        },
      );
    };
    return new ObjectPager(() => load(params?.['page'] ?? 1));
  }

  /**
   * Returns the total number of the user's devices and counts grouped by current
   * state and device type.
   */
  summary(
    params?: DevicesAPI.DeviceSummaryParams,
    options?: RequestOptions,
  ): APIPromise<DevicesAPI.DeviceSummaryResponse> {
    const result = this.api.devices.summary({ ...params }, options);
    return result;
  }
}

export type SavedScreenshotListPage = PagedObjectPage<SavedScreenshot, ScreenshotsAPI.ScreenshotListResponse>;
export class SavedScreenshotManager {
  constructor(
    readonly api: Raw,
    readonly deviceID: string,
  ) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('SavedScreenshotManager');
  }

  fromId(id: string): SavedScreenshot {
    return new SavedScreenshot(this.api, this.deviceID, id);
  }

  list(
    params?: ScreenshotsAPI.ScreenshotListParams,
    options?: RequestOptions,
  ): ObjectPager<SavedScreenshot, ScreenshotsAPI.ScreenshotListResponse> {
    const load = async (
      page: number | string | undefined,
      visited: ReadonlySet<string> = new Set(),
    ): Promise<PagedObjectPage<SavedScreenshot, ScreenshotsAPI.ScreenshotListResponse>> => {
      const seen = new Set(visited);
      if (typeof page === 'string') seen.add(page);
      const pageOptions = pageRequestOptions(options, 'cursor', page, {
        cursor: params?.['cursor'],
        limit: params?.['limit'],
      });
      const response = await this.api.devices.screenshots.list(
        this.deviceID,
        { ...params },
        boundOptions(pageOptions, [{ name: 'deviceId', location: 'path', value: this.deviceID }]),
      );
      return new PagedObjectPage(
        (response['items'] ?? []).map(
          (info) => new SavedScreenshot(this.api, this.deviceID, info['id'], info, false, ''),
        ),
        response,
        {
          next: () => nextObjectCursor(response['nextCursor'], page, seen),
          load: (next) => load(next, seen),
        },
      );
    };
    return new ObjectPager(() => load(params?.['cursor']));
  }
}

export type RecordingListPage = ObjectPage<Recording, RecordingsAPI.RecordingListResponse | null>;
export class RecordingManager {
  constructor(
    readonly api: Raw,
    readonly deviceID: string,
  ) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('RecordingManager');
  }

  fromId(id: string): Recording {
    return new Recording(this.api, this.deviceID, id);
  }

  async get(id: string, options?: RequestOptions): Promise<Recording> {
    const info = await this.api.devices.recordings.status(
      id,
      { deviceId: this.deviceID },
      boundOptions(options, [
        { name: 'recordingId', location: 'path', value: id },
        { name: 'deviceId', location: 'path', value: this.deviceID },
      ]),
    );
    return new Recording(this.api, this.deviceID, id, info, false, '');
  }

  /**
   * Start a device recording
   */
  async start(params?: RecordingsAPI.RecordingStartParams, options?: RequestOptions): Promise<Recording> {
    const requestOptions = createRequestOptions(options);
    const info = await this.api.devices.recordings.start(
      this.deviceID,
      { ...params },
      boundOptions(requestOptions, [{ name: 'deviceId', location: 'path', value: this.deviceID }]),
    );
    const object = new Recording(this.api, this.deviceID, info['id'], info, true, '');
    return object;
  }

  list(
    params?: RecordingsAPI.RecordingListParams,
    options?: RequestOptions,
  ): ObjectPager<Recording, RecordingsAPI.RecordingListResponse | null> {
    return new ObjectPager(async () => {
      const response = await this.api.devices.recordings.list(
        this.deviceID,
        { ...params },
        boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.deviceID }]),
      );
      return new PagedObjectPage(
        (response ?? []).map((info) => new Recording(this.api, this.deviceID, info['id'], info, false, '')),
        response,
      );
    });
  }
}

export type TrafficSessionListPage = PagedObjectPage<
  TrafficSession,
  TrafficSessionsAPI.TrafficSessionListResponse
>;
export class TrafficSessionManager {
  constructor(
    readonly api: Raw,
    readonly deviceID: string,
  ) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('TrafficSessionManager');
  }

  fromId(id: string): TrafficSession {
    return new TrafficSession(this.api, this.deviceID, id);
  }

  async get(id: string, options?: RequestOptions): Promise<TrafficSession> {
    const info = await this.api.devices.trafficSessions.retrieve(
      id,
      { deviceId: this.deviceID },
      boundOptions(options, [
        { name: 'sessionId', location: 'path', value: id },
        { name: 'deviceId', location: 'path', value: this.deviceID },
      ]),
    );
    return new TrafficSession(this.api, this.deviceID, id, info, false, '');
  }

  /**
   * Starts one live-only decoded HTTP/1.1, HTTP/2, HTTP/3 and WebSocket traffic
   * session.
   */
  async create(
    params?: TrafficSessionsAPI.TrafficSessionCreateParams,
    options?: RequestOptions,
  ): Promise<TrafficSession> {
    const requestOptions = createRequestOptions(options);
    const info = await this.api.devices.trafficSessions.create(
      this.deviceID,
      { ...params },
      boundOptions(requestOptions, [{ name: 'deviceId', location: 'path', value: this.deviceID }]),
    );
    const object = new TrafficSession(this.api, this.deviceID, info['id'], info, true, '');
    return object;
  }

  list(
    params?: TrafficSessionsAPI.TrafficSessionListParams,
    options?: RequestOptions,
  ): ObjectPager<TrafficSession, TrafficSessionsAPI.TrafficSessionListResponse> {
    const load = async (
      page: number,
    ): Promise<PagedObjectPage<TrafficSession, TrafficSessionsAPI.TrafficSessionListResponse>> => {
      const pageOptions = pageRequestOptions(options, 'page', page, {
        page: params?.['page'],
        pageSize: params?.['pageSize'],
      });
      const response = await this.api.devices.trafficSessions.list(
        this.deviceID,
        { ...params },
        boundOptions(pageOptions, [{ name: 'deviceId', location: 'path', value: this.deviceID }]),
      );
      return new PagedObjectPage(
        (response['items'] ?? []).map(
          (info) => new TrafficSession(this.api, this.deviceID, info['id'], info, false, ''),
        ),
        response,
        {
          next: () =>
            nextObjectPage(
              response['pagination']['page'],
              response['pagination']['hasNext'],
              response['pagination']['pages'],
              page,
            ),
          load,
        },
      );
    };
    return new ObjectPager(() => load(params?.['page'] ?? 1));
  }
}

export type ProxyConfigurationListPage = ObjectPage<ProxyConfiguration, ProxiesAPI.ProxyListResponse>;
export class ProxyConfigurationManager {
  constructor(readonly api: Raw) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('ProxyConfigurationManager');
  }

  fromId(id: string): ProxyConfiguration {
    return new ProxyConfiguration(this.api, id);
  }

  async get(id: string, options?: RequestOptions): Promise<ProxyConfiguration> {
    const info = await this.api.proxies.retrieve(
      id,
      boundOptions(options, [{ name: 'proxyId', location: 'path', value: id }]),
    );
    return new ProxyConfiguration(this.api, id, info, false, 'data');
  }

  /**
   * Creates a proxy config. The body is a discriminated union on `protocol`:
   * `socks5` requires name, host, port, user, and password, while `wireguard`
   * requires name and a config string. Returns the created config with its generated
   * `proxyId`.
   */
  async create(params: ProxiesAPI.ProxyCreateParams, options?: RequestOptions): Promise<ProxyConfiguration> {
    const requestOptions = createRequestOptions(options);
    const info = await this.api.proxies.create({ ...params }, requestOptions);
    const object = new ProxyConfiguration(this.api, info['data']['proxyId'], info, true, 'data');
    return object;
  }

  list(
    params?: ProxiesAPI.ProxyListParams,
    options?: RequestOptions,
  ): ObjectPager<ProxyConfiguration, ProxiesAPI.ProxyListResponse> {
    return new ObjectPager(async () => {
      const response = await this.api.proxies.list({ ...params }, options);
      return new PagedObjectPage(
        (response['data'] ?? []).map(
          (info) => new ProxyConfiguration(this.api, info['proxyId'], info, false, ''),
        ),
        response,
      );
    });
  }
}

export type ConnectProxyListPage = PagedObjectPage<ConnectProxy, ConnectProxiesAPI.ProxyListResponse>;
export class ConnectProxyManager {
  constructor(readonly api: Raw) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('ConnectProxyManager');
  }

  fromId(id: string): ConnectProxy {
    return new ConnectProxy(this.api, id);
  }

  async get(id: string, options?: RequestOptions): Promise<ConnectProxy> {
    const info = await this.api.connect.proxies.retrieve(
      id,
      boundOptions(options, [{ name: 'id', location: 'path', value: id }]),
    );
    return new ConnectProxy(this.api, id, info, false, '');
  }

  list(
    params?: ConnectProxiesAPI.ProxyListParams,
    options?: RequestOptions,
  ): ObjectPager<ConnectProxy, ConnectProxiesAPI.ProxyListResponse> {
    const load = async (
      page: number,
    ): Promise<PagedObjectPage<ConnectProxy, ConnectProxiesAPI.ProxyListResponse>> => {
      const pageOptions = pageRequestOptions(options, 'page', page, {
        country: params?.['country'],
        page: params?.['page'],
        pageSize: params?.['pageSize'],
      });
      const response = await this.api.connect.proxies.list({ ...params }, pageOptions);
      return new PagedObjectPage(
        (response['items'] ?? []).map((info) => new ConnectProxy(this.api, info['id'], info, false, '')),
        response,
        {
          next: () =>
            nextObjectPage(
              response['pagination']['page'],
              response['pagination']['hasNext'],
              response['pagination']['pages'],
              page,
            ),
          load,
        },
      );
    };
    return new ObjectPager(() => load(params?.['page'] ?? 1));
  }

  /**
   * Purchases a proxy; may incur charges or require checkout.
   *
   * Provisions a proxy of the requested type for the caller in the selected country.
   */
  buy(params: ConnectProxiesAPI.ProxyBuyParams, options?: RequestOptions): APIPromise<ConnectProxy> {
    const result = this.api.connect.proxies.buy({ ...params }, options);
    return result._thenUnwrap((info) => new ConnectProxy(this.api, info['id'], info, false, ''));
  }
}

export type ConnectUserListPage = PagedObjectPage<ConnectUser, UsersAPI.UserListResponse>;
export class ConnectUserManager {
  constructor(readonly api: Raw) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('ConnectUserManager');
  }

  fromId(id: string): ConnectUser {
    return new ConnectUser(this.api, id);
  }

  async get(id: string, options?: RequestOptions): Promise<ConnectUser> {
    const info = await this.api.connect.users.retrieve(
      id,
      boundOptions(options, [{ name: 'id', location: 'path', value: id }]),
    );
    return new ConnectUser(this.api, id, info, false, '');
  }

  /**
   * Creates a SOCKS5 credential, optionally bound to a proxy for dedicated routing.
   * Username and password are generated when omitted.
   */
  async create(params?: UsersAPI.UserCreateParams, options?: RequestOptions): Promise<ConnectUser> {
    const requestOptions = createRequestOptions(options);
    const info = await this.api.connect.users.create({ ...params }, requestOptions);
    const object = new ConnectUser(this.api, info['id'], info, true, '');
    return object;
  }

  list(
    params?: UsersAPI.UserListParams,
    options?: RequestOptions,
  ): ObjectPager<ConnectUser, UsersAPI.UserListResponse> {
    const load = async (page: number): Promise<PagedObjectPage<ConnectUser, UsersAPI.UserListResponse>> => {
      const pageOptions = pageRequestOptions(options, 'page', page, {
        page: params?.['page'],
        pageSize: params?.['pageSize'],
        proxyId: params?.['proxyId'],
      });
      const response = await this.api.connect.users.list({ ...params }, pageOptions);
      return new PagedObjectPage(
        (response['items'] ?? []).map((info) => new ConnectUser(this.api, info['id'], info, false, '')),
        response,
        {
          next: () =>
            nextObjectPage(
              response['pagination']['page'],
              response['pagination']['hasNext'],
              response['pagination']['pages'],
              page,
            ),
          load,
        },
      );
    };
    return new ObjectPager(() => load(params?.['page'] ?? 1));
  }
}

export type TaskListPage = PagedObjectPage<Task, ResourcesTasksAPI.TaskListResponse>;
export class TaskManager {
  constructor(readonly api: Raw) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('TaskManager');
  }

  fromId(id: string): Task {
    return new Task(this.api, id);
  }

  async get(id: string, options?: RequestOptions): Promise<Task> {
    const info = await this.api.tasks.retrieve(
      id,
      boundOptions(options, [{ name: 'task_id', location: 'path', value: id }]),
    );
    return new Task(this.api, id, info, false, undefined, 'task');
  }

  list(
    params?: ResourcesTasksAPI.TaskListParams,
    options?: RequestOptions,
  ): ObjectPager<Task, ResourcesTasksAPI.TaskListResponse> {
    const load = async (page: number): Promise<PagedObjectPage<Task, ResourcesTasksAPI.TaskListResponse>> => {
      const pageOptions = pageRequestOptions(options, 'page', page, {
        createdBy: params?.['createdBy'],
        mine: params?.['mine'],
        orderBy: params?.['orderBy'],
        orderByDirection: params?.['orderByDirection'],
        page: params?.['page'],
        pageSize: params?.['pageSize'],
        query: params?.['query'],
        source: params?.['source'],
        status: params?.['status'],
      });
      const response = await this.api.tasks.list({ ...params }, pageOptions);
      return new PagedObjectPage(
        (response['items'] ?? []).map((info) => new Task(this.api, info['id'], info, false, undefined, '')),
        response,
        {
          next: () =>
            nextObjectPage(
              response['pagination']['page'],
              response['pagination']['hasNext'],
              response['pagination']['pages'],
              page,
            ),
          load,
        },
      );
    };
    return new ObjectPager(() => load(params?.['page'] ?? 1));
  }

  /**
   * Create and dispatch a new agent task, returning an SSE stream of task events.
   * Cancels the task if the client disconnects.
   */
  runStreamed(
    params: ResourcesTasksAPI.TaskRunStreamedParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const result = this.api.tasks.runStreamed({ ...params }, options);
    return result;
  }

  /**
   * Create and dispatch a new agent task. Returns the task ID and device stream
   * details.
   */
  run<Schema extends OutputSchema<unknown>>(
    params: Omit<ResourcesTasksAPI.TaskRunParams, 'outputSchema'> & { outputSchema: Schema },
    options?: RequestOptions,
  ): APIPromise<Task<OutputSchemaValue<Schema>>>;
  run(params: ResourcesTasksAPI.TaskRunParams, options?: RequestOptions): APIPromise<Task>;
  run(
    params: Omit<ResourcesTasksAPI.TaskRunParams, 'outputSchema'> & {
      outputSchema?: OutputSchema<unknown> | { [key: string]: unknown } | null;
    },
    options?: RequestOptions,
  ): APIPromise<Task<unknown> | Task> {
    const outputSchema = params?.['outputSchema'];
    const parser = isOutputSchema<unknown>(outputSchema) ? outputSchema : undefined;
    const requestParams = {
      ...params,
      ['outputSchema']: parser ? parser.jsonSchema : (outputSchema as { [key: string]: unknown } | null),
    };
    const result = this.api.tasks.run({ ...requestParams }, options);
    return result._thenUnwrap((info) => new Task<unknown>(this.api, info['id'], info, false, parser, ''));
  }
}

export type TriggerListPage = PagedObjectPage<Trigger, TriggersAPI.TriggerListResponse>;
export class TriggerManager {
  constructor(readonly api: Raw) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('TriggerManager');
  }

  fromId(id: string): Trigger {
    return new Trigger(this.api, id);
  }

  async get(id: string, options?: RequestOptions): Promise<Trigger> {
    const info = await this.api.workflows.triggers.retrieve(
      id,
      boundOptions(options, [{ name: 'triggerId', location: 'path', value: id }]),
    );
    return new Trigger(this.api, id, info, false, 'data');
  }

  /**
   * Create a trigger with an activation type of `event`, `schedule`, or `custom`.
   * Each type requires its own fields (e.g. `eventType` and optional `conditions`
   * for events, `scheduleRule` and `timezone` for schedules, `customPayloadSchema`
   * for custom or schedule triggers); mismatched fields are rejected. Schedule
   * triggers may store an optional JSON object `payload` (at most 1 MiB); it
   * requires `customPayloadSchema`, is validated against it (422 on mismatch), and
   * is available as `event.payload` on every scheduled, manual, or verification run.
   * When a schema is configured, omitted payload values are validated as an empty
   * object.
   *
   * Supports an optional `Idempotency-Key` header (1-255 printable ASCII
   * characters). Replays with the same key and an identical body return the original
   * 201; a changed body under the same key returns 422 `idempotency_key_reused`.
   */
  async create(params: TriggersAPI.TriggerCreateParams, options?: RequestOptions): Promise<Trigger> {
    const requestOptions = createRequestOptions(options);
    const info = await this.api.workflows.triggers.create({ ...params }, requestOptions);
    const object = new Trigger(this.api, info['data']['id'], info, true, 'data');
    return object;
  }

  list(
    params?: TriggersAPI.TriggerListParams,
    options?: RequestOptions,
  ): ObjectPager<Trigger, TriggersAPI.TriggerListResponse> {
    const load = async (page: number): Promise<PagedObjectPage<Trigger, TriggersAPI.TriggerListResponse>> => {
      const pageOptions = pageRequestOptions(options, 'page', page, {
        activation: params?.['activation'],
        eventType: params?.['eventType'],
        orderBy: params?.['orderBy'],
        orderByDirection: params?.['orderByDirection'],
        page: params?.['page'],
        pageSize: params?.['pageSize'],
        search: params?.['search'],
      });
      const response = await this.api.workflows.triggers.list({ ...params }, pageOptions);
      return new PagedObjectPage(
        (response['items'] ?? []).map((info) => new Trigger(this.api, info['id'], info, false, '')),
        response,
        {
          next: () =>
            nextObjectPage(
              response['pagination']['page'],
              response['pagination']['hasNext'],
              response['pagination']['pages'],
              page,
            ),
          load,
        },
      );
    };
    return new ObjectPager(() => load(params?.['page'] ?? 1));
  }
}

export type CatalogEntryListPage = PagedObjectPage<CatalogEntry, ActionCatalogAPI.ActionCatalogListResponse>;
export class CatalogEntryManager {
  constructor(readonly api: Raw) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('CatalogEntryManager');
  }

  fromId(id: string): CatalogEntry {
    return new CatalogEntry(this.api, id);
  }

  async get(
    id: string,
    params?: ActionCatalogAPI.ActionCatalogRetrieveParams,
    options?: RequestOptions,
  ): Promise<CatalogEntry> {
    const info = await this.api.workflows.actionCatalog.retrieve(
      id,
      { ...params },
      boundOptions(options, [{ name: 'catalogEntryId', location: 'path', value: id }]),
    );
    return new CatalogEntry(this.api, id, info, false, 'data');
  }

  list(
    params?: ActionCatalogAPI.ActionCatalogListParams,
    options?: RequestOptions,
  ): ObjectPager<CatalogEntry, ActionCatalogAPI.ActionCatalogListResponse> {
    const load = async (
      page: number,
    ): Promise<PagedObjectPage<CatalogEntry, ActionCatalogAPI.ActionCatalogListResponse>> => {
      const pageOptions = pageRequestOptions(options, 'page', page, {
        page: params?.['page'],
        pageSize: params?.['pageSize'],
        profile: params?.['profile'],
        service: params?.['service'],
      });
      const response = await this.api.workflows.actionCatalog.list({ ...params }, pageOptions);
      return new PagedObjectPage(
        (response['items'] ?? []).map((info) => new CatalogEntry(this.api, info['id'], info, false, '')),
        response,
        {
          next: () =>
            nextObjectPage(
              response['pagination']['page'],
              response['pagination']['hasNext'],
              response['pagination']['pages'],
              page,
            ),
          load,
        },
      );
    };
    return new ObjectPager(() => load(params?.['page'] ?? 1));
  }
}

export type WorkflowActionListPage = PagedObjectPage<WorkflowAction, WorkflowsActionsAPI.ActionListResponse>;
export class WorkflowActionManager {
  readonly services;

  constructor(readonly api: Raw) {
    configureObject(this);
    this.services = {
      /**
       * Return the names of the services that actions can be built against. Use these
       * values to look up each service's allowed methods.
       */
      list: (options?: RequestOptions): APIPromise<ServicesAPI.ServiceListResponse> => {
        const result = this.api.workflows.actions.services.list(options);
        return result;
      },
      /**
       * Return the methods allowed for the given service, each with its parameter
       * definitions (name, type, whether required, description, and optional
       * default/example). Returns 404 if the service is unknown.
       */
      listMethods: (
        service: string,
        options?: RequestOptions,
      ): APIPromise<ServicesAPI.ServiceListMethodsResponse> => {
        const result = this.api.workflows.actions.services.listMethods(service, options);
        return result;
      },
    };
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('WorkflowActionManager');
  }

  fromId(id: string): WorkflowAction {
    return new WorkflowAction(this.api, id);
  }

  async get(
    id: string,
    params?: WorkflowsActionsAPI.ActionRetrieveParams,
    options?: RequestOptions,
  ): Promise<WorkflowAction> {
    const info = await this.api.workflows.actions.retrieve(
      id,
      { ...params },
      boundOptions(options, [{ name: 'actionId', location: 'path', value: id }]),
    );
    return new WorkflowAction(this.api, id, info, false, 'data');
  }

  /**
   * Create a reusable action from a catalog entry (`catalogEntryId`), with an
   * optional `params` object supplying the values for that entry's service method.
   * Returns 400 if the params are invalid for the chosen catalog entry.
   *
   * Supports an optional `Idempotency-Key` header (1-255 printable ASCII
   * characters). Replays with the same key and an identical body return the original
   * 201; a changed body under the same key returns 422 `idempotency_key_reused`.
   */
  async create(
    params: WorkflowsActionsAPI.ActionCreateParams,
    options?: RequestOptions,
  ): Promise<WorkflowAction> {
    const requestOptions = createRequestOptions(options);
    const info = await this.api.workflows.actions.create({ ...params }, requestOptions);
    const object = new WorkflowAction(this.api, info['data']['id'], info, true, 'data');
    return object;
  }

  list(
    params?: WorkflowsActionsAPI.ActionListParams,
    options?: RequestOptions,
  ): ObjectPager<WorkflowAction, WorkflowsActionsAPI.ActionListResponse> {
    const load = async (
      page: number,
    ): Promise<PagedObjectPage<WorkflowAction, WorkflowsActionsAPI.ActionListResponse>> => {
      const pageOptions = pageRequestOptions(options, 'page', page, {
        orderBy: params?.['orderBy'],
        orderByDirection: params?.['orderByDirection'],
        page: params?.['page'],
        pageSize: params?.['pageSize'],
        profile: params?.['profile'],
        search: params?.['search'],
        service: params?.['service'],
      });
      const response = await this.api.workflows.actions.list({ ...params }, pageOptions);
      return new PagedObjectPage(
        (response['items'] ?? []).map((info) => new WorkflowAction(this.api, info['id'], info, false, '')),
        response,
        {
          next: () =>
            nextObjectPage(
              response['pagination']['page'],
              response['pagination']['hasNext'],
              response['pagination']['pages'],
              page,
            ),
          load,
        },
      );
    };
    return new ObjectPager(() => load(params?.['page'] ?? 1));
  }
}

export type FlowListPage = PagedObjectPage<Flow, FlowsAPI.FlowListResponse>;
export class FlowManager {
  constructor(readonly api: Raw) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('FlowManager');
  }

  fromId(id: string): Flow {
    return new Flow(this.api, id);
  }

  async get(id: string, options?: RequestOptions): Promise<Flow> {
    const info = await this.api.workflows.flows.retrieve(
      id,
      boundOptions(options, [{ name: 'flowId', location: 'path', value: id }]),
    );
    return new Flow(this.api, id, info, false, 'data');
  }

  /**
   * Create a flow that binds a trigger (`triggerId`) to an ordered list of actions,
   * with at least one action required. Optional settings include target `deviceIds`,
   * a cooldown (`cooldownSeconds`/`cooldownScope`), and webhook notifications on
   * success or failure.
   *
   * Supports an optional `Idempotency-Key` header (1-255 printable ASCII
   * characters). Replays with the same key and an identical body return the original
   * 201; a changed body under the same key returns 422 `idempotency_key_reused`.
   */
  async create(params: FlowsAPI.FlowCreateParams, options?: RequestOptions): Promise<Flow> {
    const requestOptions = createRequestOptions(options);
    const info = await this.api.workflows.flows.create({ ...params }, requestOptions);
    const object = new Flow(this.api, info['data']['id'], info, true, 'data');
    return object;
  }

  list(
    params?: FlowsAPI.FlowListParams,
    options?: RequestOptions,
  ): ObjectPager<Flow, FlowsAPI.FlowListResponse> {
    const load = async (page: number): Promise<PagedObjectPage<Flow, FlowsAPI.FlowListResponse>> => {
      const pageOptions = pageRequestOptions(options, 'page', page, {
        agentId: params?.['agentId'],
        createdBy: params?.['createdBy'],
        enabled: params?.['enabled'],
        mine: params?.['mine'],
        orderBy: params?.['orderBy'],
        orderByDirection: params?.['orderByDirection'],
        page: params?.['page'],
        pageSize: params?.['pageSize'],
        search: params?.['search'],
        status: params?.['status'],
        triggerId: params?.['triggerId'],
      });
      const response = await this.api.workflows.flows.list({ ...params }, pageOptions);
      return new PagedObjectPage(
        (response['items'] ?? []).map((info) => new Flow(this.api, info['id'], info, false, '')),
        response,
        {
          next: () =>
            nextObjectPage(
              response['pagination']['page'],
              response['pagination']['hasNext'],
              response['pagination']['pages'],
              page,
            ),
          load,
        },
      );
    };
    return new ObjectPager(() => load(params?.['page'] ?? 1));
  }

  /**
   * Returns the environment routine limit and remaining capacity for this owner and
   * agent bucket, counting enabled and disabled non-deleted flows. Omit agentId (or
   * use unassigned) for the unassigned bucket. This is advisory; create and clone
   * enforce admission under a bucket lock.
   */
  capacity(
    params?: FlowsAPI.FlowCapacityParams,
    options?: RequestOptions,
  ): APIPromise<FlowsAPI.FlowCapacityResponse> {
    const result = this.api.workflows.flows.capacity({ ...params }, options);
    return result;
  }

  /**
   * Get flow template context
   */
  templateContext(
    params?: FlowsAPI.FlowTemplateContextParams,
    options?: RequestOptions,
  ): APIPromise<FlowsAPI.FlowTemplateContextResponse> {
    const result = this.api.workflows.flows.templateContext({ ...params }, options);
    return result;
  }

  /**
   * Validate a flow
   */
  validate(
    params: FlowsAPI.FlowValidateParams.Variant0,
    options?: RequestOptions,
  ): APIPromise<FlowsAPI.FlowValidateResponse>;
  validate(
    params: FlowsAPI.FlowValidateParams.Variant1,
    options?: RequestOptions,
  ): APIPromise<FlowsAPI.FlowValidateResponse>;
  validate(
    params: FlowsAPI.FlowValidateParams,
    options?: RequestOptions,
  ): APIPromise<FlowsAPI.FlowValidateResponse>;
  validate(
    params: FlowsAPI.FlowValidateParams,
    options?: RequestOptions,
  ): APIPromise<FlowsAPI.FlowValidateResponse> {
    const result = this.api.workflows.flows.validate({ ...params }, options);
    return result;
  }
}

export type ExecutionListPage = PagedObjectPage<Execution, ExecutionsAPI.ExecutionListResponse>;
export class ExecutionManager {
  constructor(readonly api: Raw) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('ExecutionManager');
  }

  fromId(id: string): Execution {
    return new Execution(this.api, id);
  }

  async get(id: string, options?: RequestOptions): Promise<Execution> {
    const info = await this.api.workflows.executions.retrieve(
      id,
      boundOptions(options, [{ name: 'executionId', location: 'path', value: id }]),
    );
    return new Execution(this.api, id, info, false, 'data');
  }

  list(
    params?: ExecutionsAPI.ExecutionListParams,
    options?: RequestOptions,
  ): ObjectPager<Execution, ExecutionsAPI.ExecutionListResponse> {
    const load = async (
      page: number,
    ): Promise<PagedObjectPage<Execution, ExecutionsAPI.ExecutionListResponse>> => {
      const pageOptions = pageRequestOptions(options, 'page', page, {
        flowId: params?.['flowId'],
        from: params?.['from'],
        invocationId: params?.['invocationId'],
        orderBy: params?.['orderBy'],
        orderByDirection: params?.['orderByDirection'],
        page: params?.['page'],
        pageSize: params?.['pageSize'],
        search: params?.['search'],
        status: params?.['status'],
        to: params?.['to'],
        triggerId: params?.['triggerId'],
      });
      const response = await this.api.workflows.executions.list({ ...params }, pageOptions);
      return new PagedObjectPage(
        (response['items'] ?? []).map((info) => new Execution(this.api, info['id'], info, false, '')),
        response,
        {
          next: () =>
            nextObjectPage(
              response['pagination']['page'],
              response['pagination']['hasNext'],
              response['pagination']['pages'],
              page,
            ),
          load,
        },
      );
    };
    return new ObjectPager(() => load(params?.['page'] ?? 1));
  }

  /**
   * Return aggregate execution metrics — total count, counts by status, average
   * duration, and the last execution time. Can be scoped by `flowId`, `triggerId`,
   * and a `from`/`to` time range.
   */
  getMetrics(
    params?: ExecutionsAPI.ExecutionGetMetricsParams,
    options?: RequestOptions,
  ): APIPromise<ExecutionsAPI.ExecutionGetMetricsResponse> {
    const result = this.api.workflows.executions.getMetrics({ ...params }, options);
    return result;
  }
}

export type WebhookListPage = PagedObjectPage<Webhook, WebhooksAPI.WebhookListResponse>;
export class WebhookManager {
  readonly integrations;

  constructor(readonly api: Raw) {
    configureObject(this);
    this.integrations = {
      /**
       * Returns the integrations that can receive webhook events as channel messages
       * (e.g. Slack), with your org's connection state for each. Connect an integration
       * in the Cloud app before creating a webhook for it.
       */
      list: (options?: RequestOptions): APIPromise<IntegrationsAPI.IntegrationListResponse> => {
        const result = this.api.webhooks.integrations.list(options);
        return result;
      },
      /**
       * Returns the live list of targets (e.g. Slack channels the connected account is a
       * member of) for an integration. Pass a target's `args` together with the
       * integration `capability` to `POST /webhooks` with `kind: "integration"`.
       */
      listTargets: (
        capabilityID: string,
        params: IntegrationsAPI.IntegrationListTargetsParams,
        options?: RequestOptions,
      ): APIPromise<IntegrationsAPI.IntegrationListTargetsResponse> => {
        const result = this.api.webhooks.integrations.listTargets(capabilityID, { ...params }, options);
        return result;
      },
    };
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('WebhookManager');
  }

  fromId(id: string): Webhook {
    return new Webhook(this.api, id);
  }

  async get(id: string, options?: RequestOptions): Promise<Webhook> {
    const info = await this.api.webhooks.retrieve(
      id,
      boundOptions(options, [{ name: 'id', location: 'path', value: id }]),
    );
    return new Webhook(this.api, id, info, false, 'data');
  }

  /**
   * Creates a webhook subscription and an optional list of event types to subscribe
   * to (defaults to all when omitted). `kind: "http"` (the default) delivers signed
   * JSON to a URL; the response includes the generated signing secret, which is
   * returned only once at creation time and cannot be retrieved later.
   * `kind: "integration"` posts each event as a message into a connected integration
   * target (e.g. a Slack channel): pick the `capability` from
   * `GET /webhooks/integrations` and the `args` from
   * `GET /webhooks/integrations/{capabilityId}/targets`. Integration webhooks have
   * no signing secret. Send an `Idempotency-Key` header to make the create safe to
   * retry: the same key with the same body returns the existing webhook (status 201,
   * `Idempotent-Replayed: true`) instead of creating a second one, and the same key
   * with a different body is a 422. A replayed create does not return the signing
   * secret again; use rotate-secret if the original response was lost. If that
   * webhook was deleted in the meantime, the retry is a 404.
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.create({
   *   url: 'https://example.com/webhooks/droidrun',
   * });
   * ```
   */
  async create(params: WebhooksAPI.WebhookCreateParams, options?: RequestOptions): Promise<Webhook> {
    const requestOptions = createRequestOptions(options);
    const info = await this.api.webhooks.create({ ...params }, requestOptions);
    const object = new Webhook(this.api, info['data']['id'], info, true, 'data');
    return object;
  }

  list(
    params?: WebhooksAPI.WebhookListParams,
    options?: RequestOptions,
  ): ObjectPager<Webhook, WebhooksAPI.WebhookListResponse> {
    const load = async (page: number): Promise<PagedObjectPage<Webhook, WebhooksAPI.WebhookListResponse>> => {
      const pageOptions = pageRequestOptions(options, 'page', page, {
        createdBy: params?.['createdBy'],
        kind: params?.['kind'],
        mine: params?.['mine'],
        page: params?.['page'],
        pageSize: params?.['pageSize'],
        search: params?.['search'],
        status: params?.['status'],
      });
      const response = await this.api.webhooks.list({ ...params }, pageOptions);
      return new PagedObjectPage(
        (response['items'] ?? []).map((info) => new Webhook(this.api, info['id'], info, false, '')),
        response,
        {
          next: () =>
            nextObjectPage(
              response['pagination']['page'],
              response['pagination']['hasNext'],
              response['pagination']['pages'],
              page,
            ),
          load,
        },
      );
    };
    return new ObjectPager(() => load(params?.['page'] ?? 1));
  }

  verify(options: SignatureVerificationOptions): Promise<unknown> {
    return verifyWebhook(options);
  }
}

export type WebhookDeliveryListPage = PagedObjectPage<
  WebhookDelivery,
  DeliveriesAPI.DeliveryListForWebhookResponse
>;
export class WebhookDeliveryManager {
  constructor(
    readonly api: Raw,
    readonly webhookID: string,
  ) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('WebhookDeliveryManager');
  }

  fromId(id: string): WebhookDelivery {
    return new WebhookDelivery(this.api, this.webhookID, id);
  }

  async get(id: string, options?: RequestOptions): Promise<WebhookDelivery> {
    const info = await this.api.webhooks.deliveries.retrieveAttempts(
      id,
      { id: this.webhookID },
      boundOptions(options, [
        { name: 'deliveryId', location: 'path', value: id },
        { name: 'id', location: 'path', value: this.webhookID },
      ]),
    );
    return new WebhookDelivery(this.api, this.webhookID, id, info, false, 'data');
  }

  list(
    params?: DeliveriesAPI.DeliveryListForWebhookParams,
    options?: RequestOptions,
  ): ObjectPager<WebhookDelivery, DeliveriesAPI.DeliveryListForWebhookResponse> {
    const load = async (
      page: number,
    ): Promise<PagedObjectPage<WebhookDelivery, DeliveriesAPI.DeliveryListForWebhookResponse>> => {
      const pageOptions = pageRequestOptions(options, 'page', page, {
        eventId: params?.['eventId'],
        page: params?.['page'],
        pageSize: params?.['pageSize'],
      });
      const response = await this.api.webhooks.deliveries.listForWebhook(
        this.webhookID,
        { ...params },
        boundOptions(pageOptions, [{ name: 'id', location: 'path', value: this.webhookID }]),
      );
      return new PagedObjectPage(
        (response['items'] ?? []).map(
          (info) => new WebhookDelivery(this.api, this.webhookID, info['id'], info, false, ''),
        ),
        response,
        {
          next: () =>
            nextObjectPage(
              response['pagination']['page'],
              response['pagination']['hasNext'],
              response['pagination']['pages'],
              page,
            ),
          load,
        },
      );
    };
    return new ObjectPager(() => load(params?.['page'] ?? 1));
  }
}

export type MailboxListPage = PagedObjectPage<Mailbox, MailboxesAPI.MailboxListResponse>;
export class MailboxManager {
  readonly connections;

  constructor(readonly api: Raw) {
    configureObject(this);
    this.connections = new MailboxConnectionManager(this.api);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('MailboxManager');
  }

  fromId(id: string): Mailbox {
    return new Mailbox(this.api, id);
  }

  async get(id: string, options?: RequestOptions): Promise<Mailbox> {
    const info = await this.api.mailboxes.retrieve(
      id,
      boundOptions(options, [{ name: 'mailboxId', location: 'path', value: id }]),
    );
    return new Mailbox(this.api, id, info, false, 'data');
  }

  /**
   * Claims or rents a mailbox. Included capacity may apply; paid rentals may require checkout.
   *
   * Creates a mailbox on the default domain or a connected custom domain. An
   * optional `localPart` selects the address. Replaying the same Idempotency-Key and
   * payload returns the original mailbox. Fresh requests and replays return 202 with
   * the current mailbox state. Poll the mailbox when the response does not yet
   * include a checkout URL.
   *
   * @example
   * ```ts
   * const mailbox = await client.mailboxes.create();
   * ```
   */
  async create(params?: MailboxesAPI.MailboxCreateParams, options?: RequestOptions): Promise<Mailbox> {
    const requestOptions = createRequestOptions(options);
    const info = await this.api.mailboxes.create({ ...params }, requestOptions);
    const object = new Mailbox(this.api, info['data']['id'], info, true, 'data');
    return object;
  }

  list(
    params?: MailboxesAPI.MailboxListParams,
    options?: RequestOptions,
  ): ObjectPager<Mailbox, MailboxesAPI.MailboxListResponse> {
    const load = async (
      page: number,
    ): Promise<PagedObjectPage<Mailbox, MailboxesAPI.MailboxListResponse>> => {
      const pageOptions = pageRequestOptions(options, 'page', page, {
        page: params?.['page'],
        pageSize: params?.['pageSize'],
      });
      const response = await this.api.mailboxes.list({ ...params }, pageOptions);
      return new PagedObjectPage(
        (response['items'] ?? []).map((info) => new Mailbox(this.api, info['id'], info, false, '')),
        response,
        {
          next: () =>
            nextObjectPage(
              response['pagination']['page'],
              response['pagination']['hasNext'],
              response['pagination']['pages'],
              page,
            ),
          load,
        },
      );
    };
    return new ObjectPager(() => load(params?.['page'] ?? 1));
  }

  /**
   * Returns the number of mailboxes currently available through included capacity.
   *
   * @example
   * ```ts
   * const response = await client.mailboxes.capacity();
   * ```
   */
  capacity(options?: RequestOptions): APIPromise<MailboxesAPI.MailboxCapacityResponse> {
    const result = this.api.mailboxes.capacity(options);
    return result;
  }
}

export class MailboxConnectionManager {
  constructor(readonly api: Raw) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('MailboxConnectionManager');
  }

  fromId(id: string): MailboxConnection {
    return new MailboxConnection(this.api, id);
  }

  async get(id: string, options?: RequestOptions): Promise<MailboxConnection> {
    const info = await this.api.mailboxes.connections.retrieve(
      id,
      boundOptions(options, [{ name: 'connectionId', location: 'path', value: id }]),
    );
    return new MailboxConnection(this.api, id, info, false, '');
  }

  /**
   * Links the caller’s Gmail account. Replaying the same Idempotency-Key returns the
   * same mailbox. When Gmail is already active, redirectUrl is null and the mailbox
   * is usable immediately.
   *
   * @example
   * ```ts
   * const connection =
   *   await client.mailboxes.connections.create({
   *     provider: 'gmail',
   *   });
   * ```
   */
  async create(
    params: ConnectionsAPI.ConnectionCreateParams,
    options?: RequestOptions,
  ): Promise<MailboxConnection> {
    const requestOptions = createRequestOptions(options);
    const info = await this.api.mailboxes.connections.create({ ...params }, requestOptions);
    const object = new MailboxConnection(this.api, info['connectionId'], info, true, '');
    return object;
  }
}

export type MailboxMessageListPage = PagedObjectPage<MailboxMessage, MessagesAPI.MessageListResponse>;
export class MailboxMessageManager {
  constructor(
    readonly api: Raw,
    readonly mailboxID: string,
  ) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('MailboxMessageManager');
  }

  fromId(id: string): MailboxMessage {
    return new MailboxMessage(this.api, this.mailboxID, id);
  }

  async get(
    id: string,
    params?: Omit<MessagesAPI.MessageRetrieveParams, 'mailboxId'>,
    options?: RequestOptions,
  ): Promise<MailboxMessage> {
    const info = await this.api.mailboxes.messages.retrieve(
      id,
      { ...params, mailboxId: this.mailboxID },
      boundOptions(options, [
        { name: 'messageId', location: 'path', value: id },
        { name: 'mailboxId', location: 'path', value: this.mailboxID },
      ]),
    );
    return new MailboxMessage(this.api, this.mailboxID, id, info, false, 'data');
  }

  list(
    params?: MessagesAPI.MessageListParams,
    options?: RequestOptions,
  ): ObjectPager<MailboxMessage, MessagesAPI.MessageListResponse> {
    const load = async (
      page: number | string | undefined,
      visited: ReadonlySet<string> = new Set(),
    ): Promise<PagedObjectPage<MailboxMessage, MessagesAPI.MessageListResponse>> => {
      const seen = new Set(visited);
      if (typeof page === 'string') seen.add(page);
      const pageOptions = pageRequestOptions(options, 'cursor', page, {
        after: params?.['after'],
        cursor: params?.['cursor'],
        hasOtp: params?.['hasOtp'],
        limit: params?.['limit'],
        sender: params?.['sender'],
      });
      const response = await this.api.mailboxes.messages.list(
        this.mailboxID,
        { ...params },
        boundOptions(pageOptions, [{ name: 'mailboxId', location: 'path', value: this.mailboxID }]),
      );
      return new PagedObjectPage(
        (response['items'] ?? []).map(
          (info) => new MailboxMessage(this.api, this.mailboxID, info['id'], info, false, ''),
        ),
        response,
        {
          next: () => nextObjectCursor(response['nextCursor'], page, seen),
          load: (next) => load(next, seen),
        },
      );
    };
    return new ObjectPager(() => load(params?.['cursor']));
  }
}

export type AgentFileListPage = ObjectPage<AgentFile, FilesAPI.FileListResponse>;
export class AgentFileManager {
  constructor(readonly api: Raw) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('AgentFileManager');
  }

  fromId(id: string): AgentFile {
    return new AgentFile(this.api, id);
  }

  list(
    params?: FilesAPI.FileListParams,
    options?: RequestOptions,
  ): ObjectPager<AgentFile, FilesAPI.FileListResponse> {
    return new ObjectPager(async () => {
      const response = await this.api.files.list({ ...params }, options);
      return new PagedObjectPage(
        (response['files'] ?? []).map((info) => new AgentFile(this.api, info['fileId'], info, false, '')),
        response,
      );
    });
  }

  /**
   * Mint a presigned PUT URL and a fileId for uploading a user file.
   */
  uploadURL(
    params: FilesAPI.FileUploadURLParams,
    options?: RequestOptions,
  ): APIPromise<FilesAPI.FileUploadURLResponse> {
    const result = this.api.files.uploadURL({ ...params }, options);
    return result;
  }

  /** Upload bytes to presigned storage, confirm, and return the object. Uploading uses storage quota. */
  async upload(
    params: Omit<FilesAPI.FileUploadURLParams, 'filename' | 'mimeType' | 'sizeBytes'> & {
      file: UploadFile;
      filename?: string;
      mimeType?: string;
      sizeBytes?: number;
    },
    options?: RequestOptions,
  ): Promise<AgentFile> {
    const files = await Promise.all([
      prepareUpload(
        params.file,
        { filename: params['filename'], contentType: params['mimeType'], size: params['sizeBytes'] },
        undefined,
      ),
    ]);
    if (!files.length || new Set(files.map((file) => file.filename)).size !== files.length)
      throw new TypeError('Upload needs unique, nonempty file names');
    const { file: _file, ...rest } = params;
    const requestParams = {
      ...rest,
      filename: files[0]!.filename,
      mimeType: files[0]!.contentType,
      sizeBytes: files[0]!.size,
    } as FilesAPI.FileUploadURLParams;
    const requestOptions = boundOptions(options, [
      { name: 'filename', location: 'body', value: requestParams['filename'] },
      { name: 'mimeType', location: 'body', value: requestParams['mimeType'] },
      { name: 'sizeBytes', location: 'body', value: requestParams['sizeBytes'] },
    ]);
    const issued = await this.api.files.uploadURL({ ...requestParams }, requestOptions);
    let confirmed = false;
    let confirming = false;
    try {
      const urls = uploadURLs(issued, files, {
        request: 'upload_url',
        url_path: 'putUrl',
        name_param: 'filename',
        mime_param: 'mimeType',
        size_param: 'sizeBytes',
        id_path: 'fileId',
        confirm: 'confirm',
        fail: 'cancel_pending',
        returns: 'AgentFile',
      });
      for (const [index, file] of files.entries()) await putUpload(this.api, file, urls[index]!, options);
      confirming = true;
      const info = await this.api.files.confirm(
        issued['fileId'],
        boundOptions(options, [{ name: 'fileId', location: 'path', value: issued['fileId'] }]),
      );
      confirmed = true;
      return new AgentFile(this.api, info['fileId'], info, false, '');
    } catch (error) {
      const cleanupOptions = { ...options, signal: undefined };
      if (!confirmed && (!confirming || definiteConfirmFailure(error))) {
        try {
          await this.api.files.cancelPending(
            issued['fileId'],
            boundOptions(cleanupOptions, [{ name: 'fileId', location: 'path', value: issued['fileId'] }]),
          );
        } catch {
          /* Preserve the original upload error. */
        }
      }
      if (error instanceof APIUserAbortError) throw error;
      throw new UploadError(error);
    }
  }
}

export type AgentListPage = ObjectPage<Agent, AgentsAPI.AgentListResponse>;
export class AgentManager {
  readonly requests;

  constructor(readonly api: Raw) {
    configureObject(this);
    this.requests = new AgentRequestManager(this.api);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('AgentManager');
  }

  fromId(id: string): Agent {
    return new Agent(this.api, id);
  }

  /**
   * Creates an Agent directly on the owner runtime, without a chat message or
   * approval card. Provisioning runs in the background; the new Agent has no chat
   * history. Requires Idempotency-Key; a replay returns the current Agent with the
   * original 201 status.
   */
  async create(params: AgentsAPI.AgentCreateParams, options?: RequestOptions): Promise<Agent> {
    const requestOptions = createRequestOptions(options);
    const info = await this.api.agents.create({ ...params }, requestOptions);
    const object = new Agent(this.api, info['agent']['id'], info, true, 'agent');
    return object;
  }

  list(options?: RequestOptions): ObjectPager<Agent, AgentsAPI.AgentListResponse> {
    return new ObjectPager(async () => {
      const response = await this.api.agents.list(options);
      return new PagedObjectPage(
        (response['agents'] ?? []).map((info) => new Agent(this.api, info['id'], info, false, '')),
        response,
      );
    });
  }

  /**
   * List the environment model profiles and their default. Model routing is managed
   * by the server.
   */
  modelProfiles(options?: RequestOptions): APIPromise<AgentsAPI.AgentModelProfilesResponse> {
    const result = this.api.agents.modelProfiles(options);
    return result;
  }
}

export type AgentRequestListPage = ObjectPage<AgentRequest, RequestsAPI.RequestListResponse>;
export class AgentRequestManager {
  constructor(readonly api: Raw) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('AgentRequestManager');
  }

  fromId(id: string): AgentRequest {
    return new AgentRequest(this.api, id);
  }

  async get(id: string, options?: RequestOptions): Promise<AgentRequest> {
    const info = await this.api.agents.requests.retrieve(
      id,
      boundOptions(options, [{ name: 'requestId', location: 'path', value: id }]),
    );
    return new AgentRequest(this.api, id, info, false, '');
  }

  list(
    params?: RequestsAPI.RequestListParams,
    options?: RequestOptions,
  ): ObjectPager<AgentRequest, RequestsAPI.RequestListResponse> {
    return new ObjectPager(async () => {
      const response = await this.api.agents.requests.list({ ...params }, options);
      return new PagedObjectPage(
        (response['requests'] ?? []).map((info) => new AgentRequest(this.api, info['id'], info, false, '')),
        response,
      );
    });
  }

  /**
   * Owner-scoped. Returns newest requests where the Agent is source or target. Use
   * nextCursor as before to read older pages. Invalid cursors return 400
   * invalid_cursor.
   */
  listForAgent(
    agentID: string,
    params?: RequestsAPI.RequestListForAgentParams,
    options?: RequestOptions,
  ): APIPromise<RequestsAPI.RequestListForAgentResponse> {
    const result = this.api.agents.requests.listForAgent(agentID, { ...params }, options);
    return result;
  }

  /**
   * Owner-scoped. Returns the Agent-to-Agent request whose target session is
   * {sessionId}, including its payloads and event timeline. Unknown sessions,
   * source-only sessions, sessions without a request, and another owner's sessions
   * return 404 agent_request_not_found.
   */
  retrieveBySession(sessionID: string, options?: RequestOptions): APIPromise<AgentRequest> {
    const result = this.api.agents.requests.retrieveBySession(sessionID, options);
    return result._thenUnwrap((info) => new AgentRequest(this.api, info['id'], info, false, ''));
  }
}

export type NumberMessageListPage = PagedObjectPage<NumberMessage, ResourcesMessagesAPI.MessageListResponse>;
export class NumberMessageManager {
  readonly conversations;

  constructor(readonly api: Raw) {
    configureObject(this);
    this.conversations = {
      /**
       * Lists SMS conversations by recent activity. Use both cursor fields from
       * `nextCursor` to fetch the next page.
       */
      list: (
        params?: MessagesConversationsAPI.ConversationListParams,
        options?: RequestOptions,
      ): APIPromise<MessagesConversationsAPI.ConversationListResponse> => {
        const result = this.api.messages.conversations.list({ ...params }, options);
        return result;
      },
      /**
       * Marks inbound messages in a conversation as read through the supplied cursor.
       * Repeating the request is safe.
       */
      markRead: (
        params: MessagesConversationsAPI.ConversationMarkReadParams,
        options?: RequestOptions,
      ): APIPromise<MessagesConversationsAPI.ConversationMarkReadResponse> => {
        const result = this.api.messages.conversations.markRead({ ...params }, options);
        return result;
      },
    };
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('NumberMessageManager');
  }

  fromId(id: string): NumberMessage {
    return new NumberMessage(this.api, id);
  }

  async get(id: string, options?: RequestOptions): Promise<NumberMessage> {
    const info = await this.api.messages.retrieve(
      id,
      boundOptions(options, [{ name: 'id', location: 'path', value: id }]),
    );
    return new NumberMessage(this.api, id, info, false, 'data');
  }

  list(
    params?: ResourcesMessagesAPI.MessageListParams,
    options?: RequestOptions,
  ): ObjectPager<NumberMessage, ResourcesMessagesAPI.MessageListResponse> {
    const load = async (
      page: number,
    ): Promise<PagedObjectPage<NumberMessage, ResourcesMessagesAPI.MessageListResponse>> => {
      const pageOptions = pageRequestOptions(options, 'page', page, {
        direction: params?.['direction'],
        esimId: params?.['esimId'],
        numberId: params?.['numberId'],
        page: params?.['page'],
        pageSize: params?.['pageSize'],
        peerKey: params?.['peerKey'],
        peerNumber: params?.['peerNumber'],
        status: params?.['status'],
      });
      const response = await this.api.messages.list({ ...params }, pageOptions);
      return new PagedObjectPage(
        (response['items'] ?? []).map((info) => new NumberMessage(this.api, info['id'], info, false, '')),
        response,
        {
          next: () =>
            nextObjectPage(
              response['pagination']['page'],
              response['pagination']['hasNext'],
              response['pagination']['pages'],
              page,
            ),
          load,
        },
      );
    };
    return new ObjectPager(() => load(params?.['page'] ?? 1));
  }
}

export type PhoneNumberListPage = PagedObjectPage<PhoneNumber, NumbersAPI.NumberListResponse>;
export class PhoneNumberManager {
  constructor(readonly api: Raw) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('PhoneNumberManager');
  }

  fromId(id: string): PhoneNumber {
    return new PhoneNumber(this.api, id);
  }

  async get(id: string, options?: RequestOptions): Promise<PhoneNumber> {
    const info = await this.api.numbers.retrieve(
      id,
      boundOptions(options, [{ name: 'id', location: 'path', value: id }]),
    );
    return new PhoneNumber(this.api, id, info, false, 'data');
  }

  /**
   * Purchases a phone number. Poll the returned number for status updates.
   *
   * Starts a phone-number purchase. Poll the returned phone number for status
   * updates.
   *
   * @example
   * ```ts
   * const number = await client.numbers.create();
   * ```
   */
  async create(params?: NumbersAPI.NumberCreateParams, options?: RequestOptions): Promise<PhoneNumber> {
    const requestOptions = createRequestOptions(options);
    const info = await this.api.numbers.create({ ...params }, requestOptions);
    const object = new PhoneNumber(this.api, info['data']['numberId'], info, true, 'data');
    return object;
  }

  list(
    params?: NumbersAPI.NumberListParams,
    options?: RequestOptions,
  ): ObjectPager<PhoneNumber, NumbersAPI.NumberListResponse> {
    const load = async (
      page: number,
    ): Promise<PagedObjectPage<PhoneNumber, NumbersAPI.NumberListResponse>> => {
      const pageOptions = pageRequestOptions(options, 'page', page, {
        page: params?.['page'],
        pageSize: params?.['pageSize'],
      });
      const response = await this.api.numbers.list({ ...params }, pageOptions);
      return new PagedObjectPage(
        (response['items'] ?? []).map((info) => new PhoneNumber(this.api, info['id'], info, false, '')),
        response,
        {
          next: () =>
            nextObjectPage(
              response['pagination']['page'],
              response['pagination']['hasNext'],
              response['pagination']['pages'],
              page,
            ),
          load,
        },
      );
    };
    return new ObjectPager(() => load(params?.['page'] ?? 1));
  }

  /**
   * Returns included phone capacity for a country. Creating a phone is
   * authoritative.
   *
   * @example
   * ```ts
   * const response = await client.numbers.capacity({
   *   country: 'de',
   * });
   * ```
   */
  capacity(
    params: NumbersAPI.NumberCapacityParams,
    options?: RequestOptions,
  ): APIPromise<NumbersAPI.NumberCapacityResponse> {
    const result = this.api.numbers.capacity({ ...params }, options);
    return result;
  }

  /**
   * Lists available countries and current phone-number availability.
   *
   * @example
   * ```ts
   * const response = await client.numbers.countries();
   * ```
   */
  countries(options?: RequestOptions): APIPromise<NumbersAPI.NumberCountriesResponse> {
    const result = this.api.numbers.countries(options);
    return result;
  }
}

export type AppInfo =
  AppsAPI.AppRetrieveResponse | NonNullable<NonNullable<AppsAPI.AppListResponse>['items']>[number];

export class App {
  constructor(
    readonly api: Raw,
    readonly id: string,
    public info: AppInfo | undefined = undefined,
    private owned = false,
    private infoRoot = 'data',
  ) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot(
      'App',
      this.id,
      this.info === undefined ? undefined : { displayName: this.displayName, platform: this.platform },
    );
  }

  refresh(options?: RequestOptions): APIPromise<AppsAPI.AppRetrieveResponse> {
    const result = this.api.apps.retrieve(
      this.id,
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result._thenUnwrap((info) => {
      this.info = info;
      this.infoRoot = 'data';
      return info;
    });
  }

  /** Reads the last response without making a request. */
  get displayName(): string | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'displayName') as string | undefined;
  }

  /** Reads the last response without making a request. */
  get platform(): 'android' | 'ios' | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'platform') as 'android' | 'ios' | undefined;
  }

  /**
   * Deletes an uploaded app by ID. Removes its files and metadata.
   *
   * @example
   * ```ts
   * const app = await client.apps.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(options?: RequestOptions): APIPromise<AppsAPI.AppDeleteResponse> {
    const result = this.api.apps.delete(
      this.id,
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Retrieves all versions of an app visible to the user (own uploads + system
   * versions)
   *
   * @example
   * ```ts
   * const response = await client.apps.listVersions(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  listVersions(options?: RequestOptions): APIPromise<AppsAPI.AppListVersionsResponse> {
    const result = this.api.apps.listVersions(
      this.id,
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result;
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type CredentialPackageInfo =
  | CredentialsPackagesAPI.PackageCreateResponse
  | CredentialsPackagesAPI.PackageListResponse
  | NonNullable<NonNullable<CredentialsPackagesAPI.PackageListAllResponse>['data']>[number];

/** A package identified by its name. get preserves the credentials-array response in info. */
export class CredentialPackage {
  readonly credentials;

  readonly links;

  constructor(
    readonly api: Raw,
    readonly id: string,
    public info: CredentialPackageInfo | undefined = undefined,
    private owned = false,
  ) {
    configureObject(this);
    this.credentials = new CredentialManager(this.api, this.id);
    this.links = {
      /**
       * Link a 1Password item to a credential
       */
      create: (
        params: LinksAPI.LinkCreateParams,
        options?: RequestOptions,
      ): APIPromise<LinksAPI.LinkCreateResponse> => {
        const result = this.api.credentials.packages.links.create(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'packageName', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('CredentialPackage', this.id);
  }

  refresh(options?: RequestOptions): APIPromise<CredentialsPackagesAPI.PackageListResponse> {
    const result = this.api.credentials.packages.list(
      this.id,
      boundOptions(options, [{ name: 'packageName', location: 'path', value: this.id }]),
    );
    return result._thenUnwrap((info) => {
      this.info = info;
      return info;
    });
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type CredentialInfo =
  | CredentialsAPI.CredentialCreateResponse
  | NonNullable<NonNullable<CredentialsPackagesAPI.PackageListResponse>['data']>[number];

export class Credential {
  readonly fields;

  constructor(
    readonly api: Raw,
    readonly packageName: string,
    readonly id: string,
    public info: CredentialInfo | undefined = undefined,
    private owned = false,
    private infoRoot = 'data',
  ) {
    configureObject(this);
    this.fields = {
      /**
       * Adds a single field to an existing credential. The body specifies a `fieldType`
       * (one of the supported field types) and its value. Returns a conflict if a field
       * of that type already exists on the credential.
       */
      create: (
        params: Omit<FieldsAPI.FieldCreateParams, 'packageName'>,
        options?: RequestOptions,
      ): APIPromise<FieldsAPI.FieldCreateResponse> => {
        const result = this.api.credentials.packages.credentials.fields.create(
          this.id,
          { ...params, packageName: this.packageName },
          boundOptions(options, [
            { name: 'credentialName', location: 'path', value: this.id },
            { name: 'packageName', location: 'path', value: this.packageName },
          ]),
        );
        return result;
      },
      /**
       * Updates the value of an existing field on a credential, identified by
       * `packageName`, `credentialName`, and `fieldType` in the path. The body carries
       * the new value and returns the updated credential.
       */
      update: (
        fieldType:
          | 'email'
          | 'username'
          | 'password'
          | 'api_token'
          | 'phone_number'
          | 'two_factor_secret'
          | 'backup_codes',
        params: Omit<FieldsAPI.FieldUpdateParams, 'credentialName' | 'packageName'>,
        options?: RequestOptions,
      ): APIPromise<FieldsAPI.FieldUpdateResponse> => {
        const result = this.api.credentials.packages.credentials.fields.update(
          fieldType,
          { ...params, credentialName: this.id, packageName: this.packageName },
          boundOptions(options, [
            { name: 'credentialName', location: 'path', value: this.id },
            { name: 'packageName', location: 'path', value: this.packageName },
          ]),
        );
        return result;
      },
      /**
       * Removes a single field of the given `fieldType` from the specified credential
       * while leaving the credential itself intact. Returns the updated credential.
       */
      delete: (
        fieldType:
          | 'email'
          | 'username'
          | 'password'
          | 'api_token'
          | 'phone_number'
          | 'two_factor_secret'
          | 'backup_codes',
        options?: RequestOptions,
      ): APIPromise<FieldsAPI.FieldDeleteResponse> => {
        const result = this.api.credentials.packages.credentials.fields.delete(
          fieldType,
          { credentialName: this.id, packageName: this.packageName },
          boundOptions(options, [
            { name: 'credentialName', location: 'path', value: this.id },
            { name: 'packageName', location: 'path', value: this.packageName },
          ]),
        );
        return result;
      },
    };
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot(
      'Credential',
      this.id,
      this.info === undefined ? undefined : { source: this.source },
    );
  }

  /** Reads only the last create/list snapshot without making a request; fromId/from_id handles have no data. */
  get source(): 'mobilerun' | 'onepassword' | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'source') as 'mobilerun' | 'onepassword' | undefined;
  }

  /**
   * Permanently deletes the credential identified by `packageName` and
   * `credentialName`, removing all of its fields. Returns the deleted credential.
   */
  delete(options?: RequestOptions): APIPromise<CredentialsAPI.CredentialDeleteResponse> {
    const result = this.api.credentials.packages.credentials.delete(
      this.id,
      { packageName: this.packageName },
      boundOptions(options, [
        { name: 'credentialName', location: 'path', value: this.id },
        { name: 'packageName', location: 'path', value: this.packageName },
      ]),
    );
    return result;
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type DeviceInfo =
  | DevicesAPI.DeviceCreateResponse
  | DevicesAPI.DeviceRetrieveResponse
  | DevicesAPI.DeviceWaitReadyResponse
  | NonNullable<NonNullable<DevicesAPI.DeviceListResponse>['items']>[number];

export class Device {
  readonly actions;

  readonly apps;

  readonly esim;

  readonly files;

  readonly keyboard;

  readonly location;

  readonly packages;

  readonly profile;

  readonly proxy;

  readonly screenshots;

  readonly tasks;

  readonly clipboard;

  readonly timezone;

  readonly language;

  readonly deepLink;

  readonly browser;

  readonly kiosk;

  readonly recordings;

  readonly trafficSessions;

  readonly number;

  constructor(
    readonly api: Raw,
    readonly id: string,
    public info: DeviceInfo | undefined = undefined,
    private owned = false,
    private infoRoot = '',
  ) {
    configureObject(this);
    this.actions = {
      /**
       * Performs a global system action on the device, such as navigating back or going
       * to the home screen, identified by an action code.
       */
      global: (params: ActionsAPI.ActionGlobalParams, options?: RequestOptions): APIPromise<void> => {
        const result = this.api.devices.actions.global(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Returns whether the accessibility overlay is currently visible on the device.
       */
      overlayVisible: (
        params?: ActionsAPI.ActionOverlayVisibleParams,
        options?: RequestOptions,
      ): APIPromise<ActionsAPI.ActionOverlayVisibleResponse> => {
        const result = this.api.devices.actions.overlayVisible(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Shows or hides the accessibility overlay on the device based on the visibility
       * flag in the request body.
       */
      setOverlayVisible: (
        params: ActionsAPI.ActionSetOverlayVisibleParams,
        options?: RequestOptions,
      ): APIPromise<void> => {
        const result = this.api.devices.actions.setOverlayVisible(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
    this.apps = {
      /**
       * Returns detailed information about apps installed on the device, including
       * package name and label. System and protected apps are excluded unless the
       * corresponding query parameters are set.
       */
      list: (
        params?: DevicesAppsAPI.AppListParams,
        options?: RequestOptions,
      ): APIPromise<DevicesAppsAPI.AppListResponse | null> => {
        const result = this.api.devices.apps.list(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Uninstalls the app identified by the path package name from the device.
       * Protected packages cannot be deleted.
       */
      delete: (
        packageName: string,
        params?: Omit<DevicesAppsAPI.AppDeleteParams, 'deviceId'>,
        options?: RequestOptions,
      ): APIPromise<void> => {
        const result = this.api.devices.apps.delete(
          packageName,
          { ...params, deviceId: this.id },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Grants an Android runtime permission to the package named in the path. The
       * permission is given by its short name (e.g. POST_NOTIFICATIONS).
       */
      grantPermission: (
        permission: 'POST_NOTIFICATIONS',
        params: Omit<DevicesAppsAPI.AppGrantPermissionParams, 'deviceId'>,
        options?: RequestOptions,
      ): APIPromise<void> => {
        const result = this.api.devices.apps.grantPermission(
          permission,
          { ...params, deviceId: this.id },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Requests an app install on the device. The request body must supply exactly one
       * of an Android packageName or an iOS bundleId. For packageName installs, optional
       * country and versionCode select an exact regional uploaded Android version, and
       * protected packages are rejected. background (default false) selects the response
       * contract: false installs inline and returns the outcome directly (200 on
       * success, an error status on failure); true accepts the request and runs the
       * download + install in the background, returning 202 immediately — poll
       * list-app-installs for the backend's view of that attempt's status. Refuses with
       * 409 once 2 other installs are already running on the device, in either mode; a
       * repeat request for an app that already has an install running is also refused
       * with 409 rather than superseding it — retry once that attempt reaches a terminal
       * state. Synchronous failures report APP_DOWNLOAD_FAILED (502) when the app file
       * cannot be downloaded or APP_INSTALL_TIMEOUT (504) when the install times out.
       */
      install: ((params: DevicesAppsAPI.AppInstallParams, options?: RequestOptions): APIPromise<void> => {
        const result = this.api.devices.apps.install(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      }) as {
        (params: DevicesAppsAPI.AppInstallParams.Variant0, options?: RequestOptions): APIPromise<void>;
        (params: DevicesAppsAPI.AppInstallParams.Variant1, options?: RequestOptions): APIPromise<void>;
        (params: DevicesAppsAPI.AppInstallParams, options?: RequestOptions): APIPromise<void>;
      },
      /**
       * Reports the backend's durable view of background app-install attempts on this
       * device — status reflects the install ATTEMPT, not device ground truth; list-apps
       * remains authoritative for what is actually installed. Terminal and projected
       * timeout records are kept ~15 minutes. Not gated on device readiness, so it also
       * answers while the device is offline or crashed.
       */
      listInstalls: (
        params?: DevicesAppsAPI.AppListInstallsParams,
        options?: RequestOptions,
      ): APIPromise<DevicesAppsAPI.AppListInstallsResponse> => {
        const result = this.api.devices.apps.listInstalls(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Revokes an Android runtime permission from the package named in the path. The
       * permission is given by its short name (e.g. POST_NOTIFICATIONS).
       */
      revokePermission: (
        permission: 'POST_NOTIFICATIONS',
        params: Omit<DevicesAppsAPI.AppRevokePermissionParams, 'deviceId'>,
        options?: RequestOptions,
      ): APIPromise<void> => {
        const result = this.api.devices.apps.revokePermission(
          permission,
          { ...params, deviceId: this.id },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
    this.esim = {
      /**
       * Returns the eSIM subscriptions currently provisioned on the device.
       */
      list: (
        params?: EsimAPI.EsimListParams,
        options?: RequestOptions,
      ): APIPromise<EsimAPI.EsimListResponse | null> => {
        const result = this.api.devices.esim.list(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Download profile and/or enable subscription.
       */
      activate: (
        params: EsimAPI.EsimActivateParams,
        options?: RequestOptions,
      ): APIPromise<EsimAPI.EsimActivateResponse> => {
        const result = this.api.devices.esim.activate(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Enables the eSIM subscription identified by the subId in the request body so it
       * becomes the active subscription.
       */
      enable: (params: EsimAPI.EsimEnableParams, options?: RequestOptions): APIPromise<void> => {
        const result = this.api.devices.esim.enable(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Deletes the eSIM subscription identified by the subId query parameter from the
       * device.
       */
      remove: (params: EsimAPI.EsimRemoveParams, options?: RequestOptions): APIPromise<void> => {
        const result = this.api.devices.esim.remove(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Enables or disables data roaming for the device's eSIM based on the enabled flag
       * in the request body.
       */
      setRoaming: (params: EsimAPI.EsimSetRoamingParams, options?: RequestOptions): APIPromise<void> => {
        const result = this.api.devices.esim.setRoaming(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Returns the connectivity status of the device's eSIM subscriptions.
       */
      status: (
        params?: EsimAPI.EsimStatusParams,
        options?: RequestOptions,
      ): APIPromise<EsimAPI.EsimStatusResponse | null> => {
        const result = this.api.devices.esim.status(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      apn: {
        /**
         * Returns the access point names (APNs) configured for the device's active eSIM
         * subscriptions.
         */
        list: (
          params?: ApnAPI.ApnListParams,
          options?: RequestOptions,
        ): APIPromise<ApnAPI.ApnListResponse | null> => {
          const result = this.api.devices.esim.apn.list(
            this.id,
            { ...params },
            boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
          );
          return result;
        },
        /**
         * Marks an existing APN, identified by apnId, as the preferred APN for the given
         * eSIM subscription in the request body.
         */
        select: (params: ApnAPI.ApnSelectParams, options?: RequestOptions): APIPromise<void> => {
          const result = this.api.devices.esim.apn.select(
            this.id,
            { ...params },
            boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
          );
          return result;
        },
        /**
         * Creates an access point name (APN) from the request body and applies it to the
         * given eSIM subscription. Type, protocol, and roaming protocol default to common
         * values when omitted.
         */
        set: (params: ApnAPI.ApnSetParams, options?: RequestOptions): APIPromise<void> => {
          const result = this.api.devices.esim.apn.set(
            this.id,
            { ...params },
            boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
          );
          return result;
        },
      },
    };
    this.files = {
      /**
       * Lists the files at the directory path given in the path query parameter,
       * returning each entry's metadata along with the path and total count.
       */
      list: (
        params: DevicesFilesAPI.FileListParams,
        options?: RequestOptions,
      ): APIPromise<DevicesFilesAPI.FileListResponse> => {
        const result = this.api.devices.files.list(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Deletes the file at the path given in the path query parameter from the device.
       */
      delete: (params: DevicesFilesAPI.FileDeleteParams, options?: RequestOptions): APIPromise<void> => {
        const result = this.api.devices.files.delete(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Pulls the file at the given path query parameter from the device and returns its
       * raw bytes as an octet-stream.
       */
      download: (
        params: DevicesFilesAPI.FileDownloadParams,
        options?: RequestOptions,
      ): APIPromise<string> => {
        const result = this.api.devices.files.download(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Uploads a file to the device via multipart form data, writing it into the
       * directory given by the path query parameter using the uploaded file's name.
       */
      upload: (params: DevicesFilesAPI.FileUploadParams, options?: RequestOptions): APIPromise<void> => {
        const result = this.api.devices.files.upload(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
    this.keyboard = {
      /**
       * Clears the contents of the currently focused text input field.
       */
      clear: (params?: KeyboardAPI.KeyboardClearParams, options?: RequestOptions): APIPromise<void> => {
        const result = this.api.devices.keyboard.clear(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
    this.location = {
      /**
       * Returns the device's current simulated GPS location as latitude and longitude.
       * Devices without geo support return an unsupported-feature error.
       */
      get: (
        params?: LocationAPI.LocationGetParams,
        options?: RequestOptions,
      ): APIPromise<Shared.Location> => {
        const result = this.api.devices.location.get(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Clears any simulated GPS location and restores the device's default location
       * behavior. Devices without geo support return an unsupported-feature error.
       */
      reset: (params?: LocationAPI.LocationResetParams, options?: RequestOptions): APIPromise<void> => {
        const result = this.api.devices.location.reset(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Sets the device's simulated GPS location to the latitude and longitude in the
       * request body. Devices without geo support return an unsupported-feature error.
       */
      set: (params: LocationAPI.LocationSetParams, options?: RequestOptions): APIPromise<void> => {
        const result = this.api.devices.location.set(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
    this.packages = {
      /**
       * Returns the package names of apps installed on the device. System and protected
       * packages are excluded unless the corresponding query parameters are set.
       */
      list: (
        params?: PackagesAPI.PackageListParams,
        options?: RequestOptions,
      ): APIPromise<PackagesAPI.PackageListResponse | null> => {
        const result = this.api.devices.packages.list(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
    this.profile = {
      /**
       * Apply a profile to a device
       */
      update: (params: DevicesProfileAPI.ProfileUpdateParams, options?: RequestOptions): APIPromise<void> => {
        const result = this.api.devices.profile.update(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
    this.proxy = {
      /**
       * Routes the device's traffic through a SOCKS5 proxy supplied in the request body,
       * replacing any existing connection. A smartIp option can be used to select an IP
       * automatically; the legacy flat host/port/user/password fields remain supported.
       */
      connect: (params?: ProxyAPI.ProxyConnectParams, options?: RequestOptions): APIPromise<void> => {
        const result = this.api.devices.proxy.connect(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Disconnects the device's active proxy connection and clears its stored proxy
       * state. Returns successfully if no proxy is connected.
       */
      disconnect: (params?: ProxyAPI.ProxyDisconnectParams, options?: RequestOptions): APIPromise<void> => {
        const result = this.api.devices.proxy.disconnect(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Returns the device's current proxy connection state, including whether a proxy
       * is connected and its protocol and name.
       */
      status: (
        params?: ProxyAPI.ProxyStatusParams,
        options?: RequestOptions,
      ): APIPromise<ProxyAPI.ProxyStatusResponse> => {
        const result = this.api.devices.proxy.status(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
    this.screenshots = new SavedScreenshotManager(this.api, this.id);
    this.tasks = {
      /**
       * Returns a paginated list of tasks that have run on the device, along with
       * pagination metadata.
       */
      list: (
        params?: TasksAPI.TaskListParams,
        options?: RequestOptions,
      ): ObjectPager<Task, TasksAPI.TaskListResponse> => {
        const load = async (page: number): Promise<PagedObjectPage<Task, TasksAPI.TaskListResponse>> => {
          const pageOptions = pageRequestOptions(options, 'page', page, {
            orderBy: params?.['orderBy'],
            orderByDirection: params?.['orderByDirection'],
            page: params?.['page'],
            pageSize: params?.['pageSize'],
          });
          const response = await this.api.devices.tasks.list(
            this.id,
            { ...params },
            boundOptions(pageOptions, [{ name: 'deviceId', location: 'path', value: this.id }]),
          );
          return new PagedObjectPage(
            (response['items'] ?? []).map(
              (info) => new Task(this.api, info['taskId'], info, false, undefined, ''),
            ),
            response,
            {
              next: () =>
                nextObjectPage(
                  response['pagination']['page'],
                  response['pagination']['hasNext'],
                  response['pagination']['pages'],
                  page,
                ),
              load,
            },
          );
        };
        return new ObjectPager(() => load(params?.['page'] ?? 1));
      },
    };
    this.clipboard = {
      /**
       * Returns the current text content of the device's clipboard. Devices without
       * clipboard support return an unsupported-feature error.
       */
      get: (
        params?: ClipboardAPI.ClipboardGetParams,
        options?: RequestOptions,
      ): APIPromise<ClipboardAPI.ClipboardGetResponse> => {
        const result = this.api.devices.clipboard.get(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Replaces the device's clipboard content with the text in the request body; an
       * empty text clears the clipboard. Devices without clipboard support return an
       * unsupported-feature error.
       */
      set: (params: ClipboardAPI.ClipboardSetParams, options?: RequestOptions): APIPromise<void> => {
        const result = this.api.devices.clipboard.set(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
    this.timezone = {
      /**
       * Returns the device's current timezone identifier. Devices that do not support
       * timezone control return an unsupported-feature error.
       */
      get: (
        params?: TimezoneAPI.TimezoneGetParams,
        options?: RequestOptions,
      ): APIPromise<TimezoneAPI.TimezoneGetResponse> => {
        const result = this.api.devices.timezone.get(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Sets the device timezone to the identifier in the request body. Devices that do
       * not support timezone control return an unsupported-feature error.
       */
      set: (params: TimezoneAPI.TimezoneSetParams, options?: RequestOptions): APIPromise<void> => {
        const result = this.api.devices.timezone.set(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
    this.language = {
      /**
       * Returns the device's current language/locale as a BCP-47 locale string.
       */
      get: (
        params?: LanguageAPI.LanguageGetParams,
        options?: RequestOptions,
      ): APIPromise<LanguageAPI.LanguageGetResponse> => {
        const result = this.api.devices.language.get(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Sets the device language/locale to the BCP-47 locale in the request body. An
       * optional restart flag applies the change immediately by restarting the Android
       * system framework (open apps are closed) instead of waiting for the next reboot;
       * some devices ignore it.
       */
      set: (params: LanguageAPI.LanguageSetParams, options?: RequestOptions): APIPromise<void> => {
        const result = this.api.devices.language.set(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
    this.deepLink = {
      /**
       * Opens a deep link on the device. On Android the link is dispatched as an intent
       * — packageName optionally pins it to a specific app and action overrides the
       * default android.intent.action.VIEW. On iOS the URL is opened directly and the
       * optional fields must be omitted. Protected packages are rejected.
       */
      executeDeepLink: (
        params: DeepLinkAPI.DeepLinkExecuteDeepLinkParams,
        options?: RequestOptions,
      ): APIPromise<void> => {
        const result = this.api.devices.deepLink.executeDeepLink(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
    this.browser = {
      /**
       * Evaluates a JavaScript expression exactly once in the device's single, confirmed
       * foreground Chrome tab via the Chrome DevTools Protocol and returns its
       * JSON-serialized result. A responsive browser state without exactly one visible
       * page returns DEVICE_NO_BROWSER_TARGET (400). Transient discovery, page-dial, or
       * visibility-probe transport failures return CDP_TRANSPORT_UNAVAILABLE (503) with
       * Retry-After and an executionOutcome; the service may start Chrome once and retry
       * selection before Runtime.evaluate, but dial or probe recovery is skipped for a
       * backgrounded Chrome, and a user script is never retried after its write or read.
       * Devices without browser support return an unsupported-feature error.
       */
      executeScript: (
        params: BrowserAPI.BrowserExecuteScriptParams,
        options?: RequestOptions,
      ): APIPromise<BrowserAPI.BrowserExecuteScriptResponse> => {
        const result = this.api.devices.browser.executeScript(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
    this.kiosk = {
      /**
       * Disables Android lock-task (kiosk) mode on the device, releasing it from the
       * locked app.
       */
      disable: (params?: KioskAPI.KioskDisableParams, options?: RequestOptions): APIPromise<void> => {
        const result = this.api.devices.kiosk.disable(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Locks the device to the package named in the request body using Android
       * lock-task (kiosk) mode, preventing the user from leaving the app.
       */
      enable: (params: KioskAPI.KioskEnableParams, options?: RequestOptions): APIPromise<void> => {
        const result = this.api.devices.kiosk.enable(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
    this.recordings = new RecordingManager(this.api, this.id);
    this.trafficSessions = new TrafficSessionManager(this.api, this.id);
    this.number = {
      /**
       * Returns the cloud number bound to the device and the SIM line the device
       * presents (carrier, number).
       */
      retrieve: (
        params?: NumberAPI.NumberRetrieveParams,
        options?: RequestOptions,
      ): APIPromise<NumberAPI.NumberRetrieveResponse> => {
        const result = this.api.devices.number.retrieve(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Binds one of your cloud numbers to the device. The device's SIM shows the number
       * and every SMS it receives is delivered into the device's messages app. Available
       * on devices whose capabilities report telephony. A number can be bound to one
       * device, and a device holds one number; unbind first to move it.
       */
      bind: (
        params: NumberAPI.NumberBindParams,
        options?: RequestOptions,
      ): APIPromise<NumberAPI.NumberBindResponse> => {
        const result = this.api.devices.number.bind(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Releases the number bound to the device. The device returns to its own default
       * line; SMS to the number stop reaching the device.
       */
      unbind: (
        params?: NumberAPI.NumberUnbindParams,
        options?: RequestOptions,
      ): APIPromise<NumberAPI.NumberUnbindResponse> => {
        const result = this.api.devices.number.unbind(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot(
      'Device',
      this.id,
      this.info === undefined ? undefined : { name: this.name, state: this.state },
    );
  }

  refresh(options?: RequestOptions): APIPromise<DevicesAPI.DeviceRetrieveResponse> {
    const result = this.api.devices.retrieve(
      this.id,
      boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
    );
    return result._thenUnwrap((info) => {
      this.info = info;
      this.infoRoot = '';
      return info;
    });
  }

  waitReady(options: ReadyOptions = {}): Promise<DevicesAPI.DeviceWaitReadyResponse> {
    return waitFor(
      { ...options, pollIntervalMs: SINGLE_CALL_INTERVAL_MS },
      300000,
      SINGLE_CALL_INTERVAL_MS,
      async (signal, timeout) => {
        const requestOptions: RequestOptions = { ...options, signal, timeout, maxRetries: 0 };
        const result = await this.api.devices.waitReady(
          this.id,
          boundOptions(requestOptions, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        this.info = result;
        this.infoRoot = '';
        return { done: true, result };
      },
      retryReadiness,
    );
  }

  /** Reads the last response without making a request. */
  get name(): string | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'name') as string | undefined;
  }

  /** Reads the last response without making a request. */
  get state(): string | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'state') as string | undefined;
  }

  /**
   * Returns a live snapshot of the device's spoofed identity, including model,
   * display, identifiers, and carrier. Devices without fingerprint support return an
   * unsupported-feature error.
   */
  fingerprint(
    params?: DevicesAPI.DeviceFingerprintParams,
    options?: RequestOptions,
  ): APIPromise<DevicesAPI.DeviceFingerprintResponse> {
    const result = this.api.devices.fingerprint(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Triggers a reboot of the device. The device transitions through its reboot
   * lifecycle and becomes ready again once the restart completes. Only devices whose
   * capabilities report `reboot=true` can be rebooted. Personal (BYOD) devices
   * cannot be rebooted remotely: the request is refused with 400
   * `DEVICE_TOOL_UNSUPPORTED` and nothing happens on the device.
   */
  reboot(options?: RequestOptions): APIPromise<void> {
    const result = this.api.devices.reboot(
      this.id,
      boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Resets the device. `mode` selects what is erased: `full` (factory reset: apps,
   * accounts, storage, new identity) or `identity` (new fingerprint, apps and data
   * kept). Without `mode` the reset is `full`, or `identity` on devices with
   * `factoryReset=false`. A mode or `preserve` value the device does not support is
   * refused with 400 `DEVICE_TOOL_UNSUPPORTED`. `preserve` restores the latest
   * proxy, location, locale or timezone set through the API after the reset; omitted
   * or empty preserves nothing. The device becomes ready again after the reset.
   */
  reset(params?: DevicesAPI.DeviceResetParams, options?: RequestOptions): APIPromise<void> {
    const result = this.api.devices.reset(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Returns the set of capabilities supported by this device. Used to determine
   * which tools and features are available for the device.
   */
  retrieveCapabilities(options?: RequestOptions): APIPromise<DevicesAPI.DeviceRetrieveCapabilitiesResponse> {
    const result = this.api.devices.retrieveCapabilities(
      this.id,
      boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Sets the display name for a device from the name in the request body and returns
   * the updated device.
   */
  setName(
    params: DevicesAPI.DeviceSetNameParams,
    options?: RequestOptions,
  ): APIPromise<DevicesAPI.DeviceSetNameResponse> {
    const result = this.api.devices.setName(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Terminates the device and releases its resources. For a personal (BYOD) device
   * the owner (API key or user) can instead remove the phone from the account so
   * anyone can pair it again; the phone must be disconnected first, otherwise the
   * request is rejected with 409 BYOD_DEVICE_CONNECTED. Other subscription-billed
   * devices cannot be terminated with this request; it is rejected with 401. The
   * `terminateAt` and `previousDeviceId` body fields are reserved for internal use;
   * requests that set them are rejected with 401.
   */
  terminate(params?: DevicesAPI.DeviceTerminateParams, options?: RequestOptions): APIPromise<void> {
    const result = this.api.devices.terminate(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Wakes a parked device: it first checks that the device can run again, then the
   * same device starts and per-minute billing resumes. On a device that is not
   * parked, the request does nothing.
   *
   * Waits until the object is ready again (default), returns the handle; opt out with `waitReady: false` and set the timeout with `readyTimeoutMs`.
   */
  async resume(options?: RequestOptions & { waitReady?: boolean; readyTimeoutMs?: number }): Promise<Device> {
    const requestOptions = createRequestOptions(options);
    await this.api.devices.resume(
      this.id,
      boundOptions(requestOptions, [{ name: 'deviceId', location: 'path', value: this.id }]),
    );
    if (options?.waitReady !== false) {
      try {
        await this.waitReady({ signal: options?.signal ?? undefined, timeoutMs: options?.readyTimeoutMs });
      } catch (cause) {
        throw new ObjectReadyError(this, this.id, cause);
      }
    }
    return this;
  }

  /**
   * Parks the device: its data, apps and identity are kept, but nothing runs and
   * nothing is billed until it is resumed. Only devices whose capabilities report
   * stop=true support this; others return 404.
   *
   * Runs waitStopped after success (default), returns the handle; opt out with `wait: false` and set the timeout with `waitTimeoutMs`.
   */
  async stop(options?: RequestOptions & { wait?: boolean; waitTimeoutMs?: number }): Promise<Device> {
    const requestOptions = createRequestOptions(options);
    await this.api.devices.stop(
      this.id,
      boundOptions(requestOptions, [{ name: 'deviceId', location: 'path', value: this.id }]),
    );
    if (options?.wait !== false) {
      await this.waitStopped({ signal: options?.signal ?? undefined, timeoutMs: options?.waitTimeoutMs });
    }
    return this;
  }

  /**
   * Taps the device screen at the given x/y coordinates. An optional humanize flag
   * routes the tap through human-like input on devices that support it.
   */
  tap(params: ActionsAPI.ActionTapParams, options?: RequestOptions): APIPromise<void>;
  tap(
    x: number,
    y: number,
    params?: Omit<ActionsAPI.ActionTapParams, 'x' | 'y'>,
    options?: RequestOptions,
  ): APIPromise<void>;
  tap(...__args: unknown[]): APIPromise<void> {
    const positional = __args[0] === null || typeof __args[0] !== 'object' || !('x' in __args[0]);
    const params = (
      positional ?
        { ...(__args[2] as Omit<ActionsAPI.ActionTapParams, 'x' | 'y'>), x: __args[0], y: __args[1] }
      : __args[0]) as ActionsAPI.ActionTapParams;
    const options = (positional ? __args[3] : __args[1]) as RequestOptions | undefined;
    const result = this.api.devices.actions.tap(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Types text into the focused input field. The optional completionMode defaults to
   * accepted for backwards-compatible low latency; committed additionally waits for
   * the complete text or a quiescent UI state.
   */
  type(params: KeyboardAPI.KeyboardWriteParams, options?: RequestOptions): APIPromise<void>;
  type(
    text: string,
    params?: Omit<KeyboardAPI.KeyboardWriteParams, 'text'>,
    options?: RequestOptions,
  ): APIPromise<void>;
  type(...__args: unknown[]): APIPromise<void> {
    const positional = __args[0] === null || typeof __args[0] !== 'object' || !('text' in __args[0]);
    const params = (
      positional ?
        { ...(__args[1] as Omit<KeyboardAPI.KeyboardWriteParams, 'text'>), text: __args[0] }
      : __args[0]) as KeyboardAPI.KeyboardWriteParams;
    const options = (positional ? __args[2] : __args[1]) as RequestOptions | undefined;
    const result = this.api.devices.keyboard.write(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Captures the device screen and returns it as a PNG image. Pass save=true to
   * store it as device media.
   */
  async screenshot(
    params?: ScreenshotsAPI.ScreenshotCaptureParams,
    options?: RequestOptions,
  ): Promise<Screenshot> {
    const response = await this.api.devices.screenshots
      .capture(
        this.id,
        { ...params },
        boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
      )
      .asResponse();
    return new Screenshot(new Uint8Array(await response.arrayBuffer()), response.headers);
  }

  /**
   * Create and dispatch a new agent task. Returns the task ID and device stream
   * details.
   */
  run<Schema extends OutputSchema<unknown>>(
    params: Omit<Omit<ResourcesTasksAPI.TaskRunParams, 'deviceId'>, 'outputSchema'> & {
      outputSchema: Schema;
    },
    options?: RequestOptions,
  ): APIPromise<Task<OutputSchemaValue<Schema>>>;
  run(params: Omit<ResourcesTasksAPI.TaskRunParams, 'deviceId'>, options?: RequestOptions): APIPromise<Task>;
  run(
    params: Omit<Omit<ResourcesTasksAPI.TaskRunParams, 'deviceId'>, 'outputSchema'> & {
      outputSchema?: OutputSchema<unknown> | { [key: string]: unknown } | null;
    },
    options?: RequestOptions,
  ): APIPromise<Task<unknown> | Task> {
    const outputSchema = params?.['outputSchema'];
    const parser = isOutputSchema<unknown>(outputSchema) ? outputSchema : undefined;
    const requestParams = {
      ...params,
      ['outputSchema']: parser ? parser.jsonSchema : (outputSchema as { [key: string]: unknown } | null),
    };
    const result = this.api.tasks.run(
      { ...requestParams, deviceId: this.id },
      boundOptions(options, [{ name: 'deviceId', location: 'body', value: this.id }]),
    );
    return result._thenUnwrap((info) => new Task<unknown>(this.api, info['id'], info, false, parser, ''));
  }

  /**
   * Swipes from a start coordinate to an end coordinate over the given duration in
   * milliseconds. The optional humanize flag (best-effort, also with holdMs) adds a
   * human-like path and timing. With holdMs > 0 the request returns 422 when
   * duration + holdMs exceeds 9000 ms, or on devices that do not support it.
   */
  swipe(params: ActionsAPI.ActionSwipeParams, options?: RequestOptions): APIPromise<void>;
  swipe(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    duration: number,
    params?: Omit<ActionsAPI.ActionSwipeParams, 'startX' | 'startY' | 'endX' | 'endY' | 'duration'>,
    options?: RequestOptions,
  ): APIPromise<void>;
  swipe(...__args: unknown[]): APIPromise<void> {
    const positional = __args[0] === null || typeof __args[0] !== 'object' || !('startX' in __args[0]);
    const params = (
      positional ?
        {
          ...(__args[5] as Omit<
            ActionsAPI.ActionSwipeParams,
            'startX' | 'startY' | 'endX' | 'endY' | 'duration'
          >),
          startX: __args[0],
          startY: __args[1],
          endX: __args[2],
          endY: __args[3],
          duration: __args[4],
        }
      : __args[0]) as ActionsAPI.ActionSwipeParams;
    const options = (positional ? __args[6] : __args[1]) as RequestOptions | undefined;
    const result = this.api.devices.actions.swipe(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Presses a key using the platform key code.
   *
   * Sends a single Android key event to the device, identified by its key code.
   */
  key(params: KeyboardAPI.KeyboardKeyParams, options?: RequestOptions): APIPromise<void>;
  key(
    key: number,
    params?: Omit<KeyboardAPI.KeyboardKeyParams, 'key'>,
    options?: RequestOptions,
  ): APIPromise<void>;
  key(...__args: unknown[]): APIPromise<void> {
    const positional = __args[0] === null || typeof __args[0] !== 'object' || !('key' in __args[0]);
    const params = (
      positional ?
        { ...(__args[1] as Omit<KeyboardAPI.KeyboardKeyParams, 'key'>), key: __args[0] }
      : __args[0]) as KeyboardAPI.KeyboardKeyParams;
    const options = (positional ? __args[2] : __args[1]) as RequestOptions | undefined;
    const result = this.api.devices.keyboard.key(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Launches the app identified by the path package name, optionally starting a
   * specific activity given in the request body. Protected packages cannot be
   * started.
   */
  openApp(
    packageName: string,
    params?: Omit<DevicesAppsAPI.AppStartParams, 'deviceId'>,
    options?: RequestOptions,
  ): APIPromise<void> {
    const result = this.api.devices.apps.start(
      packageName,
      { ...params, deviceId: this.id },
      boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Force-stops the app identified by the path package name. When clearData is set
   * in the request body, the app's data is also cleared. Protected packages cannot
   * be stopped.
   */
  stopApp(
    packageName: string,
    params?: Omit<DevicesAppsAPI.AppStopParams, 'deviceId'>,
    options?: RequestOptions,
  ): APIPromise<void> {
    const result = this.api.devices.apps.stop(
      packageName,
      { ...params, deviceId: this.id },
      boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Presses the Home button.
   *
   * Performs a global system action on the device, such as navigating back or going
   * to the home screen, identified by an action code.
   */
  home(params?: Omit<ActionsAPI.ActionGlobalParams, 'action'>, options?: RequestOptions): APIPromise<void> {
    const result = this.api.devices.actions.global(
      this.id,
      { ...params, action: 2 },
      boundOptions(options, [
        { name: 'deviceId', location: 'path', value: this.id },
        { name: 'action', location: 'body', value: 2 },
      ]),
    );
    return result;
  }

  /**
   * Presses the Back button.
   *
   * Performs a global system action on the device, such as navigating back or going
   * to the home screen, identified by an action code.
   */
  back(params?: Omit<ActionsAPI.ActionGlobalParams, 'action'>, options?: RequestOptions): APIPromise<void> {
    const result = this.api.devices.actions.global(
      this.id,
      { ...params, action: 1 },
      boundOptions(options, [
        { name: 'deviceId', location: 'path', value: this.id },
        { name: 'action', location: 'body', value: 1 },
      ]),
    );
    return result;
  }

  /**
   * Returns the current accessibility UI state as a structured tree of on-screen elements.
   *
   * Returns the current accessibility UI state of the device as a structured tree of
   * on-screen elements. An optional filter query reduces the result to interactive
   * elements.
   */
  ui(params?: StateAPI.StateUiParams, options?: RequestOptions): APIPromise<StateAPI.StateUiResponse> {
    const result = this.api.devices.state.ui(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Returns the device wall-clock time as an RFC 3339 timestamp.
   *
   * Returns the device's current wall-clock time as an RFC 3339 timestamp.
   */
  time(params?: StateAPI.StateTimeParams, options?: RequestOptions): APIPromise<string> {
    const result = this.api.devices.state.time(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /** Wait for the declared success condition; failure raises with the last response. */
  waitStopped(options: WaitOptions = {}): Promise<DevicesAPI.DeviceRetrieveResponse> {
    return waitFor(
      options,
      300000,
      1000,
      async (signal, timeout) => {
        const requestOptions: RequestOptions = { ...options, signal, timeout, maxRetries: 0 };
        const result = await this.api.devices.retrieve(
          this.id,
          boundOptions(requestOptions, [{ name: 'deviceId', location: 'path', value: this.id }]),
        );
        this.info = result;
        this.infoRoot = '';
        const state = result['state'];
        if ((['stopped'] as readonly string[]).includes(state)) return { done: true, result };
        if ((['terminate', 'terminated'] as readonly string[]).includes(state))
          throw new WaitFailureError(result);
        return { done: false, result };
      },
      retryPoll,
      30000,
    );
  }

  async [Symbol.asyncDispose](): Promise<void> {
    if (!this.owned) return;
    this.owned = false;
    const options: RequestOptions = {};
    await this.api.devices.terminate(
      this.id,
      {},
      boundOptions(options, [{ name: 'deviceId', location: 'path', value: this.id }]),
    );
  }
}

export type SavedScreenshotInfo = NonNullable<
  NonNullable<ScreenshotsAPI.ScreenshotListResponse>['items']
>[number];

export class SavedScreenshot {
  constructor(
    readonly api: Raw,
    readonly deviceID: string,
    readonly id: string,
    public info: SavedScreenshotInfo | undefined = undefined,
    private owned = false,
    private infoRoot = '',
  ) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot(
      'SavedScreenshot',
      this.id,
      this.info === undefined ? undefined : { capturedAt: this.capturedAt },
    );
  }

  /** Reads only the last create/list snapshot without making a request; fromId/from_id handles have no data. */
  get capturedAt(): string | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'capturedAt') as string | undefined;
  }

  /**
   * Delete a device screenshot
   */
  delete(options?: RequestOptions): APIPromise<void> {
    const result = this.api.devices.screenshots.delete(
      this.id,
      { deviceId: this.deviceID },
      boundOptions(options, [
        { name: 'screenshotId', location: 'path', value: this.id },
        { name: 'deviceId', location: 'path', value: this.deviceID },
      ]),
    );
    return result;
  }

  /**
   * Redirects to a presigned PNG URL valid for 15 minutes.
   */
  async image(options?: RequestOptions): Promise<Uint8Array> {
    const response = await this.api.devices.screenshots
      .image(
        this.id,
        { deviceId: this.deviceID },
        boundOptions(options, [
          { name: 'screenshotId', location: 'path', value: this.id },
          { name: 'deviceId', location: 'path', value: this.deviceID },
        ]),
      )
      .asResponse();
    return new Uint8Array(await response.arrayBuffer());
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type RecordingInfo =
  | RecordingsAPI.RecordingStartResponse
  | RecordingsAPI.RecordingStatusResponse
  | NonNullable<RecordingsAPI.RecordingListResponse | null>[number];

export class Recording {
  constructor(
    readonly api: Raw,
    readonly deviceID: string,
    readonly id: string,
    public info: RecordingInfo | undefined = undefined,
    private owned = false,
    private infoRoot = '',
  ) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot(
      'Recording',
      this.id,
      this.info === undefined ? undefined : { name: this.name, status: this.status },
    );
  }

  refresh(options?: RequestOptions): APIPromise<RecordingsAPI.RecordingStatusResponse> {
    const result = this.api.devices.recordings.status(
      this.id,
      { deviceId: this.deviceID },
      boundOptions(options, [
        { name: 'recordingId', location: 'path', value: this.id },
        { name: 'deviceId', location: 'path', value: this.deviceID },
      ]),
    );
    return result._thenUnwrap((info) => {
      this.info = info;
      this.infoRoot = '';
      return info;
    });
  }

  /** Reads the last response without making a request. */
  get name(): string | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'name') as string | undefined;
  }

  /** Reads the last response without making a request. */
  get status(): string | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'status') as string | undefined;
  }

  /**
   * Delete a device recording
   */
  delete(options?: RequestOptions): APIPromise<void> {
    const result = this.api.devices.recordings.delete(
      this.id,
      { deviceId: this.deviceID },
      boundOptions(options, [
        { name: 'recordingId', location: 'path', value: this.id },
        { name: 'deviceId', location: 'path', value: this.deviceID },
      ]),
    );
    return result;
  }

  /**
   * Screenshots saved into the recording with
   * `GET /devices/{deviceId}/screenshot?save=true`, oldest first, each with a
   * presigned download URL.
   */
  screenshots(options?: RequestOptions): APIPromise<RecordingsAPI.RecordingScreenshotsResponse | null> {
    const result = this.api.devices.recordings.screenshots(
      this.id,
      { deviceId: this.deviceID },
      boundOptions(options, [
        { name: 'recordingId', location: 'path', value: this.id },
        { name: 'deviceId', location: 'path', value: this.deviceID },
      ]),
    );
    return result;
  }

  /**
   * Stop a device recording
   */
  stop(options?: RequestOptions): APIPromise<RecordingsAPI.RecordingStopResponse> {
    const result = this.api.devices.recordings.stop(
      this.id,
      { deviceId: this.deviceID },
      boundOptions(options, [
        { name: 'recordingId', location: 'path', value: this.id },
        { name: 'deviceId', location: 'path', value: this.deviceID },
      ]),
    );
    return result;
  }

  /**
   * Get a device recording video
   */
  async video(options?: RequestOptions): Promise<Uint8Array> {
    const response = await this.api.devices.recordings
      .video(
        this.id,
        { deviceId: this.deviceID },
        boundOptions(options, [
          { name: 'recordingId', location: 'path', value: this.id },
          { name: 'deviceId', location: 'path', value: this.deviceID },
        ]),
      )
      .asResponse();
    return new Uint8Array(await response.arrayBuffer());
  }

  /**
   * Get a device recording trajectory
   */
  async trajectory(options?: RequestOptions): Promise<Uint8Array> {
    const response = await this.api.devices.recordings
      .trajectory(
        this.id,
        { deviceId: this.deviceID },
        boundOptions(options, [
          { name: 'recordingId', location: 'path', value: this.id },
          { name: 'deviceId', location: 'path', value: this.deviceID },
        ]),
      )
      .asResponse();
    return new Uint8Array(await response.arrayBuffer());
  }

  /** Wait for the declared success condition; failure raises with the last response. */
  wait(options: WaitOptions = {}): Promise<RecordingsAPI.RecordingStatusResponse> {
    return waitFor(
      options,
      300000,
      1000,
      async (signal, timeout) => {
        const requestOptions: RequestOptions = { ...options, signal, timeout, maxRetries: 0 };
        const result = await this.api.devices.recordings.status(
          this.id,
          { deviceId: this.deviceID },
          boundOptions(requestOptions, [
            { name: 'recordingId', location: 'path', value: this.id },
            { name: 'deviceId', location: 'path', value: this.deviceID },
          ]),
        );
        this.info = result;
        this.infoRoot = '';
        const state = result['status'];
        if ((['completed'] as readonly string[]).includes(state)) return { done: true, result };
        if (
          (['failed', 'expired'] as readonly string[]).includes(state) ||
          !(['recording', 'uploading'] as readonly string[]).includes(state)
        )
          throw new WaitFailureError(result);
        return { done: false, result };
      },
      retryPoll,
      30000,
    );
  }

  async [Symbol.asyncDispose](): Promise<void> {
    if (!this.owned) return;
    this.owned = false;
    const options: RequestOptions = {};
    await this.api.devices.recordings.stop(
      this.id,
      { deviceId: this.deviceID },
      boundOptions(options, [
        { name: 'recordingId', location: 'path', value: this.id },
        { name: 'deviceId', location: 'path', value: this.deviceID },
      ]),
    );
  }
}

export type TrafficSessionInfo =
  | TrafficSessionsAPI.TrafficSessionCreateResponse
  | TrafficSessionsAPI.TrafficSessionRetrieveResponse
  | NonNullable<NonNullable<TrafficSessionsAPI.TrafficSessionListResponse>['items']>[number];

export class TrafficSession {
  constructor(
    readonly api: Raw,
    readonly deviceID: string,
    readonly id: string,
    public info: TrafficSessionInfo | undefined = undefined,
    private owned = false,
    private infoRoot = '',
  ) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot(
      'TrafficSession',
      this.id,
      this.info === undefined ? undefined : { state: this.state },
    );
  }

  refresh(options?: RequestOptions): APIPromise<TrafficSessionsAPI.TrafficSessionRetrieveResponse> {
    const result = this.api.devices.trafficSessions.retrieve(
      this.id,
      { deviceId: this.deviceID },
      boundOptions(options, [
        { name: 'sessionId', location: 'path', value: this.id },
        { name: 'deviceId', location: 'path', value: this.deviceID },
      ]),
    );
    return result._thenUnwrap((info) => {
      this.info = info;
      this.infoRoot = '';
      return info;
    });
  }

  /** Reads the last response without making a request. */
  get state(): 'starting' | 'active' | 'stopping' | 'stopped' | 'failed' | 'expired' | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'state') as
      'starting' | 'active' | 'stopping' | 'stopped' | 'failed' | 'expired' | undefined;
  }

  /**
   * Stop device traffic inspection
   */
  delete(options?: RequestOptions): APIPromise<TrafficSessionsAPI.TrafficSessionDeleteResponse> {
    const result = this.api.devices.trafficSessions.delete(
      this.id,
      { deviceId: this.deviceID },
      boundOptions(options, [
        { name: 'sessionId', location: 'path', value: this.id },
        { name: 'deviceId', location: 'path', value: this.deviceID },
      ]),
    );
    return result;
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type ProxyConfigurationInfo =
  | ProxiesAPI.ProxyCreateResponse
  | ProxiesAPI.ProxyRetrieveResponse
  | NonNullable<NonNullable<ProxiesAPI.ProxyListResponse>['data']>[number];

/** A stored proxy configuration. */
export class ProxyConfiguration {
  constructor(
    readonly api: Raw,
    readonly id: string,
    public info: ProxyConfigurationInfo | undefined = undefined,
    private owned = false,
    private infoRoot = 'data',
  ) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot(
      'ProxyConfiguration',
      this.id,
      this.info === undefined ? undefined : { name: this.name, protocol: this.protocol },
    );
  }

  refresh(options?: RequestOptions): APIPromise<ProxiesAPI.ProxyRetrieveResponse> {
    const result = this.api.proxies.retrieve(
      this.id,
      boundOptions(options, [{ name: 'proxyId', location: 'path', value: this.id }]),
    );
    return result._thenUnwrap((info) => {
      this.info = info;
      this.infoRoot = 'data';
      return info;
    });
  }

  /** Reads the last response without making a request. */
  get name(): string | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'name') as string | undefined;
  }

  /** Reads the last response without making a request. */
  get protocol(): 'socks5' | 'wireguard' | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'protocol') as 'socks5' | 'wireguard' | undefined;
  }

  /**
   * Replaces the proxy config identified by `proxyId` with the provided body. As
   * with creation, the body is a `protocol`-discriminated union of socks5 or
   * wireguard fields. Returns the updated config.
   */
  update(
    params: ProxiesAPI.ProxyUpdateParams.UpdateSocks5Proxy,
    options?: RequestOptions,
  ): APIPromise<ProxiesAPI.ProxyUpdateResponse>;
  update(
    params: ProxiesAPI.ProxyUpdateParams.UpdateWireguardProxy,
    options?: RequestOptions,
  ): APIPromise<ProxiesAPI.ProxyUpdateResponse>;
  update(
    params: ProxiesAPI.ProxyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProxiesAPI.ProxyUpdateResponse>;
  update(
    params: ProxiesAPI.ProxyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProxiesAPI.ProxyUpdateResponse> {
    const result = this.api.proxies.update(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'proxyId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Permanently deletes the proxy config identified by `proxyId` and returns the
   * deleted config. Returns not found if no matching config exists.
   */
  delete(options?: RequestOptions): APIPromise<ProxiesAPI.ProxyDeleteResponse> {
    const result = this.api.proxies.delete(
      this.id,
      boundOptions(options, [{ name: 'proxyId', location: 'path', value: this.id }]),
    );
    return result;
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type ConnectProxyInfo =
  | ConnectProxiesAPI.ProxyRetrieveResponse
  | ConnectProxiesAPI.ProxyBuyResponse
  | NonNullable<NonNullable<ConnectProxiesAPI.ProxyListResponse>['items']>[number];

export class ConnectProxy {
  constructor(
    readonly api: Raw,
    readonly id: string,
    public info: ConnectProxyInfo | undefined = undefined,
    private owned = false,
    private infoRoot = '',
  ) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot(
      'ConnectProxy',
      this.id,
      this.info === undefined ? undefined : { name: this.name, status: this.status },
    );
  }

  refresh(options?: RequestOptions): APIPromise<ConnectProxiesAPI.ProxyRetrieveResponse> {
    const result = this.api.connect.proxies.retrieve(
      this.id,
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result._thenUnwrap((info) => {
      this.info = info;
      this.infoRoot = '';
      return info;
    });
  }

  /** Reads the last response without making a request. */
  get name(): string | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'name') as string | undefined;
  }

  /** Reads the last response without making a request. */
  get status():
    | 'checking'
    | 'pending_payment'
    | 'provisioning'
    | 'active'
    | 'cancelling'
    | 'ended'
    | 'error'
    | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'status') as
      | 'checking'
      | 'pending_payment'
      | 'provisioning'
      | 'active'
      | 'cancelling'
      | 'ended'
      | 'error'
      | undefined;
  }

  /**
   * Renames the proxy identified by the path ID.
   */
  update(
    params?: ConnectProxiesAPI.ProxyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ConnectProxiesAPI.ProxyUpdateResponse> {
    const result = this.api.connect.proxies.update(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Deletes the proxy identified by the path ID and releases its provisioning.
   * Returns 404 if no such proxy exists for the caller.
   */
  cancel(options?: RequestOptions): APIPromise<void> {
    const result = this.api.connect.proxies.cancel(
      this.id,
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Refreshes a pending dedicated proxy's checkout on explicit payment intent.
   * Already-paid proxies (provisioning, active, or cancelling) return their current
   * status without a payment URL. An expired checkout requires a new purchase.
   */
  checkout(options?: RequestOptions): APIPromise<ConnectProxiesAPI.ProxyCheckoutResponse> {
    const result = this.api.connect.proxies.checkout(
      this.id,
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Checks right now that the proxy's upstream accepts a connection through its
   * current session. If the upstream refuses the session and the proxy is a rotating
   * (sticky-session) proxy, the proxy is moved onto a fresh session that has been
   * checked to work; its credentials and country stay the same, its exit IP changes.
   * Intended for callers that are about to depend on the proxy (e.g. while
   * provisioning a phone). After `rotated`, the gateway uses the new session within
   * about 30 seconds. A `refused` or `unreachable` result is not an error: the
   * response describes the proxy's state.
   */
  ensureHealthy(options?: RequestOptions): APIPromise<ConnectProxiesAPI.ProxyEnsureHealthyResponse> {
    const result = this.api.connect.proxies.ensureHealthy(
      this.id,
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Returns the connection history recorded for this proxy, one item per connection
   * (aggregated across the connection's lifetime). Supports filtering on every
   * property plus ordering and pagination. Returns 503 when connection history is
   * temporarily unavailable.
   */
  listConnections(
    params?: ConnectProxiesAPI.ProxyListConnectionsParams,
    options?: RequestOptions,
  ): APIPromise<ConnectProxiesAPI.ProxyListConnectionsResponse> {
    const result = this.api.connect.proxies.listConnections(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Returns the most recent cached network-latency measurement for the proxy,
   * sampled periodically by connecting through the proxy to a fixed target.
   * `latency` is null when no measurement is available yet (e.g. the proxy is not
   * active, or it has not been sampled since coming online).
   */
  ping(options?: RequestOptions): APIPromise<ConnectProxiesAPI.ProxyPingResponse> {
    const result = this.api.connect.proxies.ping(
      this.id,
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result;
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type ConnectUserInfo =
  | UsersAPI.UserCreateResponse
  | UsersAPI.UserRetrieveResponse
  | NonNullable<NonNullable<UsersAPI.UserListResponse>['items']>[number];

export class ConnectUser {
  constructor(
    readonly api: Raw,
    readonly id: string,
    public info: ConnectUserInfo | undefined = undefined,
    private owned = false,
    private infoRoot = '',
  ) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot(
      'ConnectUser',
      this.id,
      this.info === undefined ? undefined : { username: this.username },
    );
  }

  refresh(options?: RequestOptions): APIPromise<UsersAPI.UserRetrieveResponse> {
    const result = this.api.connect.users.retrieve(
      this.id,
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result._thenUnwrap((info) => {
      this.info = info;
      this.infoRoot = '';
      return info;
    });
  }

  /** Reads the last response without making a request. */
  get username(): string | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'username') as string | undefined;
  }

  /**
   * Rebind the user to a different proxy (or detach it by passing null).
   */
  update(
    params?: UsersAPI.UserUpdateParams,
    options?: RequestOptions,
  ): APIPromise<UsersAPI.UserUpdateResponse> {
    const result = this.api.connect.users.update(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Deletes the SOCKS5 user identified by the path ID, revoking its credentials and
   * any proxy binding. Returns 404 if no such user exists for the caller.
   */
  delete(options?: RequestOptions): APIPromise<void> {
    const result = this.api.connect.users.delete(
      this.id,
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Returns the connection history recorded for this user, one item per connection
   * (aggregated across the connection's lifetime). Supports filtering on every
   * property plus ordering and pagination. Returns 503 when connection history is
   * temporarily unavailable.
   */
  listConnections(
    params?: UsersAPI.UserListConnectionsParams,
    options?: RequestOptions,
  ): APIPromise<UsersAPI.UserListConnectionsResponse> {
    const result = this.api.connect.users.listConnections(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result;
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type TaskInfo =
  | ResourcesTasksAPI.TaskRetrieveResponse
  | ResourcesTasksAPI.TaskGetStatusResponse
  | ResourcesTasksAPI.TaskRunResponse
  | NonNullable<NonNullable<TasksAPI.TaskListResponse>['items']>[number]
  | NonNullable<NonNullable<ResourcesTasksAPI.TaskListResponse>['items']>[number];

export class Task<T = never> {
  readonly screenshots;

  readonly uiStates;

  constructor(
    readonly api: Raw,
    readonly id: string,
    public info: TaskInfo | undefined = undefined,
    private owned = false,
    private outputSchema: OutputSchema<T> | undefined = undefined,
    private infoRoot = 'task',
  ) {
    configureObject(this);
    this.screenshots = {
      /**
       * Get a specific screenshot by index.
       */
      retrieve: (
        index: number,
        options?: RequestOptions,
      ): APIPromise<TasksScreenshotsAPI.ScreenshotRetrieveResponse> => {
        const result = this.api.tasks.screenshots.retrieve(
          index,
          { task_id: this.id },
          boundOptions(options, [{ name: 'task_id', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * List all screenshot URLs for a task.
       */
      list: (options?: RequestOptions): APIPromise<TasksScreenshotsAPI.ScreenshotListResponse> => {
        const result = this.api.tasks.screenshots.list(
          this.id,
          boundOptions(options, [{ name: 'task_id', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
    this.uiStates = {
      /**
       * Get a specific UI state by index.
       */
      retrieve: (
        index: number,
        options?: RequestOptions,
      ): APIPromise<UiStatesAPI.UiStateRetrieveResponse> => {
        const result = this.api.tasks.uiStates.retrieve(
          index,
          { task_id: this.id },
          boundOptions(options, [{ name: 'task_id', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * List all UI state URLs for a task.
       */
      list: (options?: RequestOptions): APIPromise<UiStatesAPI.UiStateListResponse> => {
        const result = this.api.tasks.uiStates.list(
          this.id,
          boundOptions(options, [{ name: 'task_id', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('Task', this.id, this.info === undefined ? undefined : { status: this.status });
  }

  refresh(options?: RequestOptions): APIPromise<ResourcesTasksAPI.TaskRetrieveResponse> {
    const result = this.api.tasks.retrieve(
      this.id,
      boundOptions(options, [{ name: 'task_id', location: 'path', value: this.id }]),
    );
    return result._thenUnwrap((info) => {
      this.info = info;
      this.infoRoot = 'task';
      return info;
    });
  }

  /** Not available on handles from `device.tasks.list()` until `refresh()`. */
  get status():
    | 'prepared'
    | 'queued'
    | 'created'
    | 'running'
    | 'cancelling'
    | 'completed'
    | 'failed'
    | 'cancelled'
    | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'status') as
      | 'prepared'
      | 'queued'
      | 'created'
      | 'running'
      | 'cancelling'
      | 'completed'
      | 'failed'
      | 'cancelled'
      | undefined;
  }

  /**
   * Attach to a running task and receive its events as an SSE stream.
   */
  attach(options?: RequestOptions): APIPromise<void> {
    const result = this.api.tasks.attach(
      this.id,
      boundOptions(options, [{ name: 'task_id', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Get the status of a task.
   */
  getStatus(options?: RequestOptions): APIPromise<ResourcesTasksAPI.TaskGetStatusResponse> {
    const result = this.api.tasks.getStatus(
      this.id,
      boundOptions(options, [{ name: 'task_id', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Get the trajectory of a task.
   */
  getTrajectory(options?: RequestOptions): APIPromise<ResourcesTasksAPI.TaskGetTrajectoryResponse> {
    const result = this.api.tasks.getTrajectory(
      this.id,
      boundOptions(options, [{ name: 'task_id', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Send a message to a running agent task. The message ID is delivered via SSE
   * (UserMessageEvent with action=queued).
   */
  sendMessage(
    params: ResourcesTasksAPI.TaskSendMessageParams,
    options?: RequestOptions,
  ): APIPromise<ResourcesTasksAPI.TaskSendMessageResponse> {
    const result = this.api.tasks.sendMessage(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'task_id', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Cancel a running task. Returns an error if the task is already in a terminal
   * state.
   */
  stop(options?: RequestOptions): APIPromise<ResourcesTasksAPI.TaskStopResponse> {
    const result = this.api.tasks.stop(
      this.id,
      boundOptions(options, [{ name: 'task_id', location: 'path', value: this.id }]),
    );
    return result;
  }

  /** Wait for the declared success condition; failure raises with the last response. */
  wait(options: WaitOptions = {}): Promise<ResourcesTasksAPI.TaskGetStatusResponse> {
    return waitFor(
      options,
      600000,
      1000,
      async (signal, timeout) => {
        const requestOptions: RequestOptions = { ...options, signal, timeout, maxRetries: 0 };
        const result = await this.api.tasks.getStatus(
          this.id,
          boundOptions(requestOptions, [{ name: 'task_id', location: 'path', value: this.id }]),
        );
        this.info = result;
        this.infoRoot = '';
        const state = result['status'];
        if ((['completed'] as readonly string[]).includes(state)) return { done: true, result };
        if (
          (['failed', 'cancelled'] as readonly string[]).includes(state) ||
          !(['prepared', 'queued', 'created', 'running', 'cancelling'] as readonly string[]).includes(state)
        )
          throw new WaitFailureError(result);
        return { done: false, result };
      },
      retryPoll,
      30000,
    );
  }

  async waitOutput(
    this: Task<T> & ([T] extends [never] ? never : unknown),
    options: WaitOptions = {},
  ): Promise<WaitOutput<T, ResourcesTasksAPI.TaskGetStatusResponse>> {
    if (!this.outputSchema) throw new TypeError('Typed output requires an output schema parser');
    const result = await this.wait(options);
    return parseOutput(this.outputSchema, result['output'], result, this.id, 'Task');
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type TriggerInfo =
  | TriggersAPI.TriggerCreateResponse
  | TriggersAPI.TriggerRetrieveResponse
  | NonNullable<NonNullable<TriggersAPI.TriggerListResponse>['items']>[number];

export class Trigger {
  constructor(
    readonly api: Raw,
    readonly id: string,
    public info: TriggerInfo | undefined = undefined,
    private owned = false,
    private infoRoot = 'data',
  ) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot(
      'Trigger',
      this.id,
      this.info === undefined ? undefined : { name: this.name, activation: this.activation },
    );
  }

  refresh(options?: RequestOptions): APIPromise<TriggersAPI.TriggerRetrieveResponse> {
    const result = this.api.workflows.triggers.retrieve(
      this.id,
      boundOptions(options, [{ name: 'triggerId', location: 'path', value: this.id }]),
    );
    return result._thenUnwrap((info) => {
      this.info = info;
      this.infoRoot = 'data';
      return info;
    });
  }

  /** Reads the last response without making a request. */
  get name(): string | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'name') as string | undefined;
  }

  /** Reads the last response without making a request. */
  get activation(): 'event' | 'schedule' | 'custom' | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'activation') as
      'event' | 'schedule' | 'custom' | undefined;
  }

  /**
   * Partially update a trigger; all fields are optional. When `activation` is
   * changed, the type-specific field rules are re-validated. Schedule triggers
   * accept stored `payload` values (at most 1 MiB); null clears them. The resulting
   * payload must match customPayloadSchema (422 on mismatch, including schema
   * changes that invalidate stored values). Absent or null values are validated as
   * an empty object when a schema is configured. Changes apply from the next run.
   * Returns 404 if the trigger does not exist.
   */
  update(
    params?: TriggersAPI.TriggerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TriggersAPI.TriggerUpdateResponse> {
    const result = this.api.workflows.triggers.update(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'triggerId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Delete a trigger by its ID. Returns 404 if no trigger matches.
   */
  delete(options?: RequestOptions): APIPromise<TriggersAPI.TriggerDeleteResponse> {
    const result = this.api.workflows.triggers.delete(
      this.id,
      boundOptions(options, [{ name: 'triggerId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Invoke a custom trigger directly with an arbitrary JSON payload.
   *
   * Fan-out: a trigger may be referenced by multiple flows (workflows). Firing it
   * enqueues one execution per enabled, non-deleted flow attached to this trigger,
   * each receiving the same payload. The `enqueuedCount` in the response reports how
   * many were enqueued (0 if no flows are attached, or if all matching flows are
   * gated by a cooldown).
   *
   * Payload validation:
   *
   * - If the trigger has a `customPayloadSchema`, the payload is validated against
   *   it (JSON Schema).
   * - If no schema is configured, the payload only needs to be a JSON object — any
   *   keys and values are accepted.
   *
   * Only triggers with `activation = "custom"` can be fired through this endpoint;
   * event and schedule triggers return 409.
   *
   * Supports an optional `Idempotency-Key` header (1-255 printable ASCII
   * characters), which maps to the derived `invocationId` used for fan-out
   * deduplication. The payload is bound to the key on the first accepted fire,
   * before fan-out. A repeat with the same key and an identical payload returns 202
   * with `Idempotent-Replayed: true` (`deduplicated: true` when flows were skipped;
   * `enqueuedCount` counts only executions enqueued by that call); a changed payload
   * under the same key returns 422 `idempotency_key_reused`.
   */
  fire(
    params: TriggersAPI.TriggerFireParams,
    options?: RequestOptions,
  ): APIPromise<TriggersAPI.TriggerFireResponse> {
    const result = this.api.workflows.triggers.fire(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'triggerId', location: 'path', value: this.id }]),
    );
    return result;
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type CatalogEntryInfo =
  | ActionCatalogAPI.ActionCatalogRetrieveResponse
  | NonNullable<NonNullable<ActionCatalogAPI.ActionCatalogListResponse>['items']>[number];

export class CatalogEntry {
  constructor(
    readonly api: Raw,
    readonly id: string,
    public info: CatalogEntryInfo | undefined = undefined,
    private owned = false,
    private infoRoot = 'data',
  ) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot(
      'CatalogEntry',
      this.id,
      this.info === undefined ? undefined : { name: this.name, service: this.service },
    );
  }

  refresh(
    params?: ActionCatalogAPI.ActionCatalogRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ActionCatalogAPI.ActionCatalogRetrieveResponse> {
    const result = this.api.workflows.actionCatalog.retrieve(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'catalogEntryId', location: 'path', value: this.id }]),
    );
    return result._thenUnwrap((info) => {
      this.info = info;
      this.infoRoot = 'data';
      return info;
    });
  }

  /** Reads the last response without making a request. */
  get name(): string | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'name') as string | undefined;
  }

  /** Reads the last response without making a request. */
  get service():
    | 'tasks_api'
    | 'devices_api'
    | 'agents_api'
    | 'webhooks'
    | 'integrations_api'
    | 'triggers_api'
    | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'service') as
      | 'tasks_api'
      | 'devices_api'
      | 'agents_api'
      | 'webhooks'
      | 'integrations_api'
      | 'triggers_api'
      | undefined;
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type WorkflowActionInfo =
  | WorkflowsActionsAPI.ActionCreateResponse
  | WorkflowsActionsAPI.ActionRetrieveResponse
  | NonNullable<NonNullable<WorkflowsActionsAPI.ActionListResponse>['items']>[number];

export class WorkflowAction {
  constructor(
    readonly api: Raw,
    readonly id: string,
    public info: WorkflowActionInfo | undefined = undefined,
    private owned = false,
    private infoRoot = 'data',
  ) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot(
      'WorkflowAction',
      this.id,
      this.info === undefined ? undefined : { name: this.name, service: this.service },
    );
  }

  refresh(
    params?: WorkflowsActionsAPI.ActionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<WorkflowsActionsAPI.ActionRetrieveResponse> {
    const result = this.api.workflows.actions.retrieve(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'actionId', location: 'path', value: this.id }]),
    );
    return result._thenUnwrap((info) => {
      this.info = info;
      this.infoRoot = 'data';
      return info;
    });
  }

  /** Reads the last response without making a request. */
  get name(): string | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'name') as string | undefined;
  }

  /** Reads the last response without making a request. */
  get service():
    | 'tasks_api'
    | 'devices_api'
    | 'agents_api'
    | 'webhooks'
    | 'integrations_api'
    | 'triggers_api'
    | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'service') as
      | 'tasks_api'
      | 'devices_api'
      | 'agents_api'
      | 'webhooks'
      | 'integrations_api'
      | 'triggers_api'
      | undefined;
  }

  /**
   * Partially update an action's name, description, or params; all fields are
   * optional. Returns 404 if the action does not exist.
   */
  update(
    params?: WorkflowsActionsAPI.ActionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WorkflowsActionsAPI.ActionUpdateResponse> {
    const result = this.api.workflows.actions.update(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'actionId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Delete an action by its ID. Returns 404 if no action matches.
   */
  delete(options?: RequestOptions): APIPromise<WorkflowsActionsAPI.ActionDeleteResponse> {
    const result = this.api.workflows.actions.delete(
      this.id,
      boundOptions(options, [{ name: 'actionId', location: 'path', value: this.id }]),
    );
    return result;
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type FlowInfo =
  | FlowsAPI.FlowCreateResponse
  | FlowsAPI.FlowRetrieveResponse
  | FlowsAPI.FlowCloneResponse
  | NonNullable<NonNullable<FlowsAPI.FlowListResponse>['items']>[number];

export class Flow {
  readonly actions;

  readonly state;

  constructor(
    readonly api: Raw,
    readonly id: string,
    public info: FlowInfo | undefined = undefined,
    private owned = false,
    private infoRoot = 'data',
  ) {
    configureObject(this);
    this.actions = {
      /**
       * Return the ordered list of actions attached to a flow, including any nested
       * child actions. Returns 404 if the flow does not exist.
       */
      list: (options?: RequestOptions): APIPromise<FlowsActionsAPI.ActionListResponse> => {
        const result = this.api.workflows.flows.actions.list(
          this.id,
          boundOptions(options, [{ name: 'flowId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Append a single action to a flow at the given `position`, optionally nesting it
       * under a `parentFlowActionId` or supplying its own `children`. Supports a
       * `nameOverride`, param `overrides`, and `continueOnError`. Returns 404 if the
       * flow does not exist.
       *
       * Supports an optional `Idempotency-Key` header (1-255 printable ASCII
       * characters). Replays with the same key and an identical body return the original
       * 201; a changed body under the same key returns 422 `idempotency_key_reused`.
       */
      add: (
        params: FlowsActionsAPI.ActionAddParams,
        options?: RequestOptions,
      ): APIPromise<FlowsActionsAPI.ActionAddResponse> => {
        const result = this.api.workflows.flows.actions.add(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'flowId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Remove a single action from a flow by its `flowActionId`. Returns 404 if the
       * flow or flow action does not exist.
       */
      remove: (
        flowActionID: string,
        options?: RequestOptions,
      ): APIPromise<FlowsActionsAPI.ActionRemoveResponse> => {
        const result = this.api.workflows.flows.actions.remove(
          flowActionID,
          { flowId: this.id },
          boundOptions(options, [{ name: 'flowId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Replace a flow's entire action list with the supplied set (at least one
       * required). Each action references an `actionId` and a unique `position`, and may
       * include nested `children`, a `nameOverride`, param `overrides`, and a
       * `continueOnError` flag. Returns 404 if the flow does not exist.
       */
      replace: (
        params: FlowsActionsAPI.ActionReplaceParams,
        options?: RequestOptions,
      ): APIPromise<FlowsActionsAPI.ActionReplaceResponse> => {
        const result = this.api.workflows.flows.actions.replace(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'flowId', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
    this.state = {
      /**
       * List the keys a routine has saved with `state.save`, with the metadata of each
       * key's newest version.
       */
      list: (options?: RequestOptions): APIPromise<FlowsStateAPI.StateListResponse> => {
        const result = this.api.workflows.flows.state.list(
          this.id,
          boundOptions(options, [{ name: 'flowId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Delete every version of one state key. The next `state.load` of the key reports
       * `found: false`. Deleting an unknown key succeeds.
       */
      delete: (key: string, options?: RequestOptions): APIPromise<FlowsStateAPI.StateDeleteResponse> => {
        const result = this.api.workflows.flows.state.delete(
          key,
          { flowId: this.id },
          boundOptions(options, [{ name: 'flowId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * Return the retained versions of one state key, newest first, including each
       * saved value. An unknown key returns an empty list.
       */
      listVersions: (
        key: string,
        options?: RequestOptions,
      ): APIPromise<FlowsStateAPI.StateListVersionsResponse> => {
        const result = this.api.workflows.flows.state.listVersions(
          key,
          { flowId: this.id },
          boundOptions(options, [{ name: 'flowId', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('Flow', this.id, this.info === undefined ? undefined : { name: this.name });
  }

  refresh(options?: RequestOptions): APIPromise<FlowsAPI.FlowRetrieveResponse> {
    const result = this.api.workflows.flows.retrieve(
      this.id,
      boundOptions(options, [{ name: 'flowId', location: 'path', value: this.id }]),
    );
    return result._thenUnwrap((info) => {
      this.info = info;
      this.infoRoot = 'data';
      return info;
    });
  }

  /** Reads the last response without making a request. */
  get name(): string | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'name') as string | undefined;
  }

  /**
   * Partially update a flow's settings — name, trigger binding, enabled state,
   * target devices, cooldown, or notifications; all fields are optional. Actions are
   * managed through the flow-actions endpoints, not here. Returns 404 if the flow
   * does not exist.
   */
  update(
    params?: FlowsAPI.FlowUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FlowsAPI.FlowUpdateResponse> {
    const result = this.api.workflows.flows.update(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'flowId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Terminally archive a flow by its ID. Archived flows cannot be restored and are
   * hidden from customer reads. Repeating the request is idempotent for the owner.
   */
  delete(options?: RequestOptions): APIPromise<FlowsAPI.FlowDeleteResponse> {
    const result = this.api.workflows.flows.delete(
      this.id,
      boundOptions(options, [{ name: 'flowId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Activate a disabled flow only when the supplied verification execution succeeded
   * and the flow graph has not changed since verification. Repeating activation is
   * idempotent for an already-enabled flow.
   */
  activate(
    params: FlowsAPI.FlowActivateParams,
    options?: RequestOptions,
  ): APIPromise<FlowsAPI.FlowActivateResponse> {
    const result = this.api.workflows.flows.activate(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'flowId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Return the recording/delivery readiness for a flow (recording mode, whether
   * delivery can include the recording, whether a files.upload action exists, the
   * first direct OneDrive/Google Drive upload step if any) plus, per destination,
   * whether the flow owner has an active connection. Returns 404 if the flow does
   * not exist.
   */
  deliveryOptions(options?: RequestOptions): APIPromise<FlowsAPI.FlowDeliveryOptionsResponse> {
    const result = this.api.workflows.flows.deliveryOptions(
      this.id,
      boundOptions(options, [{ name: 'flowId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Simulate this flow firing without storing events, enqueuing jobs, or consuming
   * cooldown/rate-limit slots.
   *
   * Works for every trigger activation type:
   *
   * - `event`: validates the payload against the event catalog schema and evaluates
   *   the trigger conditions.
   * - `custom`: validates the payload against the custom payload schema (conditions
   *   do not apply).
   * - `schedule`: validates the stored trigger payload and its step references, and
   *   reports the next fire time; request payload overrides are ignored.
   *
   * The response reports `wouldFire` — whether the flow would actually run right now
   * — alongside the gates that decide it (enabled, device attached, blocked,
   * cooldown). `rateLimited` is informational and is not folded into `wouldFire`.
   */
  dryRun(
    params?: FlowsAPI.FlowDryRunParams,
    options?: RequestOptions,
  ): APIPromise<FlowsAPI.FlowDryRunResponse> {
    const result = this.api.workflows.flows.dryRun(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'flowId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * List self-healing repair episodes
   */
  listRepairs(options?: RequestOptions): APIPromise<FlowsAPI.FlowListRepairsResponse> {
    const result = this.api.workflows.flows.listRepairs(
      this.id,
      boundOptions(options, [{ name: 'flowId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Get a self-healing repair episode
   */
  retrieveRepair(
    episodeID: string,
    options?: RequestOptions,
  ): APIPromise<FlowsAPI.FlowRetrieveRepairResponse> {
    const result = this.api.workflows.flows.retrieveRepair(
      episodeID,
      { flowId: this.id },
      boundOptions(options, [{ name: 'flowId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Immediately enqueue one live execution on every device bound to the flow,
   * regardless of whether its trigger is event-based, custom, or scheduled.
   *
   * Supports an optional `Idempotency-Key` header (1-255 printable ASCII
   * characters). The run identity is derived from the key, so a retry never starts a
   * second run. Replays with the same key and an identical body return the original
   * status and the original `executionIds`; a changed body under the same key
   * returns 422 `idempotency_key_reused`.
   */
  run(params?: FlowsAPI.FlowRunParams, options?: RequestOptions): APIPromise<FlowsAPI.FlowRunResponse> {
    const result = this.api.workflows.flows.run(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'flowId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Clear a flow's blocked status after fixing the underlying issue. Idempotent —
   * safe to call on already-healthy flows.
   */
  unblock(options?: RequestOptions): APIPromise<FlowsAPI.FlowUnblockResponse> {
    const result = this.api.workflows.flows.unblock(
      this.id,
      boundOptions(options, [{ name: 'flowId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Create a copy of an existing flow, including its actions and settings. The
   * optional body can override the new flow's `name` and target `deviceIds`. Returns
   * 404 if the source flow does not exist.
   *
   * Supports an optional `Idempotency-Key` header (1-255 printable ASCII
   * characters). Replays with the same key and an identical body return the original
   * 201; a changed body under the same key returns 422 `idempotency_key_reused`.
   */
  clone(params?: FlowsAPI.FlowCloneParams, options?: RequestOptions): APIPromise<Flow> {
    const result = this.api.workflows.flows.clone(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'flowId', location: 'path', value: this.id }]),
    );
    return result._thenUnwrap((info) => new Flow(this.api, info['data']['id'], info, false, 'data'));
  }

  /**
   * Performs a real verification run on a device.
   *
   * Run a bound, deduplicated **verification** of this flow on exactly one device as
   * a real run.
   *
   * Unlike a normal trigger firing, verification:
   *
   * - runs a flow that is `enabled` OR `disabled` (an archived flow returns 404);
   * - targets one device (`deviceId`, or the single bound device);
   * - is idempotent per `invocationId`: a repeat returns the existing run
   *   (`deduplicated: true`, HTTP 200) instead of enqueuing another (HTTP 202);
   * - never mutates flow health, `lastTriggeredAt`, or the repair loop.
   *
   * Per-activation payload gate:
   *
   * - `custom`: validates the payload against the custom payload schema (422 on
   *   failure).
   * - `event`: validates the payload against the event catalog schema and evaluates
   *   the trigger conditions; a failing gate returns 409 `conditions_not_met` with
   *   the dry-run report.
   * - `schedule`: uses the stored trigger payload as event.payload; request payload
   *   overrides are ignored.
   */
  verify(params: FlowsAPI.FlowVerifyParams, options?: RequestOptions): APIPromise<Execution> {
    const result = this.api.workflows.flows.verify(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'flowId', location: 'path', value: this.id }]),
    );
    return result._thenUnwrap(
      (info) => new Execution(this.api, info['data']['executionId'], info, false, 'data'),
    );
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type ExecutionInfo =
  | ExecutionsAPI.ExecutionRetrieveResponse
  | FlowsAPI.FlowVerifyResponse
  | NonNullable<NonNullable<ExecutionsAPI.ExecutionListResponse>['items']>[number];

export class Execution {
  readonly screenshots;

  constructor(
    readonly api: Raw,
    readonly id: string,
    public info: ExecutionInfo | undefined = undefined,
    private owned = false,
    private infoRoot = 'data',
  ) {
    configureObject(this);
    this.screenshots = {
      /**
       * Redirects (302) to a freshly signed, time-limited image URL for a screenshot
       * captured during this execution. Owner-gated: 404 if the execution or the
       * screenshot does not belong to the caller.
       */
      retrieve: (screenshotID: string, options?: RequestOptions): APIPromise<void> => {
        const result = this.api.workflows.executions.screenshots.retrieve(
          screenshotID,
          { executionId: this.id },
          boundOptions(options, [{ name: 'executionId', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot(
      'Execution',
      this.id,
      this.info === undefined ? undefined : { status: this.status },
    );
  }

  refresh(options?: RequestOptions): APIPromise<ExecutionsAPI.ExecutionRetrieveResponse> {
    const result = this.api.workflows.executions.retrieve(
      this.id,
      boundOptions(options, [{ name: 'executionId', location: 'path', value: this.id }]),
    );
    return result._thenUnwrap((info) => {
      this.info = info;
      this.infoRoot = 'data';
      return info;
    });
  }

  /** Reads the last response without making a request. */
  get status():
    'pending' | 'running' | 'success' | 'failed' | 'cancelled' | 'skipped' | 'invalid' | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'status') as
      'pending' | 'running' | 'success' | 'failed' | 'cancelled' | 'skipped' | 'invalid' | undefined;
  }

  /**
   * Stops the execution between steps and marks it cancelled. Idempotent-ish:
   * already-terminal executions return 409.
   */
  abort(options?: RequestOptions): APIPromise<ExecutionsAPI.ExecutionAbortResponse> {
    const result = this.api.workflows.executions.abort(
      this.id,
      boundOptions(options, [{ name: 'executionId', location: 'path', value: this.id }]),
    );
    return result;
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type WebhookInfo =
  | WebhooksAPI.WebhookCreateResponse
  | WebhooksAPI.WebhookRetrieveResponse
  | NonNullable<NonNullable<WebhooksAPI.WebhookListResponse>['items']>[number];

/** info is the last create/get snapshot and may contain the create-time secret. Rotation revokes it and returns the new secret without updating info. */
export class Webhook {
  readonly deliveries;

  constructor(
    readonly api: Raw,
    readonly id: string,
    public info: WebhookInfo | undefined = undefined,
    private owned = false,
    private infoRoot = 'data',
  ) {
    configureObject(this);
    this.deliveries = new WebhookDeliveryManager(this.api, this.id);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot('Webhook', this.id, this.info === undefined ? undefined : { url: this.url });
  }

  refresh(options?: RequestOptions): APIPromise<WebhooksAPI.WebhookRetrieveResponse> {
    const result = this.api.webhooks.retrieve(
      this.id,
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result._thenUnwrap((info) => {
      this.info = info;
      this.infoRoot = 'data';
      return info;
    });
  }

  /** Reads the last response without making a request. */
  get url(): string | null | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'url') as string | null | undefined;
  }

  /**
   * Updates a webhook subscription. Any combination of the subscribed event types,
   * state (ACTIVE or DISABLED), and description may be changed, and at least one
   * field must be supplied. Setting state to ACTIVE re-enables a subscription that
   * was auto-blocked after sustained delivery failures. The URL or integration
   * target cannot be changed; delete and recreate the webhook instead.
   */
  update(
    params?: WebhooksAPI.WebhookUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.WebhookUpdateResponse> {
    const result = this.api.webhooks.update(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Deletes a webhook subscription so it stops receiving deliveries. Returns 204 No
   * Content on success.
   */
  delete(options?: RequestOptions): APIPromise<void> {
    const result = this.api.webhooks.delete(
      this.id,
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Rotates and revokes the old secret. The last create/get snapshot in info is preserved; any create-time secret in it is now revoked. Returns the new secret.
   *
   * Generates a new signing secret for the webhook subscription and returns it once
   * in the response. The previous secret is replaced immediately, so any signature
   * verification on your endpoint must be updated to use the new value. Only `http`
   * webhooks have a signing secret; for `integration` webhooks this returns 400.
   */
  rotateSecret(options?: RequestOptions): APIPromise<WebhooksAPI.WebhookRotateSecretResponse> {
    const result = this.api.webhooks.rotateSecret(
      this.id,
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Sends a single test payload to the webhook subscription URL (or a test message
   * to its integration target) to verify connectivity. The response reports whether
   * the attempt succeeded along with the returned HTTP status code or error, if any.
   */
  test(options?: RequestOptions): APIPromise<WebhooksAPI.WebhookTestDeliveryResponse> {
    const result = this.api.webhooks.testDelivery(
      this.id,
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result;
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type WebhookDeliveryInfo =
  | DeliveriesAPI.DeliveryRetrieveAttemptsResponse
  | NonNullable<NonNullable<DeliveriesAPI.DeliveryListForWebhookResponse>['items']>[number];

export class WebhookDelivery {
  constructor(
    readonly api: Raw,
    readonly webhookID: string,
    readonly id: string,
    public info: WebhookDeliveryInfo | undefined = undefined,
    private owned = false,
    private infoRoot = 'data',
  ) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot(
      'WebhookDelivery',
      this.id,
      this.info === undefined ? undefined : { status: this.status },
    );
  }

  refresh(options?: RequestOptions): APIPromise<DeliveriesAPI.DeliveryRetrieveAttemptsResponse> {
    const result = this.api.webhooks.deliveries.retrieveAttempts(
      this.id,
      { id: this.webhookID },
      boundOptions(options, [
        { name: 'deliveryId', location: 'path', value: this.id },
        { name: 'id', location: 'path', value: this.webhookID },
      ]),
    );
    return result._thenUnwrap((info) => {
      this.info = info;
      this.infoRoot = 'data';
      return info;
    });
  }

  /** Reads the last response without making a request. */
  get status(): 'pending' | 'success' | 'skipped' | 'dead' | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'status') as
      'pending' | 'success' | 'skipped' | 'dead' | undefined;
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type MailboxInfo =
  | MailboxesAPI.MailboxCreateResponse
  | MailboxesAPI.MailboxRetrieveResponse
  | NonNullable<NonNullable<MailboxesAPI.MailboxListResponse>['items']>[number];

export class Mailbox {
  readonly messages;

  constructor(
    readonly api: Raw,
    readonly id: string,
    public info: MailboxInfo | undefined = undefined,
    private owned = false,
    private infoRoot = 'data',
  ) {
    configureObject(this);
    this.messages = new MailboxMessageManager(this.api, this.id);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot(
      'Mailbox',
      this.id,
      this.info === undefined ? undefined : { address: this.address, status: this.status },
    );
  }

  refresh(options?: RequestOptions): APIPromise<MailboxesAPI.MailboxRetrieveResponse> {
    const result = this.api.mailboxes.retrieve(
      this.id,
      boundOptions(options, [{ name: 'mailboxId', location: 'path', value: this.id }]),
    );
    return result._thenUnwrap((info) => {
      this.info = info;
      this.infoRoot = 'data';
      return info;
    });
  }

  /** Reads the last response without making a request. */
  get address(): string | null | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'address') as string | null | undefined;
  }

  /** Reads the last response without making a request. */
  get status():
    | 'provisioning'
    | 'awaiting_payment'
    | 'active'
    | 'cancel_scheduled'
    | 'archived'
    | 'billing_error'
    | 'pending_connection'
    | 'connection_expired'
    | 'connection_removed'
    | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'status') as
      | 'provisioning'
      | 'awaiting_payment'
      | 'active'
      | 'cancel_scheduled'
      | 'archived'
      | 'billing_error'
      | 'pending_connection'
      | 'connection_expired'
      | 'connection_removed'
      | undefined;
  }

  /**
   * Updates the label of a mailbox.
   *
   * @example
   * ```ts
   * const mailbox = await client.mailboxes.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { label: 'label' },
   * );
   * ```
   */
  update(
    params: MailboxesAPI.MailboxUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MailboxesAPI.MailboxUpdateResponse> {
    const result = this.api.mailboxes.update(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'mailboxId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Cancels the mailbox rental or schedules cancellation for an active paid mailbox. Existing addresses and messages are retained.
   *
   * Cancels a pending mailbox or schedules an active paid mailbox for cancellation.
   * Existing addresses and messages are retained. Repeating the request is safe. An
   * external inbox (Gmail) cannot be cancelled here; disconnect the link instead.
   *
   * @example
   * ```ts
   * const mailbox = await client.mailboxes.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(options?: RequestOptions): APIPromise<MailboxesAPI.MailboxDeleteResponse> {
    const result = this.api.mailboxes.delete(
      this.id,
      boundOptions(options, [{ name: 'mailboxId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Removes only this mailbox link. The Gmail connection used by your agents stays
   * in place.
   *
   * @example
   * ```ts
   * const response = await client.mailboxes.disconnect(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  disconnect(options?: RequestOptions): APIPromise<MailboxesAPI.MailboxDisconnectResponse> {
    const result = this.api.mailboxes.disconnect(
      this.id,
      boundOptions(options, [{ name: 'mailboxId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Returns the most likely recent OTP for the mailbox. Returns 204 when no matching
   * code is available.
   *
   * @example
   * ```ts
   * const response = await client.mailboxes.otp(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  otp(
    params?: MailboxesAPI.MailboxOtpParams,
    options?: RequestOptions,
  ): APIPromise<MailboxesAPI.MailboxOtpResponse> {
    const result = this.api.mailboxes.otp(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'mailboxId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Restarts a paid mailbox rental. Uses included capacity when available unless paid service is requested.
   *
   * Restarts an archived mailbox with the same address. Uses included capacity when
   * available unless paid service is requested.
   *
   * @example
   * ```ts
   * const response = await client.mailboxes.restart(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  restart(
    params?: MailboxesAPI.MailboxRestartParams,
    options?: RequestOptions,
  ): APIPromise<MailboxesAPI.MailboxRestartResponse> {
    const result = this.api.mailboxes.restart(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'mailboxId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Withdraws a scheduled cancellation. Only available while cancellation is
   * pending.
   *
   * @example
   * ```ts
   * const response = await client.mailboxes.uncancel(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  uncancel(options?: RequestOptions): APIPromise<MailboxesAPI.MailboxUncancelResponse> {
    const result = this.api.mailboxes.uncancel(
      this.id,
      boundOptions(options, [{ name: 'mailboxId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /** Only codes received after this wait started are considered unless after is passed. The comparison uses the client clock. Returns the OTP data including code, received time, sender, message ID and confidence; leaves info unchanged. */
  waitForOtp(
    params?: MailboxesAPI.MailboxOtpParams,
    options: WaitOptions = {},
  ): Promise<NonNullable<NonNullable<MailboxesAPI.MailboxOtpResponse>['data']>> {
    const waitStart = new Date().toISOString();
    const pollParams = { ...params, after: params?.['after'] === undefined ? waitStart : params['after'] };
    return waitFor(
      options,
      120000,
      1000,
      async (signal, timeout) => {
        const requestOptions: RequestOptions = { ...options, signal, timeout, maxRetries: 0 };
        const result = await this.api.mailboxes.otp(
          this.id,
          { ...pollParams },
          boundOptions(requestOptions, [{ name: 'mailboxId', location: 'path', value: this.id }]),
        );

        const value = result?.['data']?.['code'];
        return {
          done: conditionMet(value, 'non_empty'),
          result: result?.['data'] as NonNullable<NonNullable<MailboxesAPI.MailboxOtpResponse>['data']>,
        };
      },
      retryPoll,
      30000,
    );
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type MailboxConnectionInfo =
  ConnectionsAPI.ConnectionCreateResponse | ConnectionsAPI.ConnectionRetrieveResponse;

export class MailboxConnection {
  constructor(
    readonly api: Raw,
    readonly id: string,
    public info: MailboxConnectionInfo | undefined = undefined,
    private owned = false,
    private infoRoot = '',
  ) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot(
      'MailboxConnection',
      this.id,
      this.info === undefined ? undefined : { address: this.address, status: this.status },
    );
  }

  refresh(options?: RequestOptions): APIPromise<ConnectionsAPI.ConnectionRetrieveResponse> {
    const result = this.api.mailboxes.connections.retrieve(
      this.id,
      boundOptions(options, [{ name: 'connectionId', location: 'path', value: this.id }]),
    );
    return result._thenUnwrap((info) => {
      this.info = info;
      this.infoRoot = '';
      return info;
    });
  }

  /** Reads the last response without making a request. */
  get address(): string | null | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'address') as string | null | undefined;
  }

  /** Reads the last response without making a request. */
  get status(): 'pending' | 'active' | 'expired' | 'removed' | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'status') as
      'pending' | 'active' | 'expired' | 'removed' | undefined;
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type MailboxMessageInfo =
  | MessagesAPI.MessageRetrieveResponse
  | NonNullable<NonNullable<MessagesAPI.MessageListResponse>['items']>[number];

export class MailboxMessage {
  constructor(
    readonly api: Raw,
    readonly mailboxID: string,
    readonly id: string,
    public info: MailboxMessageInfo | undefined = undefined,
    private owned = false,
    private infoRoot = 'data',
  ) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot(
      'MailboxMessage',
      this.id,
      this.info === undefined ? undefined : { subject: this.subject },
    );
  }

  refresh(
    params?: Omit<MessagesAPI.MessageRetrieveParams, 'mailboxId'>,
    options?: RequestOptions,
  ): APIPromise<MessagesAPI.MessageRetrieveResponse> {
    const result = this.api.mailboxes.messages.retrieve(
      this.id,
      { ...params, mailboxId: this.mailboxID },
      boundOptions(options, [
        { name: 'messageId', location: 'path', value: this.id },
        { name: 'mailboxId', location: 'path', value: this.mailboxID },
      ]),
    );
    return result._thenUnwrap((info) => {
      this.info = info;
      this.infoRoot = 'data';
      return info;
    });
  }

  /** Reads the last response without making a request. */
  get subject(): string | null | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'subject') as string | null | undefined;
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type AgentFileInfo =
  | FilesAPI.FileConfirmResponse
  | NonNullable<NonNullable<FilesAPI.FileListResponse>['files']>[number]
  | NonNullable<NonNullable<AgentsFilesAPI.FileListResponse>['files']>[number];

export class AgentFile {
  constructor(
    readonly api: Raw,
    readonly id: string,
    public info: AgentFileInfo | undefined = undefined,
    private owned = false,
    private infoRoot = '',
  ) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot(
      'AgentFile',
      this.id,
      this.info === undefined ? undefined : { filename: this.filename, displayName: this.displayName },
    );
  }

  /** Reads only the last create/list snapshot without making a request; fromId/from_id handles have no data. */
  get filename(): string | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'filename') as string | undefined;
  }

  /** Reads only the last create/list snapshot without making a request; fromId/from_id handles have no data. */
  get displayName(): string | null | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'displayName') as string | null | undefined;
  }

  /**
   * Partial update of `displayName` and/or `enabled`. Only files with `zone=skills`
   * are mutable; other zones return 422 `unsupported_zone`.
   */
  update(
    params?: FilesAPI.FileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FilesAPI.FileUpdateResponse> {
    const result = this.api.files.update(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'fileId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Hard-delete a file.
   */
  delete(options?: RequestOptions): APIPromise<FilesAPI.FileDeleteResponse> {
    const result = this.api.files.delete(
      this.id,
      boundOptions(options, [{ name: 'fileId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Soft-cancels an in-flight upload before confirm, transitioning it to expired and
   * deleting the underlying object. Only acts on `pending` uploads — refuses to
   * touch `ready` files, so confirmed files are never removed. Idempotent:
   * `{ cancelled: false }` if the file exists but is no longer pending.
   */
  cancelPending(options?: RequestOptions): APIPromise<FilesAPI.FileCancelPendingResponse> {
    const result = this.api.files.cancelPending(
      this.id,
      boundOptions(options, [{ name: 'fileId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Confirm a file upload after validating the stored object with a server-side HEAD
   * request.
   */
  confirm(options?: RequestOptions): APIPromise<FilesAPI.FileConfirmResponse> {
    const result = this.api.files.confirm(
      this.id,
      boundOptions(options, [{ name: 'fileId', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Redirects to a short-lived presigned download URL. Missing, non-ready, and files
   * owned by another tenant all return the same 404 response.
   */
  async download(options?: RequestOptions): Promise<Uint8Array> {
    const response = await this.api.files
      .download(this.id, boundOptions(options, [{ name: 'fileId', location: 'path', value: this.id }]))
      .asResponse();
    return new Uint8Array(await response.arrayBuffer());
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type AgentInfo =
  | AgentsAPI.AgentCreateResponse
  | ProfileAPI.ProfileUpdateResponse
  | NonNullable<NonNullable<AgentsAPI.AgentListResponse>['agents']>[number];

export class Agent {
  readonly files;

  readonly conversations;

  readonly requests;

  readonly routines;

  readonly profile;

  constructor(
    readonly api: Raw,
    readonly id: string,
    public info: AgentInfo | undefined = undefined,
    private owned = false,
    private infoRoot = 'agent',
  ) {
    configureObject(this);
    this.files = {
      /**
       * List the ready files of one agent, optionally filtered by zone.
       */
      list: (
        params?: AgentsFilesAPI.FileListParams,
        options?: RequestOptions,
      ): ObjectPager<AgentFile, AgentsFilesAPI.FileListResponse> => {
        return new ObjectPager(async () => {
          const response = await this.api.agents.files.list(
            this.id,
            { ...params },
            boundOptions(options, [{ name: 'agentId', location: 'path', value: this.id }]),
          );
          return new PagedObjectPage(
            (response['files'] ?? []).map((info) => new AgentFile(this.api, info['fileId'], info, false, '')),
            response,
          );
        });
      },
    };
    this.conversations = {
      /**
       * Create a named chat session bound to one agent. Idempotent via the
       * `Idempotency-Key` header, like the unscoped create.
       */
      create: (
        params: ConversationsAPI.ConversationCreateParams,
        options?: RequestOptions,
      ): APIPromise<ConversationsAPI.ConversationCreateResponse> => {
        const result = this.api.agents.conversations.create(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'agentId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * List the user's named chat sessions for one agent. Supports the same `kind`,
       * `workflowId` and `mine` filters as the unscoped list.
       */
      list: (
        params?: ConversationsAPI.ConversationListParams,
        options?: RequestOptions,
      ): APIPromise<ConversationsAPI.ConversationListResponse> => {
        const result = this.api.agents.conversations.list(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'agentId', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
    this.requests = {
      /**
       * Owner-scoped. Returns newest requests where the Agent is source or target. Use
       * nextCursor as before to read older pages. Invalid cursors return 400
       * invalid_cursor.
       */
      listForAgent: (
        params?: RequestsAPI.RequestListForAgentParams,
        options?: RequestOptions,
      ): ObjectPager<AgentRequest, RequestsAPI.RequestListForAgentResponse> => {
        return new ObjectPager(async () => {
          const response = await this.api.agents.requests.listForAgent(
            this.id,
            { ...params },
            boundOptions(options, [{ name: 'agentId', location: 'path', value: this.id }]),
          );
          return new PagedObjectPage(
            (response['requests'] ?? []).map(
              (info) => new AgentRequest(this.api, info['id'], info, false, ''),
            ),
            response,
          );
        });
      },
    };
    this.routines = {
      /**
       * Forwards the scheduler CreateFlowBody unchanged and assigns the Agent selected
       * in the path. Requires Idempotency-Key; reuse it after a transient failure.
       */
      create: (
        params: RoutinesAPI.RoutineCreateParams,
        options?: RequestOptions,
      ): APIPromise<RoutinesAPI.RoutineCreateResponse> => {
        const result = this.api.agents.routines.create(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'agentId', location: 'path', value: this.id }]),
        );
        return result;
      },
      /**
       * The source must belong to the authenticated owner and be assigned to the same
       * Agent or unassigned. The target is the Agent in the path. Requires
       * Idempotency-Key.
       */
      clone: (
        routineID: string,
        params?: Omit<RoutinesAPI.RoutineCloneParams, 'agentId'>,
        options?: RequestOptions,
      ): APIPromise<RoutinesAPI.RoutineCloneResponse> => {
        const result = this.api.agents.routines.clone(
          routineID,
          { ...params, agentId: this.id },
          boundOptions(options, [{ name: 'agentId', location: 'path', value: this.id }]),
        );
        return result;
      },
    };
    this.profile = {
      /**
       * Owner-scoped partial update of `displayName`, `instructions`, `modelProfile` and
       * the avatar. A null modelProfile uses the environment default; an unknown id
       * returns unknown_model_profile with details.validProfiles. Returns the updated
       * Agent; an Agent of another owner or an unknown id is a 404.
       */
      update: (params?: ProfileAPI.ProfileUpdateParams, options?: RequestOptions): APIPromise<Agent> => {
        const result = this.api.agents.profile.update(
          this.id,
          { ...params },
          boundOptions(options, [{ name: 'agentId', location: 'path', value: this.id }]),
        );
        return result._thenUnwrap((info) => new Agent(this.api, info['id'], info, false, ''));
      },
    };
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot(
      'Agent',
      this.id,
      this.info === undefined ? undefined : { displayName: this.displayName, status: this.status },
    );
  }

  /** Reads only the last create/list snapshot without making a request; fromId/from_id handles have no data. */
  get displayName(): string | null | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'profile.displayName') as string | null | undefined;
  }

  /** Reads only the last create/list snapshot without making a request; fromId/from_id handles have no data. */
  get status(): 'active' | 'pending' | 'failed' | 'archived' | 'disabled' | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'status') as
      'active' | 'pending' | 'failed' | 'archived' | 'disabled' | undefined;
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type AgentRequestInfo =
  | RequestsAPI.RequestRetrieveResponse
  | RequestsAPI.RequestRetrieveBySessionResponse
  | NonNullable<NonNullable<RequestsAPI.RequestListForAgentResponse>['requests']>[number]
  | NonNullable<NonNullable<RequestsAPI.RequestListResponse>['requests']>[number];

export class AgentRequest {
  constructor(
    readonly api: Raw,
    readonly id: string,
    public info: AgentRequestInfo | undefined = undefined,
    private owned = false,
    private infoRoot = '',
  ) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot(
      'AgentRequest',
      this.id,
      this.info === undefined ? undefined : { status: this.status },
    );
  }

  refresh(options?: RequestOptions): APIPromise<RequestsAPI.RequestRetrieveResponse> {
    const result = this.api.agents.requests.retrieve(
      this.id,
      boundOptions(options, [{ name: 'requestId', location: 'path', value: this.id }]),
    );
    return result._thenUnwrap((info) => {
      this.info = info;
      this.infoRoot = '';
      return info;
    });
  }

  /** Reads the last response without making a request. */
  get status():
    | 'queued'
    | 'running'
    | 'answered'
    | 'failed'
    | 'timed_out'
    | 'cancelled'
    | 'late_answer'
    | 'needs_user_input'
    | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'status') as
      | 'queued'
      | 'running'
      | 'answered'
      | 'failed'
      | 'timed_out'
      | 'cancelled'
      | 'late_answer'
      | 'needs_user_input'
      | undefined;
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type NumberMessageInfo =
  | ResourcesMessagesAPI.MessageRetrieveResponse
  | NumbersMessagesAPI.MessageSendResponse
  | NonNullable<NonNullable<ResourcesMessagesAPI.MessageListResponse>['items']>[number]
  | NonNullable<NonNullable<NumbersMessagesAPI.MessageListResponse>['items']>[number];

export class NumberMessage {
  constructor(
    readonly api: Raw,
    readonly id: string,
    public info: NumberMessageInfo | undefined = undefined,
    private owned = false,
    private infoRoot = 'data',
  ) {
    configureObject(this);
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot(
      'NumberMessage',
      this.id,
      this.info === undefined ? undefined : { status: this.status, direction: this.direction },
    );
  }

  refresh(options?: RequestOptions): APIPromise<ResourcesMessagesAPI.MessageRetrieveResponse> {
    const result = this.api.messages.retrieve(
      this.id,
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result._thenUnwrap((info) => {
      this.info = info;
      this.infoRoot = 'data';
      return info;
    });
  }

  /** Reads the last response without making a request. */
  get status():
    | 'received'
    | 'queued'
    | 'claimed'
    | 'sending'
    | 'sent'
    | 'sent_unconfirmed'
    | 'delivered'
    | 'failed'
    | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'status') as
      | 'received'
      | 'queued'
      | 'claimed'
      | 'sending'
      | 'sent'
      | 'sent_unconfirmed'
      | 'delivered'
      | 'failed'
      | undefined;
  }

  /** Reads the last response without making a request. */
  get direction(): 'inbound' | 'outbound' | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'direction') as 'inbound' | 'outbound' | undefined;
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}

export type PhoneNumberInfo =
  | NumbersAPI.NumberCreateResponse
  | NumbersAPI.NumberRetrieveResponse
  | NonNullable<NonNullable<NumbersAPI.NumberListResponse>['items']>[number];

export class PhoneNumber {
  readonly messages;

  constructor(
    readonly api: Raw,
    readonly id: string,
    public info: PhoneNumberInfo | undefined = undefined,
    private owned = false,
    private infoRoot = 'data',
  ) {
    configureObject(this);
    this.messages = {
      /**
       * Returns SMS messages on the number, inbound and outbound, scoped to the
       * authenticated user. Newest first. Messages stay with the number across device
       * switches.
       *
       * @example
       * ```ts
       * const messages = await client.numbers.messages.list(
       *   '550e8400-e29b-41d4-a716-446655440000',
       * );
       * ```
       */
      list: (
        params?: NumbersMessagesAPI.MessageListParams,
        options?: RequestOptions,
      ): ObjectPager<NumberMessage, NumbersMessagesAPI.MessageListResponse> => {
        const load = async (
          page: number,
        ): Promise<PagedObjectPage<NumberMessage, NumbersMessagesAPI.MessageListResponse>> => {
          const pageOptions = pageRequestOptions(options, 'page', page, {
            direction: params?.['direction'],
            page: params?.['page'],
            pageSize: params?.['pageSize'],
            since: params?.['since'],
          });
          const response = await this.api.numbers.messages.list(
            this.id,
            { ...params },
            boundOptions(pageOptions, [{ name: 'id', location: 'path', value: this.id }]),
          );
          return new PagedObjectPage(
            (response['items'] ?? []).map((info) => new NumberMessage(this.api, info['id'], info, false, '')),
            response,
            {
              next: () =>
                nextObjectPage(
                  response['pagination']['page'],
                  response['pagination']['hasNext'],
                  response['pagination']['pages'],
                  page,
                ),
              load,
            },
          );
        };
        return new ObjectPager(() => load(params?.['page'] ?? 1));
      },
    };
  }

  toJSON(): ReturnType<typeof objectSnapshot> {
    return objectSnapshot(
      'PhoneNumber',
      this.id,
      this.info === undefined ? undefined : { phoneNumber: this.phoneNumber, state: this.state },
    );
  }

  refresh(options?: RequestOptions): APIPromise<NumbersAPI.NumberRetrieveResponse> {
    const result = this.api.numbers.retrieve(
      this.id,
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result._thenUnwrap((info) => {
      this.info = info;
      this.infoRoot = 'data';
      return info;
    });
  }

  /** Not available on handles from `numbers.create()` until `refresh()`. */
  get phoneNumber(): string | null | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'phoneNumber') as string | null | undefined;
  }

  /** Reads the last response without making a request. */
  get state():
    'awaiting_payment' | 'provisioning' | 'active' | 'cancel_scheduled' | 'expired' | 'failed' | undefined {
    return objectFieldValue(this.info, this.infoRoot, 'state') as
      'awaiting_payment' | 'provisioning' | 'active' | 'cancel_scheduled' | 'expired' | 'failed' | undefined;
  }

  /**
   * Updates the display label. Omitting `label` leaves it unchanged; null or an
   * empty string clears it.
   *
   * @example
   * ```ts
   * const number = await client.numbers.update(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  update(
    params?: NumbersAPI.NumberUpdateParams,
    options?: RequestOptions,
  ): APIPromise<NumbersAPI.NumberUpdateResponse> {
    const result = this.api.numbers.update(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Cancels the phone number rental.
   *
   * Cancels a pending purchase or schedules cancellation of an active paid phone
   * number. Repeating a scheduled cancellation is safe. Returns 409 when
   * cancellation is not available.
   *
   * @example
   * ```ts
   * const number = await client.numbers.delete(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  delete(options?: RequestOptions): APIPromise<NumbersAPI.NumberDeleteResponse> {
    const result = this.api.numbers.delete(
      this.id,
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result;
  }

  /**
   * Queues an SMS from one of the caller's numbers that can send. Replaying an
   * Idempotency-Key with the same payload returns the original message, reusing it
   * with a different payload returns 422. 409 capability_unavailable: this number
   * cannot send right now. 422 invalid_recipient / unsupported_destination /
   * body_too_long: the recipient or text does not fit the number. 429
   * daily_limit_reached: the rolling 24 h limit for the account is used up; 429
   * rate_limited: too many sends by the owner in a short window; 429
   * number_rate_limited: too many outbound sends from this number in the configured
   * window (all sends from this number count, including those made on your behalf).
   * 403 send_disabled: self-service SMS send is switched off;
   * outbound_sms_not_granted: outbound SMS requires an admin grant.
   *
   * @example
   * ```ts
   * const response = await client.numbers.messages.send(
   *   '550e8400-e29b-41d4-a716-446655440000',
   *   { body: 'x', to: '+15551230001' },
   * );
   * ```
   */
  send(params: NumbersMessagesAPI.MessageSendParams, options?: RequestOptions): APIPromise<NumberMessage> {
    const result = this.api.numbers.messages.send(
      this.id,
      { ...params },
      boundOptions(options, [{ name: 'id', location: 'path', value: this.id }]),
    );
    return result._thenUnwrap((info) => new NumberMessage(this.api, info['data']['id'], info, false, 'data'));
  }

  /** Wait for the number to become active. awaiting_payment means checkout is not completed; the last response carried by WaitFailureError includes the checkout URL in data.checkoutUrl (data.checkout_url in Python). */
  waitUntilActive(options: WaitOptions = {}): Promise<NumbersAPI.NumberRetrieveResponse> {
    return waitFor(
      options,
      300000,
      1000,
      async (signal, timeout) => {
        const requestOptions: RequestOptions = { ...options, signal, timeout, maxRetries: 0 };
        const result = await this.api.numbers.retrieve(
          this.id,
          boundOptions(requestOptions, [{ name: 'id', location: 'path', value: this.id }]),
        );
        this.info = result;
        this.infoRoot = 'data';
        const state = result['data']['state'];
        if ((['active', 'cancel_scheduled'] as readonly string[]).includes(state))
          return { done: true, result };
        if (
          (['expired', 'failed', 'awaiting_payment'] as readonly string[]).includes(state) ||
          !(['provisioning'] as readonly string[]).includes(state)
        )
          throw new WaitFailureError(result);
        return { done: false, result };
      },
      retryPoll,
      30000,
    );
  }

  async [Symbol.asyncDispose](): Promise<void> {}
}
