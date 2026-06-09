// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ChatAPI from './chat/chat';
import {
  Chat,
  ChatDeliverPermissionParams,
  ChatDeliverPermissionResponse,
  ChatGetChatStateResponse,
  ChatListSlashCommandsResponse,
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
import * as TelegramAPI from './telegram/telegram';
import { Telegram, TelegramReceiveUpdateParams } from './telegram/telegram';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Agents API
 */
export class Agents extends APIResource {
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  telegram: TelegramAPI.Telegram = new TelegramAPI.Telegram(this._client);

  /**
   * List all available agents with their default configurations.
   */
  list(options?: RequestOptions): APIPromise<AgentListResponse> {
    return this._client.get('/agents', options);
  }
}

export type AgentListResponse = Array<AgentListResponse.AgentListResponseItem>;

export namespace AgentListResponse {
  export interface AgentListResponseItem {
    id: number;

    description: string | null;

    icon: string;

    llmModel: string;

    maxSteps: number;

    name: string;

    reasoning: boolean;

    subagentModel: string | null;

    vision: boolean;
  }
}

Agents.Chat = Chat;
Agents.Files = Files;
Agents.Telegram = Telegram;

export declare namespace Agents {
  export { type AgentListResponse as AgentListResponse };

  export {
    Chat as Chat,
    type ChatDeliverPermissionResponse as ChatDeliverPermissionResponse,
    type ChatGetChatStateResponse as ChatGetChatStateResponse,
    type ChatListSlashCommandsResponse as ChatListSlashCommandsResponse,
    type ChatRehydrateChatResponse as ChatRehydrateChatResponse,
    type ChatDeliverPermissionParams as ChatDeliverPermissionParams,
  };

  export {
    Files as Files,
    type FileListFilesResponse as FileListFilesResponse,
    type FileMintUploadURLResponse as FileMintUploadURLResponse,
    type FileListFilesParams as FileListFilesParams,
    type FileMintUploadURLParams as FileMintUploadURLParams,
  };

  export { Telegram as Telegram, type TelegramReceiveUpdateParams as TelegramReceiveUpdateParams };
}
