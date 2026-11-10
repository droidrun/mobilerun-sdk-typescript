// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class NumberBindings extends APIResource {
  list(options?: RequestOptions): APIPromise<NumberBindingListResponse> {
    return this._client.get('/devices/number-bindings', options);
  }

  listCandidates(options?: RequestOptions): APIPromise<NumberBindingListCandidatesResponse> {
    return this._client.get('/devices/number-bindings/candidates', options);
  }
}

export interface NumberBindingListResponse {
  items: Array<NumberBindingListResponse.Item> | null;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export namespace NumberBindingListResponse {
  export interface Item {
    boundAt: string;

    deviceId: string;

    deviceName: string;

    numberId: string;
  }
}

export interface NumberBindingListCandidatesResponse {
  items: Array<NumberBindingListCandidatesResponse.Item> | null;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export namespace NumberBindingListCandidatesResponse {
  export interface Item {
    id: string;

    name: string;

    state: 'ready';
  }
}

export declare namespace NumberBindings {
  export {
    type NumberBindingListResponse as NumberBindingListResponse,
    type NumberBindingListCandidatesResponse as NumberBindingListCandidatesResponse,
  };
}
