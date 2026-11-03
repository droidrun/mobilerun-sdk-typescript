// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Fields extends APIResource {
  /**
   * List 1Password field metadata
   */
  list(itemID: string, params: FieldListParams, options?: RequestOptions): APIPromise<FieldListResponse> {
    const { vaultId } = params;
    return this._client.get(path`/credentials/onepassword/vaults/${vaultId}/items/${itemID}/fields`, options);
  }
}

export interface FieldListResponse {
  data: Array<FieldListResponse.Data>;
}

export namespace FieldListResponse {
  export interface Data {
    id: string;

    fieldType: string;

    title: string;

    sectionId?: string;
  }
}

export interface FieldListParams {
  vaultId: string;
}

export declare namespace Fields {
  export { type FieldListResponse as FieldListResponse, type FieldListParams as FieldListParams };
}
