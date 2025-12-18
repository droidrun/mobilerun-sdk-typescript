// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Packages extends APIResource {
  /**
   * List packages
   */
  list(
    deviceID: string,
    params: PackageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PackageListResponse | null> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...query } = params ?? {};
    return this._client.get(path`/devices/${deviceID}/packages`, {
      query,
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

export type PackageListResponse = Array<string>;

export interface PackageListParams {
  /**
   * Query param:
   */
  includeSystemPackages?: boolean;

  /**
   * Header param:
   */
  'X-Device-Display-ID'?: number | null;
}

export declare namespace Packages {
  export { type PackageListResponse as PackageListResponse, type PackageListParams as PackageListParams };
}
