// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ExecutionsAPI from './executions';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Executions extends APIResource {
  /**
   * Fetch a single flow execution by its ID, including its status, kind, result or
   * error, and start/finish timestamps. Returns 404 if no execution matches.
   */
  retrieve(executionID: string, options?: RequestOptions): APIPromise<ExecutionRetrieveResponse> {
    return this._client.get(path`/executions/${executionID}`, options);
  }

  /**
   * Return a paginated history of flow executions. Supports filtering by `flowId`,
   * `triggerId`, `status`, and a `from`/`to` time range, plus free-text `search` and
   * ordering by startedAt, finishedAt, or status.
   */
  list(
    query: ExecutionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExecutionListResponse> {
    return this._client.get('/executions', { query, ...options });
  }

  /**
   * Return aggregate execution metrics — total count, counts by status, average
   * duration, and the last execution time. Can be scoped by `flowId`, `triggerId`,
   * and a `from`/`to` time range.
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

  kind: 'live' | 'dry_run';

  startedAt: string | null;

  status: 'pending' | 'running' | 'success' | 'failed' | 'cancelled' | 'skipped' | 'invalid' | null;

  triggerId: string;

  triggerName: string | null;

  /**
   * Opaque per-step result blob ({ steps: [...] }). Each step additionally carries a
   * `verdict` field ({ outcome, summary, reason? } | null) when it is an agent.run
   * step that opted into a verdict — null otherwise. Table-backed steps (current
   * executions) also carry a `status` string (e.g. success/failed/stopped, see
   * deriveStepStatus); it is optional and absent on legacy blob-only executions, so
   * clients must not assume its presence.
   */
  result?: unknown;
}

export interface ExecutionRetrieveResponse {
  data: ExecutionRetrieveResponse.Data;
}

export namespace ExecutionRetrieveResponse {
  export interface Data extends ExecutionsAPI.FlowExecution {
    createdBy: string | null;

    /**
     * Files produced by files.upload steps, plus files an agent.run step reported on
     * its terminal response (agent-created output or a workflow upload minted during
     * the turn); derived server-side at read time.
     */
    files: Array<Data.File>;
  }

  export namespace Data {
    export interface File {
      fileId: string;

      filename: string;

      mimeType: string;

      sizeBytes: number;
    }
  }
}

export interface ExecutionListResponse {
  items: Array<ExecutionListResponse.Item>;

  pagination: Shared.Pagination;
}

export namespace ExecutionListResponse {
  export interface Item extends ExecutionsAPI.FlowExecution {
    createdBy: string | null;
  }
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
      cancelled: number;

      failed: number;

      invalid: number;

      pending: number;

      running: number;

      skipped: number;

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

  status?: 'pending' | 'running' | 'success' | 'failed' | 'cancelled' | 'skipped' | 'invalid';

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
