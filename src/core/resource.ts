// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Mobilerun } from '../client';

export abstract class APIResource {
  protected _client: Mobilerun;

  constructor(client: Mobilerun) {
    this._client = client;
  }
}
