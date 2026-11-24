// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ScheduledRuns extends APIResource {
  /**
   * Plan Run now for a future time, using the same devices, payload rules and
   * admission at fire time. A flow can have at most 100 scheduled runs. Supports an
   * optional Idempotency-Key; a replay returns the current scheduled run with the
   * original 201 status.
   */
  create(
    flowID: string,
    body: ScheduledRunCreateParams,
    options?: RequestOptions,
  ): APIPromise<ScheduledRunCreateResponse> {
    return this._client.post(path`/flows/${flowID}/scheduled-runs`, { body, ...options });
  }

  /**
   * Lists upcoming runs by default, including claimed runs awaiting dispatch. Set
   * status=all to include terminal rows. Ordered by runAt ascending.
   */
  list(
    flowID: string,
    query: ScheduledRunListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScheduledRunListResponse> {
    return this._client.get(path`/flows/${flowID}/scheduled-runs`, { query, ...options });
  }

  /**
   * Cancel a planned flow run
   */
  cancel(
    scheduledRunID: string,
    params: ScheduledRunCancelParams,
    options?: RequestOptions,
  ): APIPromise<ScheduledRunCancelResponse> {
    const { flowId } = params;
    return this._client.post(path`/flows/${flowId}/scheduled-runs/${scheduledRunID}/cancel`, options);
  }
}

export interface ScheduledRunCreateResponse {
  data: ScheduledRunCreateResponse.Data;
}

export namespace ScheduledRunCreateResponse {
  export interface Data {
    id: string;

    cancelledAt: string | null;

    createdAt: string;

    createdBy: string;

    error: string | null;

    executionIds: Array<string>;

    finishedAt: string | null;

    flowId: string;

    payload: { [key: string]: unknown };

    runAt: string;

    skipReason: string | null;

    status: 'scheduled' | 'started' | 'skipped' | 'failed' | 'missed' | 'cancelled';
  }
}

export interface ScheduledRunListResponse {
  items: Array<ScheduledRunListResponse.Item>;

  pagination: Shared.Pagination;
}

export namespace ScheduledRunListResponse {
  export interface Item {
    id: string;

    cancelledAt: string | null;

    createdAt: string;

    createdBy: string;

    error: string | null;

    executionIds: Array<string>;

    finishedAt: string | null;

    flowId: string;

    payload: { [key: string]: unknown };

    runAt: string;

    skipReason: string | null;

    status: 'scheduled' | 'started' | 'skipped' | 'failed' | 'missed' | 'cancelled';
  }
}

export interface ScheduledRunCancelResponse {
  data: ScheduledRunCancelResponse.Data;
}

export namespace ScheduledRunCancelResponse {
  export interface Data {
    id: string;

    cancelledAt: string | null;

    createdAt: string;

    createdBy: string;

    error: string | null;

    executionIds: Array<string>;

    finishedAt: string | null;

    flowId: string;

    payload: { [key: string]: unknown };

    runAt: string;

    skipReason: string | null;

    status: 'scheduled' | 'started' | 'skipped' | 'failed' | 'missed' | 'cancelled';
  }
}

export interface ScheduledRunCreateParams {
  /**
   * RFC 3339 time with an offset; between one minute and 365 days from now.
   */
  runAt: string;

  payload?: { [key: string]: unknown };
}

export interface ScheduledRunListParams {
  page?: number;

  pageSize?: number;

  status?: 'scheduled' | 'all';
}

export interface ScheduledRunCancelParams {
  flowId: string;
}

export declare namespace ScheduledRuns {
  export {
    type ScheduledRunCreateResponse as ScheduledRunCreateResponse,
    type ScheduledRunListResponse as ScheduledRunListResponse,
    type ScheduledRunCancelResponse as ScheduledRunCancelResponse,
    type ScheduledRunCreateParams as ScheduledRunCreateParams,
    type ScheduledRunListParams as ScheduledRunListParams,
    type ScheduledRunCancelParams as ScheduledRunCancelParams,
  };
}
