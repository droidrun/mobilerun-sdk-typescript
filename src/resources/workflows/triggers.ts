// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Triggers extends APIResource {
  /**
   * Create a trigger with an activation type of `event`, `schedule`, or `custom`.
   * Each type requires its own fields (e.g. `eventType` and optional `conditions`
   * for events, `scheduleRule` and `timezone` for schedules, `customPayloadSchema`
   * for custom triggers); mismatched fields are rejected.
   */
  create(body: TriggerCreateParams, options?: RequestOptions): APIPromise<TriggerCreateResponse> {
    return this._client.post('/triggers', { body, ...options });
  }

  /**
   * Fetch a single trigger by its ID, including its activation type and
   * type-specific configuration. Returns 404 if no trigger matches.
   */
  retrieve(triggerID: string, options?: RequestOptions): APIPromise<TriggerRetrieveResponse> {
    return this._client.get(path`/triggers/${triggerID}`, options);
  }

  /**
   * Partially update a trigger; all fields are optional. When `activation` is
   * changed, the type-specific field rules are re-validated. Returns 404 if the
   * trigger does not exist.
   */
  update(
    triggerID: string,
    body: TriggerUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TriggerUpdateResponse> {
    return this._client.patch(path`/triggers/${triggerID}`, { body, ...options });
  }

  /**
   * Return a paginated list of triggers. Supports filtering by `activation` and
   * `eventType`, free-text `search`, and ordering by name, createdAt, or updatedAt.
   */
  list(
    query: TriggerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TriggerListResponse> {
    return this._client.get('/triggers', { query, ...options });
  }

  /**
   * Delete a trigger by its ID. Returns 404 if no trigger matches.
   */
  delete(triggerID: string, options?: RequestOptions): APIPromise<TriggerDeleteResponse> {
    return this._client.delete(path`/triggers/${triggerID}`, options);
  }

  /**
   * Invoke a custom trigger directly with an arbitrary JSON payload.
   *
   * Fan-out: a trigger may be referenced by multiple flows (workflows). Firing it
   * enqueues one execution per enabled, non-deleted flow attached to this trigger,
   * each receiving the same payload. The `enqueuedCount` in the response reports how
   * many were enqueued (0 if no flows are attached, or if all matching flows are
   * gated by a cooldown).
   *
   * Payload validation:
   *
   * - If the trigger has a `customPayloadSchema`, the payload is validated against
   *   it (JSON Schema via AJV).
   * - If no schema is configured, the payload only needs to be a JSON object — any
   *   keys and values are accepted.
   *
   * Only triggers with `activation = "custom"` can be fired through this endpoint;
   * event and schedule triggers return 409.
   */
  fire(
    triggerID: string,
    body: TriggerFireParams,
    options?: RequestOptions,
  ): APIPromise<TriggerFireResponse> {
    return this._client.post(path`/triggers/${triggerID}/fire`, { body, ...options });
  }
}

export interface TriggerCreateResponse {
  data: TriggerCreateResponse.Data;
}

export namespace TriggerCreateResponse {
  export interface Data {
    id: string;

    activation: 'event' | 'schedule' | 'custom';

    createdAt: string | null;

    customPayloadSchema: { [key: string]: unknown } | null;

    description: string | null;

    eventType: string | null;

    name: string;

    scheduleRule: Data.ScheduleRule;

    timezone: string | null;

    updatedAt: string | null;

    userId: string;

    conditions?: unknown;

    nextFireTime?: string | null;
  }

  export namespace Data {
    export interface ScheduleRule {
      type: 'once' | 'cron' | 'recurring';

      /**
       * ISO 8601 datetime (for type=once)
       */
      dateTime?: string;

      /**
       * Cron expression (for type=cron)
       */
      expression?: string;

      /**
       * RRULE string (for type=recurring)
       */
      rrule?: string;
    }
  }
}

export interface TriggerRetrieveResponse {
  data: TriggerRetrieveResponse.Data;
}

export namespace TriggerRetrieveResponse {
  export interface Data {
    id: string;

    activation: 'event' | 'schedule' | 'custom';

    createdAt: string | null;

    customPayloadSchema: { [key: string]: unknown } | null;

    description: string | null;

    eventType: string | null;

    name: string;

    scheduleRule: unknown;

    timezone: string | null;

    updatedAt: string | null;

    userId: string;

    conditions?: unknown;

    nextFireTime?: string | null;
  }
}

export interface TriggerUpdateResponse {
  data: TriggerUpdateResponse.Data;
}

export namespace TriggerUpdateResponse {
  export interface Data {
    id: string;

    activation: 'event' | 'schedule' | 'custom';

    createdAt: string | null;

    customPayloadSchema: { [key: string]: unknown } | null;

    description: string | null;

    eventType: string | null;

    name: string;

    scheduleRule: unknown;

    timezone: string | null;

    updatedAt: string | null;

    userId: string;

    conditions?: unknown;

    nextFireTime?: string | null;
  }
}

export interface TriggerListResponse {
  items: Array<TriggerListResponse.Item>;

  pagination: Shared.Pagination;
}

export namespace TriggerListResponse {
  export interface Item {
    id: string;

    activation: 'event' | 'schedule' | 'custom';

    createdAt: string | null;

    customPayloadSchema: { [key: string]: unknown } | null;

    description: string | null;

    eventType: string | null;

    name: string;

    scheduleRule: unknown;

    timezone: string | null;

    updatedAt: string | null;

    userId: string;

    conditions?: unknown;

    nextFireTime?: string | null;
  }
}

export interface TriggerDeleteResponse {
  message: string;
}

export interface TriggerFireResponse {
  /**
   * Number of flow executions enqueued. May be 0 if no flows are attached to this
   * trigger, or if all attached flows are currently in cooldown.
   */
  enqueuedCount: number;

  /**
   * Unique ID for this fire invocation. Job IDs in the execution queue are derived
   * from it (one per enqueued flow).
   */
  invocationId: string;
}

export interface TriggerCreateParams {
  activation: 'event' | 'schedule' | 'custom';

  name: string;

  conditions?: TriggerCreateParams.Conditions;

  /**
   * Optional JSON Schema for validating payloads sent to this custom trigger
   */
  customPayloadSchema?: { [key: string]: unknown };

  description?: string;

  eventType?: string;

  scheduleRule?: TriggerCreateParams.ScheduleRule;

  timezone?: string;
}

export namespace TriggerCreateParams {
  export interface Conditions {
    all?: Array<unknown>;

    any?: Array<unknown>;
  }

  export interface ScheduleRule {
    type: 'once' | 'cron' | 'recurring';

    /**
     * ISO 8601 datetime (for type=once)
     */
    dateTime?: string;

    /**
     * Cron expression (for type=cron)
     */
    expression?: string;

    /**
     * RRULE string (for type=recurring)
     */
    rrule?: string;
  }
}

export interface TriggerUpdateParams {
  activation?: 'event' | 'schedule' | 'custom';

  conditions?: TriggerUpdateParams.Conditions;

  customPayloadSchema?: { [key: string]: unknown };

  description?: string;

  eventType?: string;

  name?: string;

  scheduleRule?: TriggerUpdateParams.ScheduleRule;

  timezone?: string | null;
}

export namespace TriggerUpdateParams {
  export interface Conditions {
    all?: Array<unknown>;

    any?: Array<unknown>;
  }

  export interface ScheduleRule {
    type: 'once' | 'cron' | 'recurring';

    /**
     * ISO 8601 datetime (for type=once)
     */
    dateTime?: string;

    /**
     * Cron expression (for type=cron)
     */
    expression?: string;

    /**
     * RRULE string (for type=recurring)
     */
    rrule?: string;
  }
}

export interface TriggerListParams {
  activation?: 'event' | 'schedule' | 'custom';

  eventType?: string;

  orderBy?: 'name' | 'createdAt' | 'updatedAt';

  orderByDirection?: 'asc' | 'desc';

  page?: number;

  pageSize?: number;

  search?: string;
}

export interface TriggerFireParams {
  /**
   * Arbitrary JSON object forwarded to every flow attached to this trigger.
   * Validated against the trigger's customPayloadSchema when one is configured;
   * otherwise only "must be a JSON object" is enforced.
   */
  payload: { [key: string]: unknown };
}

export declare namespace Triggers {
  export {
    type TriggerCreateResponse as TriggerCreateResponse,
    type TriggerRetrieveResponse as TriggerRetrieveResponse,
    type TriggerUpdateResponse as TriggerUpdateResponse,
    type TriggerListResponse as TriggerListResponse,
    type TriggerDeleteResponse as TriggerDeleteResponse,
    type TriggerFireResponse as TriggerFireResponse,
    type TriggerCreateParams as TriggerCreateParams,
    type TriggerUpdateParams as TriggerUpdateParams,
    type TriggerListParams as TriggerListParams,
    type TriggerFireParams as TriggerFireParams,
  };
}
