// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ScreenshotsAPI from './screenshots';
import { MediaResponse, ScreenshotListResponse, ScreenshotRetrieveParams, Screenshots } from './screenshots';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tasks extends APIResource {
  screenshots: ScreenshotsAPI.Screenshots = new ScreenshotsAPI.Screenshots(this._client);

  /**
   * Get Task
   */
  retrieve(taskID: string, options?: RequestOptions): APIPromise<TaskRetrieveResponse> {
    return this._client.get(path`/tasks/${taskID}`, options);
  }

  /**
   * List all tasks you've created so far
   */
  list(
    query: TaskListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TaskListResponse> {
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
  getGif(taskID: string, options?: RequestOptions): APIPromise<ScreenshotsAPI.MediaResponse> {
    return this._client.get(path`/tasks/${taskID}/gif`, options);
  }

  /**
   * Get the status of a task. If device is provided, return the status of the
   * specific device. Otherwise, return the status of all devices.
   */
  getStatus(taskID: string, options?: RequestOptions): APIPromise<TaskGetStatusResponse> {
    return this._client.get(path`/tasks/${taskID}/status`, options);
  }

  /**
   * Run Task
   */
  run(body: TaskRunParams, options?: RequestOptions): APIPromise<TaskRunResponse> {
    return this._client.post('/tasks/', { body, ...options });
  }

  /**
   * Run Streamed Task
   */
  runStreamed(body: TaskRunStreamedParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/tasks/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Stop Task
   */
  stop(taskID: string, options?: RequestOptions): APIPromise<TaskStopResponse> {
    return this._client.post(path`/tasks/${taskID}/cancel`, options);
  }
}

export type LlmModel =
  | 'gpt-4o'
  | 'gpt-4o-mini'
  | 'gpt-4.1'
  | 'gpt-4.1-mini'
  | 'gpt-o4-mini'
  | 'gpt-o3'
  | 'gemini-2.5-flash'
  | 'gemini-2.5-pro'
  | 'claude-3-7-sonnet-latest'
  | 'claude-sonnet-4-20250514';

export interface Task {
  deviceId: string;

  task: string;

  userId: string;

  id?: string;

  createdAt?: string;

  finishedAt?: string;

  llmModel?: LlmModel;

  maxSteps?: number;

  output?: string;

  reasoning?: boolean;

  reflection?: boolean;

  status?: TaskStatus;

  steps?: number;

  succeeded?: boolean;

  temperature?: number;

  timeout?: number;

  updatedAt?: string;

  vision?: boolean;
}

export interface TaskCreate {
  task: string;

  credentials?: { [key: string]: { [key: string]: string } };

  files?: Array<string>;

  libraryApps?: Array<string>;

  llmModel?: LlmModel;

  maxSteps?: number;

  reasoning?: boolean;

  reflection?: boolean;

  temperature?: number;

  timeout?: number;

  uploadedApps?: Array<string>;

  vision?: boolean;
}

export type TaskStatus = 'created' | 'running' | 'paused' | 'completed' | 'failed' | 'cancelled';

export interface TaskRetrieveResponse {
  /**
   * The task
   */
  task: Task;
}

export interface TaskListResponse {
  /**
   * The paginated items
   */
  items: Array<Task>;

  /**
   * Pagination metadata
   */
  pagination: TaskListResponse.Pagination;
}

export namespace TaskListResponse {
  /**
   * Pagination metadata
   */
  export interface Pagination {
    /**
     * Whether there is a next page
     */
    hasNext: boolean;

    /**
     * Whether there is a previous page
     */
    hasPrev: boolean;

    /**
     * Current page number (1-based)
     */
    page: number;

    /**
     * Total number of pages
     */
    pages: number;

    /**
     * Number of items per page
     */
    pageSize: number;

    /**
     * Total number of items
     */
    total: number;
  }
}

export interface TaskGetStatusResponse {
  /**
   * The status of the task
   */
  status: TaskStatus;
}

export interface TaskRunResponse {
  /**
   * The ID of the task
   */
  id: string;

  /**
   * The token of the stream
   */
  token: string;

  /**
   * The URL of the stream
   */
  streamUrl: string;
}

export interface TaskStopResponse {
  /**
   * Whether the task was cancelled
   */
  cancelled: boolean;
}

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

  status?: TaskStatus | null;
}

export interface TaskRunParams {
  task: string;

  credentials?: { [key: string]: { [key: string]: string } };

  files?: Array<string>;

  libraryApps?: Array<string>;

  llmModel?: LlmModel;

  maxSteps?: number;

  reasoning?: boolean;

  reflection?: boolean;

  temperature?: number;

  timeout?: number;

  uploadedApps?: Array<string>;

  vision?: boolean;
}

export interface TaskRunStreamedParams {
  task: string;

  credentials?: { [key: string]: { [key: string]: string } };

  files?: Array<string>;

  libraryApps?: Array<string>;

  llmModel?: LlmModel;

  maxSteps?: number;

  reasoning?: boolean;

  reflection?: boolean;

  temperature?: number;

  timeout?: number;

  uploadedApps?: Array<string>;

  vision?: boolean;
}

Tasks.Screenshots = Screenshots;

export declare namespace Tasks {
  export {
    type LlmModel as LlmModel,
    type Task as Task,
    type TaskCreate as TaskCreate,
    type TaskStatus as TaskStatus,
    type TaskRetrieveResponse as TaskRetrieveResponse,
    type TaskListResponse as TaskListResponse,
    type TaskGetStatusResponse as TaskGetStatusResponse,
    type TaskRunResponse as TaskRunResponse,
    type TaskStopResponse as TaskStopResponse,
    type TaskListParams as TaskListParams,
    type TaskRunParams as TaskRunParams,
    type TaskRunStreamedParams as TaskRunStreamedParams,
  };

  export {
    Screenshots as Screenshots,
    type MediaResponse as MediaResponse,
    type ScreenshotListResponse as ScreenshotListResponse,
    type ScreenshotRetrieveParams as ScreenshotRetrieveParams,
  };
}
