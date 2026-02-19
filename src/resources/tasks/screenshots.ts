// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Screenshots extends APIResource {
  /**
   * Get a specific screenshot by index.
   */
  retrieve(
    index: number,
    params: ScreenshotRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MediaResponse> {
    const { task_id } = params;
    return this._client.get(path`/tasks/${task_id}/screenshots/${index}`, options);
  }

  /**
   * List all screenshot URLs for a task.
   */
  list(taskID: string, options?: RequestOptions): APIPromise<ScreenshotListResponse> {
    return this._client.get(path`/tasks/${taskID}/screenshots`, options);
  }
}

export interface MediaResponse {
  /**
   * The URL of the media
   */
  url: string;
}

export interface ScreenshotListResponse {
  /**
   * The list of media URLs
   */
  urls: Array<string>;
}

export interface ScreenshotRetrieveParams {
  task_id: string;
}

export declare namespace Screenshots {
  export {
    type MediaResponse as MediaResponse,
    type ScreenshotListResponse as ScreenshotListResponse,
    type ScreenshotRetrieveParams as ScreenshotRetrieveParams,
  };
}
