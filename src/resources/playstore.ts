// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Playstore extends APIResource {
  /**
   * Create app from Play Store metadata
   */
  createApp(
    body: PlaystoreCreateAppParams,
    options?: RequestOptions,
  ): APIPromise<PlaystoreCreateAppResponse> {
    return this._client.post('/playstore/request', { body, ...options });
  }

  /**
   * Search apps in Google Play
   */
  searchApp(
    query: PlaystoreSearchAppParams,
    options?: RequestOptions,
  ): APIPromise<PlaystoreSearchAppResponse> {
    return this._client.get('/playstore/search', { query, ...options });
  }
}

export interface PlaystoreCreateAppResponse {
  data: PlaystoreCreateAppResponse.Data;
}

export namespace PlaystoreCreateAppResponse {
  export interface Data {
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

export interface PlaystoreSearchAppResponse {
  data: PlaystoreSearchAppResponse.Data;
}

export namespace PlaystoreSearchAppResponse {
  export interface Data {
    apps: Array<Data.App>;

    query: string;

    totalResults: number;
  }

  export namespace Data {
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
}

export interface PlaystoreCreateAppParams {
  /**
   * Android package name (appId)
   */
  packageName: string;
}

export interface PlaystoreSearchAppParams {
  /**
   * Search term for Google Play
   */
  query: string;
}

export declare namespace Playstore {
  export {
    type PlaystoreCreateAppResponse as PlaystoreCreateAppResponse,
    type PlaystoreSearchAppResponse as PlaystoreSearchAppResponse,
    type PlaystoreCreateAppParams as PlaystoreCreateAppParams,
    type PlaystoreSearchAppParams as PlaystoreSearchAppParams,
  };
}
