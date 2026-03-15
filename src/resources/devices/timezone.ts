// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Timezone extends APIResource {
  /**
   * Get device timezone
   */
  retrieve(
    deviceID: string,
    params: TimezoneRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimezoneRetrieveResponse> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {};
    return this._client.get(path`/devices/${deviceID}/timezone`, {
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
   * Set device timezone
   */
  update(deviceID: string, params: TimezoneUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.post(path`/devices/${deviceID}/timezone`, {
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

export interface TimezoneRetrieveResponse {
  timezone: string;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface TimezoneRetrieveParams {
  'X-Device-Display-ID'?: number;
}

export interface TimezoneUpdateParams {
  /**
   * Body param
   */
  timezone: string;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export declare namespace Timezone {
  export {
    type TimezoneRetrieveResponse as TimezoneRetrieveResponse,
    type TimezoneRetrieveParams as TimezoneRetrieveParams,
    type TimezoneUpdateParams as TimezoneUpdateParams,
  };
}
