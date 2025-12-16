// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Swipe
   */
  swipe(deviceID: string, body: ActionSwipeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/devices/${deviceID}/swipe`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Tap by coordinates
   */
  tap(deviceID: string, body: ActionTapParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/devices/${deviceID}/tap`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ActionSwipeParams {
  duration: number;

  endX: number;

  endY: number;

  startX: number;

  startY: number;
}

export interface ActionTapParams {
  x: number;

  y: number;
}

export declare namespace Actions {
  export { type ActionSwipeParams as ActionSwipeParams, type ActionTapParams as ActionTapParams };
}
