// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as WorkflowsAPI from '../workflows';
import * as CatalogAPI from './catalog';
import {
  Catalog,
  CatalogListParams,
  CatalogListResponse,
  CatalogRegisterParams,
  CatalogRegisterResponse,
} from './catalog';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Events extends APIResource {
  catalog: CatalogAPI.Catalog = new CatalogAPI.Catalog(this._client);

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

      flow: WorkflowsAPI.Flow;

      trigger: MatchedFlow.Trigger;
    }

    export namespace MatchedFlow {
      export interface Action {
        continueOnError: boolean;

        method: string;

        name: string;

        service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks';

        deviceId?: string;

        params?: { [key: string]: unknown };
      }

      export interface Trigger {
        id: string;

        activation: 'event' | 'schedule' | 'custom';

        createdAt: string | null;

        customPayloadSchema: { [key: string]: unknown } | null;

        description: string | null;

        eventType: string | null;

        name: string;

        scheduleRule: Trigger.ScheduleRule | null;

        timezone: string | null;

        updatedAt: string | null;

        userId: string;

        conditions?: unknown;

        nextFireTime?: string | null;
      }

      export namespace Trigger {
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

Events.Catalog = Catalog;

export declare namespace Events {
  export {
    type EventDryRunResponse as EventDryRunResponse,
    type EventIngestResponse as EventIngestResponse,
    type EventDryRunParams as EventDryRunParams,
    type EventIngestParams as EventIngestParams,
  };

  export {
    Catalog as Catalog,
    type CatalogListResponse as CatalogListResponse,
    type CatalogRegisterResponse as CatalogRegisterResponse,
    type CatalogListParams as CatalogListParams,
    type CatalogRegisterParams as CatalogRegisterParams,
  };
}
