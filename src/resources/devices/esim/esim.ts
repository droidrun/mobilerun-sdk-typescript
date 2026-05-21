// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ApnAPI from './apn';
import { Apn, ApnCreateParams, ApnListParams, ApnListResponse, ApnSelectParams } from './apn';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Esim extends APIResource {
  apn: ApnAPI.Apn = new ApnAPI.Apn(this._client);

  /**
   * List eSIM subscriptions
   */
  list(
    deviceID: string,
    params: EsimListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EsimListResponse | null> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {};
    return this._client.get(path`/devices/${deviceID}/esim`, {
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
   * Configure eSIM (download profile and/or enable subscription)
   */
  activate(
    deviceID: string,
    params: EsimActivateParams,
    options?: RequestOptions,
  ): APIPromise<EsimActivateResponse> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.post(path`/devices/${deviceID}/esim`, {
      body,
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
   * Enable an eSIM subscription
   */
  enable(deviceID: string, params: EsimEnableParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.put(path`/devices/${deviceID}/esim`, {
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
   * Delete eSIM subscription
   */
  remove(deviceID: string, params: EsimRemoveParams, options?: RequestOptions): APIPromise<void> {
    const { subId, 'X-Device-Display-ID': xDeviceDisplayID } = params;
    return this._client.delete(path`/devices/${deviceID}/esim`, {
      query: { subId },
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
   * Toggle eSIM data roaming
   */
  setRoaming(deviceID: string, params: EsimSetRoamingParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.put(path`/devices/${deviceID}/esim/roaming`, {
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
   * Get eSIM connectivity status
   */
  status(
    deviceID: string,
    params: EsimStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EsimStatusResponse | null> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {};
    return this._client.get(path`/devices/${deviceID}/esim/status`, {
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
}

export type EsimListResponse = Array<EsimListResponse.EsimListResponseItem>;

export namespace EsimListResponse {
  export interface EsimListResponseItem {
    carrier: string;

    displayName: string;

    iccid: string;

    isEmbedded: boolean;

    slot: number;

    subId: number;

    type: string;

    /**
     * A URL to the JSON Schema for this object.
     */
    $schema?: string;
  }
}

export interface EsimActivateResponse {
  carrier: string;

  displayName: string;

  iccid: string;

  isEmbedded: boolean;

  slot: number;

  subId: number;

  type: string;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export type EsimStatusResponse = Array<EsimStatusResponse.EsimStatusResponseItem>;

export namespace EsimStatusResponse {
  export interface EsimStatusResponseItem {
    carrier: string;

    dataRoamingEnabled: boolean;

    dataState: string;

    isRoaming: boolean;

    mobileDataEnabled: boolean;

    networkType: string;

    operator: string;

    phoneType: string;

    simState: string;

    subId: number;
  }
}

export interface EsimListParams {
  'X-Device-Display-ID'?: number;
}

export interface EsimActivateParams {
  /**
   * Body param
   */
  enable: boolean;

  /**
   * Body param
   */
  smDpAddr: string;

  /**
   * Body param: Optional carrier-issued confirmation code (the 4th LPA segment).
   * Required only for plans whose SM-DP+ challenges the device for one. Requires
   * matchingId — the LPA spec only interprets segment 4 when segment 3 is present.
   */
  confirmationCode?: string;

  /**
   * Body param
   */
  matchingId?: string;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export interface EsimEnableParams {
  /**
   * Body param
   */
  subId: number;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export interface EsimRemoveParams {
  /**
   * Query param
   */
  subId: number;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export interface EsimSetRoamingParams {
  /**
   * Body param
   */
  enabled: boolean;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export interface EsimStatusParams {
  'X-Device-Display-ID'?: number;
}

Esim.Apn = Apn;

export declare namespace Esim {
  export {
    type EsimListResponse as EsimListResponse,
    type EsimActivateResponse as EsimActivateResponse,
    type EsimStatusResponse as EsimStatusResponse,
    type EsimListParams as EsimListParams,
    type EsimActivateParams as EsimActivateParams,
    type EsimEnableParams as EsimEnableParams,
    type EsimRemoveParams as EsimRemoveParams,
    type EsimSetRoamingParams as EsimSetRoamingParams,
    type EsimStatusParams as EsimStatusParams,
  };

  export {
    Apn as Apn,
    type ApnListResponse as ApnListResponse,
    type ApnCreateParams as ApnCreateParams,
    type ApnListParams as ApnListParams,
    type ApnSelectParams as ApnSelectParams,
  };
}
