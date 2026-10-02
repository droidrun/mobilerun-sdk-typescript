// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Connections extends APIResource {
  /**
   * Links the caller’s Gmail account. Replaying the same Idempotency-Key (or the
   * deprecated `clientRequestId` body field, still accepted as a fallback) returns
   * the same mailbox. When Gmail is already active, redirectUrl is null and the
   * mailbox is usable immediately.
   *
   * @example
   * ```ts
   * const connection =
   *   await client.mailboxes.connections.create({
   *     provider: 'gmail',
   *   });
   * ```
   */
  create(body: ConnectionCreateParams, options?: RequestOptions): APIPromise<ConnectionCreateResponse> {
    return this._client.post('/mailboxes/connections', { body, ...options });
  }

  /**
   * Reports pending, active (with the Gmail address), expired, or removed.
   * connectionId is the mailbox id.
   *
   * @example
   * ```ts
   * const connection =
   *   await client.mailboxes.connections.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(connectionID: string, options?: RequestOptions): APIPromise<ConnectionRetrieveResponse> {
    return this._client.get(path`/mailboxes/connections/${connectionID}`, options);
  }
}

export interface ConnectionCreateResponse {
  address: string | null;

  connectionId: string;

  mailboxId: string;

  redirectUrl: string | null;

  status: 'pending' | 'active' | 'expired' | 'removed';
}

export interface ConnectionRetrieveResponse {
  address: string | null;

  connectionId: string;

  mailboxId: string;

  redirectUrl: string | null;

  status: 'pending' | 'active' | 'expired' | 'removed';
}

export interface ConnectionCreateParams {
  provider: 'gmail';

  /**
   * sha256 hex of the browser-held connect binding secret.
   */
  bindingHash?: string;

  /**
   * @deprecated Use the Idempotency-Key header.
   */
  clientRequestId?: string;

  label?: string;
}

export declare namespace Connections {
  export {
    type ConnectionCreateResponse as ConnectionCreateResponse,
    type ConnectionRetrieveResponse as ConnectionRetrieveResponse,
    type ConnectionCreateParams as ConnectionCreateParams,
  };
}
