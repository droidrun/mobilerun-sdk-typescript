// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Files extends APIResource {
  /**
   * Partial update of `displayName` and/or `enabled`. Only files with `zone=skills`
   * are mutable; other zones return 422 `unsupported_zone`.
   */
  update(
    fileID: string,
    body: FileUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileUpdateResponse> {
    return this._client.patch(path`/agents/files/${fileID}`, { body, ...options });
  }

  /**
   * List the user's ready files, optionally filtered by zone
   */
  list(
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileListResponse> {
    return this._client.get('/agents/files', { query, ...options });
  }

  /**
   * Hard-delete a file
   */
  delete(fileID: string, options?: RequestOptions): APIPromise<FileDeleteResponse> {
    return this._client.delete(path`/agents/files/${fileID}`, options);
  }

  /**
   * Soft-cancels an in-flight upload before confirm. Only acts on `pending` rows —
   * refuses to touch `ready` to avoid wiping confirmed files. Idempotent:
   * `{ cancelled: false }` if the row exists but is no longer pending.
   */
  cancelPending(fileID: string, options?: RequestOptions): APIPromise<FileCancelPendingResponse> {
    return this._client.delete(path`/agents/files/${fileID}/pending`, options);
  }

  /**
   * Confirm a file upload by server-side HEAD validation
   */
  confirm(fileID: string, options?: RequestOptions): APIPromise<FileConfirmResponse> {
    return this._client.post(path`/agents/files/${fileID}/confirm`, options);
  }

  /**
   * Redirects to a short-lived presigned download URL. Missing, non-ready, and files
   * owned by another tenant all return the same 404 response.
   */
  download(fileID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/agents/files/${fileID}/download`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Mint a presigned PUT URL for a user file upload
   */
  uploadURL(params: FileUploadURLParams, options?: RequestOptions): APIPromise<FileUploadURLResponse> {
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

export interface FileUpdateResponse {
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
  }

  export interface Quota {
    currentBytes: number;

    quotaBytes: number;
  }
}

export interface FileDeleteResponse {
  ok: true;
}

export interface FileCancelPendingResponse {
  cancelled: boolean;
}

export interface FileConfirmResponse {
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

export interface FileUploadURLResponse {
  expiresAt: string;

  fileId: string;

  putUrl: string;
}

export interface FileUpdateParams {
  displayName?: string | null;

  enabled?: boolean;
}

export interface FileListParams {
  zone?: 'user' | 'agent' | 'workflow' | 'skills';
}

export interface FileUploadURLParams {
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

export declare namespace Files {
  export {
    type FileUpdateResponse as FileUpdateResponse,
    type FileListResponse as FileListResponse,
    type FileDeleteResponse as FileDeleteResponse,
    type FileCancelPendingResponse as FileCancelPendingResponse,
    type FileConfirmResponse as FileConfirmResponse,
    type FileUploadURLResponse as FileUploadURLResponse,
    type FileUpdateParams as FileUpdateParams,
    type FileListParams as FileListParams,
    type FileUploadURLParams as FileUploadURLParams,
  };
}
