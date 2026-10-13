// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ApnAPI from './apn';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Apn extends APIResource {
  /**
   * Returns the access point names (APNs) configured for the device's active eSIM
   * subscriptions.
   */
  list(deviceID: string, params: ApnListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ApnListResponse | null> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {}
    return this._client.get(path`/devices/${deviceID}/esim/apn`, { ...options, headers: buildHeaders([{...(xDeviceDisplayID?.toString() != null ? { 'X-Device-Display-ID': xDeviceDisplayID?.toString() } : undefined)}, options?.headers]) });
  }

  /**
   * Marks an existing APN, identified by apnId, as the preferred APN for the given
   * eSIM subscription in the request body.
   */
  select(deviceID: string, params: ApnSelectParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params
    return this._client.put(path`/devices/${deviceID}/esim/apn`, { body, ...options, headers: buildHeaders([{Accept: '*/*', ...(xDeviceDisplayID?.toString() != null ? { 'X-Device-Display-ID': xDeviceDisplayID?.toString() } : undefined)}, options?.headers]) });
  }

  /**
   * Creates an access point name (APN) from the request body and applies it to the
   * given eSIM subscription. Type, protocol, and roaming protocol default to common
   * values when omitted.
   */
  set(deviceID: string, params: ApnSetParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params
    return this._client.post(path`/devices/${deviceID}/esim/apn`, { body, ...options, headers: buildHeaders([{Accept: '*/*', ...(xDeviceDisplayID?.toString() != null ? { 'X-Device-Display-ID': xDeviceDisplayID?.toString() } : undefined)}, options?.headers]) });
  }
}

export type ApnListResponse = Array<ApnListResponse.ApnListResponseItem>

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

export interface ApnSetParams {
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

export declare namespace Apn {
  export {
    type ApnListResponse as ApnListResponse,
    type ApnListParams as ApnListParams,
    type ApnSelectParams as ApnSelectParams,
    type ApnSetParams as ApnSetParams
  };
}
