// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Executions extends APIResource {
  /**
   * Get execution details
   */
  retrieve(executionID: string, options?: RequestOptions): APIPromise<ExecutionRetrieveResponse> {
    return this._client.get(path`/executions/${executionID}`, options);
  }

  /**
   * List flow executions
   */
  list(
    query: ExecutionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExecutionListResponse> {
    return this._client.get('/executions', { query, ...options });
  }

  /**
   * Get execution metrics
   */
  getMetrics(
    query: ExecutionGetMetricsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExecutionGetMetricsResponse> {
    return this._client.get('/executions/metrics', { query, ...options });
  }
}

export interface FlowExecution {
  id: string;

  error: string | null;

  eventId: string | null;

  finishedAt: string | null;

  flowId: string;

  flowName: string | null;

  startedAt: string | null;

  status: 'pending' | 'running' | 'success' | 'failed' | null;

  triggerId: string;

  triggerName: string | null;

  result?: unknown;
}

export interface ExecutionRetrieveResponse {
  data: FlowExecution;
}

export interface ExecutionListResponse {
  items: Array<FlowExecution>;

  pagination: Shared.Pagination;
}

export interface ExecutionGetMetricsResponse {
  data: ExecutionGetMetricsResponse.Data;
}

export namespace ExecutionGetMetricsResponse {
  export interface Data {
    avgDurationMs: number | null;

    byStatus: Data.ByStatus;

    lastExecutionAt: string | null;

    total: number;
  }

  export namespace Data {
    export interface ByStatus {
      failed: number;

      pending: number;

      running: number;

      success: number;
    }
  }
}

export interface ExecutionListParams {
  flowId?: string;

  from?: string | null;

  orderBy?: 'startedAt' | 'finishedAt' | 'status';

  orderByDirection?: 'asc' | 'desc';

  page?: number;

  pageSize?: number;

  search?: string;

  status?: 'pending' | 'running' | 'success' | 'failed';

  to?: string | null;

  triggerId?: string;
}

export interface ExecutionGetMetricsParams {
  flowId?: string;

  from?: string | null;

  to?: string | null;

  triggerId?: string;
}

export declare namespace Executions {
  export {
    type FlowExecution as FlowExecution,
    type ExecutionRetrieveResponse as ExecutionRetrieveResponse,
    type ExecutionListResponse as ExecutionListResponse,
    type ExecutionGetMetricsResponse as ExecutionGetMetricsResponse,
    type ExecutionListParams as ExecutionListParams,
    type ExecutionGetMetricsParams as ExecutionGetMetricsParams,
  };
}
