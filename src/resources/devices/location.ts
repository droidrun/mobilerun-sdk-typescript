// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Location extends APIResource {
  /**
   * Get device location
   */
  retrieve(
    deviceID: string,
    params: LocationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LocationRetrieveResponse> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {};
    return this._client.get(path`/devices/${deviceID}/location`, {
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
   * Set device location
   */
  update(deviceID: string, params: LocationUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.post(path`/devices/${deviceID}/location`, {
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

export interface LocationRetrieveResponse {
  latitude: number;

  longitude: number;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface LocationRetrieveParams {
  'X-Device-Display-ID'?: number;
}

export interface LocationUpdateParams {
  /**
   * Body param
   */
  latitude: number;

  /**
   * Body param
   */
  longitude: number;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export declare namespace Location {
  export {
    type LocationRetrieveResponse as LocationRetrieveResponse,
    type LocationRetrieveParams as LocationRetrieveParams,
    type LocationUpdateParams as LocationUpdateParams,
  };
}
