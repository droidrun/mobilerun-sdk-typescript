// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Validations extends APIResource {
  /**
   * Validate Python function source without uploading it
   */
  create(params: ValidationCreateParams, options?: RequestOptions): APIPromise<ValidationCreateResponse> {
    const { waitS, ...body } = params;
    return this._client.post('/functions/validations', { query: { waitS }, body, ...options });
  }

  /**
   * Retrieve a function validation owned by this organisation
   */
  retrieve(
    validationID: string,
    query: ValidationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ValidationRetrieveResponse> {
    return this._client.get(path`/functions/validations/${validationID}`, { query, ...options });
  }
}

export interface FunctionValidation {
  id: string;

  createdAt: string;

  errors: Array<FunctionValidation.Error>;

  status: 'pending' | 'done' | 'failed';

  warnings: Array<FunctionValidation.Warning>;

  datasetKey?: string | null;

  finishedAt?: string;

  inputSchema?: { [key: string]: unknown };

  outputKind?: 'value' | 'dataset' | 'none';

  outputSchema?: { [key: string]: unknown };

  runtimeVersion?: string;

  valid?: boolean;
}

export namespace FunctionValidation {
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

  export interface Warning {
    code: string;

    message: string;

    line?: number;

    repair?: Warning.Repair;
  }

  export namespace Warning {
    export interface Repair {
      action: string;

      hint: string;
    }
  }
}

export interface ValidationCreateResponse {
  data: FunctionValidation;
}

export interface ValidationRetrieveResponse {
  data: FunctionValidation;
}

export interface ValidationCreateParams {
  /**
   * Body param
   */
  source: string;

  /**
   * Query param: Wait up to 25 seconds for validation to finish. Excess waiters
   * return immediately.
   */
  waitS?: number | null;

  /**
   * Body param
   */
  manifest?: ValidationCreateParams.Manifest;
}

export namespace ValidationCreateParams {
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

export interface ValidationRetrieveParams {
  /**
   * Wait up to 25 seconds for validation to finish. Excess waiters return
   * immediately.
   */
  waitS?: number | null;
}

export declare namespace Validations {
  export {
    type FunctionValidation as FunctionValidation,
    type ValidationCreateResponse as ValidationCreateResponse,
    type ValidationRetrieveResponse as ValidationRetrieveResponse,
    type ValidationCreateParams as ValidationCreateParams,
    type ValidationRetrieveParams as ValidationRetrieveParams,
  };
}
