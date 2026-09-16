// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from './messages';
import { Messages } from './messages';

export class Esims extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
}

Esims.Messages = Messages;

export declare namespace Esims {
  export { Messages as Messages };
}
