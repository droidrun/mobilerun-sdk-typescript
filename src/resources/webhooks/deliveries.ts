// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Deliveries extends APIResource {
  /**
   * List deliveries across all your webhooks
   *
   * @example
   * ```ts
   * const deliveries = await client.webhooks.deliveries.list();
   * ```
   */
  list(
    query: DeliveryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeliveryListResponse> {
    return this._client.get('/webhooks/deliveries', { query, ...options });
  }

  /**
   * List deliveries for a webhook
   *
   * @example
   * ```ts
   * const response =
   *   await client.webhooks.deliveries.listForWebhook(
   *     '550e8400-e29b-41d4-a716-446655440000',
   *   );
   * ```
   */
  listForWebhook(
    id: string,
    query: DeliveryListForWebhookParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeliveryListForWebhookResponse> {
    return this._client.get(path`/webhooks/${id}/deliveries`, { query, ...options });
  }

  /**
   * Get a delivery with its attempts
   *
   * @example
   * ```ts
   * const response =
   *   await client.webhooks.deliveries.retrieveAttempts(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { id: '550e8400-e29b-41d4-a716-446655440000' },
   *   );
   * ```
   */
  retrieveAttempts(
    deliveryID: string,
    params: DeliveryRetrieveAttemptsParams,
    options?: RequestOptions,
  ): APIPromise<DeliveryRetrieveAttemptsResponse> {
    const { id } = params;
    return this._client.get(path`/webhooks/${id}/deliveries/${deliveryID}`, options);
  }

  /**
   * Aggregate delivery statistics (excludes test sends)
   *
   * @example
   * ```ts
   * const response = await client.webhooks.deliveries.stats();
   * ```
   */
  stats(
    query: DeliveryStatsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeliveryStatsResponse> {
    return this._client.get('/webhooks/deliveries/stats', { query, ...options });
  }
}

export interface DeliveryListResponse {
  items: Array<DeliveryListResponse.Item>;

  pagination: Shared.Pagination;
}

export namespace DeliveryListResponse {
  export interface Item {
    id: string;

    attempts: number;

    completedAt: string | null;

    createdAt: string;

    durationMs: number | null;

    endpointId: string;

    endpointUrl: string;

    eventId: string;

    eventType: string;

    isTest: boolean;

    lastError: string | null;

    lastStatusCode: number | null;

    occurredAt: string;

    source: string;

    status: 'pending' | 'success' | 'skipped' | 'dead';
  }
}

export interface DeliveryListForWebhookResponse {
  items: Array<DeliveryListForWebhookResponse.Item>;

  pagination: Shared.Pagination;
}

export namespace DeliveryListForWebhookResponse {
  export interface Item {
    id: string;

    attempts: number;

    completedAt: string | null;

    createdAt: string;

    durationMs: number | null;

    endpointId: string;

    eventId: string;

    eventType: string;

    isTest: boolean;

    lastError: string | null;

    lastStatusCode: number | null;

    occurredAt: string;

    source: string;

    status: 'pending' | 'success' | 'skipped' | 'dead';
  }
}

export interface DeliveryRetrieveAttemptsResponse {
  data: DeliveryRetrieveAttemptsResponse.Data;
}

export namespace DeliveryRetrieveAttemptsResponse {
  export interface Data {
    id: string;

    attempts: Array<Data.Attempt>;

    completedAt: string | null;

    createdAt: string;

    durationMs: number | null;

    endpointId: string;

    eventId: string;

    eventType: string;

    isTest: boolean;

    lastError: string | null;

    lastStatusCode: number | null;

    occurredAt: string;

    source: string;

    status: 'pending' | 'success' | 'skipped' | 'dead';
  }

  export namespace Data {
    export interface Attempt {
      attemptNo: number;

      durationMs: number | null;

      error: string | null;

      requestBody: string | null;

      requestHeaders: { [key: string]: string } | null;

      requestMethod: string;

      requestUrl: string;

      responseHeaders: { [key: string]: string } | null;

      responseSnippet: string | null;

      responseStatus: number | null;

      sentAt: string;

      signed: boolean;
    }
  }
}

export interface DeliveryStatsResponse {
  data: DeliveryStatsResponse.Data;
}

export namespace DeliveryStatsResponse {
  export interface Data {
    byStatus: Data.ByStatus;

    successRate: number | null;

    total: number;
  }

  export namespace Data {
    export interface ByStatus {
      dead: number;

      pending: number;

      skipped: number;

      success: number;
    }
  }
}

export interface DeliveryListParams {
  page?: number;

  pageSize?: number;

  since?: string;

  status?: 'pending' | 'success' | 'skipped' | 'dead';
}

export interface DeliveryListForWebhookParams {
  page?: number;

  pageSize?: number;
}

export interface DeliveryRetrieveAttemptsParams {
  id: string;
}

export interface DeliveryStatsParams {
  since?: string;
}

export declare namespace Deliveries {
  export {
    type DeliveryListResponse as DeliveryListResponse,
    type DeliveryListForWebhookResponse as DeliveryListForWebhookResponse,
    type DeliveryRetrieveAttemptsResponse as DeliveryRetrieveAttemptsResponse,
    type DeliveryStatsResponse as DeliveryStatsResponse,
    type DeliveryListParams as DeliveryListParams,
    type DeliveryListForWebhookParams as DeliveryListForWebhookParams,
    type DeliveryRetrieveAttemptsParams as DeliveryRetrieveAttemptsParams,
    type DeliveryStatsParams as DeliveryStatsParams,
  };
}
