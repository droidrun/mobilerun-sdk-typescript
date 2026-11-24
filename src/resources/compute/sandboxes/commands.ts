// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
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

export interface CommandRetrieveResponse {
  data: CommandRetrieveResponse.Data;
}

export namespace CommandRetrieveResponse {
  export interface Data {
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
}

export interface CommandListResponse {
  data: CommandListResponse.Data;
}

export namespace CommandListResponse {
  export interface Data {
    items: Array<Data.Item>;
  }

  export namespace Data {
    export interface Item {
      command: string;

      commandId: string;

      durationMs: number | null;

      exitCode: number | null;

      startedAt: string;

      status: 'running' | 'exited';
    }
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
    type CommandRetrieveResponse as CommandRetrieveResponse,
    type CommandListResponse as CommandListResponse,
    type CommandRetrieveParams as CommandRetrieveParams,
  };
}
