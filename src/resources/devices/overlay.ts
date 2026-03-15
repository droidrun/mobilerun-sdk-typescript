// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Overlay extends APIResource {
  /**
   * Check if overlay is visible
   */
  retrieve(
    deviceID: string,
    params: OverlayRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OverlayRetrieveResponse> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {};
    return this._client.get(path`/devices/${deviceID}/overlay`, {
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
   * Set overlay visibility
   */
  update(deviceID: string, params: OverlayUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.post(path`/devices/${deviceID}/overlay`, {
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

export interface OverlayRetrieveResponse {
  visible: boolean;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface OverlayRetrieveParams {
  'X-Device-Display-ID'?: number;
}

export interface OverlayUpdateParams {
  /**
   * Body param
   */
  visible: boolean;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export declare namespace Overlay {
  export {
    type OverlayRetrieveResponse as OverlayRetrieveResponse,
    type OverlayRetrieveParams as OverlayRetrieveParams,
    type OverlayUpdateParams as OverlayUpdateParams,
  };
}
