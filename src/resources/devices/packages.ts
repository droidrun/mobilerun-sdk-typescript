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
    params: PackageListParams,
    options?: RequestOptions,
  ): APIPromise<PackageListResponse | null> {
    const { 'X-User-ID': xUserID, ...query } = params;
    return this._client.get(path`/devices/${deviceID}/packages`, {
      query,
      ...options,
      headers: buildHeaders([{ 'X-User-ID': xUserID }, options?.headers]),
    });
  }
}

export type PackageListResponse = Array<string>;

export interface PackageListParams {
  /**
   * Header param:
   */
  'X-User-ID': string;

  /**
   * Query param:
   */
  includeSystemPackages?: boolean;
}

export declare namespace Packages {
  export { type PackageListResponse as PackageListResponse, type PackageListParams as PackageListParams };
}
