// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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

export class Credentials extends APIResource {
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);

  /**
   * List all credentials for the authenticated user
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

  pagination: CredentialListResponse.Pagination;
}

export namespace CredentialListResponse {
  export interface Pagination {
    hasNext: boolean;

    hasPrev: boolean;

    page: number;

    pages: number;

    pageSize: number;

    total: number;
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
    type CredentialListParams as CredentialListParams,
  };

  export {
    Packages as Packages,
    type PackageCreateResponse as PackageCreateResponse,
    type PackageListResponse as PackageListResponse,
    type PackageCreateParams as PackageCreateParams,
  };
}
