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
}

export interface ProxyConnectParams {
  /**
   * @deprecated Body param
   */
  host?: string;

  /**
   * @deprecated Body param
   */
  password?: string;

  /**
   * @deprecated Body param
   */
  port?: number;

  /**
   * Body param: Preferred new format.
   */
  proxy?: ProxyConnectParams.Proxy;

  /**
   * Body param
   */
  smartIp?: boolean;

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
   * Preferred new format.
   */
  export interface Proxy {
    host: string;

    password: string;

    port: number;

    user: string;
  }
}

export interface ProxyDisconnectParams {
  'X-Device-Display-ID'?: number;
}

export declare namespace Proxy {
  export {
    type ProxyConnectParams as ProxyConnectParams,
    type ProxyDisconnectParams as ProxyDisconnectParams,
  };
}
