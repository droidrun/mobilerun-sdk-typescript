// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class State extends APIResource {
  /**
   * Take screenshot
   */
  screenshot(
    deviceID: string,
    params: StateScreenshotParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...query } = params ?? {};
    return this._client.get(path`/devices/${deviceID}/screenshot`, {
      query,
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
   * Device time
   */
  time(
    deviceID: string,
    params: StateTimeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {};
    return this._client.get(path`/devices/${deviceID}/time`, {
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
   * UI state
   */
  ui(
    deviceID: string,
    params: StateUiParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...query } = params ?? {};
    return this._client.get(path`/devices/${deviceID}/ui-state`, {
      query,
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
}

export type StateScreenshotResponse = string;

export type StateTimeResponse = string;

export type StateUiResponse = unknown;

export interface StateScreenshotParams {
  /**
   * Query param:
   */
  hideOverlay?: boolean;

  /**
   * Header param:
   */
  'X-Device-Display-ID'?: number;
}

export interface StateTimeParams {
  'X-Device-Display-ID'?: number;
}

export interface StateUiParams {
  /**
   * Query param:
   */
  filter?: boolean;

  /**
   * Header param:
   */
  'X-Device-Display-ID'?: number;
}

export declare namespace State {
  export {
    type StateScreenshotResponse as StateScreenshotResponse,
    type StateTimeResponse as StateTimeResponse,
    type StateUiResponse as StateUiResponse,
    type StateScreenshotParams as StateScreenshotParams,
    type StateTimeParams as StateTimeParams,
    type StateUiParams as StateUiParams,
  };
}
