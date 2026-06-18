// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FlowsAPI from './flows';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * List actions for a flow
   */
  list(flowID: string, options?: RequestOptions): APIPromise<ActionListResponse> {
    return this._client.get(path`/flows/${flowID}/actions`, options);
  }

  /**
   * Add an action to a flow
   */
  add(flowID: string, body: ActionAddParams, options?: RequestOptions): APIPromise<ActionAddResponse> {
    return this._client.post(path`/flows/${flowID}/actions`, { body, ...options });
  }

  /**
   * Remove an action from a flow
   */
  remove(
    flowActionID: string,
    params: ActionRemoveParams,
    options?: RequestOptions,
  ): APIPromise<ActionRemoveResponse> {
    const { flowId } = params;
    return this._client.delete(path`/flows/${flowId}/actions/${flowActionID}`, options);
  }

  /**
   * Replace all actions for a flow
   */
  replace(
    flowID: string,
    body: ActionReplaceParams,
    options?: RequestOptions,
  ): APIPromise<ActionReplaceResponse> {
    return this._client.put(path`/flows/${flowID}/actions`, { body, ...options });
  }
}

export interface FlowAction {
  id: string;

  actionId: string;

  continueOnError: boolean;

  createdAt: string | null;

  deviceId: string | null;

  flowId: string;

  nameOverride: string | null;

  overrides: FlowAction.Overrides | null;

  parentFlowActionId: string | null;

  position: number;
}

export namespace FlowAction {
  export interface Overrides {
    params?: { [key: string]: unknown };
  }
}

export interface ActionListResponse {
  data: Array<FlowAction>;
}

export interface ActionAddResponse {
  data: FlowAction;
}

export interface ActionRemoveResponse {
  message: string;
}

export interface ActionReplaceResponse {
  data: Array<FlowAction>;
}

export interface ActionAddParams {
  actionId: string;

  position: number;

  children?: Array<FlowsAPI.FlowChildActionInput>;

  continueOnError?: boolean;

  deviceId?: string;

  nameOverride?: string;

  overrides?: FlowsAPI.FlowActionOverrides | null;

  parentFlowActionId?: string | null;
}

export interface ActionRemoveParams {
  flowId: string;
}

export interface ActionReplaceParams {
  actions: Array<ActionReplaceParams.Action>;
}

export namespace ActionReplaceParams {
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

export declare namespace Actions {
  export {
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
