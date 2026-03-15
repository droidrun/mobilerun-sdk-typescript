// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ProfilesAPI from './profiles';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Profiles extends APIResource {
  /**
   * Create a new device profile
   */
  create(body: ProfileCreateParams, options?: RequestOptions): APIPromise<ProfileCreateResponse> {
    return this._client.post('/profiles', { body, ...options });
  }

  /**
   * Get device profile by ID
   */
  retrieve(profileID: string, options?: RequestOptions): APIPromise<ProfileRetrieveResponse> {
    return this._client.get(path`/profiles/${profileID}`, options);
  }

  /**
   * Update a device profile
   */
  update(
    profileID: string,
    body: ProfileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProfileUpdateResponse> {
    return this._client.put(path`/profiles/${profileID}`, { body, ...options });
  }

  /**
   * List device profiles
   */
  list(
    query: ProfileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProfileListResponse> {
    return this._client.get('/profiles', { query, ...options });
  }

  /**
   * Delete a device profile
   */
  delete(profileID: string, options?: RequestOptions): APIPromise<ProfileDeleteResponse> {
    return this._client.delete(path`/profiles/${profileID}`, options);
  }
}

export interface DeviceSpec {
  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;

  apps?: Array<string> | null;

  carrier?: Shared.DeviceCarrier;

  files?: Array<string> | null;

  identifiers?: Shared.DeviceIdentifiers;

  name?: string;

  proxy?: Shared.Config;

  smartIp?: boolean;
}

export interface ProfileCreateResponse {
  id: string;

  createdAt: string;

  name: string;

  spec: DeviceSpec;

  updatedAt: string;

  userId: string;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface ProfileRetrieveResponse {
  id: string;

  createdAt: string;

  name: string;

  spec: DeviceSpec;

  updatedAt: string;

  userId: string;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface ProfileUpdateResponse {
  id: string;

  createdAt: string;

  name: string;

  spec: DeviceSpec;

  updatedAt: string;

  userId: string;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface ProfileListResponse {
  items: Array<ProfileListResponse.Item> | null;

  pagination: Shared.Meta;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export namespace ProfileListResponse {
  export interface Item {
    id: string;

    createdAt: string;

    name: string;

    spec: ProfilesAPI.DeviceSpec;

    updatedAt: string;

    userId: string;

    /**
     * A URL to the JSON Schema for this object.
     */
    $schema?: string;
  }
}

export interface ProfileDeleteResponse {
  message: string;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface ProfileCreateParams {
  /**
   * Profile name
   */
  name: string;

  /**
   * Device specification
   */
  spec: DeviceSpec;
}

export interface ProfileUpdateParams {
  /**
   * Profile name
   */
  name: string;

  /**
   * Device specification
   */
  spec: DeviceSpec;
}

export interface ProfileListParams {
  name?: string;

  orderBy?: 'name' | 'created_at' | 'updated_at';

  orderByDirection?: 'asc' | 'desc';

  page?: number;

  pageSize?: number;
}

export declare namespace Profiles {
  export {
    type DeviceSpec as DeviceSpec,
    type ProfileCreateResponse as ProfileCreateResponse,
    type ProfileRetrieveResponse as ProfileRetrieveResponse,
    type ProfileUpdateResponse as ProfileUpdateResponse,
    type ProfileListResponse as ProfileListResponse,
    type ProfileDeleteResponse as ProfileDeleteResponse,
    type ProfileCreateParams as ProfileCreateParams,
    type ProfileUpdateParams as ProfileUpdateParams,
    type ProfileListParams as ProfileListParams,
  };
}
