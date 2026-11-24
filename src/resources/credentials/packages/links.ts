// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Links extends APIResource {
  /**
   * Creates a read-only credential that resolves its values live from the provider.
   * `provider` defaults to `onepassword` (vaultId, itemId, fieldMap). `wallet` takes
   * a cardId, is only allowed in the reserved payment_cards package, and only the
   * cardholder may link the card (404 otherwise). Never replaces an existing
   * credential of the same name.
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

    label?: string;

    link?: Data.UnionMember0 | Data.UnionMember1;

    source?: 'mobilerun' | 'onepassword' | 'wallet';
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
        | 'backup_codes'
        | 'cc_number'
        | 'cc_exp'
        | 'cc_csc'
        | 'cc_name';

      value: string;
    }

    export interface UnionMember0 {
      fieldMap: Array<UnionMember0.FieldMap>;

      itemId: string;

      itemTitle: string;

      provider: 'onepassword';

      vaultId: string;

      vaultName: string;
    }

    export namespace UnionMember0 {
      export interface FieldMap {
        fieldId: string;

        fieldType:
          | 'email'
          | 'username'
          | 'password'
          | 'api_token'
          | 'phone_number'
          | 'two_factor_secret'
          | 'backup_codes'
          | 'cc_number'
          | 'cc_exp'
          | 'cc_csc'
          | 'cc_name';
      }
    }

    export interface UnionMember1 {
      cardId: string;

      fieldMap: Array<UnionMember1.FieldMap>;

      label: string;

      provider: 'wallet';
    }

    export namespace UnionMember1 {
      export interface FieldMap {
        fieldId: string;

        fieldType:
          | 'email'
          | 'username'
          | 'password'
          | 'api_token'
          | 'phone_number'
          | 'two_factor_secret'
          | 'backup_codes'
          | 'cc_number'
          | 'cc_exp'
          | 'cc_csc'
          | 'cc_name';
      }
    }
  }
}

export type LinkCreateParams =
  LinkCreateParams.LinkOnePasswordCredentialBody | LinkCreateParams.LinkWalletCredentialBody;

export declare namespace LinkCreateParams {
  export interface LinkOnePasswordCredentialBody {
    credentialName: string;

    fieldMap: Array<LinkOnePasswordCredentialBody.FieldMap>;

    itemId: string;

    vaultId: string;

    provider?: 'onepassword';
  }

  export namespace LinkOnePasswordCredentialBody {
    export interface FieldMap {
      fieldId: string;

      fieldType:
        | 'email'
        | 'username'
        | 'password'
        | 'api_token'
        | 'phone_number'
        | 'two_factor_secret'
        | 'backup_codes'
        | 'cc_number'
        | 'cc_exp'
        | 'cc_csc'
        | 'cc_name';
    }
  }

  export interface LinkWalletCredentialBody {
    cardId: string;

    credentialName: string;

    provider: 'wallet';
  }
}

export declare namespace Links {
  export { type LinkCreateResponse as LinkCreateResponse, type LinkCreateParams as LinkCreateParams };
}
