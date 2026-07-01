// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Mobilerun Connect country coverage information
 */
export class Countries extends APIResource {
  /**
   * Lookup of countries that can be selected when creating a proxy.
   */
  list(
    query: CountryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CountryListResponse> {
    return this._client.get('/connect/countries', { query, ...options });
  }
}

/**
 * A page of countries.
 */
export interface CountryListResponse {
  items: Array<CountryListResponse.Item>;

  /**
   * Pagination metadata for a list response.
   */
  pagination: CountryListResponse.Pagination;
}

export namespace CountryListResponse {
  export interface Item {
    /**
     * ISO 3166-1 alpha-2 country code (lowercase).
     */
    code: string;

    name: string;

    /**
     * Proxy types available to provision in this country.
     */
    proxyTypes: Array<'dedicated_residential' | 'residential' | 'mobile'>;
  }

  /**
   * Pagination metadata for a list response.
   */
  export interface Pagination {
    /**
     * Whether a next page exists.
     */
    hasNext: boolean;

    /**
     * Whether a previous page exists.
     */
    hasPrev: boolean;

    /**
     * Current page number (1-based).
     */
    page: number;

    /**
     * Total number of pages.
     */
    pages: number;

    /**
     * Number of items per page.
     */
    pageSize: number;

    /**
     * Total number of items across all pages.
     */
    total: number;
  }
}

export interface CountryListParams {
  /**
   * Page number (1-based).
   */
  page?: number;

  /**
   * Number of items per page.
   */
  pageSize?: number;

  /**
   * Filter to countries offering this proxy type.
   */
  type?: 'dedicated_residential' | 'residential' | 'mobile';
}

export declare namespace Countries {
  export { type CountryListResponse as CountryListResponse, type CountryListParams as CountryListParams };
}
