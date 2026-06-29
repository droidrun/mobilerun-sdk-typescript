// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as StateAPI from './state';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class State extends APIResource {
  /**
   * Captures the device screen and returns it as a PNG image. An optional
   * hideOverlay query parameter excludes the accessibility overlay from the capture.
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
   * Returns the device's current wall-clock time as an RFC 3339 timestamp.
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
   * Returns the current accessibility UI state of the device as a structured tree of
   * on-screen elements. An optional filter query reduces the result to interactive
   * elements.
   */
  ui(
    deviceID: string,
    params: StateUiParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StateUiResponse> {
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

export interface A11YNode {
  boundsInScreen: A11YNode.BoundsInScreen;

  children: Array<A11YNode> | null;

  className: string;

  contentDescription: string;

  isCheckable: boolean;

  isChecked: boolean;

  isClickable: boolean;

  isEnabled: boolean;

  isFocusable: boolean;

  isFocused: boolean;

  isLongClickable: boolean;

  isPassword: boolean;

  isScrollable: boolean;

  isSelected: boolean;

  packageName: string;

  resourceId: string;

  text: string;
}

export namespace A11YNode {
  export interface BoundsInScreen {
    bottom: number;

    left: number;

    right: number;

    top: number;
  }
}

export interface Rect {
  height: number;

  width: number;
}

export type StateScreenshotResponse = string;

export type StateTimeResponse = string;

export interface StateUiResponse {
  a11y_tree: A11YNode;

  device_context: StateUiResponse.DeviceContext;

  ime_tree: A11YNode;

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

export interface StateTimeParams {
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
    type A11YNode as A11YNode,
    type Rect as Rect,
    type StateScreenshotResponse as StateScreenshotResponse,
    type StateTimeResponse as StateTimeResponse,
    type StateUiResponse as StateUiResponse,
    type StateScreenshotParams as StateScreenshotParams,
    type StateTimeParams as StateTimeParams,
    type StateUiParams as StateUiParams,
  };
}
