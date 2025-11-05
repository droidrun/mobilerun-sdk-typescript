// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Screenshots extends APIResource {
  /**
   * Get Task Screenshot
   */
  retrieve(index: number, params: ScreenshotRetrieveParams, options?: RequestOptions): APIPromise<unknown> {
    const { task_id } = params;
    return this._client.get(path`/tasks/${task_id}/screenshots/${index}`, options);
  }

  /**
   * Get Task Screenshots
   */
  list(taskID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/tasks/${taskID}/screenshots`, options);
  }
}

export type ScreenshotRetrieveResponse = unknown;

export type ScreenshotListResponse = unknown;

export interface ScreenshotRetrieveParams {
  task_id: string;
}

export declare namespace Screenshots {
  export {
    type ScreenshotRetrieveResponse as ScreenshotRetrieveResponse,
    type ScreenshotListResponse as ScreenshotListResponse,
    type ScreenshotRetrieveParams as ScreenshotRetrieveParams,
  };
}
