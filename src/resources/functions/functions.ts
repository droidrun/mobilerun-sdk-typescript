// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FunctionsAPI from './functions';
import * as Shared from '../shared';
import * as ValidationsAPI from './validations';
import {
  FunctionValidation,
  ValidationCreateParams,
  ValidationCreateResponse,
  ValidationRetrieveParams,
  ValidationRetrieveResponse,
  Validations,
} from './validations';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Functions extends APIResource {
  validations: ValidationsAPI.Validations = new ValidationsAPI.Validations(this._client);

  /**
   * Upload an immutable Python function as the next version of its name
   */
  create(body: FunctionCreateParams, options?: RequestOptions): APIPromise<FunctionCreateResponse> {
    return this._client.post('/compute/functions', { body, ...options });
  }

  /**
   * Get function metadata
   */
  retrieve(functionID: string, options?: RequestOptions): APIPromise<FunctionRetrieveResponse> {
    return this._client.get(path`/compute/functions/${functionID}`, options);
  }

  /**
   * List functions owned by this organisation
   */
  list(
    query: FunctionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FunctionListResponse> {
    return this._client.get('/compute/functions', { query, ...options });
  }

  /**
   * Delete a function
   */
  delete(functionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/compute/functions/${functionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read verified function source
   */
  source(functionID: string, options?: RequestOptions): APIPromise<FunctionSourceResponse> {
    return this._client.get(path`/compute/functions/${functionID}/source`, options);
  }
}

export interface FunctionSource {
  functionId: string;

  sha256: string;

  sizeBytes: number;

  source: string;
}

export interface ServerlessFunction {
  id: string;

  createdAt: string;

  createdBy: string;

  datasetKey: string | null;

  description: string | null;

  inputSchema: { [key: string]: unknown } | null;

  inspectError: ServerlessFunction.InspectError | null;

  manifest: ServerlessFunction.Manifest;

  name: string;

  outputKind: string | null;

  outputSchema: { [key: string]: unknown } | null;

  runtimeVersion: string | null;

  sha256: string;

  sizeBytes: number;

  status: 'pending_inspection' | 'ready' | 'rejected';

  /**
   * Per-name version number, starting at 1 and never reused.
   */
  version: number;

  /**
   * Number of active versions of this name. Only set when listing with latest=true.
   */
  versionCount?: number;
}

export namespace ServerlessFunction {
  export interface InspectError {
    code: string;

    message: string;

    errors?: Array<InspectError.Error>;
  }

  export namespace InspectError {
    export interface Error {
      code: string;

      message: string;

      line?: number;

      repair?: Error.Repair;
    }

    export namespace Error {
      export interface Repair {
        action: string;

        hint: string;
      }
    }
  }

  export interface Manifest {
    credentials?: Array<Manifest.Credential>;

    hosts?: Array<string>;

    scopes?: Array<string>;
  }

  export namespace Manifest {
    export interface Credential {
      name: string;

      packageName: string;
    }
  }
}

export interface FunctionCreateResponse {
  data: ServerlessFunction;
}

export interface FunctionRetrieveResponse {
  data: ServerlessFunction;
}

export interface FunctionListResponse {
  data: FunctionListResponse.Data;
}

export namespace FunctionListResponse {
  export interface Data {
    items: Array<FunctionsAPI.ServerlessFunction>;

    pagination: Shared.Pagination;
  }
}

export interface FunctionSourceResponse {
  data: FunctionSource;
}

export interface FunctionCreateParams {
  name: string;

  source: string;

  description?: string;

  manifest?: FunctionCreateParams.Manifest;
}

export namespace FunctionCreateParams {
  export interface Manifest {
    credentials?: Array<Manifest.Credential>;

    hosts?: Array<string>;

    scopes?: Array<string>;
  }

  export namespace Manifest {
    export interface Credential {
      name: string;

      packageName: string;
    }
  }
}

export interface FunctionListParams {
  /**
   * Return one row per function name: its newest upload (any status), with
   * versionCount. Combined with name, returns that single row.
   */
  latest?: 'true' | 'false';

  /**
   * Exact function name. Returns every active version of that name, newest first.
   */
  name?: string;

  page?: number;

  pageSize?: number;

  /**
   * Case-insensitive substring match against the function name.
   */
  search?: string;
}

Functions.Validations = Validations;

export declare namespace Functions {
  export {
    type FunctionSource as FunctionSource,
    type ServerlessFunction as ServerlessFunction,
    type FunctionCreateResponse as FunctionCreateResponse,
    type FunctionRetrieveResponse as FunctionRetrieveResponse,
    type FunctionListResponse as FunctionListResponse,
    type FunctionSourceResponse as FunctionSourceResponse,
    type FunctionCreateParams as FunctionCreateParams,
    type FunctionListParams as FunctionListParams,
  };

  export {
    Validations as Validations,
    type FunctionValidation as FunctionValidation,
    type ValidationCreateResponse as ValidationCreateResponse,
    type ValidationRetrieveResponse as ValidationRetrieveResponse,
    type ValidationCreateParams as ValidationCreateParams,
    type ValidationRetrieveParams as ValidationRetrieveParams,
  };
}
