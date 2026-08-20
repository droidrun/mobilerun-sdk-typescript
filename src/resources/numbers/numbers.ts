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
   * Starts a Mobilerun Phone purchase for the authenticated owner. Accepted requests
   * always return the same asynchronous envelope; poll GET /numbers/phones/{id} for
   * its business state. `purpose` and `country` are mutually exclusive.
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
   * Lists phone numbers owned by the authenticated user — both BYO (`user`) and
   * provisioned (`mobilerun`) numbers.
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
   * Cancels a Mobilerun Phone. The outcome depends on the number's current state:
   *
   * - If the number is still awaiting payment and no payment for it is currently
   *   being processed, the checkout is closed immediately and the number is retired.
   * - If the number is on the standard paid plan and already paid and in service,
   *   cancellation is scheduled for the end of the current billing period rather
   *   than taking effect immediately. The number stays usable through the period
   *   already paid for, with no partial refund. Calling this again while a
   *   cancellation is already scheduled is a no-op that returns the same result. The
   *   response's `state` reflects this as `cancel_scheduled` with
   *   `cancelAtPeriodEnd: true`; `currentPeriodEnd` is populated once billing
   *   confirms the cancellation.
   *
   * Any other state (already refunding, a permanent billing failure, a payment
   * currently being processed, an included-plan number, or a non-hosted/BYO number)
   * returns 409 `not_cancellable`. Returns 404 if the number doesn't exist or isn't
   * owned by the caller.
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
   * Lists the countries currently offered for a dedicated Mobilerun Phone, with live
   * stock status. Pass `country` as the `country` field on POST /numbers/phones.
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

    phoneNumber: string | null;

    purpose: string | null;

    state: 'awaiting_payment' | 'provisioning' | 'active' | 'cancel_scheduled' | 'expired' | 'failed';

    updatedAt: string | null;
  }
}

export interface NumberListResponse {
  data: NumberListResponse.Data;
}

export namespace NumberListResponse {
  export interface Data {
    items: Array<Data.Item>;

    pagination: Shared.Pagination;
  }

  export namespace Data {
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

      phoneNumber: string | null;

      purpose: string | null;

      state: 'awaiting_payment' | 'provisioning' | 'active' | 'cancel_scheduled' | 'expired' | 'failed';

      updatedAt: string | null;
    }
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

    phoneNumber: string | null;

    purpose: string | null;

    state: 'awaiting_payment' | 'provisioning' | 'active' | 'cancel_scheduled' | 'expired' | 'failed';

    updatedAt: string | null;
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
   * Body param: Prefer a free package seat ('included', default) or force the paid
   * checkout ('rent')
   */
  billingPreference?: 'included' | 'rent';

  /**
   * Body param: Optional ISO 3166-1 alpha-2 country code from GET
   * /numbers/countries. Cannot be combined with `purpose`.
   */
  country?: string;

  /**
   * Body param: Optional Mobilerun Phone purpose slug from GET /numbers/purposes.
   */
  purpose?: string;

  /**
   * Header param: Optional request idempotency key.
   */
  'Idempotency-Key'?: string;
}

export interface NumberListParams {
  page?: number;

  pageSize?: number;
}

Numbers.Messages = Messages;

export declare namespace Numbers {
  export {
    type NumberCreateResponse as NumberCreateResponse,
    type NumberRetrieveResponse as NumberRetrieveResponse,
    type NumberListResponse as NumberListResponse,
    type NumberDeleteResponse as NumberDeleteResponse,
    type NumberCountriesResponse as NumberCountriesResponse,
    type NumberPurposesResponse as NumberPurposesResponse,
    type NumberCreateParams as NumberCreateParams,
    type NumberListParams as NumberListParams,
  };

  export {
    Messages as Messages,
    type MessageListResponse as MessageListResponse,
    type MessageListParams as MessageListParams,
  };
}
