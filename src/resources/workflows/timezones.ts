// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Timezones extends APIResource {
  /**
   * List supported IANA timezones
   */
  list(options?: RequestOptions): APIPromise<TimezoneListResponse> {
    return this._client.get('/timezones', options);
  }
}

export interface TimezoneListResponse {
  data: Array<string>;
}

export declare namespace Timezones {
  export { type TimezoneListResponse as TimezoneListResponse };
}
