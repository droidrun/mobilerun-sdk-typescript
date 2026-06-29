// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Services extends APIResource {
  /**
   * Return the names of the services that actions can be built against. Use these
   * values to look up each service's allowed methods.
   */
  list(options?: RequestOptions): APIPromise<ServiceListResponse> {
    return this._client.get('/actions/services', options);
  }

  /**
   * Return the methods allowed for the given service, each with its parameter
   * definitions (name, type, whether required, description, and optional
   * default/example). Returns 404 if the service is unknown.
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
    method: string;

    params: Array<Data.Param>;
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
