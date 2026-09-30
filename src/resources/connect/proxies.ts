// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Proxies extends APIResource {
  /**
   * Returns the proxy identified by the path ID. The response includes the proxy's
   * password.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ProxyRetrieveResponse> {
    return this._client.get(path`/connect/proxies/${id}`, options);
  }

  /**
   * Renames the proxy identified by the path ID.
   */
  update(id: string, body: ProxyUpdateParams, options?: RequestOptions): APIPromise<ProxyUpdateResponse> {
    return this._client.patch(path`/connect/proxies/${id}`, { body, ...options });
  }

  /**
   * Returns proxies owned by the calling tenant (the X-Owner-Id header, falling back
   * to X-User-ID). Credentials are omitted from the list.
   */
  list(
    query: ProxyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProxyListResponse> {
    return this._client.get('/connect/proxies', { query, ...options });
  }

  /**
   * Provisions a proxy of the requested type for the caller in the selected country.
   */
  buy(body: ProxyBuyParams, options?: RequestOptions): APIPromise<ProxyBuyResponse> {
    return this._client.post('/connect/proxies', { body, ...options });
  }

  /**
   * Deletes the proxy identified by the path ID and releases its provisioning.
   * Returns 404 if no such proxy exists for the caller.
   */
  cancel(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/connect/proxies/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Checks right now that the proxy's upstream accepts a connection through its
   * current session. If the upstream refuses the session and the proxy is a rotating
   * (sticky-session) proxy, the proxy is moved onto a fresh session that has been
   * checked to work; its credentials and country stay the same, its exit IP changes.
   * Intended for callers that are about to depend on the proxy (e.g. while
   * provisioning a phone). After `rotated`, the gateway uses the new session within
   * about 30 seconds. A `refused` or `unreachable` result is not an error: the
   * response describes the proxy's state.
   */
  ensureHealthy(id: string, options?: RequestOptions): APIPromise<ProxyEnsureHealthyResponse> {
    return this._client.post(path`/connect/proxies/${id}/ensure-healthy`, options);
  }

  /**
   * Returns the connection history recorded for this proxy, one item per connection
   * (aggregated across the connection's lifetime). Supports filtering on every
   * property plus ordering and pagination. Returns 503 when the connection-insights
   * backend is disabled or unreachable.
   */
  listConnections(
    id: string,
    query: ProxyListConnectionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProxyListConnectionsResponse> {
    return this._client.get(path`/connect/proxies/${id}/connections`, { query, ...options });
  }

  /**
   * Returns the most recent cached network-latency measurement for the proxy,
   * sampled periodically by connecting through the proxy to a fixed target.
   * `latency` is null when no measurement is available yet (e.g. the proxy is not
   * active, or it has not been sampled since coming online).
   */
  ping(id: string, options?: RequestOptions): APIPromise<ProxyPingResponse> {
    return this._client.get(path`/connect/proxies/${id}/ping`, options);
  }
}

/**
 * A proxy including its password. Returned only on create and single-proxy reads.
 */
export interface ProxyRetrieveResponse {
  id: string;

  /**
   * ISO 3166-1 alpha-2 country code (lowercase).
   */
  country: string;

  createdAt: string;

  host: string;

  /**
   * Display name for the proxy. Set it on create or change it with PATCH; when no
   * name has been set, a label generated from the proxy's country, type, and id is
   * returned instead — so this is never empty.
   */
  name: string;

  password: string;

  port: number;

  /**
   * Lifecycle of a proxy. A freshly created proxy is `checking` while its billing
   * identity is being resolved — clients should poll until a `paymentUrl` or a later
   * status appears — then `provisioning` — or `pending_payment` until the customer
   * completes checkout — and becomes `active` once its upstream is assigned.
   * `cancelling` retains full access through the paid period; when the subscription
   * expires the proxy is `ended`. `error` marks a failed provisioning attempt.
   */
  status: 'checking' | 'pending_payment' | 'provisioning' | 'active' | 'cancelling' | 'ended' | 'error';

  type: 'dedicated_residential' | 'residential' | 'mobile';

  username: string;

  billingMode?: 'included' | 'standalone_paid';

  /**
   * Checkout URL to complete payment while status is `pending_payment`. Null once
   * paid or when no payment was required.
   */
  paymentUrl?: string | null;
}

/**
 * A provisioned proxy without its credentials.
 */
export interface ProxyUpdateResponse {
  id: string;

  /**
   * ISO 3166-1 alpha-2 country code (lowercase).
   */
  country: string;

  createdAt: string;

  host: string;

  /**
   * Display name for the proxy. Set it on create or change it with PATCH; when no
   * name has been set, a label generated from the proxy's country, type, and id is
   * returned instead — so this is never empty.
   */
  name: string;

  port: number;

  /**
   * Lifecycle of a proxy. A freshly created proxy is `checking` while its billing
   * identity is being resolved — clients should poll until a `paymentUrl` or a later
   * status appears — then `provisioning` — or `pending_payment` until the customer
   * completes checkout — and becomes `active` once its upstream is assigned.
   * `cancelling` retains full access through the paid period; when the subscription
   * expires the proxy is `ended`. `error` marks a failed provisioning attempt.
   */
  status: 'checking' | 'pending_payment' | 'provisioning' | 'active' | 'cancelling' | 'ended' | 'error';

  type: 'dedicated_residential' | 'residential' | 'mobile';

  username: string;

  billingMode?: 'included' | 'standalone_paid';
}

/**
 * A page of proxies.
 */
export interface ProxyListResponse {
  items: Array<ProxyListResponse.Item>;

  /**
   * Pagination metadata for a list response.
   */
  pagination: ProxyListResponse.Pagination;
}

export namespace ProxyListResponse {
  /**
   * A provisioned proxy without its credentials.
   */
  export interface Item {
    id: string;

    /**
     * ISO 3166-1 alpha-2 country code (lowercase).
     */
    country: string;

    createdAt: string;

    host: string;

    /**
     * Display name for the proxy. Set it on create or change it with PATCH; when no
     * name has been set, a label generated from the proxy's country, type, and id is
     * returned instead — so this is never empty.
     */
    name: string;

    port: number;

    /**
     * Lifecycle of a proxy. A freshly created proxy is `checking` while its billing
     * identity is being resolved — clients should poll until a `paymentUrl` or a later
     * status appears — then `provisioning` — or `pending_payment` until the customer
     * completes checkout — and becomes `active` once its upstream is assigned.
     * `cancelling` retains full access through the paid period; when the subscription
     * expires the proxy is `ended`. `error` marks a failed provisioning attempt.
     */
    status: 'checking' | 'pending_payment' | 'provisioning' | 'active' | 'cancelling' | 'ended' | 'error';

    type: 'dedicated_residential' | 'residential' | 'mobile';

    username: string;

    billingMode?: 'included' | 'standalone_paid';
  }

  /**
   * Pagination metadata for a list response.
   */
  export interface Pagination {
    /**
     * Whether a next page exists.
     */
    hasNext: boolean;

    /**
     * Whether a previous page exists.
     */
    hasPrev: boolean;

    /**
     * Current page number (1-based).
     */
    page: number;

    /**
     * Total number of pages.
     */
    pages: number;

    /**
     * Number of items per page.
     */
    pageSize: number;

    /**
     * Total number of items across all pages.
     */
    total: number;
  }
}

/**
 * A proxy including its password. Returned only on create and single-proxy reads.
 */
export interface ProxyBuyResponse {
  id: string;

  /**
   * ISO 3166-1 alpha-2 country code (lowercase).
   */
  country: string;

  createdAt: string;

  host: string;

  /**
   * Display name for the proxy. Set it on create or change it with PATCH; when no
   * name has been set, a label generated from the proxy's country, type, and id is
   * returned instead — so this is never empty.
   */
  name: string;

  password: string;

  port: number;

  /**
   * Lifecycle of a proxy. A freshly created proxy is `checking` while its billing
   * identity is being resolved — clients should poll until a `paymentUrl` or a later
   * status appears — then `provisioning` — or `pending_payment` until the customer
   * completes checkout — and becomes `active` once its upstream is assigned.
   * `cancelling` retains full access through the paid period; when the subscription
   * expires the proxy is `ended`. `error` marks a failed provisioning attempt.
   */
  status: 'checking' | 'pending_payment' | 'provisioning' | 'active' | 'cancelling' | 'ended' | 'error';

  type: 'dedicated_residential' | 'residential' | 'mobile';

  username: string;

  billingMode?: 'included' | 'standalone_paid';

  /**
   * Checkout URL to complete payment while status is `pending_payment`. Null once
   * paid or when no payment was required.
   */
  paymentUrl?: string | null;
}

/**
 * The outcome of an ensure-healthy check.
 */
export interface ProxyEnsureHealthyResponse {
  proxyId: string;

  /**
   * `healthy`: the upstream accepted the current session. `rotated`: the session was
   * refused and the proxy now uses a fresh, checked session; retry through the
   * proxy. `refused`: the session was refused and could not be replaced.
   * `unreachable`: the upstream could not be reached; the session was left
   * unchanged.
   */
  status: 'healthy' | 'rotated' | 'refused' | 'unreachable';
}

/**
 * A page of connections.
 */
export interface ProxyListConnectionsResponse {
  items: Array<ProxyListConnectionsResponse.Item>;

  /**
   * Pagination metadata for a list response.
   */
  pagination: ProxyListConnectionsResponse.Pagination;
}

export namespace ProxyListConnectionsResponse {
  /**
   * A single proxy connection, aggregated across its lifetime. Byte counts are
   * totals for the whole connection.
   */
  export interface Item {
    /**
     * Total bytes received from upstream over the connection's lifetime.
     */
    bytesIn: number;

    /**
     * Total bytes sent to upstream over the connection's lifetime.
     */
    bytesOut: number;

    /**
     * Upstream country code (ISO 3166-1 alpha-2), or empty if unknown.
     */
    country: string;

    /**
     * Destination host the client connected to.
     */
    dstHost: string;

    /**
     * Destination port the client connected to.
     */
    dstPort: number;

    /**
     * Elapsed time between startedAt and endedAt, in milliseconds.
     */
    durationMs: number;

    /**
     * Time of the connection's last recorded activity (close time once closed).
     */
    endedAt: string;

    /**
     * Transport protocol of a connection.
     */
    protocol: 'tcp' | 'udp' | 'unknown';

    /**
     * Upstream provider that served the connection.
     */
    provider: string;

    /**
     * The proxy the connection was routed through. All-zero when the upstream was
     * unresolved at capture time.
     */
    proxyId: string;

    /**
     * Unique id of this connection.
     */
    sessionId: string;

    /**
     * Client source IP address.
     */
    srcIp: string;

    /**
     * When the connection started.
     */
    startedAt: string;

    /**
     * `active` while the connection is still open (no terminal record yet); `closed`
     * once it has ended.
     */
    status: 'active' | 'closed';

    /**
     * bytesIn + bytesOut.
     */
    totalBytes: number;

    /**
     * The user that made the connection.
     */
    userId: string;

    /**
     * Why the connection closed; null while still active.
     */
    closeReason?: string | null;
  }

  /**
   * Pagination metadata for a list response.
   */
  export interface Pagination {
    /**
     * Whether a next page exists.
     */
    hasNext: boolean;

    /**
     * Whether a previous page exists.
     */
    hasPrev: boolean;

    /**
     * Current page number (1-based).
     */
    page: number;

    /**
     * Total number of pages.
     */
    pages: number;

    /**
     * Number of items per page.
     */
    pageSize: number;

    /**
     * Total number of items across all pages.
     */
    total: number;
  }
}

/**
 * The latest cached latency reading for a proxy.
 */
export interface ProxyPingResponse {
  /**
   * An aggregated latency measurement taken through the proxy.
   */
  latency: ProxyPingResponse.Latency | null;

  proxyId: string;
}

export namespace ProxyPingResponse {
  /**
   * An aggregated latency measurement taken through the proxy.
   */
  export interface Latency {
    /**
     * Mean round-trip time over successful probes, in milliseconds.
     */
    avgMs: number;

    /**
     * Round-trip time spread (max - min) over successful probes, in milliseconds.
     */
    jitterMs: number;

    /**
     * Maximum round-trip time over successful probes, in milliseconds.
     */
    maxMs: number;

    /**
     * When this measurement was taken.
     */
    measuredAt: string;

    /**
     * Minimum round-trip time over successful probes, in milliseconds.
     */
    minMs: number;

    /**
     * Fraction of probes that failed, 0..1 (1 means the proxy was unreachable; rtt
     * fields are 0).
     */
    packetLoss: number;

    /**
     * Number of probes taken in this measurement.
     */
    samples: number;

    /**
     * The host:port the latency was measured against, through the proxy.
     */
    target: string;
  }
}

export interface ProxyUpdateParams {
  /**
   * New display name, up to 64 characters excluding surrounding whitespace, and
   * containing no NUL. Send null (or an empty/whitespace-only string) to drop a
   * custom name and go back to the generated label. Omit to leave the name
   * unchanged.
   */
  name?: string | null;
}

export interface ProxyListParams {
  /**
   * Filter to proxies in this country (ISO 3166-1 alpha-2, lowercase).
   */
  country?: string;

  /**
   * Page number (1-based).
   */
  page?: number;

  /**
   * Number of items per page.
   */
  pageSize?: number;
}

export interface ProxyBuyParams {
  /**
   * ISO 3166-1 alpha-2 country code to provision the proxy in.
   */
  country: string;

  type: 'dedicated_residential' | 'residential' | 'mobile';

  /**
   * Display name for the proxy, up to 64 characters excluding surrounding
   * whitespace, and containing no NUL. Omit it (or send only whitespace) to get a
   * generated label built from the country, type, and id.
   */
  name?: string;
}

export interface ProxyListConnectionsParams {
  /**
   * Filter to connections that closed with this reason (closed connections only).
   */
  closeReason?: string;

  /**
   * Filter to connections served from this upstream country (ISO 3166-1 alpha-2).
   */
  country?: string;

  /**
   * Filter to connections to this destination host (exact match).
   */
  dstHost?: string;

  /**
   * Filter to connections to this destination port.
   */
  dstPort?: number;

  /**
   * Filter to connections whose last activity was at or after this time (inclusive).
   */
  endedAfter?: string;

  /**
   * Filter to connections whose last activity was at or before this time
   * (inclusive).
   */
  endedBefore?: string;

  /**
   * Filter to connections with at most this many bytes received from upstream.
   */
  maxBytesIn?: number;

  /**
   * Filter to connections with at most this many bytes sent to upstream.
   */
  maxBytesOut?: number;

  /**
   * Filter to connections lasting at most this many milliseconds.
   */
  maxDurationMs?: number;

  /**
   * Filter to connections with at most this much total traffic (bytesIn + bytesOut).
   */
  maxTotalBytes?: number;

  /**
   * Filter to connections with at least this many bytes received from upstream.
   */
  minBytesIn?: number;

  /**
   * Filter to connections with at least this many bytes sent to upstream.
   */
  minBytesOut?: number;

  /**
   * Filter to connections lasting at least this many milliseconds.
   */
  minDurationMs?: number;

  /**
   * Filter to connections with at least this much total traffic (bytesIn +
   * bytesOut).
   */
  minTotalBytes?: number;

  /**
   * Sort direction.
   */
  order?: 'asc' | 'desc';

  /**
   * Property to order the results by.
   */
  orderBy?: 'startedAt' | 'endedAt' | 'bytesIn' | 'bytesOut' | 'totalBytes' | 'durationMs';

  /**
   * Page number (1-based).
   */
  page?: number;

  /**
   * Number of items per page.
   */
  pageSize?: number;

  /**
   * Filter to connections of this transport protocol.
   */
  protocol?: 'tcp' | 'udp' | 'unknown';

  /**
   * Filter to connections served by this upstream provider.
   */
  provider?: string;

  /**
   * Filter to a single connection by its session id.
   */
  sessionId?: string;

  /**
   * Filter to connections that started at or after this time (inclusive).
   */
  startedAfter?: string;

  /**
   * Filter to connections that started at or before this time (inclusive).
   */
  startedBefore?: string;

  /**
   * Filter by connection status.
   */
  status?: 'active' | 'closed';

  /**
   * Filter to connections made by this user.
   */
  userId?: string;
}

export declare namespace Proxies {
  export {
    type ProxyRetrieveResponse as ProxyRetrieveResponse,
    type ProxyUpdateResponse as ProxyUpdateResponse,
    type ProxyListResponse as ProxyListResponse,
    type ProxyBuyResponse as ProxyBuyResponse,
    type ProxyEnsureHealthyResponse as ProxyEnsureHealthyResponse,
    type ProxyListConnectionsResponse as ProxyListConnectionsResponse,
    type ProxyPingResponse as ProxyPingResponse,
    type ProxyUpdateParams as ProxyUpdateParams,
    type ProxyListParams as ProxyListParams,
    type ProxyBuyParams as ProxyBuyParams,
    type ProxyListConnectionsParams as ProxyListConnectionsParams,
  };
}
