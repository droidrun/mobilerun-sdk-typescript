// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
}

export interface MessageListResponse {
  data: MessageListResponse.Data;
}

export namespace MessageListResponse {
  export interface Data {
    items: Array<Data.Item>;

    pagination: Data.Pagination;
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

    export interface Pagination {
      hasNext: boolean;

      hasPrev: boolean;

      page: number;

      pages: number;

      pageSize: number;

      total: number;
    }
  }
}

export interface MessageListParams {
  direction?: 'all' | 'inbound' | 'outbound';

  page?: number;

  pageSize?: number;

  since?: string;
}

export declare namespace Messages {
  export { type MessageListResponse as MessageListResponse, type MessageListParams as MessageListParams };
}
