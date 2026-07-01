// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Apps extends APIResource {
  /**
   * Returns detailed information about apps installed on the device, including
   * package name and label. System and protected apps are excluded unless the
   * corresponding query parameters are set.
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
   * Uninstalls the app identified by the path package name from the device.
   * Protected packages cannot be deleted.
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
   * Installs an app on the device. The request body must supply exactly one of an
   * Android packageName or an iOS bundleId; protected packages are rejected.
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
   * Launches the app identified by the path package name, optionally starting a
   * specific activity given in the request body. Protected packages cannot be
   * started.
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

  /**
   * Force-stops the app identified by the path package name. When clearData is set
   * in the request body, the app's data is also cleared. Protected packages cannot
   * be stopped.
   */
  stop(packageName: string, params: AppStopParams, options?: RequestOptions): APIPromise<void> {
    const { deviceId, 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.patch(path`/devices/${deviceId}/apps/${packageName}`, {
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
   * Query param
   */
  includeProtectedApps?: boolean;

  /**
   * Query param
   */
  includeSystemApps?: boolean;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export interface AppDeleteParams {
  /**
   * Path param
   */
  deviceId: string;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export type AppInstallParams = AppInstallParams.Variant0 | AppInstallParams.Variant1;

export declare namespace AppInstallParams {
  export interface Variant0 {
    /**
     * Body param: iOS bundle identifier (e.g. com.example.app)
     */
    bundleId: string;

    /**
     * Body param: Android package name (e.g. com.example.app)
     */
    packageName?: string;

    /**
     * Header param
     */
    'X-Device-Display-ID'?: number;
  }

  export interface Variant1 {
    /**
     * Body param: Android package name (e.g. com.example.app)
     */
    packageName: string;

    /**
     * Body param: iOS bundle identifier (e.g. com.example.app)
     */
    bundleId?: string;

    /**
     * Header param
     */
    'X-Device-Display-ID'?: number;
  }
}

export interface AppStartParams {
  /**
   * Path param
   */
  deviceId: string;

  /**
   * Body param
   */
  activity?: string;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export interface AppStopParams {
  /**
   * Path param
   */
  deviceId: string;

  /**
   * Body param: If true, clears all app data (pm clear) in addition to stopping the
   * app.
   */
  clearData?: boolean;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export declare namespace Apps {
  export {
    type AppListResponse as AppListResponse,
    type AppListParams as AppListParams,
    type AppDeleteParams as AppDeleteParams,
    type AppInstallParams as AppInstallParams,
    type AppStartParams as AppStartParams,
    type AppStopParams as AppStopParams,
  };
}
