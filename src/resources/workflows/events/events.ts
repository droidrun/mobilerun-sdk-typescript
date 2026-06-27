// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CatalogAPI from './catalog';
import { Catalog } from './catalog';

export class Events extends APIResource {
  catalog: CatalogAPI.Catalog = new CatalogAPI.Catalog(this._client);
}

Events.Catalog = Catalog;

export declare namespace Events {
  export { Catalog as Catalog };
}
