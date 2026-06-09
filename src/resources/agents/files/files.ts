// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FileIDAPI from './file-id';
import {
  FileID,
  FileIDCancelPendingUploadResponse,
  FileIDConfirmUploadResponse,
  FileIDDeleteFileResponse,
  FileIDUpdateMetadataParams,
  FileIDUpdateMetadataResponse,
} from './file-id';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Files extends APIResource {
  fileID: FileIDAPI.FileID = new FileIDAPI.FileID(this._client);

  /**
   * List the user's ready files, optionally filtered by zone
   */
  listFiles(
    query: FileListFilesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileListFilesResponse> {
    return this._client.get('/agents/files', { query, ...options });
  }

  /**
   * Mint a presigned PUT URL for a user file upload
   */
  mintUploadURL(
    params: FileMintUploadURLParams,
    options?: RequestOptions,
  ): APIPromise<FileMintUploadURLResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/agents/files/upload-url', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface FileListFilesResponse {
  files: Array<FileListFilesResponse.File>;

  quota: FileListFilesResponse.Quota;
}

export namespace FileListFilesResponse {
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
  }

  export interface Quota {
    currentBytes: number;

    quotaBytes: number;
  }
}

export interface FileMintUploadURLResponse {
  expiresAt: string;

  fileId: string;

  putUrl: string;
}

export interface FileListFilesParams {
  zone?: 'user' | 'agent' | 'workflow' | 'skills';
}

export interface FileMintUploadURLParams {
  /**
   * Body param
   */
  filename: string;

  /**
   * Body param
   */
  mimeType: string;

  /**
   * Body param
   */
  sizeBytes: number;

  /**
   * Body param
   */
  zone?: 'user' | 'skills';

  /**
   * Header param
   */
  'Idempotency-Key'?: string;
}

Files.FileID = FileID;

export declare namespace Files {
  export {
    type FileListFilesResponse as FileListFilesResponse,
    type FileMintUploadURLResponse as FileMintUploadURLResponse,
    type FileListFilesParams as FileListFilesParams,
    type FileMintUploadURLParams as FileMintUploadURLParams,
  };

  export {
    FileID as FileID,
    type FileIDCancelPendingUploadResponse as FileIDCancelPendingUploadResponse,
    type FileIDConfirmUploadResponse as FileIDConfirmUploadResponse,
    type FileIDDeleteFileResponse as FileIDDeleteFileResponse,
    type FileIDUpdateMetadataResponse as FileIDUpdateMetadataResponse,
    type FileIDUpdateMetadataParams as FileIDUpdateMetadataParams,
  };
}
