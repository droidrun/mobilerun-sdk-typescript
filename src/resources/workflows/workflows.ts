// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionCatalogAPI from './action-catalog';
import {
  ActionCatalog,
  ActionCatalogListParams,
  ActionCatalogListResponse,
  ActionCatalogRetrieveResponse,
} from './action-catalog';
import * as EventsAPI from './events';
import {
  EventDryRunParams,
  EventDryRunResponse,
  EventIngestParams,
  EventIngestResponse,
  Events,
} from './events';
import * as ExecutionsAPI from './executions';
import {
  ExecutionAbortResponse,
  ExecutionGetMetricsParams,
  ExecutionGetMetricsResponse,
  ExecutionListParams,
  ExecutionListResponse,
  ExecutionRetrieveResponse,
  Executions,
} from './executions';
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
import * as FlowsAPI from './flows/flows';
import {
  FlowCloneParams,
  FlowCloneResponse,
  FlowCreateParams,
  FlowCreateResponse,
  FlowDeleteResponse,
  FlowDryRunParams,
  FlowDryRunResponse,
  FlowListParams,
  FlowListRepairsResponse,
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
}

Workflows.Triggers = Triggers;
Workflows.ActionCatalog = ActionCatalog;
Workflows.Actions = Actions;
Workflows.Flows = Flows;
Workflows.Events = Events;
Workflows.Executions = Executions;
Workflows.Timezones = Timezones;

export declare namespace Workflows {
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
    type ActionCatalogRetrieveResponse as ActionCatalogRetrieveResponse,
    type ActionCatalogListResponse as ActionCatalogListResponse,
    type ActionCatalogListParams as ActionCatalogListParams,
  };

  export {
    Actions as Actions,
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
    type FlowCreateResponse as FlowCreateResponse,
    type FlowRetrieveResponse as FlowRetrieveResponse,
    type FlowUpdateResponse as FlowUpdateResponse,
    type FlowListResponse as FlowListResponse,
    type FlowDeleteResponse as FlowDeleteResponse,
    type FlowCloneResponse as FlowCloneResponse,
    type FlowDryRunResponse as FlowDryRunResponse,
    type FlowListRepairsResponse as FlowListRepairsResponse,
    type FlowUnblockResponse as FlowUnblockResponse,
    type FlowCreateParams as FlowCreateParams,
    type FlowUpdateParams as FlowUpdateParams,
    type FlowListParams as FlowListParams,
    type FlowCloneParams as FlowCloneParams,
    type FlowDryRunParams as FlowDryRunParams,
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
    type ExecutionRetrieveResponse as ExecutionRetrieveResponse,
    type ExecutionListResponse as ExecutionListResponse,
    type ExecutionAbortResponse as ExecutionAbortResponse,
    type ExecutionGetMetricsResponse as ExecutionGetMetricsResponse,
    type ExecutionListParams as ExecutionListParams,
    type ExecutionGetMetricsParams as ExecutionGetMetricsParams,
  };

  export { Timezones as Timezones, type TimezoneListResponse as TimezoneListResponse };
}
