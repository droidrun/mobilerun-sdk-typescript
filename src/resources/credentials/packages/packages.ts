// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CredentialsAPI from './credentials/credentials';
import { Credential, CredentialCreateParams, CredentialCreateResponse, CredentialDeleteParams, CredentialDeleteResponse, CredentialRetrieveParams, CredentialRetrieveResponse, Credentials } from './credentials/credentials';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Packages extends APIResource {
  credentials: CredentialsAPI.Credentials = new CredentialsAPI.Credentials(this._client);

  /**
   * Initialize a new package/app
   */
  create(body: PackageCreateParams, options?: RequestOptions): APIPromise<PackageCreateResponse> {
    return this._client.post('/credentials/packages', { body, ...options });
  }

  /**
   * List credentials for a specific package
   */
  list(packageName: string, options?: RequestOptions): APIPromise<PackageListResponse> {
    return this._client.get(path`/credentials/packages/${packageName}`, options);
  }
}

export interface PackageCreateResponse {
  data: PackageCreateResponse.Data;

  message: string;

  success: true;
}

export namespace PackageCreateResponse {
  export interface Data {
    packageName: string;
  }
}

export interface PackageListResponse {
  data: Array<CredentialsAPI.Credential>;
}

export interface PackageCreateParams {
  packageName: string;
}

Packages.Credentials = Credentials;

export declare namespace Packages {
  export {
    type PackageCreateResponse as PackageCreateResponse,
    type PackageListResponse as PackageListResponse,
    type PackageCreateParams as PackageCreateParams
  };

  export {
    Credentials as Credentials,
    type Credential as Credential,
    type CredentialCreateResponse as CredentialCreateResponse,
    type CredentialRetrieveResponse as CredentialRetrieveResponse,
    type CredentialDeleteResponse as CredentialDeleteResponse,
    type CredentialCreateParams as CredentialCreateParams,
    type CredentialRetrieveParams as CredentialRetrieveParams,
    type CredentialDeleteParams as CredentialDeleteParams
  };
}
