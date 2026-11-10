// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Files extends APIResource {
  /**
   * List the ready files of one agent, optionally filtered by zone.
   */
  list(
    agentID: string,
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileListResponse> {
    return this._client.get(path`/agents/${agentID}/files`, { query, ...options });
  }
}

export interface FileListResponse {
  files: Array<FileListResponse.File>;

  quota: FileListResponse.Quota;
}

export namespace FileListResponse {
  export interface File {
    createdAt: string;

    createdBy: 'user' | 'agent' | 'workflow';

    displayName: string | null;

    enabled: boolean;

    fileId: string;

    filename: string;

    mimeType: string;

    sizeBytes: number;

    zone: 'user' | 'agent' | 'workflow' | 'skills';

    agentId?: string;

    collectionStatus?: File.UnionMember0 | File.UnionMember1;
  }

  export namespace File {
    export interface UnionMember0 {
      completeness: 'complete' | 'partial' | 'none' | 'unknown';

      coverage: 'exhaustive' | 'bounded' | 'unknown';

      endReached: boolean;

      records: UnionMember0.Records;

      resumable: boolean;

      version: 1;
    }

    export namespace UnionMember0 {
      export interface Records {
        reported: number;

        unit: string;
      }
    }

    export interface UnionMember1 {
      completeness: 'unknown';

      coverage: 'unknown';

      endReached: false;

      resumable: false;

      version: 1;
    }
  }

  export interface Quota {
    includedBytes: number | null;

    maxBytes: number | null;

    overageAllowed: boolean;

    usedBytes: number;
  }
}

export interface FileListParams {
  zone?: 'user' | 'agent' | 'workflow' | 'skills';
}

export declare namespace Files {
  export { type FileListResponse as FileListResponse, type FileListParams as FileListParams };
}
