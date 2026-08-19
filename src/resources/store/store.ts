// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as StoreAPI from './store';
import * as AppsAPI from './apps';
import { AppAddToWorkspaceResponse, AppListParams, AppListResponse, AppRetrieveResponse, Apps } from './apps';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Store extends APIResource {
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);

  /**
   * Distinct, sorted categories among PUBLISHED store listings. No pagination.
   */
  categories(options?: RequestOptions): APIPromise<StoreCategoriesResponse> {
    return this._client.get('/store/categories', options);
  }
}

export interface StoreCategoriesResponse {
  categories: Array<string>;
}

Store.Apps = Apps;

export declare namespace Store {
  export {
    type StoreCategoriesResponse as StoreCategoriesResponse
  };

  export {
    Apps as Apps,
    type AppRetrieveResponse as AppRetrieveResponse,
    type AppListResponse as AppListResponse,
    type AppAddToWorkspaceResponse as AppAddToWorkspaceResponse,
    type AppListParams as AppListParams
  };
}
