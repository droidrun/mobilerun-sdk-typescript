// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Profile extends APIResource {
  /**
   * Apply a profile to a device
   */
  update(deviceID: string, params: ProfileUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params
    return this._client.put(path`/devices/${deviceID}/profile`, { body, ...options, headers: buildHeaders([{Accept: '*/*', ...(xDeviceDisplayID?.toString() != null ? { 'X-Device-Display-ID': xDeviceDisplayID?.toString() } : undefined)}, options?.headers]) });
  }
}

export interface ProfileUpdateParams {
  /**
   * Body param: ID of the profile to apply
   */
  profileId: string;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export declare namespace Profile {
  export {
    type ProfileUpdateParams as ProfileUpdateParams
  };
}
