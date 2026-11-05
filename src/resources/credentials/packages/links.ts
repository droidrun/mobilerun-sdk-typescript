// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Links extends APIResource {
  /**
   * Link a 1Password item to a credential
   */
  create(
    packageName: string,
    body: LinkCreateParams,
    options?: RequestOptions,
  ): APIPromise<LinkCreateResponse> {
    return this._client.post(path`/credentials/packages/${packageName}/links`, { body, ...options });
  }
}

export interface LinkCreateResponse {
  data: LinkCreateResponse.Data;
}

export namespace LinkCreateResponse {
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

    link?: Data.Link;

    source?: 'mobilerun' | 'onepassword';
  }

  export namespace Data {
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

export interface LinkCreateParams {
  credentialName: string;

  fieldMap: Array<LinkCreateParams.FieldMap>;

  itemId: string;

  vaultId: string;
}

export namespace LinkCreateParams {
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

export declare namespace Links {
  export { type LinkCreateResponse as LinkCreateResponse, type LinkCreateParams as LinkCreateParams };
}
