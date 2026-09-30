// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Notifications extends APIResource {
  /**
   * Replaces your muted event types with a server-computed preset: `recommended`
   * mutes the mobilerun-default noisy lifecycle/progress events, `failures` mutes
   * everything except failures/timeouts/invalid runs, and `everything` unmutes all.
   * The response returns the muted types that were actually stored.
   *
   * @example
   * ```ts
   * const response =
   *   await client.notifications.applyPreferencesPreset({
   *     preset: 'recommended',
   *   });
   * ```
   */
  applyPreferencesPreset(
    body: NotificationApplyPreferencesPresetParams,
    options?: RequestOptions,
  ): APIPromise<NotificationApplyPreferencesPresetResponse> {
    return this._client.post('/notifications/preferences/apply-preset', { body, ...options });
  }

  /**
   * Returns the catalog of notifiable event types grouped by source category. Each
   * event lists its type identifier, label, and description, which can be referenced
   * when muting event types in notification preferences.
   *
   * @example
   * ```ts
   * const response = await client.notifications.catalog();
   * ```
   */
  catalog(options?: RequestOptions): APIPromise<NotificationCatalogResponse> {
    return this._client.get('/notifications/catalog', options);
  }

  /**
   * Returns your current notification preferences, expressed as the list of event
   * types you have muted. An empty list means notifications are enabled for all
   * notifiable event types.
   *
   * @example
   * ```ts
   * const response =
   *   await client.notifications.getPreferences();
   * ```
   */
  getPreferences(options?: RequestOptions): APIPromise<NotificationGetPreferencesResponse> {
    return this._client.get('/notifications/preferences', options);
  }

  /**
   * Replaces your set of muted event types with the supplied list. Any unknown or
   * non-notifiable types are dropped, and the response returns the muted types that
   * were actually stored.
   *
   * @example
   * ```ts
   * const response =
   *   await client.notifications.updatePreferences({
   *     mutedTypes: [
   *       'workflow.run.running',
   *       'task.run.running',
   *     ],
   *   });
   * ```
   */
  updatePreferences(
    body: NotificationUpdatePreferencesParams,
    options?: RequestOptions,
  ): APIPromise<NotificationUpdatePreferencesResponse> {
    return this._client.patch('/notifications/preferences', { body, ...options });
  }
}

export interface NotificationApplyPreferencesPresetResponse {
  data: NotificationApplyPreferencesPresetResponse.Data;
}

export namespace NotificationApplyPreferencesPresetResponse {
  export interface Data {
    mutedTypes: Array<string>;
  }
}

export interface NotificationCatalogResponse {
  data: Array<NotificationCatalogResponse.Data>;
}

export namespace NotificationCatalogResponse {
  export interface Data {
    events: Array<Data.Event>;

    label: string;

    source: string;
  }

  export namespace Data {
    export interface Event {
      description: string;

      label: string;

      type: string;

      toast?: boolean;
    }
  }
}

export interface NotificationGetPreferencesResponse {
  data: NotificationGetPreferencesResponse.Data;
}

export namespace NotificationGetPreferencesResponse {
  export interface Data {
    mutedTypes: Array<string>;
  }
}

export interface NotificationUpdatePreferencesResponse {
  data: NotificationUpdatePreferencesResponse.Data;
}

export namespace NotificationUpdatePreferencesResponse {
  export interface Data {
    mutedTypes: Array<string>;
  }
}

export interface NotificationApplyPreferencesPresetParams {
  preset: 'recommended' | 'failures' | 'everything';
}

export interface NotificationUpdatePreferencesParams {
  mutedTypes: Array<string>;
}

export declare namespace Notifications {
  export {
    type NotificationApplyPreferencesPresetResponse as NotificationApplyPreferencesPresetResponse,
    type NotificationCatalogResponse as NotificationCatalogResponse,
    type NotificationGetPreferencesResponse as NotificationGetPreferencesResponse,
    type NotificationUpdatePreferencesResponse as NotificationUpdatePreferencesResponse,
    type NotificationApplyPreferencesPresetParams as NotificationApplyPreferencesPresetParams,
    type NotificationUpdatePreferencesParams as NotificationUpdatePreferencesParams,
  };
}
