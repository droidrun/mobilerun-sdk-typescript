// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class Proxies extends APIResource {}

export interface ProxyConfig {
  name?: string;

  smartIp?: boolean;

  socks5?: ProxyConfig.Socks5;

  wireguard?: string;
}

export namespace ProxyConfig {
  export interface Socks5 {
    host: string;

    password: string;

    port: number;

    user: string;
  }
}

export declare namespace Proxies {
  export { type ProxyConfig as ProxyConfig };
}
