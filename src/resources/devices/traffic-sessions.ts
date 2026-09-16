// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class TrafficSessions extends APIResource {
  /**
   * Starts one live-only decoded HTTP/1.1, HTTP/2, HTTP/3 and WebSocket traffic
   * session.
   */
  create(
    deviceID: string,
    params: TrafficSessionCreateParams,
    options?: RequestOptions,
  ): APIPromise<TrafficSessionCreateResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post(path`/devices/${deviceID}/traffic/sessions`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Idempotency-Key': idempotencyKey }, options?.headers]),
    });
  }

  /**
   * Returns status and the device stream credential for a live session.
   */
  retrieve(
    sessionID: string,
    params: TrafficSessionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<TrafficSessionRetrieveResponse> {
    const { deviceId } = params;
    return this._client.get(path`/devices/${deviceId}/traffic/sessions/${sessionID}`, options);
  }

  /**
   * List device traffic sessions
   */
  list(
    deviceID: string,
    query: TrafficSessionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TrafficSessionListResponse> {
    return this._client.get(path`/devices/${deviceID}/traffic/sessions`, { query, ...options });
  }

  /**
   * Stop device traffic inspection
   */
  delete(
    sessionID: string,
    params: TrafficSessionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<TrafficSessionDeleteResponse> {
    const { deviceId } = params;
    return this._client.delete(path`/devices/${deviceId}/traffic/sessions/${sessionID}`, options);
  }
}

export interface TrafficSessionCreateResponse {
  id: string;

  createdAt: string;

  deviceId: string;

  expiresAt: string;

  maxBodyBytes: number;

  retention: 'none';

  state: 'starting' | 'active' | 'stopping' | 'stopped' | 'failed' | 'expired';

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;

  error?: TrafficSessionCreateResponse.Error;

  startedAt?: string;

  stoppedAt?: string;

  stream?: TrafficSessionCreateResponse.Stream;
}

export namespace TrafficSessionCreateResponse {
  export interface Error {
    code: string;

    message: string;
  }

  export interface Stream {
    token: string;

    protocol: string;

    url: string;
  }
}

export interface TrafficSessionRetrieveResponse {
  id: string;

  createdAt: string;

  deviceId: string;

  expiresAt: string;

  maxBodyBytes: number;

  retention: 'none';

  state: 'starting' | 'active' | 'stopping' | 'stopped' | 'failed' | 'expired';

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;

  error?: TrafficSessionRetrieveResponse.Error;

  startedAt?: string;

  stoppedAt?: string;

  stream?: TrafficSessionRetrieveResponse.Stream;
}

export namespace TrafficSessionRetrieveResponse {
  export interface Error {
    code: string;

    message: string;
  }

  export interface Stream {
    token: string;

    protocol: string;

    url: string;
  }
}

export interface TrafficSessionListResponse {
  items: Array<TrafficSessionListResponse.Item> | null;

  pagination: Shared.Meta;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export namespace TrafficSessionListResponse {
  export interface Item {
    id: string;

    createdAt: string;

    deviceId: string;

    expiresAt: string;

    maxBodyBytes: number;

    retention: 'none';

    state: 'starting' | 'active' | 'stopping' | 'stopped' | 'failed' | 'expired';

    /**
     * A URL to the JSON Schema for this object.
     */
    $schema?: string;

    error?: Item.Error;

    startedAt?: string;

    stoppedAt?: string;

    stream?: Item.Stream;
  }

  export namespace Item {
    export interface Error {
      code: string;

      message: string;
    }

    export interface Stream {
      token: string;

      protocol: string;

      url: string;
    }
  }
}

export interface TrafficSessionDeleteResponse {
  id: string;

  createdAt: string;

  deviceId: string;

  expiresAt: string;

  maxBodyBytes: number;

  retention: 'none';

  state: 'starting' | 'active' | 'stopping' | 'stopped' | 'failed' | 'expired';

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;

  error?: TrafficSessionDeleteResponse.Error;

  startedAt?: string;

  stoppedAt?: string;

  stream?: TrafficSessionDeleteResponse.Stream;
}

export namespace TrafficSessionDeleteResponse {
  export interface Error {
    code: string;

    message: string;
  }

  export interface Stream {
    token: string;

    protocol: string;

    url: string;
  }
}

export interface TrafficSessionCreateParams {
  /**
   * Header param
   */
  'Idempotency-Key': string;

  /**
   * Body param
   */
  expiresInSeconds?: number;

  /**
   * Body param
   */
  maxBodyBytes?: number;
}

export interface TrafficSessionRetrieveParams {
  deviceId: string;
}

export interface TrafficSessionListParams {
  page?: number;

  pageSize?: number;
}

export interface TrafficSessionDeleteParams {
  deviceId: string;
}

export declare namespace TrafficSessions {
  export {
    type TrafficSessionCreateResponse as TrafficSessionCreateResponse,
    type TrafficSessionRetrieveResponse as TrafficSessionRetrieveResponse,
    type TrafficSessionListResponse as TrafficSessionListResponse,
    type TrafficSessionDeleteResponse as TrafficSessionDeleteResponse,
    type TrafficSessionCreateParams as TrafficSessionCreateParams,
    type TrafficSessionRetrieveParams as TrafficSessionRetrieveParams,
    type TrafficSessionListParams as TrafficSessionListParams,
    type TrafficSessionDeleteParams as TrafficSessionDeleteParams,
  };
}
