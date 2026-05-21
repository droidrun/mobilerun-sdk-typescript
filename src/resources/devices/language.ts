// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Language extends APIResource {
  /**
   * Get device language/locale
   */
  get(
    deviceID: string,
    params: LanguageGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LanguageGetResponse> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {};
    return this._client.get(path`/devices/${deviceID}/language`, {
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
   * Set device language/locale
   */
  set(deviceID: string, params: LanguageSetParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.post(path`/devices/${deviceID}/language`, {
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

export interface LanguageGetResponse {
  locale: string;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface LanguageGetParams {
  'X-Device-Display-ID'?: number;
}

export interface LanguageSetParams {
  /**
   * Body param: BCP-47 locale: a 2–3 letter language tag, optionally followed by a
   * 4-letter script and/or a 2-letter region (e.g. en-US, de-DE, ja-JP, zh-Hans-CN).
   */
  locale: string;

  /**
   * Body param: Restart zygote so the locale change takes full effect immediately.
   * Without it, the locale is written but won't fully apply until the next reboot.
   */
  restart?: boolean;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export declare namespace Language {
  export {
    type LanguageGetResponse as LanguageGetResponse,
    type LanguageGetParams as LanguageGetParams,
    type LanguageSetParams as LanguageSetParams,
  };
}
