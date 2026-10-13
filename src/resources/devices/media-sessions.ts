// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MediaSessionsAPI from './media-sessions';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MediaSessions extends APIResource {
  /**
   * Allocates an exclusive relay path and returns one-time publish and control
   * credentials. The relay publisher must be established before activation.
   */
  create(deviceID: string, body: MediaSessionCreateParams, options?: RequestOptions): APIPromise<MediaSessionCreateResponse> {
    return this._client.post(path`/devices/${deviceID}/media-sessions`, { body, ...options });
  }

  /**
   * Immediately revokes relay authorization, detaches virtual media inputs, and
   * kicks the relay publisher.
   */
  delete(sessionID: string, params: MediaSessionDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { deviceId, 'X-Media-Control-Token': xMediaControlToken } = params
    return this._client.delete(path`/devices/${deviceId}/media-sessions/${sessionID}`, { ...options, headers: buildHeaders([{Accept: '*/*', 'X-Media-Control-Token': xMediaControlToken}, options?.headers]) });
  }

  /**
   * Validates relay codecs and attaches one private RTSP source to either the
   * virtual microphone or the combined microphone-and-camera pipeline.
   */
  activate(sessionID: string, params: MediaSessionActivateParams, options?: RequestOptions): APIPromise<MediaSessionActivateResponse> {
    const { deviceId, 'X-Media-Control-Token': xMediaControlToken } = params
    return this._client.post(path`/devices/${deviceId}/media-sessions/${sessionID}/activate`, { ...options, headers: buildHeaders([{'X-Media-Control-Token': xMediaControlToken}, options?.headers]) });
  }

  /**
   * Returns status only. Publish URLs and credentials are never replayed after
   * creation.
   */
  retrieveCurrent(deviceID: string, options?: RequestOptions): APIPromise<MediaSessionRetrieveCurrentResponse> {
    return this._client.get(path`/devices/${deviceID}/media-sessions/current`, options);
  }
}

export interface MediaSessionCreateResponse {
  camera: boolean;

  controlToken: string;

  expiresAt: string;

  microphone: boolean;

  publishToken: string;

  publishUrl: string;

  sessionId: string;

  state: 'created' | 'publishing' | 'active' | 'stopping' | 'closed' | 'failed';

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface MediaSessionActivateResponse {
  camera: boolean;

  expiresAt: string;

  microphone: boolean;

  sessionId: string;

  state: 'created' | 'publishing' | 'active' | 'stopping' | 'closed' | 'failed';

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface MediaSessionRetrieveCurrentResponse {
  camera: boolean;

  expiresAt: string;

  microphone: boolean;

  sessionId: string;

  state: 'created' | 'publishing' | 'active' | 'stopping' | 'closed' | 'failed';

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export interface MediaSessionCreateParams {
  /**
   * Publish combined browser audio and H264 video into the device's virtual
   * microphone and camera. Requires microphone=true.
   */
  camera: boolean;

  /**
   * Publish browser audio into the device's virtual microphone.
   */
  microphone: boolean;
}

export interface MediaSessionDeleteParams {
  /**
   * Path param
   */
  deviceId: string;

  /**
   * Header param
   */
  'X-Media-Control-Token': string;
}

export interface MediaSessionActivateParams {
  /**
   * Path param
   */
  deviceId: string;

  /**
   * Header param
   */
  'X-Media-Control-Token': string;
}

export declare namespace MediaSessions {
  export {
    type MediaSessionCreateResponse as MediaSessionCreateResponse,
    type MediaSessionActivateResponse as MediaSessionActivateResponse,
    type MediaSessionRetrieveCurrentResponse as MediaSessionRetrieveCurrentResponse,
    type MediaSessionCreateParams as MediaSessionCreateParams,
    type MediaSessionDeleteParams as MediaSessionDeleteParams,
    type MediaSessionActivateParams as MediaSessionActivateParams
  };
}
