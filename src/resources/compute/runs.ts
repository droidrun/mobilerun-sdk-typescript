// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RunsAPI from './runs';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Runs extends APIResource {
  /**
   * Get a run
   */
  retrieve(
    runID: string,
    query: RunRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RunRetrieveResponse> {
    return this._client.get(path`/compute/runs/${runID}`, { query, ...options });
  }

  /**
   * List the runs started on the public routes, newest first
   */
  list(query: RunListParams | null | undefined = {}, options?: RequestOptions): APIPromise<RunListResponse> {
    return this._client.get('/compute/runs', { query, ...options });
  }

  /**
   * Cancel a run
   */
  cancel(runID: string, options?: RequestOptions): APIPromise<RunCancelResponse> {
    return this._client.post(path`/compute/runs/${runID}/cancel`, options);
  }

  /**
   * Get a short-lived download link for the full log of a run
   */
  logs(runID: string, options?: RequestOptions): APIPromise<RunLogsResponse> {
    return this._client.get(path`/compute/runs/${runID}/logs`, options);
  }
}

export interface FunctionRun {
  id: string;

  durationMs: number | null;

  endedAt: string | null;

  errorCode:
    | 'function_error'
    | 'input_invalid'
    | 'timeout'
    | 'cancelled'
    | 'sandbox_lost'
    | 'sandbox_start_failed'
    | 'function_not_found'
    | 'internal_error'
    | 'output_invalid'
    | 'result_too_large'
    | 'state_too_large'
    | 'dataset_too_large'
    | 'executor_unavailable'
    | null;

  functionId: string;

  input: { [key: string]: unknown };

  logs: 'none' | 'pending' | 'available' | 'gone';

  outcome: 'succeeded' | 'partial' | 'failed' | null;

  result: { [key: string]: unknown } | Array<unknown> | string | number | boolean | null;

  startedAt: string | null;

  status: 'running' | 'done' | 'failed';

  stderr: string;

  stdout: string;

  truncated: boolean;

  usedSeconds: number | null;

  version: number;

  apiKey?: FunctionRun.UnionMember0 | FunctionRun.UnionMember1;
}

export namespace FunctionRun {
  export interface UnionMember0 {
    expiresAt: string;

    permissions: { [key: string]: Array<string> };
  }

  export interface UnionMember1 {
    expiresAt: string;

    full: true;
  }
}

export interface FunctionRunSummary {
  id: string;

  durationMs: number | null;

  endedAt: string | null;

  errorCode:
    | 'function_error'
    | 'input_invalid'
    | 'timeout'
    | 'cancelled'
    | 'sandbox_lost'
    | 'sandbox_start_failed'
    | 'function_not_found'
    | 'internal_error'
    | 'output_invalid'
    | 'result_too_large'
    | 'state_too_large'
    | 'dataset_too_large'
    | 'executor_unavailable'
    | null;

  functionId: string;

  logs: 'none' | 'pending' | 'available' | 'gone';

  outcome: 'succeeded' | 'partial' | 'failed' | null;

  startedAt: string | null;

  status: 'running' | 'done' | 'failed';

  usedSeconds: number | null;

  version: number;

  apiKey?: FunctionRunSummary.UnionMember0 | FunctionRunSummary.UnionMember1;
}

export namespace FunctionRunSummary {
  export interface UnionMember0 {
    expiresAt: string;

    permissions: { [key: string]: Array<string> };
  }

  export interface UnionMember1 {
    expiresAt: string;

    full: true;
  }
}

export interface RunRetrieveResponse {
  data: FunctionRun;
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

export interface RunCancelResponse {
  data: FunctionRun;
}

export interface RunLogsResponse {
  data: RunLogsResponse.Data;
}

export namespace RunLogsResponse {
  export interface Data {
    expiresAt: string;

    sizeBytes: number;

    url: string;
  }
}

export interface RunRetrieveParams {
  /**
   * Seconds the reply waits for the run to end; 202 when it is still running.
   */
  waitS?: number | null;
}

export interface RunListParams {
  functionId?: string;

  page?: number;

  pageSize?: number;

  status?: 'running' | 'done' | 'failed';
}

export declare namespace Runs {
  export {
    type FunctionRun as FunctionRun,
    type FunctionRunSummary as FunctionRunSummary,
    type RunRetrieveResponse as RunRetrieveResponse,
    type RunListResponse as RunListResponse,
    type RunCancelResponse as RunCancelResponse,
    type RunLogsResponse as RunLogsResponse,
    type RunRetrieveParams as RunRetrieveParams,
    type RunListParams as RunListParams,
  };
}
