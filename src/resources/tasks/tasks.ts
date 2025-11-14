// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ScreenshotsAPI from './screenshots';
import { MediaResponse, ScreenshotListResponse, ScreenshotRetrieveParams, Screenshots } from './screenshots';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tasks extends APIResource {
  screenshots: ScreenshotsAPI.Screenshots = new ScreenshotsAPI.Screenshots(this._client);

  /**
   * Get Task
   */
  retrieve(taskID: string, options?: RequestOptions): APIPromise<TaskRetrieveResponse> {
    return this._client.get(path`/tasks/${taskID}`, options);
  }

  /**
   * List all tasks you've created so far
   */
  list(
    query: TaskListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TaskListResponse> {
    return this._client.get('/tasks/', { query, ...options });
  }

  /**
   * Attach Task
   */
  attach(taskID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/tasks/${taskID}/attach`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get the status of a task. If device is provided, return the status of the
   * specific device. Otherwise, return the status of all devices.
   */
  getStatus(taskID: string, options?: RequestOptions): APIPromise<TaskGetStatusResponse> {
    return this._client.get(path`/tasks/${taskID}/status`, options);
  }

  /**
   * Get the trajectory of a task.
   */
  getTrajectory(taskID: string, options?: RequestOptions): APIPromise<TaskGetTrajectoryResponse> {
    return this._client.get(path`/tasks/${taskID}/trajectory`, options);
  }

  /**
   * Run Task
   */
  run(body: TaskRunParams, options?: RequestOptions): APIPromise<TaskRunResponse> {
    return this._client.post('/tasks/', { body, ...options });
  }

  /**
   * Run Streamed Task
   */
  runStreamed(body: TaskRunStreamedParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/tasks/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Stop Task
   */
  stop(taskID: string, options?: RequestOptions): APIPromise<TaskStopResponse> {
    return this._client.post(path`/tasks/${taskID}/cancel`, options);
  }
}

export type LlmModel = 'gpt-5' | 'gemini-2.5-flash' | 'gemini-2.5-pro' | 'claude-sonnet-4-5';

export interface Task {
  deviceId: string;

  task: string;

  userId: string;

  id?: string;

  apps?: Array<string>;

  createdAt?: string;

  credentials?: Array<Task.Credential>;

  files?: Array<string>;

  finishedAt?: string | null;

  llmModel?: LlmModel;

  maxSteps?: number;

  output?: { [key: string]: unknown } | null;

  outputSchema?: { [key: string]: unknown } | null;

  reasoning?: boolean;

  status?: TaskStatus;

  steps?: number | null;

  succeeded?: boolean | null;

  temperature?: number;

  timeout?: number;

  trajectory?: Array<{ [key: string]: unknown }>;

  updatedAt?: string;

  vision?: boolean;

  vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA' | null;
}

export namespace Task {
  export interface Credential {
    credentialNames: Array<string>;

    packageName: string;
  }
}

export interface TaskCreate {
  task: string;

  apps?: Array<string>;

  credentials?: Array<TaskCreate.Credential>;

  files?: Array<string>;

  llmModel?: LlmModel;

  maxSteps?: number;

  outputSchema?: { [key: string]: unknown } | null;

  reasoning?: boolean;

  temperature?: number;

  timeout?: number;

  vision?: boolean;

  vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA' | null;
}

export namespace TaskCreate {
  export interface Credential {
    credentialNames: Array<string>;

    packageName: string;
  }
}

export type TaskStatus = 'created' | 'running' | 'paused' | 'completed' | 'failed' | 'cancelled';

export interface TaskRetrieveResponse {
  /**
   * The task
   */
  task: Task;
}

export interface TaskListResponse {
  /**
   * The paginated items
   */
  items: Array<Task>;

  /**
   * Pagination metadata
   */
  pagination: TaskListResponse.Pagination;
}

export namespace TaskListResponse {
  /**
   * Pagination metadata
   */
  export interface Pagination {
    /**
     * Whether there is a next page
     */
    hasNext: boolean;

    /**
     * Whether there is a previous page
     */
    hasPrev: boolean;

    /**
     * Current page number (1-based)
     */
    page: number;

    /**
     * Total number of pages
     */
    pages: number;

    /**
     * Number of items per page
     */
    pageSize: number;

    /**
     * Total number of items
     */
    total: number;
  }
}

export interface TaskGetStatusResponse {
  /**
   * The status of the task
   */
  status: TaskStatus;
}

export interface TaskGetTrajectoryResponse {
  /**
   * The trajectory of the task
   */
  trajectory: Array<
    | TaskGetTrajectoryResponse.TrajectoryCreatedEvent
    | TaskGetTrajectoryResponse.TrajectoryExceptionEvent
    | TaskGetTrajectoryResponse.TrajectoryCancelEvent
    | TaskGetTrajectoryResponse.TrajectoryScreenshotEvent
    | TaskGetTrajectoryResponse.TrajectoryStartEvent
    | TaskGetTrajectoryResponse.TrajectoryTaskRunnerEvent
    | TaskGetTrajectoryResponse.TrajectoryFinalizeEvent
    | TaskGetTrajectoryResponse.TrajectoryStopEvent
    | TaskGetTrajectoryResponse.TrajectoryResultEvent
    | TaskGetTrajectoryResponse.TrajectoryManagerInputEvent
    | TaskGetTrajectoryResponse.TrajectoryManagerPlanEvent
    | TaskGetTrajectoryResponse.TrajectoryExecutorInputEvent
    | TaskGetTrajectoryResponse.TrajectoryExecutorResultEvent
    | TaskGetTrajectoryResponse.TrajectoryScripterExecutorInputEvent
    | TaskGetTrajectoryResponse.TrajectoryScripterExecutorResultEvent
    | TaskGetTrajectoryResponse.TrajectoryPlanCreatedEvent
    | TaskGetTrajectoryResponse.TrajectoryPlanInputEvent
    | TaskGetTrajectoryResponse.TrajectoryPlanThinkingEvent
    | TaskGetTrajectoryResponse.TrajectoryTaskThinkingEvent
    | TaskGetTrajectoryResponse.TrajectoryTaskExecutionEvent
    | TaskGetTrajectoryResponse.TrajectoryTaskExecutionResultEvent
    | TaskGetTrajectoryResponse.TrajectoryTaskEndEvent
    | TaskGetTrajectoryResponse.TrajectoryCodeActExecuteEvent
    | TaskGetTrajectoryResponse.TrajectoryCodeActResultEvent
    | TaskGetTrajectoryResponse.TrajectoryTapActionEvent
    | TaskGetTrajectoryResponse.TrajectorySwipeActionEvent
    | TaskGetTrajectoryResponse.TrajectoryDragActionEvent
    | TaskGetTrajectoryResponse.TrajectoryInputTextActionEvent
    | TaskGetTrajectoryResponse.TrajectoryKeyPressActionEvent
    | TaskGetTrajectoryResponse.TrajectoryStartAppEvent
    | TaskGetTrajectoryResponse.TrajectoryRecordUiStateEvent
    | TaskGetTrajectoryResponse.TrajectoryWaitEvent
    | TaskGetTrajectoryResponse.TrajectoryManagerContextEvent
    | TaskGetTrajectoryResponse.TrajectoryManagerResponseEvent
    | TaskGetTrajectoryResponse.TrajectoryManagerPlanDetailsEvent
    | TaskGetTrajectoryResponse.TrajectoryExecutorContextEvent
    | TaskGetTrajectoryResponse.TrajectoryExecutorResponseEvent
    | TaskGetTrajectoryResponse.TrajectoryExecutorActionEvent
    | TaskGetTrajectoryResponse.TrajectoryExecutorActionResultEvent
    | TaskGetTrajectoryResponse.TrajectoryScripterInputEvent
    | TaskGetTrajectoryResponse.TrajectoryScripterThinkingEvent
    | TaskGetTrajectoryResponse.TrajectoryScripterExecutionEvent
    | TaskGetTrajectoryResponse.TrajectoryScripterExecutionResultEvent
    | TaskGetTrajectoryResponse.TrajectoryScripterEndEvent
    | TaskGetTrajectoryResponse.TrajectoryTextManipulatorInputEvent
    | TaskGetTrajectoryResponse.TrajectoryTextManipulatorResultEvent
  >;
}

export namespace TaskGetTrajectoryResponse {
  export interface TrajectoryCreatedEvent {
    data: TrajectoryCreatedEvent.Data;

    event: 'CreatedEvent';
  }

  export namespace TrajectoryCreatedEvent {
    export interface Data {
      id: string;

      token: string;

      streamUrl: string;
    }
  }

  export interface TrajectoryExceptionEvent {
    data: TrajectoryExceptionEvent.Data;

    event: 'ExceptionEvent';
  }

  export namespace TrajectoryExceptionEvent {
    export interface Data {
      exception: string;
    }
  }

  export interface TrajectoryCancelEvent {
    data: TrajectoryCancelEvent.Data;

    event: 'CancelEvent';
  }

  export namespace TrajectoryCancelEvent {
    export interface Data {
      reason: string;
    }
  }

  export interface TrajectoryScreenshotEvent {
    data: TrajectoryScreenshotEvent.Data;

    event: 'ScreenshotEvent';
  }

  export namespace TrajectoryScreenshotEvent {
    export interface Data {
      index: number;

      url: string;
    }
  }

  export interface TrajectoryStartEvent {
    data: { [key: string]: unknown };

    event: 'StartEvent';
  }

  export interface TrajectoryTaskRunnerEvent {
    data: { [key: string]: unknown };

    event: 'TaskRunnerEvent';
  }

  export interface TrajectoryFinalizeEvent {
    data: { [key: string]: unknown };

    event: 'FinalizeEvent';
  }

  export interface TrajectoryStopEvent {
    data: { [key: string]: unknown };

    event: 'StopEvent';
  }

  export interface TrajectoryResultEvent {
    data: { [key: string]: unknown };

    event: 'ResultEvent';
  }

  export interface TrajectoryManagerInputEvent {
    data: { [key: string]: unknown };

    event: 'ManagerInputEvent';
  }

  export interface TrajectoryManagerPlanEvent {
    data: { [key: string]: unknown };

    event: 'ManagerPlanEvent';
  }

  export interface TrajectoryExecutorInputEvent {
    data: { [key: string]: unknown };

    event: 'ExecutorInputEvent';
  }

  export interface TrajectoryExecutorResultEvent {
    data: { [key: string]: unknown };

    event: 'ExecutorResultEvent';
  }

  export interface TrajectoryScripterExecutorInputEvent {
    data: { [key: string]: unknown };

    event: 'ScripterExecutorInputEvent';
  }

  export interface TrajectoryScripterExecutorResultEvent {
    data: { [key: string]: unknown };

    event: 'ScripterExecutorResultEvent';
  }

  export interface TrajectoryPlanCreatedEvent {
    data: { [key: string]: unknown };

    event: 'PlanCreatedEvent';
  }

  export interface TrajectoryPlanInputEvent {
    data: { [key: string]: unknown };

    event: 'PlanInputEvent';
  }

  export interface TrajectoryPlanThinkingEvent {
    data: { [key: string]: unknown };

    event: 'PlanThinkingEvent';
  }

  export interface TrajectoryTaskThinkingEvent {
    data: { [key: string]: unknown };

    event: 'TaskThinkingEvent';
  }

  export interface TrajectoryTaskExecutionEvent {
    data: { [key: string]: unknown };

    event: 'TaskExecutionEvent';
  }

  export interface TrajectoryTaskExecutionResultEvent {
    data: { [key: string]: unknown };

    event: 'TaskExecutionResultEvent';
  }

  export interface TrajectoryTaskEndEvent {
    data: { [key: string]: unknown };

    event: 'TaskEndEvent';
  }

  export interface TrajectoryCodeActExecuteEvent {
    data: { [key: string]: unknown };

    event: 'CodeActExecuteEvent';
  }

  export interface TrajectoryCodeActResultEvent {
    data: { [key: string]: unknown };

    event: 'CodeActResultEvent';
  }

  export interface TrajectoryTapActionEvent {
    data: { [key: string]: unknown };

    event: 'TapActionEvent';
  }

  export interface TrajectorySwipeActionEvent {
    data: { [key: string]: unknown };

    event: 'SwipeActionEvent';
  }

  export interface TrajectoryDragActionEvent {
    data: { [key: string]: unknown };

    event: 'DragActionEvent';
  }

  export interface TrajectoryInputTextActionEvent {
    data: { [key: string]: unknown };

    event: 'InputTextActionEvent';
  }

  export interface TrajectoryKeyPressActionEvent {
    data: { [key: string]: unknown };

    event: 'KeyPressActionEvent';
  }

  export interface TrajectoryStartAppEvent {
    data: { [key: string]: unknown };

    event: 'StartAppEvent';
  }

  export interface TrajectoryRecordUiStateEvent {
    data: { [key: string]: unknown };

    event: 'RecordUIStateEvent';
  }

  export interface TrajectoryWaitEvent {
    data: { [key: string]: unknown };

    event: 'WaitEvent';
  }

  export interface TrajectoryManagerContextEvent {
    data: { [key: string]: unknown };

    event: 'ManagerContextEvent';
  }

  export interface TrajectoryManagerResponseEvent {
    data: { [key: string]: unknown };

    event: 'ManagerResponseEvent';
  }

  export interface TrajectoryManagerPlanDetailsEvent {
    data: { [key: string]: unknown };

    event: 'ManagerPlanDetailsEvent';
  }

  export interface TrajectoryExecutorContextEvent {
    data: { [key: string]: unknown };

    event: 'ExecutorContextEvent';
  }

  export interface TrajectoryExecutorResponseEvent {
    data: { [key: string]: unknown };

    event: 'ExecutorResponseEvent';
  }

  export interface TrajectoryExecutorActionEvent {
    data: { [key: string]: unknown };

    event: 'ExecutorActionEvent';
  }

  export interface TrajectoryExecutorActionResultEvent {
    data: { [key: string]: unknown };

    event: 'ExecutorActionResultEvent';
  }

  export interface TrajectoryScripterInputEvent {
    data: { [key: string]: unknown };

    event: 'ScripterInputEvent';
  }

  export interface TrajectoryScripterThinkingEvent {
    data: { [key: string]: unknown };

    event: 'ScripterThinkingEvent';
  }

  export interface TrajectoryScripterExecutionEvent {
    data: { [key: string]: unknown };

    event: 'ScripterExecutionEvent';
  }

  export interface TrajectoryScripterExecutionResultEvent {
    data: { [key: string]: unknown };

    event: 'ScripterExecutionResultEvent';
  }

  export interface TrajectoryScripterEndEvent {
    data: { [key: string]: unknown };

    event: 'ScripterEndEvent';
  }

  export interface TrajectoryTextManipulatorInputEvent {
    data: { [key: string]: unknown };

    event: 'TextManipulatorInputEvent';
  }

  export interface TrajectoryTextManipulatorResultEvent {
    data: { [key: string]: unknown };

    event: 'TextManipulatorResultEvent';
  }
}

export interface TaskRunResponse {
  /**
   * The ID of the task
   */
  id: string;

  /**
   * The token of the stream
   */
  token: string;

  /**
   * The URL of the stream
   */
  streamUrl: string;
}

export interface TaskStopResponse {
  /**
   * Whether the task was cancelled
   */
  cancelled: boolean;
}

export interface TaskListParams {
  orderBy?: 'id' | 'createdAt' | 'finishedAt' | 'status' | null;

  orderByDirection?: 'asc' | 'desc';

  /**
   * Page number (1-based). If provided, returns paginated results.
   */
  page?: number | null;

  /**
   * Number of items per page
   */
  pageSize?: number;

  /**
   * Search in task description.
   */
  query?: string | null;

  status?: TaskStatus | null;
}

export interface TaskRunParams {
  task: string;

  apps?: Array<string>;

  credentials?: Array<TaskRunParams.Credential>;

  files?: Array<string>;

  llmModel?: LlmModel;

  maxSteps?: number;

  outputSchema?: { [key: string]: unknown } | null;

  reasoning?: boolean;

  temperature?: number;

  timeout?: number;

  vision?: boolean;

  vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA' | null;
}

export namespace TaskRunParams {
  export interface Credential {
    credentialNames: Array<string>;

    packageName: string;
  }
}

export interface TaskRunStreamedParams {
  task: string;

  apps?: Array<string>;

  credentials?: Array<TaskRunStreamedParams.Credential>;

  files?: Array<string>;

  llmModel?: LlmModel;

  maxSteps?: number;

  outputSchema?: { [key: string]: unknown } | null;

  reasoning?: boolean;

  temperature?: number;

  timeout?: number;

  vision?: boolean;

  vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA' | null;
}

export namespace TaskRunStreamedParams {
  export interface Credential {
    credentialNames: Array<string>;

    packageName: string;
  }
}

Tasks.Screenshots = Screenshots;

export declare namespace Tasks {
  export {
    type LlmModel as LlmModel,
    type Task as Task,
    type TaskCreate as TaskCreate,
    type TaskStatus as TaskStatus,
    type TaskRetrieveResponse as TaskRetrieveResponse,
    type TaskListResponse as TaskListResponse,
    type TaskGetStatusResponse as TaskGetStatusResponse,
    type TaskGetTrajectoryResponse as TaskGetTrajectoryResponse,
    type TaskRunResponse as TaskRunResponse,
    type TaskStopResponse as TaskStopResponse,
    type TaskListParams as TaskListParams,
    type TaskRunParams as TaskRunParams,
    type TaskRunStreamedParams as TaskRunStreamedParams,
  };

  export {
    Screenshots as Screenshots,
    type MediaResponse as MediaResponse,
    type ScreenshotListResponse as ScreenshotListResponse,
    type ScreenshotRetrieveParams as ScreenshotRetrieveParams,
  };
}
