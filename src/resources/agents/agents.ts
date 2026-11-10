// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConversationsAPI from './conversations';
import {
  ConversationCreateParams,
  ConversationCreateResponse,
  ConversationListParams,
  ConversationListResponse,
  Conversations,
} from './conversations';
import * as FilesAPI from './files';
import { FileListParams, FileListResponse, Files } from './files';
import * as ProfileAPI from './profile';
import { Profile as ProfileAPIProfile, ProfileUpdateParams, ProfileUpdateResponse } from './profile';
import * as RequestsAPI from './requests';
import {
  RequestListForAgentParams,
  RequestListForAgentResponse,
  RequestListParams,
  RequestListResponse,
  RequestRetrieveBySessionResponse,
  RequestRetrieveResponse,
  Requests,
} from './requests';
import * as RoutinesAPI from './routines';
import {
  RoutineCloneParams,
  RoutineCloneResponse,
  RoutineCreateParams,
  RoutineCreateResponse,
  Routines,
} from './routines';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Agents extends APIResource {
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  conversations: ConversationsAPI.Conversations = new ConversationsAPI.Conversations(this._client);
  requests: RequestsAPI.Requests = new RequestsAPI.Requests(this._client);
  routines: RoutinesAPI.Routines = new RoutinesAPI.Routines(this._client);

  /**
   * Creates an Agent directly on the owner runtime, without a chat message or
   * approval card. Provisioning runs in the background; the new Agent has no chat
   * history. Requires Idempotency-Key; a replay returns the current Agent with the
   * original 201 status.
   */
  create(body: AgentCreateParams, options?: RequestOptions): APIPromise<AgentCreateResponse> {
    return this._client.post('/agents', { body, ...options });
  }

  /**
   * Owner-scoped. Returns every Agent of the owner that is not on a retired machine,
   * archived and failed ones included, oldest first.
   */
  list(options?: RequestOptions): APIPromise<AgentListResponse> {
    return this._client.get('/agents', options);
  }

  /**
   * List the environment model profiles and their default. Model routing is managed
   * by the server.
   */
  modelProfiles(options?: RequestOptions): APIPromise<AgentModelProfilesResponse> {
    return this._client.get('/agents/model-profiles', options);
  }
}

export interface AgentCreateResponse {
  /**
   * An Agent of the owner: its lifecycle state, profile and runtime.
   */
  agent: AgentCreateResponse.Agent;
}

export namespace AgentCreateResponse {
  /**
   * An Agent of the owner: its lifecycle state, profile and runtime.
   */
  export interface Agent {
    id: string;

    archivedAt: string | null;

    createdAt: string;

    /**
     * Why a `disabled` Agent is disabled: `owner` chose it, `over-limit` the plan
     * grants fewer Agent slots than the owner had enabled. Null while the Agent is not
     * disabled.
     */
    disabledReason: 'owner' | 'over-limit' | null;

    /**
     * Why provisioning failed, null otherwise. An open set: new codes can appear.
     * Codes written today: `provision_timeout`, `agent_limit_reached`,
     * `provision_failed`; a code the harness reports for a failed start is passed
     * through.
     */
    errorCode: string | null;

    /**
     * Whether this is the owner's primary Agent, the one a chat session uses when it
     * names no `agentId`.
     */
    primary: boolean;

    /**
     * Persona of the Agent plus its individual instructions passage; `instructions` is
     * null when none is set.
     */
    profile: Agent.Profile;

    /**
     * When provisioning of the Agent completed (ISO 8601); null while a newly created
     * Agent is still pending and after its provisioning failed.
     */
    provisionedAt: string | null;

    /**
     * `pending`: created but not provisioned yet, it takes no turns. `active`: ready
     * for turns. `failed`: provisioning gave up (see `errorCode`); the Agent is
     * archived. `archived`: read-only. `disabled`: switched off by the owner or
     * because the plan grants fewer Agent slots; it takes no turns and holds no slot,
     * and the owner can enable it again while a slot is free.
     */
    status: 'active' | 'pending' | 'failed' | 'archived' | 'disabled';

    /**
     * Newest thread excerpt (90 characters), awaits-input and timestamp, from at most
     * 20 newest rows. Null when the thread has no rows.
     */
    threadPreview: Agent.ThreadPreview | null;

    /**
     * Active chat on the active machine, pinned first, then session lastActiveAt DESC,
     * id DESC. Null for pending/archived Agents or no thread.
     */
    threadSessionId: string | null;

    /**
     * Whether this active primary Agent is still due its one-time greeting: the
     * welcome-back for an adopted primary, or the onboarding greeting for a primary
     * whose chat never had a message.
     */
    welcomePending: boolean;

    /**
     * Latest activity of the Agent (newest chat session activity or live turn
     * heartbeat), ISO 8601; null when it has never been active.
     */
    lastActiveAt?: string | null;

    /**
     * Whether the Agent is running right now, derived from stored state only.
     * `waking`: an active start, its machine is provisioning or a restart/rehydrate is
     * pending and changed within the last 10 minutes (a timed-out or stalled start
     * reads `sleeping`). `awake`: the machine is running and this Agent has been
     * started in the current run. `sleeping`: everything else (stopped or parked
     * machine, an Agent the running harness has not started yet, or an Agent that is
     * not active). `awake` can lag a machine stop until the reconciler converges.
     */
    runtime?: 'awake' | 'sleeping' | 'waking' | null;
  }

  export namespace Agent {
    /**
     * Persona of the Agent plus its individual instructions passage; `instructions` is
     * null when none is set.
     */
    export interface Profile {
      /**
       * Configuration of a `blob` avatar: its seed and optional user-chosen palette
       * color. A color-only config retains the default seed fallback.
       */
      avatarConfig: Profile.AvatarConfig | null;

      avatarKind: 'blob' | null;

      displayName: string | null;

      instructions: string | null;

      modelProfile: string | null;
    }

    export namespace Profile {
      /**
       * Configuration of a `blob` avatar: its seed and optional user-chosen palette
       * color. A color-only config retains the default seed fallback.
       */
      export interface AvatarConfig {
        color?:
          | 'slate'
          | 'red'
          | 'orange'
          | 'amber'
          | 'lime'
          | 'green'
          | 'teal'
          | 'cyan'
          | 'blue'
          | 'indigo'
          | 'violet'
          | 'pink';

        seed?: string | number;
      }
    }

    /**
     * Newest thread excerpt (90 characters), awaits-input and timestamp, from at most
     * 20 newest rows. Null when the thread has no rows.
     */
    export interface ThreadPreview {
      awaitsInput: boolean;

      excerpt: string | null;

      timestamp: string | null;
    }
  }
}

export interface AgentListResponse {
  agents: Array<AgentListResponse.Agent>;
}

export namespace AgentListResponse {
  /**
   * An Agent of the owner: its lifecycle state, profile and runtime.
   */
  export interface Agent {
    id: string;

    archivedAt: string | null;

    createdAt: string;

    /**
     * Why a `disabled` Agent is disabled: `owner` chose it, `over-limit` the plan
     * grants fewer Agent slots than the owner had enabled. Null while the Agent is not
     * disabled.
     */
    disabledReason: 'owner' | 'over-limit' | null;

    /**
     * Why provisioning failed, null otherwise. An open set: new codes can appear.
     * Codes written today: `provision_timeout`, `agent_limit_reached`,
     * `provision_failed`; a code the harness reports for a failed start is passed
     * through.
     */
    errorCode: string | null;

    /**
     * Whether this is the owner's primary Agent, the one a chat session uses when it
     * names no `agentId`.
     */
    primary: boolean;

    /**
     * Persona of the Agent plus its individual instructions passage; `instructions` is
     * null when none is set.
     */
    profile: Agent.Profile;

    /**
     * When provisioning of the Agent completed (ISO 8601); null while a newly created
     * Agent is still pending and after its provisioning failed.
     */
    provisionedAt: string | null;

    /**
     * `pending`: created but not provisioned yet, it takes no turns. `active`: ready
     * for turns. `failed`: provisioning gave up (see `errorCode`); the Agent is
     * archived. `archived`: read-only. `disabled`: switched off by the owner or
     * because the plan grants fewer Agent slots; it takes no turns and holds no slot,
     * and the owner can enable it again while a slot is free.
     */
    status: 'active' | 'pending' | 'failed' | 'archived' | 'disabled';

    /**
     * Newest thread excerpt (90 characters), awaits-input and timestamp, from at most
     * 20 newest rows. Null when the thread has no rows.
     */
    threadPreview: Agent.ThreadPreview | null;

    /**
     * Active chat on the active machine, pinned first, then session lastActiveAt DESC,
     * id DESC. Null for pending/archived Agents or no thread.
     */
    threadSessionId: string | null;

    /**
     * Whether this active primary Agent is still due its one-time greeting: the
     * welcome-back for an adopted primary, or the onboarding greeting for a primary
     * whose chat never had a message.
     */
    welcomePending: boolean;

    /**
     * Latest activity of the Agent (newest chat session activity or live turn
     * heartbeat), ISO 8601; null when it has never been active.
     */
    lastActiveAt?: string | null;

    /**
     * Whether the Agent is running right now, derived from stored state only.
     * `waking`: an active start, its machine is provisioning or a restart/rehydrate is
     * pending and changed within the last 10 minutes (a timed-out or stalled start
     * reads `sleeping`). `awake`: the machine is running and this Agent has been
     * started in the current run. `sleeping`: everything else (stopped or parked
     * machine, an Agent the running harness has not started yet, or an Agent that is
     * not active). `awake` can lag a machine stop until the reconciler converges.
     */
    runtime?: 'awake' | 'sleeping' | 'waking' | null;
  }

  export namespace Agent {
    /**
     * Persona of the Agent plus its individual instructions passage; `instructions` is
     * null when none is set.
     */
    export interface Profile {
      /**
       * Configuration of a `blob` avatar: its seed and optional user-chosen palette
       * color. A color-only config retains the default seed fallback.
       */
      avatarConfig: Profile.AvatarConfig | null;

      avatarKind: 'blob' | null;

      displayName: string | null;

      instructions: string | null;

      modelProfile: string | null;
    }

    export namespace Profile {
      /**
       * Configuration of a `blob` avatar: its seed and optional user-chosen palette
       * color. A color-only config retains the default seed fallback.
       */
      export interface AvatarConfig {
        color?:
          | 'slate'
          | 'red'
          | 'orange'
          | 'amber'
          | 'lime'
          | 'green'
          | 'teal'
          | 'cyan'
          | 'blue'
          | 'indigo'
          | 'violet'
          | 'pink';

        seed?: string | number;
      }
    }

    /**
     * Newest thread excerpt (90 characters), awaits-input and timestamp, from at most
     * 20 newest rows. Null when the thread has no rows.
     */
    export interface ThreadPreview {
      awaitsInput: boolean;

      excerpt: string | null;

      timestamp: string | null;
    }
  }
}

export interface AgentModelProfilesResponse {
  defaultProfileId: string;

  profiles: Array<AgentModelProfilesResponse.Profile>;
}

export namespace AgentModelProfilesResponse {
  export interface Profile {
    id: string;

    costHint: string;

    description: string;

    label: string;
  }
}

export interface AgentCreateParams {
  /**
   * Single-line name shown for the Agent; surrounding whitespace is trimmed and it
   * needs at least one letter or number.
   */
  displayName: string;

  avatarSeed?: string | number;

  color?:
    | 'slate'
    | 'red'
    | 'orange'
    | 'amber'
    | 'lime'
    | 'green'
    | 'teal'
    | 'cyan'
    | 'blue'
    | 'indigo'
    | 'violet'
    | 'pink';

  /**
   * The Agent's individual instructions passage; an empty or whitespace-only text
   * clears it. Line breaks count three characters toward the rendered size limit.
   */
  instructions?: string;
}

Agents.Profile = ProfileAPIProfile;
Agents.Files = Files;
Agents.Conversations = Conversations;
Agents.Requests = Requests;
Agents.Routines = Routines;

export declare namespace Agents {
  export {
    type AgentCreateResponse as AgentCreateResponse,
    type AgentListResponse as AgentListResponse,
    type AgentModelProfilesResponse as AgentModelProfilesResponse,
    type AgentCreateParams as AgentCreateParams,
  };

  export {
    ProfileAPIProfile as Profile,
    type ProfileUpdateResponse as ProfileUpdateResponse,
    type ProfileUpdateParams as ProfileUpdateParams,
  };

  export { Files as Files, type FileListResponse as FileListResponse, type FileListParams as FileListParams };

  export {
    Conversations as Conversations,
    type ConversationCreateResponse as ConversationCreateResponse,
    type ConversationListResponse as ConversationListResponse,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationListParams as ConversationListParams,
  };

  export {
    Requests as Requests,
    type RequestRetrieveResponse as RequestRetrieveResponse,
    type RequestListResponse as RequestListResponse,
    type RequestListForAgentResponse as RequestListForAgentResponse,
    type RequestRetrieveBySessionResponse as RequestRetrieveBySessionResponse,
    type RequestListParams as RequestListParams,
    type RequestListForAgentParams as RequestListForAgentParams,
  };

  export {
    Routines as Routines,
    type RoutineCreateResponse as RoutineCreateResponse,
    type RoutineCloneResponse as RoutineCloneResponse,
    type RoutineCreateParams as RoutineCreateParams,
    type RoutineCloneParams as RoutineCloneParams,
  };
}
