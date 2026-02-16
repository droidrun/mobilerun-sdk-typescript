// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as TasksAPI from './tasks/tasks';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Hooks extends APIResource {
  /**
   * Get a hook subscription by id.
   */
  retrieve(hookID: string, options?: RequestOptions): APIPromise<HookRetrieveResponse> {
    return this._client.get(path`/hooks/${hookID}`, options);
  }

  /**
   * Edit a hook subscription (events or state).
   *
   * Allows updating the events filter and/or the state of a hook.
   */
  update(hookID: string, body: HookUpdateParams, options?: RequestOptions): APIPromise<HookUpdateResponse> {
    return this._client.post(path`/hooks/${hookID}/edit`, { body, ...options });
  }

  /**
   * Get sample hook data for Zapier Perform List (testing/field mapping).
   */
  getSampleData(options?: RequestOptions): APIPromise<HookGetSampleDataResponse> {
    return this._client.get('/hooks/sample', options);
  }

  /**
   * Zapier Perform endpoint - processes webhook payloads.
   */
  perform(options?: RequestOptions): APIPromise<HookPerformResponse> {
    return this._client.post('/hooks/perform', options);
  }

  /**
   * Subscribe the current user to a webhook URL. Returns subscription id.
   */
  subscribe(body: HookSubscribeParams, options?: RequestOptions): APIPromise<HookSubscribeResponse> {
    return this._client.post('/hooks/subscribe', { body, ...options });
  }

  /**
   * Unsubscribe a previously created subscription by id.
   *
   * Permanently deletes the subscription if it belongs to the user.
   */
  unsubscribe(hookID: string, options?: RequestOptions): APIPromise<HookUnsubscribeResponse> {
    return this._client.post(path`/hooks/${hookID}/unsubscribe`, options);
  }
}

export interface HookRetrieveResponse {
  service: 'zapier' | 'n8n' | 'make' | 'internal' | 'other';

  url: string;

  userId: string;

  id?: string;

  createdAt?: string;

  events?: Array<TasksAPI.TaskStatus>;

  state?: 'active' | 'disabled' | 'deleted';

  updatedAt?: string;
}

/**
 * Response model after successfully editing a hook.
 */
export interface HookUpdateResponse {
  /**
   * The subscription ID
   */
  id: string;

  /**
   * The hook state
   */
  state: string;

  /**
   * Whether the hook was updated
   */
  updated: boolean;

  /**
   * The webhook URL
   */
  url: string;

  /**
   * List of subscribed events
   */
  events?: Array<string> | null;
}

export type HookGetSampleDataResponse = Array<HookGetSampleDataResponse.HookGetSampleDataResponseItem>;

export namespace HookGetSampleDataResponse {
  /**
   * Sample webhook event data for testing/mapping in Zapier.
   */
  export interface HookGetSampleDataResponseItem {
    /**
     * The subscription ID
     */
    id: string;

    /**
     * ISO timestamp of when the subscription was created
     */
    createdAt: string;

    /**
     * List of subscribed events
     */
    events: Array<string>;

    /**
     * The hook state
     */
    state: string;

    /**
     * The webhook URL
     */
    url: string;

    /**
     * ISO timestamp of the last update
     */
    updatedAt?: string | null;
  }
}

export type HookPerformResponse = Array<{ [key: string]: unknown }>;

/**
 * Response model after successful subscription.
 */
export interface HookSubscribeResponse {
  /**
   * The subscription ID
   */
  id: string;

  /**
   * Whether subscription was successful
   */
  subscribed: boolean;

  /**
   * The webhook URL
   */
  url: string;

  /**
   * List of subscribed events
   */
  events?: Array<string> | null;

  /**
   * Service that receives the webhook
   */
  service?: string | null;
}

/**
 * Response model after successful unsubscription.
 */
export interface HookUnsubscribeResponse {
  /**
   * The subscription ID
   */
  id: string;

  /**
   * Whether unsubscription was successful
   */
  unsubscribed: boolean;
}

export interface HookUpdateParams {
  /**
   * Updated list of events to subscribe to
   */
  events?: Array<string> | null;

  /**
   * Updated hook state (active, disabled, deleted)
   */
  state?: string | null;
}

export interface HookSubscribeParams {
  /**
   * The webhook URL to send notifications to
   */
  targetUrl: string;

  /**
   * List of task events to subscribe to (created, running, completed, failed,
   * cancelled, paused)
   */
  events?: Array<string> | null;

  /**
   * Service that receives the webhook
   */
  service?: string | null;
}

export declare namespace Hooks {
  export {
    type HookRetrieveResponse as HookRetrieveResponse,
    type HookUpdateResponse as HookUpdateResponse,
    type HookGetSampleDataResponse as HookGetSampleDataResponse,
    type HookPerformResponse as HookPerformResponse,
    type HookSubscribeResponse as HookSubscribeResponse,
    type HookUnsubscribeResponse as HookUnsubscribeResponse,
    type HookUpdateParams as HookUpdateParams,
    type HookSubscribeParams as HookSubscribeParams,
  };
}
