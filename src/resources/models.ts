// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * LLM Models
 */
export class Models extends APIResource {
  /**
   * List available LLM models.
   */
  list(options?: RequestOptions): APIPromise<ModelListResponse> {
    return this._client.get('/models', options);
  }
}

export interface ModelListResponse {
  /**
   * Available models
   */
  data: Array<ModelListResponse.Data>;

  /**
   * Object type
   */
  object?: string;
}

export namespace ModelListResponse {
  export interface Data {
    /**
     * Model identifier
     */
    id: string;

    /**
     * Model owner/provider
     */
    owned_by: string;

    /**
     * Creation timestamp
     */
    created?: number;

    /**
     * Object type
     */
    object?: string;
  }
}

export declare namespace Models {
  export { type ModelListResponse as ModelListResponse };
}
