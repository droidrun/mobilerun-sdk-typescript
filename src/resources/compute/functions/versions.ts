// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Versions extends APIResource {
  /**
   * Upload a new immutable version
   */
  create(
    functionID: string,
    body: VersionCreateParams,
    options?: RequestOptions,
  ): APIPromise<VersionCreateResponse> {
    return this._client.post(path`/compute/functions/${functionID}/versions`, { body, ...options });
  }

  /**
   * Get an exact version
   */
  retrieve(
    version: number,
    params: VersionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<VersionRetrieveResponse> {
    const { functionId } = params;
    return this._client.get(path`/compute/functions/${functionId}/versions/${version}`, options);
  }

  /**
   * List active versions, newest first
   */
  list(
    functionID: string,
    query: VersionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VersionListResponse> {
    return this._client.get(path`/compute/functions/${functionID}/versions`, { query, ...options });
  }

  /**
   * Delete a version except the last active version
   */
  delete(version: number, params: VersionDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { functionId } = params;
    return this._client.delete(path`/compute/functions/${functionId}/versions/${version}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface VersionCreateResponse {
  data: VersionCreateResponse.Data | null;
}

export namespace VersionCreateResponse {
  export interface Data {
    apiKey: Data.Permissions | Data.Full;

    createdAt: string;

    functionId: string;

    inputSchema: { [key: string]: unknown } | null;

    inspectError: Data.InspectError | null;

    manifest: Data.Manifest;

    outputKind: string | null;

    outputSchema: { [key: string]: unknown } | null;

    runtimeVersion: string | null;

    sha256: string;

    sizeBytes: number;

    status: 'pending_inspection' | 'ready' | 'rejected';

    version: number;
  }

  export namespace Data {
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

export interface VersionRetrieveResponse {
  data: VersionRetrieveResponse.Data | null;
}

export namespace VersionRetrieveResponse {
  export interface Data {
    apiKey: Data.Permissions | Data.Full;

    createdAt: string;

    functionId: string;

    inputSchema: { [key: string]: unknown } | null;

    inspectError: Data.InspectError | null;

    manifest: Data.Manifest;

    outputKind: string | null;

    outputSchema: { [key: string]: unknown } | null;

    runtimeVersion: string | null;

    sha256: string;

    sizeBytes: number;

    status: 'pending_inspection' | 'ready' | 'rejected';

    version: number;
  }

  export namespace Data {
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

export interface VersionListResponse {
  data: VersionListResponse.Data;
}

export namespace VersionListResponse {
  export interface Data {
    items: Array<Data.Item | null>;

    pagination: Shared.Pagination;
  }

  export namespace Data {
    export interface Item {
      apiKey: Item.Permissions | Item.Full;

      createdAt: string;

      functionId: string;

      inputSchema: { [key: string]: unknown } | null;

      inspectError: Item.InspectError | null;

      manifest: Item.Manifest;

      outputKind: string | null;

      outputSchema: { [key: string]: unknown } | null;

      runtimeVersion: string | null;

      sha256: string;

      sizeBytes: number;

      status: 'pending_inspection' | 'ready' | 'rejected';

      version: number;
    }

    export namespace Item {
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
}

export interface VersionCreateParams {
  source: string;

  apiKey?: VersionCreateParams.Permissions | VersionCreateParams.Full;

  manifest?: VersionCreateParams.Manifest;
}

export namespace VersionCreateParams {
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

export interface VersionRetrieveParams {
  functionId: string;
}

export interface VersionListParams {
  page?: number;

  pageSize?: number;
}

export interface VersionDeleteParams {
  functionId: string;
}

export declare namespace Versions {
  export {
    type VersionCreateResponse as VersionCreateResponse,
    type VersionRetrieveResponse as VersionRetrieveResponse,
    type VersionListResponse as VersionListResponse,
    type VersionCreateParams as VersionCreateParams,
    type VersionRetrieveParams as VersionRetrieveParams,
    type VersionListParams as VersionListParams,
    type VersionDeleteParams as VersionDeleteParams,
  };
}
