// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AbortAPI from './abort';
import { Abort, AbortForceClearResponse, AbortPerformParams, AbortPerformResponse } from './abort';
import * as QuestionAPI from './question';
import {
  Question,
  QuestionDeliverAnswerParams,
  QuestionDeliverAnswerResponse,
  QuestionDismissParams,
  QuestionDismissResponse,
} from './question';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Chat extends APIResource {
  abort: AbortAPI.Abort = new AbortAPI.Abort(this._client);
  question: QuestionAPI.Question = new QuestionAPI.Question(this._client);

  /**
   * Deliver a HITL approval/rejection for an in-flight turn.
   */
  deliverPermission(
    body: ChatDeliverPermissionParams,
    options?: RequestOptions,
  ): APIPromise<ChatDeliverPermissionResponse> {
    return this._client.post('/agents/chat/permission', { body, ...options });
  }

  /**
   * Advisory snapshot of in-flight activity for the caller. Returns boolean flags
   * for an interactive chat turn, a background workflow run, and a pending graceful
   * abort. Intended for FE UI before deciding to invoke /chat/abort/force.
   */
  getChatState(options?: RequestOptions): APIPromise<ChatGetChatStateResponse> {
    return this._client.get('/agents/chat/state', options);
  }

  /**
   * List the chat slash-command catalog.
   */
  listSlashCommands(options?: RequestOptions): APIPromise<ChatListSlashCommandsResponse> {
    return this._client.get('/agents/chat/slash-commands', options);
  }

  /**
   * Rehydrate the user's chat history. Does not wake a hibernated machine.
   */
  rehydrateChat(
    query: ChatRehydrateChatParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChatRehydrateChatResponse> {
    return this._client.get('/agents/chat/messages', { query, ...options });
  }
}

export interface ChatDeliverPermissionResponse {
  ok: true;
}

export interface ChatGetChatStateResponse {
  abortRequested: boolean;

  chatActive: boolean;

  workflowActive: boolean;
}

export interface ChatListSlashCommandsResponse {
  commands: Array<ChatListSlashCommandsResponse.Command>;
}

export namespace ChatListSlashCommandsResponse {
  export interface Command {
    /**
     * Including the leading slash (e.g. `/help`).
     */
    name: string;

    summary: string;

    /**
     * Arg signature for the help card (e.g. `<task>`, `<deviceId>`). Always
     * angle-bracketed; the summary spells out when an arg is optional.
     */
    args?: string;
  }
}

export interface ChatRehydrateChatResponse {
  messages: Array<ChatRehydrateChatResponse.Message>;

  turnActive: boolean;
}

export namespace ChatRehydrateChatResponse {
  export interface Message {
    id: string;

    parts: Array<Message.Part>;

    role: 'user' | 'assistant' | 'system';

    metadata?: Message.Metadata;

    source?: 'cloud' | 'telegram' | 'api' | 'workflow';

    synthetic?: boolean;
  }

  export namespace Message {
    export interface Part {
      type: string;

      [k: string]: unknown;
    }

    export interface Metadata {
      agent?: string;

      agentMessageId?: string;

      agentSessionId?: string;
    }
  }
}

export interface ChatDeliverPermissionParams {
  permissionId: string;

  response: 'once' | 'always' | 'reject';
}

export interface ChatRehydrateChatParams {
  sessionId?: string;
}

Chat.Abort = Abort;
Chat.Question = Question;

export declare namespace Chat {
  export {
    type ChatDeliverPermissionResponse as ChatDeliverPermissionResponse,
    type ChatGetChatStateResponse as ChatGetChatStateResponse,
    type ChatListSlashCommandsResponse as ChatListSlashCommandsResponse,
    type ChatRehydrateChatResponse as ChatRehydrateChatResponse,
    type ChatDeliverPermissionParams as ChatDeliverPermissionParams,
    type ChatRehydrateChatParams as ChatRehydrateChatParams,
  };

  export {
    Abort as Abort,
    type AbortForceClearResponse as AbortForceClearResponse,
    type AbortPerformResponse as AbortPerformResponse,
    type AbortPerformParams as AbortPerformParams,
  };

  export {
    Question as Question,
    type QuestionDeliverAnswerResponse as QuestionDeliverAnswerResponse,
    type QuestionDismissResponse as QuestionDismissResponse,
    type QuestionDeliverAnswerParams as QuestionDeliverAnswerParams,
    type QuestionDismissParams as QuestionDismissParams,
  };
}
