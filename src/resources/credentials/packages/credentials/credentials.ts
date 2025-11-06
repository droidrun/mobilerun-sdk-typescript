// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as FieldsAPI from './fields';
import { Fields } from './fields';

export class Credentials extends APIResource {
  fields: FieldsAPI.Fields = new FieldsAPI.Fields(this._client);
}

Credentials.Fields = Fields;

export declare namespace Credentials {
  export { Fields as Fields };
}
