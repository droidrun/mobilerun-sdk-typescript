// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FilesAPI from './files/files';
import { Files } from './files/files';

export class Agents extends APIResource {
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
}

Agents.Files = Files;

export declare namespace Agents {
  export { Files as Files };
}
