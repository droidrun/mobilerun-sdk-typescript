// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RoutineFiles extends APIResource {
  /**
   * Lists the files saved in Mobilerun storage for routines whose delivery
   * destination is Mobilerun with a folder: the run recording, screenshots and
   * files.upload outputs. Newest first; filter by `folder`, `flowId` or
   * `executionId`. Files stay until you delete them or delete their routine.
   */
  list(
    query: RoutineFileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RoutineFileListResponse> {
    return this._client.get('/routine-files', { query, ...options });
  }

  /**
   * Deletes one saved file permanently and frees its storage (the file disappears at
   * once; the stored object is removed right after). Idempotent: an already deleted
   * file returns 204 too.
   */
  delete(fileID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/routine-files/${fileID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Deletes every saved file of exactly one folder (`folder`) or one run
   * (`executionId`) permanently. Pass exactly one of the two. Returns how many files
   * were deleted.
   */
  deleteMany(
    params: RoutineFileDeleteManyParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RoutineFileDeleteManyResponse> {
    const { executionId, folder } = params ?? {};
    return this._client.delete('/routine-files', { query: { executionId, folder }, ...options });
  }

  /**
   * Redirects (302) to a time-limited (at most 5 minutes) download URL for the file.
   * 404 when the file does not exist or belongs to someone else.
   */
  download(fileID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/routine-files/${fileID}/download`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists the folders that hold saved files with their file count, total size and
   * newest save time, newest first. Independent of whether the routine or run still
   * exists; `flows` names the routines that saved into each folder.
   */
  listFolders(
    query: RoutineFileListFoldersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RoutineFileListFoldersResponse> {
    return this._client.get('/routine-files/folders', { query, ...options });
  }
}

export interface RoutineFileListResponse {
  items: Array<RoutineFileListResponse.Item>;

  pagination: Shared.Pagination;
}

export namespace RoutineFileListResponse {
  export interface Item {
    id: string;

    createdAt: string | null;

    executionId: string;

    filename: string;

    /**
     * True when the routine no longer exists (replaced by a deploy, or deleted before
     * its files were deleted with it). Its files stay until you delete them.
     */
    flowDeleted: boolean;

    flowId: string;

    /**
     * Null when the routine no longer exists.
     */
    flowName: string | null;

    /**
     * Canonical folder the file was saved under, for example "/Exports/241109".
     */
    folder: string;

    kind: 'recording' | 'screenshot' | 'file';

    mimeType: string;

    sizeBytes: number;
  }
}

export interface RoutineFileDeleteManyResponse {
  deleted: number;
}

export interface RoutineFileListFoldersResponse {
  items: Array<RoutineFileListFoldersResponse.Item>;

  pagination: Shared.Pagination;
}

export namespace RoutineFileListFoldersResponse {
  export interface Item {
    fileCount: number;

    flows: Array<Item.Flow>;

    folder: string;

    lastCreatedAt: string | null;

    sizeBytes: number;
  }

  export namespace Item {
    export interface Flow {
      flowDeleted: boolean;

      flowId: string;

      flowName: string | null;
    }
  }
}

export interface RoutineFileListParams {
  executionId?: string;

  flowId?: string;

  /**
   * Exact folder (canonicalized: "//" collapsed, trailing "/" stripped).
   */
  folder?: string;

  page?: number;

  pageSize?: number;
}

export interface RoutineFileDeleteManyParams {
  executionId?: string;

  folder?: string;
}

export interface RoutineFileListFoldersParams {
  flowId?: string;

  page?: number;

  pageSize?: number;
}

export declare namespace RoutineFiles {
  export {
    type RoutineFileListResponse as RoutineFileListResponse,
    type RoutineFileDeleteManyResponse as RoutineFileDeleteManyResponse,
    type RoutineFileListFoldersResponse as RoutineFileListFoldersResponse,
    type RoutineFileListParams as RoutineFileListParams,
    type RoutineFileDeleteManyParams as RoutineFileDeleteManyParams,
    type RoutineFileListFoldersParams as RoutineFileListFoldersParams,
  };
}
