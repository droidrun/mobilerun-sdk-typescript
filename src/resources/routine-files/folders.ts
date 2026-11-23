// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Folders extends APIResource {
  /**
   * Lists the folders that hold saved files with their file count, total size and
   * newest save time, newest first. Independent of whether the routine or run still
   * exists; `flows` names the routines that saved into each folder.
   */
  list(
    query: FolderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FolderListResponse> {
    return this._client.get('/routine-files/folders', { query, ...options });
  }
}

export interface RoutineFileFolder {
  fileCount: number;

  flows: Array<RoutineFileFolder.Flow>;

  folder: string;

  lastCreatedAt: string | null;

  sizeBytes: number;
}

export namespace RoutineFileFolder {
  export interface Flow {
    flowDeleted: boolean;

    flowId: string;

    flowName: string | null;
  }
}

export interface FolderListResponse {
  items: Array<RoutineFileFolder>;

  pagination: Shared.Pagination;
}

export interface FolderListParams {
  flowId?: string;

  page?: number;

  pageSize?: number;
}

export declare namespace Folders {
  export {
    type RoutineFileFolder as RoutineFileFolder,
    type FolderListResponse as FolderListResponse,
    type FolderListParams as FolderListParams,
  };
}
