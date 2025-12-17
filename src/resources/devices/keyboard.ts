// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Keyboard extends APIResource {
  /**
   * Clear input
   */
  clear(
    deviceID: string,
    params: KeyboardClearParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {};
    return this._client.delete(path`/devices/${deviceID}/keyboard`, {
      ...options,
      headers: buildHeaders([
        {
          Accept: '*/*',
          ...(xDeviceDisplayID != null ? { 'X-Device-Display-ID': xDeviceDisplayID } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Input key
   */
  key(deviceID: string, params: KeyboardKeyParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.put(path`/devices/${deviceID}/keyboard`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          Accept: '*/*',
          ...(xDeviceDisplayID != null ? { 'X-Device-Display-ID': xDeviceDisplayID } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Input text
   */
  write(deviceID: string, params: KeyboardWriteParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.post(path`/devices/${deviceID}/keyboard`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          Accept: '*/*',
          ...(xDeviceDisplayID != null ? { 'X-Device-Display-ID': xDeviceDisplayID } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export interface KeyboardClearParams {
  'X-Device-Display-ID'?: string;
}

export interface KeyboardKeyParams {
  /**
   * Body param:
   */
  key: number;

  /**
   * Header param:
   */
  'X-Device-Display-ID'?: string;
}

export interface KeyboardWriteParams {
  /**
   * Body param:
   */
  clear: boolean;

  /**
   * Body param:
   */
  text: string;

  /**
   * Header param:
   */
  'X-Device-Display-ID'?: string;
}

export declare namespace Keyboard {
  export {
    type KeyboardClearParams as KeyboardClearParams,
    type KeyboardKeyParams as KeyboardKeyParams,
    type KeyboardWriteParams as KeyboardWriteParams,
  };
}
