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
   * for custom or schedule triggers); mismatched fields are rejected. Schedule
   * triggers may store an optional JSON object `payload` (at most 1 MiB); it
   * requires `customPayloadSchema`, is validated against it (422 on mismatch), and
   * is available as `event.payload` on every scheduled, manual, or verification run.
   * When a schema is configured, omitted payload values are validated as an empty
   * object.
   *
   * Supports an optional `Idempotency-Key` header (1-255 printable ASCII
   * characters). Replays with the same key and an identical body return the original
   * 201; a changed body under the same key returns 422 `idempotency_key_reused`.
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
   * changed, the type-specific field rules are re-validated. Schedule triggers
   * accept stored `payload` values (at most 1 MiB); null clears them. The resulting
   * payload must match customPayloadSchema (422 on mismatch, including schema
   * changes that invalidate stored values). Absent or null values are validated as
   * an empty object when a schema is configured. Changes apply from the next run.
   * Returns 404 if the trigger does not exist.
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
   *   it (JSON Schema).
   * - If no schema is configured, the payload only needs to be a JSON object — any
   *   keys and values are accepted.
   *
   * Only triggers with `activation = "custom"` can be fired through this endpoint;
   * event and schedule triggers return 409.
   *
   * Supports an optional `Idempotency-Key` header (1-255 printable ASCII
   * characters), which maps to the derived `invocationId` used for fan-out
   * deduplication. The payload is bound to the key on the first accepted fire,
   * before fan-out. A repeat with the same key and an identical payload returns 202
   * with `Idempotent-Replayed: true` (`deduplicated: true` when flows were skipped;
   * `enqueuedCount` counts only executions enqueued by that call); a changed payload
   * under the same key returns 422 `idempotency_key_reused`.
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

    createdBy: string | null;

    customPayloadSchema: { [key: string]: unknown } | null;

    description: string | null;

    eventType: string | null;

    name: string;

    ownerId: string;

    payload: { [key: string]: unknown } | null;

    scheduleRule: Data.ScheduleRule;

    timezone: string | null;

    updatedAt: string | null;

    /**
     * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
     */
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
       * Optional per-occurrence random window around the nominal schedule time
       */
      jitter?: ScheduleRule.Jitter;

      /**
       * RRULE string (for type=recurring)
       */
      rrule?: string;
    }

    export namespace ScheduleRule {
      /**
       * Optional per-occurrence random window around the nominal schedule time
       */
      export interface Jitter {
        afterMinutes?: number;

        beforeMinutes?: number;
      }
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

    createdBy: string | null;

    customPayloadSchema: { [key: string]: unknown } | null;

    description: string | null;

    eventType: string | null;

    name: string;

    ownerId: string;

    payload: { [key: string]: unknown } | null;

    scheduleRule: Data.ScheduleRule;

    timezone: string | null;

    updatedAt: string | null;

    /**
     * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
     */
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
       * Optional per-occurrence random window around the nominal schedule time
       */
      jitter?: ScheduleRule.Jitter;

      /**
       * RRULE string (for type=recurring)
       */
      rrule?: string;
    }

    export namespace ScheduleRule {
      /**
       * Optional per-occurrence random window around the nominal schedule time
       */
      export interface Jitter {
        afterMinutes?: number;

        beforeMinutes?: number;
      }
    }
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

    createdBy: string | null;

    customPayloadSchema: { [key: string]: unknown } | null;

    description: string | null;

    eventType: string | null;

    name: string;

    ownerId: string;

    payload: { [key: string]: unknown } | null;

    scheduleRule: Data.ScheduleRule;

    timezone: string | null;

    updatedAt: string | null;

    /**
     * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
     */
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
       * Optional per-occurrence random window around the nominal schedule time
       */
      jitter?: ScheduleRule.Jitter;

      /**
       * RRULE string (for type=recurring)
       */
      rrule?: string;
    }

    export namespace ScheduleRule {
      /**
       * Optional per-occurrence random window around the nominal schedule time
       */
      export interface Jitter {
        afterMinutes?: number;

        beforeMinutes?: number;
      }
    }
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

    createdBy: string | null;

    customPayloadSchema: { [key: string]: unknown } | null;

    description: string | null;

    eventType: string | null;

    name: string;

    ownerId: string;

    payload: { [key: string]: unknown } | null;

    scheduleRule: Item.ScheduleRule;

    timezone: string | null;

    updatedAt: string | null;

    /**
     * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
     */
    userId: string;

    conditions?: unknown;

    nextFireTime?: string | null;
  }

  export namespace Item {
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
       * Optional per-occurrence random window around the nominal schedule time
       */
      jitter?: ScheduleRule.Jitter;

      /**
       * RRULE string (for type=recurring)
       */
      rrule?: string;
    }

    export namespace ScheduleRule {
      /**
       * Optional per-occurrence random window around the nominal schedule time
       */
      export interface Jitter {
        afterMinutes?: number;

        beforeMinutes?: number;
      }
    }
  }
}

export interface TriggerDeleteResponse {
  message: string;
}

export interface TriggerFireResponse {
  /**
   * True when at least one attached flow was skipped because it already had an
   * execution for this (flow, invocationId). Only ever true when the request carried
   * an `Idempotency-Key`.
   */
  deduplicated: boolean;

  /**
   * Number of flow executions enqueued. May be 0 if no flows are attached to this
   * trigger, if all attached flows are currently in cooldown, or if every attached
   * flow was deduplicated.
   */
  enqueuedCount: number;

  /**
   * Unique ID for this fire invocation (derived from the `Idempotency-Key` header
   * when one is sent, otherwise generated).
   */
  invocationId: string;
}

export interface TriggerCreateParams {
  activation: 'event' | 'schedule' | 'custom';

  name: string;

  conditions?: TriggerCreateParams.Conditions;

  /**
   * Optional JSON Schema for validating payloads for custom or schedule triggers
   */
  customPayloadSchema?: { [key: string]: unknown };

  description?: string;

  eventType?: string;

  /**
   * Stored input values for schedule triggers (maximum 1 MiB of JSON). Requires
   * customPayloadSchema; available as event.payload on every run.
   */
  payload?: { [key: string]: unknown };

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
     * Optional per-occurrence random window around the nominal schedule time
     */
    jitter?: ScheduleRule.Jitter;

    /**
     * RRULE string (for type=recurring)
     */
    rrule?: string;
  }

  export namespace ScheduleRule {
    /**
     * Optional per-occurrence random window around the nominal schedule time
     */
    export interface Jitter {
      afterMinutes?: number;

      beforeMinutes?: number;
    }
  }
}

export interface TriggerUpdateParams {
  activation?: 'event' | 'schedule' | 'custom';

  conditions?: TriggerUpdateParams.Conditions | null;

  /**
   * Optional JSON Schema for validating payloads for custom or schedule triggers
   */
  customPayloadSchema?: { [key: string]: unknown } | null;

  description?: string;

  eventType?: string;

  name?: string;

  /**
   * Stored schedule input values (maximum 1 MiB of JSON); null clears them. Requires
   * customPayloadSchema.
   */
  payload?: { [key: string]: unknown } | null;

  scheduleRule?: TriggerUpdateParams.ScheduleRule | null;

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
     * Optional per-occurrence random window around the nominal schedule time
     */
    jitter?: ScheduleRule.Jitter;

    /**
     * RRULE string (for type=recurring)
     */
    rrule?: string;
  }

  export namespace ScheduleRule {
    /**
     * Optional per-occurrence random window around the nominal schedule time
     */
    export interface Jitter {
      afterMinutes?: number;

      beforeMinutes?: number;
    }
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
