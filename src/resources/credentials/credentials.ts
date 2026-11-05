// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as OnepasswordAPI from './onepassword/onepassword';
import {
  Onepassword,
  OnepasswordConnectParams,
  OnepasswordConnectResponse,
  OnepasswordDisconnectResponse,
  OnepasswordRetrieveResponse,
} from './onepassword/onepassword';
import * as PackagesAPI from './packages/packages';
import {
  PackageCreateParams,
  PackageCreateResponse,
  PackageListAllResponse,
  PackageListResponse,
  Packages,
} from './packages/packages';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Credentials extends APIResource {
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);
  onepassword: OnepasswordAPI.Onepassword = new OnepasswordAPI.Onepassword(this._client);

  /**
   * Returns a paginated list of all credentials belonging to the authenticated user
   * across every package. Accepts standard pagination query parameters and responds
   * with the credential items plus pagination metadata.
   */
  list(
    query: CredentialListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CredentialListResponse> {
    return this._client.get('/credentials', { query, ...options });
  }
}

export interface CredentialListResponse {
  items: Array<CredentialListResponse.Item>;

  pagination: Shared.Pagination;
}

export namespace CredentialListResponse {
  export interface Item {
    createdBy: string | null;

    credentialName: string;

    fields: Array<Item.Field>;

    ownerId: string;

    packageName: string;

    secretPath: string;

    /**
     * @deprecated Deprecated: use createdBy (same value — the creating actor). Null
     * for credentials created before rollout.
     */
    userId: string | null;

    link?: Item.Link;

    source?: 'mobilerun' | 'onepassword';
  }

  export namespace Item {
    export interface Field {
      fieldType:
        | 'email'
        | 'username'
        | 'password'
        | 'api_token'
        | 'phone_number'
        | 'two_factor_secret'
        | 'backup_codes';

      value: string;
    }

    export interface Link {
      fieldMap: Array<Link.FieldMap>;

      itemId: string;

      itemTitle: string;

      provider: 'onepassword';

      vaultId: string;

      vaultName: string;
    }

    export namespace Link {
      export interface FieldMap {
        fieldId: string;

        fieldType:
          | 'email'
          | 'username'
          | 'password'
          | 'api_token'
          | 'phone_number'
          | 'two_factor_secret'
          | 'backup_codes';
      }
    }
  }
}

export interface CredentialListParams {
  page?: number;

  pageSize?: number;
}

Credentials.Packages = Packages;
Credentials.Onepassword = Onepassword;

export declare namespace Credentials {
  export {
    type CredentialListResponse as CredentialListResponse,
    type CredentialListParams as CredentialListParams,
  };

  export {
    Packages as Packages,
    type PackageCreateResponse as PackageCreateResponse,
    type PackageListResponse as PackageListResponse,
    type PackageListAllResponse as PackageListAllResponse,
    type PackageCreateParams as PackageCreateParams,
  };

  export {
    Onepassword as Onepassword,
    type OnepasswordRetrieveResponse as OnepasswordRetrieveResponse,
    type OnepasswordConnectResponse as OnepasswordConnectResponse,
    type OnepasswordDisconnectResponse as OnepasswordDisconnectResponse,
    type OnepasswordConnectParams as OnepasswordConnectParams,
  };
}
