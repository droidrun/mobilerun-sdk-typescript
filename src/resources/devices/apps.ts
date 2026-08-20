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
   * Grants an Android runtime permission to the package named in the path. The
   * permission is given by its short name (e.g. POST_NOTIFICATIONS).
   */
  grantPermission(
    permission: 'POST_NOTIFICATIONS',
    params: AppGrantPermissionParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { deviceId, packageName, 'X-Device-Display-ID': xDeviceDisplayID } = params;
    return this._client.put(path`/devices/${deviceId}/apps/${packageName}/permissions/${permission}`, {
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
   * Requests an app install on the device. The request body must supply exactly one
   * of an Android packageName or an iOS bundleId; protected packages are rejected.
   * background (default false) selects the response contract: false installs inline
   * and returns the outcome directly (200 on success, an error status on failure);
   * true accepts the request and runs the download + install in the background,
   * returning 202 immediately — poll list-app-installs for the backend's view of
   * that attempt's status. Refuses with 409 once 2 other installs are already
   * running on the device, in either mode; a repeat request for an app that already
   * has an install running is also refused with 409 rather than superseding it —
   * retry once that attempt reaches a terminal state.
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
   * Reports the backend's view of background app-install attempts on this device —
   * status reflects the install ATTEMPT, not device ground truth; list-apps remains
   * authoritative for what is actually installed. Records are in-memory and lost on
   * service restart; terminal records are kept ~15 minutes. Not gated on device
   * readiness, so it also answers while the device is offline or crashed.
   */
  listInstalls(
    deviceID: string,
    params: AppListInstallsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppListInstallsResponse> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {};
    return this._client.get(path`/devices/${deviceID}/apps/installs`, {
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
   * Revokes an Android runtime permission from the package named in the path. The
   * permission is given by its short name (e.g. POST_NOTIFICATIONS).
   */
  revokePermission(
    permission: 'POST_NOTIFICATIONS',
    params: AppRevokePermissionParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { deviceId, packageName, 'X-Device-Display-ID': xDeviceDisplayID } = params;
    return this._client.delete(path`/devices/${deviceId}/apps/${packageName}/permissions/${permission}`, {
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

export interface AppListInstallsResponse {
  installs: Array<AppListInstallsResponse.Install> | null;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export namespace AppListInstallsResponse {
  export interface Install {
    /**
     * Android package name or iOS bundle id
     */
    appId: string;

    /**
     * android or ios
     */
    platform: string;

    startedAt: string;

    /**
     * On iOS MDM devices, succeeded means the install command was accepted by the
     * device's MDM channel, not that the install finished on-device.
     */
    status: 'running' | 'succeeded' | 'failed';

    updatedAt: string;

    /**
     * Closed set: download_failed, adb_install_failed, panic, timeout, failed. Only
     * present when status is failed.
     */
    errorClass?: string;
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

export interface AppGrantPermissionParams {
  /**
   * Path param
   */
  deviceId: string;

  /**
   * Path param
   */
  packageName: string;

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
     * Body param: true: return 202 immediately and install in the background (poll
     * list-app-installs). false/omitted: install inline and return the outcome
     * directly (200 on success, an error status on failure).
     */
    background?: boolean;

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
     * Body param: true: return 202 immediately and install in the background (poll
     * list-app-installs). false/omitted: install inline and return the outcome
     * directly (200 on success, an error status on failure).
     */
    background?: boolean;

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

export interface AppListInstallsParams {
  'X-Device-Display-ID'?: number;
}

export interface AppRevokePermissionParams {
  /**
   * Path param
   */
  deviceId: string;

  /**
   * Path param
   */
  packageName: string;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
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
    type AppListInstallsResponse as AppListInstallsResponse,
    type AppListParams as AppListParams,
    type AppDeleteParams as AppDeleteParams,
    type AppGrantPermissionParams as AppGrantPermissionParams,
    type AppInstallParams as AppInstallParams,
    type AppListInstallsParams as AppListInstallsParams,
    type AppRevokePermissionParams as AppRevokePermissionParams,
    type AppStartParams as AppStartParams,
    type AppStopParams as AppStopParams,
  };
}
