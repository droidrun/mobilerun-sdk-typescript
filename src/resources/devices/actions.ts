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
  swipe(deviceID: string, params: ActionSwipeParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.post(path`/devices/${deviceID}/swipe`, {
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
   * Tap by coordinates
   */
  tap(deviceID: string, params: ActionTapParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.post(path`/devices/${deviceID}/tap`, {
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

export interface ActionSwipeParams {
  /**
   * Body param:
   */
  duration: number;

  /**
   * Body param:
   */
  endX: number;

  /**
   * Body param:
   */
  endY: number;

  /**
   * Body param:
   */
  startX: number;

  /**
   * Body param:
   */
  startY: number;

  /**
   * Header param:
   */
  'X-Device-Display-ID'?: string;
}

export interface ActionTapParams {
  /**
   * Body param:
   */
  x: number;

  /**
   * Body param:
   */
  y: number;

  /**
   * Header param:
   */
  'X-Device-Display-ID'?: string;
}

export declare namespace Actions {
  export { type ActionSwipeParams as ActionSwipeParams, type ActionTapParams as ActionTapParams };
}
