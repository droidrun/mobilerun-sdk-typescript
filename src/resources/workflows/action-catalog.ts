// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionCatalogAPI from './action-catalog';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ActionCatalog extends APIResource {
  /**
   * Fetch a single action catalog entry by its ID, including its service, method,
   * and parameter schema. Returns 404 if no entry matches.
   */
  retrieve(catalogEntryID: string, options?: RequestOptions): APIPromise<ActionCatalogRetrieveResponse> {
    return this._client.get(path`/action-catalog/${catalogEntryID}`, options);
  }

  /**
   * Return a paginated list of catalog entries — the service/method templates that
   * actions are created from, each carrying its parameter schema. Supports filtering
   * by `service`.
   */
  list(query: ActionCatalogListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ActionCatalogListResponse> {
    return this._client.get('/action-catalog', { query, ...options });
  }
}

export interface ActionCatalogRetrieveResponse {
  data: ActionCatalogRetrieveResponse.Data;
}

export namespace ActionCatalogRetrieveResponse {
  export interface Data {
    id: string;

    createdAt: string | null;

    description: string | null;

    method: string;

    name: string;

    service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks';

    updatedAt: string | null;

    paramsSchema?: unknown;
  }
}

export interface ActionCatalogListResponse {
  items: Array<ActionCatalogListResponse.Item>;

  pagination: Shared.Pagination;
}

export namespace ActionCatalogListResponse {
  export interface Item {
    id: string;

    createdAt: string | null;

    description: string | null;

    method: string;

    name: string;

    service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks';

    updatedAt: string | null;

    paramsSchema?: unknown;
  }
}

export interface ActionCatalogListParams {
  page?: number;

  pageSize?: number;

  service?: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks';
}

export declare namespace ActionCatalog {
  export {
    type ActionCatalogRetrieveResponse as ActionCatalogRetrieveResponse,
    type ActionCatalogListResponse as ActionCatalogListResponse,
    type ActionCatalogListParams as ActionCatalogListParams
  };
}
