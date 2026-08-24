// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Get a mailbox message
   *
   * @example
   * ```ts
   * const message = await client.mailboxes.messages.retrieve(
   *   'x',
   *   { mailboxId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  retrieve(
    messageID: string,
    params: MessageRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MessageRetrieveResponse> {
    const { mailboxId } = params;
    return this._client.get(path`/mailboxes/${mailboxId}/messages/${messageID}`, options);
  }

  /**
   * Lists messages for a mailbox with keyset pagination and time/sender/hasOtp
   * filters for polling.
   *
   * @example
   * ```ts
   * const messages = await client.mailboxes.messages.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  list(
    mailboxID: string,
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageListResponse> {
    return this._client.get(path`/mailboxes/${mailboxID}/messages`, { query, ...options });
  }
}

export interface MessageRetrieveResponse {
  data: MessageRetrieveResponse.Data;
}

export namespace MessageRetrieveResponse {
  export interface Data {
    id: string;

    attachmentCount: number;

    attachments: Array<Data.Attachment>;

    fromAddress: string | null;

    fromName: string | null;

    hasOtp: boolean;

    mailboxId: string;

    receivedAt: string;

    subject: string | null;

    textBody: string | null;
  }

  export namespace Data {
    export interface Attachment {
      contentType: string | null;

      name: string | null;

      size: number;
    }
  }
}

export interface MessageListResponse {
  items: Array<MessageListResponse.Item>;

  nextCursor: string | null;
}

export namespace MessageListResponse {
  export interface Item {
    id: string;

    fromAddress: string | null;

    hasOtp: boolean;

    mailboxId: string;

    preview: string | null;

    receivedAt: string;

    subject: string | null;
  }
}

export interface MessageRetrieveParams {
  mailboxId: string;
}

export interface MessageListParams {
  after?: string;

  cursor?: string;

  hasOtp?: 'true' | 'false';

  limit?: number;

  sender?: string;
}

export declare namespace Messages {
  export {
    type MessageRetrieveResponse as MessageRetrieveResponse,
    type MessageListResponse as MessageListResponse,
    type MessageRetrieveParams as MessageRetrieveParams,
    type MessageListParams as MessageListParams,
  };
}
