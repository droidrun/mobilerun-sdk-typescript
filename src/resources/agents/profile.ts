// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Profile extends APIResource {
  /**
   * Owner-scoped partial update of `displayName`, `instructions`, `modelProfile` and
   * the avatar. A null modelProfile uses the environment default; an unknown id
   * returns unknown_model_profile with details.validProfiles. Returns the updated
   * Agent; an Agent of another owner or an unknown id is a 404.
   */
  update(
    agentID: string,
    body: ProfileUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProfileUpdateResponse> {
    return this._client.patch(path`/agents/${agentID}/profile`, { body, ...options });
  }
}

/**
 * An Agent of the owner: its lifecycle state, profile and runtime.
 */
export interface ProfileUpdateResponse {
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
  profile: ProfileUpdateResponse.Profile;

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
  threadPreview: ProfileUpdateResponse.ThreadPreview | null;

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

export namespace ProfileUpdateResponse {
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

export interface ProfileUpdateParams {
  avatarConfig?: ProfileUpdateParams.AvatarConfig | null;

  avatarKind?: 'blob' | null;

  /**
   * Set the avatar palette color without changing its seed; null removes only the
   * color. Omitted color stays unchanged, including during a seed update.
   */
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
    | 'pink'
    | null;

  /**
   * Single-line name shown for the Agent; surrounding whitespace is trimmed and it
   * needs at least one letter or number.
   */
  displayName?: string | null;

  /**
   * The Agent's individual instructions passage; an empty or whitespace-only text
   * clears it. Line breaks count three characters toward the rendered size limit.
   */
  instructions?: string | null;

  /**
   * Model profile id from GET /agents/model-profiles; null uses the environment
   * default.
   */
  modelProfile?: string | null;
}

export namespace ProfileUpdateParams {
  export interface AvatarConfig {
    seed: string | number;
  }
}

export declare namespace Profile {
  export {
    type ProfileUpdateResponse as ProfileUpdateResponse,
    type ProfileUpdateParams as ProfileUpdateParams,
  };
}
