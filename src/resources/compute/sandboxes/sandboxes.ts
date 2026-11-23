// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SandboxesAPI from './sandboxes';
import * as Shared from '../../shared';
import * as CommandsAPI from './commands';
import {
  CommandListResponse,
  CommandRetrieveParams,
  CommandRetrieveResponse,
  Commands,
  SandboxCommand,
  SandboxCommandSummary,
} from './commands';
import * as FilesAPI from './files';
import { FileDownloadParams, FileUploadParams, Files } from './files';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Sandboxes extends APIResource {
  commands: CommandsAPI.Commands = new CommandsAPI.Commands(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);

  /**
   * Create a sandbox
   */
  create(body: SandboxCreateParams, options?: RequestOptions): APIPromise<SandboxCreateResponse> {
    return this._client.post('/compute/sandboxes', { body, ...options });
  }

  /**
   * Get a sandbox
   */
  retrieve(sandboxID: string, options?: RequestOptions): APIPromise<SandboxRetrieveResponse> {
    return this._client.get(path`/compute/sandboxes/${sandboxID}`, options);
  }

  /**
   * List sandboxes
   */
  list(
    query: SandboxListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SandboxListResponse> {
    return this._client.get('/compute/sandboxes', { query, ...options });
  }

  /**
   * Stop a sandbox
   */
  delete(sandboxID: string, options?: RequestOptions): APIPromise<SandboxDeleteResponse> {
    return this._client.delete(path`/compute/sandboxes/${sandboxID}`, options);
  }

  /**
   * Execute a shell command
   */
  exec(
    sandboxID: string,
    body: SandboxExecParams,
    options?: RequestOptions,
  ): APIPromise<SandboxExecResponse> {
    return this._client.post(path`/compute/sandboxes/${sandboxID}/exec`, { body, ...options });
  }
}

export interface Sandbox {
  id: string;

  allowedHosts: Array<string>;

  createdAt: string;

  expiresAt: string;

  idleTimeoutS: number;

  name: string | null;

  status: 'starting' | 'running' | 'stopped';

  stoppedAt: string | null;

  stopReason: 'deleted' | 'idle' | 'timeout' | 'lost' | null;

  usedSeconds: number;

  apiKey?: Sandbox.UnionMember0 | Sandbox.UnionMember1;
}

export namespace Sandbox {
  export interface UnionMember0 {
    expiresAt: string;

    permissions: { [key: string]: Array<string> };
  }

  export interface UnionMember1 {
    expiresAt: string;

    full: true;
  }
}

export interface SandboxCreateResponse {
  data: Sandbox;
}

export interface SandboxRetrieveResponse {
  data: Sandbox;
}

export interface SandboxListResponse {
  data: SandboxListResponse.Data;
}

export namespace SandboxListResponse {
  export interface Data {
    items: Array<SandboxesAPI.Sandbox>;

    pagination: Shared.Pagination;
  }
}

export interface SandboxDeleteResponse {
  data: Sandbox;
}

export interface SandboxExecResponse {
  data: CommandsAPI.SandboxCommand;
}

export interface SandboxCreateParams {
  allowedHosts?: Array<string>;

  apiKey?: SandboxCreateParams.Permissions | SandboxCreateParams.Full | SandboxCreateParams.Key;

  env?: { [key: string]: string };

  idleTimeoutS?: number;

  name?: string;

  timeoutS?: number;
}

export namespace SandboxCreateParams {
  export interface Permissions {
    permissions: { [key: string]: Array<string> };
  }

  export interface Full {
    full: true;
  }

  export interface Key {
    key: string;
  }
}

export interface SandboxListParams {
  page?: number;

  pageSize?: number;

  status?: 'starting' | 'running' | 'stopped';
}

export interface SandboxExecParams {
  command: string;

  cwd?: string;

  env?: { [key: string]: string };

  timeoutS?: number;

  waitS?: number;
}

Sandboxes.Commands = Commands;
Sandboxes.Files = Files;

export declare namespace Sandboxes {
  export {
    type Sandbox as Sandbox,
    type SandboxCreateResponse as SandboxCreateResponse,
    type SandboxRetrieveResponse as SandboxRetrieveResponse,
    type SandboxListResponse as SandboxListResponse,
    type SandboxDeleteResponse as SandboxDeleteResponse,
    type SandboxExecResponse as SandboxExecResponse,
    type SandboxCreateParams as SandboxCreateParams,
    type SandboxListParams as SandboxListParams,
    type SandboxExecParams as SandboxExecParams,
  };

  export {
    Commands as Commands,
    type SandboxCommand as SandboxCommand,
    type SandboxCommandSummary as SandboxCommandSummary,
    type CommandRetrieveResponse as CommandRetrieveResponse,
    type CommandListResponse as CommandListResponse,
    type CommandRetrieveParams as CommandRetrieveParams,
  };

  export {
    Files as Files,
    type FileDownloadParams as FileDownloadParams,
    type FileUploadParams as FileUploadParams,
  };
}
