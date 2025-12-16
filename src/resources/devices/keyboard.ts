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
  clear(deviceID: string, params: KeyboardClearParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-User-ID': xUserID } = params;
    return this._client.delete(path`/devices/${deviceID}/keyboard`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'X-User-ID': xUserID }, options?.headers]),
    });
  }

  /**
   * Input key
   */
  key(deviceID: string, params: KeyboardKeyParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-User-ID': xUserID, ...body } = params;
    return this._client.put(path`/devices/${deviceID}/keyboard`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'X-User-ID': xUserID }, options?.headers]),
    });
  }

  /**
   * Input text
   */
  write(deviceID: string, params: KeyboardWriteParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-User-ID': xUserID, ...body } = params;
    return this._client.post(path`/devices/${deviceID}/keyboard`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'X-User-ID': xUserID }, options?.headers]),
    });
  }
}

export interface KeyboardClearParams {
  'X-User-ID': string;
}

export interface KeyboardKeyParams {
  /**
   * Body param:
   */
  key: number;

  /**
   * Header param:
   */
  'X-User-ID': string;
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
  'X-User-ID': string;
}

export declare namespace Keyboard {
  export {
    type KeyboardClearParams as KeyboardClearParams,
    type KeyboardKeyParams as KeyboardKeyParams,
    type KeyboardWriteParams as KeyboardWriteParams,
  };
}
