// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FlowsAPI from './flows';
import * as Shared from '../../shared';
import * as WorkflowsAPI from '../workflows';
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
  FlowAction,
} from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Flows extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Create a flow
   */
  create(body: FlowCreateParams, options?: RequestOptions): APIPromise<FlowCreateResponse> {
    return this._client.post('/flows', { body, ...options });
  }

  /**
   * Get a flow
   */
  retrieve(flowID: string, options?: RequestOptions): APIPromise<FlowRetrieveResponse> {
    return this._client.get(path`/flows/${flowID}`, options);
  }

  /**
   * Update a flow
   */
  update(
    flowID: string,
    body: FlowUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlowUpdateResponse> {
    return this._client.patch(path`/flows/${flowID}`, { body, ...options });
  }

  /**
   * List flows
   */
  list(
    query: FlowListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlowListResponse> {
    return this._client.get('/flows', { query, ...options });
  }

  /**
   * Delete a flow
   */
  delete(flowID: string, options?: RequestOptions): APIPromise<FlowDeleteResponse> {
    return this._client.delete(path`/flows/${flowID}`, options);
  }

  /**
   * Clone a flow
   */
  clone(
    flowID: string,
    body: FlowCloneParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FlowCloneResponse> {
    return this._client.post(path`/flows/${flowID}/clone`, { body, ...options });
  }

  /**
   * Clear a flow's blocked status after fixing the underlying issue. Idempotent —
   * safe to call on already-healthy flows.
   */
  unblock(flowID: string, options?: RequestOptions): APIPromise<FlowUnblockResponse> {
    return this._client.post(path`/flows/${flowID}/unblock`, options);
  }
}

export interface FlowActionOverrides {
  params?: { [key: string]: unknown };
}

export interface FlowChildActionInput {
  actionId: string;

  position: number;

  continueOnError?: boolean;

  deviceId?: string;

  nameOverride?: string;

  overrides?: FlowActionOverrides | null;
}

export interface FlowCreateResponse {
  data: WorkflowsAPI.Flow;
}

export interface FlowRetrieveResponse {
  data: WorkflowsAPI.Flow;
}

export interface FlowUpdateResponse {
  data: WorkflowsAPI.Flow;
}

export interface FlowListResponse {
  items: Array<WorkflowsAPI.Flow>;

  pagination: Shared.Pagination;
}

export interface FlowDeleteResponse {
  message: string;
}

export interface FlowCloneResponse {
  data: WorkflowsAPI.Flow;
}

export interface FlowUnblockResponse {
  data: WorkflowsAPI.Flow;
}

export interface FlowCreateParams {
  actions: Array<FlowCreateParams.Action>;

  name: string;

  triggerId: string;

  cooldownScope?: 'flow' | 'device';

  cooldownSeconds?: number | null;

  description?: string;

  enabled?: boolean;
}

export namespace FlowCreateParams {
  export interface Action {
    actionId: string;

    position: number;

    children?: Array<FlowsAPI.FlowChildActionInput>;

    continueOnError?: boolean;

    deviceId?: string;

    nameOverride?: string;

    overrides?: FlowsAPI.FlowActionOverrides | null;
  }
}

export interface FlowUpdateParams {
  cooldownScope?: 'flow' | 'device';

  cooldownSeconds?: number | null;

  description?: string;

  enabled?: boolean;

  name?: string;

  triggerId?: string;
}

export interface FlowListParams {
  enabled?: boolean | null;

  orderBy?: 'name' | 'createdAt' | 'updatedAt';

  orderByDirection?: 'asc' | 'desc';

  page?: number;

  pageSize?: number;

  search?: string;

  status?: Array<'healthy' | 'failing' | 'blocked'>;

  triggerId?: string;
}

export interface FlowCloneParams {
  name?: string;
}

Flows.Actions = Actions;

export declare namespace Flows {
  export {
    type FlowActionOverrides as FlowActionOverrides,
    type FlowChildActionInput as FlowChildActionInput,
    type FlowCreateResponse as FlowCreateResponse,
    type FlowRetrieveResponse as FlowRetrieveResponse,
    type FlowUpdateResponse as FlowUpdateResponse,
    type FlowListResponse as FlowListResponse,
    type FlowDeleteResponse as FlowDeleteResponse,
    type FlowCloneResponse as FlowCloneResponse,
    type FlowUnblockResponse as FlowUnblockResponse,
    type FlowCreateParams as FlowCreateParams,
    type FlowUpdateParams as FlowUpdateParams,
    type FlowListParams as FlowListParams,
    type FlowCloneParams as FlowCloneParams,
  };

  export {
    Actions as Actions,
    type FlowAction as FlowAction,
    type ActionListResponse as ActionListResponse,
    type ActionAddResponse as ActionAddResponse,
    type ActionRemoveResponse as ActionRemoveResponse,
    type ActionReplaceResponse as ActionReplaceResponse,
    type ActionAddParams as ActionAddParams,
    type ActionRemoveParams as ActionRemoveParams,
    type ActionReplaceParams as ActionReplaceParams,
  };
}
