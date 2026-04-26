// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as StateAPI from './state';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class State extends APIResource {
  /**
   * Take screenshot
   */
  screenshot(deviceID: string, params: StateScreenshotParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...query } = params ?? {}
    return this._client.get(path`/devices/${deviceID}/screenshot`, { query, ...options, headers: buildHeaders([{...(xDeviceDisplayID?.toString() != null ? { 'X-Device-Display-ID': xDeviceDisplayID?.toString() } : undefined)}, options?.headers]) });
  }

  /**
   * UI state
   */
  ui(deviceID: string, params: StateUiParams | null | undefined = {}, options?: RequestOptions): APIPromise<StateUiResponse> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...query } = params ?? {}
    return this._client.get(path`/devices/${deviceID}/ui-state`, { query, ...options, headers: buildHeaders([{...(xDeviceDisplayID?.toString() != null ? { 'X-Device-Display-ID': xDeviceDisplayID?.toString() } : undefined)}, options?.headers]) });
  }
}

export interface Rect {
  height: number;

  width: number;
}

export type StateScreenshotResponse = string

export interface StateUiResponse {
  a11y_tree: unknown;

  device_context: StateUiResponse.DeviceContext;

  phone_state: StateUiResponse.PhoneState;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export namespace StateUiResponse {
  export interface DeviceContext {
    display_metrics: DeviceContext.DisplayMetrics;

    filtering_params: DeviceContext.FilteringParams;

    screen_bounds: StateAPI.Rect;

    screenSize: StateAPI.Rect;
  }

  export namespace DeviceContext {
    export interface DisplayMetrics {
      density: number;

      densityDpi: number;

      heightPixels: number;

      scaledDensity: number;

      widthPixels: number;
    }

    export interface FilteringParams {
      min_element_size: number;

      overlay_offset: number;
    }
  }

  export interface PhoneState {
    isEditable: boolean;

    keyboardVisible: boolean;

    activityName?: string;

    currentApp?: string;

    focusedElement?: PhoneState.FocusedElement;

    packageName?: string;
  }

  export namespace PhoneState {
    export interface FocusedElement {
      className?: string;

      resourceId?: string;

      text?: string;
    }
  }
}

export interface StateScreenshotParams {
  /**
   * Query param
   */
  hideOverlay?: boolean;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export interface StateUiParams {
  /**
   * Query param
   */
  filter?: boolean;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export declare namespace State {
  export {
    type Rect as Rect,
    type StateScreenshotResponse as StateScreenshotResponse,
    type StateUiResponse as StateUiResponse,
    type StateScreenshotParams as StateScreenshotParams,
    type StateUiParams as StateUiParams
  };
}
