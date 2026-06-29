// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface Pagination {
  hasNext: boolean;

  hasPrev: boolean;

  page: number;

  pages: number;

  pageSize: number;

  total: number;
}

/**
 * Pagination metadata.
 */
export interface PaginationMeta {
  /**
   * Whether there is a next page
   */
  hasNext: boolean;

  /**
   * Whether there is a previous page
   */
  hasPrev: boolean;

  /**
   * Current page number (1-based)
   */
  page: number;

  /**
   * Total number of pages
   */
  pages: number;

  /**
   * Number of items per page
   */
  pageSize: number;

  /**
   * Total number of items
   */
  total: number;
}
