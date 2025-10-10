// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { DroidrunCloud } from '../client';

export abstract class APIResource {
  protected _client: DroidrunCloud;

  constructor(client: DroidrunCloud) {
    this._client = client;
  }
}
