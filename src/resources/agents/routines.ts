// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Routines extends APIResource {
  /**
   * Forwards the scheduler CreateFlowBody unchanged and assigns the Agent selected
   * in the path. Requires Idempotency-Key; reuse it after a transient failure.
   */
  create(
    agentID: string,
    body: RoutineCreateParams,
    options?: RequestOptions,
  ): APIPromise<RoutineCreateResponse> {
    return this._client.post(path`/agents/${agentID}/routines`, { body, ...options });
  }

  /**
   * The source must belong to the authenticated owner and be assigned to the same
   * Agent or unassigned. The target is the Agent in the path. Requires
   * Idempotency-Key.
   */
  clone(
    routineID: string,
    params: RoutineCloneParams,
    options?: RequestOptions,
  ): APIPromise<RoutineCloneResponse> {
    const { agentId, ...body } = params;
    return this._client.post(path`/agents/${agentId}/routines/${routineID}/clone`, { body, ...options });
  }
}

export interface RoutineCreateResponse {
  data: RoutineCreateResponse.Data;
}

export namespace RoutineCreateResponse {
  export interface Data {
    id: string;

    agentId: string | null;

    [k: string]: unknown;
  }
}

export interface RoutineCloneResponse {
  data: RoutineCloneResponse.Data;
}

export namespace RoutineCloneResponse {
  export interface Data {
    id: string;

    agentId: string | null;

    [k: string]: unknown;
  }
}

export interface RoutineCreateParams {
  actions: Array<RoutineCreateParams.Action>;

  name: string;

  triggerId: string;

  cooldownScope?: 'flow' | 'device';

  cooldownSeconds?: number | null;

  delivery?: RoutineCreateParams.Delivery;

  description?: string;

  deviceIds?: Array<string>;

  enabled?: boolean;

  healthMonitoringEnabled?: boolean;

  notifyOnFailure?: boolean;

  notifyOnSuccess?: boolean;

  notifyWebhookId?: string | null;

  recordingEnabled?: boolean;

  recordingPolicy?: RoutineCreateParams.RecordingPolicy;

  selfHealingEnabled?: boolean;

  selfHealingMaxAttempts?: number;

  [k: string]: unknown;
}

export namespace RoutineCreateParams {
  export interface Action {
    actionId: string;

    position: number;

    [k: string]: unknown;
  }

  export interface Delivery {
    destination: 'one_drive' | 'google_drive' | 'mobilerun';

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

export interface RoutineCloneParams {
  /**
   * Path param
   */
  agentId: string;

  /**
   * Body param
   */
  deviceIds?: Array<string>;

  /**
   * Body param
   */
  name?: string;
}

export declare namespace Routines {
  export {
    type RoutineCreateResponse as RoutineCreateResponse,
    type RoutineCloneResponse as RoutineCloneResponse,
    type RoutineCreateParams as RoutineCreateParams,
    type RoutineCloneParams as RoutineCloneParams,
  };
}
