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
  screenshot(deviceID: string, params: StateScreenshotParams, options?: RequestOptions): APIPromise<string> {
    const { 'X-User-ID': xUserID, ...query } = params;
    return this._client.get(path`/devices/${deviceID}/screenshot`, {
      query,
      ...options,
      headers: buildHeaders([{ 'X-User-ID': xUserID }, options?.headers]),
    });
  }

  /**
   * Device time
   */
  time(deviceID: string, params: StateTimeParams, options?: RequestOptions): APIPromise<StateTimeResponse> {
    const { 'X-User-ID': xUserID } = params;
    return this._client.get(path`/devices/${deviceID}/time`, {
      ...options,
      headers: buildHeaders([{ 'X-User-ID': xUserID }, options?.headers]),
    });
  }

  /**
   * UI state
   */
  ui(deviceID: string, params: StateUiParams, options?: RequestOptions): APIPromise<unknown> {
    const { 'X-User-ID': xUserID, ...query } = params;
    return this._client.get(path`/devices/${deviceID}/ui-state`, {
      query,
      ...options,
      headers: buildHeaders([{ 'X-User-ID': xUserID }, options?.headers]),
    });
  }
}

export type StateScreenshotResponse = string;

export type StateTimeResponse = string;

export type StateUiResponse = unknown;

export interface StateScreenshotParams {
  /**
   * Header param:
   */
  'X-User-ID': string;

  /**
   * Query param:
   */
  hideOverlay?: boolean;
}

export interface StateTimeParams {
  'X-User-ID': string;
}

export interface StateUiParams {
  /**
   * Header param:
   */
  'X-User-ID': string;

  /**
   * Query param:
   */
  filter?: boolean;
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
