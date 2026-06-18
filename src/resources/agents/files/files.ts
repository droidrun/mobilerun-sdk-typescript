// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FileIDAPI from './file-id';
import { FileID } from './file-id';

export class Files extends APIResource {
  fileID: FileIDAPI.FileID = new FileIDAPI.FileID(this._client);
}

Files.FileID = FileID;

export declare namespace Files {
  export { FileID as FileID };
}
