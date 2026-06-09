// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class FileID extends APIResource {
  /**
   * Soft-cancels an in-flight upload before confirm. Only acts on `pending` rows —
   * refuses to touch `ready` to avoid wiping confirmed files. Idempotent:
   * `{ cancelled: false }` if the row exists but is no longer pending.
   */
  cancelPendingUpload(options?: RequestOptions): APIPromise<FileIDCancelPendingUploadResponse> {
    return this._client.delete('/agents/files/:fileId/pending', options);
  }

  /**
   * Confirm a file upload by server-side HEAD validation
   */
  confirmUpload(options?: RequestOptions): APIPromise<FileIDConfirmUploadResponse> {
    return this._client.post('/agents/files/:fileId/confirm', options);
  }

  /**
   * Hard-delete a file
   */
  deleteFile(options?: RequestOptions): APIPromise<FileIDDeleteFileResponse> {
    return this._client.delete('/agents/files/:fileId', options);
  }

  /**
   * Redirect to a presigned GET URL for a file (FE owner only)
   */
  downloadFile(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/agents/files/:fileId/download', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Partial update of `displayName` and/or `enabled`. Only files with `zone=skills`
   * are mutable; other zones return 422 `unsupported_zone`.
   */
  updateMetadata(
    body: FileIDUpdateMetadataParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileIDUpdateMetadataResponse> {
    return this._client.patch('/agents/files/:fileId', { body, ...options });
  }
}

export interface FileIDCancelPendingUploadResponse {
  cancelled: boolean;
}

export interface FileIDConfirmUploadResponse {
  actualSizeBytes: number;

  createdAt: string;

  createdBy: 'user' | 'agent' | 'workflow';

  displayName: string | null;

  enabled: boolean;

  fileId: string;

  filename: string;

  mimeType: string;

  sizeBytes: number;

  state: 'ready';

  zone: 'user' | 'agent' | 'workflow' | 'skills';
}

export interface FileIDDeleteFileResponse {
  ok: true;
}

export interface FileIDUpdateMetadataResponse {
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

export interface FileIDUpdateMetadataParams {
  displayName?: string | null;

  enabled?: boolean;
}

export declare namespace FileID {
  export {
    type FileIDCancelPendingUploadResponse as FileIDCancelPendingUploadResponse,
    type FileIDConfirmUploadResponse as FileIDConfirmUploadResponse,
    type FileIDDeleteFileResponse as FileIDDeleteFileResponse,
    type FileIDUpdateMetadataResponse as FileIDUpdateMetadataResponse,
    type FileIDUpdateMetadataParams as FileIDUpdateMetadataParams,
  };
}
