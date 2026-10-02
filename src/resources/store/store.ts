// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AppsAPI from './apps';
import { Apps } from './apps';

export class Store extends APIResource {
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
}

Store.Apps = Apps;

export declare namespace Store {
  export { Apps as Apps };
}
