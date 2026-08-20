// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Events extends APIResource {
  /**
   * Simulate an event against all configured flows. Returns which flows would match
   * and what actions would run, without storing the event or enqueuing jobs.
   */
  dryRun(body: EventDryRunParams, options?: RequestOptions): APIPromise<EventDryRunResponse> {
    return this._client.post('/events/dry-run', { body, ...options });
  }

  /**
   * Ingest an event for trigger evaluation. Returns immediately with 202 Accepted.
   */
  ingest(body: EventIngestParams, options?: RequestOptions): APIPromise<EventIngestResponse> {
    return this._client.post('/events/ingest', { body, ...options });
  }
}

export interface EventDryRunResponse {
  data: EventDryRunResponse.Data;
}

export namespace EventDryRunResponse {
  export interface Data {
    matchedFlows: Array<Data.MatchedFlow>;

    validation: Data.Validation;
  }

  export namespace Data {
    export interface MatchedFlow {
      actions: Array<MatchedFlow.Action>;

      flow: MatchedFlow.Flow;

      gates: MatchedFlow.Gates;

      trigger: MatchedFlow.Trigger;

      wouldFire: boolean;
    }

    export namespace MatchedFlow {
      export interface Action {
        continueOnError: boolean;

        method: string;

        name: string;

        service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks';

        /**
         * Nested child actions (loop/branch bodies), each the same shape as a
         * ResolvedAction.
         */
        children?: Array<unknown>;

        params?: { [key: string]: unknown };
      }

      export interface Flow {
        id: string;

        blockedAt: string | null;

        consecutiveFailures: number;

        cooldownScope: 'flow' | 'device';

        cooldownSeconds: number | null;

        createdAt: string | null;

        createdBy: string | null;

        description: string | null;

        deviceIds: Array<string>;

        enabled: boolean;

        healthMonitoringEnabled: boolean;

        lastFailureAt: string | null;

        lastFailureCode:
          | 'device_not_found'
          | 'permission_denied'
          | 'client_error'
          | 'transient'
          | 'logic'
          | 'invalid_config'
          | null;

        lastTriggeredAt: string | null;

        name: string;

        notifyOnFailure: boolean;

        notifyOnSuccess: boolean;

        notifyWebhookId: string | null;

        ownerId: string;

        selfHealingEnabled: boolean;

        selfHealingMaxAttempts: number;

        status: 'healthy' | 'failing' | 'blocked';

        /**
         * Template-resolver semantics this flow runs under (MVA-23). 1 = legacy
         * (missing/forbidden/null all resolve to ''). 2 = typed (missing/forbidden throw,
         * a whole-token null stays JSON null). Existing flows stay 1; new flows default
         * to 2.
         */
        templateResolutionVersion: number;

        triggerId: string;

        updatedAt: string | null;

        /**
         * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
         */
        userId: string;
      }

      export interface Gates {
        blocked: boolean;

        cooldownActive: boolean | null;

        deviceAttached: boolean;

        deviceIds: Array<string>;

        enabled: boolean;
      }

      export interface Trigger {
        id: string;

        activation: 'event' | 'schedule' | 'custom';

        createdAt: string | null;

        createdBy: string | null;

        customPayloadSchema: { [key: string]: unknown } | null;

        description: string | null;

        eventType: string | null;

        name: string;

        ownerId: string;

        scheduleRule: unknown;

        timezone: string | null;

        updatedAt: string | null;

        /**
         * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
         */
        userId: string;

        conditions?: unknown;

        nextFireTime?: string | null;
      }
    }

    export interface Validation {
      valid: boolean;

      errors?: Array<Validation.Error>;
    }

    export namespace Validation {
      export interface Error {
        field: string;

        message: string;
      }
    }
  }
}

export interface EventIngestResponse {
  eventId: string;
}

export interface EventDryRunParams {
  eventType: string;

  deviceId?: string;

  payload?: { [key: string]: unknown };
}

export interface EventIngestParams {
  eventType: string;

  deviceId?: string;

  payload?: { [key: string]: unknown };
}

export declare namespace Events {
  export {
    type EventDryRunResponse as EventDryRunResponse,
    type EventIngestResponse as EventIngestResponse,
    type EventDryRunParams as EventDryRunParams,
    type EventIngestParams as EventIngestParams,
  };
}
