// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FunctionsAPI from './functions';
import * as Shared from '../../shared';
import * as RunsAPI from './runs';
import { RunCreateParams, RunCreateResponse, RunListParams, RunListResponse, Runs } from './runs';
import * as ValidationsAPI from './validations';
import {
  FunctionValidation,
  ValidationCreateParams,
  ValidationCreateResponse,
  ValidationRetrieveParams,
  ValidationRetrieveResponse,
  Validations,
} from './validations';
import * as VersionsAPI from './versions';
import {
  VersionCreateParams,
  VersionCreateResponse,
  VersionDeleteParams,
  VersionListParams,
  VersionListResponse,
  VersionRetrieveParams,
  VersionRetrieveResponse,
  Versions,
} from './versions';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Functions extends APIResource {
  validations: ValidationsAPI.Validations = new ValidationsAPI.Validations(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

  /**
   * Create a function with its first immutable version
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
   * Rename a function or update its description
   */
  update(
    functionID: string,
    body: FunctionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FunctionUpdateResponse> {
    return this._client.patch(path`/compute/functions/${functionID}`, { body, ...options });
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
  source(
    functionID: string,
    query: FunctionSourceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FunctionSourceResponse> {
    return this._client.get(path`/compute/functions/${functionID}/source`, { query, ...options });
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

  description: string | null;

  latestReadyVersion: number | null;

  latestVersion: ServerlessFunction.LatestVersion | null;

  name: string;

  updatedAt: string;

  versionCount: number;
}

export namespace ServerlessFunction {
  export interface LatestVersion {
    apiKey: LatestVersion.Permissions | LatestVersion.Full;

    createdAt: string;

    functionId: string;

    inputSchema: { [key: string]: unknown } | null;

    inspectError: LatestVersion.InspectError | null;

    manifest: LatestVersion.Manifest;

    outputKind: string | null;

    outputSchema: { [key: string]: unknown } | null;

    runtimeVersion: string | null;

    sha256: string;

    sizeBytes: number;

    status: 'pending_inspection' | 'ready' | 'rejected';

    version: number;
  }

  export namespace LatestVersion {
    export interface Permissions {
      permissions: { [key: string]: Array<string> };
    }

    export interface Full {
      full: true;
    }

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
}

export interface FunctionCreateResponse {
  data: ServerlessFunction;
}

export interface FunctionRetrieveResponse {
  data: ServerlessFunction;
}

export interface FunctionUpdateResponse {
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

  apiKey?: FunctionCreateParams.Permissions | FunctionCreateParams.Full;

  description?: string;

  manifest?: FunctionCreateParams.Manifest;
}

export namespace FunctionCreateParams {
  export interface Permissions {
    permissions: { [key: string]: Array<string> };
  }

  export interface Full {
    full: true;
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

export interface FunctionUpdateParams {
  description?: string;

  name?: string;
}

export interface FunctionListParams {
  page?: number;

  pageSize?: number;

  /**
   * Case-insensitive substring match against the function name.
   */
  search?: string;
}

export interface FunctionSourceParams {
  version?: number;
}

Functions.Validations = Validations;
Functions.Versions = Versions;
Functions.Runs = Runs;

export declare namespace Functions {
  export {
    type FunctionSource as FunctionSource,
    type ServerlessFunction as ServerlessFunction,
    type FunctionCreateResponse as FunctionCreateResponse,
    type FunctionRetrieveResponse as FunctionRetrieveResponse,
    type FunctionUpdateResponse as FunctionUpdateResponse,
    type FunctionListResponse as FunctionListResponse,
    type FunctionSourceResponse as FunctionSourceResponse,
    type FunctionCreateParams as FunctionCreateParams,
    type FunctionUpdateParams as FunctionUpdateParams,
    type FunctionListParams as FunctionListParams,
    type FunctionSourceParams as FunctionSourceParams,
  };

  export {
    Validations as Validations,
    type FunctionValidation as FunctionValidation,
    type ValidationCreateResponse as ValidationCreateResponse,
    type ValidationRetrieveResponse as ValidationRetrieveResponse,
    type ValidationCreateParams as ValidationCreateParams,
    type ValidationRetrieveParams as ValidationRetrieveParams,
  };

  export {
    Versions as Versions,
    type VersionCreateResponse as VersionCreateResponse,
    type VersionRetrieveResponse as VersionRetrieveResponse,
    type VersionListResponse as VersionListResponse,
    type VersionCreateParams as VersionCreateParams,
    type VersionRetrieveParams as VersionRetrieveParams,
    type VersionListParams as VersionListParams,
    type VersionDeleteParams as VersionDeleteParams,
  };

  export {
    Runs as Runs,
    type RunCreateResponse as RunCreateResponse,
    type RunListResponse as RunListResponse,
    type RunCreateParams as RunCreateParams,
    type RunListParams as RunListParams,
  };
}
