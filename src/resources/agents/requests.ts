// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Requests extends APIResource {
  /**
   * Owner-scoped. Returns the request with its payloads and event timeline; an
   * unknown id or another owner's request is a 404.
   */
  retrieve(requestID: string, options?: RequestOptions): APIPromise<RequestRetrieveResponse> {
    return this._client.get(path`/agents/requests/${requestID}`, options);
  }

  /**
   * Owner-scoped. Returns newest requests first, ordered by creation time and id.
   * Use nextCursor as before to read older pages. Invalid cursors return 400
   * invalid_cursor. Use the single read for payloads and events.
   */
  list(
    query: RequestListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RequestListResponse> {
    return this._client.get('/agents/requests', { query, ...options });
  }

  /**
   * Owner-scoped. Returns newest requests where the Agent is source or target. Use
   * nextCursor as before to read older pages. Invalid cursors return 400
   * invalid_cursor.
   */
  listForAgent(
    agentID: string,
    query: RequestListForAgentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RequestListForAgentResponse> {
    return this._client.get(path`/agents/${agentID}/requests`, { query, ...options });
  }

  /**
   * Owner-scoped. Returns the Agent-to-Agent request whose target session is
   * {sessionId}, including its payloads and event timeline. Unknown sessions,
   * source-only sessions, sessions without a request, and another owner's sessions
   * return 404 agent_request_not_found.
   */
  retrieveBySession(
    sessionID: string,
    options?: RequestOptions,
  ): APIPromise<RequestRetrieveBySessionResponse> {
    return this._client.get(path`/agents/sessions/${sessionID}/request`, options);
  }
}

export interface RequestRetrieveResponse {
  id: string;

  createdAt: string;

  deadlineAt: string;

  depth: number;

  dispatchAttempts: number;

  dispatchedAt: string | null;

  error: RequestRetrieveResponse.Error | null;

  events: Array<RequestRetrieveResponse.Event>;

  finishedAt: string | null;

  request: RequestRetrieveResponse.Request;

  result: RequestRetrieveResponse.Text | RequestRetrieveResponse.Question | null;

  room: RequestRetrieveResponse.Room;

  sourceAgentId: string;

  sourceSessionId: string;

  status:
    | 'queued'
    | 'running'
    | 'answered'
    | 'failed'
    | 'timed_out'
    | 'cancelled'
    | 'late_answer'
    | 'needs_user_input';

  targetAgentId: string;

  targetSessionId: string;

  updatedAt: string;

  visited: Array<string>;
}

export namespace RequestRetrieveResponse {
  export interface Error {
    /**
     * Why the request did not produce an answer. An open set: new codes can appear.
     * Codes written today: `agent_archived`, `agent_disabled`, `dispatch_failed`,
     * `timed_out`, `cancelled`, `result_too_large`, `no_answer`, `target_turn_failed`,
     * `target_error`, `target_aborted`, `target_crash_recovered`,
     * `target_unknown_outcome`.
     */
    code: string;

    message: string;

    preview?: string;
  }

  export interface Event {
    createdAt: string;

    kind: string;

    payload: { [key: string]: unknown } | null;

    seq: number;
  }

  export interface Request {
    message: string;

    sourceDisplayName: string | null;

    timeoutSeconds: number;

    fileIds?: Array<string>;
  }

  export interface Text {
    text: string;
  }

  export interface Question {
    question: string;
  }

  export interface Room {
    id: string;

    kind: 'direct' | 'group';

    members: Array<Room.Member>;
  }

  export namespace Room {
    export interface Member {
      id: string;

      agentId: string | null;

      joinedAt: string;

      leftAt: string | null;

      participantType: 'agent' | 'user';

      role: 'owner' | 'member';

      userId: string | null;
    }
  }
}

export interface RequestListResponse {
  /**
   * Cursor for the next page; null when there are no older requests.
   */
  nextCursor: string | null;

  requests: Array<RequestListResponse.Request>;
}

export namespace RequestListResponse {
  export interface Request {
    id: string;

    createdAt: string;

    deadlineAt: string;

    depth: number;

    dispatchedAt: string | null;

    /**
     * `error.code` of the full request, null when it has none. An open set: new codes
     * can appear. Codes written today: `agent_archived`, `agent_disabled`,
     * `dispatch_failed`, `timed_out`, `cancelled`, `result_too_large`, `no_answer`,
     * `target_turn_failed`, `target_error`, `target_aborted`,
     * `target_crash_recovered`, `target_unknown_outcome`.
     */
    errorCode: string | null;

    finishedAt: string | null;

    room: Request.Room;

    sourceAgentId: string;

    sourceSessionId: string;

    status:
      | 'queued'
      | 'running'
      | 'answered'
      | 'failed'
      | 'timed_out'
      | 'cancelled'
      | 'late_answer'
      | 'needs_user_input';

    targetAgentId: string;

    targetSessionId: string;

    updatedAt: string;
  }

  export namespace Request {
    export interface Room {
      id: string;

      kind: 'direct' | 'group';

      members: Array<Room.Member>;
    }

    export namespace Room {
      export interface Member {
        id: string;

        agentId: string | null;

        joinedAt: string;

        leftAt: string | null;

        participantType: 'agent' | 'user';

        role: 'owner' | 'member';

        userId: string | null;
      }
    }
  }
}

export interface RequestListForAgentResponse {
  /**
   * Cursor for the next page; null when there are no older requests.
   */
  nextCursor: string | null;

  requests: Array<RequestListForAgentResponse.Request>;
}

export namespace RequestListForAgentResponse {
  export interface Request {
    id: string;

    createdAt: string;

    deadlineAt: string;

    depth: number;

    dispatchedAt: string | null;

    /**
     * `error.code` of the full request, null when it has none. An open set: new codes
     * can appear. Codes written today: `agent_archived`, `agent_disabled`,
     * `dispatch_failed`, `timed_out`, `cancelled`, `result_too_large`, `no_answer`,
     * `target_turn_failed`, `target_error`, `target_aborted`,
     * `target_crash_recovered`, `target_unknown_outcome`.
     */
    errorCode: string | null;

    finishedAt: string | null;

    room: Request.Room;

    sourceAgentId: string;

    sourceSessionId: string;

    status:
      | 'queued'
      | 'running'
      | 'answered'
      | 'failed'
      | 'timed_out'
      | 'cancelled'
      | 'late_answer'
      | 'needs_user_input';

    targetAgentId: string;

    targetSessionId: string;

    updatedAt: string;
  }

  export namespace Request {
    export interface Room {
      id: string;

      kind: 'direct' | 'group';

      members: Array<Room.Member>;
    }

    export namespace Room {
      export interface Member {
        id: string;

        agentId: string | null;

        joinedAt: string;

        leftAt: string | null;

        participantType: 'agent' | 'user';

        role: 'owner' | 'member';

        userId: string | null;
      }
    }
  }
}

export interface RequestRetrieveBySessionResponse {
  id: string;

  createdAt: string;

  deadlineAt: string;

  depth: number;

  dispatchAttempts: number;

  dispatchedAt: string | null;

  error: RequestRetrieveBySessionResponse.Error | null;

  events: Array<RequestRetrieveBySessionResponse.Event>;

  finishedAt: string | null;

  request: RequestRetrieveBySessionResponse.Request;

  result: RequestRetrieveBySessionResponse.Text | RequestRetrieveBySessionResponse.Question | null;

  room: RequestRetrieveBySessionResponse.Room;

  sourceAgentId: string;

  sourceSessionId: string;

  status:
    | 'queued'
    | 'running'
    | 'answered'
    | 'failed'
    | 'timed_out'
    | 'cancelled'
    | 'late_answer'
    | 'needs_user_input';

  targetAgentId: string;

  targetSessionId: string;

  updatedAt: string;

  visited: Array<string>;
}

export namespace RequestRetrieveBySessionResponse {
  export interface Error {
    /**
     * Why the request did not produce an answer. An open set: new codes can appear.
     * Codes written today: `agent_archived`, `agent_disabled`, `dispatch_failed`,
     * `timed_out`, `cancelled`, `result_too_large`, `no_answer`, `target_turn_failed`,
     * `target_error`, `target_aborted`, `target_crash_recovered`,
     * `target_unknown_outcome`.
     */
    code: string;

    message: string;

    preview?: string;
  }

  export interface Event {
    createdAt: string;

    kind: string;

    payload: { [key: string]: unknown } | null;

    seq: number;
  }

  export interface Request {
    message: string;

    sourceDisplayName: string | null;

    timeoutSeconds: number;

    fileIds?: Array<string>;
  }

  export interface Text {
    text: string;
  }

  export interface Question {
    question: string;
  }

  export interface Room {
    id: string;

    kind: 'direct' | 'group';

    members: Array<Room.Member>;
  }

  export namespace Room {
    export interface Member {
      id: string;

      agentId: string | null;

      joinedAt: string;

      leftAt: string | null;

      participantType: 'agent' | 'user';

      role: 'owner' | 'member';

      userId: string | null;
    }
  }
}

export interface RequestListParams {
  /**
   * Opaque nextCursor from the previous page.
   */
  before?: string;

  /**
   * Maximum number of requests to return (1–100; default 50).
   */
  limit?: number;
}

export interface RequestListForAgentParams {
  /**
   * Opaque nextCursor from the previous page.
   */
  before?: string;

  /**
   * Maximum number of requests to return (1–100; default 50).
   */
  limit?: number;
}

export declare namespace Requests {
  export {
    type RequestRetrieveResponse as RequestRetrieveResponse,
    type RequestListResponse as RequestListResponse,
    type RequestListForAgentResponse as RequestListForAgentResponse,
    type RequestRetrieveBySessionResponse as RequestRetrieveBySessionResponse,
    type RequestListParams as RequestListParams,
    type RequestListForAgentParams as RequestListForAgentParams,
  };
}
