// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConversationsAPI from './conversations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Conversations extends APIResource {
  /**
   * Lists the caller's own SMS conversations, one row per thread. Each row includes
   * the most recent message in the thread, its unread inbound count, and the eSIMs
   * it was seen through. Optional `esimId` or `numberId` narrows to threads on one
   * eSIM or number.
   *
   * Cursor-paginated via `limit` (default 20, max 100) and
   * `cursorLastOccurredAt`/`cursorLastMessageId` (both required together, taken from
   * a previous page's `nextCursor`). Pagination follows each thread's most recent
   * activity rather than a fixed snapshot, so a thread with new activity can move
   * ahead of an in-progress page fetch. Clients that need a stable ordering should
   * snapshot their own view.
   */
  list(query: ConversationListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ConversationListResponse> {
    return this._client.get('/numbers/messages/conversations', { query, ...options });
  }

  /**
   * Marks the caller's own inbound messages in a conversation thread as read, up to
   * and including the given `(upToOccurredAt, upToMessageId)` cursor — typically a
   * conversation row's `lastMessage`. Idempotent: repeating the call with the same
   * cursor updates 0 rows. Returns the number of rows updated.
   */
  markRead(body: ConversationMarkReadParams, options?: RequestOptions): APIPromise<ConversationMarkReadResponse> {
    return this._client.post('/numbers/messages/conversations/read', { body, ...options });
  }
}

export interface ConversationListResponse {
  data: ConversationListResponse.Data;
}

export namespace ConversationListResponse {
  export interface Data {
    items: Array<Data.Item>;

    nextCursor: Data.NextCursor | null;
  }

  export namespace Data {
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

        status: 'received' | 'queued' | 'claimed' | 'sending' | 'sent' | 'sent_unconfirmed' | 'delivered' | 'failed';
      }
    }

    export interface NextCursor {
      lastMessageId: string;

      lastOccurredAt: string;
    }
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
    type ConversationMarkReadParams as ConversationMarkReadParams
  };
}
