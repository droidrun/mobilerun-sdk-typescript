// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as FieldsAPI from './fields';
import {
  FieldCreateParams,
  FieldCreateResponse,
  FieldDeleteParams,
  FieldDeleteResponse,
  FieldUpdateParams,
  FieldUpdateResponse,
  Fields,
} from './fields';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Vault & Secrets
 */
export class Credentials extends APIResource {
  fields: FieldsAPI.Fields = new FieldsAPI.Fields(this._client);

  /**
   * Creates a credential under the given package with a `credentialName` and at
   * least one field. Each field has a `fieldType` (email, username, password,
   * api_token, phone_number, two_factor_secret, or backup_codes) and a value.
   */
  create(
    packageName: string,
    body: CredentialCreateParams,
    options?: RequestOptions,
  ): APIPromise<CredentialCreateResponse> {
    return this._client.post(path`/credentials/packages/${packageName}`, { body, ...options });
  }

  /**
   * Fetches a single credential by `packageName` and `credentialName`, including all
   * of its stored fields. Returns not found if no matching credential exists.
   */
  retrieve(
    credentialName: string,
    params: CredentialRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<CredentialRetrieveResponse> {
    const { packageName } = params;
    return this._client.get(
      path`/credentials/packages/${packageName}/credentials/${credentialName}`,
      options,
    );
  }

  /**
   * Permanently deletes the credential identified by `packageName` and
   * `credentialName`, removing all of its fields. Returns the deleted credential.
   */
  delete(
    credentialName: string,
    params: CredentialDeleteParams,
    options?: RequestOptions,
  ): APIPromise<CredentialDeleteResponse> {
    const { packageName } = params;
    return this._client.delete(
      path`/credentials/packages/${packageName}/credentials/${credentialName}`,
      options,
    );
  }
}

export interface Credential {
  credentialName: string;

  fields: Array<Credential.Field>;

  packageName: string;

  secretPath: string;

  userId: string;
}

export namespace Credential {
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
}

export interface CredentialCreateResponse {
  data: Credential;

  message: string;

  success: true;
}

export interface CredentialRetrieveResponse {
  data: Credential;
}

export interface CredentialDeleteResponse {
  data: Credential;

  message: string;

  success: true;
}

export interface CredentialCreateParams {
  credentialName: string;

  fields: Array<CredentialCreateParams.Field>;
}

export namespace CredentialCreateParams {
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
}

export interface CredentialRetrieveParams {
  packageName: string;
}

export interface CredentialDeleteParams {
  packageName: string;
}

Credentials.Fields = Fields;

export declare namespace Credentials {
  export {
    type Credential as Credential,
    type CredentialCreateResponse as CredentialCreateResponse,
    type CredentialRetrieveResponse as CredentialRetrieveResponse,
    type CredentialDeleteResponse as CredentialDeleteResponse,
    type CredentialCreateParams as CredentialCreateParams,
    type CredentialRetrieveParams as CredentialRetrieveParams,
    type CredentialDeleteParams as CredentialDeleteParams,
  };

  export {
    Fields as Fields,
    type FieldCreateResponse as FieldCreateResponse,
    type FieldUpdateResponse as FieldUpdateResponse,
    type FieldDeleteResponse as FieldDeleteResponse,
    type FieldCreateParams as FieldCreateParams,
    type FieldUpdateParams as FieldUpdateParams,
    type FieldDeleteParams as FieldDeleteParams,
  };
}
