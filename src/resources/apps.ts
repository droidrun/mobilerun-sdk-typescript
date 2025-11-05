// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Apps extends APIResource {
  /**
   * Retrieves an app by its ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AppRetrieveResponse | null> {
    return this._client.get(path`/apps/${id}`, options);
  }

  /**
   * Retrieves a paginated list of apps with filtering and search capabilities
   */
  list(query: AppListParams | null | undefined = {}, options?: RequestOptions): APIPromise<AppListResponse> {
    return this._client.get('/apps', { query, ...options });
  }

  /**
   * Creates or updates an app and returns a signed upload URL for the asset service
   */
  createSignedUploadURL(
    body: AppCreateSignedUploadURLParams,
    options?: RequestOptions,
  ): APIPromise<AppCreateSignedUploadURLResponse> {
    return this._client.post('/apps/create-signed-upload-url', { body, ...options });
  }

  /**
   * Deletes an app record when an upload fails
   */
  markUploadFailed(
    body: AppMarkUploadFailedParams,
    options?: RequestOptions,
  ): APIPromise<AppMarkUploadFailedResponse> {
    return this._client.post('/apps/mark-upload-failed', { body, ...options });
  }

  /**
   * Retrieves an app by its package name
   */
  retrieveByPackageName(
    packageName: string,
    options?: RequestOptions,
  ): APIPromise<AppRetrieveByPackageNameResponse | null> {
    return this._client.get(path`/apps/packages/${packageName}`, options);
  }

  /**
   * Updates the app
   */
  updateApp(
    id: string,
    body: AppUpdateAppParams,
    options?: RequestOptions,
  ): APIPromise<AppUpdateAppResponse> {
    return this._client.patch(path`/apps/${id}`, { body, ...options });
  }
}

export interface AppRetrieveResponse {
  id: string;

  categoryName: string | null;

  createdAt: string | null;

  description: string | null;

  developerName: string | null;

  displayName: string;

  externalIds: Array<string> | null;

  iconURL: string;

  packageName: string;

  queuedAt: string | null;

  ratingCount: number | null;

  ratingScore: string | null;

  sizeBytes: number | null;

  source: string;

  targetSdk: number | null;

  updatedAt: string | null;

  userId: string | null;

  versionCode: number | null;

  versionName: string;
}

export interface AppListResponse {
  apps: Array<AppListResponse.App>;

  availableCount: number;

  queuedCount: number;

  storeCount: number;

  totalCount: number;

  uploadCount: number;
}

export namespace AppListResponse {
  export interface App {
    id: string;

    categoryName: string | null;

    createdAt: string | null;

    description: string | null;

    developerName: string | null;

    displayName: string;

    externalIds: Array<string> | null;

    iconURL: string;

    packageName: string;

    queuedAt: string | null;

    ratingCount: number | null;

    ratingScore: string | null;

    sizeBytes: number | null;

    source: string;

    targetSdk: number | null;

    updatedAt: string | null;

    userId: string | null;

    versionCode: number | null;

    versionName: string;
  }
}

export interface AppCreateSignedUploadURLResponse {
  id: string;

  externalIds: Array<string>;

  name: string;

  signedDownloadUrl: string;

  signedUploadUrl: string;

  md5?: string | null;
}

export interface AppMarkUploadFailedResponse {
  message: string;

  success: true;
}

export interface AppRetrieveByPackageNameResponse {
  id: string;

  categoryName: string | null;

  createdAt: string | null;

  description: string | null;

  developerName: string | null;

  displayName: string;

  externalIds: Array<string> | null;

  iconURL: string;

  packageName: string;

  queuedAt: string | null;

  ratingCount: number | null;

  ratingScore: string | null;

  sizeBytes: number | null;

  source: string;

  targetSdk: number | null;

  updatedAt: string | null;

  userId: string | null;

  versionCode: number | null;

  versionName: string;
}

export interface AppUpdateAppResponse {
  message: string;
}

export interface AppListParams {
  page?: number;

  pageSize?: number;

  query?: string;

  source?: 'all' | 'uploaded' | 'store';
}

export interface AppCreateSignedUploadURLParams {
  displayName: string;

  iconURL: string;

  packageName: string;

  sizeBytes: number;

  targetSdk: number;

  versionCode: number;

  versionName: string;

  categoryName?: string;

  description?: string;

  developerName?: string;

  ratingCount?: number;

  ratingScore?: number;
}

export interface AppMarkUploadFailedParams {
  id: string;
}

export interface AppUpdateAppParams {
  externalIds: Array<string>;
}

export declare namespace Apps {
  export {
    type AppRetrieveResponse as AppRetrieveResponse,
    type AppListResponse as AppListResponse,
    type AppCreateSignedUploadURLResponse as AppCreateSignedUploadURLResponse,
    type AppMarkUploadFailedResponse as AppMarkUploadFailedResponse,
    type AppRetrieveByPackageNameResponse as AppRetrieveByPackageNameResponse,
    type AppUpdateAppResponse as AppUpdateAppResponse,
    type AppListParams as AppListParams,
    type AppCreateSignedUploadURLParams as AppCreateSignedUploadURLParams,
    type AppMarkUploadFailedParams as AppMarkUploadFailedParams,
    type AppUpdateAppParams as AppUpdateAppParams,
  };
}
