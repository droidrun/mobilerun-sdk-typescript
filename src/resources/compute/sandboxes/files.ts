// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Files extends APIResource {
  /**
   * Download a file
   */
  download(sandboxID: string, query: FileDownloadParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/compute/sandboxes/${sandboxID}/files`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Upload a file
   */
  upload(
    sandboxID: string,
    body: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    params: FileUploadParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { path: path_ } = params;
    return this._client.put(path`/compute/sandboxes/${sandboxID}/files`, {
      body: body,
      query: { path: path_ },
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/octet-stream', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }
}

export interface FileDownloadParams {
  path: string;
}

export interface FileUploadParams {
  /**
   * Query param
   */
  path: string;
}

export declare namespace Files {
  export { type FileDownloadParams as FileDownloadParams, type FileUploadParams as FileUploadParams };
}
