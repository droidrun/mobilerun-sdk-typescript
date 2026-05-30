// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CredentialsAPI from './credentials/credentials';
import { Credentials } from './credentials/credentials';

export class Packages extends APIResource {
  credentials: CredentialsAPI.Credentials = new CredentialsAPI.Credentials(this._client);
}

Packages.Credentials = Credentials;

export declare namespace Packages {
  export { Credentials as Credentials };
}
