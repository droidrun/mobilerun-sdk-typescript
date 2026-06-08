// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ActionCatalog extends APIResource {
  /**
   * Get a catalog entry
   */
  retrieve(catalogEntryID: string, options?: RequestOptions): APIPromise<ActionCatalogRetrieveResponse> {
    return this._client.get(path`/action-catalog/${catalogEntryID}`, options);
  }

  /**
   * List action catalog entries
   */
  list(
    query: ActionCatalogListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionCatalogListResponse> {
    return this._client.get('/action-catalog', { query, ...options });
  }
}

export interface ActionCatalogEntry {
  id: string;

  createdAt: string | null;

  description: string | null;

  isAsync: boolean;

  method: string;

  name: string;

  service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks';

  updatedAt: string | null;

  paramsSchema?: unknown;
}

export interface ActionCatalogRetrieveResponse {
  data: ActionCatalogEntry;
}

export interface ActionCatalogListResponse {
  items: Array<ActionCatalogEntry>;

  pagination: Shared.Pagination;
}

export interface ActionCatalogListParams {
  page?: number;

  pageSize?: number;

  service?: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks';
}

export declare namespace ActionCatalog {
  export {
    type ActionCatalogEntry as ActionCatalogEntry,
    type ActionCatalogRetrieveResponse as ActionCatalogRetrieveResponse,
    type ActionCatalogListResponse as ActionCatalogListResponse,
    type ActionCatalogListParams as ActionCatalogListParams,
  };
}
