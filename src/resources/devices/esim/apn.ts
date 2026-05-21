// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Apn extends APIResource {
  /**
   * Create and set an APN for an eSIM subscription
   */
  create(deviceID: string, params: ApnCreateParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.post(path`/devices/${deviceID}/esim/apn`, {
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
   * List APNs for active subscriptions
   */
  list(
    deviceID: string,
    params: ApnListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ApnListResponse | null> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {};
    return this._client.get(path`/devices/${deviceID}/esim/apn`, {
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
   * Select an existing APN as preferred
   */
  select(deviceID: string, params: ApnSelectParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.put(path`/devices/${deviceID}/esim/apn`, {
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

export type ApnListResponse = Array<ApnListResponse.ApnListResponseItem>;

export namespace ApnListResponse {
  export interface ApnListResponseItem {
    id: number;

    apn: string;

    isPreferred: boolean;

    mcc: string;

    mnc: string;

    name: string;

    protocol: string;

    roamingProtocol: string;

    subId: number;

    type: string;
  }
}

export interface ApnCreateParams {
  /**
   * Body param
   */
  apn: string;

  /**
   * Body param
   */
  mcc: string;

  /**
   * Body param
   */
  mnc: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  protocol: string;

  /**
   * Body param
   */
  roamingProtocol: string;

  /**
   * Body param
   */
  subId: number;

  /**
   * Body param
   */
  type: string;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export interface ApnListParams {
  'X-Device-Display-ID'?: number;
}

export interface ApnSelectParams {
  /**
   * Body param
   */
  apnId: number;

  /**
   * Body param
   */
  subId: number;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export declare namespace Apn {
  export {
    type ApnListResponse as ApnListResponse,
    type ApnCreateParams as ApnCreateParams,
    type ApnListParams as ApnListParams,
    type ApnSelectParams as ApnSelectParams,
  };
}
