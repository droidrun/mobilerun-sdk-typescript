// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as RunsAPI from '../compute/runs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Runs extends APIResource {
  /**
   * Returns 200 with the finished run when it ends within `waitS`, else 202 with the
   * run.
   */
  create(functionID: string, body: RunCreateParams, options?: RequestOptions): APIPromise<RunCreateResponse> {
    return this._client.post(path`/compute/functions/${functionID}/runs`, { body, ...options });
  }

  /**
   * List the runs of a function, newest first
   */
  list(
    functionID: string,
    query: RunListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RunListResponse> {
    return this._client.get(path`/compute/functions/${functionID}/runs`, { query, ...options });
  }
}

export interface RunCreateResponse {
  data: RunsAPI.FunctionRun;
}

export interface RunListResponse {
  data: RunListResponse.Data;
}

export namespace RunListResponse {
  export interface Data {
    items: Array<RunsAPI.FunctionRunSummary>;

    pagination: Shared.Pagination;
  }
}

export interface RunCreateParams {
  input: { [key: string]: unknown };

  /**
   * Omitted: 300 s.
   */
  timeoutS?: number;

  /**
   * Latest selects the newest ready version of the function; a number pins a
   * version.
   */
  version?: 'latest' | number;

  /**
   * Seconds the reply waits for the run to end; 202 when it is still running.
   */
  waitS?: number;
}

export interface RunListParams {
  page?: number;

  pageSize?: number;

  status?: 'running' | 'done' | 'failed';
}

export declare namespace Runs {
  export {
    type RunCreateResponse as RunCreateResponse,
    type RunListResponse as RunListResponse,
    type RunCreateParams as RunCreateParams,
    type RunListParams as RunListParams,
  };
}
