// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ItemsAPI from './items/items';
import { ItemListResponse, Items } from './items/items';

export class Vaults extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);
}

Vaults.Items = Items;

export declare namespace Vaults {
  export { Items as Items, type ItemListResponse as ItemListResponse };
}
