// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PackagesAPI from './packages/packages';
import { Packages } from './packages/packages';

export class Credentials extends APIResource {
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);
}

Credentials.Packages = Packages;

export declare namespace Credentials {
  export { Packages as Packages };
}
