// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Question extends APIResource {
  /**
   * Deliver the user's answers to the agent's pending question for an in-flight
   * turn. Idempotent via the `idempotency-key` header.
   */
  deliverAnswer(
    body: QuestionDeliverAnswerParams,
    options?: RequestOptions,
  ): APIPromise<QuestionDeliverAnswerResponse> {
    return this._client.post('/agents/chat/question', { body, ...options });
  }

  /**
   * Dismiss the agent's pending question. Already-resolved questions return 200
   * (no-op) so multi-tab dismiss stays idempotent.
   */
  dismiss(body: QuestionDismissParams, options?: RequestOptions): APIPromise<QuestionDismissResponse> {
    return this._client.post('/agents/chat/question/reject', { body, ...options });
  }
}

export interface QuestionDeliverAnswerResponse {
  ok: true;
}

export interface QuestionDismissResponse {
  ok: true;
}

export interface QuestionDeliverAnswerParams {
  answers: Array<Array<QuestionDeliverAnswerParams.Label | QuestionDeliverAnswerParams.Custom>>;

  questionId: string;
}

export namespace QuestionDeliverAnswerParams {
  export interface Label {
    label: string;
  }

  export interface Custom {
    custom: string;
  }
}

export interface QuestionDismissParams {
  questionId: string;
}

export declare namespace Question {
  export {
    type QuestionDeliverAnswerResponse as QuestionDeliverAnswerResponse,
    type QuestionDismissResponse as QuestionDismissResponse,
    type QuestionDeliverAnswerParams as QuestionDeliverAnswerParams,
    type QuestionDismissParams as QuestionDismissParams,
  };
}
