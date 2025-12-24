// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ScreenshotsAPI from './screenshots';
import { Screenshots } from './screenshots';
import * as UiStatesAPI from './ui-states';
import { UiStates } from './ui-states';

export class Tasks extends APIResource {
  screenshots: ScreenshotsAPI.Screenshots = new ScreenshotsAPI.Screenshots(this._client);
  uiStates: UiStatesAPI.UiStates = new UiStatesAPI.UiStates(this._client);
}

Tasks.Screenshots = Screenshots;
Tasks.UiStates = UiStates;

export declare namespace Tasks {
  export { Screenshots as Screenshots };

  export { UiStates as UiStates };
}
