// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ScreenshotsAPI from './screenshots';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Tasks API
 */
export class UiStates extends APIResource {
  /**
   * Get a specific UI state by index.
   */
  retrieve(
    index: number,
    params: UiStateRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ScreenshotsAPI.MediaResponse> {
    const { task_id } = params;
    return this._client.get(path`/tasks/${task_id}/ui_states/${index}`, options);
  }

  /**
   * List all UI state URLs for a task.
   */
  list(taskID: string, options?: RequestOptions): APIPromise<UiStateListResponse> {
    return this._client.get(path`/tasks/${taskID}/ui_states`, options);
  }
}

export interface UiStateListResponse {
  /**
   * The list of media URLs
   */
  urls: Array<string>;
}

export interface UiStateRetrieveParams {
  task_id: string;
}

export declare namespace UiStates {
  export {
    type UiStateListResponse as UiStateListResponse,
    type UiStateRetrieveParams as UiStateRetrieveParams,
  };
}
