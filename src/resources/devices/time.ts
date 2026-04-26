// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Time extends APIResource {
  /**
   * Set device timezone
   */
  setTimezone(deviceID: string, params: TimeSetTimezoneParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params
    return this._client.post(path`/devices/${deviceID}/timezone`, { body, ...options, headers: buildHeaders([{Accept: '*/*', ...(xDeviceDisplayID?.toString() != null ? { 'X-Device-Display-ID': xDeviceDisplayID?.toString() } : undefined)}, options?.headers]) });
  }

  /**
   * Device time
   */
  time(deviceID: string, params: TimeTimeParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {}
    return this._client.get(path`/devices/${deviceID}/time`, { ...options, headers: buildHeaders([{...(xDeviceDisplayID?.toString() != null ? { 'X-Device-Display-ID': xDeviceDisplayID?.toString() } : undefined)}, options?.headers]) });
  }

  /**
   * Get device timezone
   */
  timezone(deviceID: string, params: TimeTimezoneParams | null | undefined = {}, options?: RequestOptions): APIPromise<TimeTimezoneResponse> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {}
    return this._client.get(path`/devices/${deviceID}/timezone`, { ...options, headers: buildHeaders([{...(xDeviceDisplayID?.toString() != null ? { 'X-Device-Display-ID': xDeviceDisplayID?.toString() } : undefined)}, options?.headers]) });
  }
}

export type TimeTimeResponse = string

export interface TimeTimezoneResponse {
  timezone: string | null;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface TimeSetTimezoneParams {
  /**
   * Body param
   */
  timezone: string;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export interface TimeTimeParams {
  'X-Device-Display-ID'?: number;
}

export interface TimeTimezoneParams {
  'X-Device-Display-ID'?: number;
}

export declare namespace Time {
  export {
    type TimeTimeResponse as TimeTimeResponse,
    type TimeTimezoneResponse as TimeTimezoneResponse,
    type TimeSetTimezoneParams as TimeSetTimezoneParams,
    type TimeTimeParams as TimeTimeParams,
    type TimeTimezoneParams as TimeTimezoneParams
  };
}
