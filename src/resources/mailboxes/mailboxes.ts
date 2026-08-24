// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as MessagesAPI from './messages';
import {
  MessageListParams,
  MessageListResponse,
  MessageRetrieveParams,
  MessageRetrieveResponse,
  Messages,
} from './messages';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Mailboxes extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Reserves a permanently-allocated, individually-rented mailbox and starts an
   * Autumn rental checkout. An optional localPart selects the full address local
   * part; omitting it keeps the default random, non-guessable mx\_-prefixed address.
   * The address is withheld until the first payment is confirmed. Idempotent on
   * (owner, clientRequestId): same key + payload replays (200); a conflicting or
   * already-held local part returns 409. 201 when the checkout URL is already
   * persisted, otherwise 202 (poll GET for the URL).
   *
   * @example
   * ```ts
   * const mailbox = await client.mailboxes.create({
   *   clientRequestId: 'x',
   * });
   * ```
   */
  create(body: MailboxCreateParams, options?: RequestOptions): APIPromise<MailboxCreateResponse> {
    return this._client.post('/mailboxes', { body, ...options });
  }

  /**
   * Get a mailbox
   *
   * @example
   * ```ts
   * const mailbox = await client.mailboxes.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(mailboxID: string, options?: RequestOptions): APIPromise<MailboxRetrieveResponse> {
    return this._client.get(path`/mailboxes/${mailboxID}`, options);
  }

  /**
   * Updates the label of a mailbox.
   *
   * @example
   * ```ts
   * const mailbox = await client.mailboxes.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { label: 'label' },
   * );
   * ```
   */
  update(
    mailboxID: string,
    body: MailboxUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MailboxUpdateResponse> {
    return this._client.patch(path`/mailboxes/${mailboxID}`, { body, ...options });
  }

  /**
   * Lists the caller-owned mailboxes with page-based pagination.
   *
   * @example
   * ```ts
   * const mailboxes = await client.mailboxes.list();
   * ```
   */
  list(
    query: MailboxListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MailboxListResponse> {
    return this._client.get('/mailboxes', { query, ...options });
  }

  /**
   * For paid rent, schedules end-of-cycle cancellation. For an included generation,
   * archives immediately and releases its package seat. This never deletes the
   * mailbox, its address, or its messages — the address is permanently reserved.
   * Idempotent.
   *
   * @example
   * ```ts
   * const mailbox = await client.mailboxes.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(mailboxID: string, options?: RequestOptions): APIPromise<MailboxDeleteResponse> {
    return this._client.delete(path`/mailboxes/${mailboxID}`, options);
  }

  /**
   * Returns the authoritative number of package-funded mailbox claims currently
   * available after local reservations.
   *
   * @example
   * ```ts
   * const response = await client.mailboxes.capacity();
   * ```
   */
  capacity(options?: RequestOptions): APIPromise<MailboxCapacityResponse> {
    return this._client.get('/mailboxes/capacity', options);
  }

  /**
   * Returns the highest-confidence, most recent OTP for the mailbox, restricted to
   * messages of completed/active paid intervals. Does not wait server-side (SDKs
   * poll). 200 with the best code, 204 when none matches.
   *
   * @example
   * ```ts
   * const response = await client.mailboxes.otp(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  otp(
    mailboxID: string,
    query: MailboxOtpParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MailboxOtpResponse> {
    return this._client.get(path`/mailboxes/${mailboxID}/otp`, { query, ...options });
  }

  /**
   * Starts a new generation on an archived mailbox, reusing the same permanent
   * address. Uses included capacity first unless paid rent is requested.
   *
   * @example
   * ```ts
   * const response = await client.mailboxes.restart(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  restart(
    mailboxID: string,
    body: MailboxRestartParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MailboxRestartResponse> {
    return this._client.post(path`/mailboxes/${mailboxID}/restart`, { body, ...options });
  }

  /**
   * Retracts a scheduled end-of-cycle cancellation for the current generation. Only
   * valid while cancellation is pending.
   *
   * @example
   * ```ts
   * const response = await client.mailboxes.uncancel(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  uncancel(mailboxID: string, options?: RequestOptions): APIPromise<MailboxUncancelResponse> {
    return this._client.post(path`/mailboxes/${mailboxID}/uncancel`, options);
  }
}

export interface MailboxCreateResponse {
  data: MailboxCreateResponse.Data;
}

export namespace MailboxCreateResponse {
  export interface Data {
    id: string;

    address: string | null;

    billingMode: 'rent' | 'included';

    cancelAtPeriodEnd: boolean;

    checkoutExpiresAt: string | null;

    checkoutUrl: string | null;

    createdAt: string;

    currentPeriodEnd: string | null;

    inboundMessages: Data.InboundMessages;

    label: string | null;

    status:
      | 'provisioning'
      | 'awaiting_payment'
      | 'active'
      | 'cancel_scheduled'
      | 'archived'
      | 'billing_error';
  }

  export namespace Data {
    export interface InboundMessages {
      exhausted: boolean;

      included: number;

      resetsAt: string | null;

      used: number;
    }
  }
}

export interface MailboxRetrieveResponse {
  data: MailboxRetrieveResponse.Data;
}

export namespace MailboxRetrieveResponse {
  export interface Data {
    id: string;

    address: string | null;

    billingMode: 'rent' | 'included';

    cancelAtPeriodEnd: boolean;

    checkoutExpiresAt: string | null;

    checkoutUrl: string | null;

    createdAt: string;

    currentPeriodEnd: string | null;

    inboundMessages: Data.InboundMessages;

    label: string | null;

    status:
      | 'provisioning'
      | 'awaiting_payment'
      | 'active'
      | 'cancel_scheduled'
      | 'archived'
      | 'billing_error';
  }

  export namespace Data {
    export interface InboundMessages {
      exhausted: boolean;

      included: number;

      resetsAt: string | null;

      used: number;
    }
  }
}

export interface MailboxUpdateResponse {
  data: MailboxUpdateResponse.Data;
}

export namespace MailboxUpdateResponse {
  export interface Data {
    id: string;

    address: string | null;

    billingMode: 'rent' | 'included';

    cancelAtPeriodEnd: boolean;

    checkoutExpiresAt: string | null;

    checkoutUrl: string | null;

    createdAt: string;

    currentPeriodEnd: string | null;

    inboundMessages: Data.InboundMessages;

    label: string | null;

    status:
      | 'provisioning'
      | 'awaiting_payment'
      | 'active'
      | 'cancel_scheduled'
      | 'archived'
      | 'billing_error';
  }

  export namespace Data {
    export interface InboundMessages {
      exhausted: boolean;

      included: number;

      resetsAt: string | null;

      used: number;
    }
  }
}

export interface MailboxListResponse {
  items: Array<MailboxListResponse.Item>;

  pagination: Shared.Pagination;
}

export namespace MailboxListResponse {
  export interface Item {
    id: string;

    address: string | null;

    billingMode: 'rent' | 'included';

    cancelAtPeriodEnd: boolean;

    checkoutExpiresAt: string | null;

    checkoutUrl: string | null;

    createdAt: string;

    currentPeriodEnd: string | null;

    inboundMessages: Item.InboundMessages;

    label: string | null;

    status:
      | 'provisioning'
      | 'awaiting_payment'
      | 'active'
      | 'cancel_scheduled'
      | 'archived'
      | 'billing_error';
  }

  export namespace Item {
    export interface InboundMessages {
      exhausted: boolean;

      included: number;

      resetsAt: string | null;

      used: number;
    }
  }
}

export interface MailboxDeleteResponse {
  data: MailboxDeleteResponse.Data;
}

export namespace MailboxDeleteResponse {
  export interface Data {
    id: string;

    address: string | null;

    billingMode: 'rent' | 'included';

    cancelAtPeriodEnd: boolean;

    checkoutExpiresAt: string | null;

    checkoutUrl: string | null;

    createdAt: string;

    currentPeriodEnd: string | null;

    inboundMessages: Data.InboundMessages;

    label: string | null;

    status:
      | 'provisioning'
      | 'awaiting_payment'
      | 'active'
      | 'cancel_scheduled'
      | 'archived'
      | 'billing_error';
  }

  export namespace Data {
    export interface InboundMessages {
      exhausted: boolean;

      included: number;

      resetsAt: string | null;

      used: number;
    }
  }
}

export interface MailboxCapacityResponse {
  data: MailboxCapacityResponse.Data;
}

export namespace MailboxCapacityResponse {
  export interface Data {
    includedRemaining: number;
  }
}

export interface MailboxOtpResponse {
  data: MailboxOtpResponse.Data;
}

export namespace MailboxOtpResponse {
  export interface Data {
    /**
     * String to preserve leading zeros
     */
    code: string;

    confidence: 'high' | 'medium' | 'low';

    messageId: string;

    receivedAt: string;

    sender: string | null;

    subject: string | null;
  }
}

export interface MailboxRestartResponse {
  data: MailboxRestartResponse.Data;
}

export namespace MailboxRestartResponse {
  export interface Data {
    id: string;

    address: string | null;

    billingMode: 'rent' | 'included';

    cancelAtPeriodEnd: boolean;

    checkoutExpiresAt: string | null;

    checkoutUrl: string | null;

    createdAt: string;

    currentPeriodEnd: string | null;

    inboundMessages: Data.InboundMessages;

    label: string | null;

    status:
      | 'provisioning'
      | 'awaiting_payment'
      | 'active'
      | 'cancel_scheduled'
      | 'archived'
      | 'billing_error';
  }

  export namespace Data {
    export interface InboundMessages {
      exhausted: boolean;

      included: number;

      resetsAt: string | null;

      used: number;
    }
  }
}

export interface MailboxUncancelResponse {
  data: MailboxUncancelResponse.Data;
}

export namespace MailboxUncancelResponse {
  export interface Data {
    id: string;

    address: string | null;

    billingMode: 'rent' | 'included';

    cancelAtPeriodEnd: boolean;

    checkoutExpiresAt: string | null;

    checkoutUrl: string | null;

    createdAt: string;

    currentPeriodEnd: string | null;

    inboundMessages: Data.InboundMessages;

    label: string | null;

    status:
      | 'provisioning'
      | 'awaiting_payment'
      | 'active'
      | 'cancel_scheduled'
      | 'archived'
      | 'billing_error';
  }

  export namespace Data {
    export interface InboundMessages {
      exhausted: boolean;

      included: number;

      resetsAt: string | null;

      used: number;
    }
  }
}

export interface MailboxCreateParams {
  clientRequestId: string;

  /**
   * Funding preference. Omit or use included for included-first activation; rent
   * always preserves package capacity and starts paid checkout.
   */
  billingPreference?: 'included' | 'rent';

  label?: string;

  /**
   * Optional full mailbox local part (the address before "@"). Trimmed and
   * lowercased before validation. Omit for a random, non-guessable mx\_-prefixed
   * address.
   */
  localPart?: string;
}

export interface MailboxUpdateParams {
  label: string | null;
}

export interface MailboxListParams {
  page?: number;

  pageSize?: number;
}

export interface MailboxOtpParams {
  after?: string;

  maxLength?: number;

  minLength?: number;

  sender?: string;
}

export interface MailboxRestartParams {
  /**
   * Funding preference. Omit or use included for included-first activation; rent
   * always preserves package capacity and starts paid checkout.
   */
  billingPreference?: 'included' | 'rent';
}

Mailboxes.Messages = Messages;

export declare namespace Mailboxes {
  export {
    type MailboxCreateResponse as MailboxCreateResponse,
    type MailboxRetrieveResponse as MailboxRetrieveResponse,
    type MailboxUpdateResponse as MailboxUpdateResponse,
    type MailboxListResponse as MailboxListResponse,
    type MailboxDeleteResponse as MailboxDeleteResponse,
    type MailboxCapacityResponse as MailboxCapacityResponse,
    type MailboxOtpResponse as MailboxOtpResponse,
    type MailboxRestartResponse as MailboxRestartResponse,
    type MailboxUncancelResponse as MailboxUncancelResponse,
    type MailboxCreateParams as MailboxCreateParams,
    type MailboxUpdateParams as MailboxUpdateParams,
    type MailboxListParams as MailboxListParams,
    type MailboxOtpParams as MailboxOtpParams,
    type MailboxRestartParams as MailboxRestartParams,
  };

  export {
    Messages as Messages,
    type MessageRetrieveResponse as MessageRetrieveResponse,
    type MessageListResponse as MessageListResponse,
    type MessageRetrieveParams as MessageRetrieveParams,
    type MessageListParams as MessageListParams,
  };
}
