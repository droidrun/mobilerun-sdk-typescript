// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ScreenshotsAPI from './screenshots';
import { Screenshots } from './screenshots';

export class Tasks extends APIResource {
  screenshots: ScreenshotsAPI.Screenshots = new ScreenshotsAPI.Screenshots(this._client);
}

Tasks.Screenshots = Screenshots;

export declare namespace Tasks {
  export { Screenshots as Screenshots };
}
