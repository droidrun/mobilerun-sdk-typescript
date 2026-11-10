// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ActionCatalog extends APIResource {
  /**
   * Fetch a single action catalog entry by its ID, including its service, method,
   * parameter schema, and `deviceFree` eligibility. Supports
   * `profile=agent_routine`; returns 404 if no entry matches or the entry is outside
   * that profile.
   */
  retrieve(
    catalogEntryID: string,
    query: ActionCatalogRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionCatalogRetrieveResponse> {
    return this._client.get(path`/action-catalog/${catalogEntryID}`, { query, ...options });
  }

  /**
   * Return a paginated list of catalog entries — the service/method templates that
   * actions are created from, each carrying its parameter schema and `deviceFree`
   * eligibility. Supports filtering by `service` and `profile=agent_routine`.
   */
  list(
    query: ActionCatalogListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionCatalogListResponse> {
    return this._client.get('/action-catalog', { query, ...options });
  }
}

export interface ActionCatalogRetrieveResponse {
  data: ActionCatalogRetrieveResponse.Data;
}

export namespace ActionCatalogRetrieveResponse {
  export interface Data {
    id: string;

    createdAt: string | null;

    description: string | null;

    /**
     * True when this step itself runs without a device; only such steps may appear in
     * a device-free flow. Not the same as cloudRoutine: a device-free step can still
     * be device-routine-only (see cloudRoutineReason).
     */
    deviceFree: boolean;

    method: string;

    name: string;

    provider: 'mobilerun' | 'oneDrive' | 'googleDrive';

    service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks' | 'integrations_api' | 'triggers_api';

    updatedAt: string | null;

    /**
     * True when this step is allowed in a cloud agent routine. Present only for
     * profile=agent_routine. False does not mean the step needs a device; read
     * cloudRoutineReason.
     */
    cloudRoutine?: boolean;

    /**
     * Why cloudRoutine is false: needs_device (the step needs a device),
     * device_routine_only (allowed only in device routines; the step itself does not
     * need a device). Present only when cloudRoutine is false.
     */
    cloudRoutineReason?: 'needs_device' | 'device_routine_only';

    outputSchema?: unknown;

    paramsSchema?: unknown;
  }
}

export interface ActionCatalogListResponse {
  items: Array<ActionCatalogListResponse.Item>;

  pagination: Shared.Pagination;
}

export namespace ActionCatalogListResponse {
  export interface Item {
    id: string;

    createdAt: string | null;

    description: string | null;

    /**
     * True when this step itself runs without a device; only such steps may appear in
     * a device-free flow. Not the same as cloudRoutine: a device-free step can still
     * be device-routine-only (see cloudRoutineReason).
     */
    deviceFree: boolean;

    method: string;

    name: string;

    provider: 'mobilerun' | 'oneDrive' | 'googleDrive';

    service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks' | 'integrations_api' | 'triggers_api';

    updatedAt: string | null;

    /**
     * True when this step is allowed in a cloud agent routine. Present only for
     * profile=agent_routine. False does not mean the step needs a device; read
     * cloudRoutineReason.
     */
    cloudRoutine?: boolean;

    /**
     * Why cloudRoutine is false: needs_device (the step needs a device),
     * device_routine_only (allowed only in device routines; the step itself does not
     * need a device). Present only when cloudRoutine is false.
     */
    cloudRoutineReason?: 'needs_device' | 'device_routine_only';

    outputSchema?: unknown;

    paramsSchema?: unknown;
  }
}

export interface ActionCatalogRetrieveParams {
  /**
   * Restrict reads to the agent routine step surface.
   */
  profile?: 'agent_routine';
}

export interface ActionCatalogListParams {
  page?: number;

  pageSize?: number;

  /**
   * Restrict reads to the agent routine step surface.
   */
  profile?: 'agent_routine';

  service?: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks' | 'integrations_api' | 'triggers_api';
}

export declare namespace ActionCatalog {
  export {
    type ActionCatalogRetrieveResponse as ActionCatalogRetrieveResponse,
    type ActionCatalogListResponse as ActionCatalogListResponse,
    type ActionCatalogRetrieveParams as ActionCatalogRetrieveParams,
    type ActionCatalogListParams as ActionCatalogListParams,
  };
}
