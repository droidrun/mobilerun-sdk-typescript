// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Keyboard extends APIResource {
  /**
   * Clears the contents of the currently focused text input field.
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
          ...(xDeviceDisplayID?.toString() != null ?
            { 'X-Device-Display-ID': xDeviceDisplayID?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Sends a single Android key event to the device, identified by its key code.
   */
  key(deviceID: string, params: KeyboardKeyParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.put(path`/devices/${deviceID}/keyboard`, {
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
   * Types text into the focused input field. The optional completionMode defaults to
   * accepted for backwards-compatible low latency; committed additionally waits for
   * the complete text or a quiescent UI state.
   */
  write(deviceID: string, params: KeyboardWriteParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.post(path`/devices/${deviceID}/keyboard`, {
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

export interface KeyboardClearParams {
  'X-Device-Display-ID'?: number;
}

export interface KeyboardKeyParams {
  /**
   * Body param
   */
  key: number;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export interface KeyboardWriteParams {
  /**
   * Body param
   */
  text: string;

  /**
   * Body param
   */
  clear?: boolean;

  /**
   * Body param: Completion guarantee. accepted returns after the input provider
   * accepts the operation; committed additionally waits for the focused UI state to
   * contain the complete text or become quiescent.
   */
  completionMode?: 'accepted' | 'committed';

  /**
   * Body param: Per-character mistake rate for humantouch typing. -1 uses server
   * default.
   */
  errorRate?: number;

  /**
   * Body param
   */
  stealth?: boolean;

  /**
   * Body param: Words per minute for stealth typing. 0 uses portal default.
   */
  wpm?: number;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export declare namespace Keyboard {
  export {
    type KeyboardClearParams as KeyboardClearParams,
    type KeyboardKeyParams as KeyboardKeyParams,
    type KeyboardWriteParams as KeyboardWriteParams,
  };
}
