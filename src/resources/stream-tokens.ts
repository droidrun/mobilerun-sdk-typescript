// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class StreamTokens extends APIResource {
  /**
   * Mint a short-lived, single-use stream token for a device. The token permits
   * streaming and control.
   */
  create(body: StreamTokenCreateParams, options?: RequestOptions): APIPromise<StreamTokenCreateResponse> {
    return this._client.post('/identity/stream-keys', { body, ...options });
  }

  /**
   * Revoke a stream token by its id. The token can no longer be used to start a
   * stream.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/identity/stream-keys/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface StreamTokenCreateResponse {
  expiresAt: string;

  key: string;

  keyId: string;
}

export interface StreamTokenCreateParams {
  deviceId: string;

  /**
   * Exact `https://host[:port]` origins (and `http://localhost[:port]`) allowed to
   * connect.
   */
  allowedOrigins?: Array<string>;

  ttlSeconds?: number;
}

export declare namespace StreamTokens {
  export {
    type StreamTokenCreateResponse as StreamTokenCreateResponse,
    type StreamTokenCreateParams as StreamTokenCreateParams,
  };
}
