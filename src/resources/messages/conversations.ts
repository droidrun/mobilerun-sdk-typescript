// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Conversations extends APIResource {
  /**
   * Lists SMS conversations by recent activity. Use both cursor fields from
   * `nextCursor` to fetch the next page.
   */
  list(
    query: ConversationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConversationListResponse> {
    return this._client.get('/numbers/messages/conversations', { query, ...options });
  }

  /**
   * Marks inbound messages in a conversation as read through the supplied cursor.
   * Repeating the request is safe.
   */
  markRead(
    body: ConversationMarkReadParams,
    options?: RequestOptions,
  ): APIPromise<ConversationMarkReadResponse> {
    return this._client.post('/numbers/messages/conversations/read', { body, ...options });
  }
}

export interface ConversationListResponse {
  items: Array<ConversationListResponse.Item>;

  nextCursor: ConversationListResponse.NextCursor | null;
}

export namespace ConversationListResponse {
  export interface Item {
    esimIds: Array<string>;

    lastMessage: Item.LastMessage;

    peerKey: string;

    unreadCount: number;
  }

  export namespace Item {
    export interface LastMessage {
      id: string;

      body: string | null;

      direction: 'inbound' | 'outbound';

      occurredAt: string;

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

  export interface NextCursor {
    lastMessageId: string;

    lastOccurredAt: string;
  }
}

export interface ConversationMarkReadResponse {
  data: ConversationMarkReadResponse.Data;
}

export namespace ConversationMarkReadResponse {
  export interface Data {
    updated: number;
  }
}

export interface ConversationListParams {
  cursorLastMessageId?: string;

  cursorLastOccurredAt?: string;

  esimId?: string;

  limit?: number;

  numberId?: string;
}

export interface ConversationMarkReadParams {
  /**
   * The thread's canonical peer key (see GET .../conversations)
   */
  peerKey: string;

  upToMessageId: string;

  /**
   * Mark inbound messages read up to (and including) this occurredAt/upToMessageId
   * cursor
   */
  upToOccurredAt: string;
}

export declare namespace Conversations {
  export {
    type ConversationListResponse as ConversationListResponse,
    type ConversationMarkReadResponse as ConversationMarkReadResponse,
    type ConversationListParams as ConversationListParams,
    type ConversationMarkReadParams as ConversationMarkReadParams,
  };
}
