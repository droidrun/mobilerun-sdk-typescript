// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Return the ordered list of actions attached to a flow, including any nested
   * child actions. Returns 404 if the flow does not exist.
   */
  list(flowID: string, options?: RequestOptions): APIPromise<ActionListResponse> {
    return this._client.get(path`/flows/${flowID}/actions`, options);
  }

  /**
   * Append a single action to a flow at the given `position`, optionally nesting it
   * under a `parentFlowActionId` or supplying its own `children`. Supports a
   * `nameOverride`, param `overrides`, and `continueOnError`. Returns 404 if the
   * flow does not exist.
   */
  add(flowID: string, body: ActionAddParams, options?: RequestOptions): APIPromise<ActionAddResponse> {
    return this._client.post(path`/flows/${flowID}/actions`, { body, ...options });
  }

  /**
   * Remove a single action from a flow by its `flowActionId`. Returns 404 if the
   * flow or flow action does not exist.
   */
  remove(flowActionID: string, params: ActionRemoveParams, options?: RequestOptions): APIPromise<ActionRemoveResponse> {
    const { flowId } = params
    return this._client.delete(path`/flows/${flowId}/actions/${flowActionID}`, options);
  }

  /**
   * Replace a flow's entire action list with the supplied set (at least one
   * required). Each action references an `actionId` and a unique `position`, and may
   * include nested `children`, a `nameOverride`, param `overrides`, and a
   * `continueOnError` flag. Returns 404 if the flow does not exist.
   */
  replace(flowID: string, body: ActionReplaceParams, options?: RequestOptions): APIPromise<ActionReplaceResponse> {
    return this._client.put(path`/flows/${flowID}/actions`, { body, ...options });
  }
}

export interface ActionListResponse {
  data: Array<ActionListResponse.Data>;
}

export namespace ActionListResponse {
  export interface Data {
    id: string;

    actionId: string;

    continueOnError: boolean;

    createdAt: string | null;

    flowId: string;

    nameOverride: string | null;

    overrides: Data.Overrides | null;

    parentFlowActionId: string | null;

    position: number;
  }

  export namespace Data {
    export interface Overrides {
      params?: { [key: string]: unknown };
    }
  }
}

export interface ActionAddResponse {
  data: ActionAddResponse.Data;
}

export namespace ActionAddResponse {
  export interface Data {
    id: string;

    actionId: string;

    continueOnError: boolean;

    createdAt: string | null;

    flowId: string;

    nameOverride: string | null;

    overrides: Data.Overrides | null;

    parentFlowActionId: string | null;

    position: number;
  }

  export namespace Data {
    export interface Overrides {
      params?: { [key: string]: unknown };
    }
  }
}

export interface ActionRemoveResponse {
  message: string;
}

export interface ActionReplaceResponse {
  data: Array<ActionReplaceResponse.Data>;
}

export namespace ActionReplaceResponse {
  export interface Data {
    id: string;

    actionId: string;

    continueOnError: boolean;

    createdAt: string | null;

    flowId: string;

    nameOverride: string | null;

    overrides: Data.Overrides | null;

    parentFlowActionId: string | null;

    position: number;
  }

  export namespace Data {
    export interface Overrides {
      params?: { [key: string]: unknown };
    }
  }
}

export interface ActionAddParams {
  actionId: string;

  position: number;

  children?: Array<ActionAddParams.Child>;

  continueOnError?: boolean;

  nameOverride?: string;

  overrides?: ActionAddParams.Overrides | null;

  parentFlowActionId?: string | null;
}

export namespace ActionAddParams {
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

export declare namespace Actions {
  export {
    type ActionListResponse as ActionListResponse,
    type ActionAddResponse as ActionAddResponse,
    type ActionRemoveResponse as ActionRemoveResponse,
    type ActionReplaceResponse as ActionReplaceResponse,
    type ActionAddParams as ActionAddParams,
    type ActionRemoveParams as ActionRemoveParams,
    type ActionReplaceParams as ActionReplaceParams
  };
}
