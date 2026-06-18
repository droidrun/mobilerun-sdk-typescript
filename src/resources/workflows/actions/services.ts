// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Services extends APIResource {
  /**
   * List available services
   */
  list(options?: RequestOptions): APIPromise<ServiceListResponse> {
    return this._client.get('/actions/services', options);
  }

  /**
   * List allowed methods for a service
   */
  listMethods(service: string, options?: RequestOptions): APIPromise<ServiceListMethodsResponse> {
    return this._client.get(path`/actions/services/${service}/methods`, options);
  }
}

export interface ServiceListResponse {
  data: Array<string>;
}

export interface ServiceListMethodsResponse {
  data: Array<ServiceListMethodsResponse.Data>;
}

export namespace ServiceListMethodsResponse {
  export interface Data {
    isAsync: boolean;

    method: string;

    params: Array<Data.Param>;

    requiresTarget: boolean;
  }

  export namespace Data {
    export interface Param {
      description: string;

      name: string;

      required: boolean;

      type: 'string' | 'number' | 'boolean' | 'object' | 'array';

      default?: unknown;

      example?: unknown;
    }
  }
}

export declare namespace Services {
  export {
    type ServiceListResponse as ServiceListResponse,
    type ServiceListMethodsResponse as ServiceListMethodsResponse,
  };
}
