// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Perform a global action
   */
  global(deviceID: string, params: ActionGlobalParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params
    return this._client.post(path`/devices/${deviceID}/global`, { body, ...options, headers: buildHeaders([{Accept: '*/*', ...(xDeviceDisplayID?.toString() != null ? { 'X-Device-Display-ID': xDeviceDisplayID?.toString() } : undefined)}, options?.headers]) });
  }

  /**
   * Check if overlay is visible
   */
  overlayVisible(deviceID: string, params: ActionOverlayVisibleParams | null | undefined = {}, options?: RequestOptions): APIPromise<ActionOverlayVisibleResponse> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {}
    return this._client.get(path`/devices/${deviceID}/overlay`, { ...options, headers: buildHeaders([{...(xDeviceDisplayID?.toString() != null ? { 'X-Device-Display-ID': xDeviceDisplayID?.toString() } : undefined)}, options?.headers]) });
  }

  /**
   * Set overlay visibility
   */
  setOverlayVisible(deviceID: string, params: ActionSetOverlayVisibleParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params
    return this._client.post(path`/devices/${deviceID}/overlay`, { body, ...options, headers: buildHeaders([{Accept: '*/*', ...(xDeviceDisplayID?.toString() != null ? { 'X-Device-Display-ID': xDeviceDisplayID?.toString() } : undefined)}, options?.headers]) });
  }

  /**
   * Swipe
   */
  swipe(deviceID: string, params: ActionSwipeParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params
    return this._client.post(path`/devices/${deviceID}/swipe`, { body, ...options, headers: buildHeaders([{Accept: '*/*', ...(xDeviceDisplayID?.toString() != null ? { 'X-Device-Display-ID': xDeviceDisplayID?.toString() } : undefined)}, options?.headers]) });
  }

  /**
   * Tap by coordinates
   */
  tap(deviceID: string, params: ActionTapParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params
    return this._client.post(path`/devices/${deviceID}/tap`, { body, ...options, headers: buildHeaders([{Accept: '*/*', ...(xDeviceDisplayID?.toString() != null ? { 'X-Device-Display-ID': xDeviceDisplayID?.toString() } : undefined)}, options?.headers]) });
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
   * Body param
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
   * Body param
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
    type ActionTapParams as ActionTapParams
  };
}
