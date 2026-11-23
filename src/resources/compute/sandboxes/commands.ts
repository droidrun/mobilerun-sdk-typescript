// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CommandsAPI from './commands';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Commands extends APIResource {
  /**
   * Get a command result
   */
  retrieve(
    commandID: string,
    params: CommandRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<CommandRetrieveResponse> {
    const { sandboxId, ...query } = params;
    return this._client.get(path`/compute/sandboxes/${sandboxId}/commands/${commandID}`, {
      query,
      ...options,
    });
  }

  /**
   * List the newest commands
   */
  list(sandboxID: string, options?: RequestOptions): APIPromise<CommandListResponse> {
    return this._client.get(path`/compute/sandboxes/${sandboxID}/commands`, options);
  }
}

export interface SandboxCommand {
  commandId: string;

  durationMs: number | null;

  exitCode: number | null;

  startedAt: string;

  status: 'running' | 'exited';

  stderr: string;

  stdout: string;

  timedOut: boolean;

  truncated: boolean;
}

export interface SandboxCommandSummary {
  command: string;

  commandId: string;

  durationMs: number | null;

  exitCode: number | null;

  startedAt: string;

  status: 'running' | 'exited';
}

export interface CommandRetrieveResponse {
  data: SandboxCommand;
}

export interface CommandListResponse {
  data: CommandListResponse.Data;
}

export namespace CommandListResponse {
  export interface Data {
    items: Array<CommandsAPI.SandboxCommandSummary>;
  }
}

export interface CommandRetrieveParams {
  /**
   * Path param
   */
  sandboxId: string;

  /**
   * Query param
   */
  waitS?: number | null;
}

export declare namespace Commands {
  export {
    type SandboxCommand as SandboxCommand,
    type SandboxCommandSummary as SandboxCommandSummary,
    type CommandRetrieveResponse as CommandRetrieveResponse,
    type CommandListResponse as CommandListResponse,
    type CommandRetrieveParams as CommandRetrieveParams,
  };
}
