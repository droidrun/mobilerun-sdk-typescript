// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Carriers extends APIResource {
  /**
   * Create a new carrier
   */
  create(body: CarrierCreateParams, options?: RequestOptions): APIPromise<Carrier> {
    return this._client.post('/carriers', { body, ...options });
  }

  /**
   * Get carrier by ID
   */
  retrieve(carrierID: number, options?: RequestOptions): APIPromise<Carrier> {
    return this._client.get(path`/carriers/${carrierID}`, options);
  }

  /**
   * Update a carrier
   */
  update(carrierID: number, body: CarrierUpdateParams, options?: RequestOptions): APIPromise<Carrier> {
    return this._client.patch(path`/carriers/${carrierID}`, { body, ...options });
  }

  /**
   * List carriers with pagination
   */
  list(query: CarrierListParams | null | undefined = {}, options?: RequestOptions): APIPromise<CarrierListResponse> {
    return this._client.get('/carriers', { query, ...options });
  }

  /**
   * Delete a carrier
   */
  delete(carrierID: number, options?: RequestOptions): APIPromise<CarrierDeleteResponse> {
    return this._client.delete(path`/carriers/${carrierID}`, options);
  }

  /**
   * Get carrier by MCC and MNC
   */
  lookup(query: CarrierLookupParams, options?: RequestOptions): APIPromise<Carrier> {
    return this._client.get('/carriers/lookup', { query, ...options });
  }
}

export interface Carrier {
  id: number;

  company: string;

  country: string;

  country_code: string;

  country_iso: string;

  created_at: string;

  detail_url: string;

  gsm_bands: string;

  lte_bands: string;

  mcc: string;

  mnc: string;

  mobile_prefix: string;

  nsn_size: string;

  number_format: string;

  operator: string;

  protocols: string;

  umts_bands: string;

  website: string;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface CarrierListResponse {
  items: Array<Carrier> | null;

  pagination: Shared.Meta;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface CarrierDeleteResponse {
  message: string;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface CarrierCreateParams {
  /**
   * Country name
   */
  country: string;

  /**
   * Mobile Country Code
   */
  mcc: string;

  /**
   * Mobile Network Code
   */
  mnc: string;

  /**
   * Operator name
   */
  operator: string;

  /**
   * Company name
   */
  company?: string;

  /**
   * Country dialing code (e.g., +1)
   */
  country_code?: string;

  /**
   * ISO country code
   */
  country_iso?: string;

  /**
   * URL to carrier details page
   */
  detail_url?: string;

  /**
   * Supported GSM bands
   */
  gsm_bands?: string;

  /**
   * Supported LTE bands
   */
  lte_bands?: string;

  /**
   * Mobile number prefix
   */
  mobile_prefix?: string;

  /**
   * National Significant Number size
   */
  nsn_size?: string;

  /**
   * Phone number format
   */
  number_format?: string;

  /**
   * Supported protocols (comma-separated)
   */
  protocols?: string;

  /**
   * Supported UMTS bands
   */
  umts_bands?: string;

  /**
   * Company website
   */
  website?: string;
}

export interface CarrierUpdateParams {
  /**
   * Company name
   */
  company?: string;

  /**
   * Country name
   */
  country?: string;

  /**
   * Country dialing code
   */
  country_code?: string;

  /**
   * ISO country code
   */
  country_iso?: string;

  /**
   * URL to carrier details
   */
  detail_url?: string;

  /**
   * Supported GSM bands
   */
  gsm_bands?: string;

  /**
   * Supported LTE bands
   */
  lte_bands?: string;

  /**
   * Mobile number prefix
   */
  mobile_prefix?: string;

  /**
   * NSN size
   */
  nsn_size?: string;

  /**
   * Phone number format
   */
  number_format?: string;

  /**
   * Operator name
   */
  operator?: string;

  /**
   * Supported protocols
   */
  protocols?: string;

  /**
   * Supported UMTS bands
   */
  umts_bands?: string;

  /**
   * Company website
   */
  website?: string;
}

export interface CarrierListParams {
  /**
   * Filter by country name
   */
  country?: string;

  /**
   * Filter by country ISO code
   */
  countryISO?: string;

  /**
   * Field to order by
   */
  orderBy?: 'id' | 'mcc' | 'mnc' | 'operator' | 'country' | 'country_iso';

  /**
   * Order direction
   */
  orderDir?: 'asc' | 'desc';

  /**
   * Page number
   */
  page?: number;

  /**
   * Items per page
   */
  pageSize?: number;
}

export interface CarrierLookupParams {
  /**
   * Mobile Country Code
   */
  mcc: string;

  /**
   * Mobile Network Code
   */
  mnc: string;
}

export declare namespace Carriers {
  export {
    type Carrier as Carrier,
    type CarrierListResponse as CarrierListResponse,
    type CarrierDeleteResponse as CarrierDeleteResponse,
    type CarrierCreateParams as CarrierCreateParams,
    type CarrierUpdateParams as CarrierUpdateParams,
    type CarrierListParams as CarrierListParams,
    type CarrierLookupParams as CarrierLookupParams
  };
}
