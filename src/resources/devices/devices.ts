// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import { ActionGlobalParams, ActionSwipeParams, ActionTapParams, Actions } from './actions';
import * as AppsAPI from './apps';
import {
  AppDeleteParams,
  AppInstallParams,
  AppListParams,
  AppListResponse,
  AppStartParams,
  Apps,
} from './apps';
import * as KeyboardAPI from './keyboard';
import { Keyboard, KeyboardClearParams, KeyboardKeyParams, KeyboardWriteParams } from './keyboard';
import * as PackagesAPI from './packages';
import { PackageListParams, PackageListResponse, Packages } from './packages';
import * as StateAPI from './state';
import {
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
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Devices extends APIResource {
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
    const { deviceType, provider, ...body } = params;
    return this._client.post('/devices', { query: { deviceType, provider }, body, ...options });
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
   * Terminate a device
   */
  terminate(deviceID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/devices/${deviceID}`, {
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

  apps: Array<string> | null;

  assignedAt: string | null;

  country: string;

  createdAt: string;

  deviceType: string;

  files: Array<string> | null;

  name: string;

  provider: string;

  state: string;

  stateMessage: string;

  streamToken: string;

  streamUrl: string;

  taskCount: number;

  updatedAt: string;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface DeviceListResponse {
  items: Array<Device> | null;

  pagination: DeviceListResponse.Pagination;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export namespace DeviceListResponse {
  export interface Pagination {
    hasNext: boolean;

    hasPrev: boolean;

    page: number;

    pages: number;

    pageSize: number;

    total: number;
  }
}

export interface DeviceCreateParams {
  /**
   * Body param:
   */
  apps: Array<string> | null;

  /**
   * Body param:
   */
  files: Array<string> | null;

  /**
   * Query param:
   */
  deviceType?: 'device_slot' | 'dedicated_emulated_device' | 'dedicated_physical_device';

  /**
   * Query param:
   */
  provider?: 'limrun' | 'remote' | 'roidrun';

  /**
   * Body param:
   */
  country?: string;

  /**
   * Body param:
   */
  name?: string;
}

export interface DeviceListParams {
  country?: string;

  orderBy?: 'id' | 'createdAt' | 'updatedAt' | 'assignedAt';

  orderByDirection?: 'asc' | 'desc';

  page?: number;

  pageSize?: number;

  state?: 'creating' | 'assigned' | 'ready' | 'terminated' | 'unknown';
}

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
    type DeviceCreateParams as DeviceCreateParams,
    type DeviceListParams as DeviceListParams,
  };

  export {
    Actions as Actions,
    type ActionGlobalParams as ActionGlobalParams,
    type ActionSwipeParams as ActionSwipeParams,
    type ActionTapParams as ActionTapParams,
  };

  export {
    State as State,
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
