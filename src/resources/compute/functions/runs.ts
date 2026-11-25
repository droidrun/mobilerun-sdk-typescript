// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

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
  data: RunCreateResponse.Data;
}

export namespace RunCreateResponse {
  export interface Data {
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

    apiKey?: Data.UnionMember0 | Data.UnionMember1;
  }

  export namespace Data {
    export interface UnionMember0 {
      expiresAt: string;

      permissions: { [key: string]: Array<string> };
    }

    export interface UnionMember1 {
      expiresAt: string;

      full: true;
    }
  }
}

export interface RunListResponse {
  data: RunListResponse.Data;
}

export namespace RunListResponse {
  export interface Data {
    items: Array<Data.Item>;

    pagination: Shared.Pagination;
  }

  export namespace Data {
    export interface Item {
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

      apiKey?: Item.UnionMember0 | Item.UnionMember1;
    }

    export namespace Item {
      export interface UnionMember0 {
        expiresAt: string;

        permissions: { [key: string]: Array<string> };
      }

      export interface UnionMember1 {
        expiresAt: string;

        full: true;
      }
    }
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
