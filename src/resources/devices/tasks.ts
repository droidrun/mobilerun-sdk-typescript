// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tasks extends APIResource {
  /**
   * Returns a paginated list of tasks that have run on the device, along with
   * pagination metadata.
   */
  list(
    deviceID: string,
    query: TaskListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TaskListResponse> {
    return this._client.get(path`/devices/${deviceID}/tasks`, { query, ...options });
  }
}

export interface TaskListResponse {
  items: Array<TaskListResponse.Item> | null;

  pagination: Shared.Meta;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export namespace TaskListResponse {
  export interface Item {
    createdAt: string;

    taskId: string;

    updatedAt: string;
  }
}

export interface TaskListParams {
  orderBy?: 'id' | 'createdAt' | 'updatedAt' | 'assignedAt';

  orderByDirection?: 'asc' | 'desc';

  page?: number;

  pageSize?: number;
}

export declare namespace Tasks {
  export { type TaskListResponse as TaskListResponse, type TaskListParams as TaskListParams };
}
