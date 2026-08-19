// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from './messages';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * List messages for one eSIM
   *
   * @example
   * ```ts
   * const messages = await client.esims.messages.list(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  list(id: string, query: MessageListParams | null | undefined = {}, options?: RequestOptions): APIPromise<MessageListResponse> {
    return this._client.get(path`/numbers/esims/${id}/messages`, { query, ...options });
  }

  /**
   * Send an SMS through one eSIM
   *
   * @example
   * ```ts
   * const response = await client.esims.messages.send(
   *   '550e8400-e29b-41d4-a716-446655440000',
   *   { body: 'x', to: '+15551230001' },
   * );
   * ```
   */
  send(id: string, body: MessageSendParams, options?: RequestOptions): APIPromise<MessageSendResponse> {
    return this._client.post(path`/numbers/esims/${id}/messages`, { body, ...options });
  }
}

export interface MessageListResponse {
  data: MessageListResponse.Data;
}

export namespace MessageListResponse {
  export interface Data {
    items: Array<Data.Item>;

    pagination: Shared.Pagination;
  }

  export namespace Data {
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

      providerCode: string | null;

      status: 'received' | 'queued' | 'claimed' | 'sending' | 'sent' | 'sent_unconfirmed' | 'delivered' | 'failed';
    }
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

    providerCode: string | null;

    status: 'received' | 'queued' | 'claimed' | 'sending' | 'sent' | 'sent_unconfirmed' | 'delivered' | 'failed';
  }
}

export interface MessageListParams {
  direction?: 'all' | 'inbound' | 'outbound';

  numberId?: string;

  page?: number;

  pageSize?: number;

  peerKey?: string;

  peerNumber?: string;

  status?: 'all' | 'received' | 'queued' | 'claimed' | 'sending' | 'sent' | 'sent_unconfirmed' | 'delivered' | 'failed';
}

export interface MessageSendParams {
  /**
   * SMS body text (max 320 chars — smaller than the admin tier's cap; see the
   * schema's own doc comment for why)
   */
  body: string;

  /**
   * Recipient phone number — normalized to E.164 (spaces/dashes/dots stripped);
   * rejected with 400 if it doesn't validate as E.164 afterward.
   */
  to: string;

  /**
   * Client-supplied idempotency key, scoped to (owner, esimId, key). Replaying the
   * same key + identical payload returns the original send; the same key with a
   * DIFFERENT payload is a 409 conflict.
   */
  clientRequestId?: string;

  /**
   * Wait for physedge to confirm carrier delivery before completing the send (adds
   * executor-side latency, never on this request — sends are always async/202).
   * Defaults to false for the public tier (opt-in, unlike the admin tier's
   * default-true).
   */
  deliveryReport?: boolean;
}

export declare namespace Messages {
  export {
    type MessageListResponse as MessageListResponse,
    type MessageSendResponse as MessageSendResponse,
    type MessageListParams as MessageListParams,
    type MessageSendParams as MessageSendParams
  };
}
