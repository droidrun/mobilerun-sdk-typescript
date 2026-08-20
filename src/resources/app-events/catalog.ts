// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Catalog extends APIResource {
  /**
   * Fetch a single selectable app event by its appEventType (e.g.
   * app.whatsapp.message_received).
   */
  retrieve(appEventType: string, options?: RequestOptions): APIPromise<CatalogRetrieveResponse> {
    return this._client.get(path`/app-events/catalog/${appEventType}`, options);
  }

  /**
   * Selectable app-based trigger events (e.g. app.whatsapp.message_received) with
   * their predefined payload — served from the JSON definition registry (always in
   * sync, no DB).
   */
  list(options?: RequestOptions): APIPromise<CatalogListResponse> {
    return this._client.get('/app-events/catalog', options);
  }
}

export interface CatalogRetrieveResponse {
  data: CatalogRetrieveResponse.Data;
}

export namespace CatalogRetrieveResponse {
  export interface Data {
    appEventType: string;

    appName: string;

    category: 'app' | 'system' | 'device' | 'webhook';

    label: string;

    packageName: string | null;

    payloadSchema: Array<Data.PayloadSchema>;

    sourceEventType: string;
  }

  export namespace Data {
    export interface PayloadSchema {
      description: string;

      name: string;

      type: 'string' | 'number' | 'boolean' | 'object' | 'array';

      example?: unknown;
    }
  }
}

export interface CatalogListResponse {
  data: Array<CatalogListResponse.Data>;
}

export namespace CatalogListResponse {
  export interface Data {
    appEventType: string;

    appName: string;

    category: 'app' | 'system' | 'device' | 'webhook';

    label: string;

    packageName: string | null;

    payloadSchema: Array<Data.PayloadSchema>;

    sourceEventType: string;
  }

  export namespace Data {
    export interface PayloadSchema {
      description: string;

      name: string;

      type: 'string' | 'number' | 'boolean' | 'object' | 'array';

      example?: unknown;
    }
  }
}

export declare namespace Catalog {
  export {
    type CatalogRetrieveResponse as CatalogRetrieveResponse,
    type CatalogListResponse as CatalogListResponse,
  };
}
