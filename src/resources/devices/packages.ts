// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Packages extends APIResource {
  /**
   * List packages
   */
  list(
    deviceID: string,
    query: PackageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PackageListResponse | null> {
    return this._client.get(path`/devices/${deviceID}/packages`, { query, ...options });
  }
}

export type PackageListResponse = Array<string>;

export interface PackageListParams {
  includeSystemPackages?: boolean;
}

export declare namespace Packages {
  export { type PackageListResponse as PackageListResponse, type PackageListParams as PackageListParams };
}
