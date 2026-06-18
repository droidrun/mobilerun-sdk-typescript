// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Network Proxies
 */
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
  update(
    proxyID: string,
    body: ProxyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProxyUpdateResponse> {
    return this._client.put(path`/proxies/${proxyID}`, { body, ...options });
  }

  /**
   * List all proxy configs for the authenticated user
   */
  list(
    query: ProxyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProxyListResponse> {
    return this._client.get('/proxies', { query, ...options });
  }

  /**
   * Delete a proxy config
   */
  delete(proxyID: string, options?: RequestOptions): APIPromise<ProxyDeleteResponse> {
    return this._client.delete(path`/proxies/${proxyID}`, options);
  }

  /**
   * Lookup proxy location
   */
  lookup(body: ProxyLookupParams, options?: RequestOptions): APIPromise<ProxyLookupResponse> {
    return this._client.post('/proxies/lookup', { body, ...options });
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

export interface ProxyLookupResponse {
  /**
   * IP address of the proxy.
   */
  ip: string;

  /**
   * Whether the IP is a mobile connection.
   */
  isMobile: boolean;

  /**
   * Latitude of the proxy.
   */
  latitude: number;

  /**
   * Longitude of the proxy.
   */
  longitude: number;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;

  /**
   * Mobile carrier information.
   */
  carrier?: ProxyLookupResponse.Carrier;

  /**
   * City of the proxy.
   */
  city?: string;

  /**
   * Country of the proxy.
   */
  country?: string;

  /**
   * ISO country code.
   */
  countryCode?: string;

  /**
   * Region of the proxy.
   */
  region?: string;

  /**
   * Timezone of the proxy.
   */
  timezone?: string;
}

export namespace ProxyLookupResponse {
  /**
   * Mobile carrier information.
   */
  export interface Carrier {
    /**
     * Mobile Country Code.
     */
    mcc?: string;

    /**
     * Mobile Network Code.
     */
    mnc?: string;

    /**
     * Carrier name.
     */
    name?: string;
  }
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

export interface ProxyLookupParams {
  /**
   * SOCKS5 proxy configuration.
   */
  socks5: ProxyLookupParams.Socks5;
}

export namespace ProxyLookupParams {
  /**
   * SOCKS5 proxy configuration.
   */
  export interface Socks5 {
    host: string;

    port: number;

    password?: string;

    user?: string;
  }
}

export declare namespace Proxies {
  export {
    type ProxyConfig as ProxyConfig,
    type ProxyCreateResponse as ProxyCreateResponse,
    type ProxyRetrieveResponse as ProxyRetrieveResponse,
    type ProxyUpdateResponse as ProxyUpdateResponse,
    type ProxyListResponse as ProxyListResponse,
    type ProxyDeleteResponse as ProxyDeleteResponse,
    type ProxyLookupResponse as ProxyLookupResponse,
    type ProxyCreateParams as ProxyCreateParams,
    type ProxyUpdateParams as ProxyUpdateParams,
    type ProxyListParams as ProxyListParams,
    type ProxyLookupParams as ProxyLookupParams,
  };
}
