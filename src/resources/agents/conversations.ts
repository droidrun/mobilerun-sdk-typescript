// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Conversations extends APIResource {
  /**
   * Create a named chat session bound to one agent. Idempotent via the
   * `Idempotency-Key` header, like the unscoped create.
   */
  create(
    agentID: string,
    body: ConversationCreateParams,
    options?: RequestOptions,
  ): APIPromise<ConversationCreateResponse> {
    return this._client.post(path`/agents/${agentID}/chat/sessions`, { body, ...options });
  }

  /**
   * List the user's named chat sessions for one agent. Supports the same `kind`,
   * `workflowId` and `mine` filters as the unscoped list.
   */
  list(
    agentID: string,
    query: ConversationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConversationListResponse> {
    return this._client.get(path`/agents/${agentID}/chat/sessions`, { query, ...options });
  }
}

export interface ConversationCreateResponse {
  session: ConversationCreateResponse.Session;
}

export namespace ConversationCreateResponse {
  export interface Session {
    id: string;

    agent: string | null;

    agentId: string | null;

    basePromptTokens: number | null;

    contextExhaustedAt: string | null;

    costCents: number;

    costUsd: number;

    createdAt: string;

    creditsUsed: number | null;

    description: string | null;

    lastActiveAt: string;

    peakPromptTokens: number | null;

    pinned: boolean;

    promptStatus: 'ready' | 'machine_replaced';

    status: string;

    title: string;

    turnActive: boolean;

    turnStartedAt: string | null;

    createdBy?: string | null;
  }
}

export interface ConversationListResponse {
  sessions: Array<ConversationListResponse.UnionMember0 | ConversationListResponse.UnionMember1>;
}

export namespace ConversationListResponse {
  export interface UnionMember0 {
    id: string;

    agent: string | null;

    agentId: string | null;

    basePromptTokens: number | null;

    contextExhaustedAt: string | null;

    costCents: number;

    costUsd: number;

    createdAt: string;

    creditsUsed: number | null;

    description: string | null;

    episode: number;

    kind: 'chat';

    lastActiveAt: string;

    peakPromptTokens: number | null;

    pinned: boolean;

    promptStatus: 'ready' | 'machine_replaced';

    sourceExecutionId: null;

    status: string;

    title: string;

    turnActive: boolean;

    turnStartedAt: string | null;

    workflowId: null;

    createdBy?: string | null;
  }

  export interface UnionMember1 {
    id: string;

    agent: string | null;

    agentId: string | null;

    basePromptTokens: number | null;

    contextExhaustedAt: string | null;

    costCents: number;

    costUsd: number;

    createdAt: string;

    creditsUsed: number | null;

    description: string | null;

    episode: number;

    kind: 'agent_workflow';

    lastActiveAt: string;

    peakPromptTokens: number | null;

    pinned: boolean;

    promptStatus: 'ready' | 'machine_replaced';

    sourceExecutionId: string;

    status: string;

    title: string;

    turnActive: boolean;

    turnStartedAt: string | null;

    workflowId: string;

    createdBy?: string | null;
  }
}

export interface ConversationCreateParams {
  title: string;

  agent?: string;

  description?: string;
}

export interface ConversationListParams {
  kind?: 'chat' | 'agent_workflow';

  mine?: 'true' | 'false';

  workflowId?: string;
}

export declare namespace Conversations {
  export {
    type ConversationCreateResponse as ConversationCreateResponse,
    type ConversationListResponse as ConversationListResponse,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationListParams as ConversationListParams,
  };
}
