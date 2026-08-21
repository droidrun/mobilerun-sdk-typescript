// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { Stream } from '../../core/streaming';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Conversations extends APIResource {
  /**
   * Creates a titled agent session. Setup may occur on the first prompt. Idempotent
   * via the `Idempotency-Key` header — a duplicate submit by the same authenticated
   * caller within the 24-hour idempotency window returns the already-created session
   * instead of a second one.
   */
  create(params: ConversationCreateParams, options?: RequestOptions): APIPromise<ConversationCreateResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/assistant/chat/sessions', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Rename, change status, and/or pin. Title updates apply best-effort. Archiving
   * always clears the pinned flag. `title` is rejected with 409
   * `code: "session_title_managed_by_workflow"` when this chat is bound to a
   * workflow — a bound chat's title is managed by the workflow. Other fields
   * (description, status, pinned) remain updateable; archiving a bound chat stays
   * allowed.
   */
  update(
    id: string,
    body: ConversationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ConversationUpdateResponse> {
    return this._client.patch(path`/assistant/chat/sessions/${id}`, { body, ...options });
  }

  /**
   * Default (`kind` absent or `chat`): active named chat sessions, pinned first then
   * most recent activity — `workflowId` must be absent, or the request 400s.
   * `mine=true` (only valid with `kind=chat`) narrows to sessions the caller
   * created. `kind=agent_workflow`: workflow-linked sessions for one workflow
   * (`workflowId` required, or the request 400s), no status filter, newest episode
   * first.
   */
  list(
    query: ConversationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConversationListResponse> {
    return this._client.get('/assistant/chat/sessions', { query, ...options });
  }

  /**
   * Abort the in-flight chat turn owned by `sessionId`. Idempotent. A turn owned by
   * a different session is left untouched (204).
   */
  abort(body: ConversationAbortParams, options?: RequestOptions): APIPromise<ConversationAbortResponse> {
    return this._client.post('/assistant/chat/abort', { body, ...options });
  }

  /**
   * Deliver a permission approval or rejection for an in-flight turn.
   */
  answerPermission(
    body: ConversationAnswerPermissionParams,
    options?: RequestOptions,
  ): APIPromise<ConversationAnswerPermissionResponse> {
    return this._client.post('/assistant/chat/permission', { body, ...options });
  }

  /**
   * Deliver the user's answers to the pending question for an in-flight turn.
   * Idempotent via the `Idempotency-Key` header.
   */
  answerQuestion(
    params: ConversationAnswerQuestionParams,
    options?: RequestOptions,
  ): APIPromise<ConversationAnswerQuestionResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/assistant/chat/question', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Return the user's chat history for the given session. History remains readable
   * after the session is no longer active.
   */
  history(
    query: ConversationHistoryParams,
    options?: RequestOptions,
  ): APIPromise<ConversationHistoryResponse> {
    return this._client.get('/assistant/chat/messages', { query, ...options });
  }

  /**
   * Dismiss the pending question. Already-resolved questions return 200 (no-op) so
   * multi-tab dismiss stays idempotent.
   */
  rejectQuestion(
    body: ConversationRejectQuestionParams,
    options?: RequestOptions,
  ): APIPromise<ConversationRejectQuestionResponse> {
    return this._client.post('/assistant/chat/question/reject', { body, ...options });
  }

  /**
   * Send a single user message. The response format follows the Accept header:
   * `text/event-stream` for SSE, `application/json` for a buffered assistant reply.
   * `sessionId` targets a concrete active chat. The resolved chat session ID is
   * returned as `chatSessionId` in the JSON body and as the `X-Chat-Session-Id`
   * response header on the SSE response.
   */
  send(body: ConversationSendParams, options?: RequestOptions): APIPromise<ConversationSendResponse> {
    return this._client.post('/assistant/chat/message', { body, ...options });
  }

  /**
   * Reconnect to the in-flight turn stream. Replays buffered events from the start
   * of the active turn, then continues live until the turn finishes. Responds 204
   * when no turn is active for the requested session. Resume is best-effort. Does
   * not start an inactive session.
   */
  stream(
    query: ConversationStreamParams,
    options?: RequestOptions,
  ): APIPromise<Stream<ConversationStreamResponse>> {
    return this._client.get('/assistant/chat/stream', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    }) as APIPromise<Stream<ConversationStreamResponse>>;
  }
}

export interface ConversationCreateResponse {
  session: ConversationCreateResponse.Session;
}

export namespace ConversationCreateResponse {
  export interface Session {
    id: string;

    agent: string | null;

    basePromptTokens: number | null;

    contextExhaustedAt: string | null;

    costCents: number;

    costUsd: number;

    createdAt: string;

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

export interface ConversationUpdateResponse {
  session: ConversationUpdateResponse.Session;
}

export namespace ConversationUpdateResponse {
  export interface Session {
    id: string;

    agent: string | null;

    basePromptTokens: number | null;

    contextExhaustedAt: string | null;

    costCents: number;

    costUsd: number;

    createdAt: string;

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

    basePromptTokens: number | null;

    contextExhaustedAt: string | null;

    costCents: number;

    costUsd: number;

    createdAt: string;

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

    basePromptTokens: number | null;

    contextExhaustedAt: string | null;

    costCents: number;

    costUsd: number;

    createdAt: string;

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

export interface ConversationAbortResponse {
  ok: true;
}

export interface ConversationAnswerPermissionResponse {
  ok: true;
}

export interface ConversationAnswerQuestionResponse {
  ok: true;
}

export interface ConversationHistoryResponse {
  messages: Array<ConversationHistoryResponse.Message>;

  turnActive: boolean;

  truncated?: boolean;
}

export namespace ConversationHistoryResponse {
  export interface Message {
    id: string;

    parts: Array<Message.Part>;

    role: 'user' | 'assistant' | 'system';

    createdAt?: string;

    createdBy?: string | null;

    feedback?: boolean | null;

    metadata?: Message.Metadata;

    source?: 'cloud' | 'telegram' | 'api' | 'workflow';

    synthetic?: boolean;

    /**
     * @deprecated Deprecated: use createdBy.
     */
    userId?: string | null;
  }

  export namespace Message {
    export interface Part {
      type: string;

      [k: string]: unknown;
    }

    export interface Metadata {
      agent?: string;

      agentMessageId?: string;

      agentSessionId?: string;

      turnAnchorMessageId?: string;
    }
  }
}

export interface ConversationRejectQuestionResponse {
  ok: true;
}

export interface ConversationSendResponse {
  assistantText: string;

  chatSessionId: string;

  errorText?: string;
}

export type ConversationStreamResponse = string;

export interface ConversationCreateParams {
  /**
   * Body param
   */
  title: string;

  /**
   * Body param
   */
  agent?: string;

  /**
   * Body param
   */
  description?: string;

  /**
   * Header param: Optional client key. Reusing the same key with the same request
   * body by the same authenticated caller within 24 hours returns the
   * already-created session instead of a second one.
   */
  'Idempotency-Key'?: string;
}

export interface ConversationUpdateParams {
  description?: string | null;

  pinned?: boolean;

  status?: 'active' | 'archived';

  title?: string;
}

export interface ConversationListParams {
  kind?: 'chat' | 'agent_workflow';

  mine?: 'true' | 'false';

  workflowId?: string;
}

export interface ConversationAbortParams {
  sessionId: string;
}

export interface ConversationAnswerPermissionParams {
  permissionId: string;

  response: 'once' | 'always' | 'reject';
}

export interface ConversationAnswerQuestionParams {
  /**
   * Body param
   */
  answers: Array<
    Array<
      | ConversationAnswerQuestionParams.Label
      | ConversationAnswerQuestionParams.Custom
      | ConversationAnswerQuestionParams.UnionMember2
    >
  >;

  /**
   * Body param
   */
  questionId: string;

  /**
   * Header param: Optional client key. Reusing the same key with the same question
   * answers coalesces duplicate submits.
   */
  'Idempotency-Key'?: string;
}

export namespace ConversationAnswerQuestionParams {
  export interface Label {
    label: string;
  }

  export interface Custom {
    custom: string;
  }

  export interface UnionMember2 {
    custom: string;

    label: string;
  }
}

export interface ConversationHistoryParams {
  sessionId: string;

  limit?: number;
}

export interface ConversationRejectQuestionParams {
  questionId: string;
}

export interface ConversationSendParams {
  message: string;

  sessionId: string;

  agent?: string;
}

export interface ConversationStreamParams {
  sessionId: string;
}

export declare namespace Conversations {
  export {
    type ConversationCreateResponse as ConversationCreateResponse,
    type ConversationUpdateResponse as ConversationUpdateResponse,
    type ConversationListResponse as ConversationListResponse,
    type ConversationAbortResponse as ConversationAbortResponse,
    type ConversationAnswerPermissionResponse as ConversationAnswerPermissionResponse,
    type ConversationAnswerQuestionResponse as ConversationAnswerQuestionResponse,
    type ConversationHistoryResponse as ConversationHistoryResponse,
    type ConversationRejectQuestionResponse as ConversationRejectQuestionResponse,
    type ConversationSendResponse as ConversationSendResponse,
    type ConversationStreamResponse as ConversationStreamResponse,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationUpdateParams as ConversationUpdateParams,
    type ConversationListParams as ConversationListParams,
    type ConversationAbortParams as ConversationAbortParams,
    type ConversationAnswerPermissionParams as ConversationAnswerPermissionParams,
    type ConversationAnswerQuestionParams as ConversationAnswerQuestionParams,
    type ConversationHistoryParams as ConversationHistoryParams,
    type ConversationRejectQuestionParams as ConversationRejectQuestionParams,
    type ConversationSendParams as ConversationSendParams,
    type ConversationStreamParams as ConversationStreamParams,
  };
}
