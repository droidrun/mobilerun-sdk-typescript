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
import * as IntegrationsAPI from './integrations';
import {
  IntegrationListResponse,
  IntegrationListTargetsParams,
  IntegrationListTargetsResponse,
  Integrations,
} from './integrations';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Webhooks extends APIResource {
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
  deliveries: DeliveriesAPI.Deliveries = new DeliveriesAPI.Deliveries(this._client);

  /**
   * Creates a webhook subscription and an optional list of event types to subscribe
   * to (defaults to all when omitted). `kind: "http"` (the default) delivers signed
   * JSON to a URL; the response includes the generated signing secret, which is
   * returned only once at creation time and cannot be retrieved later.
   * `kind: "integration"` posts each event as a message into a connected integration
   * target (e.g. a Slack channel): pick the `capability` from
   * `GET /webhooks/integrations` and the `args` from
   * `GET /webhooks/integrations/{capabilityId}/targets`. Integration webhooks have
   * no signing secret.
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
   * Returns a single webhook subscription by id, including its URL (or integration
   * target), subscribed event types, state, and system-observed delivery health. The
   * signing secret is never included.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WebhookRetrieveResponse> {
    return this._client.get(path`/webhooks/${id}`, options);
  }

  /**
   * Updates a webhook subscription. Any combination of the subscribed event types,
   * state (ACTIVE or DISABLED), and description may be changed, and at least one
   * field must be supplied. Setting state to ACTIVE re-enables a subscription that
   * was auto-blocked after sustained delivery failures. The URL or integration
   * target cannot be changed; delete and recreate the webhook instead.
   */
  update(
    id: string,
    body: WebhookUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookUpdateResponse> {
    return this._client.patch(path`/webhooks/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of your webhook subscriptions, optionally filtered by
   * status (active, failing, blocked, or disabled), by `search` (a case-insensitive
   * substring match against the URL or description), and/or by delivery `kind`. The
   * response also includes per-status counts across all of your subscriptions (of
   * the requested `kind`, if given; the other filters do not apply to the counts).
   */
  list(
    query: WebhookListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookListResponse> {
    return this._client.get('/webhooks', { query, ...options });
  }

  /**
   * Deletes a webhook subscription so it stops receiving deliveries. Returns 204 No
   * Content on success.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/webhooks/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Generates a new signing secret for the webhook subscription and returns it once
   * in the response. The previous secret is replaced immediately, so any signature
   * verification on your endpoint must be updated to use the new value. Only `http`
   * webhooks have a signing secret; for `integration` webhooks this returns 400.
   */
  rotateSecret(id: string, options?: RequestOptions): APIPromise<WebhookRotateSecretResponse> {
    return this._client.post(path`/webhooks/${id}/rotate-secret`, options);
  }

  /**
   * Sends a single test payload to the webhook subscription URL (or a test message
   * to its integration target) to verify connectivity. The response reports whether
   * the attempt succeeded along with the returned HTTP status code or error, if any.
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

    /**
     * Why the webhook was blocked, e.g. `integration_disconnected` (reconnect the
     * integration) or `integration_target_invalid` (the channel is gone or not
     * allowed).
     */
    blockedReason: string | null;

    createdAt: string;

    /**
     * Id of the actor who created this endpoint. Null when no creator was recorded.
     */
    createdBy: string | null;

    description: string | null;

    eventTypes: Array<string>;

    /**
     * System-observed delivery health. `blocked` endpoints are auto-disabled after
     * sustained failure; PATCH state=ACTIVE to re-enable.
     */
    health: 'healthy' | 'failing' | 'blocked';

    /**
     * Integration target; null for `http` webhooks.
     */
    integration: Data.Integration | null;

    /**
     * `http` posts signed JSON to `url`; `integration` posts a message through a
     * connected integration (e.g. a Slack channel).
     */
    kind: 'http' | 'integration';

    /**
     * Always false for `integration` webhooks.
     */
    signingEnabled: boolean;

    state: 'ACTIVE' | 'DISABLED' | 'DELETED';

    updatedAt: string;

    /**
     * Delivery URL; null for `integration` webhooks.
     */
    url: string | null;

    /**
     * Signing secret for `http` webhooks — shown only once. Store it now. Absent for
     * `integration` webhooks.
     */
    secret?: string;
  }

  export namespace Data {
    /**
     * Integration target; null for `http` webhooks.
     */
    export interface Integration {
      args: { [key: string]: unknown };

      capability: Integration.Capability;

      /**
       * Target name at creation time, e.g. `#ops`.
       */
      label: string;
    }

    export namespace Integration {
      export interface Capability {
        id: string;

        revision: number;
      }
    }
  }
}

export interface WebhookRetrieveResponse {
  data: WebhookRetrieveResponse.Data;
}

export namespace WebhookRetrieveResponse {
  export interface Data {
    id: string;

    blockedAt: string | null;

    /**
     * Why the webhook was blocked, e.g. `integration_disconnected` (reconnect the
     * integration) or `integration_target_invalid` (the channel is gone or not
     * allowed).
     */
    blockedReason: string | null;

    createdAt: string;

    /**
     * Id of the actor who created this endpoint. Null when no creator was recorded.
     */
    createdBy: string | null;

    description: string | null;

    eventTypes: Array<string>;

    /**
     * System-observed delivery health. `blocked` endpoints are auto-disabled after
     * sustained failure; PATCH state=ACTIVE to re-enable.
     */
    health: 'healthy' | 'failing' | 'blocked';

    /**
     * Integration target; null for `http` webhooks.
     */
    integration: Data.Integration | null;

    /**
     * `http` posts signed JSON to `url`; `integration` posts a message through a
     * connected integration (e.g. a Slack channel).
     */
    kind: 'http' | 'integration';

    /**
     * Always false for `integration` webhooks.
     */
    signingEnabled: boolean;

    state: 'ACTIVE' | 'DISABLED' | 'DELETED';

    updatedAt: string;

    /**
     * Delivery URL; null for `integration` webhooks.
     */
    url: string | null;
  }

  export namespace Data {
    /**
     * Integration target; null for `http` webhooks.
     */
    export interface Integration {
      args: { [key: string]: unknown };

      capability: Integration.Capability;

      /**
       * Target name at creation time, e.g. `#ops`.
       */
      label: string;
    }

    export namespace Integration {
      export interface Capability {
        id: string;

        revision: number;
      }
    }
  }
}

export interface WebhookUpdateResponse {
  data: WebhookUpdateResponse.Data;
}

export namespace WebhookUpdateResponse {
  export interface Data {
    id: string;

    blockedAt: string | null;

    /**
     * Why the webhook was blocked, e.g. `integration_disconnected` (reconnect the
     * integration) or `integration_target_invalid` (the channel is gone or not
     * allowed).
     */
    blockedReason: string | null;

    createdAt: string;

    /**
     * Id of the actor who created this endpoint. Null when no creator was recorded.
     */
    createdBy: string | null;

    description: string | null;

    eventTypes: Array<string>;

    /**
     * System-observed delivery health. `blocked` endpoints are auto-disabled after
     * sustained failure; PATCH state=ACTIVE to re-enable.
     */
    health: 'healthy' | 'failing' | 'blocked';

    /**
     * Integration target; null for `http` webhooks.
     */
    integration: Data.Integration | null;

    /**
     * `http` posts signed JSON to `url`; `integration` posts a message through a
     * connected integration (e.g. a Slack channel).
     */
    kind: 'http' | 'integration';

    /**
     * Always false for `integration` webhooks.
     */
    signingEnabled: boolean;

    state: 'ACTIVE' | 'DISABLED' | 'DELETED';

    updatedAt: string;

    /**
     * Delivery URL; null for `integration` webhooks.
     */
    url: string | null;
  }

  export namespace Data {
    /**
     * Integration target; null for `http` webhooks.
     */
    export interface Integration {
      args: { [key: string]: unknown };

      capability: Integration.Capability;

      /**
       * Target name at creation time, e.g. `#ops`.
       */
      label: string;
    }

    export namespace Integration {
      export interface Capability {
        id: string;

        revision: number;
      }
    }
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

    /**
     * Why the webhook was blocked, e.g. `integration_disconnected` (reconnect the
     * integration) or `integration_target_invalid` (the channel is gone or not
     * allowed).
     */
    blockedReason: string | null;

    createdAt: string;

    /**
     * Id of the actor who created this endpoint. Null when no creator was recorded.
     */
    createdBy: string | null;

    description: string | null;

    eventTypes: Array<string>;

    /**
     * System-observed delivery health. `blocked` endpoints are auto-disabled after
     * sustained failure; PATCH state=ACTIVE to re-enable.
     */
    health: 'healthy' | 'failing' | 'blocked';

    /**
     * Integration target; null for `http` webhooks.
     */
    integration: Item.Integration | null;

    /**
     * `http` posts signed JSON to `url`; `integration` posts a message through a
     * connected integration (e.g. a Slack channel).
     */
    kind: 'http' | 'integration';

    /**
     * Always false for `integration` webhooks.
     */
    signingEnabled: boolean;

    state: 'ACTIVE' | 'DISABLED' | 'DELETED';

    updatedAt: string;

    /**
     * Delivery URL; null for `integration` webhooks.
     */
    url: string | null;
  }

  export namespace Item {
    /**
     * Integration target; null for `http` webhooks.
     */
    export interface Integration {
      args: { [key: string]: unknown };

      capability: Integration.Capability;

      /**
       * Target name at creation time, e.g. `#ops`.
       */
      label: string;
    }

    export namespace Integration {
      export interface Capability {
        id: string;

        revision: number;
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

    /**
     * Why the webhook was blocked, e.g. `integration_disconnected` (reconnect the
     * integration) or `integration_target_invalid` (the channel is gone or not
     * allowed).
     */
    blockedReason: string | null;

    createdAt: string;

    /**
     * Id of the actor who created this endpoint. Null when no creator was recorded.
     */
    createdBy: string | null;

    description: string | null;

    eventTypes: Array<string>;

    /**
     * System-observed delivery health. `blocked` endpoints are auto-disabled after
     * sustained failure; PATCH state=ACTIVE to re-enable.
     */
    health: 'healthy' | 'failing' | 'blocked';

    /**
     * Integration target; null for `http` webhooks.
     */
    integration: Data.Integration | null;

    /**
     * `http` posts signed JSON to `url`; `integration` posts a message through a
     * connected integration (e.g. a Slack channel).
     */
    kind: 'http' | 'integration';

    /**
     * Signing secret — shown only once. Store it now.
     */
    secret: string;

    /**
     * Always false for `integration` webhooks.
     */
    signingEnabled: boolean;

    state: 'ACTIVE' | 'DISABLED' | 'DELETED';

    updatedAt: string;

    /**
     * Delivery URL; null for `integration` webhooks.
     */
    url: string | null;
  }

  export namespace Data {
    /**
     * Integration target; null for `http` webhooks.
     */
    export interface Integration {
      args: { [key: string]: unknown };

      capability: Integration.Capability;

      /**
       * Target name at creation time, e.g. `#ops`.
       */
      label: string;
    }

    export namespace Integration {
      export interface Capability {
        id: string;

        revision: number;
      }
    }
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

export type WebhookCreateParams = WebhookCreateParams.Variant0 | WebhookCreateParams.Variant1;

export declare namespace WebhookCreateParams {
  export interface Variant0 {
    url: string;

    description?: string;

    eventTypes?: Array<string>;

    /**
     * Delivery transport. Omitted ⇒ `http`.
     */
    kind?: 'http';
  }

  export interface Variant1 {
    /**
     * Target args exactly as returned by
     * `GET /webhooks/integrations/{capabilityId}/targets`.
     */
    args: { [key: string]: unknown };

    capability: Variant1.Capability;

    kind: 'integration';

    description?: string;

    eventTypes?: Array<string>;
  }

  export namespace Variant1 {
    export interface Capability {
      id: string;

      revision: number;
    }
  }
}

export interface WebhookUpdateParams {
  description?: string | null;

  eventTypes?: Array<string>;

  state?: 'ACTIVE' | 'DISABLED';
}

export interface WebhookListParams {
  /**
   * Only include webhooks created by this actor id. Mutually exclusive with `mine`.
   */
  createdBy?: string;

  /**
   * Only include webhooks of this delivery kind.
   */
  kind?: 'http' | 'integration';

  /**
   * When true, only include webhooks created by you (not just owned by your org).
   */
  mine?: 'true' | 'false';

  page?: number;

  pageSize?: number;

  /**
   * Case-insensitive substring match against the URL or description.
   */
  search?: string;

  status?: 'active' | 'failing' | 'blocked' | 'disabled';
}

Webhooks.Integrations = Integrations;
Webhooks.Deliveries = Deliveries;

export declare namespace Webhooks {
  export {
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookRetrieveResponse as WebhookRetrieveResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookRotateSecretResponse as WebhookRotateSecretResponse,
    type WebhookTestDeliveryResponse as WebhookTestDeliveryResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
  };

  export {
    Integrations as Integrations,
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationListTargetsResponse as IntegrationListTargetsResponse,
    type IntegrationListTargetsParams as IntegrationListTargetsParams,
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
