// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as DeliveriesAPI from './deliveries';
import {
  Deliveries,
  DeliveryListForWebhookParams,
  DeliveryListForWebhookResponse,
  DeliveryListParams,
  DeliveryListResponse,
  DeliveryRetrieveAttemptsParams,
  DeliveryRetrieveAttemptsResponse,
  DeliveryStatsParams,
  DeliveryStatsResponse,
} from './deliveries';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Webhooks extends APIResource {
  deliveries: DeliveriesAPI.Deliveries = new DeliveriesAPI.Deliveries(this._client);

  /**
   * Register a webhook subscription
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.create({
   *   url: 'https://example.com/webhooks/droidrun',
   * });
   * ```
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<WebhookCreateResponse> {
    return this._client.post('/webhooks', { body, ...options });
  }

  /**
   * Get a webhook subscription
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.retrieve(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WebhookRetrieveResponse> {
    return this._client.get(path`/webhooks/${id}`, options);
  }

  /**
   * Update a webhook subscription
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.update(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  update(
    id: string,
    body: WebhookUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookUpdateResponse> {
    return this._client.patch(path`/webhooks/${id}`, { body, ...options });
  }

  /**
   * List your webhook subscriptions
   *
   * @example
   * ```ts
   * const webhooks = await client.webhooks.list();
   * ```
   */
  list(
    query: WebhookListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookListResponse> {
    return this._client.get('/webhooks', { query, ...options });
  }

  /**
   * Delete a webhook subscription
   *
   * @example
   * ```ts
   * await client.webhooks.delete(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/webhooks/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List subscribable event types per source
   *
   * @example
   * ```ts
   * const response = await client.webhooks.eventTypes();
   * ```
   */
  eventTypes(options?: RequestOptions): APIPromise<WebhookEventTypesResponse> {
    return this._client.get('/event-types', options);
  }

  /**
   * Rotate the signing secret (returned once)
   *
   * @example
   * ```ts
   * const response = await client.webhooks.rotateSecret(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  rotateSecret(id: string, options?: RequestOptions): APIPromise<WebhookRotateSecretResponse> {
    return this._client.post(path`/webhooks/${id}/rotate-secret`, options);
  }

  /**
   * Send a one-shot test delivery
   *
   * @example
   * ```ts
   * const response = await client.webhooks.testDelivery(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  testDelivery(id: string, options?: RequestOptions): APIPromise<WebhookTestDeliveryResponse> {
    return this._client.post(path`/webhooks/${id}/test`, options);
  }
}

export interface WebhookCreateResponse {
  data: WebhookCreateResponse.Data;
}

export namespace WebhookCreateResponse {
  export interface Data {
    id: string;

    blockedAt: string | null;

    blockedReason: string | null;

    createdAt: string;

    description: string | null;

    eventTypes: Array<string>;

    /**
     * System-observed delivery health. `blocked` endpoints are auto-disabled after
     * sustained failure; PATCH state=ACTIVE to re-enable.
     */
    health: 'healthy' | 'failing' | 'blocked';

    /**
     * Signing secret — shown only once. Store it now.
     */
    secret: string;

    signingEnabled: boolean;

    state: 'ACTIVE' | 'DISABLED' | 'DELETED';

    updatedAt: string;

    url: string;
  }
}

export interface WebhookRetrieveResponse {
  data: WebhookRetrieveResponse.Data;
}

export namespace WebhookRetrieveResponse {
  export interface Data {
    id: string;

    blockedAt: string | null;

    blockedReason: string | null;

    createdAt: string;

    description: string | null;

    eventTypes: Array<string>;

    /**
     * System-observed delivery health. `blocked` endpoints are auto-disabled after
     * sustained failure; PATCH state=ACTIVE to re-enable.
     */
    health: 'healthy' | 'failing' | 'blocked';

    signingEnabled: boolean;

    state: 'ACTIVE' | 'DISABLED' | 'DELETED';

    updatedAt: string;

    url: string;
  }
}

export interface WebhookUpdateResponse {
  data: WebhookUpdateResponse.Data;
}

export namespace WebhookUpdateResponse {
  export interface Data {
    id: string;

    blockedAt: string | null;

    blockedReason: string | null;

    createdAt: string;

    description: string | null;

    eventTypes: Array<string>;

    /**
     * System-observed delivery health. `blocked` endpoints are auto-disabled after
     * sustained failure; PATCH state=ACTIVE to re-enable.
     */
    health: 'healthy' | 'failing' | 'blocked';

    signingEnabled: boolean;

    state: 'ACTIVE' | 'DISABLED' | 'DELETED';

    updatedAt: string;

    url: string;
  }
}

export interface WebhookListResponse {
  counts: WebhookListResponse.Counts;

  items: Array<WebhookListResponse.Item>;

  pagination: Shared.Pagination;
}

export namespace WebhookListResponse {
  export interface Counts {
    active: number;

    blocked: number;

    disabled: number;

    failing: number;

    total: number;
  }

  export interface Item {
    id: string;

    blockedAt: string | null;

    blockedReason: string | null;

    createdAt: string;

    description: string | null;

    eventTypes: Array<string>;

    /**
     * System-observed delivery health. `blocked` endpoints are auto-disabled after
     * sustained failure; PATCH state=ACTIVE to re-enable.
     */
    health: 'healthy' | 'failing' | 'blocked';

    signingEnabled: boolean;

    state: 'ACTIVE' | 'DISABLED' | 'DELETED';

    updatedAt: string;

    url: string;
  }
}

export interface WebhookEventTypesResponse {
  data: WebhookEventTypesResponse.Data;
}

export namespace WebhookEventTypesResponse {
  export interface Data {
    schemaVersion: number;

    sources: Array<Data.Source>;
  }

  export namespace Data {
    export interface Source {
      events: Array<Source.Event>;

      source: string;
    }

    export namespace Source {
      export interface Event {
        description: string;

        type: string;
      }
    }
  }
}

export interface WebhookRotateSecretResponse {
  data: WebhookRotateSecretResponse.Data;
}

export namespace WebhookRotateSecretResponse {
  export interface Data {
    id: string;

    blockedAt: string | null;

    blockedReason: string | null;

    createdAt: string;

    description: string | null;

    eventTypes: Array<string>;

    /**
     * System-observed delivery health. `blocked` endpoints are auto-disabled after
     * sustained failure; PATCH state=ACTIVE to re-enable.
     */
    health: 'healthy' | 'failing' | 'blocked';

    /**
     * Signing secret — shown only once. Store it now.
     */
    secret: string;

    signingEnabled: boolean;

    state: 'ACTIVE' | 'DISABLED' | 'DELETED';

    updatedAt: string;

    url: string;
  }
}

export interface WebhookTestDeliveryResponse {
  data: WebhookTestDeliveryResponse.Data;
}

export namespace WebhookTestDeliveryResponse {
  export interface Data {
    error: string | null;

    statusCode: number | null;

    success: boolean;
  }
}

export interface WebhookCreateParams {
  url: string;

  description?: string;

  eventTypes?: Array<string>;
}

export interface WebhookUpdateParams {
  description?: string | null;

  eventTypes?: Array<string>;

  state?: 'ACTIVE' | 'DISABLED';
}

export interface WebhookListParams {
  page?: number;

  pageSize?: number;

  status?: 'active' | 'failing' | 'blocked' | 'disabled';
}

Webhooks.Deliveries = Deliveries;

export declare namespace Webhooks {
  export {
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookRetrieveResponse as WebhookRetrieveResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookEventTypesResponse as WebhookEventTypesResponse,
    type WebhookRotateSecretResponse as WebhookRotateSecretResponse,
    type WebhookTestDeliveryResponse as WebhookTestDeliveryResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
  };

  export {
    Deliveries as Deliveries,
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
