// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AppEventsAPI from './app-events';
import * as Shared from '../shared';
import * as CatalogAPI from './catalog';
import { Catalog, CatalogListResponse, CatalogRetrieveResponse } from './catalog';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppEvents extends APIResource {
  catalog: CatalogAPI.Catalog = new CatalogAPI.Catalog(this._client);

  /**
   * Fetch a single structured app event by its ID, including its typed payload,
   * source, and originating device. Returns 404 if no event matches.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AppEventRetrieveResponse> {
    return this._client.get(path`/app-events/${id}`, options);
  }

  /**
   * Structured, app-scoped events (e.g. app.whatsapp.message_received) derived from
   * raw device notifications. Typed columns — not raw payloads (those stay in the
   * event log).
   */
  list(query: AppEventListParams | null | undefined = {}, options?: RequestOptions): APIPromise<AppEventListResponse> {
    return this._client.get('/app-events', { query, ...options });
  }
}

export interface AppEventRetrieveResponse {
  data: AppEventRetrieveResponse.Data;
}

export namespace AppEventRetrieveResponse {
  export interface Data {
    id: string;

    createdAt: string | null;

    createdBy: string | null;

    deviceId: string | null;

    eventType: string;

    occurredAt: string | null;

    ownerId: string;

    payload: { [key: string]: unknown };

    rawEventId: string | null;

    source: 'app' | 'system' | 'device' | 'webhook';

    /**
     * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
     */
    userId: string;
  }
}

export interface AppEventListResponse {
  items: Array<AppEventListResponse.Item>;

  pagination: Shared.Pagination;
}

export namespace AppEventListResponse {
  export interface Item {
    id: string;

    createdAt: string | null;

    createdBy: string | null;

    deviceId: string | null;

    eventType: string;

    occurredAt: string | null;

    ownerId: string;

    payload: { [key: string]: unknown };

    rawEventId: string | null;

    source: 'app' | 'system' | 'device' | 'webhook';

    /**
     * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
     */
    userId: string;
  }
}

export interface AppEventListParams {
  deviceId?: string;

  eventType?: string;

  from?: string | null;

  page?: number;

  pageSize?: number;

  source?: 'app' | 'system' | 'device' | 'webhook';

  to?: string | null;
}

AppEvents.Catalog = Catalog;

export declare namespace AppEvents {
  export {
    type AppEventRetrieveResponse as AppEventRetrieveResponse,
    type AppEventListResponse as AppEventListResponse,
    type AppEventListParams as AppEventListParams
  };

  export {
    Catalog as Catalog,
    type CatalogRetrieveResponse as CatalogRetrieveResponse,
    type CatalogListResponse as CatalogListResponse
  };
}
