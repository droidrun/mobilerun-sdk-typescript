// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Recordings extends APIResource {
  /**
   * List device recordings
   */
  list(
    deviceID: string,
    query: RecordingListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RecordingListResponse | null> {
    return this._client.get(path`/devices/${deviceID}/recordings`, { query, ...options });
  }

  /**
   * Delete a device recording
   */
  delete(recordingID: string, params: RecordingDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { deviceId } = params;
    return this._client.delete(path`/devices/${deviceId}/recordings/${recordingID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Start a device recording
   */
  start(
    deviceID: string,
    body: RecordingStartParams,
    options?: RequestOptions,
  ): APIPromise<RecordingStartResponse> {
    return this._client.post(path`/devices/${deviceID}/recordings`, { body, ...options });
  }

  /**
   * Get a device recording
   */
  status(
    recordingID: string,
    params: RecordingStatusParams,
    options?: RequestOptions,
  ): APIPromise<RecordingStatusResponse> {
    const { deviceId } = params;
    return this._client.get(path`/devices/${deviceId}/recordings/${recordingID}`, options);
  }

  /**
   * Stop a device recording
   */
  stop(
    recordingID: string,
    params: RecordingStopParams,
    options?: RequestOptions,
  ): APIPromise<RecordingStopResponse> {
    const { deviceId } = params;
    return this._client.post(path`/devices/${deviceId}/recordings/${recordingID}`, options);
  }

  /**
   * Get a device recording trajectory
   */
  trajectory(
    recordingID: string,
    params: RecordingTrajectoryParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { deviceId } = params;
    return this._client.get(path`/devices/${deviceId}/recordings/${recordingID}/trajectory`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a device recording video
   */
  video(recordingID: string, params: RecordingVideoParams, options?: RequestOptions): APIPromise<void> {
    const { deviceId } = params;
    return this._client.get(path`/devices/${deviceId}/recordings/${recordingID}/video`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type RecordingListResponse = Array<RecordingListResponse.RecordingListResponseItem>;

export namespace RecordingListResponse {
  export interface RecordingListResponseItem {
    id: string;

    actions: number;

    deviceId: string;

    display: RecordingListResponseItem.Display;

    expiresAt: string;

    name: string;

    startedAt: string;

    status: string;

    types: Array<string> | null;

    /**
     * A URL to the JSON Schema for this object.
     */
    $schema?: string;

    endedAt?: string;

    error?: string;

    video?: RecordingListResponseItem.Video;
  }

  export namespace RecordingListResponseItem {
    export interface Display {
      height: number;

      rotation: number;

      width: number;
    }

    export interface Video {
      durationMs: number;

      format: string;

      sizeBytes: number;

      limited?: boolean;

      limitReason?: string;
    }
  }
}

export interface RecordingStartResponse {
  id: string;

  actions: number;

  deviceId: string;

  display: RecordingStartResponse.Display;

  expiresAt: string;

  name: string;

  startedAt: string;

  status: string;

  types: Array<string> | null;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;

  endedAt?: string;

  error?: string;

  video?: RecordingStartResponse.Video;
}

export namespace RecordingStartResponse {
  export interface Display {
    height: number;

    rotation: number;

    width: number;
  }

  export interface Video {
    durationMs: number;

    format: string;

    sizeBytes: number;

    limited?: boolean;

    limitReason?: string;
  }
}

export interface RecordingStatusResponse {
  id: string;

  actions: number;

  deviceId: string;

  display: RecordingStatusResponse.Display;

  expiresAt: string;

  name: string;

  startedAt: string;

  status: string;

  types: Array<string> | null;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;

  endedAt?: string;

  error?: string;

  video?: RecordingStatusResponse.Video;
}

export namespace RecordingStatusResponse {
  export interface Display {
    height: number;

    rotation: number;

    width: number;
  }

  export interface Video {
    durationMs: number;

    format: string;

    sizeBytes: number;

    limited?: boolean;

    limitReason?: string;
  }
}

export interface RecordingStopResponse {
  id: string;

  actions: number;

  deviceId: string;

  display: RecordingStopResponse.Display;

  expiresAt: string;

  name: string;

  startedAt: string;

  status: string;

  types: Array<string> | null;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;

  endedAt?: string;

  error?: string;

  video?: RecordingStopResponse.Video;
}

export namespace RecordingStopResponse {
  export interface Display {
    height: number;

    rotation: number;

    width: number;
  }

  export interface Video {
    durationMs: number;

    format: string;

    sizeBytes: number;

    limited?: boolean;

    limitReason?: string;
  }
}

export interface RecordingListParams {
  status?: string;

  type?: string;
}

export interface RecordingDeleteParams {
  deviceId: string;
}

export interface RecordingStartParams {
  name?: string;

  retentionDays?: number;

  types?: Array<string> | null;
}

export interface RecordingStatusParams {
  deviceId: string;
}

export interface RecordingStopParams {
  deviceId: string;
}

export interface RecordingTrajectoryParams {
  deviceId: string;
}

export interface RecordingVideoParams {
  deviceId: string;
}

export declare namespace Recordings {
  export {
    type RecordingListResponse as RecordingListResponse,
    type RecordingStartResponse as RecordingStartResponse,
    type RecordingStatusResponse as RecordingStatusResponse,
    type RecordingStopResponse as RecordingStopResponse,
    type RecordingListParams as RecordingListParams,
    type RecordingDeleteParams as RecordingDeleteParams,
    type RecordingStartParams as RecordingStartParams,
    type RecordingStatusParams as RecordingStatusParams,
    type RecordingStopParams as RecordingStopParams,
    type RecordingTrajectoryParams as RecordingTrajectoryParams,
    type RecordingVideoParams as RecordingVideoParams,
  };
}
