// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VaultsAPI from './vaults/vaults';
import { Vaults } from './vaults/vaults';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Onepassword extends APIResource {
  vaults: VaultsAPI.Vaults = new VaultsAPI.Vaults(this._client);

  /**
   * Get 1Password connection
   */
  retrieve(options?: RequestOptions): APIPromise<OnepasswordRetrieveResponse> {
    return this._client.get('/credentials/onepassword', options);
  }

  /**
   * Connect a 1Password service account
   */
  connect(body: OnepasswordConnectParams, options?: RequestOptions): APIPromise<OnepasswordConnectResponse> {
    return this._client.put('/credentials/onepassword', { body, ...options });
  }

  /**
   * Disconnect 1Password
   */
  disconnect(options?: RequestOptions): APIPromise<OnepasswordDisconnectResponse> {
    return this._client.delete('/credentials/onepassword', options);
  }
}

export interface OnepasswordRetrieveResponse {
  data: OnepasswordRetrieveResponse.Data;
}

export namespace OnepasswordRetrieveResponse {
  export interface Data {
    connected: boolean;

    connectedAt?: string;

    connectedBy?: string;

    vaults?: Array<Data.Vault>;
  }

  export namespace Data {
    export interface Vault {
      id: string;

      title: string;
    }
  }
}

export interface OnepasswordConnectResponse {
  data: OnepasswordConnectResponse.Data;
}

export namespace OnepasswordConnectResponse {
  export interface Data {
    connected: boolean;

    connectedAt?: string;

    connectedBy?: string;

    vaults?: Array<Data.Vault>;
  }

  export namespace Data {
    export interface Vault {
      id: string;

      title: string;
    }
  }
}

export interface OnepasswordDisconnectResponse {
  message: string;
}

export interface OnepasswordConnectParams {
  serviceAccountToken: string;
}

Onepassword.Vaults = Vaults;

export declare namespace Onepassword {
  export {
    type OnepasswordRetrieveResponse as OnepasswordRetrieveResponse,
    type OnepasswordConnectResponse as OnepasswordConnectResponse,
    type OnepasswordDisconnectResponse as OnepasswordDisconnectResponse,
    type OnepasswordConnectParams as OnepasswordConnectParams,
  };

  export { Vaults as Vaults };
}
