// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Models extends APIResource {
  /**
   * Get all LLM models
   */
  list(options?: RequestOptions): APIPromise<ModelListResponse> {
    return this._client.get('/models', options);
  }
}

export interface ModelListResponse {
  data?: Array<ModelListResponse.Data>;

  /**
   * Always "list" for list responses
   */
  object?: string;
}

export namespace ModelListResponse {
  export interface Data {
    id?: string;

    created?: number;

    object?: string;

    owned_by?: string;
  }
}

export declare namespace Models {
  export {
    type ModelListResponse as ModelListResponse
  };
}
