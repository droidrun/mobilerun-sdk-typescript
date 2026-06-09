// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  /**
   * Creates a SOCKS5 credential, optionally bound to a proxy for dedicated routing.
   * Username and password are generated when omitted.
   */
  create(body: UserCreateParams, options?: RequestOptions): APIPromise<UserCreateResponse> {
    return this._client.post('/connect/users', { body, ...options });
  }

  /**
   * Get a SOCKS5 user by ID, including its password
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<UserRetrieveResponse> {
    return this._client.get(path`/connect/users/${id}`, options);
  }

  /**
   * Rebind the user to a different proxy (or detach it by passing null).
   */
  update(id: string, body: UserUpdateParams, options?: RequestOptions): APIPromise<UserUpdateResponse> {
    return this._client.patch(path`/connect/users/${id}`, { body, ...options });
  }

  /**
   * Returns SOCKS5 users owned by the caller. Passwords are omitted from the list.
   */
  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserListResponse> {
    return this._client.get('/connect/users', { query, ...options });
  }

  /**
   * Delete a SOCKS5 user
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/connect/users/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the connection history recorded for this user, one item per connection
   * (aggregated across the connection's lifetime). Supports filtering on every
   * property plus ordering and pagination. Returns 503 when the connection-insights
   * backend is disabled or unreachable.
   */
  listConnections(
    id: string,
    query: UserListConnectionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserListConnectionsResponse> {
    return this._client.get(path`/connect/users/${id}/connections`, { query, ...options });
  }
}

/**
 * A SOCKS5 user including its password. Returned only on create and single-user
 * reads.
 */
export interface UserCreateResponse {
  id: string;

  createdAt: string;

  password: string;

  username: string;

  /**
   * The proxy this user routes to (dedicated routing), or null if unbound.
   */
  proxyId?: string | null;
}

/**
 * A SOCKS5 user including its password. Returned only on create and single-user
 * reads.
 */
export interface UserRetrieveResponse {
  id: string;

  createdAt: string;

  password: string;

  username: string;

  /**
   * The proxy this user routes to (dedicated routing), or null if unbound.
   */
  proxyId?: string | null;
}

/**
 * A SOCKS5 credential without its password.
 */
export interface UserUpdateResponse {
  id: string;

  createdAt: string;

  username: string;

  /**
   * The proxy this user routes to (dedicated routing), or null if unbound.
   */
  proxyId?: string | null;
}

/**
 * A page of SOCKS5 users.
 */
export interface UserListResponse {
  items: Array<UserListResponse.Item>;

  /**
   * Pagination metadata for a list response.
   */
  pagination: UserListResponse.Pagination;
}

export namespace UserListResponse {
  /**
   * A SOCKS5 credential without its password.
   */
  export interface Item {
    id: string;

    createdAt: string;

    username: string;

    /**
     * The proxy this user routes to (dedicated routing), or null if unbound.
     */
    proxyId?: string | null;
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
 * A page of connections.
 */
export interface UserListConnectionsResponse {
  items: Array<UserListConnectionsResponse.Item>;

  /**
   * Pagination metadata for a list response.
   */
  pagination: UserListConnectionsResponse.Pagination;
}

export namespace UserListConnectionsResponse {
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

export interface UserCreateParams {
  /**
   * Desired SOCKS5 password, 1-255 bytes (RFC 1929). Generated when omitted.
   */
  password?: string;

  /**
   * Proxy to bind the user to for dedicated routing.
   */
  proxyId?: string;

  /**
   * Desired SOCKS5 username, 1-255 bytes (RFC 1929). Generated when omitted.
   */
  username?: string;
}

export interface UserUpdateParams {
  /**
   * Proxy to rebind to, or null to detach. Omit to leave the user's current binding
   * unchanged — only an explicit null detaches.
   */
  proxyId?: string | null;
}

export interface UserListParams {
  /**
   * Page number (1-based).
   */
  page?: number;

  /**
   * Number of items per page.
   */
  pageSize?: number;

  /**
   * Filter to users bound to this proxy. Users not bound to it (including unbound
   * users) are excluded.
   */
  proxyId?: string;
}

export interface UserListConnectionsParams {
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
   * Filter to connections routed through this proxy.
   */
  proxyId?: string;

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
}

export declare namespace Users {
  export {
    type UserCreateResponse as UserCreateResponse,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserListResponse as UserListResponse,
    type UserListConnectionsResponse as UserListConnectionsResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserListConnectionsParams as UserListConnectionsParams,
  };
}
