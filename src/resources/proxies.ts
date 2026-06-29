// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Proxies extends APIResource {
  /**
   * Creates a proxy config. The body is a discriminated union on `protocol`:
   * `socks5` requires name, host, port, user, and password, while `wireguard`
   * requires name and a config string. Returns the created config with its generated
   * `proxyId`.
   */
  create(body: ProxyCreateParams, options?: RequestOptions): APIPromise<ProxyCreateResponse> {
    return this._client.post('/proxies', { body, ...options });
  }

  /**
   * Fetches a single proxy config by its `proxyId`. The response shape depends on
   * the proxy's `protocol` (socks5 or wireguard). Returns not found if no matching
   * config exists.
   */
  retrieve(proxyID: string, options?: RequestOptions): APIPromise<ProxyRetrieveResponse> {
    return this._client.get(path`/proxies/${proxyID}`, options);
  }

  /**
   * Replaces the proxy config identified by `proxyId` with the provided body. As
   * with creation, the body is a `protocol`-discriminated union of socks5 or
   * wireguard fields. Returns the updated config.
   */
  update(
    proxyID: string,
    body: ProxyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProxyUpdateResponse> {
    return this._client.put(path`/proxies/${proxyID}`, { body, ...options });
  }

  /**
   * Returns all proxy configs for the authenticated user. An optional `protocol`
   * query parameter (`socks5` or `wireguard`) filters the results by proxy type.
   */
  list(
    query: ProxyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProxyListResponse> {
    return this._client.get('/proxies', { query, ...options });
  }

  /**
   * Permanently deletes the proxy config identified by `proxyId` and returns the
   * deleted config. Returns not found if no matching config exists.
   */
  delete(proxyID: string, options?: RequestOptions): APIPromise<ProxyDeleteResponse> {
    return this._client.delete(path`/proxies/${proxyID}`, options);
  }
}

export type ProxyConfig = ProxyConfig.Socks5ProxyConfig | ProxyConfig.WireguardProxyConfig;

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

export type ProxyCreateParams = ProxyCreateParams.CreateSocks5Proxy | ProxyCreateParams.CreateWireguardProxy;

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

export type ProxyUpdateParams = ProxyUpdateParams.UpdateSocks5Proxy | ProxyUpdateParams.UpdateWireguardProxy;

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
    type ProxyListParams as ProxyListParams,
  };
}
