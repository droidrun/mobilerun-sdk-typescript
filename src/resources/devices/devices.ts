// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import { Actions } from './actions';
import * as AppsAPI from './apps';
import { Apps } from './apps';
import * as EsimAPI from './esim';
import { Esim } from './esim';
import * as FilesAPI from './files';
import { Files } from './files';
import * as KeyboardAPI from './keyboard';
import { Keyboard } from './keyboard';
import * as LanguageAPI from './language';
import { Language } from './language';
import * as LocationAPI from './location';
import { Location } from './location';
import * as PackagesAPI from './packages';
import { Packages } from './packages';
import * as ProfileAPI from './profile';
import { Profile } from './profile';
import * as ProxyAPI from './proxy';
import { Proxy } from './proxy';
import * as StateAPI from './state';
import { State } from './state';
import * as TasksAPI from './tasks';
import { Tasks } from './tasks';
import * as TimezoneAPI from './timezone';
import { Timezone } from './timezone';

export class Devices extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
  esim: EsimAPI.Esim = new EsimAPI.Esim(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  keyboard: KeyboardAPI.Keyboard = new KeyboardAPI.Keyboard(this._client);
  location: LocationAPI.Location = new LocationAPI.Location(this._client);
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
  proxy: ProxyAPI.Proxy = new ProxyAPI.Proxy(this._client);
  state: StateAPI.State = new StateAPI.State(this._client);
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);
  timezone: TimezoneAPI.Timezone = new TimezoneAPI.Timezone(this._client);
  language: LanguageAPI.Language = new LanguageAPI.Language(this._client);
}

Devices.Actions = Actions;
Devices.Apps = Apps;
Devices.Esim = Esim;
Devices.Files = Files;
Devices.Keyboard = Keyboard;
Devices.Location = Location;
Devices.Packages = Packages;
Devices.Profile = Profile;
Devices.Proxy = Proxy;
Devices.State = State;
Devices.Tasks = Tasks;
Devices.Timezone = Timezone;
Devices.Language = Language;

export declare namespace Devices {
  export { Actions as Actions };

  export { Apps as Apps };

  export { Esim as Esim };

  export { Files as Files };

  export { Keyboard as Keyboard };

  export { Location as Location };

  export { Packages as Packages };

  export { Profile as Profile };

  export { Proxy as Proxy };

  export { State as State };

  export { Tasks as Tasks };

  export { Timezone as Timezone };

  export { Language as Language };
}
