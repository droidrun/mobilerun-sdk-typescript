// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Files extends APIResource {
  /**
   * List files
   */
  list(deviceID: string, params: FileListParams, options?: RequestOptions): APIPromise<FileListResponse> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...query } = params;
    return this._client.get(path`/devices/${deviceID}/files`, {
      query,
      ...options,
      headers: buildHeaders([
        {
          ...(xDeviceDisplayID?.toString() != null ?
            { 'X-Device-Display-ID': xDeviceDisplayID?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Delete file
   */
  delete(deviceID: string, params: FileDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { path: path_, 'X-Device-Display-ID': xDeviceDisplayID } = params;
    return this._client.delete(path`/devices/${deviceID}/files`, {
      query: { path: path_ },
      ...options,
      headers: buildHeaders([
        {
          Accept: '*/*',
          ...(xDeviceDisplayID?.toString() != null ?
            { 'X-Device-Display-ID': xDeviceDisplayID?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Download file
   */
  download(deviceID: string, params: FileDownloadParams, options?: RequestOptions): APIPromise<string> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...query } = params;
    return this._client.get(path`/devices/${deviceID}/files/download`, {
      query,
      ...options,
      headers: buildHeaders([
        {
          ...(xDeviceDisplayID?.toString() != null ?
            { 'X-Device-Display-ID': xDeviceDisplayID?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Upload file
   */
  upload(deviceID: string, params: FileUploadParams, options?: RequestOptions): APIPromise<void> {
    const { path: path_, 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.post(
      path`/devices/${deviceID}/files`,
      multipartFormRequestOptions(
        {
          query: { path: path_ },
          body,
          ...options,
          headers: buildHeaders([
            {
              Accept: '*/*',
              ...(xDeviceDisplayID?.toString() != null ?
                { 'X-Device-Display-ID': xDeviceDisplayID?.toString() }
              : undefined),
            },
            options?.headers,
          ]),
        },
        this._client,
      ),
    );
  }
}

export interface FileListResponse {
  files: Array<FileListResponse.File> | null;

  path: string;

  total: number;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export namespace FileListResponse {
  export interface File {
    extendedAttributes: boolean;

    group: string;

    hardLinks: number;

    modifiedAt: string;

    name: string;

    owner: string;

    permissions: File.Permissions;

    size: number;

    type: string;

    symlinkTarget?: string;
  }

  export namespace File {
    export interface Permissions {
      group: Shared.PermissionSet;

      others: Shared.PermissionSet;

      owner: Shared.PermissionSet;

      special: Permissions.Special;
    }

    export namespace Permissions {
      export interface Special {
        setGid: boolean;

        setUid: boolean;

        sticky: boolean;
      }
    }
  }
}

export type FileDownloadResponse = string;

export interface FileListParams {
  /**
   * Query param
   */
  path: string;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export interface FileDeleteParams {
  /**
   * Query param
   */
  path: string;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export interface FileDownloadParams {
  /**
   * Query param
   */
  path: string;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export interface FileUploadParams {
  /**
   * Query param
   */
  path: string;

  /**
   * Body param
   */
  file: Uploadable;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export declare namespace Files {
  export {
    type FileListResponse as FileListResponse,
    type FileDownloadResponse as FileDownloadResponse,
    type FileListParams as FileListParams,
    type FileDeleteParams as FileDeleteParams,
    type FileDownloadParams as FileDownloadParams,
    type FileUploadParams as FileUploadParams,
  };
}
