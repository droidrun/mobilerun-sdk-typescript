// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Deliveries extends APIResource {
  /**
   * Returns a paginated feed of webhook deliveries across all of your subscriptions,
   * with the originating endpoint URL included on each record. Results can be
   * filtered by delivery status (pending, success, skipped, or dead), by a `since`
   * timestamp, by `eventId` (exact match against the originating event id), and/or
   * by endpoint delivery `kind`.
   */
  list(
    query: DeliveryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeliveryListResponse> {
    return this._client.get('/webhooks/deliveries', { query, ...options });
  }

  /**
   * Returns a paginated list of deliveries for a single webhook subscription,
   * identified by its id. Each record reports the event, delivery status, attempt
   * count, and the last response code or error. Results can be filtered by `eventId`
   * (exact match against the originating event id).
   */
  listForWebhook(
    id: string,
    query: DeliveryListForWebhookParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeliveryListForWebhookResponse> {
    return this._client.get(path`/webhooks/${id}/deliveries`, { query, ...options });
  }

  /**
   * Returns a single delivery for a webhook subscription along with the full list of
   * captured attempt records. Each attempt includes the request URL, method, headers
   * and body, whether it was signed, and the response status, headers, and snippet.
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
   * Returns aggregate delivery statistics across all of your webhooks, including the
   * total count, a breakdown by status (pending, success, skipped, dead), and the
   * overall success rate. Optional `since` and endpoint delivery `kind` filters
   * narrow the reporting window.
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

    /**
     * Id of the parent endpoint's creator. Null when the endpoint row is gone or its
     * creator was never recorded.
     */
    createdBy: string | null;

    durationMs: number | null;

    endpointId: string;

    endpointKind: 'http' | 'integration';

    /**
     * Integration target label of the parent webhook (e.g. `#ops`); null for `http`
     * webhooks.
     */
    endpointLabel: string | null;

    /**
     * Delivery URL of the parent webhook; null for `integration` webhooks.
     */
    endpointUrl: string | null;

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

    /**
     * Id of the parent endpoint's creator. Null when the endpoint row is gone or its
     * creator was never recorded.
     */
    createdBy: string | null;

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

    /**
     * Id of the parent endpoint's creator. Null when the endpoint row is gone or its
     * creator was never recorded.
     */
    createdBy: string | null;

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
  /**
   * Exact text match against the originating event id.
   */
  eventId?: string;

  /**
   * Only include deliveries to endpoints of this kind.
   */
  kind?: 'http' | 'integration';

  page?: number;

  pageSize?: number;

  since?: string;

  status?: 'pending' | 'success' | 'skipped' | 'dead';
}

export interface DeliveryListForWebhookParams {
  /**
   * Exact text match against the originating event id.
   */
  eventId?: string;

  page?: number;

  pageSize?: number;
}

export interface DeliveryRetrieveAttemptsParams {
  id: string;
}

export interface DeliveryStatsParams {
  /**
   * Only include deliveries to endpoints of this kind.
   */
  kind?: 'http' | 'integration';

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
