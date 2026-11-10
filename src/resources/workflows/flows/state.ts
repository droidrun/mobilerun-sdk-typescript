// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class State extends APIResource {
  /**
   * List the keys a routine has saved with `state.save`, with the metadata of each
   * key's newest version.
   */
  list(flowID: string, options?: RequestOptions): APIPromise<StateListResponse> {
    return this._client.get(path`/flows/${flowID}/state`, options);
  }

  /**
   * Delete every version of one state key. The next `state.load` of the key reports
   * `found: false`. Deleting an unknown key succeeds.
   */
  delete(key: string, params: StateDeleteParams, options?: RequestOptions): APIPromise<StateDeleteResponse> {
    const { flowId } = params;
    return this._client.delete(path`/flows/${flowId}/state/${key}`, options);
  }

  /**
   * Return the retained versions of one state key, newest first, including each
   * saved value. An unknown key returns an empty list.
   */
  listVersions(
    key: string,
    params: StateListVersionsParams,
    options?: RequestOptions,
  ): APIPromise<StateListVersionsResponse> {
    const { flowId } = params;
    return this._client.get(path`/flows/${flowId}/state/${key}/versions`, options);
  }
}

export interface StateListResponse {
  data: Array<StateListResponse.Data>;
}

export namespace StateListResponse {
  export interface Data {
    key: string;

    savedAt: string;

    sizeBytes: number;

    /**
     * Newest saved version of this key
     */
    version: number;
  }
}

export interface StateDeleteResponse {
  message: string;
}

export interface StateListVersionsResponse {
  data: Array<StateListVersionsResponse.Data>;
}

export namespace StateListVersionsResponse {
  export interface Data {
    /**
     * Execution that saved this version
     */
    executionId: string;

    savedAt: string;

    sizeBytes: number;

    version: number;

    /**
     * The saved JSON value
     */
    value?: unknown;
  }
}

export interface StateDeleteParams {
  flowId: string;
}

export interface StateListVersionsParams {
  flowId: string;
}

export declare namespace State {
  export {
    type StateListResponse as StateListResponse,
    type StateDeleteResponse as StateDeleteResponse,
    type StateListVersionsResponse as StateListVersionsResponse,
    type StateDeleteParams as StateDeleteParams,
    type StateListVersionsParams as StateListVersionsParams,
  };
}
