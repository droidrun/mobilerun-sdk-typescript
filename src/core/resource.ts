// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { MobilerunCloud } from '../client';

export abstract class APIResource {
  protected _client: MobilerunCloud;

  constructor(client: MobilerunCloud) {
    this._client = client;
  }
}
