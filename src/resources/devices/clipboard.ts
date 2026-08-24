// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Clipboard extends APIResource {
  /**
   * Returns the current text content of the device's clipboard. Devices without
   * clipboard support return an unsupported-feature error.
   */
  get(
    deviceID: string,
    params: ClipboardGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ClipboardGetResponse> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {};
    return this._client.get(path`/devices/${deviceID}/clipboard`, {
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
   * Replaces the device's clipboard content with the text in the request body; an
   * empty text clears the clipboard. Devices without clipboard support return an
   * unsupported-feature error.
   */
  set(deviceID: string, params: ClipboardSetParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.post(path`/devices/${deviceID}/clipboard`, {
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

export interface ClipboardGetResponse {
  text: string;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface ClipboardGetParams {
  'X-Device-Display-ID'?: number;
}

export interface ClipboardSetParams {
  /**
   * Body param
   */
  text: string;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export declare namespace Clipboard {
  export {
    type ClipboardGetResponse as ClipboardGetResponse,
    type ClipboardGetParams as ClipboardGetParams,
    type ClipboardSetParams as ClipboardSetParams,
  };
}
