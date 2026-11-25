// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Requests extends APIResource {
  /**
   * Request a missing store app
   */
  create(body: RequestCreateParams, options?: RequestOptions): APIPromise<RequestCreateResponse> {
    return this._client.post('/store/requests', { body, ...options });
  }
}

export interface RequestCreateResponse {
  delivered: 'ticket' | 'event';

  ticketNumber: number | null;
}

export interface RequestCreateParams {
  platform: 'android' | 'ios';

  requested: string;

  surface?: 'store' | 'mcp' | 'api';
}

export declare namespace Requests {
  export {
    type RequestCreateResponse as RequestCreateResponse,
    type RequestCreateParams as RequestCreateParams,
  };
}
