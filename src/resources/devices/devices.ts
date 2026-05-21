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
  AppUpdateParams,
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

/**
 * Device Management
 */
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

  /**
   * Provision a new device
   */
  create(params: DeviceCreateParams, options?: RequestOptions): APIPromise<Device> {
    const { query_country, deviceType, profileId, ...body } = params;
    return this._client.post('/devices', {
      query: { country: query_country, deviceType, profileId },
      body,
      ...options,
    });
  }

  /**
   * Get device info
   */
  retrieve(deviceID: string, options?: RequestOptions): APIPromise<Device> {
    return this._client.get(path`/devices/${deviceID}`, options);
  }

  /**
   * List devices
   */
  list(
    query: DeviceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeviceListResponse> {
    return this._client.get('/devices', { query, ...options });
  }

  /**
   * Count claimed devices
   */
  count(options?: RequestOptions): APIPromise<DeviceCountResponse> {
    return this._client.get('/devices/count', options);
  }

  /**
   * Update device name
   */
  setName(deviceID: string, body: DeviceSetNameParams, options?: RequestOptions): APIPromise<Device> {
    return this._client.put(path`/devices/${deviceID}/name`, { body, ...options });
  }

  /**
   * Terminate a device
   */
  terminate(deviceID: string, body: DeviceTerminateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/devices/${deviceID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Wait for device to be ready
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

export interface DeviceCreateParams {
  /**
   * Query param: ISO 3166-1 alpha-2 country code. If omitted the system picks the
   * country with the most availability.
   */
  query_country?: string;

  /**
   * Query param
   */
  deviceType?: 'dedicated_physical_device' | 'dedicated_premium_device' | 'dedicated_ios_device';

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

export declare namespace Devices {
  export {
    type Device as Device,
    type DeviceListResponse as DeviceListResponse,
    type DeviceCountResponse as DeviceCountResponse,
    type DeviceCreateParams as DeviceCreateParams,
    type DeviceListParams as DeviceListParams,
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
    type AppUpdateParams as AppUpdateParams,
    type AppListParams as AppListParams,
    type AppDeleteParams as AppDeleteParams,
    type AppInstallParams as AppInstallParams,
    type AppStartParams as AppStartParams,
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
}
