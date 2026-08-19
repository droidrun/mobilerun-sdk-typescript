// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProxyAPI from './proxy';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Proxy extends APIResource {
  /**
   * Routes the device's traffic through a SOCKS5 proxy supplied in the request body,
   * replacing any existing connection. A smartIp option can be used to select an IP
   * automatically; the legacy flat host/port/user/password fields remain supported.
   */
  connect(deviceID: string, params: ProxyConnectParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params
    return this._client.post(path`/devices/${deviceID}/proxy`, { body, ...options, headers: buildHeaders([{Accept: '*/*', ...(xDeviceDisplayID?.toString() != null ? { 'X-Device-Display-ID': xDeviceDisplayID?.toString() } : undefined)}, options?.headers]) });
  }

  /**
   * Disconnects the device's active proxy connection and clears its stored proxy
   * state. Returns successfully if no proxy is connected.
   */
  disconnect(deviceID: string, params: ProxyDisconnectParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {}
    return this._client.delete(path`/devices/${deviceID}/proxy`, { ...options, headers: buildHeaders([{Accept: '*/*', ...(xDeviceDisplayID?.toString() != null ? { 'X-Device-Display-ID': xDeviceDisplayID?.toString() } : undefined)}, options?.headers]) });
  }

  /**
   * Returns the device's current proxy connection state, including whether a proxy
   * is connected and its protocol and name.
   */
  status(deviceID: string, params: ProxyStatusParams | null | undefined = {}, options?: RequestOptions): APIPromise<ProxyStatusResponse> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {}
    return this._client.get(path`/devices/${deviceID}/proxy`, { ...options, headers: buildHeaders([{...(xDeviceDisplayID?.toString() != null ? { 'X-Device-Display-ID': xDeviceDisplayID?.toString() } : undefined)}, options?.headers]) });
  }
}

export interface ProxyStatusResponse {
  connected: boolean;

  /**
   * Active proxy name
   */
  name: string | null;

  /**
   * Active proxy protocol (socks5).
   */
  protocol: string | null;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface ProxyConnectParams {
  /**
   * Body param: Mobilerun Connect proxy — pass exactly one of id (use an existing
   * proxy's credentials) or country (provision or reuse a rotating residential proxy
   * for the device).
   */
  connect?: ProxyConnectParams.Connect;

  /**
   * @deprecated Body param
   */
  host?: string;

  /**
   * Body param: Proxy name
   */
  name?: string;

  /**
   * @deprecated Body param
   */
  password?: string;

  /**
   * @deprecated Body param
   */
  port?: number;

  /**
   * Body param
   */
  smartIp?: boolean;

  /**
   * Body param: SOCKS5 proxy configuration (required for socks5).
   */
  socks5?: ProxyConnectParams.Socks5;

  /**
   * @deprecated Body param
   */
  user?: string;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export namespace ProxyConnectParams {
  /**
   * Mobilerun Connect proxy — pass exactly one of id (use an existing proxy's
   * credentials) or country (provision or reuse a rotating residential proxy for the
   * device).
   */
  export interface Connect {
    /**
     * Existing Mobilerun Connect proxy id; its credentials are fetched server-side.
     */
    id?: string;

    /**
     * ISO 3166-1 alpha-2 country code; provisions (or reuses) a rotating residential
     * Mobilerun Connect proxy for the device.
     */
    country?: string;
  }

  /**
   * SOCKS5 proxy configuration (required for socks5).
   */
  export interface Socks5 {
    host: string;

    port: number;

    password?: string;

    user?: string;
  }
}

export interface ProxyDisconnectParams {
  'X-Device-Display-ID'?: number;
}

export interface ProxyStatusParams {
  'X-Device-Display-ID'?: number;
}

export declare namespace Proxy {
  export {
    type ProxyStatusResponse as ProxyStatusResponse,
    type ProxyConnectParams as ProxyConnectParams,
    type ProxyDisconnectParams as ProxyDisconnectParams,
    type ProxyStatusParams as ProxyStatusParams
  };
}
