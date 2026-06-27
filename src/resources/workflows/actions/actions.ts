// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ServicesAPI from './services';
import { Services } from './services';

export class Actions extends APIResource {
  services: ServicesAPI.Services = new ServicesAPI.Services(this._client);
}

Actions.Services = Services;

export declare namespace Actions {
  export { Services as Services };
}
