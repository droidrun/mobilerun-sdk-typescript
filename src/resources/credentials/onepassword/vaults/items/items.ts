// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as FieldsAPI from './fields';
import { FieldListParams, FieldListResponse, Fields } from './fields';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Items extends APIResource {
  fields: FieldsAPI.Fields = new FieldsAPI.Fields(this._client);

  /**
   * List 1Password item metadata
   */
  list(vaultID: string, options?: RequestOptions): APIPromise<ItemListResponse> {
    return this._client.get(path`/credentials/onepassword/vaults/${vaultID}/items`, options);
  }
}

export interface ItemListResponse {
  data: Array<ItemListResponse.Data>;
}

export namespace ItemListResponse {
  export interface Data {
    id: string;

    category: string;

    title: string;

    websites: Array<Data.Website>;
  }

  export namespace Data {
    export interface Website {
      label: string;

      url: string;
    }
  }
}

Items.Fields = Fields;

export declare namespace Items {
  export { type ItemListResponse as ItemListResponse };

  export {
    Fields as Fields,
    type FieldListResponse as FieldListResponse,
    type FieldListParams as FieldListParams,
  };
}
