// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EsimsAPI from './esims';
import * as Shared from '../shared';
import * as MessagesAPI from './messages';
import { MessageListParams, MessageListResponse, MessageSendParams, MessageSendResponse, Messages } from './messages';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Esims extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Purchases a physical eSIM from available inventory for the authenticated owner.
   * Returns 409 when no stock is available, or 402 with a billing checkout URL when
   * billing capacity is exhausted.
   *
   * @example
   * ```ts
   * const esim = await client.esims.create();
   * ```
   */
  create(body: EsimCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<EsimCreateResponse> {
    return this._client.post('/numbers/esims', { body, ...options });
  }

  /**
   * Retrieves a single physical eSIM.
   *
   * @example
   * ```ts
   * const esim = await client.esims.retrieve(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EsimRetrieveResponse> {
    return this._client.get(path`/numbers/esims/${id}`, options);
  }

  /**
   * Updates the eSIM's self-reported msisdn and/or display name. Both fields are
   * optional, but the request body itself is required. Omitting a field leaves it
   * unchanged; setting it to null or an empty string clears it. `name` is capped at
   * 15 characters. Available regardless of the eSIM's current status.
   *
   * @example
   * ```ts
   * const esim = await client.esims.update(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  update(id: string, body: EsimUpdateParams | null | undefined = {}, options?: RequestOptions): APIPromise<EsimUpdateResponse> {
    return this._client.patch(path`/numbers/esims/${id}`, { body, ...options });
  }

  /**
   * Lists physical eSIMs owned by the authenticated owner.
   *
   * @example
   * ```ts
   * const esims = await client.esims.list();
   * ```
   */
  list(query: EsimListParams | null | undefined = {}, options?: RequestOptions): APIPromise<EsimListResponse> {
    return this._client.get('/numbers/esims', { query, ...options });
  }

  /**
   * Removes a physical eSIM. Idempotent — returns 204 for a fresh removal or a
   * replay of an already-removed eSIM. An eSIM currently installed on a device is
   * uninstalled first, then removed. An eSIM in an intermediate install state
   * returns 409 `operator_resolution_required` and requires manual resolution.
   * Returns 404 if the eSIM doesn't exist or isn't owned by the caller.
   *
   * @example
   * ```ts
   * await client.esims.delete(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/numbers/esims/${id}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  /**
   * Reports whether a free device is currently available, for pre-checking the
   * import flow before upload. This is a hint only, not a reservation —
   * `POST /esims/import` re-checks availability at submit time.
   *
   * @example
   * ```ts
   * const response = await client.esims.capacity();
   * ```
   */
  capacity(options?: RequestOptions): APIPromise<EsimCapacityResponse> {
    return this._client.get('/numbers/esims/capacity', options);
  }

  /**
   * Checks for proof of payment for this eSIM's current rent and confirms it if
   * found. If no proof is available yet, returns 200 with the eSIM unchanged rather
   * than an error. Always returns the current eSIM state.
   *
   * @example
   * ```ts
   * const response = await client.esims.confirmPayment(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  confirmPayment(id: string, options?: RequestOptions): APIPromise<EsimConfirmPaymentResponse> {
    return this._client.post(path`/numbers/esims/${id}/confirm-payment`, options);
  }

  /**
   * Registers a bring-your-own (BYO) eSIM activation code as owned inventory.
   * Provide either `{ smdpAddress, matchingId?, confirmationCode? }` or
   * `{ lpaCode }` — supplying both, or neither, returns 400. An optional `name` sets
   * a display label on the created eSIM (up to 15 characters).
   *
   * Subject to per-owner and daily import limits, and disabled entirely unless BYO
   * imports are enabled for this deployment (409 `byo_disabled`). Idempotent via
   * `idempotencyKey`: replaying the same key with an identical request returns the
   * original response; the same key with a different request returns 409
   * `idempotency_conflict`.
   *
   * When rent-first billing is off (default), the import is free — 201 with the
   * eSIM. Setting `autoInstall: true` additionally dispatches an install immediately
   * after import (`deviceId` may only be set together with `autoInstall`): this
   * returns 202 with `{esim, operationId, statusUrl}` when the install claim
   * succeeds (poll `GET /esims/{id}/install-status`), or 201 with the eSIM plus
   * `installDispatch: {ok: false, reason}` when the install could not be dispatched
   * — the import itself still succeeds either way.
   *
   * When rent-first billing is on, import additionally requires available device
   * capacity (409 `device_pool_empty`) and is subject to a per-owner
   * awaiting-payment cap (409 `byo_awaiting_payment_cap`). On success the eSIM is
   * created `awaiting_payment` and a checkout is started: 201 with
   * `{esim, rentStatus, checkoutUrl}` when the checkout URL is ready immediately, or
   * 202 with `checkoutUrl: null` otherwise — poll `GET /esims/{id}` until it's
   * populated. Once payment is confirmed, install is triggered automatically.
   *
   * @example
   * ```ts
   * const response = await client.esims.import();
   * ```
   */
  import(body: EsimImportParams | null | undefined = {}, options?: RequestOptions): APIPromise<EsimImportResponse> {
    return this._client.post('/numbers/esims/import', { body, ...options });
  }

  /**
   * Installs the eSIM's activation code onto a device. `deviceId` is optional — omit
   * it to use an available device from the pool. This call is asynchronous: it
   * returns 202 with `{esim, operationId, statusUrl}` immediately, and the result is
   * available by polling `GET /esims/{id}/install-status`. Retrying with the same
   * request is safe if a response is lost.
   *
   * Returns 409 when the eSIM is not in the `owned` state, or when no device is
   * currently available (see `reason`). When rent-first billing is enabled, a BYO
   * eSIM whose rent isn't active returns 402 with `{esim, rentStatus, checkoutUrl}`
   * instead.
   *
   * @example
   * ```ts
   * const response = await client.esims.install(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  install(id: string, body: EsimInstallParams | null | undefined = {}, options?: RequestOptions): APIPromise<EsimInstallResponse> {
    return this._client.post(path`/numbers/esims/${id}/install`, { body, ...options });
  }

  /**
   * Returns the eSIM's current install status, checking for a terminal outcome if an
   * install is still in progress.
   *
   * @example
   * ```ts
   * const response = await client.esims.installStatus(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  installStatus(id: string, options?: RequestOptions): APIPromise<EsimInstallStatusResponse> {
    return this._client.get(path`/numbers/esims/${id}/install-status`, options);
  }

  /**
   * Returns a lightweight list (id, msisdn, carrierName, status, masked iccid) for
   * use in a message filter dropdown. Unlike `GET /esims`, this includes all
   * statuses, including retired eSIMs, and is not paginated.
   *
   * @example
   * ```ts
   * const response = await client.esims.selector();
   * ```
   */
  selector(options?: RequestOptions): APIPromise<EsimSelectorResponse> {
    return this._client.get('/numbers/esims/selector', options);
  }
}

export interface EsimCreateResponse {
  data: EsimCreateResponse.Data;
}

export namespace EsimCreateResponse {
  export interface Data {
    id: string;

    carrierName: string | null;

    countryCode: string | null;

    createdAt: string | null;

    createdBy: string | null;

    deviceId: string | null;

    deviceUuid: string | null;

    iccid: string | null;

    msisdn: string | null;

    name: string | null;

    networkStatus: 'degraded' | null;

    source: 'stocked' | 'byo';

    status: 'in_stock' | 'owned' | 'installing' | 'installed' | 'install_failed' | 'retired';

    subscriptionId: number | null;

    updatedAt: string | null;

    cancellationScheduled?: boolean;

    checkoutUrl?: string | null;

    currentPeriodEnd?: string | null;

    exempt?: boolean;

    rentStatus?: 'not_applicable' | 'exempt' | 'inactive' | 'awaiting_payment' | 'active' | 'cancel_pending' | 'refund_pending' | 'retiring' | 'billing_error';
  }
}

export interface EsimRetrieveResponse {
  data: EsimRetrieveResponse.Data;
}

export namespace EsimRetrieveResponse {
  export interface Data {
    id: string;

    carrierName: string | null;

    countryCode: string | null;

    createdAt: string | null;

    createdBy: string | null;

    deviceId: string | null;

    deviceUuid: string | null;

    iccid: string | null;

    msisdn: string | null;

    name: string | null;

    networkStatus: 'degraded' | null;

    source: 'stocked' | 'byo';

    status: 'in_stock' | 'owned' | 'installing' | 'installed' | 'install_failed' | 'retired';

    subscriptionId: number | null;

    updatedAt: string | null;

    cancellationScheduled?: boolean;

    checkoutUrl?: string | null;

    currentPeriodEnd?: string | null;

    exempt?: boolean;

    rentStatus?: 'not_applicable' | 'exempt' | 'inactive' | 'awaiting_payment' | 'active' | 'cancel_pending' | 'refund_pending' | 'retiring' | 'billing_error';
  }
}

export interface EsimUpdateResponse {
  data: EsimUpdateResponse.Data;
}

export namespace EsimUpdateResponse {
  export interface Data {
    id: string;

    carrierName: string | null;

    countryCode: string | null;

    createdAt: string | null;

    createdBy: string | null;

    deviceId: string | null;

    deviceUuid: string | null;

    iccid: string | null;

    msisdn: string | null;

    name: string | null;

    networkStatus: 'degraded' | null;

    source: 'stocked' | 'byo';

    status: 'in_stock' | 'owned' | 'installing' | 'installed' | 'install_failed' | 'retired';

    subscriptionId: number | null;

    updatedAt: string | null;

    cancellationScheduled?: boolean;

    checkoutUrl?: string | null;

    currentPeriodEnd?: string | null;

    exempt?: boolean;

    rentStatus?: 'not_applicable' | 'exempt' | 'inactive' | 'awaiting_payment' | 'active' | 'cancel_pending' | 'refund_pending' | 'retiring' | 'billing_error';
  }
}

export interface EsimListResponse {
  data: EsimListResponse.Data;
}

export namespace EsimListResponse {
  export interface Data {
    items: Array<Data.Item>;

    pagination: Shared.Pagination;
  }

  export namespace Data {
    export interface Item {
      id: string;

      carrierName: string | null;

      countryCode: string | null;

      createdAt: string | null;

      createdBy: string | null;

      deviceId: string | null;

      deviceUuid: string | null;

      iccid: string | null;

      msisdn: string | null;

      name: string | null;

      networkStatus: 'degraded' | null;

      source: 'stocked' | 'byo';

      status: 'in_stock' | 'owned' | 'installing' | 'installed' | 'install_failed' | 'retired';

      subscriptionId: number | null;

      updatedAt: string | null;

      cancellationScheduled?: boolean;

      checkoutUrl?: string | null;

      currentPeriodEnd?: string | null;

      exempt?: boolean;

      rentStatus?: 'not_applicable' | 'exempt' | 'inactive' | 'awaiting_payment' | 'active' | 'cancel_pending' | 'refund_pending' | 'retiring' | 'billing_error';
    }
  }
}

export interface EsimCapacityResponse {
  data: EsimCapacityResponse.Data;
}

export namespace EsimCapacityResponse {
  export interface Data {
    available: boolean;

    freeDevices: number;
  }
}

export interface EsimConfirmPaymentResponse {
  data: EsimConfirmPaymentResponse.Data;
}

export namespace EsimConfirmPaymentResponse {
  export interface Data {
    id: string;

    carrierName: string | null;

    countryCode: string | null;

    createdAt: string | null;

    createdBy: string | null;

    deviceId: string | null;

    deviceUuid: string | null;

    iccid: string | null;

    msisdn: string | null;

    name: string | null;

    networkStatus: 'degraded' | null;

    source: 'stocked' | 'byo';

    status: 'in_stock' | 'owned' | 'installing' | 'installed' | 'install_failed' | 'retired';

    subscriptionId: number | null;

    updatedAt: string | null;

    cancellationScheduled?: boolean;

    checkoutUrl?: string | null;

    currentPeriodEnd?: string | null;

    exempt?: boolean;

    rentStatus?: 'not_applicable' | 'exempt' | 'inactive' | 'awaiting_payment' | 'active' | 'cancel_pending' | 'refund_pending' | 'retiring' | 'billing_error';
  }
}

export interface EsimImportResponse {
  data: EsimImportResponse.PublicEsim | EsimImportResponse.EsimAwaitingPaymentResponse | EsimImportResponse.EsimImportInstallDispatchFailedResponse;
}

export namespace EsimImportResponse {
  export interface PublicEsim {
    id: string;

    carrierName: string | null;

    countryCode: string | null;

    createdAt: string | null;

    createdBy: string | null;

    deviceId: string | null;

    deviceUuid: string | null;

    iccid: string | null;

    msisdn: string | null;

    name: string | null;

    networkStatus: 'degraded' | null;

    source: 'stocked' | 'byo';

    status: 'in_stock' | 'owned' | 'installing' | 'installed' | 'install_failed' | 'retired';

    subscriptionId: number | null;

    updatedAt: string | null;

    cancellationScheduled?: boolean;

    checkoutUrl?: string | null;

    currentPeriodEnd?: string | null;

    exempt?: boolean;

    rentStatus?: 'not_applicable' | 'exempt' | 'inactive' | 'awaiting_payment' | 'active' | 'cancel_pending' | 'refund_pending' | 'retiring' | 'billing_error';
  }

  export interface EsimAwaitingPaymentResponse {
    checkoutUrl: string | null;

    esim: EsimAwaitingPaymentResponse.Esim;

    rentStatus: 'awaiting_payment';
  }

  export namespace EsimAwaitingPaymentResponse {
    export interface Esim {
      id: string;

      carrierName: string | null;

      countryCode: string | null;

      createdAt: string | null;

      createdBy: string | null;

      deviceId: string | null;

      deviceUuid: string | null;

      iccid: string | null;

      msisdn: string | null;

      name: string | null;

      networkStatus: 'degraded' | null;

      source: 'stocked' | 'byo';

      status: 'in_stock' | 'owned' | 'installing' | 'installed' | 'install_failed' | 'retired';

      subscriptionId: number | null;

      updatedAt: string | null;

      cancellationScheduled?: boolean;

      checkoutUrl?: string | null;

      currentPeriodEnd?: string | null;

      exempt?: boolean;

      rentStatus?: 'not_applicable' | 'exempt' | 'inactive' | 'awaiting_payment' | 'active' | 'cancel_pending' | 'refund_pending' | 'retiring' | 'billing_error';
    }
  }

  export interface EsimImportInstallDispatchFailedResponse {
    id: string;

    carrierName: string | null;

    countryCode: string | null;

    createdAt: string | null;

    createdBy: string | null;

    deviceId: string | null;

    deviceUuid: string | null;

    iccid: string | null;

    installDispatch: EsimImportInstallDispatchFailedResponse.InstallDispatch;

    msisdn: string | null;

    name: string | null;

    networkStatus: 'degraded' | null;

    source: 'stocked' | 'byo';

    status: 'in_stock' | 'owned' | 'installing' | 'installed' | 'install_failed' | 'retired';

    subscriptionId: number | null;

    updatedAt: string | null;

    cancellationScheduled?: boolean;

    checkoutUrl?: string | null;

    currentPeriodEnd?: string | null;

    exempt?: boolean;

    rentStatus?: 'not_applicable' | 'exempt' | 'inactive' | 'awaiting_payment' | 'active' | 'cancel_pending' | 'refund_pending' | 'retiring' | 'billing_error';
  }

  export namespace EsimImportInstallDispatchFailedResponse {
    export interface InstallDispatch {
      ok: false;

      reason: string;
    }
  }
}

export interface EsimInstallResponse {
  data: EsimInstallResponse.Data;
}

export namespace EsimInstallResponse {
  export interface Data {
    id: string;

    carrierName: string | null;

    countryCode: string | null;

    createdAt: string | null;

    createdBy: string | null;

    deviceId: string | null;

    deviceUuid: string | null;

    iccid: string | null;

    msisdn: string | null;

    name: string | null;

    networkStatus: 'degraded' | null;

    source: 'stocked' | 'byo';

    status: 'in_stock' | 'owned' | 'installing' | 'installed' | 'install_failed' | 'retired';

    subscriptionId: number | null;

    updatedAt: string | null;

    cancellationScheduled?: boolean;

    checkoutUrl?: string | null;

    currentPeriodEnd?: string | null;

    exempt?: boolean;

    rentStatus?: 'not_applicable' | 'exempt' | 'inactive' | 'awaiting_payment' | 'active' | 'cancel_pending' | 'refund_pending' | 'retiring' | 'billing_error';
  }
}

export interface EsimInstallStatusResponse {
  data: EsimInstallStatusResponse.Data;
}

export namespace EsimInstallStatusResponse {
  export interface Data {
    esim: Data.Esim;

    operationId: string | null;

    status: 'installing' | 'pending_download' | 'downloading' | 'downloaded' | 'enabling' | 'configuring_apn' | 'active' | 'download_failed' | 'enable_failed' | 'download_outcome_unknown' | 'install_failed' | 'physical_removal_unconfirmed' | 'deleted' | null;
  }

  export namespace Data {
    export interface Esim {
      id: string;

      carrierName: string | null;

      countryCode: string | null;

      createdAt: string | null;

      createdBy: string | null;

      deviceId: string | null;

      deviceUuid: string | null;

      iccid: string | null;

      msisdn: string | null;

      name: string | null;

      networkStatus: 'degraded' | null;

      source: 'stocked' | 'byo';

      status: 'in_stock' | 'owned' | 'installing' | 'installed' | 'install_failed' | 'retired';

      subscriptionId: number | null;

      updatedAt: string | null;

      cancellationScheduled?: boolean;

      checkoutUrl?: string | null;

      currentPeriodEnd?: string | null;

      exempt?: boolean;

      rentStatus?: 'not_applicable' | 'exempt' | 'inactive' | 'awaiting_payment' | 'active' | 'cancel_pending' | 'refund_pending' | 'retiring' | 'billing_error';
    }
  }
}

export interface EsimSelectorResponse {
  data: EsimSelectorResponse.Data;
}

export namespace EsimSelectorResponse {
  export interface Data {
    items: Array<Data.Item>;
  }

  export namespace Data {
    export interface Item {
      id: string;

      carrierName: string | null;

      iccid: string | null;

      msisdn: string | null;

      name: string | null;

      source: 'stocked' | 'byo';

      status: 'in_stock' | 'owned' | 'installing' | 'installed' | 'install_failed' | 'retired';
    }
  }
}

export interface EsimCreateParams {
  /**
   * Client-supplied key; replaying the same key returns the original purchase
   * instead of buying again
   */
  idempotencyKey?: string;
}

export interface EsimUpdateParams {
  /**
   * Self-reported E.164 MSISDN for this eSIM's line. Omit to leave unchanged;
   * null/empty clears it. An unverified label — never used for routing.
   */
  msisdn?: string | null;

  /**
   * User-defined display label — NFC-normalized, up to 15 GRAPHEMES (not UTF-16 code
   * units; an emoji/flag may span several). Omit to leave unchanged;
   * null/empty/whitespace-only clears it.
   */
  name?: string | null;
}

export interface EsimListParams {
  /**
   * Only include eSIMs created by the calling actor.
   */
  mine?: 'true' | 'false';

  page?: number;

  pageSize?: number;

  status?: 'all' | 'in_stock' | 'owned' | 'installing' | 'installed' | 'install_failed' | 'retired';
}

export interface EsimImportParams {
  /**
   * Rent OFF only: dispatch install-on-device immediately after a successful import.
   * No-op when ESIM_BYO_RENT_ENABLED=true.
   */
  autoInstall?: boolean;

  carrierName?: string;

  confirmationCode?: string;

  countryCode?: string;

  /**
   * physedge device id to auto-install onto; requires autoInstall:true and rent OFF.
   * Omit for a random pool device.
   */
  deviceId?: string;

  /**
   * Client-supplied key; replaying the same key+request returns the original import
   * instead of importing again
   */
  idempotencyKey?: string;

  /**
   * Full LPA activation code
   */
  lpaCode?: string;

  matchingId?: string;

  /**
   * Self-reported E.164 MSISDN for this eSIM's line — an unverified label, never
   * used for routing
   */
  msisdn?: string;

  /**
   * User-defined display label — NFC-normalized, up to 15 GRAPHEMES (not UTF-16 code
   * units; an emoji/flag may span several). Omit/null/empty/whitespace-only leaves
   * it unset.
   */
  name?: string | null;

  notes?: string;

  /**
   * SM-DP+ activation host — bare hostname ONLY, no port/scheme/path.
   */
  smdpAddress?: string;
}

export interface EsimInstallParams {
  /**
   * physedge device id to install the eSIM onto; omit for a random pool device
   */
  deviceId?: string;
}

Esims.Messages = Messages;

export declare namespace Esims {
  export {
    type EsimCreateResponse as EsimCreateResponse,
    type EsimRetrieveResponse as EsimRetrieveResponse,
    type EsimUpdateResponse as EsimUpdateResponse,
    type EsimListResponse as EsimListResponse,
    type EsimCapacityResponse as EsimCapacityResponse,
    type EsimConfirmPaymentResponse as EsimConfirmPaymentResponse,
    type EsimImportResponse as EsimImportResponse,
    type EsimInstallResponse as EsimInstallResponse,
    type EsimInstallStatusResponse as EsimInstallStatusResponse,
    type EsimSelectorResponse as EsimSelectorResponse,
    type EsimCreateParams as EsimCreateParams,
    type EsimUpdateParams as EsimUpdateParams,
    type EsimListParams as EsimListParams,
    type EsimImportParams as EsimImportParams,
    type EsimInstallParams as EsimInstallParams
  };

  export {
    Messages as Messages,
    type MessageListResponse as MessageListResponse,
    type MessageSendResponse as MessageSendResponse,
    type MessageListParams as MessageListParams,
    type MessageSendParams as MessageSendParams
  };
}
