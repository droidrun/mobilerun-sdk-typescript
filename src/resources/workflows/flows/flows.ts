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
   *
   * Supports an optional `Idempotency-Key` header (1-255 printable ASCII
   * characters). Replays with the same key and an identical body return the original
   * 201; a changed body under the same key returns 422 `idempotency_key_reused`.
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
   * Terminally archive a flow by its ID. Archived flows cannot be restored and are
   * hidden from customer reads. Repeating the request is idempotent for the owner.
   */
  delete(flowID: string, options?: RequestOptions): APIPromise<FlowDeleteResponse> {
    return this._client.delete(path`/flows/${flowID}`, options);
  }

  /**
   * Activate a disabled flow only when the supplied verification execution succeeded
   * and the flow graph has not changed since verification. Repeating activation is
   * idempotent for an already-enabled flow.
   */
  activate(
    flowID: string,
    body: FlowActivateParams,
    options?: RequestOptions,
  ): APIPromise<FlowActivateResponse> {
    return this._client.post(path`/flows/${flowID}/activate`, { body, ...options });
  }

  /**
   * Returns an owner-scoped snapshot of finite included workflow-agent capacity
   * after locally stored enabled and disabled agents. Available only while slot
   * enforcement is enabled; otherwise returns 503. This is advisory; create and
   * clone perform authoritative admission under an owner lock.
   */
  capacity(options?: RequestOptions): APIPromise<FlowCapacityResponse> {
    return this._client.get('/flows/capacity', options);
  }

  /**
   * Create a copy of an existing flow, including its actions and settings. The
   * optional body can override the new flow's `name` and target `deviceIds`. Returns
   * 404 if the source flow does not exist.
   *
   * Supports an optional `Idempotency-Key` header (1-255 printable ASCII
   * characters). Replays with the same key and an identical body return the original
   * 201; a changed body under the same key returns 422 `idempotency_key_reused`.
   */
  clone(
    flowID: string,
    body: FlowCloneParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlowCloneResponse> {
    return this._client.post(path`/flows/${flowID}/clone`, { body, ...options });
  }

  /**
   * Return the recording/delivery readiness for a flow (recording mode, whether
   * delivery can include the recording, whether a files.upload action exists, the
   * first direct OneDrive/Google Drive upload step if any) plus, per destination,
   * whether the flow owner has an active integrations-api connection. Returns 404 if
   * the flow does not exist.
   */
  deliveryOptions(flowID: string, options?: RequestOptions): APIPromise<FlowDeliveryOptionsResponse> {
    return this._client.get(path`/flows/${flowID}/delivery-options`, options);
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
   * Immediately enqueue one live execution on every device bound to the flow,
   * regardless of whether its trigger is event-based, custom, or scheduled.
   *
   * Supports an optional `Idempotency-Key` header (1-255 printable ASCII
   * characters). The run identity is derived from the key, so a retry never starts a
   * second run. Replays with the same key and an identical body return the original
   * status and the original `executionIds`; a changed body under the same key
   * returns 422 `idempotency_key_reused`.
   */
  run(
    flowID: string,
    body: FlowRunParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlowRunResponse> {
    return this._client.post(path`/flows/${flowID}/run`, { body, ...options });
  }

  /**
   * Get flow template context
   */
  templateContext(
    query: FlowTemplateContextParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlowTemplateContextResponse> {
    return this._client.get('/flows/template-context', { query, ...options });
  }

  /**
   * Clear a flow's blocked status after fixing the underlying issue. Idempotent —
   * safe to call on already-healthy flows.
   */
  unblock(flowID: string, options?: RequestOptions): APIPromise<FlowUnblockResponse> {
    return this._client.post(path`/flows/${flowID}/unblock`, options);
  }

  /**
   * Validate a flow
   */
  validate(body: FlowValidateParams, options?: RequestOptions): APIPromise<FlowValidateResponse> {
    return this._client.post('/flows/validate', { body, ...options });
  }

  /**
   * Run a bound, deduplicated **verification** of this flow on exactly one device
   * through the real worker.
   *
   * Unlike a normal trigger firing, verification:
   *
   * - runs a flow that is `enabled` OR `disabled` (an archived flow returns 404);
   * - targets one device (`deviceId`, or the single bound device);
   * - is idempotent per `invocationId`: a repeat returns the existing run
   *   (`deduplicated: true`, HTTP 200) instead of enqueuing another (HTTP 202);
   * - never mutates flow health, `lastTriggeredAt`, or the repair loop.
   *
   * Per-activation payload gate:
   *
   * - `custom`: validates the payload against the custom payload schema (422 on
   *   failure).
   * - `event`: validates the payload against the event catalog schema and evaluates
   *   the trigger conditions; a failing gate returns 409 `conditions_not_met` with
   *   the dry-run report.
   * - `schedule`: the payload is ignored.
   */
  verify(flowID: string, body: FlowVerifyParams, options?: RequestOptions): APIPromise<FlowVerifyResponse> {
    return this._client.post(path`/flows/${flowID}/verify`, { body, ...options });
  }
}

export interface FlowCreateResponse {
  data: FlowCreateResponse.Data;
}

export namespace FlowCreateResponse {
  export interface Data {
    id: string;

    archivedAt: string | null;

    blockedAt: string | null;

    consecutiveFailures: number;

    cooldownScope: 'flow' | 'device';

    cooldownSeconds: number | null;

    createdAt: string | null;

    createdBy: string | null;

    delivery: Data.Delivery | null;

    description: string | null;

    deviceIds: Array<string>;

    /**
     * Compatibility projection of lifecycleStatus; true only when lifecycleStatus is
     * enabled.
     */
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

    lifecycleStatus: 'enabled' | 'disabled' | 'archived';

    name: string;

    notifyOnFailure: boolean;

    notifyOnSuccess: boolean;

    notifyWebhookId: string | null;

    ownerId: string;

    /**
     * @deprecated Deprecated: use recordingPolicy.mode ("flow" =
     * recordingEnabled=true, "off" = recordingEnabled=false).
     */
    recordingEnabled: boolean;

    recordingPolicy: Data.RecordingPolicy;

    selfHealingEnabled: boolean;

    selfHealingMaxAttempts: number;

    status: 'healthy' | 'failing' | 'blocked';

    /**
     * Template-resolver semantics this flow runs under (MVA-23). 1 = legacy
     * (missing/forbidden/null all resolve to ''). 2 = typed (missing/forbidden throw,
     * a whole-token null stays JSON null). 3 = typed, key-based (steps are addressed
     * as {{steps.<key>...}} instead of by name; trigger.payload is not available).
     * Existing flows stay 1; new flows default to the current version.
     */
    templateResolutionVersion: number;

    triggerId: string;

    updatedAt: string | null;

    /**
     * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
     */
    userId: string;
  }

  export namespace Data {
    export interface Delivery {
      destination: 'one_drive' | 'google_drive';

      folder?: string;

      recording?: Delivery.Recording;

      screenshots?: unknown;
    }

    export namespace Delivery {
      export interface Recording {
        filename: string;
      }
    }

    export interface RecordingPolicy {
      mode: 'off' | 'flow' | 'selected_steps';
    }
  }
}

export interface FlowRetrieveResponse {
  data: FlowRetrieveResponse.Data;
}

export namespace FlowRetrieveResponse {
  export interface Data {
    id: string;

    archivedAt: string | null;

    blockedAt: string | null;

    consecutiveFailures: number;

    cooldownScope: 'flow' | 'device';

    cooldownSeconds: number | null;

    createdAt: string | null;

    createdBy: string | null;

    delivery: Data.Delivery | null;

    description: string | null;

    deviceIds: Array<string>;

    /**
     * Compatibility projection of lifecycleStatus; true only when lifecycleStatus is
     * enabled.
     */
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

    lifecycleStatus: 'enabled' | 'disabled' | 'archived';

    name: string;

    notifyOnFailure: boolean;

    notifyOnSuccess: boolean;

    notifyWebhookId: string | null;

    ownerId: string;

    /**
     * @deprecated Deprecated: use recordingPolicy.mode ("flow" =
     * recordingEnabled=true, "off" = recordingEnabled=false).
     */
    recordingEnabled: boolean;

    recordingPolicy: Data.RecordingPolicy;

    selfHealingEnabled: boolean;

    selfHealingMaxAttempts: number;

    status: 'healthy' | 'failing' | 'blocked';

    /**
     * Template-resolver semantics this flow runs under (MVA-23). 1 = legacy
     * (missing/forbidden/null all resolve to ''). 2 = typed (missing/forbidden throw,
     * a whole-token null stays JSON null). 3 = typed, key-based (steps are addressed
     * as {{steps.<key>...}} instead of by name; trigger.payload is not available).
     * Existing flows stay 1; new flows default to the current version.
     */
    templateResolutionVersion: number;

    triggerId: string;

    updatedAt: string | null;

    /**
     * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
     */
    userId: string;
  }

  export namespace Data {
    export interface Delivery {
      destination: 'one_drive' | 'google_drive';

      folder?: string;

      recording?: Delivery.Recording;

      screenshots?: unknown;
    }

    export namespace Delivery {
      export interface Recording {
        filename: string;
      }
    }

    export interface RecordingPolicy {
      mode: 'off' | 'flow' | 'selected_steps';
    }
  }
}

export interface FlowUpdateResponse {
  data: FlowUpdateResponse.Data;
}

export namespace FlowUpdateResponse {
  export interface Data {
    id: string;

    archivedAt: string | null;

    blockedAt: string | null;

    consecutiveFailures: number;

    cooldownScope: 'flow' | 'device';

    cooldownSeconds: number | null;

    createdAt: string | null;

    createdBy: string | null;

    delivery: Data.Delivery | null;

    description: string | null;

    deviceIds: Array<string>;

    /**
     * Compatibility projection of lifecycleStatus; true only when lifecycleStatus is
     * enabled.
     */
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

    lifecycleStatus: 'enabled' | 'disabled' | 'archived';

    name: string;

    notifyOnFailure: boolean;

    notifyOnSuccess: boolean;

    notifyWebhookId: string | null;

    ownerId: string;

    /**
     * @deprecated Deprecated: use recordingPolicy.mode ("flow" =
     * recordingEnabled=true, "off" = recordingEnabled=false).
     */
    recordingEnabled: boolean;

    recordingPolicy: Data.RecordingPolicy;

    selfHealingEnabled: boolean;

    selfHealingMaxAttempts: number;

    status: 'healthy' | 'failing' | 'blocked';

    /**
     * Template-resolver semantics this flow runs under (MVA-23). 1 = legacy
     * (missing/forbidden/null all resolve to ''). 2 = typed (missing/forbidden throw,
     * a whole-token null stays JSON null). 3 = typed, key-based (steps are addressed
     * as {{steps.<key>...}} instead of by name; trigger.payload is not available).
     * Existing flows stay 1; new flows default to the current version.
     */
    templateResolutionVersion: number;

    triggerId: string;

    updatedAt: string | null;

    /**
     * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
     */
    userId: string;
  }

  export namespace Data {
    export interface Delivery {
      destination: 'one_drive' | 'google_drive';

      folder?: string;

      recording?: Delivery.Recording;

      screenshots?: unknown;
    }

    export namespace Delivery {
      export interface Recording {
        filename: string;
      }
    }

    export interface RecordingPolicy {
      mode: 'off' | 'flow' | 'selected_steps';
    }
  }
}

export interface FlowListResponse {
  items: Array<FlowListResponse.Item>;

  pagination: Shared.Pagination;
}

export namespace FlowListResponse {
  export interface Item {
    id: string;

    archivedAt: string | null;

    blockedAt: string | null;

    consecutiveFailures: number;

    cooldownScope: 'flow' | 'device';

    cooldownSeconds: number | null;

    createdAt: string | null;

    createdBy: string | null;

    delivery: Item.Delivery | null;

    description: string | null;

    deviceIds: Array<string>;

    /**
     * Compatibility projection of lifecycleStatus; true only when lifecycleStatus is
     * enabled.
     */
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

    lifecycleStatus: 'enabled' | 'disabled' | 'archived';

    name: string;

    notifyOnFailure: boolean;

    notifyOnSuccess: boolean;

    notifyWebhookId: string | null;

    ownerId: string;

    /**
     * @deprecated Deprecated: use recordingPolicy.mode ("flow" =
     * recordingEnabled=true, "off" = recordingEnabled=false).
     */
    recordingEnabled: boolean;

    recordingPolicy: Item.RecordingPolicy;

    selfHealingEnabled: boolean;

    selfHealingMaxAttempts: number;

    status: 'healthy' | 'failing' | 'blocked';

    /**
     * Template-resolver semantics this flow runs under (MVA-23). 1 = legacy
     * (missing/forbidden/null all resolve to ''). 2 = typed (missing/forbidden throw,
     * a whole-token null stays JSON null). 3 = typed, key-based (steps are addressed
     * as {{steps.<key>...}} instead of by name; trigger.payload is not available).
     * Existing flows stay 1; new flows default to the current version.
     */
    templateResolutionVersion: number;

    triggerId: string;

    updatedAt: string | null;

    /**
     * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
     */
    userId: string;
  }

  export namespace Item {
    export interface Delivery {
      destination: 'one_drive' | 'google_drive';

      folder?: string;

      recording?: Delivery.Recording;

      screenshots?: unknown;
    }

    export namespace Delivery {
      export interface Recording {
        filename: string;
      }
    }

    export interface RecordingPolicy {
      mode: 'off' | 'flow' | 'selected_steps';
    }
  }
}

export interface FlowDeleteResponse {
  message: string;
}

export interface FlowActivateResponse {
  data: FlowActivateResponse.Data;
}

export namespace FlowActivateResponse {
  export interface Data {
    id: string;

    archivedAt: string | null;

    blockedAt: string | null;

    consecutiveFailures: number;

    cooldownScope: 'flow' | 'device';

    cooldownSeconds: number | null;

    createdAt: string | null;

    createdBy: string | null;

    delivery: Data.Delivery | null;

    description: string | null;

    deviceIds: Array<string>;

    /**
     * Compatibility projection of lifecycleStatus; true only when lifecycleStatus is
     * enabled.
     */
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

    lifecycleStatus: 'enabled' | 'disabled' | 'archived';

    name: string;

    notifyOnFailure: boolean;

    notifyOnSuccess: boolean;

    notifyWebhookId: string | null;

    ownerId: string;

    /**
     * @deprecated Deprecated: use recordingPolicy.mode ("flow" =
     * recordingEnabled=true, "off" = recordingEnabled=false).
     */
    recordingEnabled: boolean;

    recordingPolicy: Data.RecordingPolicy;

    selfHealingEnabled: boolean;

    selfHealingMaxAttempts: number;

    status: 'healthy' | 'failing' | 'blocked';

    /**
     * Template-resolver semantics this flow runs under (MVA-23). 1 = legacy
     * (missing/forbidden/null all resolve to ''). 2 = typed (missing/forbidden throw,
     * a whole-token null stays JSON null). 3 = typed, key-based (steps are addressed
     * as {{steps.<key>...}} instead of by name; trigger.payload is not available).
     * Existing flows stay 1; new flows default to the current version.
     */
    templateResolutionVersion: number;

    triggerId: string;

    updatedAt: string | null;

    /**
     * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
     */
    userId: string;
  }

  export namespace Data {
    export interface Delivery {
      destination: 'one_drive' | 'google_drive';

      folder?: string;

      recording?: Delivery.Recording;

      screenshots?: unknown;
    }

    export namespace Delivery {
      export interface Recording {
        filename: string;
      }
    }

    export interface RecordingPolicy {
      mode: 'off' | 'flow' | 'selected_steps';
    }
  }
}

export interface FlowCapacityResponse {
  data: FlowCapacityResponse.Data;
}

export namespace FlowCapacityResponse {
  export interface Data {
    included: number;

    remaining: number;

    status: 'available' | 'exhausted' | 'not_included';
  }
}

export interface FlowCloneResponse {
  data: FlowCloneResponse.Data;
}

export namespace FlowCloneResponse {
  export interface Data {
    id: string;

    archivedAt: string | null;

    blockedAt: string | null;

    consecutiveFailures: number;

    cooldownScope: 'flow' | 'device';

    cooldownSeconds: number | null;

    createdAt: string | null;

    createdBy: string | null;

    delivery: Data.Delivery | null;

    description: string | null;

    deviceIds: Array<string>;

    /**
     * Compatibility projection of lifecycleStatus; true only when lifecycleStatus is
     * enabled.
     */
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

    lifecycleStatus: 'enabled' | 'disabled' | 'archived';

    name: string;

    notifyOnFailure: boolean;

    notifyOnSuccess: boolean;

    notifyWebhookId: string | null;

    ownerId: string;

    /**
     * @deprecated Deprecated: use recordingPolicy.mode ("flow" =
     * recordingEnabled=true, "off" = recordingEnabled=false).
     */
    recordingEnabled: boolean;

    recordingPolicy: Data.RecordingPolicy;

    selfHealingEnabled: boolean;

    selfHealingMaxAttempts: number;

    status: 'healthy' | 'failing' | 'blocked';

    /**
     * Template-resolver semantics this flow runs under (MVA-23). 1 = legacy
     * (missing/forbidden/null all resolve to ''). 2 = typed (missing/forbidden throw,
     * a whole-token null stays JSON null). 3 = typed, key-based (steps are addressed
     * as {{steps.<key>...}} instead of by name; trigger.payload is not available).
     * Existing flows stay 1; new flows default to the current version.
     */
    templateResolutionVersion: number;

    triggerId: string;

    updatedAt: string | null;

    /**
     * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
     */
    userId: string;
  }

  export namespace Data {
    export interface Delivery {
      destination: 'one_drive' | 'google_drive';

      folder?: string;

      recording?: Delivery.Recording;

      screenshots?: unknown;
    }

    export namespace Delivery {
      export interface Recording {
        filename: string;
      }
    }

    export interface RecordingPolicy {
      mode: 'off' | 'flow' | 'selected_steps';
    }
  }
}

export interface FlowDeliveryOptionsResponse {
  data: FlowDeliveryOptionsResponse.Data;
}

export namespace FlowDeliveryOptionsResponse {
  export interface Data {
    canDeliverRecording: boolean;

    /**
     * Delivery destinations in registry order.
     */
    destinations: Array<Data.Destination>;

    directUploadStep: Data.DirectUploadStep | null;

    hasFilesUpload: boolean;

    recordingMode: 'off' | 'flow' | 'selected_steps';
  }

  export namespace Data {
    export interface Destination {
      connection: 'connected' | 'not_connected' | 'expired' | 'unknown';

      connectKey: string;

      iconUrl: string | null;

      key: 'one_drive' | 'google_drive';

      label: string;
    }

    export interface DirectUploadStep {
      flowActionId: string;

      name: string;
    }
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

      flowActionId: string;

      key: string;

      method: string;

      name: string;

      recordingEnabled: boolean;

      service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks' | 'integrations_api';

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

export interface FlowRunResponse {
  data: FlowRunResponse.Data;
}

export namespace FlowRunResponse {
  export interface Data {
    enqueuedCount: number;

    /**
     * Ids of the executions this run created. An idempotent replay returns the ids of
     * the original run.
     */
    executionIds: Array<string>;
  }
}

export interface FlowTemplateContextResponse {
  data: FlowTemplateContextResponse.Data;
}

export namespace FlowTemplateContextResponse {
  export interface Data {
    grammar: string;

    loop: Data.Loop;

    payloadAliases: Array<string>;

    roots: Array<Data.Root>;

    stepReference: Data.StepReference;

    templateResolutionVersion: number;
  }

  export namespace Data {
    export interface Loop {
      context: Array<string>;

      itemVariableDefault: string;

      name: string;
    }

    export interface Root {
      description: string;

      name: string;

      shape?: unknown;
    }

    export interface StepReference {
      note: string;

      pattern: string;

      keyRule?: string;

      slugRule?: string;
    }
  }
}

export interface FlowUnblockResponse {
  data: FlowUnblockResponse.Data;
}

export namespace FlowUnblockResponse {
  export interface Data {
    id: string;

    archivedAt: string | null;

    blockedAt: string | null;

    consecutiveFailures: number;

    cooldownScope: 'flow' | 'device';

    cooldownSeconds: number | null;

    createdAt: string | null;

    createdBy: string | null;

    delivery: Data.Delivery | null;

    description: string | null;

    deviceIds: Array<string>;

    /**
     * Compatibility projection of lifecycleStatus; true only when lifecycleStatus is
     * enabled.
     */
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

    lifecycleStatus: 'enabled' | 'disabled' | 'archived';

    name: string;

    notifyOnFailure: boolean;

    notifyOnSuccess: boolean;

    notifyWebhookId: string | null;

    ownerId: string;

    /**
     * @deprecated Deprecated: use recordingPolicy.mode ("flow" =
     * recordingEnabled=true, "off" = recordingEnabled=false).
     */
    recordingEnabled: boolean;

    recordingPolicy: Data.RecordingPolicy;

    selfHealingEnabled: boolean;

    selfHealingMaxAttempts: number;

    status: 'healthy' | 'failing' | 'blocked';

    /**
     * Template-resolver semantics this flow runs under (MVA-23). 1 = legacy
     * (missing/forbidden/null all resolve to ''). 2 = typed (missing/forbidden throw,
     * a whole-token null stays JSON null). 3 = typed, key-based (steps are addressed
     * as {{steps.<key>...}} instead of by name; trigger.payload is not available).
     * Existing flows stay 1; new flows default to the current version.
     */
    templateResolutionVersion: number;

    triggerId: string;

    updatedAt: string | null;

    /**
     * @deprecated Deprecated: use ownerId (tenancy) / createdBy (actor).
     */
    userId: string;
  }

  export namespace Data {
    export interface Delivery {
      destination: 'one_drive' | 'google_drive';

      folder?: string;

      recording?: Delivery.Recording;

      screenshots?: unknown;
    }

    export namespace Delivery {
      export interface Recording {
        filename: string;
      }
    }

    export interface RecordingPolicy {
      mode: 'off' | 'flow' | 'selected_steps';
    }
  }
}

export interface FlowValidateResponse {
  data: FlowValidateResponse.Data;
}

export namespace FlowValidateResponse {
  export interface Data {
    errors: Array<Data.Error>;

    valid: boolean;

    warnings: Array<Data.Warning>;
  }

  export namespace Data {
    export interface Error {
      code: string;

      field: string;

      message: string;

      knownSteps?: Array<string>;

      reference?: string;
    }

    export interface Warning {
      code: string;

      message: string;

      connectKey?: string;

      destination?: string;
    }
  }
}

export interface FlowVerifyResponse {
  data: FlowVerifyResponse.Data;
}

export namespace FlowVerifyResponse {
  export interface Data {
    /**
     * True when this run already existed for the (flow, invocationId) key (HTTP 200);
     * false for a newly enqueued run (HTTP 202).
     */
    deduplicated: boolean;

    /**
     * Device the verification runs on; null for a device-free verification (a 0-device
     * flow whose actions are all device-free allowlisted).
     */
    deviceId: string | null;

    executionId: string;

    flowId: string;

    invocationId: string;

    kind: 'verification';

    status: 'pending' | 'running' | 'success' | 'failed' | 'cancelled' | 'skipped' | 'invalid';

    triggerId: string;
  }
}

export interface FlowCreateParams {
  actions: Array<FlowCreateParams.Action>;

  name: string;

  triggerId: string;

  cooldownScope?: 'flow' | 'device';

  cooldownSeconds?: number | null;

  delivery?: FlowCreateParams.Delivery;

  description?: string;

  deviceIds?: Array<string>;

  enabled?: boolean;

  healthMonitoringEnabled?: boolean;

  notifyOnFailure?: boolean;

  notifyOnSuccess?: boolean;

  notifyWebhookId?: string | null;

  recordingEnabled?: boolean;

  recordingPolicy?: FlowCreateParams.RecordingPolicy;

  selfHealingEnabled?: boolean;

  selfHealingMaxAttempts?: number;
}

export namespace FlowCreateParams {
  export interface Action {
    actionId: string;

    position: number;

    children?: Array<Action.Child>;

    continueOnError?: boolean;

    /**
     * Stable identifier used by template resolution v2+ to address this step as
     * {{key.field}}. Omitted keys are derived from the step name whenever a flow is
     * created. For template resolution v3, replacing an existing flow's full action
     * tree requires every step to carry an explicit key — a missing key is rejected
     * there, not derived, so a name change can never silently move a step's key.
     */
    key?: string;

    nameOverride?: string;

    overrides?: Action.Overrides | null;

    recordingEnabled?: boolean;
  }

  export namespace Action {
    export interface Child {
      actionId: string;

      position: number;

      continueOnError?: boolean;

      /**
       * Stable identifier used by template resolution v2+ to address this step as
       * {{key.field}}. Omitted keys are derived from the step name whenever a flow is
       * created. For template resolution v3, replacing an existing flow's full action
       * tree requires every step to carry an explicit key — a missing key is rejected
       * there, not derived, so a name change can never silently move a step's key.
       */
      key?: string;

      nameOverride?: string;

      overrides?: Child.Overrides | null;

      recordingEnabled?: boolean;
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

  export interface Delivery {
    destination: 'one_drive' | 'google_drive';

    folder?: string;

    recording?: Delivery.Recording;

    screenshots?: unknown;
  }

  export namespace Delivery {
    export interface Recording {
      filename: string;
    }
  }

  export interface RecordingPolicy {
    mode: 'off' | 'flow' | 'selected_steps';
  }
}

export interface FlowUpdateParams {
  cooldownScope?: 'flow' | 'device';

  cooldownSeconds?: number | null;

  delivery?: FlowUpdateParams.Delivery | null;

  description?: string;

  deviceIds?: Array<string>;

  enabled?: boolean;

  healthMonitoringEnabled?: boolean;

  /**
   * Set the visible agent lifecycle. Archive remains available only through DELETE.
   */
  lifecycleStatus?: 'enabled' | 'disabled';

  name?: string;

  notifyOnFailure?: boolean;

  notifyOnSuccess?: boolean;

  notifyWebhookId?: string | null;

  /**
   * @deprecated Deprecated compatibility field. true maps to
   * recordingPolicy.mode="flow"; false maps to "off".
   */
  recordingEnabled?: boolean;

  recordingPolicy?: FlowUpdateParams.RecordingPolicy;

  selfHealingEnabled?: boolean;

  selfHealingMaxAttempts?: number;

  triggerId?: string;
}

export namespace FlowUpdateParams {
  export interface Delivery {
    destination: 'one_drive' | 'google_drive';

    folder?: string;

    recording?: Delivery.Recording;

    screenshots?: unknown;
  }

  export namespace Delivery {
    export interface Recording {
      filename: string;
    }
  }

  export interface RecordingPolicy {
    mode: 'off' | 'flow' | 'selected_steps';
  }
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

export interface FlowActivateParams {
  verificationExecutionId: string;
}

export interface FlowCloneParams {
  deviceIds?: Array<string>;

  name?: string;
}

export interface FlowDryRunParams {
  payload?: { [key: string]: unknown };
}

export interface FlowRunParams {
  payload?: { [key: string]: unknown };
}

export interface FlowTemplateContextParams {
  templateResolutionVersion?: number;
}

export interface FlowValidateParams {
  actions: Array<FlowValidateParams.FlowActionInput | FlowValidateParams.FlowDraftActionInput>;

  name: string;

  cooldownScope?: 'flow' | 'device';

  cooldownSeconds?: number | null;

  delivery?: FlowValidateParams.Delivery;

  description?: string;

  deviceIds?: Array<string>;

  enabled?: boolean;

  healthMonitoringEnabled?: boolean;

  notifyOnFailure?: boolean;

  notifyOnSuccess?: boolean;

  notifyWebhookId?: string | null;

  recordingEnabled?: boolean;

  recordingPolicy?: FlowValidateParams.RecordingPolicy;

  selfHealingEnabled?: boolean;

  selfHealingMaxAttempts?: number;

  triggerId?: string;
}

export namespace FlowValidateParams {
  export interface FlowActionInput {
    actionId: string;

    position: number;

    children?: Array<FlowActionInput.Child>;

    continueOnError?: boolean;

    /**
     * Stable identifier used by template resolution v2+ to address this step as
     * {{key.field}}. Omitted keys are derived from the step name whenever a flow is
     * created. For template resolution v3, replacing an existing flow's full action
     * tree requires every step to carry an explicit key — a missing key is rejected
     * there, not derived, so a name change can never silently move a step's key.
     */
    key?: string;

    nameOverride?: string;

    overrides?: FlowActionInput.Overrides | null;

    recordingEnabled?: boolean;
  }

  export namespace FlowActionInput {
    export interface Child {
      actionId: string;

      position: number;

      continueOnError?: boolean;

      /**
       * Stable identifier used by template resolution v2+ to address this step as
       * {{key.field}}. Omitted keys are derived from the step name whenever a flow is
       * created. For template resolution v3, replacing an existing flow's full action
       * tree requires every step to carry an explicit key — a missing key is rejected
       * there, not derived, so a name change can never silently move a step's key.
       */
      key?: string;

      nameOverride?: string;

      overrides?: Child.Overrides | null;

      recordingEnabled?: boolean;
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

  export interface FlowDraftActionInput {
    draft: FlowDraftActionInput.Draft;

    position: number;

    continueOnError?: boolean;

    /**
     * Stable identifier used by template resolution v2+ to address this step as
     * {{key.field}}. Omitted keys are derived from the step name whenever a flow is
     * created. For template resolution v3, replacing an existing flow's full action
     * tree requires every step to carry an explicit key — a missing key is rejected
     * there, not derived, so a name change can never silently move a step's key.
     */
    key?: string;

    nameOverride?: string;

    overrides?: FlowDraftActionInput.Overrides | null;

    recordingEnabled?: boolean;
  }

  export namespace FlowDraftActionInput {
    export interface Draft {
      method: string;

      name: string;

      service: string;

      params?: { [key: string]: unknown };
    }

    export interface Overrides {
      params?: { [key: string]: unknown };
    }
  }

  export interface Delivery {
    destination: 'one_drive' | 'google_drive';

    folder?: string;

    recording?: Delivery.Recording;

    screenshots?: unknown;
  }

  export namespace Delivery {
    export interface Recording {
      filename: string;
    }
  }

  export interface RecordingPolicy {
    mode: 'off' | 'flow' | 'selected_steps';
  }
}

export interface FlowVerifyParams {
  /**
   * Client-supplied idempotency key. A repeat request for the same (flow,
   * invocationId) returns the existing verification run (`deduplicated: true`,
   * HTTP 200) instead of enqueuing another.
   */
  invocationId: string;

  /**
   * Device to run the verification on. Must be one the flow is bound to. Optional
   * only when the flow is bound to exactly one device (that device is used);
   * otherwise required.
   */
  deviceId?: string;

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
    type FlowActivateResponse as FlowActivateResponse,
    type FlowCapacityResponse as FlowCapacityResponse,
    type FlowCloneResponse as FlowCloneResponse,
    type FlowDeliveryOptionsResponse as FlowDeliveryOptionsResponse,
    type FlowDryRunResponse as FlowDryRunResponse,
    type FlowListRepairsResponse as FlowListRepairsResponse,
    type FlowRunResponse as FlowRunResponse,
    type FlowTemplateContextResponse as FlowTemplateContextResponse,
    type FlowUnblockResponse as FlowUnblockResponse,
    type FlowValidateResponse as FlowValidateResponse,
    type FlowVerifyResponse as FlowVerifyResponse,
    type FlowCreateParams as FlowCreateParams,
    type FlowUpdateParams as FlowUpdateParams,
    type FlowListParams as FlowListParams,
    type FlowActivateParams as FlowActivateParams,
    type FlowCloneParams as FlowCloneParams,
    type FlowDryRunParams as FlowDryRunParams,
    type FlowRunParams as FlowRunParams,
    type FlowTemplateContextParams as FlowTemplateContextParams,
    type FlowValidateParams as FlowValidateParams,
    type FlowVerifyParams as FlowVerifyParams,
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
