// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ActionsAPI from './actions';
import {
  ActionGlobalParams,
  ActionOverlayVisibleParams,
  ActionOverlayVisibleResponse,
  ActionSetOverlayVisibleParams,
  ActionSwipeParams,
  ActionTapParams,
  Actions,
} from './actions';
import * as AppsAPI from './apps';
import {
  AppDeleteParams,
  AppInstallParams,
  AppListParams,
  AppListResponse,
  AppStartParams,
  AppStopParams,
  Apps,
} from './apps';
import * as EsimAPI from './esim';
import {
  Esim,
  EsimActivateParams,
  EsimActivateResponse,
  EsimEnableParams,
  EsimListParams,
  EsimListResponse,
  EsimRemoveParams,
} from './esim';
import * as FilesAPI from './files';
import {
  FileDeleteParams,
  FileDownloadParams,
  FileDownloadResponse,
  FileInfo,
  FileListParams,
  FileListResponse,
  FileUploadParams,
  Files,
} from './files';
import * as KeyboardAPI from './keyboard';
import { Keyboard, KeyboardClearParams, KeyboardKeyParams, KeyboardWriteParams } from './keyboard';
import * as LanguageAPI from './language';
import { Language, LanguageGetParams, LanguageGetResponse, LanguageSetParams } from './language';
import * as LocationAPI from './location';
import { Location, LocationGetParams, LocationSetParams } from './location';
import * as PackagesAPI from './packages';
import { PackageListParams, PackageListResponse, Packages } from './packages';
import * as ProfileAPI from './profile';
import { Profile, ProfileUpdateParams } from './profile';
import * as ProxyAPI from './proxy';
import {
  Proxy as ProxyAPIProxy,
  ProxyConnectParams,
  ProxyDisconnectParams,
  ProxyStatusParams,
  ProxyStatusResponse,
} from './proxy';
import * as StateAPI from './state';
import {
  A11YNode,
  Rect,
  State,
  StateScreenshotParams,
  StateScreenshotResponse,
  StateTimeParams,
  StateTimeResponse,
  StateUiParams,
  StateUiResponse,
} from './state';
import * as TasksAPI from './tasks';
import { TaskListParams, TaskListResponse, Tasks } from './tasks';
import * as TimezoneAPI from './timezone';
import { Timezone, TimezoneGetParams, TimezoneGetResponse, TimezoneSetParams } from './timezone';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Devices extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
  esim: EsimAPI.Esim = new EsimAPI.Esim(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  keyboard: KeyboardAPI.Keyboard = new KeyboardAPI.Keyboard(this._client);
  location: LocationAPI.Location = new LocationAPI.Location(this._client);
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
  proxy: ProxyAPI.Proxy = new ProxyAPI.Proxy(this._client);
  state: StateAPI.State = new StateAPI.State(this._client);
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);
  timezone: TimezoneAPI.Timezone = new TimezoneAPI.Timezone(this._client);
  language: LanguageAPI.Language = new LanguageAPI.Language(this._client);

  /**
   * Requests a new device for the authenticated user from the device spec in the
   * request body. Optional query parameters select the device type, target country,
   * billing mode, and a profile to use as the base spec; the response returns the
   * device and its stream token.
   */
  create(params: DeviceCreateParams, options?: RequestOptions): APIPromise<Device> {
    const { billing, query_country, deviceType, profileId, ...body } = params;
    return this._client.post('/devices', {
      query: { billing, country: query_country, deviceType, profileId },
      body,
      ...options,
    });
  }

  /**
   * Returns the current state and metadata for a single device, including its
   * lifecycle state, type, stream URL, billing strategy, and timestamps. A stream
   * token is included while the device is active.
   */
  retrieve(deviceID: string, options?: RequestOptions): APIPromise<Device> {
    return this._client.get(path`/devices/${deviceID}`, options);
  }

  /**
   * Returns a paginated list of the user's devices along with pagination metadata.
   */
  list(
    query: DeviceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeviceListResponse> {
    return this._client.get('/devices', { query, ...options });
  }

  /**
   * Returns the number of claimed devices for the user, broken down by device type.
   */
  count(options?: RequestOptions): APIPromise<DeviceCountResponse> {
    return this._client.get('/devices/count', options);
  }

  /**
   * Returns a live snapshot of the device's spoofed identity, including model,
   * display, identifiers, and carrier. Devices without fingerprint support return an
   * unsupported-feature error.
   */
  fingerprint(
    deviceID: string,
    params: DeviceFingerprintParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeviceFingerprintResponse> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {};
    return this._client.get(path`/devices/${deviceID}/fingerprint`, {
      ...options,
      headers: buildHeaders([
        {
          ...(xDeviceDisplayID?.toString() != null ?
            { 'X-Device-Display-ID': xDeviceDisplayID?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Triggers a reboot of the device. The device transitions through its reboot
   * lifecycle and becomes ready again once the restart completes.
   */
  reboot(deviceID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/devices/${deviceID}/reboot`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Resets the device back to a clean state, clearing installed apps and user data
   * accumulated during the session. The device transitions through its reset
   * lifecycle before becoming ready again.
   */
  reset(deviceID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/devices/${deviceID}/reset`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Sets the display name for a device from the name in the request body and returns
   * the updated device.
   */
  setName(deviceID: string, body: DeviceSetNameParams, options?: RequestOptions): APIPromise<Device> {
    return this._client.put(path`/devices/${deviceID}/name`, { body, ...options });
  }

  /**
   * Terminates the device and releases its resources. Termination can be scheduled
   * for a future time or chained from a previous device via the request body, in
   * which case a service key is required.
   */
  terminate(deviceID: string, body: DeviceTerminateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/devices/${deviceID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Blocks until the device reaches the ready state, then returns the same payload
   * as Get device info. The call returns early with an error if the wait is
   * cancelled or times out.
   */
  waitReady(deviceID: string, options?: RequestOptions): APIPromise<Device> {
    return this._client.get(path`/devices/${deviceID}/wait`, options);
  }
}

export interface Device {
  id: string;

  activeTaskId: string;

  assignedAt: string | null;

  createdAt: string;

  name: string;

  state: string;

  stateMessage: string;

  streamUrl: string;

  taskCount: number;

  terminatesAt: string | null;

  type: string;

  updatedAt: string;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;

  billingStrategy?: string;

  providerId?: string;

  streamToken?: string;

  userId?: string;
}

export interface DeviceListResponse {
  items: Array<Device> | null;

  pagination: Shared.Meta;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export type DeviceCountResponse = { [key: string]: number };

export interface DeviceFingerprintResponse {
  carrier: Shared.DeviceCarrier;

  display: DeviceFingerprintResponse.Display;

  identifiers: Shared.DeviceIdentifiers;

  model: DeviceFingerprintResponse.Model;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export namespace DeviceFingerprintResponse {
  export interface Display {
    densityDpi?: number;

    height?: number;

    width?: number;
  }

  export interface Model {
    aospVersion?: string;

    brand?: string;

    device?: string;

    hardware?: string;

    imageRepository?: string;

    manufacturer?: string;

    model?: string;
  }
}

export interface DeviceCreateParams {
  /**
   * Query param: Billing mode. 'auto' uses a subscription slot when available and
   * otherwise bills per minute; 'subscription' requires an available subscription
   * slot; 'minute' bills per minute. Only cloud phone and cloud emulator devices
   * support per-minute billing.
   */
  billing?: 'auto' | 'subscription' | 'minute';

  /**
   * Query param: ISO 3166-1 alpha-2 country code. If omitted the system picks the
   * country with the most availability.
   */
  query_country?: string;

  /**
   * Query param
   */
  deviceType?:
    | 'dedicated_physical_device'
    | 'dedicated_premium_device'
    | 'dedicated_ios_device'
    | 'dedicated_emulated_device';

  /**
   * Query param: Profile ID to use as device spec
   */
  profileId?: string;

  /**
   * Body param
   */
  androidVersion?: number;

  /**
   * Body param
   */
  apps?: Array<string> | null;

  /**
   * Body param
   */
  carrier?: Shared.DeviceCarrier;

  /**
   * Body param
   */
  body_country?: string;

  /**
   * Body param
   */
  files?: Array<string> | null;

  /**
   * Body param
   */
  identifiers?: Shared.DeviceIdentifiers;

  /**
   * Body param
   */
  locale?: string;

  /**
   * Body param
   */
  location?: Shared.Location;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  proxy?: DeviceCreateParams.Proxy;

  /**
   * Body param
   */
  timezone?: string;
}

export namespace DeviceCreateParams {
  export interface Proxy {
    name?: string;

    smartIp?: boolean;

    socks5?: Shared.Socks5;
  }
}

export interface DeviceListParams {
  country?: string;

  name?: string;

  orderBy?: 'id' | 'createdAt' | 'updatedAt' | 'assignedAt';

  orderByDirection?: 'asc' | 'desc';

  page?: number;

  pageSize?: number;

  providerId?: string;

  state?: Array<
    | 'creating'
    | 'assigned'
    | 'ready'
    | 'rebooting'
    | 'migrating'
    | 'resetting'
    | 'terminated'
    | 'maintenance'
    | 'unknown'
  > | null;

  type?: 'dedicated_physical_device' | 'dedicated_premium_device' | 'dedicated_ios_device';
}

export interface DeviceFingerprintParams {
  'X-Device-Display-ID'?: number;
}

export interface DeviceSetNameParams {
  name: string;
}

export interface DeviceTerminateParams {
  previousDeviceId?: string;

  terminateAt?: string;
}

Devices.Actions = Actions;
Devices.Apps = Apps;
Devices.Esim = Esim;
Devices.Files = Files;
Devices.Keyboard = Keyboard;
Devices.Location = Location;
Devices.Packages = Packages;
Devices.Profile = Profile;
Devices.Proxy = ProxyAPIProxy;
Devices.State = State;
Devices.Tasks = Tasks;
Devices.Timezone = Timezone;
Devices.Language = Language;

export declare namespace Devices {
  export {
    type Device as Device,
    type DeviceListResponse as DeviceListResponse,
    type DeviceCountResponse as DeviceCountResponse,
    type DeviceFingerprintResponse as DeviceFingerprintResponse,
    type DeviceCreateParams as DeviceCreateParams,
    type DeviceListParams as DeviceListParams,
    type DeviceFingerprintParams as DeviceFingerprintParams,
    type DeviceSetNameParams as DeviceSetNameParams,
    type DeviceTerminateParams as DeviceTerminateParams,
  };

  export {
    Actions as Actions,
    type ActionOverlayVisibleResponse as ActionOverlayVisibleResponse,
    type ActionGlobalParams as ActionGlobalParams,
    type ActionOverlayVisibleParams as ActionOverlayVisibleParams,
    type ActionSetOverlayVisibleParams as ActionSetOverlayVisibleParams,
    type ActionSwipeParams as ActionSwipeParams,
    type ActionTapParams as ActionTapParams,
  };

  export {
    Apps as Apps,
    type AppListResponse as AppListResponse,
    type AppListParams as AppListParams,
    type AppDeleteParams as AppDeleteParams,
    type AppInstallParams as AppInstallParams,
    type AppStartParams as AppStartParams,
    type AppStopParams as AppStopParams,
  };

  export {
    Esim as Esim,
    type EsimListResponse as EsimListResponse,
    type EsimActivateResponse as EsimActivateResponse,
    type EsimListParams as EsimListParams,
    type EsimActivateParams as EsimActivateParams,
    type EsimEnableParams as EsimEnableParams,
    type EsimRemoveParams as EsimRemoveParams,
  };

  export {
    Files as Files,
    type FileInfo as FileInfo,
    type FileListResponse as FileListResponse,
    type FileDownloadResponse as FileDownloadResponse,
    type FileListParams as FileListParams,
    type FileDeleteParams as FileDeleteParams,
    type FileDownloadParams as FileDownloadParams,
    type FileUploadParams as FileUploadParams,
  };

  export {
    Keyboard as Keyboard,
    type KeyboardClearParams as KeyboardClearParams,
    type KeyboardKeyParams as KeyboardKeyParams,
    type KeyboardWriteParams as KeyboardWriteParams,
  };

  export {
    Location as Location,
    type LocationGetParams as LocationGetParams,
    type LocationSetParams as LocationSetParams,
  };

  export {
    Packages as Packages,
    type PackageListResponse as PackageListResponse,
    type PackageListParams as PackageListParams,
  };

  export { Profile as Profile, type ProfileUpdateParams as ProfileUpdateParams };

  export {
    ProxyAPIProxy as Proxy,
    type ProxyStatusResponse as ProxyStatusResponse,
    type ProxyConnectParams as ProxyConnectParams,
    type ProxyDisconnectParams as ProxyDisconnectParams,
    type ProxyStatusParams as ProxyStatusParams,
  };

  export {
    State as State,
    type A11YNode as A11YNode,
    type Rect as Rect,
    type StateScreenshotResponse as StateScreenshotResponse,
    type StateTimeResponse as StateTimeResponse,
    type StateUiResponse as StateUiResponse,
    type StateScreenshotParams as StateScreenshotParams,
    type StateTimeParams as StateTimeParams,
    type StateUiParams as StateUiParams,
  };

  export { Tasks as Tasks, type TaskListResponse as TaskListResponse, type TaskListParams as TaskListParams };

  export {
    Timezone as Timezone,
    type TimezoneGetResponse as TimezoneGetResponse,
    type TimezoneGetParams as TimezoneGetParams,
    type TimezoneSetParams as TimezoneSetParams,
  };

  export {
    Language as Language,
    type LanguageGetResponse as LanguageGetResponse,
    type LanguageGetParams as LanguageGetParams,
    type LanguageSetParams as LanguageSetParams,
  };
}
