// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ActionsAPI from './actions';
import { ActionGlobalParams, ActionSwipeParams, ActionTapParams, Actions } from './actions';
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
import * as FilesAPI from './files';
import {
  FileDeleteParams,
  FileDownloadParams,
  FileDownloadResponse,
  FileListParams,
  FileListResponse,
  FileUploadParams,
  Files,
} from './files';
import * as KeyboardAPI from './keyboard';
import { Keyboard, KeyboardClearParams, KeyboardKeyParams, KeyboardWriteParams } from './keyboard';
import * as LocationAPI from './location';
import { Location, LocationRetrieveParams, LocationRetrieveResponse, LocationUpdateParams } from './location';
import * as OverlayAPI from './overlay';
import { Overlay, OverlayRetrieveParams, OverlayRetrieveResponse, OverlayUpdateParams } from './overlay';
import * as PackagesAPI from './packages';
import { PackageListParams, PackageListResponse, Packages } from './packages';
import * as ProfileAPI from './profile';
import { Profile, ProfileApplyParams } from './profile';
import * as ProxyAPI from './proxy';
import { Proxy, ProxyConnectParams, ProxyDisconnectParams } from './proxy';
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
import * as TimeAPI from './time';
import { Time, TimeUpdateParams } from './time';
import * as TimezoneAPI from './timezone';
import { Timezone, TimezoneRetrieveParams, TimezoneRetrieveResponse, TimezoneUpdateParams } from './timezone';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Devices extends APIResource {
  timezone: TimezoneAPI.Timezone = new TimezoneAPI.Timezone(this._client);
  time: TimeAPI.Time = new TimeAPI.Time(this._client);
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  proxy: ProxyAPI.Proxy = new ProxyAPI.Proxy(this._client);
  location: LocationAPI.Location = new LocationAPI.Location(this._client);
  overlay: OverlayAPI.Overlay = new OverlayAPI.Overlay(this._client);
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  state: StateAPI.State = new StateAPI.State(this._client);
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);
  keyboard: KeyboardAPI.Keyboard = new KeyboardAPI.Keyboard(this._client);
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);

  /**
   * Provision a new device
   */
  create(params: DeviceCreateParams, options?: RequestOptions): APIPromise<Device> {
    const { deviceType, ...body } = params;
    return this._client.post('/devices', { query: { deviceType }, body, ...options });
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
   * Query param
   */
  deviceType?: 'dedicated_physical_device' | 'dedicated_premium_device' | 'dedicated_emulated_device';

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
  files?: Array<string> | null;

  /**
   * Body param
   */
  identifiers?: Shared.DeviceIdentifiers;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  proxy?: Shared.Config;

  /**
   * Body param
   */
  smartIp?: boolean;
}

export interface DeviceListParams {
  country?: string;

  name?: string;

  orderBy?: 'id' | 'createdAt' | 'updatedAt' | 'assignedAt';

  orderByDirection?: 'asc' | 'desc';

  page?: number;

  pageSize?: number;

  state?: Array<'creating' | 'assigned' | 'ready' | 'disconnected' | 'terminated' | 'unknown'> | null;

  type?: 'dedicated_physical_device' | 'dedicated_premium_device' | 'dedicated_emulated_device';
}

export interface DeviceTerminateParams {
  previousDeviceId?: string;

  terminateAt?: string;
}

Devices.Timezone = Timezone;
Devices.Time = Time;
Devices.Profile = Profile;
Devices.Files = Files;
Devices.Proxy = Proxy;
Devices.Location = Location;
Devices.Overlay = Overlay;
Devices.Actions = Actions;
Devices.State = State;
Devices.Apps = Apps;
Devices.Packages = Packages;
Devices.Keyboard = Keyboard;
Devices.Tasks = Tasks;

export declare namespace Devices {
  export {
    type Device as Device,
    type DeviceListResponse as DeviceListResponse,
    type DeviceCountResponse as DeviceCountResponse,
    type DeviceCreateParams as DeviceCreateParams,
    type DeviceListParams as DeviceListParams,
    type DeviceTerminateParams as DeviceTerminateParams,
  };

  export {
    Timezone as Timezone,
    type TimezoneRetrieveResponse as TimezoneRetrieveResponse,
    type TimezoneRetrieveParams as TimezoneRetrieveParams,
    type TimezoneUpdateParams as TimezoneUpdateParams,
  };

  export { Time as Time, type TimeUpdateParams as TimeUpdateParams };

  export { Profile as Profile, type ProfileApplyParams as ProfileApplyParams };

  export {
    Files as Files,
    type FileListResponse as FileListResponse,
    type FileDownloadResponse as FileDownloadResponse,
    type FileListParams as FileListParams,
    type FileDeleteParams as FileDeleteParams,
    type FileDownloadParams as FileDownloadParams,
    type FileUploadParams as FileUploadParams,
  };

  export {
    Proxy as Proxy,
    type ProxyConnectParams as ProxyConnectParams,
    type ProxyDisconnectParams as ProxyDisconnectParams,
  };

  export {
    Location as Location,
    type LocationRetrieveResponse as LocationRetrieveResponse,
    type LocationRetrieveParams as LocationRetrieveParams,
    type LocationUpdateParams as LocationUpdateParams,
  };

  export {
    Overlay as Overlay,
    type OverlayRetrieveResponse as OverlayRetrieveResponse,
    type OverlayRetrieveParams as OverlayRetrieveParams,
    type OverlayUpdateParams as OverlayUpdateParams,
  };

  export {
    Actions as Actions,
    type ActionGlobalParams as ActionGlobalParams,
    type ActionSwipeParams as ActionSwipeParams,
    type ActionTapParams as ActionTapParams,
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
    Packages as Packages,
    type PackageListResponse as PackageListResponse,
    type PackageListParams as PackageListParams,
  };

  export {
    Keyboard as Keyboard,
    type KeyboardClearParams as KeyboardClearParams,
    type KeyboardKeyParams as KeyboardKeyParams,
    type KeyboardWriteParams as KeyboardWriteParams,
  };

  export { Tasks as Tasks, type TaskListResponse as TaskListResponse, type TaskListParams as TaskListParams };
}
