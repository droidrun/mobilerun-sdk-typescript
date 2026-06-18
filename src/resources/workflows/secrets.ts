// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Secrets extends APIResource {
  /**
   * Create a user secret (write-only; value cannot be read back)
   */
  create(body: SecretCreateParams, options?: RequestOptions): APIPromise<SecretCreateResponse> {
    return this._client.post('/secrets', { body, ...options });
  }

  /**
   * List user secrets (metadata only — values never returned)
   */
  list(options?: RequestOptions): APIPromise<SecretListResponse> {
    return this._client.get('/secrets', options);
  }

  /**
   * Delete a user secret
   */
  delete(secretID: string, options?: RequestOptions): APIPromise<SecretDeleteResponse> {
    return this._client.delete(path`/secrets/${secretID}`, options);
  }
}

export interface UserSecret {
  id: string;

  createdAt: string | null;

  description: string | null;

  name: string;

  updatedAt: string | null;
}

export interface SecretCreateResponse {
  data: UserSecret;
}

export interface SecretListResponse {
  data: Array<UserSecret>;
}

export interface SecretDeleteResponse {
  message: string;
}

export interface SecretCreateParams {
  name: string;

  value: string;

  description?: string;
}

export declare namespace Secrets {
  export {
    type UserSecret as UserSecret,
    type SecretCreateResponse as SecretCreateResponse,
    type SecretListResponse as SecretListResponse,
    type SecretDeleteResponse as SecretDeleteResponse,
    type SecretCreateParams as SecretCreateParams,
  };
}
