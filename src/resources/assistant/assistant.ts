// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConversationsAPI from './conversations';
import {
  ConversationAbortParams,
  ConversationAbortResponse,
  ConversationAnswerPermissionParams,
  ConversationAnswerPermissionResponse,
  ConversationAnswerQuestionParams,
  ConversationAnswerQuestionResponse,
  ConversationCreateParams,
  ConversationCreateResponse,
  ConversationHistoryParams,
  ConversationHistoryResponse,
  ConversationListParams,
  ConversationListResponse,
  ConversationRejectQuestionParams,
  ConversationRejectQuestionResponse,
  ConversationSendParams,
  ConversationSendResponse,
  ConversationStreamParams,
  ConversationStreamResponse,
  ConversationUpdateParams,
  ConversationUpdateResponse,
  Conversations,
} from './conversations';

export class Assistant extends APIResource {
  conversations: ConversationsAPI.Conversations = new ConversationsAPI.Conversations(this._client);
}

Assistant.Conversations = Conversations;

export declare namespace Assistant {
  export {
    Conversations as Conversations,
    type ConversationCreateResponse as ConversationCreateResponse,
    type ConversationUpdateResponse as ConversationUpdateResponse,
    type ConversationListResponse as ConversationListResponse,
    type ConversationAbortResponse as ConversationAbortResponse,
    type ConversationAnswerPermissionResponse as ConversationAnswerPermissionResponse,
    type ConversationAnswerQuestionResponse as ConversationAnswerQuestionResponse,
    type ConversationHistoryResponse as ConversationHistoryResponse,
    type ConversationRejectQuestionResponse as ConversationRejectQuestionResponse,
    type ConversationSendResponse as ConversationSendResponse,
    type ConversationStreamResponse as ConversationStreamResponse,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationUpdateParams as ConversationUpdateParams,
    type ConversationListParams as ConversationListParams,
    type ConversationAbortParams as ConversationAbortParams,
    type ConversationAnswerPermissionParams as ConversationAnswerPermissionParams,
    type ConversationAnswerQuestionParams as ConversationAnswerQuestionParams,
    type ConversationHistoryParams as ConversationHistoryParams,
    type ConversationRejectQuestionParams as ConversationRejectQuestionParams,
    type ConversationSendParams as ConversationSendParams,
    type ConversationStreamParams as ConversationStreamParams,
  };
}
