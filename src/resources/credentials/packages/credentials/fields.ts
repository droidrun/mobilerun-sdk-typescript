// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CredentialsAPI from './credentials';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Vault & Secrets
 */
export class Fields extends APIResource {
  /**
   * Adds a single field to an existing credential. The body specifies a `fieldType`
   * (one of the supported field types) and its value. Returns a conflict if a field
   * of that type already exists on the credential.
   */
  create(
    credentialName: string,
    params: FieldCreateParams,
    options?: RequestOptions,
  ): APIPromise<FieldCreateResponse> {
    const { packageName, ...body } = params;
    return this._client.post(
      path`/credentials/packages/${packageName}/credentials/${credentialName}/fields`,
      { body, ...options },
    );
  }

  /**
   * Updates the value of an existing field on a credential, identified by
   * `packageName`, `credentialName`, and `fieldType` in the path. The body carries
   * the new value and returns the updated credential.
   */
  update(
    fieldType:
      | 'email'
      | 'username'
      | 'password'
      | 'api_token'
      | 'phone_number'
      | 'two_factor_secret'
      | 'backup_codes',
    params: FieldUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FieldUpdateResponse> {
    const { packageName, credentialName, ...body } = params;
    return this._client.patch(
      path`/credentials/packages/${packageName}/credentials/${credentialName}/fields/${fieldType}`,
      { body, ...options },
    );
  }

  /**
   * Removes a single field of the given `fieldType` from the specified credential
   * while leaving the credential itself intact. Returns the updated credential.
   */
  delete(
    fieldType:
      | 'email'
      | 'username'
      | 'password'
      | 'api_token'
      | 'phone_number'
      | 'two_factor_secret'
      | 'backup_codes',
    params: FieldDeleteParams,
    options?: RequestOptions,
  ): APIPromise<FieldDeleteResponse> {
    const { packageName, credentialName } = params;
    return this._client.delete(
      path`/credentials/packages/${packageName}/credentials/${credentialName}/fields/${fieldType}`,
      options,
    );
  }
}

export interface FieldCreateResponse {
  data: CredentialsAPI.Credential;

  message: string;

  success: true;
}

export interface FieldUpdateResponse {
  data: CredentialsAPI.Credential;

  message: string;

  success: true;
}

export interface FieldDeleteResponse {
  data: CredentialsAPI.Credential;

  message: string;

  success: true;
}

export interface FieldCreateParams {
  /**
   * Path param
   */
  packageName: string;

  /**
   * Body param
   */
  fieldType:
    | 'email'
    | 'username'
    | 'password'
    | 'api_token'
    | 'phone_number'
    | 'two_factor_secret'
    | 'backup_codes';

  /**
   * Body param
   */
  value: string;
}

export interface FieldUpdateParams {
  /**
   * Path param
   */
  packageName: string;

  /**
   * Path param
   */
  credentialName: string;

  /**
   * Body param
   */
  value: string;
}

export interface FieldDeleteParams {
  packageName: string;

  credentialName: string;
}

export declare namespace Fields {
  export {
    type FieldCreateResponse as FieldCreateResponse,
    type FieldUpdateResponse as FieldUpdateResponse,
    type FieldDeleteResponse as FieldDeleteResponse,
    type FieldCreateParams as FieldCreateParams,
    type FieldUpdateParams as FieldUpdateParams,
    type FieldDeleteParams as FieldDeleteParams,
  };
}
