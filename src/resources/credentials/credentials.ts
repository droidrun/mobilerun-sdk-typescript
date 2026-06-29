// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as PackagesAPI from './packages/packages';
import {
  PackageCreateParams,
  PackageCreateResponse,
  PackageListResponse,
  Packages,
} from './packages/packages';
import * as PackagesCredentialsAPI from './packages/credentials/credentials';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Vault & Secrets
 */
export class Credentials extends APIResource {
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);

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
  items: Array<PackagesCredentialsAPI.Credential>;

  pagination: Shared.Pagination;
}

export interface CredentialListParams {
  page?: number;

  pageSize?: number;
}

Credentials.Packages = Packages;

export declare namespace Credentials {
  export {
    type CredentialListResponse as CredentialListResponse,
    type CredentialListParams as CredentialListParams,
  };

  export {
    Packages as Packages,
    type PackageCreateResponse as PackageCreateResponse,
    type PackageListResponse as PackageListResponse,
    type PackageCreateParams as PackageCreateParams,
  };
}
