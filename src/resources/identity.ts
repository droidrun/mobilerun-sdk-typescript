// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Identity extends APIResource {
  /**
   * Return the user, owner and authentication method of the calling credential.
   */
  me(options?: RequestOptions): APIPromise<IdentityMeResponse> {
    return this._client.get('/identity/me', options);
  }
}

export interface IdentityMeResponse {
  authMethod: 'api_key' | 'session';

  ownerId: string;

  userId: string;

  apiKeyId?: string;
}

export declare namespace Identity {
  export { type IdentityMeResponse as IdentityMeResponse };
}
