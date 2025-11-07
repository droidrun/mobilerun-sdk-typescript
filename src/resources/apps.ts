// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Apps extends APIResource {
  /**
   * Retrieves a paginated list of apps with filtering and search capabilities
   */
  list(query: AppListParams | null | undefined = {}, options?: RequestOptions): APIPromise<AppListResponse> {
    return this._client.get('/apps', { query, ...options });
  }
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

export interface AppListParams {
  order?: 'asc' | 'desc';

  page?: number;

  pageSize?: number;

  query?: string;

  sortBy?: 'createdAt' | 'name';

  source?: 'all' | 'uploaded' | 'store';
}

export declare namespace Apps {
  export { type AppListResponse as AppListResponse, type AppListParams as AppListParams };
}
