// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ConversationsAPI from './conversations';
import {
  ConversationListParams,
  ConversationListResponse,
  ConversationMarkReadParams,
  ConversationMarkReadResponse,
  Conversations,
} from './conversations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Messages extends APIResource {
  conversations: ConversationsAPI.Conversations = new ConversationsAPI.Conversations(this._client);

  /**
   * Lists the caller's own SMS messages, newest first. Supports filtering by
   * direction, esimId, numberId, status, peerNumber (substring search, min 3
   * characters), and peerKey (exact thread match). Each row includes its canonical
   * thread key (`peerKey`).
   */
  list(
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageListResponse> {
    return this._client.get('/numbers/messages', { query, ...options });
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
}

export interface MessageListParams {
  direction?: 'all' | 'inbound' | 'outbound';

  esimId?: string;

  numberId?: string;

  page?: number;

  pageSize?: number;

  peerKey?: string;

  peerNumber?: string;

  status?:
    | 'all'
    | 'received'
    | 'queued'
    | 'claimed'
    | 'sending'
    | 'sent'
    | 'sent_unconfirmed'
    | 'delivered'
    | 'failed';
}

Messages.Conversations = Conversations;

export declare namespace Messages {
  export { type MessageListResponse as MessageListResponse, type MessageListParams as MessageListParams };

  export {
    Conversations as Conversations,
    type ConversationListResponse as ConversationListResponse,
    type ConversationMarkReadResponse as ConversationMarkReadResponse,
    type ConversationListParams as ConversationListParams,
    type ConversationMarkReadParams as ConversationMarkReadParams,
  };
}
