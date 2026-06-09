// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Abort extends APIResource {
  /**
   * Unconditionally clears the in-flight chat state for the caller. Idempotent
   * escape hatch when /chat/abort cannot settle.
   */
  forceClear(options?: RequestOptions): APIPromise<AbortForceClearResponse> {
    return this._client.post('/agents/chat/abort/force', options);
  }

  /**
   * Abort the in-flight chat turn. Idempotent.
   */
  perform(options?: RequestOptions): APIPromise<AbortPerformResponse> {
    return this._client.post('/agents/chat/abort', options);
  }
}

export interface AbortForceClearResponse {
  cleared: number;

  ok: true;
}

export interface AbortPerformResponse {
  ok: true;
}

export declare namespace Abort {
  export {
    type AbortForceClearResponse as AbortForceClearResponse,
    type AbortPerformResponse as AbortPerformResponse,
  };
}
