// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ScriptsAPI from './scripts';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Scripts extends APIResource {
  /**
   * Upload an immutable Python script as the next version of its name
   */
  create(body: ScriptCreateParams, options?: RequestOptions): APIPromise<ScriptCreateResponse> {
    return this._client.post('/sandbox/scripts', { body, ...options });
  }

  /**
   * Get script metadata
   */
  retrieve(scriptID: string, options?: RequestOptions): APIPromise<ScriptRetrieveResponse> {
    return this._client.get(path`/sandbox/scripts/${scriptID}`, options);
  }

  /**
   * List scripts owned by this organisation
   */
  list(
    query: ScriptListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScriptListResponse> {
    return this._client.get('/sandbox/scripts', { query, ...options });
  }

  /**
   * Delete a script
   */
  delete(scriptID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/sandbox/scripts/${scriptID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Read verified script source
   */
  source(scriptID: string, options?: RequestOptions): APIPromise<ScriptSourceResponse> {
    return this._client.get(path`/sandbox/scripts/${scriptID}/source`, options);
  }
}

export interface Script {
  id: string;

  createdAt: string;

  createdBy: string;

  datasetKey: string | null;

  description: string | null;

  inputSchema: { [key: string]: unknown } | null;

  inspectError: Script.InspectError | null;

  manifest: Script.Manifest;

  name: string;

  outputKind: string | null;

  outputSchema: { [key: string]: unknown } | null;

  runtimeVersion: string | null;

  sha256: string;

  sizeBytes: number;

  status: 'pending_inspection' | 'ready' | 'rejected';

  /**
   * Per-name version number, starting at 1 and never reused.
   */
  version: number;

  /**
   * Number of active versions of this name. Only set when listing with latest=true.
   */
  versionCount?: number;
}

export namespace Script {
  export interface InspectError {
    code: string;

    message: string;
  }

  export interface Manifest {
    credentials?: Array<Manifest.Credential>;

    hosts?: Array<string>;

    scopes?: Array<string>;
  }

  export namespace Manifest {
    export interface Credential {
      name: string;

      packageName: string;
    }
  }
}

export interface ScriptSource {
  scriptId: string;

  sha256: string;

  sizeBytes: number;

  source: string;
}

export interface ScriptCreateResponse {
  data: Script;
}

export interface ScriptRetrieveResponse {
  data: Script;
}

export interface ScriptListResponse {
  data: ScriptListResponse.Data;
}

export namespace ScriptListResponse {
  export interface Data {
    items: Array<ScriptsAPI.Script>;

    pagination: Shared.Pagination;
  }
}

export interface ScriptSourceResponse {
  data: ScriptSource;
}

export interface ScriptCreateParams {
  name: string;

  source: string;

  description?: string;

  manifest?: ScriptCreateParams.Manifest;
}

export namespace ScriptCreateParams {
  export interface Manifest {
    credentials?: Array<Manifest.Credential>;

    hosts?: Array<string>;

    scopes?: Array<string>;
  }

  export namespace Manifest {
    export interface Credential {
      name: string;

      packageName: string;
    }
  }
}

export interface ScriptListParams {
  /**
   * Return one row per script name: its newest upload (any status), with
   * versionCount. Combined with name, returns that single row.
   */
  latest?: 'true' | 'false';

  /**
   * Exact script name. Returns every active version of that name, newest first.
   */
  name?: string;

  page?: number;

  pageSize?: number;

  /**
   * Case-insensitive substring match against the script name.
   */
  search?: string;
}

export declare namespace Scripts {
  export {
    type Script as Script,
    type ScriptSource as ScriptSource,
    type ScriptCreateResponse as ScriptCreateResponse,
    type ScriptRetrieveResponse as ScriptRetrieveResponse,
    type ScriptListResponse as ScriptListResponse,
    type ScriptSourceResponse as ScriptSourceResponse,
    type ScriptCreateParams as ScriptCreateParams,
    type ScriptListParams as ScriptListParams,
  };
}
