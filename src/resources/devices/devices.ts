// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import { Actions } from './actions';
import * as AppsAPI from './apps';
import { Apps } from './apps';
import * as KeyboardAPI from './keyboard';
import { Keyboard } from './keyboard';
import * as PackagesAPI from './packages';
import { Packages } from './packages';
import * as StateAPI from './state';
import { State } from './state';
import * as TasksAPI from './tasks';
import { Tasks } from './tasks';

export class Devices extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  state: StateAPI.State = new StateAPI.State(this._client);
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);
  keyboard: KeyboardAPI.Keyboard = new KeyboardAPI.Keyboard(this._client);
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);
}

Devices.Actions = Actions;
Devices.State = State;
Devices.Apps = Apps;
Devices.Packages = Packages;
Devices.Keyboard = Keyboard;
Devices.Tasks = Tasks;

export declare namespace Devices {
  export { Actions as Actions };

  export { State as State };

  export { Apps as Apps };

  export { Packages as Packages };

  export { Keyboard as Keyboard };

  export { Tasks as Tasks };
}
