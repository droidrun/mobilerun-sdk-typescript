// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class State extends APIResource {
  /**
   * Take screenshot
   */
  screenshot(
    deviceID: string,
    query: StateScreenshotParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get(path`/devices/${deviceID}/screenshot`, { query, ...options });
  }

  /**
   * Device time
   */
  time(deviceID: string, options?: RequestOptions): APIPromise<StateTimeResponse> {
    return this._client.get(path`/devices/${deviceID}/time`, options);
  }

  /**
   * UI state
   */
  ui(
    deviceID: string,
    query: StateUiParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(path`/devices/${deviceID}/ui-state`, { query, ...options });
  }
}

export type StateScreenshotResponse = string;

export type StateTimeResponse = string;

export type StateUiResponse = unknown;

export interface StateScreenshotParams {
  hideOverlay?: boolean;
}

export interface StateUiParams {
  filter?: boolean;
}

export declare namespace State {
  export {
    type StateScreenshotResponse as StateScreenshotResponse,
    type StateTimeResponse as StateTimeResponse,
    type StateUiResponse as StateUiResponse,
    type StateScreenshotParams as StateScreenshotParams,
    type StateUiParams as StateUiParams,
  };
}
