// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PackagesAPI from './packages/packages';
import {
  PackageCreateParams,
  PackageCreateResponse,
  PackageListResponse,
  Packages,
} from './packages/packages';
import * as CredentialsCredentialsAPI from './packages/credentials/credentials';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Credentials extends APIResource {
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);

  /**
   * List all credentials for the authenticated user
   */
  list(options?: RequestOptions): APIPromise<CredentialListResponse> {
    return this._client.get('/credentials', options);
  }
}

export interface CredentialListResponse {
  data: Array<CredentialsCredentialsAPI.Credential>;
}

Credentials.Packages = Packages;

export declare namespace Credentials {
  export { type CredentialListResponse as CredentialListResponse };

  export {
    Packages as Packages,
    type PackageCreateResponse as PackageCreateResponse,
    type PackageListResponse as PackageListResponse,
    type PackageCreateParams as PackageCreateParams,
  };
}
