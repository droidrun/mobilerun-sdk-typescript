// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Apps extends APIResource {
  /**
   * List apps
   */
  list(
    deviceID: string,
    params: AppListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppListResponse | null> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...query } = params ?? {};
    return this._client.get(path`/devices/${deviceID}/apps`, {
      query,
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
   * Delete app
   */
  delete(packageName: string, params: AppDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { deviceId, 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.delete(path`/devices/${deviceId}/apps/${packageName}`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          Accept: '*/*',
          ...(xDeviceDisplayID?.toString() != null ?
            { 'X-Device-Display-ID': xDeviceDisplayID?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Install app
   */
  install(deviceID: string, params: AppInstallParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.post(path`/devices/${deviceID}/apps`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          Accept: '*/*',
          ...(xDeviceDisplayID?.toString() != null ?
            { 'X-Device-Display-ID': xDeviceDisplayID?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Start app
   */
  start(packageName: string, params: AppStartParams, options?: RequestOptions): APIPromise<void> {
    const { deviceId, 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.put(path`/devices/${deviceId}/apps/${packageName}`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          Accept: '*/*',
          ...(xDeviceDisplayID?.toString() != null ?
            { 'X-Device-Display-ID': xDeviceDisplayID?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export type AppListResponse = Array<AppListResponse.AppListResponseItem>;

export namespace AppListResponse {
  export interface AppListResponseItem {
    isSystemApp: boolean;

    label: string;

    packageName: string;

    versionCode: number;

    versionName: string;
  }
}

export interface AppListParams {
  /**
   * Query param:
   */
  includeSystemApps?: boolean;

  /**
   * Header param:
   */
  'X-Device-Display-ID'?: number | null;
}

export interface AppDeleteParams {
  /**
   * Path param:
   */
  deviceId: string;

  /**
   * Header param:
   */
  'X-Device-Display-ID'?: number | null;
}

export interface AppInstallParams {
  /**
   * Body param:
   */
  packageName: string;

  /**
   * Header param:
   */
  'X-Device-Display-ID'?: number | null;
}

export interface AppStartParams {
  /**
   * Path param:
   */
  deviceId: string;

  /**
   * Body param:
   */
  activity?: string;

  /**
   * Header param:
   */
  'X-Device-Display-ID'?: number | null;
}

export declare namespace Apps {
  export {
    type AppListResponse as AppListResponse,
    type AppListParams as AppListParams,
    type AppDeleteParams as AppDeleteParams,
    type AppInstallParams as AppInstallParams,
    type AppStartParams as AppStartParams,
  };
}
