// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ScreenshotsAPI from './screenshots';
import { MediaResponse, ScreenshotListResponse, ScreenshotRetrieveParams, Screenshots } from './screenshots';
import * as UiStatesAPI from './ui-states';
import { UiStateListResponse, UiStateRetrieveParams, UiStates } from './ui-states';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tasks extends APIResource {
  screenshots: ScreenshotsAPI.Screenshots = new ScreenshotsAPI.Screenshots(this._client);
  uiStates: UiStatesAPI.UiStates = new UiStatesAPI.UiStates(this._client);

  /**
   * Get full details of a task by ID.
   */
  retrieve(taskID: string, options?: RequestOptions): APIPromise<TaskRetrieveResponse> {
    return this._client.get(path`/tasks/${taskID}`, options);
  }

  /**
   * List tasks with optional filtering, sorting, and pagination.
   */
  list(
    query: TaskListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TaskListResponse> {
    return this._client.get('/tasks', { query, ...options });
  }

  /**
   * Attach to a running task and receive its events as an SSE stream.
   */
  attach(taskID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/tasks/${taskID}/attach`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get the status of a task.
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
   * Create and dispatch a new agent task. Returns the task ID and device stream
   * details.
   */
  run(body: TaskRunParams, options?: RequestOptions): APIPromise<TaskRunResponse> {
    return this._client.post('/tasks', { body, ...options });
  }

  /**
   * Create and dispatch a new agent task, returning an SSE stream of task events.
   * Cancels the task if the client disconnects.
   */
  runStreamed(body: TaskRunStreamedParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/tasks/stream', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Cancel a running task. Returns an error if the task is already in a terminal
   * state.
   */
  stop(taskID: string, options?: RequestOptions): APIPromise<TaskStopResponse> {
    return this._client.post(path`/tasks/${taskID}/cancel`, options);
  }
}

export interface Task {
  deviceId: string;

  /**
   * The LLM model identifier to use for the task (e.g. 'gemini/gemini-2.5-flash')
   */
  llmModel: string;

  task: string;

  userId: string;

  id?: string;

  apps?: Array<string>;

  createdAt?: string;

  credentials?: Array<Task.Credential>;

  displayId?: number;

  executionTimeout?: number;

  files?: Array<string>;

  finishedAt?: string | null;

  maxSteps?: number;

  output?: { [key: string]: unknown } | null;

  outputSchema?: { [key: string]: unknown } | null;

  reasoning?: boolean;

  status?: TaskStatus;

  stealth?: boolean;

  steps?: number | null;

  succeeded?: boolean | null;

  temperature?: number;

  tmpDevice?: boolean;

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
    | TaskGetTrajectoryResponse.TrajectoryFinalizeEvent
    | TaskGetTrajectoryResponse.TrajectoryStopEvent
    | TaskGetTrajectoryResponse.TrajectoryResultEvent
    | TaskGetTrajectoryResponse.TrajectoryManagerInputEvent
    | TaskGetTrajectoryResponse.TrajectoryManagerPlanEvent
    | TaskGetTrajectoryResponse.TrajectoryExecutorInputEvent
    | TaskGetTrajectoryResponse.TrajectoryExecutorResultEvent
    | TaskGetTrajectoryResponse.TrajectoryFastAgentInputEvent
    | TaskGetTrajectoryResponse.TrajectoryFastAgentResponseEvent
    | TaskGetTrajectoryResponse.TrajectoryFastAgentToolCallEvent
    | TaskGetTrajectoryResponse.TrajectoryFastAgentOutputEvent
    | TaskGetTrajectoryResponse.TrajectoryFastAgentEndEvent
    | TaskGetTrajectoryResponse.TrajectoryFastAgentExecuteEvent
    | TaskGetTrajectoryResponse.TrajectoryFastAgentResultEvent
    | TaskGetTrajectoryResponse.TrajectoryToolExecutionEvent
    | TaskGetTrajectoryResponse.TrajectoryRecordUiStateEvent
    | TaskGetTrajectoryResponse.TrajectoryManagerContextEvent
    | TaskGetTrajectoryResponse.TrajectoryManagerResponseEvent
    | TaskGetTrajectoryResponse.TrajectoryManagerPlanDetailsEvent
    | TaskGetTrajectoryResponse.TrajectoryExecutorContextEvent
    | TaskGetTrajectoryResponse.TrajectoryExecutorResponseEvent
    | TaskGetTrajectoryResponse.TrajectoryExecutorActionEvent
    | TaskGetTrajectoryResponse.TrajectoryExecutorActionResultEvent
    | TaskGetTrajectoryResponse.TrajectoryUnknownEvent
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
    /**
     * Implicit entry event sent to kick off a `Workflow.run()`.
     */
    data: unknown;

    event: 'StartEvent';
  }

  export interface TrajectoryFinalizeEvent {
    /**
     * Trigger finalization.
     */
    data: TrajectoryFinalizeEvent.Data;

    event: 'FinalizeEvent';
  }

  export namespace TrajectoryFinalizeEvent {
    /**
     * Trigger finalization.
     */
    export interface Data {
      reason: string;

      success: boolean;
    }
  }

  export interface TrajectoryStopEvent {
    /**
     * Terminal event that signals the workflow has completed.
     *
     * The `result` property contains the return value of the workflow run. When a
     * custom stop event subclass is used, the workflow result is that event instance
     * itself.
     *
     * Examples:
     * `python # default stop event: result holds the value return StopEvent(result={"answer": 42}) `
     *
     *     Subclassing to provide a custom result:
     *
     *     ```python
     *     class MyStopEv(StopEvent):
     *         pass
     *
     *     @step
     *     async def my_step(self, ctx: Context, ev: StartEvent) -> MyStopEv:
     *         return MyStopEv(result={"answer": 42})
     */
    data: unknown;

    event: 'StopEvent';
  }

  export interface TrajectoryResultEvent {
    /**
     * Lazy wrapper — avoids importing droidrun at module level.
     *
     * The worker uses droidrun's ResultEvent directly; this model only exists so the
     * API OpenAPI schema can reference it without the heavy droidrun import.
     */
    data: TrajectoryResultEvent.Data;

    event: 'ResultEvent';
  }

  export namespace TrajectoryResultEvent {
    /**
     * Lazy wrapper — avoids importing droidrun at module level.
     *
     * The worker uses droidrun's ResultEvent directly; this model only exists so the
     * API OpenAPI schema can reference it without the heavy droidrun import.
     */
    export interface Data {
      steps?: number | null;

      structured_output?: { [key: string]: unknown } | null;

      success?: boolean | null;
    }
  }

  export interface TrajectoryManagerInputEvent {
    /**
     * Trigger Manager workflow for planning
     */
    data: unknown;

    event: 'ManagerInputEvent';
  }

  export interface TrajectoryManagerPlanEvent {
    /**
     * Coordination event from ManagerAgent to DroidAgent.
     *
     * Used for workflow step routing only (NOT streamed to frontend). For internal
     * events with memory_update metadata, see ManagerPlanDetailsEvent.
     */
    data: TrajectoryManagerPlanEvent.Data;

    event: 'ManagerPlanEvent';
  }

  export namespace TrajectoryManagerPlanEvent {
    /**
     * Coordination event from ManagerAgent to DroidAgent.
     *
     * Used for workflow step routing only (NOT streamed to frontend). For internal
     * events with memory_update metadata, see ManagerPlanDetailsEvent.
     */
    export interface Data {
      current_subgoal: string;

      plan: string;

      thought: string;

      answer?: string;

      success?: boolean | null;
    }
  }

  export interface TrajectoryExecutorInputEvent {
    /**
     * Trigger Executor workflow for action execution
     */
    data: TrajectoryExecutorInputEvent.Data;

    event: 'ExecutorInputEvent';
  }

  export namespace TrajectoryExecutorInputEvent {
    /**
     * Trigger Executor workflow for action execution
     */
    export interface Data {
      current_subgoal: string;
    }
  }

  export interface TrajectoryExecutorResultEvent {
    /**
     * Executor finished with action result.
     */
    data: TrajectoryExecutorResultEvent.Data;

    event: 'ExecutorResultEvent';
  }

  export namespace TrajectoryExecutorResultEvent {
    /**
     * Executor finished with action result.
     */
    export interface Data {
      action: { [key: string]: unknown };

      error: string;

      outcome: boolean;

      summary: string;
    }
  }

  export interface TrajectoryFastAgentInputEvent {
    /**
     * Input ready for LLM.
     */
    data: unknown;

    event: 'FastAgentInputEvent';
  }

  export interface TrajectoryFastAgentResponseEvent {
    /**
     * LLM response received.
     */
    data: TrajectoryFastAgentResponseEvent.Data;

    event: 'FastAgentResponseEvent';
  }

  export namespace TrajectoryFastAgentResponseEvent {
    /**
     * LLM response received.
     */
    export interface Data {
      thought: string;

      code?: string | null;

      usage?: Data.Usage | null;
    }

    export namespace Data {
      export interface Usage {
        request_tokens: number;

        requests: number;

        response_tokens: number;

        total_tokens: number;
      }
    }
  }

  export interface TrajectoryFastAgentToolCallEvent {
    /**
     * Tool calls ready to execute.
     */
    data: TrajectoryFastAgentToolCallEvent.Data;

    event: 'FastAgentToolCallEvent';
  }

  export namespace TrajectoryFastAgentToolCallEvent {
    /**
     * Tool calls ready to execute.
     */
    export interface Data {
      tool_calls_repr: string;
    }
  }

  export interface TrajectoryFastAgentOutputEvent {
    /**
     * Tool execution result.
     */
    data: TrajectoryFastAgentOutputEvent.Data;

    event: 'FastAgentOutputEvent';
  }

  export namespace TrajectoryFastAgentOutputEvent {
    /**
     * Tool execution result.
     */
    export interface Data {
      output: string;
    }
  }

  export interface TrajectoryFastAgentEndEvent {
    /**
     * FastAgent finished.
     */
    data: TrajectoryFastAgentEndEvent.Data;

    event: 'FastAgentEndEvent';
  }

  export namespace TrajectoryFastAgentEndEvent {
    /**
     * FastAgent finished.
     */
    export interface Data {
      reason: string;

      success: boolean;

      tool_call_count?: number;
    }
  }

  export interface TrajectoryFastAgentExecuteEvent {
    data: TrajectoryFastAgentExecuteEvent.Data;

    event: 'FastAgentExecuteEvent';
  }

  export namespace TrajectoryFastAgentExecuteEvent {
    export interface Data {
      instruction: string;
    }
  }

  export interface TrajectoryFastAgentResultEvent {
    data: TrajectoryFastAgentResultEvent.Data;

    event: 'FastAgentResultEvent';
  }

  export namespace TrajectoryFastAgentResultEvent {
    export interface Data {
      instruction: string;

      reason: string;

      success: boolean;
    }
  }

  export interface TrajectoryToolExecutionEvent {
    /**
     * Emitted after every tool call dispatched through ToolRegistry.
     */
    data: TrajectoryToolExecutionEvent.Data;

    event: 'ToolExecutionEvent';
  }

  export namespace TrajectoryToolExecutionEvent {
    /**
     * Emitted after every tool call dispatched through ToolRegistry.
     */
    export interface Data {
      success: boolean;

      summary: string;

      tool_args: { [key: string]: unknown };

      tool_name: string;
    }
  }

  export interface TrajectoryRecordUiStateEvent {
    data: TrajectoryRecordUiStateEvent.Data;

    event: 'RecordUIStateEvent';
  }

  export namespace TrajectoryRecordUiStateEvent {
    export interface Data {
      index: number;

      url: string;
    }
  }

  export interface TrajectoryManagerContextEvent {
    /**
     * Context prepared, ready for LLM call.
     */
    data: unknown;

    event: 'ManagerContextEvent';
  }

  export interface TrajectoryManagerResponseEvent {
    /**
     * LLM response received, ready for parsing.
     */
    data: TrajectoryManagerResponseEvent.Data;

    event: 'ManagerResponseEvent';
  }

  export namespace TrajectoryManagerResponseEvent {
    /**
     * LLM response received, ready for parsing.
     */
    export interface Data {
      response: string;

      usage?: Data.Usage | null;
    }

    export namespace Data {
      export interface Usage {
        request_tokens: number;

        requests: number;

        response_tokens: number;

        total_tokens: number;
      }
    }
  }

  export interface TrajectoryManagerPlanDetailsEvent {
    /**
     * Plan parsed and ready (internal event with full details).
     */
    data: TrajectoryManagerPlanDetailsEvent.Data;

    event: 'ManagerPlanDetailsEvent';
  }

  export namespace TrajectoryManagerPlanDetailsEvent {
    /**
     * Plan parsed and ready (internal event with full details).
     */
    export interface Data {
      plan: string;

      subgoal: string;

      thought: string;

      answer?: string;

      full_response?: string;

      memory_update?: string;

      progress_summary?: string;

      success?: boolean | null;
    }
  }

  export interface TrajectoryExecutorContextEvent {
    /**
     * Context prepared, ready for LLM call.
     */
    data: TrajectoryExecutorContextEvent.Data;

    event: 'ExecutorContextEvent';
  }

  export namespace TrajectoryExecutorContextEvent {
    /**
     * Context prepared, ready for LLM call.
     */
    export interface Data {
      subgoal: string;
    }
  }

  export interface TrajectoryExecutorResponseEvent {
    /**
     * LLM response received, ready for parsing.
     */
    data: TrajectoryExecutorResponseEvent.Data;

    event: 'ExecutorResponseEvent';
  }

  export namespace TrajectoryExecutorResponseEvent {
    /**
     * LLM response received, ready for parsing.
     */
    export interface Data {
      response: string;

      usage?: Data.Usage | null;
    }

    export namespace Data {
      export interface Usage {
        request_tokens: number;

        requests: number;

        response_tokens: number;

        total_tokens: number;
      }
    }
  }

  export interface TrajectoryExecutorActionEvent {
    /**
     * Action parsed, ready to execute.
     */
    data: TrajectoryExecutorActionEvent.Data;

    event: 'ExecutorActionEvent';
  }

  export namespace TrajectoryExecutorActionEvent {
    /**
     * Action parsed, ready to execute.
     */
    export interface Data {
      action_json: string;

      description: string;

      thought: string;

      full_response?: string;
    }
  }

  export interface TrajectoryExecutorActionResultEvent {
    /**
     * Action execution result (internal event with full details).
     */
    data: TrajectoryExecutorActionResultEvent.Data;

    event: 'ExecutorActionResultEvent';
  }

  export namespace TrajectoryExecutorActionResultEvent {
    /**
     * Action execution result (internal event with full details).
     */
    export interface Data {
      action: { [key: string]: unknown };

      error: string;

      success: boolean;

      summary: string;

      full_response?: string;

      thought?: string;
    }
  }

  export interface TrajectoryUnknownEvent {
    event: string;

    data?: { [key: string]: unknown };
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
  /**
   * The LLM model identifier to use for the task (e.g. 'gemini/gemini-2.5-flash')
   */
  llmModel: string;

  task: string;

  apps?: Array<string>;

  credentials?: Array<TaskRunParams.Credential>;

  /**
   * The ID of the device to run the task on.
   */
  deviceId?: string | null;

  /**
   * The display ID of the device to run the task on.
   */
  displayId?: number;

  executionTimeout?: number;

  files?: Array<string>;

  maxSteps?: number;

  outputSchema?: { [key: string]: unknown } | null;

  reasoning?: boolean;

  stealth?: boolean;

  temperature?: number;

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
  /**
   * The LLM model identifier to use for the task (e.g. 'gemini/gemini-2.5-flash')
   */
  llmModel: string;

  task: string;

  apps?: Array<string>;

  credentials?: Array<TaskRunStreamedParams.Credential>;

  /**
   * The ID of the device to run the task on.
   */
  deviceId?: string | null;

  /**
   * The display ID of the device to run the task on.
   */
  displayId?: number;

  executionTimeout?: number;

  files?: Array<string>;

  maxSteps?: number;

  outputSchema?: { [key: string]: unknown } | null;

  reasoning?: boolean;

  stealth?: boolean;

  temperature?: number;

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
Tasks.UiStates = UiStates;

export declare namespace Tasks {
  export {
    type Task as Task,
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

  export {
    UiStates as UiStates,
    type UiStateListResponse as UiStateListResponse,
    type UiStateRetrieveParams as UiStateRetrieveParams,
  };
}
