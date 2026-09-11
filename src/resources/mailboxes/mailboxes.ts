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
   * Creates a mailbox on the default domain or a connected custom domain. An
   * optional `localPart` selects the address. Replaying the same `clientRequestId`
   * and payload returns the original mailbox. Poll the mailbox when a 202 response
   * does not yet include a checkout URL.
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
   * Cancels a pending mailbox or schedules an active paid mailbox for cancellation.
   * Existing addresses and messages are retained. Repeating the request is safe.
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
   * Returns the number of mailboxes currently available through included capacity.
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
   * Returns the most likely recent OTP for the mailbox. Returns 204 when no matching
   * code is available.
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
   * Restarts an archived mailbox with the same address. Uses included capacity when
   * available unless paid service is requested.
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
   * Withdraws a scheduled cancellation. Only available while cancellation is
   * pending.
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

    billingMode: 'rent' | 'included' | 'domain';

    cancelAtPeriodEnd: boolean;

    checkoutExpiresAt: string | null;

    checkoutUrl: string | null;

    createdAt: string;

    currentPeriodEnd: string | null;

    domainId: string | null;

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

    billingMode: 'rent' | 'included' | 'domain';

    cancelAtPeriodEnd: boolean;

    checkoutExpiresAt: string | null;

    checkoutUrl: string | null;

    createdAt: string;

    currentPeriodEnd: string | null;

    domainId: string | null;

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

    billingMode: 'rent' | 'included' | 'domain';

    cancelAtPeriodEnd: boolean;

    checkoutExpiresAt: string | null;

    checkoutUrl: string | null;

    createdAt: string;

    currentPeriodEnd: string | null;

    domainId: string | null;

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

    billingMode: 'rent' | 'included' | 'domain';

    cancelAtPeriodEnd: boolean;

    checkoutExpiresAt: string | null;

    checkoutUrl: string | null;

    createdAt: string;

    currentPeriodEnd: string | null;

    domainId: string | null;

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

    billingMode: 'rent' | 'included' | 'domain';

    cancelAtPeriodEnd: boolean;

    checkoutExpiresAt: string | null;

    checkoutUrl: string | null;

    createdAt: string;

    currentPeriodEnd: string | null;

    domainId: string | null;

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
     * OTP code as text to preserve leading zeros.
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

    billingMode: 'rent' | 'included' | 'domain';

    cancelAtPeriodEnd: boolean;

    checkoutExpiresAt: string | null;

    checkoutUrl: string | null;

    createdAt: string;

    currentPeriodEnd: string | null;

    domainId: string | null;

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

    billingMode: 'rent' | 'included' | 'domain';

    cancelAtPeriodEnd: boolean;

    checkoutExpiresAt: string | null;

    checkoutUrl: string | null;

    createdAt: string;

    currentPeriodEnd: string | null;

    domainId: string | null;

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
   * included uses package capacity when available and otherwise starts paid
   * checkout; included_only fails without creating a paid reservation when no
   * included slot remains; rent always starts paid checkout.
   */
  billingPreference?: 'included' | 'included_only' | 'rent';

  /**
   * Optional active custom mailbox domain owned by the caller. Omit to use the
   * system domain.
   */
  domainId?: string;

  label?: string;

  /**
   * Optional mailbox name before the "@". Omit to generate a random address.
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
   * included uses package capacity when available and otherwise starts paid
   * checkout; included_only fails without creating a paid reservation when no
   * included slot remains; rent always starts paid checkout.
   */
  billingPreference?: 'included' | 'included_only' | 'rent';
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
