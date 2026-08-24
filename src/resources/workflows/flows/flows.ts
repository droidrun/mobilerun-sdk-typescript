// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as ActionsAPI from './actions';
import {
  ActionAddParams,
  ActionAddResponse,
  ActionListResponse,
  ActionRemoveParams,
  ActionRemoveResponse,
  ActionReplaceParams,
  ActionReplaceResponse,
  Actions,
} from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Flows extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Create a flow that binds a trigger (`triggerId`) to an ordered list of actions,
   * with at least one action required. Optional settings include target `deviceIds`,
   * a cooldown (`cooldownSeconds`/`cooldownScope`), and webhook notifications on
   * success or failure.
   */
  create(body: FlowCreateParams, options?: RequestOptions): APIPromise<FlowCreateResponse> {
    return this._client.post('/flows', { body, ...options });
  }

  /**
   * Fetch a single flow by its ID, including its trigger binding, configuration, and
   * current status. Returns 404 if no flow matches.
   */
  retrieve(flowID: string, options?: RequestOptions): APIPromise<FlowRetrieveResponse> {
    return this._client.get(path`/flows/${flowID}`, options);
  }

  /**
   * Partially update a flow's settings — name, trigger binding, enabled state,
   * target devices, cooldown, or notifications; all fields are optional. Actions are
   * managed through the flow-actions endpoints, not here. Returns 404 if the flow
   * does not exist.
   */
  update(
    flowID: string,
    body: FlowUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlowUpdateResponse> {
    return this._client.patch(path`/flows/${flowID}`, { body, ...options });
  }

  /**
   * Return a paginated list of flows. Supports filtering by `triggerId`, `enabled`,
   * one or more health `status` values (healthy, failing, blocked), `mine` (flows
   * created by the calling actor), `createdBy` (flows created by a given actor id —
   * mutually exclusive with `mine`), plus free-text `search` and ordering.
   */
  list(
    query: FlowListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlowListResponse> {
    return this._client.get('/flows', { query, ...options });
  }

  /**
   * Delete a flow by its ID. Returns 404 if no flow matches.
   */
  delete(flowID: string, options?: RequestOptions): APIPromise<FlowDeleteResponse> {
    return this._client.delete(path`/flows/${flowID}`, options);
  }

  /**
   * Create a copy of an existing flow, including its actions and settings. The
   * optional body can override the new flow's `name` and target `deviceIds`. Returns
   * 404 if the source flow does not exist.
   */
  clone(
    flowID: string,
    body: FlowCloneParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlowCloneResponse> {
    return this._client.post(path`/flows/${flowID}/clone`, { body, ...options });
  }

  /**
   * Simulate this flow firing without storing events, enqueuing jobs, or consuming
   * cooldown/rate-limit slots.
   *
   * Works for every trigger activation type:
   *
   * - `event`: validates the payload against the event catalog schema and evaluates
   *   the trigger conditions.
   * - `custom`: validates the payload against the custom payload schema (conditions
   *   do not apply).
   * - `schedule`: ignores the payload and reports the next fire time.
   *
   * The response reports `wouldFire` — whether the flow would actually run right now
   * — alongside the gates that decide it (enabled, device attached, blocked,
   * cooldown). `rateLimited` is informational and is not folded into `wouldFire`.
   */
  dryRun(
    flowID: string,
    body: FlowDryRunParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlowDryRunResponse> {
    return this._client.post(path`/flows/${flowID}/dry-run`, { body, ...options });
  }

  /**
   * List self-healing repair episodes
   */
  listRepairs(flowID: string, options?: RequestOptions): APIPromise<FlowListRepairsResponse> {
    return this._client.get(path`/flows/${flowID}/repairs`, options);
  }

  /**
   * Clear a flow's blocked status after fixing the underlying issue. Idempotent —
   * safe to call on already-healthy flows.
   */
  unblock(flowID: string, options?: RequestOptions): APIPromise<FlowUnblockResponse> {
    return this._client.post(path`/flows/${flowID}/unblock`, options);
  }
}

export interface FlowCreateResponse {
  data: FlowCreateResponse.Data;
}

export namespace FlowCreateResponse {
  export interface Data {
    id: string;

    blockedAt: string | null;

    consecutiveFailures: number;

    cooldownScope: 'flow' | 'device';

    cooldownSeconds: number | null;

    createdAt: string | null;

    createdBy: string | null;

    description: string | null;

    deviceIds: Array<string>;

    enabled: boolean;

    healthMonitoringEnabled: boolean;

    lastFailureAt: string | null;

    lastFailureCode:
      | 'device_not_found'
      | 'permission_denied'
      | 'client_error'
      | 'transient'
      | 'logic'
      | 'invalid_config'
      | null;

    lastTriggeredAt: string | null;

    name: string;

    notifyOnFailure: boolean;

    notifyOnSuccess: boolean;

    notifyWebhookId: string | null;

    ownerId: string;

    recordingEnabled: boolean;

    selfHealingEnabled: boolean;

    selfHealingMaxAttempts: number;

    status: 'healthy' | 'failing' | 'blocked';

    /**
     * Template-resolver semantics this flow runs under (MVA-23). 1 = legacy
     * (missing/forbidden/null all resolve to ''). 2 = typed (missing/forbidden throw,
     * a whole-token null stays JSON null). Existing flows stay 1; new flows default
     * to 2.
     */
    templateResolutionVersion: number;

    triggerId: string;

    updatedAt: string | null;

    /**
     * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
     */
    userId: string;
  }
}

export interface FlowRetrieveResponse {
  data: FlowRetrieveResponse.Data;
}

export namespace FlowRetrieveResponse {
  export interface Data {
    id: string;

    blockedAt: string | null;

    consecutiveFailures: number;

    cooldownScope: 'flow' | 'device';

    cooldownSeconds: number | null;

    createdAt: string | null;

    createdBy: string | null;

    description: string | null;

    deviceIds: Array<string>;

    enabled: boolean;

    healthMonitoringEnabled: boolean;

    lastFailureAt: string | null;

    lastFailureCode:
      | 'device_not_found'
      | 'permission_denied'
      | 'client_error'
      | 'transient'
      | 'logic'
      | 'invalid_config'
      | null;

    lastTriggeredAt: string | null;

    name: string;

    notifyOnFailure: boolean;

    notifyOnSuccess: boolean;

    notifyWebhookId: string | null;

    ownerId: string;

    recordingEnabled: boolean;

    selfHealingEnabled: boolean;

    selfHealingMaxAttempts: number;

    status: 'healthy' | 'failing' | 'blocked';

    /**
     * Template-resolver semantics this flow runs under (MVA-23). 1 = legacy
     * (missing/forbidden/null all resolve to ''). 2 = typed (missing/forbidden throw,
     * a whole-token null stays JSON null). Existing flows stay 1; new flows default
     * to 2.
     */
    templateResolutionVersion: number;

    triggerId: string;

    updatedAt: string | null;

    /**
     * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
     */
    userId: string;
  }
}

export interface FlowUpdateResponse {
  data: FlowUpdateResponse.Data;
}

export namespace FlowUpdateResponse {
  export interface Data {
    id: string;

    blockedAt: string | null;

    consecutiveFailures: number;

    cooldownScope: 'flow' | 'device';

    cooldownSeconds: number | null;

    createdAt: string | null;

    createdBy: string | null;

    description: string | null;

    deviceIds: Array<string>;

    enabled: boolean;

    healthMonitoringEnabled: boolean;

    lastFailureAt: string | null;

    lastFailureCode:
      | 'device_not_found'
      | 'permission_denied'
      | 'client_error'
      | 'transient'
      | 'logic'
      | 'invalid_config'
      | null;

    lastTriggeredAt: string | null;

    name: string;

    notifyOnFailure: boolean;

    notifyOnSuccess: boolean;

    notifyWebhookId: string | null;

    ownerId: string;

    recordingEnabled: boolean;

    selfHealingEnabled: boolean;

    selfHealingMaxAttempts: number;

    status: 'healthy' | 'failing' | 'blocked';

    /**
     * Template-resolver semantics this flow runs under (MVA-23). 1 = legacy
     * (missing/forbidden/null all resolve to ''). 2 = typed (missing/forbidden throw,
     * a whole-token null stays JSON null). Existing flows stay 1; new flows default
     * to 2.
     */
    templateResolutionVersion: number;

    triggerId: string;

    updatedAt: string | null;

    /**
     * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
     */
    userId: string;
  }
}

export interface FlowListResponse {
  items: Array<FlowListResponse.Item>;

  pagination: Shared.Pagination;
}

export namespace FlowListResponse {
  export interface Item {
    id: string;

    blockedAt: string | null;

    consecutiveFailures: number;

    cooldownScope: 'flow' | 'device';

    cooldownSeconds: number | null;

    createdAt: string | null;

    createdBy: string | null;

    description: string | null;

    deviceIds: Array<string>;

    enabled: boolean;

    healthMonitoringEnabled: boolean;

    lastFailureAt: string | null;

    lastFailureCode:
      | 'device_not_found'
      | 'permission_denied'
      | 'client_error'
      | 'transient'
      | 'logic'
      | 'invalid_config'
      | null;

    lastTriggeredAt: string | null;

    name: string;

    notifyOnFailure: boolean;

    notifyOnSuccess: boolean;

    notifyWebhookId: string | null;

    ownerId: string;

    recordingEnabled: boolean;

    selfHealingEnabled: boolean;

    selfHealingMaxAttempts: number;

    status: 'healthy' | 'failing' | 'blocked';

    /**
     * Template-resolver semantics this flow runs under (MVA-23). 1 = legacy
     * (missing/forbidden/null all resolve to ''). 2 = typed (missing/forbidden throw,
     * a whole-token null stays JSON null). Existing flows stay 1; new flows default
     * to 2.
     */
    templateResolutionVersion: number;

    triggerId: string;

    updatedAt: string | null;

    /**
     * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
     */
    userId: string;
  }
}

export interface FlowDeleteResponse {
  message: string;
}

export interface FlowCloneResponse {
  data: FlowCloneResponse.Data;
}

export namespace FlowCloneResponse {
  export interface Data {
    id: string;

    blockedAt: string | null;

    consecutiveFailures: number;

    cooldownScope: 'flow' | 'device';

    cooldownSeconds: number | null;

    createdAt: string | null;

    createdBy: string | null;

    description: string | null;

    deviceIds: Array<string>;

    enabled: boolean;

    healthMonitoringEnabled: boolean;

    lastFailureAt: string | null;

    lastFailureCode:
      | 'device_not_found'
      | 'permission_denied'
      | 'client_error'
      | 'transient'
      | 'logic'
      | 'invalid_config'
      | null;

    lastTriggeredAt: string | null;

    name: string;

    notifyOnFailure: boolean;

    notifyOnSuccess: boolean;

    notifyWebhookId: string | null;

    ownerId: string;

    recordingEnabled: boolean;

    selfHealingEnabled: boolean;

    selfHealingMaxAttempts: number;

    status: 'healthy' | 'failing' | 'blocked';

    /**
     * Template-resolver semantics this flow runs under (MVA-23). 1 = legacy
     * (missing/forbidden/null all resolve to ''). 2 = typed (missing/forbidden throw,
     * a whole-token null stays JSON null). Existing flows stay 1; new flows default
     * to 2.
     */
    templateResolutionVersion: number;

    triggerId: string;

    updatedAt: string | null;

    /**
     * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
     */
    userId: string;
  }
}

export interface FlowDryRunResponse {
  data: FlowDryRunResponse.Data;
}

export namespace FlowDryRunResponse {
  export interface Data {
    actions: Array<Data.Action>;

    activation: 'event' | 'schedule' | 'custom';

    conditionsPassed: boolean | null;

    gates: Data.Gates;

    nextFireTime: string | null;

    rateLimited: boolean;

    validation: Data.Validation;

    wouldFire: boolean;
  }

  export namespace Data {
    export interface Action {
      continueOnError: boolean;

      method: string;

      name: string;

      service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks';

      /**
       * Nested child actions (loop/branch bodies), each the same shape as a
       * ResolvedAction.
       */
      children?: Array<unknown>;

      params?: { [key: string]: unknown };
    }

    export interface Gates {
      blocked: boolean;

      cooldownActive: boolean | null;

      deviceAttached: boolean;

      deviceIds: Array<string>;

      enabled: boolean;
    }

    export interface Validation {
      valid: boolean;

      errors?: Array<Validation.Error>;
    }

    export namespace Validation {
      export interface Error {
        field: string;

        message: string;
      }
    }
  }
}

export interface FlowListRepairsResponse {
  data: Array<FlowListRepairsResponse.Data>;
}

export namespace FlowListRepairsResponse {
  export interface Data {
    id: string;

    agentRunId: string | null;

    attempt: number;

    candidateSlug: string;

    chatSessionId: string | null;

    createdAt: string | null;

    deviceId: string | null;

    episode: number;

    error: string | null;

    failedStepIndex: number;

    finishedAt: string | null;

    flowId: string;

    maxAttempts: number;

    originalSlug: string;

    sourceExecutionId: string;

    startedAt: string | null;

    status: 'pending' | 'running' | 'canary' | 'promoting' | 'repaired' | 'failed' | 'escalated';

    updatedAt: string | null;

    verdict: Data.Verdict | null;
  }

  export namespace Data {
    export interface Verdict {
      outcome: 'ok' | 'flaky' | 'broken';

      summary: string;

      reason?: string;
    }
  }
}

export interface FlowUnblockResponse {
  data: FlowUnblockResponse.Data;
}

export namespace FlowUnblockResponse {
  export interface Data {
    id: string;

    blockedAt: string | null;

    consecutiveFailures: number;

    cooldownScope: 'flow' | 'device';

    cooldownSeconds: number | null;

    createdAt: string | null;

    createdBy: string | null;

    description: string | null;

    deviceIds: Array<string>;

    enabled: boolean;

    healthMonitoringEnabled: boolean;

    lastFailureAt: string | null;

    lastFailureCode:
      | 'device_not_found'
      | 'permission_denied'
      | 'client_error'
      | 'transient'
      | 'logic'
      | 'invalid_config'
      | null;

    lastTriggeredAt: string | null;

    name: string;

    notifyOnFailure: boolean;

    notifyOnSuccess: boolean;

    notifyWebhookId: string | null;

    ownerId: string;

    recordingEnabled: boolean;

    selfHealingEnabled: boolean;

    selfHealingMaxAttempts: number;

    status: 'healthy' | 'failing' | 'blocked';

    /**
     * Template-resolver semantics this flow runs under (MVA-23). 1 = legacy
     * (missing/forbidden/null all resolve to ''). 2 = typed (missing/forbidden throw,
     * a whole-token null stays JSON null). Existing flows stay 1; new flows default
     * to 2.
     */
    templateResolutionVersion: number;

    triggerId: string;

    updatedAt: string | null;

    /**
     * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
     */
    userId: string;
  }
}

export interface FlowCreateParams {
  actions: Array<FlowCreateParams.Action>;

  name: string;

  triggerId: string;

  cooldownScope?: 'flow' | 'device';

  cooldownSeconds?: number | null;

  description?: string;

  deviceIds?: Array<string>;

  enabled?: boolean;

  healthMonitoringEnabled?: boolean;

  notifyOnFailure?: boolean;

  notifyOnSuccess?: boolean;

  notifyWebhookId?: string | null;

  recordingEnabled?: boolean;

  selfHealingEnabled?: boolean;

  selfHealingMaxAttempts?: number;
}

export namespace FlowCreateParams {
  export interface Action {
    actionId: string;

    position: number;

    children?: Array<Action.Child>;

    continueOnError?: boolean;

    nameOverride?: string;

    overrides?: Action.Overrides | null;
  }

  export namespace Action {
    export interface Child {
      actionId: string;

      position: number;

      continueOnError?: boolean;

      nameOverride?: string;

      overrides?: Child.Overrides | null;
    }

    export namespace Child {
      export interface Overrides {
        params?: { [key: string]: unknown };
      }
    }

    export interface Overrides {
      params?: { [key: string]: unknown };
    }
  }
}

export interface FlowUpdateParams {
  cooldownScope?: 'flow' | 'device';

  cooldownSeconds?: number | null;

  description?: string;

  deviceIds?: Array<string>;

  enabled?: boolean;

  healthMonitoringEnabled?: boolean;

  name?: string;

  notifyOnFailure?: boolean;

  notifyOnSuccess?: boolean;

  notifyWebhookId?: string | null;

  recordingEnabled?: boolean;

  selfHealingEnabled?: boolean;

  selfHealingMaxAttempts?: number;

  triggerId?: string;
}

export interface FlowListParams {
  createdBy?: string;

  /**
   * Only include flows with this enabled state.
   */
  enabled?: 'true' | 'false';

  /**
   * Only include flows created by you.
   */
  mine?: 'true' | 'false';

  orderBy?: 'name' | 'createdAt' | 'updatedAt';

  orderByDirection?: 'asc' | 'desc';

  page?: number;

  pageSize?: number;

  search?: string;

  status?: Array<'healthy' | 'failing' | 'blocked'>;

  triggerId?: string;
}

export interface FlowCloneParams {
  deviceIds?: Array<string>;

  name?: string;
}

export interface FlowDryRunParams {
  payload?: { [key: string]: unknown };
}

Flows.Actions = Actions;

export declare namespace Flows {
  export {
    type FlowCreateResponse as FlowCreateResponse,
    type FlowRetrieveResponse as FlowRetrieveResponse,
    type FlowUpdateResponse as FlowUpdateResponse,
    type FlowListResponse as FlowListResponse,
    type FlowDeleteResponse as FlowDeleteResponse,
    type FlowCloneResponse as FlowCloneResponse,
    type FlowDryRunResponse as FlowDryRunResponse,
    type FlowListRepairsResponse as FlowListRepairsResponse,
    type FlowUnblockResponse as FlowUnblockResponse,
    type FlowCreateParams as FlowCreateParams,
    type FlowUpdateParams as FlowUpdateParams,
    type FlowListParams as FlowListParams,
    type FlowCloneParams as FlowCloneParams,
    type FlowDryRunParams as FlowDryRunParams,
  };

  export {
    Actions as Actions,
    type ActionListResponse as ActionListResponse,
    type ActionAddResponse as ActionAddResponse,
    type ActionRemoveResponse as ActionRemoveResponse,
    type ActionReplaceResponse as ActionReplaceResponse,
    type ActionAddParams as ActionAddParams,
    type ActionRemoveParams as ActionRemoveParams,
    type ActionReplaceParams as ActionReplaceParams,
  };
}
