// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Kiosk extends APIResource {
  /**
   * Disables Android lock-task (kiosk) mode on the device, releasing it from the
   * locked app.
   */
  disable(
    deviceID: string,
    params: KioskDisableParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {};
    return this._client.delete(path`/devices/${deviceID}/kiosk`, {
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
   * Locks the device to the package named in the request body using Android
   * lock-task (kiosk) mode, preventing the user from leaving the app.
   */
  enable(deviceID: string, params: KioskEnableParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.put(path`/devices/${deviceID}/kiosk`, {
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

export interface KioskDisableParams {
  'X-Device-Display-ID'?: number;
}

export interface KioskEnableParams {
  /**
   * Body param: Package to lock the device to (Android lock-task mode).
   */
  packageName: string;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export declare namespace Kiosk {
  export { type KioskDisableParams as KioskDisableParams, type KioskEnableParams as KioskEnableParams };
}
