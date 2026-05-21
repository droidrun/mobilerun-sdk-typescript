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
  get(
    deviceID: string,
    params: TimezoneGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimezoneGetResponse> {
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
  set(deviceID: string, params: TimezoneSetParams, options?: RequestOptions): APIPromise<void> {
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

export interface TimezoneGetResponse {
  timezone: string | null;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface TimezoneGetParams {
  'X-Device-Display-ID'?: number;
}

export interface TimezoneSetParams {
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
    type TimezoneGetResponse as TimezoneGetResponse,
    type TimezoneGetParams as TimezoneGetParams,
    type TimezoneSetParams as TimezoneSetParams,
  };
}
