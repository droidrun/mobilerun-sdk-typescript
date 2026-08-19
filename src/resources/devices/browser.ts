// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BrowserAPI from './browser';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Browser extends APIResource {
  /**
   * Evaluates a JavaScript expression in the device's foreground Chrome tab via the
   * Chrome DevTools Protocol and returns its JSON-serialized result. Devices without
   * browser support return an unsupported-feature error.
   */
  executeScript(deviceID: string, params: BrowserExecuteScriptParams, options?: RequestOptions): APIPromise<BrowserExecuteScriptResponse> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params
    return this._client.post(path`/devices/${deviceID}/browser/execute-script`, { body, ...options, headers: buildHeaders([{...(xDeviceDisplayID?.toString() != null ? { 'X-Device-Display-ID': xDeviceDisplayID?.toString() } : undefined)}, options?.headers]) });
  }
}

export interface BrowserExecuteScriptResponse {
  /**
   * JSON-serialized return value of the script (null if it returned undefined).
   * Non-JSON-serializable numbers (Infinity, NaN, -0) are returned as their string
   * representation.
   */
  result: unknown;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface BrowserExecuteScriptParams {
  /**
   * Body param: JavaScript expression to evaluate in the device's foreground Chrome
   * tab (CDP Runtime.evaluate). It is an expression, not a function body — the
   * expression's value is returned (no top-level 'return'). Must evaluate to a
   * JSON-serializable value; wrap multi-statement logic in an IIFE, e.g. (() => {
   * ... ; return x })().
   */
  script: string;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export declare namespace Browser {
  export {
    type BrowserExecuteScriptResponse as BrowserExecuteScriptResponse,
    type BrowserExecuteScriptParams as BrowserExecuteScriptParams
  };
}
