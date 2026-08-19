// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PackagesAPI from './packages';
import * as CredentialsAPI from './credentials/credentials';
import { CredentialCreateParams, CredentialCreateResponse, CredentialDeleteParams, CredentialDeleteResponse, CredentialRetrieveParams, CredentialRetrieveResponse, Credentials } from './credentials/credentials';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Packages extends APIResource {
  credentials: CredentialsAPI.Credentials = new CredentialsAPI.Credentials(this._client);

  /**
   * Creates a new package (identified by `packageName`) under which credentials can
   * be grouped. Returns a conflict if a package with the same name already exists
   * for the user.
   */
  create(body: PackageCreateParams, options?: RequestOptions): APIPromise<PackageCreateResponse> {
    return this._client.post('/credentials/packages', { body, ...options });
  }

  /**
   * Returns all credentials stored under the given `packageName`. Each credential
   * includes its name, secret path, and the list of fields it holds.
   */
  list(packageName: string, options?: RequestOptions): APIPromise<PackageListResponse> {
    return this._client.get(path`/credentials/packages/${packageName}`, options);
  }

  /**
   * Returns the names of all packages (apps) the authenticated owner has credentials
   * grouped under. Use this to discover which `packageName` values are valid for the
   * per-package credential routes.
   */
  listAll(options?: RequestOptions): APIPromise<PackageListAllResponse> {
    return this._client.get('/credentials/packages', options);
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
  data: Array<PackageListResponse.Data>;
}

export namespace PackageListResponse {
  export interface Data {
    createdBy: string | null;

    credentialName: string;

    fields: Array<Data.Field>;

    ownerId: string;

    packageName: string;

    secretPath: string;

    /**
     * @deprecated Deprecated: use createdBy (same value — the creating actor). Null
     * for credentials created before rollout.
     */
    userId: string | null;
  }

  export namespace Data {
    export interface Field {
      fieldType: 'email' | 'username' | 'password' | 'api_token' | 'phone_number' | 'two_factor_secret' | 'backup_codes';

      value: string;
    }
  }
}

export interface PackageListAllResponse {
  data: Array<PackageListAllResponse.Data>;
}

export namespace PackageListAllResponse {
  export interface Data {
    packageName: string;
  }
}

export interface PackageCreateParams {
  packageName: string;
}

Packages.Credentials = Credentials;

export declare namespace Packages {
  export {
    type PackageCreateResponse as PackageCreateResponse,
    type PackageListResponse as PackageListResponse,
    type PackageListAllResponse as PackageListAllResponse,
    type PackageCreateParams as PackageCreateParams
  };

  export {
    Credentials as Credentials,
    type CredentialCreateResponse as CredentialCreateResponse,
    type CredentialRetrieveResponse as CredentialRetrieveResponse,
    type CredentialDeleteResponse as CredentialDeleteResponse,
    type CredentialCreateParams as CredentialCreateParams,
    type CredentialRetrieveParams as CredentialRetrieveParams,
    type CredentialDeleteParams as CredentialDeleteParams
  };
}
