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

export class Credentials extends APIResource {
  fields: FieldsAPI.Fields = new FieldsAPI.Fields(this._client);

  /**
   * Creates a credential under the given package with a `credentialName` and at
   * least one field. Field types must be unique. Each field has a `fieldType`
   * (email, username, password, api_token, phone_number, two_factor_secret, or
   * backup_codes) and a value.
   */
  create(
    packageName: string,
    body: CredentialCreateParams,
    options?: RequestOptions,
  ): APIPromise<CredentialCreateResponse> {
    return this._client.post(path`/credentials/packages/${packageName}`, { body, ...options });
  }

  /**
   * Sets or clears the optional `label` (human-readable name, free text, max 200
   * characters) of an existing credential. `null` or an empty text clears it. Works
   * for linked credentials too: the label is metadata of the credential, not a field
   * of the linked item. Returns the updated credential.
   */
  update(
    credentialName: string,
    params: CredentialUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CredentialUpdateResponse> {
    const { packageName, ...body } = params;
    return this._client.patch(path`/credentials/packages/${packageName}/credentials/${credentialName}`, {
      body,
      ...options,
    });
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

export interface CredentialCreateResponse {
  data: CredentialCreateResponse.Data;

  message: string;

  success: true;
}

export namespace CredentialCreateResponse {
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

export interface CredentialUpdateResponse {
  data: CredentialUpdateResponse.Data;

  message: string;

  success: true;
}

export namespace CredentialUpdateResponse {
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

export interface CredentialDeleteResponse {
  data: CredentialDeleteResponse.Data;

  message: string;

  success: true;
}

export namespace CredentialDeleteResponse {
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

export interface CredentialCreateParams {
  credentialName: string;

  fields: Array<CredentialCreateParams.Field>;

  label?: string;
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
      | 'backup_codes'
      | 'cc_number'
      | 'cc_exp'
      | 'cc_csc'
      | 'cc_name';

    value: string;
  }
}

export interface CredentialUpdateParams {
  /**
   * Path param
   */
  packageName: string;

  /**
   * Body param
   */
  label: string | null;
}

export interface CredentialDeleteParams {
  packageName: string;
}

Credentials.Fields = Fields;

export declare namespace Credentials {
  export {
    type CredentialCreateResponse as CredentialCreateResponse,
    type CredentialUpdateResponse as CredentialUpdateResponse,
    type CredentialDeleteResponse as CredentialDeleteResponse,
    type CredentialCreateParams as CredentialCreateParams,
    type CredentialUpdateParams as CredentialUpdateParams,
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
