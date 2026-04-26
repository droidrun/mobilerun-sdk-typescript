// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Proxies extends APIResource {
  /**
   * Create a new proxy config
   */
  create(body: ProxyCreateParams, options?: RequestOptions): APIPromise<ProxyCreateResponse> {
    return this._client.post('/proxies', { body, ...options });
  }

  /**
   * Get a specific proxy config
   */
  retrieve(proxyID: string, options?: RequestOptions): APIPromise<ProxyRetrieveResponse> {
    return this._client.get(path`/proxies/${proxyID}`, options);
  }

  /**
   * Update a proxy config
   */
  update(proxyID: string, body: ProxyUpdateParams, options?: RequestOptions): APIPromise<ProxyUpdateResponse> {
    return this._client.put(path`/proxies/${proxyID}`, { body, ...options });
  }

  /**
   * List all proxy configs for the authenticated user
   */
  list(query: ProxyListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ProxyListResponse> {
    return this._client.get('/proxies', { query, ...options });
  }

  /**
   * Delete a proxy config
   */
  delete(proxyID: string, options?: RequestOptions): APIPromise<ProxyDeleteResponse> {
    return this._client.delete(path`/proxies/${proxyID}`, options);
  }
}

export type ProxyConfig = ProxyConfig.Socks5ProxyConfig | ProxyConfig.WireguardProxyConfig

export namespace ProxyConfig {
  export interface Socks5ProxyConfig {
    host: string;

    name: string;

    password: string;

    port: number;

    protocol: 'socks5';

    proxyId: string;

    user: string;
  }

  export interface WireguardProxyConfig {
    config: string;

    name: string;

    protocol: 'wireguard';

    proxyId: string;
  }
}

export interface ProxyCreateResponse {
  data: ProxyConfig;

  message: string;

  success: true;
}

export interface ProxyRetrieveResponse {
  data: ProxyConfig;
}

export interface ProxyUpdateResponse {
  data: ProxyConfig;

  message: string;

  success: true;
}

export interface ProxyListResponse {
  data: Array<ProxyConfig>;
}

export interface ProxyDeleteResponse {
  data: ProxyConfig;

  message: string;

  success: true;
}

export type ProxyCreateParams = ProxyCreateParams.CreateSocks5Proxy | ProxyCreateParams.CreateWireguardProxy

export declare namespace ProxyCreateParams {
  export interface CreateSocks5Proxy {
    host: string;

    name: string;

    password: string;

    port: number;

    protocol: 'socks5';

    user: string;
  }

  export interface CreateWireguardProxy {
    config: string;

    name: string;

    protocol: 'wireguard';
  }
}

export type ProxyUpdateParams = ProxyUpdateParams.UpdateSocks5Proxy | ProxyUpdateParams.UpdateWireguardProxy

export declare namespace ProxyUpdateParams {
  export interface UpdateSocks5Proxy {
    host: string;

    name: string;

    password: string;

    port: number;

    protocol: 'socks5';

    user: string;
  }

  export interface UpdateWireguardProxy {
    config: string;

    name: string;

    protocol: 'wireguard';
  }
}

export interface ProxyListParams {
  protocol?: 'socks5' | 'wireguard';
}

export declare namespace Proxies {
  export {
    type ProxyConfig as ProxyConfig,
    type ProxyCreateResponse as ProxyCreateResponse,
    type ProxyRetrieveResponse as ProxyRetrieveResponse,
    type ProxyUpdateResponse as ProxyUpdateResponse,
    type ProxyListResponse as ProxyListResponse,
    type ProxyDeleteResponse as ProxyDeleteResponse,
    type ProxyCreateParams as ProxyCreateParams,
    type ProxyUpdateParams as ProxyUpdateParams,
    type ProxyListParams as ProxyListParams
  };
}
