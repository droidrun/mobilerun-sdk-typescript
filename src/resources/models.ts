// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Models extends APIResource {
  /**
   * Returns the available LLM models with their identifiers, providers, and optional
   * display metadata. Requires only your normal API authentication. Token prices are
   * not included.
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

    /**
     * Model pickers in which this model is available. When omitted, the model is
     * available in every picker.
     */
    surfaces?: Array<'assistant' | 'tasks'>;
  }
}

export declare namespace Models {
  export { type ModelListResponse as ModelListResponse };
}
