// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ScreenshotsAPI from './screenshots';
import {
  ScreenshotListResponse,
  ScreenshotRetrieveParams,
  ScreenshotRetrieveResponse,
  Screenshots,
} from './screenshots';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tasks extends APIResource {
  screenshots: ScreenshotsAPI.Screenshots = new ScreenshotsAPI.Screenshots(this._client);

  /**
   * Get Task
   */
  retrieve(taskID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/tasks/${taskID}`, options);
  }

  /**
   * List all tasks you've created so far
   */
  list(query: TaskListParams | null | undefined = {}, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/tasks/', { query, ...options });
  }

  /**
   * Attach Task
   */
  attach(taskID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/tasks/${taskID}/attach`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get Task Gif
   */
  getGif(taskID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/tasks/${taskID}/gif`, options);
  }

  /**
   * Get the status of a task. If device is provided, return the status of the
   * specific device. Otherwise, return the status of all devices.
   */
  getStatus(taskID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/tasks/${taskID}/status`, options);
  }

  /**
   * Get the trajectory of a task.
   */
  getTrajectory(taskID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/tasks/${taskID}/trajectory`, options);
  }

  /**
   * Run Task
   */
  run(params: TaskRunParams, options?: RequestOptions): APIPromise<unknown> {
    const { body } = params;
    return this._client.post('/tasks/', { body: body, ...options });
  }

  /**
   * Run Streamed Task
   */
  runStreamed(params: TaskRunStreamedParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/tasks/stream', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Stop Task
   */
  stop(taskID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(path`/tasks/${taskID}/cancel`, options);
  }
}

export type TaskRetrieveResponse = unknown;

export type TaskListResponse = unknown;

export type TaskGetGifResponse = unknown;

export type TaskGetStatusResponse = unknown;

export type TaskGetTrajectoryResponse = unknown;

export type TaskRunResponse = unknown;

export type TaskStopResponse = unknown;

export interface TaskListParams {
  orderBy?: 'id' | 'createdAt' | 'finishedAt' | 'status' | null;

  orderByDirection?: 'asc' | 'desc';

  /**
   * Page number (1-based). If provided, returns paginated results.
   */
  page?: number | null;

  /**
   * Number of items per page
   */
  pageSize?: number;

  /**
   * Search in task description.
   */
  query?: string | null;

  status?: unknown;
}

export interface TaskRunParams {
  body: unknown;
}

export interface TaskRunStreamedParams {
  body: unknown;
}

Tasks.Screenshots = Screenshots;

export declare namespace Tasks {
  export {
    type TaskRetrieveResponse as TaskRetrieveResponse,
    type TaskListResponse as TaskListResponse,
    type TaskGetGifResponse as TaskGetGifResponse,
    type TaskGetStatusResponse as TaskGetStatusResponse,
    type TaskGetTrajectoryResponse as TaskGetTrajectoryResponse,
    type TaskRunResponse as TaskRunResponse,
    type TaskStopResponse as TaskStopResponse,
    type TaskListParams as TaskListParams,
    type TaskRunParams as TaskRunParams,
    type TaskRunStreamedParams as TaskRunStreamedParams,
  };

  export {
    Screenshots as Screenshots,
    type ScreenshotRetrieveResponse as ScreenshotRetrieveResponse,
    type ScreenshotListResponse as ScreenshotListResponse,
    type ScreenshotRetrieveParams as ScreenshotRetrieveParams,
  };
}
