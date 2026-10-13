// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CredentialsAPI from './credentials';
import * as Shared from '../shared';
import * as PackagesAPI from './packages/packages';
import { PackageCreateParams, PackageCreateResponse, PackageListAllResponse, PackageListResponse, Packages } from './packages/packages';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Credentials extends APIResource {
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);

  /**
   * Returns a paginated list of all credentials belonging to the authenticated user
   * across every package. Accepts standard pagination query parameters and responds
   * with the credential items plus pagination metadata.
   */
  list(query: CredentialListParams | null | undefined = {}, options?: RequestOptions): APIPromise<CredentialListResponse> {
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
  }

  export namespace Item {
    export interface Field {
      fieldType: 'email' | 'username' | 'password' | 'api_token' | 'phone_number' | 'two_factor_secret' | 'backup_codes';

      value: string;
    }
  }
}

export interface CredentialListParams {
  page?: number;

  pageSize?: number;
}

Credentials.Packages = Packages;

export declare namespace Credentials {
  export {
    type CredentialListResponse as CredentialListResponse,
    type CredentialListParams as CredentialListParams
  };

  export {
    Packages as Packages,
    type PackageCreateResponse as PackageCreateResponse,
    type PackageListResponse as PackageListResponse,
    type PackageListAllResponse as PackageListAllResponse,
    type PackageCreateParams as PackageCreateParams
  };
}
