// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DeepLinkAPI from './deep-link';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class DeepLink extends APIResource {
  /**
   * Opens a deep link on the device. On Android the link is dispatched as an intent
   * — packageName optionally pins it to a specific app and action overrides the
   * default android.intent.action.VIEW. On iOS the URL is opened directly and the
   * optional fields must be omitted. Protected packages are rejected.
   */
  executeDeepLink(deviceID: string, params: DeepLinkExecuteDeepLinkParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params
    return this._client.post(path`/devices/${deviceID}/apps/open-deep-link`, { body, ...options, headers: buildHeaders([{Accept: '*/*', ...(xDeviceDisplayID?.toString() != null ? { 'X-Device-Display-ID': xDeviceDisplayID?.toString() } : undefined)}, options?.headers]) });
  }
}

export interface DeepLinkExecuteDeepLinkParams {
  /**
   * Body param: Deep link to open (e.g. myapp://path or https://example.com/path)
   */
  deepLink: string;

  /**
   * Body param: Android only: intent action to dispatch. Defaults to
   * android.intent.action.VIEW.
   */
  action?: string;

  /**
   * Body param: Reserved for targeting a specific iOS app; currently rejected as
   * unsupported.
   */
  bundleId?: string;

  /**
   * Body param: Android only: package to receive the intent (e.g. com.example.app).
   * Omit to let the system pick the handler.
   */
  packageName?: string;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export declare namespace DeepLink {
  export {
    type DeepLinkExecuteDeepLinkParams as DeepLinkExecuteDeepLinkParams
  };
}
