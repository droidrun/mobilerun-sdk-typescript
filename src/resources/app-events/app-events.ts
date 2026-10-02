// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CatalogAPI from './catalog';
import { Catalog } from './catalog';

export class AppEvents extends APIResource {
  catalog: CatalogAPI.Catalog = new CatalogAPI.Catalog(this._client);
}

AppEvents.Catalog = Catalog;

export declare namespace AppEvents {
  export { Catalog as Catalog };
}
