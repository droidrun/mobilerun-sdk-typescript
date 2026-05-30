// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Proxies extends APIResource {
  /**
   * Lookup proxy location
   */
  lookup(body: ProxyLookupParams, options?: RequestOptions): APIPromise<ProxyLookupResponse> {
    return this._client.post('/proxies/lookup', { body, ...options });
  }
}

export interface ProxyConfig {
  name?: string;

  smartIp?: boolean;

  socks5?: Shared.Socks5;
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
    type ProxyLookupResponse as ProxyLookupResponse,
    type ProxyLookupParams as ProxyLookupParams,
  };
}
