// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ChatAPI from './chat/chat';
import {
  Chat,
  ChatDeliverPermissionParams,
  ChatDeliverPermissionResponse,
  ChatGetChatStateResponse,
  ChatListSlashCommandsResponse,
  ChatRehydrateChatParams,
  ChatRehydrateChatResponse,
} from './chat/chat';
import * as FilesAPI from './files/files';
import {
  FileListFilesParams,
  FileListFilesResponse,
  FileMintUploadURLParams,
  FileMintUploadURLResponse,
  Files,
} from './files/files';

export class Agents extends APIResource {
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
}

Agents.Chat = Chat;
Agents.Files = Files;

export declare namespace Agents {
  export {
    Chat as Chat,
    type ChatDeliverPermissionResponse as ChatDeliverPermissionResponse,
    type ChatGetChatStateResponse as ChatGetChatStateResponse,
    type ChatListSlashCommandsResponse as ChatListSlashCommandsResponse,
    type ChatRehydrateChatResponse as ChatRehydrateChatResponse,
    type ChatDeliverPermissionParams as ChatDeliverPermissionParams,
    type ChatRehydrateChatParams as ChatRehydrateChatParams,
  };

  export {
    Files as Files,
    type FileListFilesResponse as FileListFilesResponse,
    type FileMintUploadURLResponse as FileMintUploadURLResponse,
    type FileListFilesParams as FileListFilesParams,
    type FileMintUploadURLParams as FileMintUploadURLParams,
  };
}
