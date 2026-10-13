// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Performs a global system action on the device, such as navigating back or going
   * to the home screen, identified by an action code.
   */
  global(deviceID: string, params: ActionGlobalParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.post(path`/devices/${deviceID}/global`, {
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
   * Returns whether the accessibility overlay is currently visible on the device.
   */
  overlayVisible(
    deviceID: string,
    params: ActionOverlayVisibleParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionOverlayVisibleResponse> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {};
    return this._client.get(path`/devices/${deviceID}/overlay`, {
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
   * Shows or hides the accessibility overlay on the device based on the visibility
   * flag in the request body.
   */
  setOverlayVisible(
    deviceID: string,
    params: ActionSetOverlayVisibleParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.post(path`/devices/${deviceID}/overlay`, {
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
   * Swipes from a start coordinate to an end coordinate over the given duration in
   * milliseconds. An optional humanize flag applies human-like jitter and curved
   * paths on devices that support it. With holdMs > 0 the request returns 422 when
   * combined with humanize, when duration + holdMs exceeds 9000 ms, or on devices
   * that do not support it.
   */
  swipe(deviceID: string, params: ActionSwipeParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.post(path`/devices/${deviceID}/swipe`, {
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
   * Taps the device screen at the given x/y coordinates. An optional humanize flag
   * routes the tap through human-like input on devices that support it.
   */
  tap(deviceID: string, params: ActionTapParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.post(path`/devices/${deviceID}/tap`, {
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

export interface ActionOverlayVisibleResponse {
  visible: boolean;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface ActionGlobalParams {
  /**
   * Body param
   */
  action: number;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export interface ActionOverlayVisibleParams {
  'X-Device-Display-ID'?: number;
}

export interface ActionSetOverlayVisibleParams {
  /**
   * Body param
   */
  visible: boolean;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export interface ActionSwipeParams {
  /**
   * Body param: Swipe duration in milliseconds
   */
  duration: number;

  /**
   * Body param
   */
  endX: number;

  /**
   * Body param
   */
  endY: number;

  /**
   * Body param
   */
  startX: number;

  /**
   * Body param
   */
  startY: number;

  /**
   * Body param: Keep the finger at the end point for holdMs and suppress fling
   * before lifting, so content moves by about the finger travel. Supported on
   * Android cloud phones.
   */
  holdMs?: number;

  /**
   * Body param: Request human-like input where supported by the device. Defaults to
   * false.
   */
  humanize?: boolean;

  /**
   * @deprecated Body param: Deprecated: use humanize. Both names must agree when
   * supplied together.
   */
  stealth?: boolean;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export interface ActionTapParams {
  /**
   * Body param
   */
  x: number;

  /**
   * Body param
   */
  y: number;

  /**
   * Body param: Request human-like input where supported by the device. Defaults to
   * false.
   */
  humanize?: boolean;

  /**
   * @deprecated Body param: Deprecated: use humanize. Both names must agree when
   * supplied together.
   */
  stealth?: boolean;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export declare namespace Actions {
  export {
    type ActionOverlayVisibleResponse as ActionOverlayVisibleResponse,
    type ActionGlobalParams as ActionGlobalParams,
    type ActionOverlayVisibleParams as ActionOverlayVisibleParams,
    type ActionSetOverlayVisibleParams as ActionSetOverlayVisibleParams,
    type ActionSwipeParams as ActionSwipeParams,
    type ActionTapParams as ActionTapParams,
  };
}
