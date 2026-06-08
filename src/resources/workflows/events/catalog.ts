// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Catalog extends APIResource {
  /**
   * List event catalog
   */
  list(
    query: CatalogListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CatalogListResponse> {
    return this._client.get('/events/catalog', { query, ...options });
  }

  /**
   * Register event types in the catalog
   */
  register(body: CatalogRegisterParams, options?: RequestOptions): APIPromise<CatalogRegisterResponse> {
    return this._client.post('/events/catalog/register', { body, ...options });
  }
}

export interface CatalogListResponse {
  items: Array<CatalogListResponse.Item>;

  pagination: Shared.Pagination;
}

export namespace CatalogListResponse {
  export interface Item {
    createdAt: string | null;

    description: string | null;

    eventType: string;

    label: string;

    source: string | null;

    updatedAt: string | null;

    payloadSchema?: unknown;
  }
}

export interface CatalogRegisterResponse {
  message: string;
}

export interface CatalogListParams {
  page?: number;

  pageSize?: number;

  source?: 'device' | 'system' | 'webhook';
}

export interface CatalogRegisterParams {
  events: Array<CatalogRegisterParams.Event>;
}

export namespace CatalogRegisterParams {
  export interface Event {
    eventType: string;

    label: string;

    description?: string;

    payloadSchema?: { [key: string]: unknown };

    source?: 'device' | 'system' | 'webhook';
  }
}

export declare namespace Catalog {
  export {
    type CatalogListResponse as CatalogListResponse,
    type CatalogRegisterResponse as CatalogRegisterResponse,
    type CatalogListParams as CatalogListParams,
    type CatalogRegisterParams as CatalogRegisterParams,
  };
}
