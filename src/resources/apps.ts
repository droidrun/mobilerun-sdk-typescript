// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Apps extends APIResource {
  /**
   * Retrieves an app by its ID
   *
   * @example
   * ```ts
   * const app = await client.apps.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AppRetrieveResponse> {
    return this._client.get(path`/apps/${id}`, options);
  }

  /**
   * Retrieves a paginated list of apps with filtering and search capabilities
   *
   * @example
   * ```ts
   * const apps = await client.apps.list();
   * ```
   */
  list(query: AppListParams | null | undefined = {}, options?: RequestOptions): APIPromise<AppListResponse> {
    return this._client.get('/apps', { query, ...options });
  }

  /**
   * Deletes an uploaded app by ID. Removes files from R2 storage and the database
   * entry.
   *
   * @example
   * ```ts
   * const app = await client.apps.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AppDeleteResponse> {
    return this._client.delete(path`/apps/${id}`, options);
  }

  /**
   * Verifies the APK file exists in R2 and sets the app status to available.
   *
   * @example
   * ```ts
   * const response = await client.apps.confirmUpload(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  confirmUpload(id: string, options?: RequestOptions): APIPromise<AppConfirmUploadResponse> {
    return this._client.post(path`/apps/${id}/confirm-upload`, options);
  }

  /**
   * Creates or updates an app and returns pre-signed Cloudflare R2 upload URLs for
   * each file
   *
   * @example
   * ```ts
   * const response = await client.apps.createSignedUploadURL({
   *   displayName: 'displayName',
   *   files: [{ fileName: 'x' }],
   *   packageName: 'packageName',
   *   sizeBytes: 0,
   *   targetSdk: 0,
   *   versionCode: 0,
   *   versionName: 'versionName',
   * });
   * ```
   */
  createSignedUploadURL(
    body: AppCreateSignedUploadURLParams,
    options?: RequestOptions,
  ): APIPromise<AppCreateSignedUploadURLResponse> {
    return this._client.post('/apps/create-signed-upload-url', { body, ...options });
  }

  /**
   * Sets the app status to failed.
   *
   * @example
   * ```ts
   * const response = await client.apps.markFailed(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  markFailed(id: string, options?: RequestOptions): APIPromise<AppMarkFailedResponse> {
    return this._client.post(path`/apps/${id}/mark-failed`, options);
  }
}

export interface AppRetrieveResponse {
  data: AppRetrieveResponse.Data;
}

export namespace AppRetrieveResponse {
  export interface Data {
    id: string;

    categoryName: string | null;

    country:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AP'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BQ'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'HR'
      | 'CU'
      | 'CW'
      | 'CY'
      | 'CZ'
      | 'CI'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GG'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IM'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JE'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'ME'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'AN'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'KP'
      | 'MK'
      | 'MP'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'BL'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'MF'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'RS'
      | 'CS'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SX'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'SS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'US'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX';

    createdAt: string | null;

    description: string | null;

    developerName: string | null;

    displayName: string;

    expectedFiles: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    iconURL: string;

    packageName: string;

    privacyPolicyUrl: string | null;

    queuedAt: string | null;

    ratingCount: number | null;

    ratingScore: string | null;

    sizeBytes: number | null;

    source: 'uploaded' | 'store';

    status: 'queued' | 'available' | 'failed';

    stealthTier: 'tier1' | 'tier2' | 'tier3' | null;

    targetSdk: number | null;

    type: 'android' | 'ios';

    updatedAt: string | null;

    userId: string | null;

    versionCode: number;

    versionName: string;
  }
}

export interface AppListResponse {
  count: AppListResponse.Count;

  items: Array<AppListResponse.Item>;

  pagination: Shared.Pagination;
}

export namespace AppListResponse {
  export interface Count {
    availableCount: number;

    queuedCount: number;

    storeCount: number;

    totalCount: number;

    uploadCount: number;
  }

  export interface Item {
    id: string;

    categoryName: string | null;

    country:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AP'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BQ'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'HR'
      | 'CU'
      | 'CW'
      | 'CY'
      | 'CZ'
      | 'CI'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GG'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IM'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JE'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'ME'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'AN'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'KP'
      | 'MK'
      | 'MP'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'BL'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'MF'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'RS'
      | 'CS'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SX'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'SS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'US'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX';

    createdAt: string | null;

    description: string | null;

    developerName: string | null;

    displayName: string;

    expectedFiles: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

    iconURL: string;

    packageName: string;

    privacyPolicyUrl: string | null;

    queuedAt: string | null;

    ratingCount: number | null;

    ratingScore: string | null;

    sizeBytes: number | null;

    source: 'uploaded' | 'store';

    status: 'queued' | 'available' | 'failed';

    stealthTier: 'tier1' | 'tier2' | 'tier3' | null;

    targetSdk: number | null;

    type: 'android' | 'ios';

    updatedAt: string | null;

    userId: string | null;

    versionCode: number;

    versionName: string;
  }
}

export interface AppDeleteResponse {
  message: string;

  success: true;
}

export interface AppConfirmUploadResponse {
  message: string;

  success: true;
}

export interface AppCreateSignedUploadURLResponse {
  /**
   * App ID in the database
   */
  id: string;

  /**
   * Pre-signed Cloudflare R2 URLs for uploading APK files
   */
  r2UploadUrls: Array<AppCreateSignedUploadURLResponse.R2UploadURL>;
}

export namespace AppCreateSignedUploadURLResponse {
  export interface R2UploadURL {
    fileName: string;

    r2UploadUrl: string;
  }
}

export interface AppMarkFailedResponse {
  message: string;

  success: true;
}

export interface AppListParams {
  order?: 'asc' | 'desc';

  page?: number;

  pageSize?: number;

  query?: string;

  sortBy?: 'createdAt' | 'name';

  source?: 'all' | 'uploaded' | 'store' | 'queued';
}

export interface AppCreateSignedUploadURLParams {
  displayName: string;

  files: Array<AppCreateSignedUploadURLParams.File>;

  packageName: string;

  sizeBytes: number;

  targetSdk: number;

  versionCode: number;

  versionName: string;

  categoryName?: string;

  /**
   * Country code for Search Results
   */
  country?: string;

  description?: string;

  developerName?: string;

  iconURL?: string;

  ratingCount?: number;

  ratingScore?: number;
}

export namespace AppCreateSignedUploadURLParams {
  export interface File {
    fileName: string;

    contentType?: string;
  }
}

export declare namespace Apps {
  export {
    type AppRetrieveResponse as AppRetrieveResponse,
    type AppListResponse as AppListResponse,
    type AppDeleteResponse as AppDeleteResponse,
    type AppConfirmUploadResponse as AppConfirmUploadResponse,
    type AppCreateSignedUploadURLResponse as AppCreateSignedUploadURLResponse,
    type AppMarkFailedResponse as AppMarkFailedResponse,
    type AppListParams as AppListParams,
    type AppCreateSignedUploadURLParams as AppCreateSignedUploadURLParams,
  };
}
