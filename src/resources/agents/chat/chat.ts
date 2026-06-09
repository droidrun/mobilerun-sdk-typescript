// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AbortAPI from './abort';
import { Abort, AbortForceClearResponse, AbortPerformResponse } from './abort';
import * as QuestionAPI from './question';
import {
  Question,
  QuestionDeliverAnswerParams,
  QuestionDeliverAnswerResponse,
  QuestionDismissParams,
  QuestionDismissResponse,
} from './question';
import { APIPromise } from '../../../core/api-promise';
import { Stream } from '../../../core/streaming';
import { buildHeaders } from '../../../internal/headers';
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
  rehydrateChat(options?: RequestOptions): APIPromise<ChatRehydrateChatResponse> {
    return this._client.get('/agents/chat/messages', options);
  }

  /**
   * Send a single user message (direct API). Content-negotiated: SSE or JSON.
   */
  sendMessage(body: ChatSendMessageParams, options?: RequestOptions): APIPromise<ChatSendMessageResponse> {
    return this._client.post('/agents/chat/message', { body, ...options });
  }

  /**
   * Send a chat prompt; streams agent events.
   */
  sendPrompt(
    body: ChatSendPromptParams,
    options?: RequestOptions,
  ): APIPromise<Stream<ChatSendPromptResponse>> {
    return this._client.post('/agents/chat/prompt', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    }) as APIPromise<Stream<ChatSendPromptResponse>>;
  }

  /**
   * SSE channel for chat-change notifications.
   */
  subscribeEvents(options?: RequestOptions): APIPromise<Stream<ChatSubscribeEventsResponse>> {
    return this._client.get('/agents/chat/events', {
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    }) as APIPromise<Stream<ChatSubscribeEventsResponse>>;
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

    source?: 'cloud' | 'telegram' | 'api' | 'workflow';

    synthetic?: boolean;
  }

  export namespace Message {
    export interface Part {
      type: string;

      [k: string]: unknown;
    }
  }
}

export interface ChatSendMessageResponse {
  assistantText: string;

  errorText?: string;
}

export type ChatSendPromptResponse = string;

export type ChatSubscribeEventsResponse = string;

export interface ChatDeliverPermissionParams {
  permissionId: string;

  response: 'once' | 'always' | 'reject';
}

export interface ChatSendMessageParams {
  message: string;

  agent?: string;
}

export interface ChatSendPromptParams {
  messages: Array<ChatSendPromptParams.Message>;

  id?: string;

  agent?: string;

  context?: string;

  fileIds?: Array<string>;

  metadata?: { [key: string]: unknown };

  trigger?: 'submit-message' | 'regenerate-message';

  [k: string]: unknown;
}

export namespace ChatSendPromptParams {
  export interface Message {
    id: string;

    parts: Array<Message.Part>;

    role: 'user' | 'assistant' | 'system';

    metadata?: { [key: string]: unknown };
  }

  export namespace Message {
    export interface Part {
      type: string;

      [k: string]: unknown;
    }
  }
}

Chat.Abort = Abort;
Chat.Question = Question;

export declare namespace Chat {
  export {
    type ChatDeliverPermissionResponse as ChatDeliverPermissionResponse,
    type ChatGetChatStateResponse as ChatGetChatStateResponse,
    type ChatListSlashCommandsResponse as ChatListSlashCommandsResponse,
    type ChatRehydrateChatResponse as ChatRehydrateChatResponse,
    type ChatSendMessageResponse as ChatSendMessageResponse,
    type ChatSendPromptResponse as ChatSendPromptResponse,
    type ChatSubscribeEventsResponse as ChatSubscribeEventsResponse,
    type ChatDeliverPermissionParams as ChatDeliverPermissionParams,
    type ChatSendMessageParams as ChatSendMessageParams,
    type ChatSendPromptParams as ChatSendPromptParams,
  };

  export {
    Abort as Abort,
    type AbortForceClearResponse as AbortForceClearResponse,
    type AbortPerformResponse as AbortPerformResponse,
  };

  export {
    Question as Question,
    type QuestionDeliverAnswerResponse as QuestionDeliverAnswerResponse,
    type QuestionDismissResponse as QuestionDismissResponse,
    type QuestionDeliverAnswerParams as QuestionDeliverAnswerParams,
    type QuestionDismissParams as QuestionDismissParams,
  };
}
