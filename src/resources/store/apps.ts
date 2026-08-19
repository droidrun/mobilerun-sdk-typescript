// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AppsAPI from './apps';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Apps extends APIResource {
  /**
   * Retrieves a single published store listing, including freshly-resolved
   * screenshotUrls. 404 for a draft or absent listing.
   */
  retrieve(appID: string, options?: RequestOptions): APIPromise<AppRetrieveResponse> {
    return this._client.get(path`/store/apps/${appID}`, options);
  }

  /**
   * Paginated list of published store listings, ordered featured desc, sortOrder
   * asc, displayName asc.
   */
  list(query: AppListParams | null | undefined = {}, options?: RequestOptions): APIPromise<AppListResponse> {
    return this._client.get('/store/apps', { query, ...options });
  }

  /**
   * Installs a published store app into the caller's workspace — the existing
   * device-install path takes over from there. 404 if no published listing exists.
   */
  addToWorkspace(appID: string, options?: RequestOptions): APIPromise<AppAddToWorkspaceResponse> {
    return this._client.post(path`/store/apps/${appID}/add`, options);
  }
}

export interface AppRetrieveResponse {
  data: AppRetrieveResponse.Data;
}

export namespace AppRetrieveResponse {
  export interface Data {
    id: string;

    bundleId: string;

    category: string | null;

    createdAt: string | null;

    description: string | null;

    developerName: string | null;

    displayName: string;

    featured: boolean;

    iconURL: string;

    platform: 'android' | 'ios';

    screenshotUrls: Array<string>;

    updatedAt: string | null;

    version: Data.Version;
  }

  export namespace Data {
    export interface Version {
      id: string;

      appId: string;

      country: 'AF' | 'AL' | 'DZ' | 'AS' | 'AD' | 'AO' | 'AI' | 'AQ' | 'AG' | 'AR' | 'AM' | 'AW' | 'AP' | 'AU' | 'AT' | 'AZ' | 'BS' | 'BH' | 'BD' | 'BB' | 'BY' | 'BE' | 'BZ' | 'BJ' | 'BM' | 'BT' | 'BO' | 'BQ' | 'BA' | 'BW' | 'BV' | 'BR' | 'IO' | 'BN' | 'BG' | 'BF' | 'BI' | 'KH' | 'CM' | 'CA' | 'CV' | 'KY' | 'CF' | 'TD' | 'CL' | 'CN' | 'CX' | 'CC' | 'CO' | 'KM' | 'CG' | 'CD' | 'CK' | 'CR' | 'HR' | 'CU' | 'CW' | 'CY' | 'CZ' | 'CI' | 'DK' | 'DJ' | 'DM' | 'DO' | 'EC' | 'EG' | 'SV' | 'GQ' | 'ER' | 'EE' | 'ET' | 'FK' | 'FO' | 'FJ' | 'FI' | 'FR' | 'GF' | 'PF' | 'TF' | 'GA' | 'GM' | 'GE' | 'DE' | 'GH' | 'GI' | 'GR' | 'GL' | 'GD' | 'GP' | 'GU' | 'GT' | 'GG' | 'GN' | 'GW' | 'GY' | 'HT' | 'HM' | 'VA' | 'HN' | 'HK' | 'HU' | 'IS' | 'IN' | 'ID' | 'IR' | 'IQ' | 'IE' | 'IM' | 'IL' | 'IT' | 'JM' | 'JP' | 'JE' | 'JO' | 'KZ' | 'KE' | 'KI' | 'KR' | 'KW' | 'KG' | 'LA' | 'LV' | 'LB' | 'LS' | 'LR' | 'LY' | 'LI' | 'LT' | 'LU' | 'MO' | 'MG' | 'MW' | 'MY' | 'MV' | 'ML' | 'MT' | 'MH' | 'MQ' | 'MR' | 'MU' | 'YT' | 'MX' | 'FM' | 'MD' | 'MC' | 'MN' | 'ME' | 'MS' | 'MA' | 'MZ' | 'MM' | 'NA' | 'NR' | 'NP' | 'NL' | 'AN' | 'NC' | 'NZ' | 'NI' | 'NE' | 'NG' | 'NU' | 'NF' | 'KP' | 'MK' | 'MP' | 'NO' | 'OM' | 'PK' | 'PW' | 'PS' | 'PA' | 'PG' | 'PY' | 'PE' | 'PH' | 'PN' | 'PL' | 'PT' | 'PR' | 'QA' | 'RE' | 'RO' | 'RU' | 'RW' | 'BL' | 'SH' | 'KN' | 'LC' | 'MF' | 'PM' | 'VC' | 'WS' | 'SM' | 'ST' | 'SA' | 'SN' | 'RS' | 'CS' | 'SC' | 'SL' | 'SG' | 'SX' | 'SK' | 'SI' | 'SB' | 'SO' | 'ZA' | 'GS' | 'SS' | 'ES' | 'LK' | 'SD' | 'SR' | 'SJ' | 'SZ' | 'SE' | 'CH' | 'SY' | 'TW' | 'TJ' | 'TZ' | 'TH' | 'TL' | 'TG' | 'TK' | 'TO' | 'TT' | 'TN' | 'TR' | 'TM' | 'TC' | 'TV' | 'UG' | 'UA' | 'AE' | 'GB' | 'US' | 'UM' | 'UY' | 'UZ' | 'VU' | 'VE' | 'VN' | 'VG' | 'VI' | 'WF' | 'EH' | 'YE' | 'ZM' | 'ZW' | 'AX';

      createdAt: string | null;

      createdBy: string | null;

      ownerId: string | null;

      queuedAt: string | null;

      sizeBytes: number | null;

      source: 'user' | 'system' | 'portal' | 'store';

      status: 'queued' | 'available' | 'failed';

      targetSdk: number | null;

      updatedAt: string | null;

      /**
       * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
       */
      userId: string | null;

      versionCode: number;

      versionName: string;
    }
  }
}

export interface AppListResponse {
  items: Array<AppListResponse.Item>;

  pagination: Shared.Pagination;
}

export namespace AppListResponse {
  export interface Item {
    id: string;

    bundleId: string;

    category: string | null;

    createdAt: string | null;

    description: string | null;

    developerName: string | null;

    displayName: string;

    featured: boolean;

    iconURL: string;

    platform: 'android' | 'ios';

    updatedAt: string | null;

    version: Item.Version;
  }

  export namespace Item {
    export interface Version {
      id: string;

      appId: string;

      country: 'AF' | 'AL' | 'DZ' | 'AS' | 'AD' | 'AO' | 'AI' | 'AQ' | 'AG' | 'AR' | 'AM' | 'AW' | 'AP' | 'AU' | 'AT' | 'AZ' | 'BS' | 'BH' | 'BD' | 'BB' | 'BY' | 'BE' | 'BZ' | 'BJ' | 'BM' | 'BT' | 'BO' | 'BQ' | 'BA' | 'BW' | 'BV' | 'BR' | 'IO' | 'BN' | 'BG' | 'BF' | 'BI' | 'KH' | 'CM' | 'CA' | 'CV' | 'KY' | 'CF' | 'TD' | 'CL' | 'CN' | 'CX' | 'CC' | 'CO' | 'KM' | 'CG' | 'CD' | 'CK' | 'CR' | 'HR' | 'CU' | 'CW' | 'CY' | 'CZ' | 'CI' | 'DK' | 'DJ' | 'DM' | 'DO' | 'EC' | 'EG' | 'SV' | 'GQ' | 'ER' | 'EE' | 'ET' | 'FK' | 'FO' | 'FJ' | 'FI' | 'FR' | 'GF' | 'PF' | 'TF' | 'GA' | 'GM' | 'GE' | 'DE' | 'GH' | 'GI' | 'GR' | 'GL' | 'GD' | 'GP' | 'GU' | 'GT' | 'GG' | 'GN' | 'GW' | 'GY' | 'HT' | 'HM' | 'VA' | 'HN' | 'HK' | 'HU' | 'IS' | 'IN' | 'ID' | 'IR' | 'IQ' | 'IE' | 'IM' | 'IL' | 'IT' | 'JM' | 'JP' | 'JE' | 'JO' | 'KZ' | 'KE' | 'KI' | 'KR' | 'KW' | 'KG' | 'LA' | 'LV' | 'LB' | 'LS' | 'LR' | 'LY' | 'LI' | 'LT' | 'LU' | 'MO' | 'MG' | 'MW' | 'MY' | 'MV' | 'ML' | 'MT' | 'MH' | 'MQ' | 'MR' | 'MU' | 'YT' | 'MX' | 'FM' | 'MD' | 'MC' | 'MN' | 'ME' | 'MS' | 'MA' | 'MZ' | 'MM' | 'NA' | 'NR' | 'NP' | 'NL' | 'AN' | 'NC' | 'NZ' | 'NI' | 'NE' | 'NG' | 'NU' | 'NF' | 'KP' | 'MK' | 'MP' | 'NO' | 'OM' | 'PK' | 'PW' | 'PS' | 'PA' | 'PG' | 'PY' | 'PE' | 'PH' | 'PN' | 'PL' | 'PT' | 'PR' | 'QA' | 'RE' | 'RO' | 'RU' | 'RW' | 'BL' | 'SH' | 'KN' | 'LC' | 'MF' | 'PM' | 'VC' | 'WS' | 'SM' | 'ST' | 'SA' | 'SN' | 'RS' | 'CS' | 'SC' | 'SL' | 'SG' | 'SX' | 'SK' | 'SI' | 'SB' | 'SO' | 'ZA' | 'GS' | 'SS' | 'ES' | 'LK' | 'SD' | 'SR' | 'SJ' | 'SZ' | 'SE' | 'CH' | 'SY' | 'TW' | 'TJ' | 'TZ' | 'TH' | 'TL' | 'TG' | 'TK' | 'TO' | 'TT' | 'TN' | 'TR' | 'TM' | 'TC' | 'TV' | 'UG' | 'UA' | 'AE' | 'GB' | 'US' | 'UM' | 'UY' | 'UZ' | 'VU' | 'VE' | 'VN' | 'VG' | 'VI' | 'WF' | 'EH' | 'YE' | 'ZM' | 'ZW' | 'AX';

      createdAt: string | null;

      createdBy: string | null;

      ownerId: string | null;

      queuedAt: string | null;

      sizeBytes: number | null;

      source: 'user' | 'system' | 'portal' | 'store';

      status: 'queued' | 'available' | 'failed';

      targetSdk: number | null;

      updatedAt: string | null;

      /**
       * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
       */
      userId: string | null;

      versionCode: number;

      versionName: string;
    }
  }
}

export interface AppAddToWorkspaceResponse {
  message: string;

  success: true;
}

export interface AppListParams {
  category?: string;

  page?: number;

  pageSize?: number;

  query?: string;
}

export declare namespace Apps {
  export {
    type AppRetrieveResponse as AppRetrieveResponse,
    type AppListResponse as AppListResponse,
    type AppAddToWorkspaceResponse as AppAddToWorkspaceResponse,
    type AppListParams as AppListParams
  };
}
