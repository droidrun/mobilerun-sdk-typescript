// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Integrations extends APIResource {
  /**
   * Returns the integrations that can receive webhook events as channel messages
   * (e.g. Slack), with your org's connection state for each. Connect an integration
   * in the Cloud app before creating a webhook for it.
   */
  list(options?: RequestOptions): APIPromise<IntegrationListResponse> {
    return this._client.get('/webhooks/integrations', options);
  }

  /**
   * Returns the live list of targets (e.g. Slack channels the connected account is a
   * member of) for an integration. Pass a target's `args` together with the
   * integration `capability` to `POST /webhooks` with `kind: "integration"`.
   */
  listTargets(
    capabilityID: string,
    query: IntegrationListTargetsParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationListTargetsResponse> {
    return this._client.get(path`/webhooks/integrations/${capabilityID}/targets`, { query, ...options });
  }
}

export interface IntegrationListResponse {
  data: Array<IntegrationListResponse.Data>;
}

export namespace IntegrationListResponse {
  export interface Data {
    capability: Data.Capability;

    /**
     * Connection state for your org. Only `connected` integrations can be used as a
     * destination.
     */
    connection: 'connected' | 'not_connected' | 'expired';

    /**
     * Opaque key for the Cloud connect dialog.
     */
    connectKey: string;

    /**
     * True for the previous revision during a switch; prefer the non-deprecated one.
     */
    deprecated: boolean;

    /**
     * Server-resolved brand logo URL; null when unknown. Show this instead of deriving
     * a logo from connectKey.
     */
    iconUrl: string | null;

    label: string;

    /**
     * True when targets (e.g. channels) can be listed via
     * `GET /webhooks/integrations/{capabilityId}/targets`.
     */
    supportsTargets: boolean;
  }

  export namespace Data {
    export interface Capability {
      id: string;

      revision: number;
    }
  }
}

export interface IntegrationListTargetsResponse {
  data: Array<IntegrationListTargetsResponse.Data>;
}

export namespace IntegrationListTargetsResponse {
  export interface Data {
    /**
     * Pass as `args` when creating an `integration` webhook.
     */
    args: { [key: string]: unknown };

    isPrivate: boolean;

    label: string;
  }
}

export interface IntegrationListTargetsParams {
  revision: number;
}

export declare namespace Integrations {
  export {
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationListTargetsResponse as IntegrationListTargetsResponse,
    type IntegrationListTargetsParams as IntegrationListTargetsParams,
  };
}
