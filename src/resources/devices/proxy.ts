// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Proxy extends APIResource {
  /**
   * Connect proxy
   */
  connect(deviceID: string, params: ProxyConnectParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.post(path`/devices/${deviceID}/proxy`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          Accept: '*/*',
          ...(xDeviceDisplayID?.toString() != null ?
            { 'X-Device-Display-ID': xDeviceDisplayID?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Disconnect proxy
   */
  disconnect(
    deviceID: string,
    params: ProxyDisconnectParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {};
    return this._client.delete(path`/devices/${deviceID}/proxy`, {
      ...options,
      headers: buildHeaders([
        {
          Accept: '*/*',
          ...(xDeviceDisplayID?.toString() != null ?
            { 'X-Device-Display-ID': xDeviceDisplayID?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Get proxy connection state
   */
  status(
    deviceID: string,
    params: ProxyStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProxyStatusResponse> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {};
    return this._client.get(path`/devices/${deviceID}/proxy`, {
      ...options,
      headers: buildHeaders([
        {
          ...(xDeviceDisplayID?.toString() != null ?
            { 'X-Device-Display-ID': xDeviceDisplayID?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export interface ProxyStatusResponse {
  connected: boolean;

  /**
   * Active proxy name
   */
  name: string | null;

  /**
   * Active proxy protocol (socks5 or wireguard).
   */
  protocol: string | null;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface ProxyConnectParams {
  /**
   * @deprecated Body param
   */
  host?: string;

  /**
   * Body param: Proxy name (used for wireguard tunnel name)
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
   * Body param: WireGuard tunnel configuration file content (required for
   * wireguard).
   */
  wireguard?: string;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export namespace ProxyConnectParams {
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
    type ProxyStatusParams as ProxyStatusParams,
  };
}
