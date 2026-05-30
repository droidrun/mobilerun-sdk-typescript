// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as ProxiesAPI from './proxies';

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

  proxy?: ProxiesAPI.ProxyConfig;

  timezone?: string;
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
