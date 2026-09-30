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
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  conversations: ConversationsAPI.Conversations = new ConversationsAPI.Conversations(this._client);

  /**
   * Returns one message. For an outbound message that is not yet final, the status
   * may be refreshed once (at most every 30 s) before it is returned; a failed
   * refresh returns the stored message.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MessageRetrieveResponse> {
    return this._client.get(path`/numbers/messages/${id}`, options);
  }

  /**
   * Lists SMS messages newest first, with filters for direction, eSIM, phone number,
   * status, and conversation.
   */
  list(
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageListResponse> {
    return this._client.get('/numbers/messages', { query, ...options });
  }
}

export interface MessageRetrieveResponse {
  data: MessageRetrieveResponse.Data;
}

export namespace MessageRetrieveResponse {
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
  export {
    type MessageRetrieveResponse as MessageRetrieveResponse,
    type MessageListResponse as MessageListResponse,
    type MessageListParams as MessageListParams,
  };

  export {
    Conversations as Conversations,
    type ConversationListResponse as ConversationListResponse,
    type ConversationMarkReadResponse as ConversationMarkReadResponse,
    type ConversationListParams as ConversationListParams,
    type ConversationMarkReadParams as ConversationMarkReadParams,
  };
}
