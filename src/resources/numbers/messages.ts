// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Returns SMS messages on the number, inbound and outbound, scoped to the
   * authenticated user. Newest first. Messages stay with the number across device
   * switches.
   *
   * @example
   * ```ts
   * const messages = await client.numbers.messages.list(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  list(
    id: string,
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageListResponse> {
    return this._client.get(path`/numbers/phones/${id}/messages`, { query, ...options });
  }

  /**
   * Queues an SMS from one of the caller's numbers that can send. Same idempotency
   * contract as the eSIM send: replaying an Idempotency-Key with the same payload
   * returns the original message, reusing it with a different payload returns 422.
   * 409 capability_unavailable: this number cannot send right now. 422
   * invalid_recipient / unsupported_destination / body_too_long: the recipient or
   * text does not fit the number. 429 daily_limit_reached: the rolling 24 h limit
   * for the account is used up; 429 rate_limited: too many sends in a short window.
   * 403 send_disabled: self-service SMS send is switched off.
   *
   * @example
   * ```ts
   * const response = await client.numbers.messages.send(
   *   '550e8400-e29b-41d4-a716-446655440000',
   *   { body: 'x', to: '+15551230001' },
   * );
   * ```
   */
  send(id: string, body: MessageSendParams, options?: RequestOptions): APIPromise<MessageSendResponse> {
    return this._client.post(path`/numbers/phones/${id}/messages`, { body, ...options });
  }
}

export interface MessageListResponse {
  items: Array<MessageListResponse.Item>;

  pagination: Shared.Pagination;
}

export namespace MessageListResponse {
  export interface Item {
    id: string;

    body: string | null;

    createdAt: string;

    deliveryStatus: string | null;

    detectedSender: string | null;

    direction: 'inbound' | 'outbound';

    esimId: string | null;

    occurredAt: string;

    peerKey: string | null;

    peerNumber: string | null;

    status:
      | 'received'
      | 'queued'
      | 'claimed'
      | 'sending'
      | 'sent'
      | 'sent_unconfirmed'
      | 'delivered'
      | 'failed';
  }
}

export interface MessageSendResponse {
  data: MessageSendResponse.Data;
}

export namespace MessageSendResponse {
  export interface Data {
    id: string;

    body: string | null;

    createdAt: string;

    deliveryStatus: string | null;

    detectedSender: string | null;

    direction: 'inbound' | 'outbound';

    esimId: string | null;

    occurredAt: string;

    peerKey: string | null;

    peerNumber: string | null;

    status:
      | 'received'
      | 'queued'
      | 'claimed'
      | 'sending'
      | 'sent'
      | 'sent_unconfirmed'
      | 'delivered'
      | 'failed';
  }
}

export interface MessageListParams {
  direction?: 'all' | 'inbound' | 'outbound';

  page?: number;

  pageSize?: number;

  since?: string;
}

export interface MessageSendParams {
  /**
   * SMS body text, up to 1600 characters (rejected with 400 beyond that, before
   * hashing). A number's own limit may be lower and is answered 422 body_too_long.
   */
  body: string;

  /**
   * Recipient phone number, as E.164 or a US 10/11-digit number. Destinations the
   * number cannot send to are rejected with 422 unsupported_destination, non-numbers
   * with 422 invalid_recipient.
   */
  to: string;

  /**
   * @deprecated Deprecated: use the Idempotency-Key header instead. Optional
   * idempotency key. Replaying the same key and payload returns the original send.
   */
  clientRequestId?: string;

  /**
   * Request a delivery report. Defaults to false.
   */
  deliveryReport?: boolean;
}

export declare namespace Messages {
  export {
    type MessageListResponse as MessageListResponse,
    type MessageSendResponse as MessageSendResponse,
    type MessageListParams as MessageListParams,
    type MessageSendParams as MessageSendParams,
  };
}
