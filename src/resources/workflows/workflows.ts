// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionCatalogAPI from './action-catalog';
import {
  ActionCatalog,
  ActionCatalogEntry,
  ActionCatalogListParams,
  ActionCatalogListResponse,
  ActionCatalogRetrieveResponse,
} from './action-catalog';
import * as ExecutionsAPI from './executions';
import {
  ExecutionGetMetricsParams,
  ExecutionGetMetricsResponse,
  ExecutionListParams,
  ExecutionListResponse,
  ExecutionRetrieveResponse,
  Executions,
  FlowExecution,
} from './executions';
import * as SecretsAPI from './secrets';
import { Secrets } from './secrets';
import * as TimezonesAPI from './timezones';
import { TimezoneListResponse, Timezones } from './timezones';
import * as TriggersAPI from './triggers';
import {
  TriggerCreateParams,
  TriggerCreateResponse,
  TriggerDeleteResponse,
  TriggerFireParams,
  TriggerFireResponse,
  TriggerListParams,
  TriggerListResponse,
  TriggerRetrieveResponse,
  TriggerUpdateParams,
  TriggerUpdateResponse,
  Triggers,
} from './triggers';
import * as ActionsAPI from './actions/actions';
import {
  Action,
  ActionCreateParams,
  ActionCreateResponse,
  ActionDeleteResponse,
  ActionListParams,
  ActionListResponse,
  ActionRetrieveResponse,
  ActionUpdateParams,
  ActionUpdateResponse,
  Actions,
} from './actions/actions';
import * as EventsAPI from './events/events';
import {
  EventDryRunParams,
  EventDryRunResponse,
  EventIngestParams,
  EventIngestResponse,
  Events,
} from './events/events';
import * as FlowsAPI from './flows/flows';
import {
  FlowActionOverrides,
  FlowChildActionInput,
  FlowCloneParams,
  FlowCloneResponse,
  FlowCreateParams,
  FlowCreateResponse,
  FlowDeleteResponse,
  FlowListParams,
  FlowListResponse,
  FlowRetrieveResponse,
  FlowUnblockResponse,
  FlowUpdateParams,
  FlowUpdateResponse,
  Flows,
} from './flows/flows';

export class Workflows extends APIResource {
  triggers: TriggersAPI.Triggers = new TriggersAPI.Triggers(this._client);
  actionCatalog: ActionCatalogAPI.ActionCatalog = new ActionCatalogAPI.ActionCatalog(this._client);
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  flows: FlowsAPI.Flows = new FlowsAPI.Flows(this._client);
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  executions: ExecutionsAPI.Executions = new ExecutionsAPI.Executions(this._client);
  timezones: TimezonesAPI.Timezones = new TimezonesAPI.Timezones(this._client);
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);
}

export interface Flow {
  id: string;

  blockedAt: string | null;

  consecutiveFailures: number;

  cooldownScope: 'flow' | 'device';

  cooldownSeconds: number | null;

  createdAt: string | null;

  description: string | null;

  deviceIds: Array<string>;

  enabled: boolean;

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

  status: 'healthy' | 'failing' | 'blocked';

  triggerId: string;

  updatedAt: string | null;

  userId: string;
}

Workflows.Triggers = Triggers;
Workflows.ActionCatalog = ActionCatalog;
Workflows.Actions = Actions;
Workflows.Flows = Flows;
Workflows.Events = Events;
Workflows.Executions = Executions;
Workflows.Timezones = Timezones;
Workflows.Secrets = Secrets;

export declare namespace Workflows {
  export { type Flow as Flow };

  export {
    Triggers as Triggers,
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

  export {
    ActionCatalog as ActionCatalog,
    type ActionCatalogEntry as ActionCatalogEntry,
    type ActionCatalogRetrieveResponse as ActionCatalogRetrieveResponse,
    type ActionCatalogListResponse as ActionCatalogListResponse,
    type ActionCatalogListParams as ActionCatalogListParams,
  };

  export {
    Actions as Actions,
    type Action as Action,
    type ActionCreateResponse as ActionCreateResponse,
    type ActionRetrieveResponse as ActionRetrieveResponse,
    type ActionUpdateResponse as ActionUpdateResponse,
    type ActionListResponse as ActionListResponse,
    type ActionDeleteResponse as ActionDeleteResponse,
    type ActionCreateParams as ActionCreateParams,
    type ActionUpdateParams as ActionUpdateParams,
    type ActionListParams as ActionListParams,
  };

  export {
    Flows as Flows,
    type FlowActionOverrides as FlowActionOverrides,
    type FlowChildActionInput as FlowChildActionInput,
    type FlowCreateResponse as FlowCreateResponse,
    type FlowRetrieveResponse as FlowRetrieveResponse,
    type FlowUpdateResponse as FlowUpdateResponse,
    type FlowListResponse as FlowListResponse,
    type FlowDeleteResponse as FlowDeleteResponse,
    type FlowCloneResponse as FlowCloneResponse,
    type FlowUnblockResponse as FlowUnblockResponse,
    type FlowCreateParams as FlowCreateParams,
    type FlowUpdateParams as FlowUpdateParams,
    type FlowListParams as FlowListParams,
    type FlowCloneParams as FlowCloneParams,
  };

  export {
    Events as Events,
    type EventDryRunResponse as EventDryRunResponse,
    type EventIngestResponse as EventIngestResponse,
    type EventDryRunParams as EventDryRunParams,
    type EventIngestParams as EventIngestParams,
  };

  export {
    Executions as Executions,
    type FlowExecution as FlowExecution,
    type ExecutionRetrieveResponse as ExecutionRetrieveResponse,
    type ExecutionListResponse as ExecutionListResponse,
    type ExecutionGetMetricsResponse as ExecutionGetMetricsResponse,
    type ExecutionListParams as ExecutionListParams,
    type ExecutionGetMetricsParams as ExecutionGetMetricsParams,
  };

  export { Timezones as Timezones, type TimezoneListResponse as TimezoneListResponse };

  export { Secrets as Secrets };
}
