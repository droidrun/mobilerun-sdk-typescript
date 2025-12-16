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
  clear(deviceID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/devices/${deviceID}/keyboard`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Input key
   */
  key(deviceID: string, body: KeyboardKeyParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/devices/${deviceID}/keyboard`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Input text
   */
  write(deviceID: string, body: KeyboardWriteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/devices/${deviceID}/keyboard`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface KeyboardKeyParams {
  key: number;
}

export interface KeyboardWriteParams {
  clear: boolean;

  text: string;
}

export declare namespace Keyboard {
  export { type KeyboardKeyParams as KeyboardKeyParams, type KeyboardWriteParams as KeyboardWriteParams };
}
