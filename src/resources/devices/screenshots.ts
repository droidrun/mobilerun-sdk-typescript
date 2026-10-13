// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ScreenshotsAPI from './screenshots';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Screenshots extends APIResource {
  /**
   * Saved screenshots, newest first. Pass nextCursor as cursor to retrieve the next
   * page.
   */
  list(deviceID: string, query: ScreenshotListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ScreenshotListResponse> {
    return this._client.get(path`/devices/${deviceID}/screenshots`, { query, ...options });
  }

  /**
   * Delete a device screenshot
   */
  delete(screenshotID: string, params: ScreenshotDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { deviceId } = params
    return this._client.delete(path`/devices/${deviceId}/screenshots/${screenshotID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  /**
   * Captures the device screen and returns it as a PNG image. Pass save=true to
   * store it as device media.
   */
  capture(deviceID: string, params: ScreenshotCaptureParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    const { hideOverlay, save, 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {}
    return this._client.post(path`/devices/${deviceID}/screenshots`, { query: { hideOverlay, save }, ...options, headers: buildHeaders([{...(xDeviceDisplayID?.toString() != null ? { 'X-Device-Display-ID': xDeviceDisplayID?.toString() } : undefined)}, options?.headers]) });
  }

  /**
   * Redirects to a presigned PNG URL valid for 15 minutes.
   */
  image(screenshotID: string, params: ScreenshotImageParams, options?: RequestOptions): APIPromise<void> {
    const { deviceId } = params
    return this._client.get(path`/devices/${deviceId}/screenshots/${screenshotID}/image`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }
}

export interface ScreenshotListResponse {
  items: Array<ScreenshotListResponse.Item> | null;

  nextCursor: string;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export namespace ScreenshotListResponse {
  export interface Item {
    id: string;

    capturedAt: string;

    deviceId: string;

    expiresAt: string;

    recordingId: string | null;

    sizeBytes: number;
  }
}

export type ScreenshotCaptureResponse = string

export interface ScreenshotListParams {
  cursor?: string;

  limit?: number;
}

export interface ScreenshotDeleteParams {
  deviceId: string;
}

export interface ScreenshotCaptureParams {
  /**
   * Query param
   */
  hideOverlay?: boolean;

  /**
   * Query param: Store the screenshot as device media: in the owner's active
   * recording, or standalone for 7 days. Without save=true nothing is stored. The
   * PNG response is unchanged; X-Screenshot-Saved reports whether it was stored.
   */
  save?: boolean;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export interface ScreenshotImageParams {
  deviceId: string;
}

export declare namespace Screenshots {
  export {
    type ScreenshotListResponse as ScreenshotListResponse,
    type ScreenshotCaptureResponse as ScreenshotCaptureResponse,
    type ScreenshotListParams as ScreenshotListParams,
    type ScreenshotDeleteParams as ScreenshotDeleteParams,
    type ScreenshotCaptureParams as ScreenshotCaptureParams,
    type ScreenshotImageParams as ScreenshotImageParams
  };
}
