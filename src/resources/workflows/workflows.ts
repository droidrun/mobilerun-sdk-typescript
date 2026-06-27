// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionCatalogAPI from './action-catalog';
import { ActionCatalog } from './action-catalog';
import * as ExecutionsAPI from './executions';
import { Executions } from './executions';
import * as TimezonesAPI from './timezones';
import { Timezones } from './timezones';
import * as TriggersAPI from './triggers';
import { Triggers } from './triggers';
import * as ActionsAPI from './actions/actions';
import { Actions } from './actions/actions';
import * as EventsAPI from './events/events';
import { Events } from './events/events';
import * as FlowsAPI from './flows/flows';
import { Flows } from './flows/flows';

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
  export { Triggers as Triggers };

  export { ActionCatalog as ActionCatalog };

  export { Actions as Actions };

  export { Flows as Flows };

  export { Events as Events };

  export { Executions as Executions };

  export { Timezones as Timezones };
}
