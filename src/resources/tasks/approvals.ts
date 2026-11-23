// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Tasks API
 */
export class Approvals extends APIResource {
  /**
   * Approve or deny the approval a running task is waiting for (see
   * `pendingApproval` on the task). Deny ends the task as failed.
   */
  respond(
    approvalID: string,
    params: ApprovalRespondParams,
    options?: RequestOptions,
  ): APIPromise<ApprovalRespondResponse> {
    const { task_id, ...body } = params;
    return this._client.post(path`/tasks/${task_id}/approvals/${approvalID}`, { body, ...options });
  }
}

export interface ApprovalRespondResponse {
  /**
   * The recorded decision
   */
  decision: 'approve' | 'deny';
}

export interface ApprovalRespondParams {
  /**
   * Path param
   */
  task_id: string;

  /**
   * Body param: Approve lets the task continue; deny ends it as failed
   */
  decision: 'approve' | 'deny';
}

export declare namespace Approvals {
  export {
    type ApprovalRespondResponse as ApprovalRespondResponse,
    type ApprovalRespondParams as ApprovalRespondParams,
  };
}
