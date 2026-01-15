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

export type LlmModel =
  | 'openai/gpt-5.1'
  | 'openai/gpt-5.2'
  | 'google/gemini-2.5-flash'
  | 'google/gemini-2.5-pro'
  | 'google/gemini-3-flash'
  | 'google/gemini-3-pro-preview'
  | 'anthropic/claude-sonnet-4.5'
  | 'minimax/minimax-m2'
  | 'moonshotai/kimi-k2-thinking'
  | 'qwen/qwen3-8b';

export interface Task {
  deviceId: string;

  llmModel: LlmModel;

  task: string;

  userId: string;

  id?: string;

  apps?: Array<string>;

  createdAt?: string;

  credentials?: Array<Task.Credential>;

  executionTimeout?: number;

  files?: Array<string>;

  finishedAt?: string | null;

  maxSteps?: number;

  output?: { [key: string]: unknown } | null;

  outputSchema?: { [key: string]: unknown } | null;

  reasoning?: boolean;

  status?: TaskStatus;

  steps?: number | null;

  succeeded?: boolean | null;

  temperature?: number;

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
  llmModel: LlmModel;

  task: string;

  apps?: Array<string>;

  credentials?: Array<TaskCreate.Credential>;

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

  temperature?: number;

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
    | TaskGetTrajectoryResponse.TrajectoryCodeActInputEvent
    | TaskGetTrajectoryResponse.TrajectoryCodeActResponseEvent
    | TaskGetTrajectoryResponse.TrajectoryCodeActCodeEvent
    | TaskGetTrajectoryResponse.TrajectoryCodeActOutputEvent
    | TaskGetTrajectoryResponse.TrajectoryCodeActEndEvent
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
    data: { [key: string]: unknown };

    event: 'ResultEvent';
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

      manager_answer?: string;

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

  export interface TrajectoryScripterExecutorInputEvent {
    /**
     * Trigger ScripterAgent workflow for off-device operations
     */
    data: TrajectoryScripterExecutorInputEvent.Data;

    event: 'ScripterExecutorInputEvent';
  }

  export namespace TrajectoryScripterExecutorInputEvent {
    /**
     * Trigger ScripterAgent workflow for off-device operations
     */
    export interface Data {
      task: string;
    }
  }

  export interface TrajectoryScripterExecutorResultEvent {
    /**
     * Scripter finished.
     */
    data: TrajectoryScripterExecutorResultEvent.Data;

    event: 'ScripterExecutorResultEvent';
  }

  export namespace TrajectoryScripterExecutorResultEvent {
    /**
     * Scripter finished.
     */
    export interface Data {
      code_executions: number;

      message: string;

      success: boolean;

      task: string;
    }
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

  export interface TrajectoryCodeActInputEvent {
    /**
     * Input ready for LLM.
     */
    data: unknown;

    event: 'CodeActInputEvent';
  }

  export interface TrajectoryCodeActResponseEvent {
    /**
     * LLM response received.
     */
    data: TrajectoryCodeActResponseEvent.Data;

    event: 'CodeActResponseEvent';
  }

  export namespace TrajectoryCodeActResponseEvent {
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

  export interface TrajectoryCodeActCodeEvent {
    /**
     * Code ready to execute (internal event).
     */
    data: TrajectoryCodeActCodeEvent.Data;

    event: 'CodeActCodeEvent';
  }

  export namespace TrajectoryCodeActCodeEvent {
    /**
     * Code ready to execute (internal event).
     */
    export interface Data {
      code: string;
    }
  }

  export interface TrajectoryCodeActOutputEvent {
    /**
     * Code execution result (internal event).
     */
    data: TrajectoryCodeActOutputEvent.Data;

    event: 'CodeActOutputEvent';
  }

  export namespace TrajectoryCodeActOutputEvent {
    /**
     * Code execution result (internal event).
     */
    export interface Data {
      output: string;
    }
  }

  export interface TrajectoryCodeActEndEvent {
    /**
     * CodeAct finished.
     */
    data: TrajectoryCodeActEndEvent.Data;

    event: 'CodeActEndEvent';
  }

  export namespace TrajectoryCodeActEndEvent {
    /**
     * CodeAct finished.
     */
    export interface Data {
      reason: string;

      success: boolean;

      code_executions?: number;
    }
  }

  export interface TrajectoryCodeActExecuteEvent {
    data: TrajectoryCodeActExecuteEvent.Data;

    event: 'CodeActExecuteEvent';
  }

  export namespace TrajectoryCodeActExecuteEvent {
    export interface Data {
      instruction: string;
    }
  }

  export interface TrajectoryCodeActResultEvent {
    data: TrajectoryCodeActResultEvent.Data;

    event: 'CodeActResultEvent';
  }

  export namespace TrajectoryCodeActResultEvent {
    export interface Data {
      instruction: string;

      reason: string;

      success: boolean;
    }
  }

  export interface TrajectoryTapActionEvent {
    /**
     * Event for tap actions with coordinates
     */
    data: TrajectoryTapActionEvent.Data;

    event: 'TapActionEvent';
  }

  export namespace TrajectoryTapActionEvent {
    /**
     * Event for tap actions with coordinates
     */
    export interface Data {
      action_type: string;

      description: string;

      x: number;

      y: number;

      element_bounds?: string;

      element_index?: number | null;

      element_text?: string;
    }
  }

  export interface TrajectorySwipeActionEvent {
    /**
     * Event for swipe actions with coordinates
     */
    data: TrajectorySwipeActionEvent.Data;

    event: 'SwipeActionEvent';
  }

  export namespace TrajectorySwipeActionEvent {
    /**
     * Event for swipe actions with coordinates
     */
    export interface Data {
      action_type: string;

      description: string;

      duration_ms: number;

      end_x: number;

      end_y: number;

      start_x: number;

      start_y: number;
    }
  }

  export interface TrajectoryDragActionEvent {
    /**
     * Event for drag actions with coordinates
     */
    data: TrajectoryDragActionEvent.Data;

    event: 'DragActionEvent';
  }

  export namespace TrajectoryDragActionEvent {
    /**
     * Event for drag actions with coordinates
     */
    export interface Data {
      action_type: string;

      description: string;

      duration_ms: number;

      end_x: number;

      end_y: number;

      start_x: number;

      start_y: number;
    }
  }

  export interface TrajectoryInputTextActionEvent {
    /**
     * Event for text input actions
     */
    data: TrajectoryInputTextActionEvent.Data;

    event: 'InputTextActionEvent';
  }

  export namespace TrajectoryInputTextActionEvent {
    /**
     * Event for text input actions
     */
    export interface Data {
      action_type: string;

      description: string;

      text: string;
    }
  }

  export interface TrajectoryKeyPressActionEvent {
    /**
     * Event for key press actions
     */
    data: TrajectoryKeyPressActionEvent.Data;

    event: 'KeyPressActionEvent';
  }

  export namespace TrajectoryKeyPressActionEvent {
    /**
     * Event for key press actions
     */
    export interface Data {
      action_type: string;

      description: string;

      keycode: number;

      key_name?: string;
    }
  }

  export interface TrajectoryStartAppEvent {
    /**
     * "Event for starting an app
     */
    data: TrajectoryStartAppEvent.Data;

    event: 'StartAppEvent';
  }

  export namespace TrajectoryStartAppEvent {
    /**
     * "Event for starting an app
     */
    export interface Data {
      action_type: string;

      description: string;

      package: string;

      activity?: string | null;
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

  export interface TrajectoryWaitEvent {
    /**
     * Event for wait/sleep actions
     */
    data: TrajectoryWaitEvent.Data;

    event: 'WaitEvent';
  }

  export namespace TrajectoryWaitEvent {
    /**
     * Event for wait/sleep actions
     */
    export interface Data {
      action_type: string;

      description: string;

      duration: number;
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

  export interface TrajectoryScripterInputEvent {
    /**
     * Input ready for LLM.
     */
    data: unknown;

    event: 'ScripterInputEvent';
  }

  export interface TrajectoryScripterThinkingEvent {
    /**
     * LLM response received.
     */
    data: TrajectoryScripterThinkingEvent.Data;

    event: 'ScripterThinkingEvent';
  }

  export namespace TrajectoryScripterThinkingEvent {
    /**
     * LLM response received.
     */
    export interface Data {
      thought: string;

      code?: string | null;

      full_response?: string;

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

  export interface TrajectoryScripterExecutionEvent {
    /**
     * Code ready to execute.
     */
    data: TrajectoryScripterExecutionEvent.Data;

    event: 'ScripterExecutionEvent';
  }

  export namespace TrajectoryScripterExecutionEvent {
    /**
     * Code ready to execute.
     */
    export interface Data {
      code: string;
    }
  }

  export interface TrajectoryScripterExecutionResultEvent {
    /**
     * Code execution result.
     */
    data: TrajectoryScripterExecutionResultEvent.Data;

    event: 'ScripterExecutionResultEvent';
  }

  export namespace TrajectoryScripterExecutionResultEvent {
    /**
     * Code execution result.
     */
    export interface Data {
      output: string;
    }
  }

  export interface TrajectoryScripterEndEvent {
    /**
     * Scripter finished.
     */
    data: TrajectoryScripterEndEvent.Data;

    event: 'ScripterEndEvent';
  }

  export namespace TrajectoryScripterEndEvent {
    /**
     * Scripter finished.
     */
    export interface Data {
      message: string;

      success: boolean;

      code_executions?: number;
    }
  }

  export interface TrajectoryTextManipulatorInputEvent {
    /**
     * Trigger TextManipulatorAgent workflow for text manipulation
     */
    data: TrajectoryTextManipulatorInputEvent.Data;

    event: 'TextManipulatorInputEvent';
  }

  export namespace TrajectoryTextManipulatorInputEvent {
    /**
     * Trigger TextManipulatorAgent workflow for text manipulation
     */
    export interface Data {
      task: string;
    }
  }

  export interface TrajectoryTextManipulatorResultEvent {
    data: TrajectoryTextManipulatorResultEvent.Data;

    event: 'TextManipulatorResultEvent';
  }

  export namespace TrajectoryTextManipulatorResultEvent {
    export interface Data {
      code_ran: string;

      task: string;

      text_to_type: string;
    }
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
  llmModel: LlmModel;

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
  llmModel: LlmModel;

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

  export {
    UiStates as UiStates,
    type UiStateListResponse as UiStateListResponse,
    type UiStateRetrieveParams as UiStateRetrieveParams,
  };
}
