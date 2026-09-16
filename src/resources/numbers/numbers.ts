// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as MessagesAPI from './messages';
import { MessageListParams, MessageListResponse, Messages } from './messages';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Numbers extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Starts a phone-number purchase. Poll the returned phone number for status
   * updates. `purpose` and `country` cannot be combined.
   *
   * @example
   * ```ts
   * const number = await client.numbers.create();
   * ```
   */
  create(
    params: NumberCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NumberCreateResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params ?? {};
    return this._client.post('/numbers/phones', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves a single phone number.
   *
   * @example
   * ```ts
   * const number = await client.numbers.retrieve(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<NumberRetrieveResponse> {
    return this._client.get(path`/numbers/phones/${id}`, options);
  }

  /**
   * Updates the display label. Omitting `label` leaves it unchanged; null or an
   * empty string clears it.
   *
   * @example
   * ```ts
   * const number = await client.numbers.update(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  update(
    id: string,
    body: NumberUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NumberUpdateResponse> {
    return this._client.patch(path`/numbers/phones/${id}`, { body, ...options });
  }

  /**
   * Lists the caller's phone numbers.
   *
   * @example
   * ```ts
   * const numbers = await client.numbers.list();
   * ```
   */
  list(
    query: NumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NumberListResponse> {
    return this._client.get('/numbers/phones', { query, ...options });
  }

  /**
   * Cancels a pending purchase or schedules cancellation of an active paid phone
   * number. Repeating a scheduled cancellation is safe. Returns 409 when
   * cancellation is not available.
   *
   * @example
   * ```ts
   * const number = await client.numbers.delete(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<NumberDeleteResponse> {
    return this._client.delete(path`/numbers/phones/${id}`, options);
  }

  /**
   * Returns included phone capacity for a country. Creating a phone is
   * authoritative.
   *
   * @example
   * ```ts
   * const response = await client.numbers.capacity({
   *   country: 'de',
   * });
   * ```
   */
  capacity(query: NumberCapacityParams, options?: RequestOptions): APIPromise<NumberCapacityResponse> {
    return this._client.get('/numbers/phones/capacity', { query, ...options });
  }

  /**
   * Lists available countries and current phone-number availability.
   *
   * @example
   * ```ts
   * const response = await client.numbers.countries();
   * ```
   */
  countries(options?: RequestOptions): APIPromise<NumberCountriesResponse> {
    return this._client.get('/numbers/phones/countries', options);
  }

  /**
   * Lists the optional purposes currently available for a Mobilerun Phone.
   *
   * @example
   * ```ts
   * const response = await client.numbers.purposes();
   * ```
   */
  purposes(options?: RequestOptions): APIPromise<NumberPurposesResponse> {
    return this._client.get('/numbers/phones/purposes', options);
  }
}

export interface NumberCreateResponse {
  data: NumberCreateResponse.Data;
}

export namespace NumberCreateResponse {
  export interface Data {
    checkoutUrl: string | null;

    numberId: string;

    state: 'awaiting_payment' | 'provisioning';
  }
}

export interface NumberRetrieveResponse {
  data: NumberRetrieveResponse.Data;
}

export namespace NumberRetrieveResponse {
  export interface Data {
    id: string;

    cancelAtPeriodEnd: boolean;

    cancellable: boolean;

    canSend: boolean;

    capabilities: Array<'sms' | 'voice'> | null;

    checkoutUrl: string | null;

    countryCode: string | null;

    createdAt: string | null;

    currentPeriodEnd: string | null;

    label: string | null;

    phoneNumber: string | null;

    purpose: string | null;

    state: 'awaiting_payment' | 'provisioning' | 'active' | 'cancel_scheduled' | 'expired' | 'failed';

    updatedAt: string | null;
  }
}

export interface NumberUpdateResponse {
  data: NumberUpdateResponse.Data;
}

export namespace NumberUpdateResponse {
  export interface Data {
    id: string;

    cancelAtPeriodEnd: boolean;

    cancellable: boolean;

    canSend: boolean;

    capabilities: Array<'sms' | 'voice'> | null;

    checkoutUrl: string | null;

    countryCode: string | null;

    createdAt: string | null;

    currentPeriodEnd: string | null;

    label: string | null;

    phoneNumber: string | null;

    purpose: string | null;

    state: 'awaiting_payment' | 'provisioning' | 'active' | 'cancel_scheduled' | 'expired' | 'failed';

    updatedAt: string | null;
  }
}

export interface NumberListResponse {
  items: Array<NumberListResponse.Item>;

  pagination: Shared.Pagination;
}

export namespace NumberListResponse {
  export interface Item {
    id: string;

    cancelAtPeriodEnd: boolean;

    cancellable: boolean;

    canSend: boolean;

    capabilities: Array<'sms' | 'voice'> | null;

    checkoutUrl: string | null;

    countryCode: string | null;

    createdAt: string | null;

    currentPeriodEnd: string | null;

    label: string | null;

    phoneNumber: string | null;

    purpose: string | null;

    state: 'awaiting_payment' | 'provisioning' | 'active' | 'cancel_scheduled' | 'expired' | 'failed';

    updatedAt: string | null;
  }
}

export interface NumberDeleteResponse {
  data: NumberDeleteResponse.Data;
}

export namespace NumberDeleteResponse {
  export interface Data {
    id: string;

    cancelAtPeriodEnd: boolean;

    cancellable: boolean;

    canSend: boolean;

    capabilities: Array<'sms' | 'voice'> | null;

    checkoutUrl: string | null;

    countryCode: string | null;

    createdAt: string | null;

    currentPeriodEnd: string | null;

    label: string | null;

    phoneNumber: string | null;

    purpose: string | null;

    state: 'awaiting_payment' | 'provisioning' | 'active' | 'cancel_scheduled' | 'expired' | 'failed';

    updatedAt: string | null;
  }
}

export interface NumberCapacityResponse {
  data: NumberCapacityResponse.Data;
}

export namespace NumberCapacityResponse {
  export interface Data {
    included: number;

    /**
     * @deprecated Deprecated — always equal to `remaining`. Migrate to `remaining`;
     * this field will be removed in a future revision.
     */
    includedRemaining: number;

    remaining: number;

    status: 'available' | 'exhausted' | 'not_included';
  }
}

export interface NumberCountriesResponse {
  data: NumberCountriesResponse.Data;
}

export namespace NumberCountriesResponse {
  export interface Data {
    items: Array<Data.Item>;
  }

  export namespace Data {
    export interface Item {
      country: string;

      inStock: boolean;

      name: string;

      planId: string;
    }
  }
}

export interface NumberPurposesResponse {
  data: NumberPurposesResponse.Data;
}

export namespace NumberPurposesResponse {
  export interface Data {
    items: Array<Data.Item>;
  }

  export namespace Data {
    export interface Item {
      label: string;

      slug: string;
    }
  }
}

export interface NumberCreateParams {
  /**
   * Body param: Use included capacity when available, require included capacity
   * without paid fallback (included_only), or start a paid checkout (rent).
   */
  billingPreference?: 'included' | 'included_only' | 'rent';

  /**
   * Body param: Optional ISO 3166-1 alpha-2 country code from GET
   * /numbers/phones/countries. Cannot be combined with `purpose`.
   */
  country?: string;

  /**
   * Body param: User-defined display label — NFC-normalized, up to 100 GRAPHEMES
   * (not UTF-16 code units; an emoji/flag may span several). Display-only, never
   * used for routing. Also seeds the billing entity name at purchase.
   */
  label?: string | null;

  /**
   * Body param: Optional purpose from GET /numbers/phones/purposes.
   */
  purpose?: string;

  /**
   * Header param: Optional request idempotency key.
   */
  'Idempotency-Key'?: string;
}

export interface NumberUpdateParams {
  /**
   * User-defined display label — NFC-normalized, up to 100 GRAPHEMES (not UTF-16
   * code units; an emoji/flag may span several). Display-only, never used for
   * routing. Also seeds the billing entity name at purchase.
   */
  label?: string | null;
}

export interface NumberListParams {
  page?: number;

  pageSize?: number;
}

export interface NumberCapacityParams {
  /**
   * ISO 3166-1 alpha-2 country code from GET /numbers/phones/countries.
   */
  country: string;
}

Numbers.Messages = Messages;

export declare namespace Numbers {
  export {
    type NumberCreateResponse as NumberCreateResponse,
    type NumberRetrieveResponse as NumberRetrieveResponse,
    type NumberUpdateResponse as NumberUpdateResponse,
    type NumberListResponse as NumberListResponse,
    type NumberDeleteResponse as NumberDeleteResponse,
    type NumberCapacityResponse as NumberCapacityResponse,
    type NumberCountriesResponse as NumberCountriesResponse,
    type NumberPurposesResponse as NumberPurposesResponse,
    type NumberCreateParams as NumberCreateParams,
    type NumberUpdateParams as NumberUpdateParams,
    type NumberListParams as NumberListParams,
    type NumberCapacityParams as NumberCapacityParams,
  };

  export {
    Messages as Messages,
    type MessageListResponse as MessageListResponse,
    type MessageListParams as MessageListParams,
  };
}
