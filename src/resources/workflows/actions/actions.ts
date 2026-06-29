// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as ServicesAPI from './services';
import { ServiceListMethodsResponse, ServiceListResponse, Services } from './services';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Actions extends APIResource {
  services: ServicesAPI.Services = new ServicesAPI.Services(this._client);

  /**
   * Create a reusable action from a catalog entry (`catalogEntryId`), with an
   * optional `params` object supplying the values for that entry's service method.
   * Returns 400 if the params are invalid for the chosen catalog entry.
   */
  create(body: ActionCreateParams, options?: RequestOptions): APIPromise<ActionCreateResponse> {
    return this._client.post('/actions', { body, ...options });
  }

  /**
   * Fetch a single action by its ID, including its configured service, method, and
   * params. Returns 404 if no action matches.
   */
  retrieve(actionID: string, options?: RequestOptions): APIPromise<ActionRetrieveResponse> {
    return this._client.get(path`/actions/${actionID}`, options);
  }

  /**
   * Partially update an action's name, description, or params; all fields are
   * optional. Returns 404 if the action does not exist.
   */
  update(
    actionID: string,
    body: ActionUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionUpdateResponse> {
    return this._client.patch(path`/actions/${actionID}`, { body, ...options });
  }

  /**
   * Return a paginated list of actions. Supports filtering by `service`, free-text
   * `search`, and ordering by name, createdAt, or updatedAt.
   */
  list(
    query: ActionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionListResponse> {
    return this._client.get('/actions', { query, ...options });
  }

  /**
   * Delete an action by its ID. Returns 404 if no action matches.
   */
  delete(actionID: string, options?: RequestOptions): APIPromise<ActionDeleteResponse> {
    return this._client.delete(path`/actions/${actionID}`, options);
  }
}

export interface Action {
  id: string;

  catalogEntryId: string;

  createdAt: string | null;

  description: string | null;

  method: string;

  name: string;

  service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks';

  updatedAt: string | null;

  userId: string;

  params?: unknown;

  paramsSchema?: unknown;
}

export interface ActionCreateResponse {
  data: Action;
}

export interface ActionRetrieveResponse {
  data: Action;
}

export interface ActionUpdateResponse {
  data: Action;
}

export interface ActionListResponse {
  items: Array<Action>;

  pagination: Shared.Pagination;
}

export interface ActionDeleteResponse {
  message: string;
}

export interface ActionCreateParams {
  catalogEntryId: string;

  name: string;

  description?: string;

  params?: { [key: string]: unknown };
}

export interface ActionUpdateParams {
  description?: string;

  name?: string;

  params?: { [key: string]: unknown };
}

export interface ActionListParams {
  orderBy?: 'name' | 'createdAt' | 'updatedAt';

  orderByDirection?: 'asc' | 'desc';

  page?: number;

  pageSize?: number;

  search?: string;

  service?: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks';
}

Actions.Services = Services;

export declare namespace Actions {
  export {
    type Action as Action,
    type ActionCreateResponse as ActionCreateResponse,
    type ActionRetrieveResponse as ActionRetrieveResponse,
    type ActionUpdateResponse as ActionUpdateResponse,
    type ActionListResponse as ActionListResponse,
    type ActionDeleteResponse as ActionDeleteResponse,
    type ActionCreateParams as ActionCreateParams,
    type ActionUpdateParams as ActionUpdateParams,
    type ActionListParams as ActionListParams,
  };

  export {
    Services as Services,
    type ServiceListResponse as ServiceListResponse,
    type ServiceListMethodsResponse as ServiceListMethodsResponse,
  };
}
