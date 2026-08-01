// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';

export interface DeviceCarrier {
  GsmOperatorAlpha: string;

  GsmOperatorNumeric: number;

  GsmSimOperatorAlpha: string;

  GsmSimOperatorIsoCountry: string;

  GsmSimOperatorNumeric: number;

  PersistSysTimezone: string;
}

export interface DeviceIdentifiers {
  BootloaderSerialNumber: string;

  IdentifierAndroidID: string;

  IdentifierAppSetID: string;

  IdentifierBluetoothMAC: string;

  IdentifierGAID: string;

  IdentifierGSFID: string;

  IdentifierICCID: string;

  IdentifierIMEI: string;

  IdentifierIMSI: string;

  IdentifierMediaDRMID: string;

  IdentifierMEID: string;

  IdentifierPhoneNumber: string;

  IdentifierSerial: string;

  IdentifierWifiMAC: string;

  SerialNumber: string;
}

export interface DeviceSpec {
  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;

  androidVersion?: number;

  apps?: Array<string> | null;

  carrier?: DeviceCarrier;

  country?: string;

  files?: Array<string> | null;

  identifiers?: DeviceIdentifiers;

  locale?: string;

  location?: Location;

  name?: string;

  proxy?: DeviceSpec.Proxy;

  timezone?: string;
}

export namespace DeviceSpec {
  export interface Proxy {
    connect?: Proxy.Connect;

    name?: string;

    smartIp?: boolean;

    socks5?: Shared.Socks5;
  }

  export namespace Proxy {
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
  }
}

export interface Location {
  latitude: number;

  longitude: number;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface Meta {
  hasNext: boolean;

  hasPrev: boolean;

  page: number;

  pages: number;

  pageSize: number;

  total: number;
}

export interface Pagination {
  hasNext: boolean;

  hasPrev: boolean;

  page: number;

  pages: number;

  pageSize: number;

  total: number;
}

/**
 * Pagination metadata.
 */
export interface PaginationMeta {
  /**
   * Whether there is a next page
   */
  hasNext: boolean;

  /**
   * Whether there is a previous page
   */
  hasPrev: boolean;

  /**
   * Current page number (1-based)
   */
  page: number;

  /**
   * Total number of pages
   */
  pages: number;

  /**
   * Number of items per page
   */
  pageSize: number;

  /**
   * Total number of items
   */
  total: number;
}

export interface PermissionSet {
  execute: boolean;

  read: boolean;

  write: boolean;
}

export interface Socks5 {
  host: string;

  password: string;

  port: number;

  user: string;
}
