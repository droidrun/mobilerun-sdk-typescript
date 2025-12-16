// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import { ActionSwipeParams, ActionTapParams, Actions } from './actions';
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

  /**
   * Provision a new device
   */
  create(params: DeviceCreateParams, options?: RequestOptions): APIPromise<Device> {
    const { 'X-User-ID': xUserID, ...body } = params;
    return this._client.post('/devices', {
      body,
      ...options,
      headers: buildHeaders([{ 'X-User-ID': xUserID }, options?.headers]),
    });
  }

  /**
   * Get device info
   */
  retrieve(deviceID: string, params: DeviceRetrieveParams, options?: RequestOptions): APIPromise<Device> {
    const { 'X-User-ID': xUserID } = params;
    return this._client.get(path`/devices/${deviceID}`, {
      ...options,
      headers: buildHeaders([{ 'X-User-ID': xUserID }, options?.headers]),
    });
  }

  /**
   * List devices
   */
  list(params: DeviceListParams, options?: RequestOptions): APIPromise<DeviceListResponse> {
    const { 'X-User-ID': xUserID, ...query } = params;
    return this._client.get('/devices', {
      query,
      ...options,
      headers: buildHeaders([{ 'X-User-ID': xUserID }, options?.headers]),
    });
  }

  /**
   * Terminate a device
   */
  terminate(deviceID: string, params: DeviceTerminateParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-User-ID': xUserID } = params;
    return this._client.delete(path`/devices/${deviceID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'X-User-ID': xUserID }, options?.headers]),
    });
  }

  /**
   * Wait for device to be ready
   */
  waitReady(deviceID: string, params: DeviceWaitReadyParams, options?: RequestOptions): APIPromise<Device> {
    const { 'X-User-ID': xUserID } = params;
    return this._client.get(path`/devices/${deviceID}/wait`, {
      ...options,
      headers: buildHeaders([{ 'X-User-ID': xUserID }, options?.headers]),
    });
  }
}

export interface Device {
  id: string;

  apps: Array<string> | null;

  assignedAt: string | null;

  country: string;

  createdAt: string;

  files: Array<string> | null;

  name: string;

  state: string;

  streamToken: string;

  streamUrl: string;

  updatedAt: string;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;

  taskId?: string;
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
   * Header param:
   */
  'X-User-ID': string;

  /**
   * Body param:
   */
  country?: string;

  /**
   * Body param:
   */
  name?: string;
}

export interface DeviceRetrieveParams {
  'X-User-ID': string;
}

export interface DeviceListParams {
  /**
   * Header param:
   */
  'X-User-ID': string;

  /**
   * Query param:
   */
  country?: string;

  /**
   * Query param:
   */
  orderBy?: 'id' | 'createdAt' | 'updatedAt' | 'assignedAt';

  /**
   * Query param:
   */
  orderByDirection?: 'asc' | 'desc';

  /**
   * Query param:
   */
  page?: number;

  /**
   * Query param:
   */
  pageSize?: number;

  /**
   * Query param:
   */
  state?: 'creating' | 'assigned' | 'ready' | 'terminated' | 'unknown';
}

export interface DeviceTerminateParams {
  'X-User-ID': string;
}

export interface DeviceWaitReadyParams {
  'X-User-ID': string;
}

Devices.Actions = Actions;
Devices.State = State;
Devices.Apps = Apps;
Devices.Packages = Packages;
Devices.Keyboard = Keyboard;

export declare namespace Devices {
  export {
    type Device as Device,
    type DeviceListResponse as DeviceListResponse,
    type DeviceCreateParams as DeviceCreateParams,
    type DeviceRetrieveParams as DeviceRetrieveParams,
    type DeviceListParams as DeviceListParams,
    type DeviceTerminateParams as DeviceTerminateParams,
    type DeviceWaitReadyParams as DeviceWaitReadyParams,
  };

  export {
    Actions as Actions,
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
}
