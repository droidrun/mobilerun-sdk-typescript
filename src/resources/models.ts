// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Models extends APIResource {
  /**
   * The single model-list endpoint for all consumers. Served unauthenticated by the
   * gateway: at the edge it sits behind api-key rate limiting and cloud-auth (so
   * callers use an API key); in-cluster callers reach it directly. Takes no headers
   * and needs no service key. Team-scoped when PLATFORM_CATALOG_TEAM_ID is set;
   * token prices are never included.
   */
  list(options?: RequestOptions): APIPromise<ModelListResponse> {
    return this._client.get('/models', options);
  }
}

export interface ModelListResponse {
  data: Array<ModelListResponse.Data>;

  object: 'list';
}

export namespace ModelListResponse {
  export interface Data {
    id: string;

    created: number;

    object: 'model';

    owned_by: string;

    group?: 'recommended' | 'fast' | 'more';

    label?: string;

    order?: number;
  }
}

export declare namespace Models {
  export { type ModelListResponse as ModelListResponse };
}
