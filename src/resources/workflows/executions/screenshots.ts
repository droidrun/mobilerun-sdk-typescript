// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Screenshots extends APIResource {
  /**
   * Redirects (302) to a freshly signed, time-limited image URL for a screenshot
   * captured during this execution. Owner-gated: 404 if the execution or the
   * screenshot does not belong to the caller.
   */
  retrieve(
    screenshotID: string,
    params: ScreenshotRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { executionId } = params;
    return this._client.get(path`/executions/${executionId}/screenshots/${screenshotID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ScreenshotRetrieveParams {
  executionId: string;
}

export declare namespace Screenshots {
  export { type ScreenshotRetrieveParams as ScreenshotRetrieveParams };
}
