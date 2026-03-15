// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Agents API
 */
export class Agents extends APIResource {
  /**
   * List all available agents with their default configurations.
   */
  list(options?: RequestOptions): APIPromise<AgentListResponse> {
    return this._client.get('/agents', options);
  }
}

export type AgentListResponse = Array<AgentListResponse.AgentListResponseItem>;

export namespace AgentListResponse {
  export interface AgentListResponseItem {
    id: number;

    description: string | null;

    icon: string;

    llmModel: string;

    maxSteps: number;

    name: string;

    reasoning: boolean;

    vision: boolean;
  }
}

export declare namespace Agents {
  export { type AgentListResponse as AgentListResponse };
}
