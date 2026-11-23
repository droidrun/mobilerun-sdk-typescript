// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AppsAPI from './apps';
import { AppListParams, AppListResponse, Apps, PublicStoreApp } from './apps';
import * as RequestsAPI from './requests';
import { RequestCreateParams, RequestCreateResponse, Requests } from './requests';

export class Store extends APIResource {
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
  requests: RequestsAPI.Requests = new RequestsAPI.Requests(this._client);
}

Store.Apps = Apps;
Store.Requests = Requests;

export declare namespace Store {
  export {
    Apps as Apps,
    type PublicStoreApp as PublicStoreApp,
    type AppListResponse as AppListResponse,
    type AppListParams as AppListParams,
  };

  export {
    Requests as Requests,
    type RequestCreateResponse as RequestCreateResponse,
    type RequestCreateParams as RequestCreateParams,
  };
}
