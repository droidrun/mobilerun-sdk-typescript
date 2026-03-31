// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'retrieve',
    endpoint: '/tasks/{task_id}',
    httpMethod: 'get',
    summary: 'Get Task',
    description: 'Get full details of a task by ID.',
    stainlessPath: '(resource) tasks > (method) retrieve',
    qualified: 'client.tasks.retrieve',
    params: ['task_id: string;'],
    response:
      "{ task: { deviceId: string; llmModel: string; task: string; userId: string; id?: string; agentId?: number; apps?: string[]; createdAt?: string; credentials?: package_credentials[]; displayId?: number; executionTimeout?: number; files?: string[]; finishedAt?: string; maxSteps?: number; message?: string; output?: object; outputSchema?: object; reasoning?: boolean; status?: task_status; stealth?: boolean; steps?: number; subagentModel?: string; succeeded?: boolean; temperature?: number; tmpDevice?: boolean; trajectory?: object[]; updatedAt?: string; vision?: boolean; vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA'; }; }",
    markdown:
      "## retrieve\n\n`client.tasks.retrieve(task_id: string): { task: task; }`\n\n**get** `/tasks/{task_id}`\n\nGet full details of a task by ID.\n\n### Parameters\n\n- `task_id: string`\n\n### Returns\n\n- `{ task: { deviceId: string; llmModel: string; task: string; userId: string; id?: string; agentId?: number; apps?: string[]; createdAt?: string; credentials?: package_credentials[]; displayId?: number; executionTimeout?: number; files?: string[]; finishedAt?: string; maxSteps?: number; message?: string; output?: object; outputSchema?: object; reasoning?: boolean; status?: task_status; stealth?: boolean; steps?: number; subagentModel?: string; succeeded?: boolean; temperature?: number; tmpDevice?: boolean; trajectory?: object[]; updatedAt?: string; vision?: boolean; vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA'; }; }`\n\n  - `task: { deviceId: string; llmModel: string; task: string; userId: string; id?: string; agentId?: number; apps?: string[]; createdAt?: string; credentials?: { credentialNames: string[]; packageName: string; }[]; displayId?: number; executionTimeout?: number; files?: string[]; finishedAt?: string; maxSteps?: number; message?: string; output?: object; outputSchema?: object; reasoning?: boolean; status?: 'created' | 'running' | 'paused' | 'completed' | 'failed' | 'cancelled'; stealth?: boolean; steps?: number; subagentModel?: string; succeeded?: boolean; temperature?: number; tmpDevice?: boolean; trajectory?: object[]; updatedAt?: string; vision?: boolean; vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA'; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst task = await client.tasks.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(task);\n```",
  },
  {
    name: 'list',
    endpoint: '/tasks',
    httpMethod: 'get',
    summary: 'List Tasks',
    description: 'List tasks with optional filtering, sorting, and pagination.',
    stainlessPath: '(resource) tasks > (method) list',
    qualified: 'client.tasks.list',
    params: [
      "orderBy?: 'id' | 'createdAt' | 'finishedAt' | 'status';",
      "orderByDirection?: 'asc' | 'desc';",
      'page?: number;',
      'pageSize?: number;',
      'query?: string;',
      "status?: 'created' | 'running' | 'paused' | 'completed' | 'failed' | 'cancelled';",
    ],
    response:
      "{ items: { deviceId: string; llmModel: string; task: string; userId: string; id?: string; agentId?: number; apps?: string[]; createdAt?: string; credentials?: package_credentials[]; displayId?: number; executionTimeout?: number; files?: string[]; finishedAt?: string; maxSteps?: number; message?: string; output?: object; outputSchema?: object; reasoning?: boolean; status?: task_status; stealth?: boolean; steps?: number; subagentModel?: string; succeeded?: boolean; temperature?: number; tmpDevice?: boolean; trajectory?: object[]; updatedAt?: string; vision?: boolean; vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA'; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }",
    markdown:
      "## list\n\n`client.tasks.list(orderBy?: 'id' | 'createdAt' | 'finishedAt' | 'status', orderByDirection?: 'asc' | 'desc', page?: number, pageSize?: number, query?: string, status?: 'created' | 'running' | 'paused' | 'completed' | 'failed' | 'cancelled'): { items: task[]; pagination: pagination_meta; }`\n\n**get** `/tasks`\n\nList tasks with optional filtering, sorting, and pagination.\n\n### Parameters\n\n- `orderBy?: 'id' | 'createdAt' | 'finishedAt' | 'status'`\n\n- `orderByDirection?: 'asc' | 'desc'`\n\n- `page?: number`\n\n- `pageSize?: number`\n\n- `query?: string`\n  Search in task description.\n\n- `status?: 'created' | 'running' | 'paused' | 'completed' | 'failed' | 'cancelled'`\n\n### Returns\n\n- `{ items: { deviceId: string; llmModel: string; task: string; userId: string; id?: string; agentId?: number; apps?: string[]; createdAt?: string; credentials?: package_credentials[]; displayId?: number; executionTimeout?: number; files?: string[]; finishedAt?: string; maxSteps?: number; message?: string; output?: object; outputSchema?: object; reasoning?: boolean; status?: task_status; stealth?: boolean; steps?: number; subagentModel?: string; succeeded?: boolean; temperature?: number; tmpDevice?: boolean; trajectory?: object[]; updatedAt?: string; vision?: boolean; vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA'; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }`\n\n  - `items: { deviceId: string; llmModel: string; task: string; userId: string; id?: string; agentId?: number; apps?: string[]; createdAt?: string; credentials?: { credentialNames: string[]; packageName: string; }[]; displayId?: number; executionTimeout?: number; files?: string[]; finishedAt?: string; maxSteps?: number; message?: string; output?: object; outputSchema?: object; reasoning?: boolean; status?: 'created' | 'running' | 'paused' | 'completed' | 'failed' | 'cancelled'; stealth?: boolean; steps?: number; subagentModel?: string; succeeded?: boolean; temperature?: number; tmpDevice?: boolean; trajectory?: object[]; updatedAt?: string; vision?: boolean; vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA'; }[]`\n  - `pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst tasks = await client.tasks.list();\n\nconsole.log(tasks);\n```",
  },
  {
    name: 'attach',
    endpoint: '/tasks/{task_id}/attach',
    httpMethod: 'get',
    summary: 'Attach Task',
    description: 'Attach to a running task and receive its events as an SSE stream.',
    stainlessPath: '(resource) tasks > (method) attach',
    qualified: 'client.tasks.attach',
    params: ['task_id: string;'],
    markdown:
      "## attach\n\n`client.tasks.attach(task_id: string): void`\n\n**get** `/tasks/{task_id}/attach`\n\nAttach to a running task and receive its events as an SSE stream.\n\n### Parameters\n\n- `task_id: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.tasks.attach('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e')\n```",
  },
  {
    name: 'get_status',
    endpoint: '/tasks/{task_id}/status',
    httpMethod: 'get',
    summary: 'Get Task Status',
    description: 'Get the status of a task.',
    stainlessPath: '(resource) tasks > (method) get_status',
    qualified: 'client.tasks.getStatus',
    params: ['task_id: string;'],
    response:
      "{ status: 'created' | 'running' | 'paused' | 'completed' | 'failed' | 'cancelled'; lastResponse?: object; message?: string; output?: object; steps?: number; succeeded?: boolean; }",
    markdown:
      "## get_status\n\n`client.tasks.getStatus(task_id: string): { status: task_status; lastResponse?: object; message?: string; output?: object; steps?: number; succeeded?: boolean; }`\n\n**get** `/tasks/{task_id}/status`\n\nGet the status of a task.\n\n### Parameters\n\n- `task_id: string`\n\n### Returns\n\n- `{ status: 'created' | 'running' | 'paused' | 'completed' | 'failed' | 'cancelled'; lastResponse?: object; message?: string; output?: object; steps?: number; succeeded?: boolean; }`\n\n  - `status: 'created' | 'running' | 'paused' | 'completed' | 'failed' | 'cancelled'`\n  - `lastResponse?: object`\n  - `message?: string`\n  - `output?: object`\n  - `steps?: number`\n  - `succeeded?: boolean`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.tasks.getStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_trajectory',
    endpoint: '/tasks/{task_id}/trajectory',
    httpMethod: 'get',
    summary: 'Get Task Trajectory',
    description: 'Get the trajectory of a task.',
    stainlessPath: '(resource) tasks > (method) get_trajectory',
    qualified: 'client.tasks.getTrajectory',
    params: ['task_id: string;'],
    response:
      '{ trajectory: object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object[]; }',
    markdown:
      "## get_trajectory\n\n`client.tasks.getTrajectory(task_id: string): { trajectory: object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object[]; }`\n\n**get** `/tasks/{task_id}/trajectory`\n\nGet the trajectory of a task.\n\n### Parameters\n\n- `task_id: string`\n\n### Returns\n\n- `{ trajectory: { data: { id: string; streamUrl: string; }; event: 'CreatedEvent'; } | { data: { exception: string; }; event: 'ExceptionEvent'; } | { data: { reason: string; }; event: 'CancelEvent'; } | { data: { index: number; url: string; }; event: 'ScreenshotEvent'; } | { data: object; event: 'StartEvent'; } | { data: { reason: string; success: boolean; }; event: 'FinalizeEvent'; } | { data: object; event: 'StopEvent'; } | { data: { message?: string; steps?: number; structured_output?: object; success?: boolean; }; event: 'ResultEvent'; } | { data: object; event: 'ManagerInputEvent'; } | { data: { current_subgoal: string; plan: string; thought: string; answer?: string; success?: boolean; }; event: 'ManagerPlanEvent'; } | { data: { current_subgoal: string; }; event: 'ExecutorInputEvent'; } | { data: { action: object; error: string; outcome: boolean; summary: string; }; event: 'ExecutorResultEvent'; } | { data: object; event: 'FastAgentInputEvent'; } | { data: { thought: string; code?: string; usage?: usage_result; }; event: 'FastAgentResponseEvent'; } | { data: { tool_calls_repr: string; }; event: 'FastAgentToolCallEvent'; } | { data: { output: string; }; event: 'FastAgentOutputEvent'; } | { data: { reason: string; success: boolean; tool_call_count?: number; }; event: 'FastAgentEndEvent'; } | { data: { instruction: string; }; event: 'FastAgentExecuteEvent'; } | { data: { instruction: string; reason: string; success: boolean; }; event: 'FastAgentResultEvent'; } | { data: { success: boolean; summary: string; tool_args: object; tool_name: string; }; event: 'ToolExecutionEvent'; } | { data: { index: number; url: string; }; event: 'RecordUIStateEvent'; } | { data: object; event: 'ManagerContextEvent'; } | { data: { response: string; usage?: usage_result; }; event: 'ManagerResponseEvent'; } | { data: { plan: string; subgoal: string; thought: string; answer?: string; full_response?: string; memory_update?: string; progress_summary?: string; success?: boolean; }; event: 'ManagerPlanDetailsEvent'; } | { data: { subgoal: string; }; event: 'ExecutorContextEvent'; } | { data: { response: string; usage?: usage_result; }; event: 'ExecutorResponseEvent'; } | { data: { action_json: string; description: string; thought: string; full_response?: string; }; event: 'ExecutorActionEvent'; } | { data: { action: object; error: string; success: boolean; summary: string; full_response?: string; thought?: string; }; event: 'ExecutorActionResultEvent'; } | { data: { action: string; message_ids: string[]; consumer?: string; reason?: string; step_number?: number; }; event: 'UserMessageEvent'; } | { event: string; data?: object; }[]; }`\n\n  - `trajectory: { data: { id: string; streamUrl: string; }; event: 'CreatedEvent'; } | { data: { exception: string; }; event: 'ExceptionEvent'; } | { data: { reason: string; }; event: 'CancelEvent'; } | { data: { index: number; url: string; }; event: 'ScreenshotEvent'; } | { data: object; event: 'StartEvent'; } | { data: { reason: string; success: boolean; }; event: 'FinalizeEvent'; } | { data: object; event: 'StopEvent'; } | { data: { message?: string; steps?: number; structured_output?: object; success?: boolean; }; event: 'ResultEvent'; } | { data: object; event: 'ManagerInputEvent'; } | { data: { current_subgoal: string; plan: string; thought: string; answer?: string; success?: boolean; }; event: 'ManagerPlanEvent'; } | { data: { current_subgoal: string; }; event: 'ExecutorInputEvent'; } | { data: { action: object; error: string; outcome: boolean; summary: string; }; event: 'ExecutorResultEvent'; } | { data: object; event: 'FastAgentInputEvent'; } | { data: { thought: string; code?: string; usage?: { request_tokens: number; requests: number; response_tokens: number; total_tokens: number; }; }; event: 'FastAgentResponseEvent'; } | { data: { tool_calls_repr: string; }; event: 'FastAgentToolCallEvent'; } | { data: { output: string; }; event: 'FastAgentOutputEvent'; } | { data: { reason: string; success: boolean; tool_call_count?: number; }; event: 'FastAgentEndEvent'; } | { data: { instruction: string; }; event: 'FastAgentExecuteEvent'; } | { data: { instruction: string; reason: string; success: boolean; }; event: 'FastAgentResultEvent'; } | { data: { success: boolean; summary: string; tool_args: object; tool_name: string; }; event: 'ToolExecutionEvent'; } | { data: { index: number; url: string; }; event: 'RecordUIStateEvent'; } | { data: object; event: 'ManagerContextEvent'; } | { data: { response: string; usage?: { request_tokens: number; requests: number; response_tokens: number; total_tokens: number; }; }; event: 'ManagerResponseEvent'; } | { data: { plan: string; subgoal: string; thought: string; answer?: string; full_response?: string; memory_update?: string; progress_summary?: string; success?: boolean; }; event: 'ManagerPlanDetailsEvent'; } | { data: { subgoal: string; }; event: 'ExecutorContextEvent'; } | { data: { response: string; usage?: { request_tokens: number; requests: number; response_tokens: number; total_tokens: number; }; }; event: 'ExecutorResponseEvent'; } | { data: { action_json: string; description: string; thought: string; full_response?: string; }; event: 'ExecutorActionEvent'; } | { data: { action: object; error: string; success: boolean; summary: string; full_response?: string; thought?: string; }; event: 'ExecutorActionResultEvent'; } | { data: { action: string; message_ids: string[]; consumer?: string; reason?: string; step_number?: number; }; event: 'UserMessageEvent'; } | { event: string; data?: object; }[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.tasks.getTrajectory('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
  },
  {
    name: 'run',
    endpoint: '/tasks',
    httpMethod: 'post',
    summary: 'Run Task',
    description: 'Create and dispatch a new agent task. Returns the task ID and device stream details.',
    stainlessPath: '(resource) tasks > (method) run',
    qualified: 'client.tasks.run',
    params: [
      'deviceId: string;',
      'task: string;',
      'agentId?: number;',
      'apps?: string[];',
      'credentials?: { credentialNames: string[]; packageName: string; }[];',
      'displayId?: number;',
      'executionTimeout?: number;',
      'files?: string[];',
      'llmModel?: string;',
      'maxSteps?: number;',
      'outputSchema?: object;',
      'reasoning?: boolean;',
      'stealth?: boolean;',
      'subagentModel?: string;',
      'temperature?: number;',
      'vision?: boolean;',
      "vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA';",
    ],
    response: '{ id: string; streamUrl: string; }',
    markdown:
      "## run\n\n`client.tasks.run(deviceId: string, task: string, agentId?: number, apps?: string[], credentials?: { credentialNames: string[]; packageName: string; }[], displayId?: number, executionTimeout?: number, files?: string[], llmModel?: string, maxSteps?: number, outputSchema?: object, reasoning?: boolean, stealth?: boolean, subagentModel?: string, temperature?: number, vision?: boolean, vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA'): { id: string; streamUrl: string; }`\n\n**post** `/tasks`\n\nCreate and dispatch a new agent task. Returns the task ID and device stream details.\n\n### Parameters\n\n- `deviceId: string`\n  The ID of the device to run the task on.\n\n- `task: string`\n\n- `agentId?: number`\n\n- `apps?: string[]`\n\n- `credentials?: { credentialNames: string[]; packageName: string; }[]`\n\n- `displayId?: number`\n  The display ID of the device to run the task on.\n\n- `executionTimeout?: number`\n\n- `files?: string[]`\n\n- `llmModel?: string`\n  The LLM model identifier to use for the task (e.g. 'google/gemini-3.1-flash-lite-preview')\n\n- `maxSteps?: number`\n\n- `outputSchema?: object`\n\n- `reasoning?: boolean`\n\n- `stealth?: boolean`\n\n- `subagentModel?: string`\n  LLM model used by sub-agent roles: executor, app_opener, structured_output\n\n- `temperature?: number`\n\n- `vision?: boolean`\n\n- `vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA'`\n\n### Returns\n\n- `{ id: string; streamUrl: string; }`\n\n  - `id: string`\n  - `streamUrl: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.tasks.run({ deviceId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', task: 'x' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'run_streamed',
    endpoint: '/tasks/stream',
    httpMethod: 'post',
    summary: 'Run Streamed Task',
    description:
      'Create and dispatch a new agent task, returning an SSE stream of task events. Cancels the task if the client disconnects.',
    stainlessPath: '(resource) tasks > (method) run_streamed',
    qualified: 'client.tasks.runStreamed',
    params: [
      'deviceId: string;',
      'task: string;',
      'agentId?: number;',
      'apps?: string[];',
      'credentials?: { credentialNames: string[]; packageName: string; }[];',
      'displayId?: number;',
      'executionTimeout?: number;',
      'files?: string[];',
      'llmModel?: string;',
      'maxSteps?: number;',
      'outputSchema?: object;',
      'reasoning?: boolean;',
      'stealth?: boolean;',
      'subagentModel?: string;',
      'temperature?: number;',
      'vision?: boolean;',
      "vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA';",
    ],
    response: 'object',
    markdown:
      "## run_streamed\n\n`client.tasks.runStreamed(deviceId: string, task: string, agentId?: number, apps?: string[], credentials?: { credentialNames: string[]; packageName: string; }[], displayId?: number, executionTimeout?: number, files?: string[], llmModel?: string, maxSteps?: number, outputSchema?: object, reasoning?: boolean, stealth?: boolean, subagentModel?: string, temperature?: number, vision?: boolean, vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA'): object`\n\n**post** `/tasks/stream`\n\nCreate and dispatch a new agent task, returning an SSE stream of task events. Cancels the task if the client disconnects.\n\n### Parameters\n\n- `deviceId: string`\n  The ID of the device to run the task on.\n\n- `task: string`\n\n- `agentId?: number`\n\n- `apps?: string[]`\n\n- `credentials?: { credentialNames: string[]; packageName: string; }[]`\n\n- `displayId?: number`\n  The display ID of the device to run the task on.\n\n- `executionTimeout?: number`\n\n- `files?: string[]`\n\n- `llmModel?: string`\n  The LLM model identifier to use for the task (e.g. 'google/gemini-3.1-flash-lite-preview')\n\n- `maxSteps?: number`\n\n- `outputSchema?: object`\n\n- `reasoning?: boolean`\n\n- `stealth?: boolean`\n\n- `subagentModel?: string`\n  LLM model used by sub-agent roles: executor, app_opener, structured_output\n\n- `temperature?: number`\n\n- `vision?: boolean`\n\n- `vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA'`\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.tasks.runStreamed({ deviceId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', task: 'x' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'send_message',
    endpoint: '/tasks/{task_id}/message',
    httpMethod: 'post',
    summary: 'Send Message',
    description:
      'Send a message to a running agent task. The message ID is delivered via SSE (UserMessageEvent with action=queued).',
    stainlessPath: '(resource) tasks > (method) send_message',
    qualified: 'client.tasks.sendMessage',
    params: ['task_id: string;', 'message: string;'],
    response: '{ sent: boolean; }',
    markdown:
      "## send_message\n\n`client.tasks.sendMessage(task_id: string, message: string): { sent: boolean; }`\n\n**post** `/tasks/{task_id}/message`\n\nSend a message to a running agent task. The message ID is delivered via SSE (UserMessageEvent with action=queued).\n\n### Parameters\n\n- `task_id: string`\n\n- `message: string`\n  Message to send to the running agent\n\n### Returns\n\n- `{ sent: boolean; }`\n\n  - `sent: boolean`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.tasks.sendMessage('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { message: 'x' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'stop',
    endpoint: '/tasks/{task_id}/cancel',
    httpMethod: 'post',
    summary: 'Stop Task',
    description: 'Cancel a running task. Returns an error if the task is already in a terminal state.',
    stainlessPath: '(resource) tasks > (method) stop',
    qualified: 'client.tasks.stop',
    params: ['task_id: string;'],
    response: '{ cancelled: boolean; }',
    markdown:
      "## stop\n\n`client.tasks.stop(task_id: string): { cancelled: boolean; }`\n\n**post** `/tasks/{task_id}/cancel`\n\nCancel a running task. Returns an error if the task is already in a terminal state.\n\n### Parameters\n\n- `task_id: string`\n\n### Returns\n\n- `{ cancelled: boolean; }`\n\n  - `cancelled: boolean`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.tasks.stop('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/tasks/{task_id}/screenshots/{index}',
    httpMethod: 'get',
    summary: 'Get Task Screenshot',
    description: 'Get a specific screenshot by index.',
    stainlessPath: '(resource) tasks.screenshots > (method) retrieve',
    qualified: 'client.tasks.screenshots.retrieve',
    params: ['task_id: string;', 'index: number;'],
    response: '{ url: string; }',
    markdown:
      "## retrieve\n\n`client.tasks.screenshots.retrieve(task_id: string, index: number): { url: string; }`\n\n**get** `/tasks/{task_id}/screenshots/{index}`\n\nGet a specific screenshot by index.\n\n### Parameters\n\n- `task_id: string`\n\n- `index: number`\n\n### Returns\n\n- `{ url: string; }`\n\n  - `url: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst mediaResponse = await client.tasks.screenshots.retrieve(0, { task_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(mediaResponse);\n```",
  },
  {
    name: 'list',
    endpoint: '/tasks/{task_id}/screenshots',
    httpMethod: 'get',
    summary: 'Get Task Screenshots',
    description: 'List all screenshot URLs for a task.',
    stainlessPath: '(resource) tasks.screenshots > (method) list',
    qualified: 'client.tasks.screenshots.list',
    params: ['task_id: string;'],
    response: '{ urls: string[]; }',
    markdown:
      "## list\n\n`client.tasks.screenshots.list(task_id: string): { urls: string[]; }`\n\n**get** `/tasks/{task_id}/screenshots`\n\nList all screenshot URLs for a task.\n\n### Parameters\n\n- `task_id: string`\n\n### Returns\n\n- `{ urls: string[]; }`\n\n  - `urls: string[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst screenshots = await client.tasks.screenshots.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(screenshots);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/tasks/{task_id}/ui_states/{index}',
    httpMethod: 'get',
    summary: 'Get Task Ui State',
    description: 'Get a specific UI state by index.',
    stainlessPath: '(resource) tasks.ui_states > (method) retrieve',
    qualified: 'client.tasks.uiStates.retrieve',
    params: ['task_id: string;', 'index: number;'],
    response: '{ url: string; }',
    markdown:
      "## retrieve\n\n`client.tasks.uiStates.retrieve(task_id: string, index: number): { url: string; }`\n\n**get** `/tasks/{task_id}/ui_states/{index}`\n\nGet a specific UI state by index.\n\n### Parameters\n\n- `task_id: string`\n\n- `index: number`\n\n### Returns\n\n- `{ url: string; }`\n\n  - `url: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst mediaResponse = await client.tasks.uiStates.retrieve(0, { task_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(mediaResponse);\n```",
  },
  {
    name: 'list',
    endpoint: '/tasks/{task_id}/ui_states',
    httpMethod: 'get',
    summary: 'Get Task Ui States',
    description: 'List all UI state URLs for a task.',
    stainlessPath: '(resource) tasks.ui_states > (method) list',
    qualified: 'client.tasks.uiStates.list',
    params: ['task_id: string;'],
    response: '{ urls: string[]; }',
    markdown:
      "## list\n\n`client.tasks.uiStates.list(task_id: string): { urls: string[]; }`\n\n**get** `/tasks/{task_id}/ui_states`\n\nList all UI state URLs for a task.\n\n### Parameters\n\n- `task_id: string`\n\n### Returns\n\n- `{ urls: string[]; }`\n\n  - `urls: string[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst uiStates = await client.tasks.uiStates.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(uiStates);\n```",
  },
  {
    name: 'list',
    endpoint: '/agents',
    httpMethod: 'get',
    summary: 'Get Agents',
    description: 'List all available agents with their default configurations.',
    stainlessPath: '(resource) agents > (method) list',
    qualified: 'client.agents.list',
    response:
      '{ id: number; description: string; icon: string; llmModel: string; maxSteps: number; name: string; reasoning: boolean; subagentModel: string; vision: boolean; }[]',
    markdown:
      "## list\n\n`client.agents.list(): { id: number; description: string; icon: string; llmModel: string; maxSteps: number; name: string; reasoning: boolean; subagentModel: string; vision: boolean; }[]`\n\n**get** `/agents`\n\nList all available agents with their default configurations.\n\n### Returns\n\n- `{ id: number; description: string; icon: string; llmModel: string; maxSteps: number; name: string; reasoning: boolean; subagentModel: string; vision: boolean; }[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst agents = await client.agents.list();\n\nconsole.log(agents);\n```",
  },
  {
    name: 'create',
    endpoint: '/proxies',
    httpMethod: 'post',
    summary: 'Create a new proxy config',
    description: 'Create a new proxy config',
    stainlessPath: '(resource) proxies > (method) create',
    qualified: 'client.proxies.create',
    params: ['host: string;', 'name: string;', 'password: string;', 'port: number;', 'user: string;'],
    response:
      '{ data: { host: string; name: string; password: string; port: number; proxyId: string; user: string; }; message: string; success: true; }',
    markdown:
      "## create\n\n`client.proxies.create(host: string, name: string, password: string, port: number, user: string): { data: proxy_config; message: string; success: true; }`\n\n**post** `/proxies`\n\nCreate a new proxy config\n\n### Parameters\n\n- `host: string`\n\n- `name: string`\n\n- `password: string`\n\n- `port: number`\n\n- `user: string`\n\n### Returns\n\n- `{ data: { host: string; name: string; password: string; port: number; proxyId: string; user: string; }; message: string; success: true; }`\n\n  - `data: { host: string; name: string; password: string; port: number; proxyId: string; user: string; }`\n  - `message: string`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst proxy = await client.proxies.create({\n  host: 'x',\n  name: 'xxx',\n  password: 'x',\n  port: 1,\n  user: 'x',\n});\n\nconsole.log(proxy);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/proxies/{proxyId}',
    httpMethod: 'get',
    summary: 'Get a specific proxy config',
    description: 'Get a specific proxy config',
    stainlessPath: '(resource) proxies > (method) retrieve',
    qualified: 'client.proxies.retrieve',
    params: ['proxyId: string;'],
    response:
      '{ data: { host: string; name: string; password: string; port: number; proxyId: string; user: string; }; }',
    markdown:
      "## retrieve\n\n`client.proxies.retrieve(proxyId: string): { data: proxy_config; }`\n\n**get** `/proxies/{proxyId}`\n\nGet a specific proxy config\n\n### Parameters\n\n- `proxyId: string`\n\n### Returns\n\n- `{ data: { host: string; name: string; password: string; port: number; proxyId: string; user: string; }; }`\n\n  - `data: { host: string; name: string; password: string; port: number; proxyId: string; user: string; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst proxy = await client.proxies.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(proxy);\n```",
  },
  {
    name: 'update',
    endpoint: '/proxies/{proxyId}',
    httpMethod: 'put',
    summary: 'Update a proxy config',
    description: 'Update a proxy config',
    stainlessPath: '(resource) proxies > (method) update',
    qualified: 'client.proxies.update',
    params: [
      'proxyId: string;',
      'host: string;',
      'name: string;',
      'password: string;',
      'port: number;',
      'user: string;',
    ],
    response:
      '{ data: { host: string; name: string; password: string; port: number; proxyId: string; user: string; }; message: string; success: true; }',
    markdown:
      "## update\n\n`client.proxies.update(proxyId: string, host: string, name: string, password: string, port: number, user: string): { data: proxy_config; message: string; success: true; }`\n\n**put** `/proxies/{proxyId}`\n\nUpdate a proxy config\n\n### Parameters\n\n- `proxyId: string`\n\n- `host: string`\n\n- `name: string`\n\n- `password: string`\n\n- `port: number`\n\n- `user: string`\n\n### Returns\n\n- `{ data: { host: string; name: string; password: string; port: number; proxyId: string; user: string; }; message: string; success: true; }`\n\n  - `data: { host: string; name: string; password: string; port: number; proxyId: string; user: string; }`\n  - `message: string`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst proxy = await client.proxies.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  host: 'x',\n  name: 'xxx',\n  password: 'x',\n  port: 1,\n  user: 'x',\n});\n\nconsole.log(proxy);\n```",
  },
  {
    name: 'list',
    endpoint: '/proxies',
    httpMethod: 'get',
    summary: 'List all proxy configs for the authenticated user',
    description: 'List all proxy configs for the authenticated user',
    stainlessPath: '(resource) proxies > (method) list',
    qualified: 'client.proxies.list',
    response:
      '{ data: { host: string; name: string; password: string; port: number; proxyId: string; user: string; }[]; }',
    markdown:
      "## list\n\n`client.proxies.list(): { data: proxy_config[]; }`\n\n**get** `/proxies`\n\nList all proxy configs for the authenticated user\n\n### Returns\n\n- `{ data: { host: string; name: string; password: string; port: number; proxyId: string; user: string; }[]; }`\n\n  - `data: { host: string; name: string; password: string; port: number; proxyId: string; user: string; }[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst proxies = await client.proxies.list();\n\nconsole.log(proxies);\n```",
  },
  {
    name: 'delete',
    endpoint: '/proxies/{proxyId}',
    httpMethod: 'delete',
    summary: 'Delete a proxy config',
    description: 'Delete a proxy config',
    stainlessPath: '(resource) proxies > (method) delete',
    qualified: 'client.proxies.delete',
    params: ['proxyId: string;'],
    response:
      '{ data: { host: string; name: string; password: string; port: number; proxyId: string; user: string; }; message: string; success: true; }',
    markdown:
      "## delete\n\n`client.proxies.delete(proxyId: string): { data: proxy_config; message: string; success: true; }`\n\n**delete** `/proxies/{proxyId}`\n\nDelete a proxy config\n\n### Parameters\n\n- `proxyId: string`\n\n### Returns\n\n- `{ data: { host: string; name: string; password: string; port: number; proxyId: string; user: string; }; message: string; success: true; }`\n\n  - `data: { host: string; name: string; password: string; port: number; proxyId: string; user: string; }`\n  - `message: string`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst proxy = await client.proxies.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(proxy);\n```",
  },
  {
    name: 'create',
    endpoint: '/carriers',
    httpMethod: 'post',
    summary: 'Create a new carrier',
    description: 'Create a new carrier',
    stainlessPath: '(resource) carriers > (method) create',
    qualified: 'client.carriers.create',
    params: [
      'country: string;',
      'mcc: string;',
      'mnc: string;',
      'operator: string;',
      'company?: string;',
      'country_code?: string;',
      'country_iso?: string;',
      'detail_url?: string;',
      'gsm_bands?: string;',
      'lte_bands?: string;',
      'mobile_prefix?: string;',
      'nsn_size?: string;',
      'number_format?: string;',
      'protocols?: string;',
      'umts_bands?: string;',
      'website?: string;',
    ],
    response:
      '{ id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }',
    markdown:
      "## create\n\n`client.carriers.create(country: string, mcc: string, mnc: string, operator: string, company?: string, country_code?: string, country_iso?: string, detail_url?: string, gsm_bands?: string, lte_bands?: string, mobile_prefix?: string, nsn_size?: string, number_format?: string, protocols?: string, umts_bands?: string, website?: string): { id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }`\n\n**post** `/carriers`\n\nCreate a new carrier\n\n### Parameters\n\n- `country: string`\n  Country name\n\n- `mcc: string`\n  Mobile Country Code\n\n- `mnc: string`\n  Mobile Network Code\n\n- `operator: string`\n  Operator name\n\n- `company?: string`\n  Company name\n\n- `country_code?: string`\n  Country dialing code (e.g., +1)\n\n- `country_iso?: string`\n  ISO country code\n\n- `detail_url?: string`\n  URL to carrier details page\n\n- `gsm_bands?: string`\n  Supported GSM bands\n\n- `lte_bands?: string`\n  Supported LTE bands\n\n- `mobile_prefix?: string`\n  Mobile number prefix\n\n- `nsn_size?: string`\n  National Significant Number size\n\n- `number_format?: string`\n  Phone number format\n\n- `protocols?: string`\n  Supported protocols (comma-separated)\n\n- `umts_bands?: string`\n  Supported UMTS bands\n\n- `website?: string`\n  Company website\n\n### Returns\n\n- `{ id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }`\n\n  - `id: number`\n  - `company: string`\n  - `country: string`\n  - `country_code: string`\n  - `country_iso: string`\n  - `created_at: string`\n  - `detail_url: string`\n  - `gsm_bands: string`\n  - `lte_bands: string`\n  - `mcc: string`\n  - `mnc: string`\n  - `mobile_prefix: string`\n  - `nsn_size: string`\n  - `number_format: string`\n  - `operator: string`\n  - `protocols: string`\n  - `umts_bands: string`\n  - `website: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst carrier = await client.carriers.create({\n  country: 'x',\n  mcc: 'x',\n  mnc: 'x',\n  operator: 'x',\n});\n\nconsole.log(carrier);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/carriers/{carrierId}',
    httpMethod: 'get',
    summary: 'Get carrier by ID',
    description: 'Get carrier by ID',
    stainlessPath: '(resource) carriers > (method) retrieve',
    qualified: 'client.carriers.retrieve',
    params: ['carrierId: number;'],
    response:
      '{ id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }',
    markdown:
      "## retrieve\n\n`client.carriers.retrieve(carrierId: number): { id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }`\n\n**get** `/carriers/{carrierId}`\n\nGet carrier by ID\n\n### Parameters\n\n- `carrierId: number`\n  Carrier ID\n\n### Returns\n\n- `{ id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }`\n\n  - `id: number`\n  - `company: string`\n  - `country: string`\n  - `country_code: string`\n  - `country_iso: string`\n  - `created_at: string`\n  - `detail_url: string`\n  - `gsm_bands: string`\n  - `lte_bands: string`\n  - `mcc: string`\n  - `mnc: string`\n  - `mobile_prefix: string`\n  - `nsn_size: string`\n  - `number_format: string`\n  - `operator: string`\n  - `protocols: string`\n  - `umts_bands: string`\n  - `website: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst carrier = await client.carriers.retrieve(1);\n\nconsole.log(carrier);\n```",
  },
  {
    name: 'update',
    endpoint: '/carriers/{carrierId}',
    httpMethod: 'patch',
    summary: 'Update a carrier',
    description: 'Update a carrier',
    stainlessPath: '(resource) carriers > (method) update',
    qualified: 'client.carriers.update',
    params: [
      'carrierId: number;',
      'company?: string;',
      'country?: string;',
      'country_code?: string;',
      'country_iso?: string;',
      'detail_url?: string;',
      'gsm_bands?: string;',
      'lte_bands?: string;',
      'mobile_prefix?: string;',
      'nsn_size?: string;',
      'number_format?: string;',
      'operator?: string;',
      'protocols?: string;',
      'umts_bands?: string;',
      'website?: string;',
    ],
    response:
      '{ id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }',
    markdown:
      "## update\n\n`client.carriers.update(carrierId: number, company?: string, country?: string, country_code?: string, country_iso?: string, detail_url?: string, gsm_bands?: string, lte_bands?: string, mobile_prefix?: string, nsn_size?: string, number_format?: string, operator?: string, protocols?: string, umts_bands?: string, website?: string): { id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }`\n\n**patch** `/carriers/{carrierId}`\n\nUpdate a carrier\n\n### Parameters\n\n- `carrierId: number`\n  Carrier ID\n\n- `company?: string`\n  Company name\n\n- `country?: string`\n  Country name\n\n- `country_code?: string`\n  Country dialing code\n\n- `country_iso?: string`\n  ISO country code\n\n- `detail_url?: string`\n  URL to carrier details\n\n- `gsm_bands?: string`\n  Supported GSM bands\n\n- `lte_bands?: string`\n  Supported LTE bands\n\n- `mobile_prefix?: string`\n  Mobile number prefix\n\n- `nsn_size?: string`\n  NSN size\n\n- `number_format?: string`\n  Phone number format\n\n- `operator?: string`\n  Operator name\n\n- `protocols?: string`\n  Supported protocols\n\n- `umts_bands?: string`\n  Supported UMTS bands\n\n- `website?: string`\n  Company website\n\n### Returns\n\n- `{ id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }`\n\n  - `id: number`\n  - `company: string`\n  - `country: string`\n  - `country_code: string`\n  - `country_iso: string`\n  - `created_at: string`\n  - `detail_url: string`\n  - `gsm_bands: string`\n  - `lte_bands: string`\n  - `mcc: string`\n  - `mnc: string`\n  - `mobile_prefix: string`\n  - `nsn_size: string`\n  - `number_format: string`\n  - `operator: string`\n  - `protocols: string`\n  - `umts_bands: string`\n  - `website: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst carrier = await client.carriers.update(1);\n\nconsole.log(carrier);\n```",
  },
  {
    name: 'list',
    endpoint: '/carriers',
    httpMethod: 'get',
    summary: 'List carriers with pagination',
    description: 'List carriers with pagination',
    stainlessPath: '(resource) carriers > (method) list',
    qualified: 'client.carriers.list',
    params: [
      'country?: string;',
      'countryISO?: string;',
      "orderBy?: 'id' | 'mcc' | 'mnc' | 'operator' | 'country' | 'country_iso';",
      "orderDir?: 'asc' | 'desc';",
      'page?: number;',
      'pageSize?: number;',
    ],
    response:
      '{ items: { id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; $schema?: string; }',
    markdown:
      "## list\n\n`client.carriers.list(country?: string, countryISO?: string, orderBy?: 'id' | 'mcc' | 'mnc' | 'operator' | 'country' | 'country_iso', orderDir?: 'asc' | 'desc', page?: number, pageSize?: number): { items: carrier[]; pagination: meta; $schema?: string; }`\n\n**get** `/carriers`\n\nList carriers with pagination\n\n### Parameters\n\n- `country?: string`\n  Filter by country name\n\n- `countryISO?: string`\n  Filter by country ISO code\n\n- `orderBy?: 'id' | 'mcc' | 'mnc' | 'operator' | 'country' | 'country_iso'`\n  Field to order by\n\n- `orderDir?: 'asc' | 'desc'`\n  Order direction\n\n- `page?: number`\n  Page number\n\n- `pageSize?: number`\n  Items per page\n\n### Returns\n\n- `{ items: { id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; $schema?: string; }`\n\n  - `items: { id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }[]`\n  - `pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst carriers = await client.carriers.list();\n\nconsole.log(carriers);\n```",
  },
  {
    name: 'delete',
    endpoint: '/carriers/{carrierId}',
    httpMethod: 'delete',
    summary: 'Delete a carrier',
    description: 'Delete a carrier',
    stainlessPath: '(resource) carriers > (method) delete',
    qualified: 'client.carriers.delete',
    params: ['carrierId: number;'],
    response: '{ message: string; $schema?: string; }',
    markdown:
      "## delete\n\n`client.carriers.delete(carrierId: number): { message: string; $schema?: string; }`\n\n**delete** `/carriers/{carrierId}`\n\nDelete a carrier\n\n### Parameters\n\n- `carrierId: number`\n  Carrier ID\n\n### Returns\n\n- `{ message: string; $schema?: string; }`\n\n  - `message: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst carrier = await client.carriers.delete(1);\n\nconsole.log(carrier);\n```",
  },
  {
    name: 'lookup',
    endpoint: '/carriers/lookup',
    httpMethod: 'get',
    summary: 'Get carrier by MCC and MNC',
    description: 'Get carrier by MCC and MNC',
    stainlessPath: '(resource) carriers > (method) lookup',
    qualified: 'client.carriers.lookup',
    params: ['mcc: string;', 'mnc: string;'],
    response:
      '{ id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }',
    markdown:
      "## lookup\n\n`client.carriers.lookup(mcc: string, mnc: string): { id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }`\n\n**get** `/carriers/lookup`\n\nGet carrier by MCC and MNC\n\n### Parameters\n\n- `mcc: string`\n  Mobile Country Code\n\n- `mnc: string`\n  Mobile Network Code\n\n### Returns\n\n- `{ id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }`\n\n  - `id: number`\n  - `company: string`\n  - `country: string`\n  - `country_code: string`\n  - `country_iso: string`\n  - `created_at: string`\n  - `detail_url: string`\n  - `gsm_bands: string`\n  - `lte_bands: string`\n  - `mcc: string`\n  - `mnc: string`\n  - `mobile_prefix: string`\n  - `nsn_size: string`\n  - `number_format: string`\n  - `operator: string`\n  - `protocols: string`\n  - `umts_bands: string`\n  - `website: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst carrier = await client.carriers.lookup({ mcc: 'x', mnc: 'x' });\n\nconsole.log(carrier);\n```",
  },
  {
    name: 'create',
    endpoint: '/profiles',
    httpMethod: 'post',
    summary: 'Create a new device profile',
    description: 'Create a new device profile',
    stainlessPath: '(resource) profiles > (method) create',
    qualified: 'client.profiles.create',
    params: [
      'name: string;',
      'spec: { $schema?: string; apps?: string[]; carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }; files?: string[]; identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }; name?: string; proxy?: { host: string; password: string; port: number; user: string; }; smartIp?: boolean; };',
    ],
    response:
      '{ id: string; createdAt: string; name: string; spec: { $schema?: string; apps?: string[]; carrier?: device_carrier; files?: string[]; identifiers?: device_identifiers; name?: string; proxy?: config; smartIp?: boolean; }; updatedAt: string; userId: string; $schema?: string; }',
    markdown:
      "## create\n\n`client.profiles.create(name: string, spec: { $schema?: string; apps?: string[]; carrier?: device_carrier; files?: string[]; identifiers?: device_identifiers; name?: string; proxy?: config; smartIp?: boolean; }): { id: string; createdAt: string; name: string; spec: device_spec; updatedAt: string; userId: string; $schema?: string; }`\n\n**post** `/profiles`\n\nCreate a new device profile\n\n### Parameters\n\n- `name: string`\n  Profile name\n\n- `spec: { $schema?: string; apps?: string[]; carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }; files?: string[]; identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }; name?: string; proxy?: { host: string; password: string; port: number; user: string; }; smartIp?: boolean; }`\n  Device specification\n  - `$schema?: string`\n    A URL to the JSON Schema for this object.\n  - `apps?: string[]`\n  - `carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }`\n  - `files?: string[]`\n  - `identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }`\n  - `name?: string`\n  - `proxy?: { host: string; password: string; port: number; user: string; }`\n  - `smartIp?: boolean`\n\n### Returns\n\n- `{ id: string; createdAt: string; name: string; spec: { $schema?: string; apps?: string[]; carrier?: device_carrier; files?: string[]; identifiers?: device_identifiers; name?: string; proxy?: config; smartIp?: boolean; }; updatedAt: string; userId: string; $schema?: string; }`\n\n  - `id: string`\n  - `createdAt: string`\n  - `name: string`\n  - `spec: { $schema?: string; apps?: string[]; carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }; files?: string[]; identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }; name?: string; proxy?: { host: string; password: string; port: number; user: string; }; smartIp?: boolean; }`\n  - `updatedAt: string`\n  - `userId: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst profile = await client.profiles.create({\n  name: 'x',\n  spec: {},\n});\n\nconsole.log(profile);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/profiles/{profileId}',
    httpMethod: 'get',
    summary: 'Get device profile by ID',
    description: 'Get device profile by ID',
    stainlessPath: '(resource) profiles > (method) retrieve',
    qualified: 'client.profiles.retrieve',
    params: ['profileId: string;'],
    response:
      '{ id: string; createdAt: string; name: string; spec: { $schema?: string; apps?: string[]; carrier?: device_carrier; files?: string[]; identifiers?: device_identifiers; name?: string; proxy?: config; smartIp?: boolean; }; updatedAt: string; userId: string; $schema?: string; }',
    markdown:
      "## retrieve\n\n`client.profiles.retrieve(profileId: string): { id: string; createdAt: string; name: string; spec: device_spec; updatedAt: string; userId: string; $schema?: string; }`\n\n**get** `/profiles/{profileId}`\n\nGet device profile by ID\n\n### Parameters\n\n- `profileId: string`\n\n### Returns\n\n- `{ id: string; createdAt: string; name: string; spec: { $schema?: string; apps?: string[]; carrier?: device_carrier; files?: string[]; identifiers?: device_identifiers; name?: string; proxy?: config; smartIp?: boolean; }; updatedAt: string; userId: string; $schema?: string; }`\n\n  - `id: string`\n  - `createdAt: string`\n  - `name: string`\n  - `spec: { $schema?: string; apps?: string[]; carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }; files?: string[]; identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }; name?: string; proxy?: { host: string; password: string; port: number; user: string; }; smartIp?: boolean; }`\n  - `updatedAt: string`\n  - `userId: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst profile = await client.profiles.retrieve('profileId');\n\nconsole.log(profile);\n```",
  },
  {
    name: 'update',
    endpoint: '/profiles/{profileId}',
    httpMethod: 'put',
    summary: 'Update a device profile',
    description: 'Update a device profile',
    stainlessPath: '(resource) profiles > (method) update',
    qualified: 'client.profiles.update',
    params: [
      'profileId: string;',
      'name: string;',
      'spec: { $schema?: string; apps?: string[]; carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }; files?: string[]; identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }; name?: string; proxy?: { host: string; password: string; port: number; user: string; }; smartIp?: boolean; };',
    ],
    response:
      '{ id: string; createdAt: string; name: string; spec: { $schema?: string; apps?: string[]; carrier?: device_carrier; files?: string[]; identifiers?: device_identifiers; name?: string; proxy?: config; smartIp?: boolean; }; updatedAt: string; userId: string; $schema?: string; }',
    markdown:
      "## update\n\n`client.profiles.update(profileId: string, name: string, spec: { $schema?: string; apps?: string[]; carrier?: device_carrier; files?: string[]; identifiers?: device_identifiers; name?: string; proxy?: config; smartIp?: boolean; }): { id: string; createdAt: string; name: string; spec: device_spec; updatedAt: string; userId: string; $schema?: string; }`\n\n**put** `/profiles/{profileId}`\n\nUpdate a device profile\n\n### Parameters\n\n- `profileId: string`\n\n- `name: string`\n  Profile name\n\n- `spec: { $schema?: string; apps?: string[]; carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }; files?: string[]; identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }; name?: string; proxy?: { host: string; password: string; port: number; user: string; }; smartIp?: boolean; }`\n  Device specification\n  - `$schema?: string`\n    A URL to the JSON Schema for this object.\n  - `apps?: string[]`\n  - `carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }`\n  - `files?: string[]`\n  - `identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }`\n  - `name?: string`\n  - `proxy?: { host: string; password: string; port: number; user: string; }`\n  - `smartIp?: boolean`\n\n### Returns\n\n- `{ id: string; createdAt: string; name: string; spec: { $schema?: string; apps?: string[]; carrier?: device_carrier; files?: string[]; identifiers?: device_identifiers; name?: string; proxy?: config; smartIp?: boolean; }; updatedAt: string; userId: string; $schema?: string; }`\n\n  - `id: string`\n  - `createdAt: string`\n  - `name: string`\n  - `spec: { $schema?: string; apps?: string[]; carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }; files?: string[]; identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }; name?: string; proxy?: { host: string; password: string; port: number; user: string; }; smartIp?: boolean; }`\n  - `updatedAt: string`\n  - `userId: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst profile = await client.profiles.update('profileId', {\n  name: 'x',\n  spec: {},\n});\n\nconsole.log(profile);\n```",
  },
  {
    name: 'list',
    endpoint: '/profiles',
    httpMethod: 'get',
    summary: 'List device profiles',
    description: 'List device profiles',
    stainlessPath: '(resource) profiles > (method) list',
    qualified: 'client.profiles.list',
    params: [
      'name?: string;',
      "orderBy?: 'name' | 'created_at' | 'updated_at';",
      "orderByDirection?: 'asc' | 'desc';",
      'page?: number;',
      'pageSize?: number;',
    ],
    response:
      '{ items: { id: string; createdAt: string; name: string; spec: device_spec; updatedAt: string; userId: string; $schema?: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; $schema?: string; }',
    markdown:
      "## list\n\n`client.profiles.list(name?: string, orderBy?: 'name' | 'created_at' | 'updated_at', orderByDirection?: 'asc' | 'desc', page?: number, pageSize?: number): { items: profile[]; pagination: meta; $schema?: string; }`\n\n**get** `/profiles`\n\nList device profiles\n\n### Parameters\n\n- `name?: string`\n\n- `orderBy?: 'name' | 'created_at' | 'updated_at'`\n\n- `orderByDirection?: 'asc' | 'desc'`\n\n- `page?: number`\n\n- `pageSize?: number`\n\n### Returns\n\n- `{ items: { id: string; createdAt: string; name: string; spec: device_spec; updatedAt: string; userId: string; $schema?: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; $schema?: string; }`\n\n  - `items: { id: string; createdAt: string; name: string; spec: { $schema?: string; apps?: string[]; carrier?: device_carrier; files?: string[]; identifiers?: device_identifiers; name?: string; proxy?: config; smartIp?: boolean; }; updatedAt: string; userId: string; $schema?: string; }[]`\n  - `pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst profiles = await client.profiles.list();\n\nconsole.log(profiles);\n```",
  },
  {
    name: 'delete',
    endpoint: '/profiles/{profileId}',
    httpMethod: 'delete',
    summary: 'Delete a device profile',
    description: 'Delete a device profile',
    stainlessPath: '(resource) profiles > (method) delete',
    qualified: 'client.profiles.delete',
    params: ['profileId: string;'],
    response: '{ message: string; $schema?: string; }',
    markdown:
      "## delete\n\n`client.profiles.delete(profileId: string): { message: string; $schema?: string; }`\n\n**delete** `/profiles/{profileId}`\n\nDelete a device profile\n\n### Parameters\n\n- `profileId: string`\n\n### Returns\n\n- `{ message: string; $schema?: string; }`\n\n  - `message: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst profile = await client.profiles.delete('profileId');\n\nconsole.log(profile);\n```",
  },
  {
    name: 'create',
    endpoint: '/devices',
    httpMethod: 'post',
    summary: 'Provision a new device',
    description: 'Provision a new device',
    stainlessPath: '(resource) devices > (method) create',
    qualified: 'client.devices.create',
    params: [
      "deviceType?: 'dedicated_physical_device' | 'dedicated_premium_device' | 'dedicated_emulated_device';",
      'apps?: string[];',
      'carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; };',
      'files?: string[];',
      'identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; };',
      'name?: string;',
      'proxy?: { host: string; password: string; port: number; user: string; };',
      'smartIp?: boolean;',
    ],
    response:
      '{ id: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; streamToken?: string; userId?: string; }',
    markdown:
      "## create\n\n`client.devices.create(deviceType?: 'dedicated_physical_device' | 'dedicated_premium_device' | 'dedicated_emulated_device', apps?: string[], carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }, files?: string[], identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }, name?: string, proxy?: { host: string; password: string; port: number; user: string; }, smartIp?: boolean): { id: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; streamToken?: string; userId?: string; }`\n\n**post** `/devices`\n\nProvision a new device\n\n### Parameters\n\n- `deviceType?: 'dedicated_physical_device' | 'dedicated_premium_device' | 'dedicated_emulated_device'`\n\n- `apps?: string[]`\n\n- `carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }`\n  - `GsmOperatorAlpha: string`\n  - `GsmOperatorNumeric: number`\n  - `GsmSimOperatorAlpha: string`\n  - `GsmSimOperatorIsoCountry: string`\n  - `GsmSimOperatorNumeric: number`\n  - `PersistSysTimezone: string`\n\n- `files?: string[]`\n\n- `identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }`\n  - `BootloaderSerialNumber: string`\n  - `IdentifierAndroidID: string`\n  - `IdentifierAppSetID: string`\n  - `IdentifierBluetoothMAC: string`\n  - `IdentifierGAID: string`\n  - `IdentifierGSFID: string`\n  - `IdentifierICCID: string`\n  - `IdentifierIMEI: string`\n  - `IdentifierIMSI: string`\n  - `IdentifierMediaDRMID: string`\n  - `IdentifierMEID: string`\n  - `IdentifierPhoneNumber: string`\n  - `IdentifierSerial: string`\n  - `IdentifierWifiMAC: string`\n  - `SerialNumber: string`\n\n- `name?: string`\n\n- `proxy?: { host: string; password: string; port: number; user: string; }`\n  - `host: string`\n  - `password: string`\n  - `port: number`\n  - `user: string`\n\n- `smartIp?: boolean`\n\n### Returns\n\n- `{ id: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; streamToken?: string; userId?: string; }`\n\n  - `id: string`\n  - `assignedAt: string`\n  - `createdAt: string`\n  - `name: string`\n  - `state: string`\n  - `stateMessage: string`\n  - `streamUrl: string`\n  - `taskCount: number`\n  - `terminatesAt: string`\n  - `type: string`\n  - `updatedAt: string`\n  - `$schema?: string`\n  - `streamToken?: string`\n  - `userId?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst device = await client.devices.create();\n\nconsole.log(device);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/devices/{deviceId}',
    httpMethod: 'get',
    summary: 'Get device info',
    description: 'Get device info',
    stainlessPath: '(resource) devices > (method) retrieve',
    qualified: 'client.devices.retrieve',
    params: ['deviceId: string;'],
    response:
      '{ id: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; streamToken?: string; userId?: string; }',
    markdown:
      "## retrieve\n\n`client.devices.retrieve(deviceId: string): { id: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; streamToken?: string; userId?: string; }`\n\n**get** `/devices/{deviceId}`\n\nGet device info\n\n### Parameters\n\n- `deviceId: string`\n\n### Returns\n\n- `{ id: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; streamToken?: string; userId?: string; }`\n\n  - `id: string`\n  - `assignedAt: string`\n  - `createdAt: string`\n  - `name: string`\n  - `state: string`\n  - `stateMessage: string`\n  - `streamUrl: string`\n  - `taskCount: number`\n  - `terminatesAt: string`\n  - `type: string`\n  - `updatedAt: string`\n  - `$schema?: string`\n  - `streamToken?: string`\n  - `userId?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst device = await client.devices.retrieve('deviceId');\n\nconsole.log(device);\n```",
  },
  {
    name: 'list',
    endpoint: '/devices',
    httpMethod: 'get',
    summary: 'List devices',
    description: 'List devices',
    stainlessPath: '(resource) devices > (method) list',
    qualified: 'client.devices.list',
    params: [
      'country?: string;',
      'name?: string;',
      "orderBy?: 'id' | 'createdAt' | 'updatedAt' | 'assignedAt';",
      "orderByDirection?: 'asc' | 'desc';",
      'page?: number;',
      'pageSize?: number;',
      'state?: string[];',
      "type?: 'dedicated_physical_device' | 'dedicated_premium_device' | 'dedicated_emulated_device';",
    ],
    response:
      '{ items: { id: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; streamToken?: string; userId?: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; $schema?: string; }',
    markdown:
      "## list\n\n`client.devices.list(country?: string, name?: string, orderBy?: 'id' | 'createdAt' | 'updatedAt' | 'assignedAt', orderByDirection?: 'asc' | 'desc', page?: number, pageSize?: number, state?: string[], type?: 'dedicated_physical_device' | 'dedicated_premium_device' | 'dedicated_emulated_device'): { items: device[]; pagination: meta; $schema?: string; }`\n\n**get** `/devices`\n\nList devices\n\n### Parameters\n\n- `country?: string`\n\n- `name?: string`\n\n- `orderBy?: 'id' | 'createdAt' | 'updatedAt' | 'assignedAt'`\n\n- `orderByDirection?: 'asc' | 'desc'`\n\n- `page?: number`\n\n- `pageSize?: number`\n\n- `state?: string[]`\n\n- `type?: 'dedicated_physical_device' | 'dedicated_premium_device' | 'dedicated_emulated_device'`\n\n### Returns\n\n- `{ items: { id: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; streamToken?: string; userId?: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; $schema?: string; }`\n\n  - `items: { id: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; streamToken?: string; userId?: string; }[]`\n  - `pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst devices = await client.devices.list();\n\nconsole.log(devices);\n```",
  },
  {
    name: 'count',
    endpoint: '/devices/count',
    httpMethod: 'get',
    summary: 'Count claimed devices',
    description: 'Count claimed devices',
    stainlessPath: '(resource) devices > (method) count',
    qualified: 'client.devices.count',
    response: 'object',
    markdown:
      "## count\n\n`client.devices.count(): object`\n\n**get** `/devices/count`\n\nCount claimed devices\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.devices.count();\n\nconsole.log(response);\n```",
  },
  {
    name: 'terminate',
    endpoint: '/devices/{deviceId}',
    httpMethod: 'delete',
    summary: 'Terminate a device',
    description: 'Terminate a device',
    stainlessPath: '(resource) devices > (method) terminate',
    qualified: 'client.devices.terminate',
    params: ['deviceId: string;', 'previousDeviceId?: string;', 'terminateAt?: string;'],
    markdown:
      "## terminate\n\n`client.devices.terminate(deviceId: string, previousDeviceId?: string, terminateAt?: string): void`\n\n**delete** `/devices/{deviceId}`\n\nTerminate a device\n\n### Parameters\n\n- `deviceId: string`\n\n- `previousDeviceId?: string`\n\n- `terminateAt?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.terminate('deviceId')\n```",
  },
  {
    name: 'wait_ready',
    endpoint: '/devices/{deviceId}/wait',
    httpMethod: 'get',
    summary: 'Wait for device to be ready',
    description: 'Wait for device to be ready',
    stainlessPath: '(resource) devices > (method) wait_ready',
    qualified: 'client.devices.waitReady',
    params: ['deviceId: string;'],
    response:
      '{ id: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; streamToken?: string; userId?: string; }',
    markdown:
      "## wait_ready\n\n`client.devices.waitReady(deviceId: string): { id: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; streamToken?: string; userId?: string; }`\n\n**get** `/devices/{deviceId}/wait`\n\nWait for device to be ready\n\n### Parameters\n\n- `deviceId: string`\n\n### Returns\n\n- `{ id: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; streamToken?: string; userId?: string; }`\n\n  - `id: string`\n  - `assignedAt: string`\n  - `createdAt: string`\n  - `name: string`\n  - `state: string`\n  - `stateMessage: string`\n  - `streamUrl: string`\n  - `taskCount: number`\n  - `terminatesAt: string`\n  - `type: string`\n  - `updatedAt: string`\n  - `$schema?: string`\n  - `streamToken?: string`\n  - `userId?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst device = await client.devices.waitReady('deviceId');\n\nconsole.log(device);\n```",
  },
  {
    name: 'set_time',
    endpoint: '/devices/{deviceId}/time',
    httpMethod: 'post',
    summary: 'Set device time',
    description: 'Set device time',
    stainlessPath: '(resource) devices.time > (method) set_time',
    qualified: 'client.devices.time.setTime',
    params: ['deviceId: string;', 'time: string;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## set_time\n\n`client.devices.time.setTime(deviceId: string, time: string, X-Device-Display-ID?: number): void`\n\n**post** `/devices/{deviceId}/time`\n\nSet device time\n\n### Parameters\n\n- `deviceId: string`\n\n- `time: string`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.time.setTime('deviceId', { time: '2019-12-27T18:11:19.117Z' })\n```",
  },
  {
    name: 'set_timezone',
    endpoint: '/devices/{deviceId}/timezone',
    httpMethod: 'post',
    summary: 'Set device timezone',
    description: 'Set device timezone',
    stainlessPath: '(resource) devices.time > (method) set_timezone',
    qualified: 'client.devices.time.setTimezone',
    params: ['deviceId: string;', 'timezone: string;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## set_timezone\n\n`client.devices.time.setTimezone(deviceId: string, timezone: string, X-Device-Display-ID?: number): void`\n\n**post** `/devices/{deviceId}/timezone`\n\nSet device timezone\n\n### Parameters\n\n- `deviceId: string`\n\n- `timezone: string`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.time.setTimezone('deviceId', { timezone: 'timezone' })\n```",
  },
  {
    name: 'time',
    endpoint: '/devices/{deviceId}/time',
    httpMethod: 'get',
    summary: 'Device time',
    description: 'Device time',
    stainlessPath: '(resource) devices.time > (method) time',
    qualified: 'client.devices.time.time',
    params: ['deviceId: string;', 'X-Device-Display-ID?: number;'],
    response: 'string',
    markdown:
      "## time\n\n`client.devices.time.time(deviceId: string, X-Device-Display-ID?: number): string`\n\n**get** `/devices/{deviceId}/time`\n\nDevice time\n\n### Parameters\n\n- `deviceId: string`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.devices.time.time('deviceId');\n\nconsole.log(response);\n```",
  },
  {
    name: 'timezone',
    endpoint: '/devices/{deviceId}/timezone',
    httpMethod: 'get',
    summary: 'Get device timezone',
    description: 'Get device timezone',
    stainlessPath: '(resource) devices.time > (method) timezone',
    qualified: 'client.devices.time.timezone',
    params: ['deviceId: string;', 'X-Device-Display-ID?: number;'],
    response: '{ timezone: string; $schema?: string; }',
    markdown:
      "## timezone\n\n`client.devices.time.timezone(deviceId: string, X-Device-Display-ID?: number): { timezone: string; $schema?: string; }`\n\n**get** `/devices/{deviceId}/timezone`\n\nGet device timezone\n\n### Parameters\n\n- `deviceId: string`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `{ timezone: string; $schema?: string; }`\n\n  - `timezone: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.devices.time.timezone('deviceId');\n\nconsole.log(response);\n```",
  },
  {
    name: 'update',
    endpoint: '/devices/{deviceId}/profile',
    httpMethod: 'put',
    summary: 'Apply a profile to a device',
    description: 'Apply a profile to a device',
    stainlessPath: '(resource) devices.profile > (method) update',
    qualified: 'client.devices.profile.update',
    params: ['deviceId: string;', 'profileId: string;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## update\n\n`client.devices.profile.update(deviceId: string, profileId: string, X-Device-Display-ID?: number): void`\n\n**put** `/devices/{deviceId}/profile`\n\nApply a profile to a device\n\n### Parameters\n\n- `deviceId: string`\n\n- `profileId: string`\n  ID of the profile to apply\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.profile.update('deviceId', { profileId: 'profileId' })\n```",
  },
  {
    name: 'list',
    endpoint: '/devices/{deviceId}/files',
    httpMethod: 'get',
    summary: 'List files',
    description: 'List files',
    stainlessPath: '(resource) devices.files > (method) list',
    qualified: 'client.devices.files.list',
    params: ['deviceId: string;', 'path: string;', 'X-Device-Display-ID?: number;'],
    response:
      '{ files: { extendedAttributes: boolean; group: string; hardLinks: number; modifiedAt: string; name: string; owner: string; permissions: object; size: number; type: string; symlinkTarget?: string; }[]; path: string; total: number; $schema?: string; }',
    markdown:
      "## list\n\n`client.devices.files.list(deviceId: string, path: string, X-Device-Display-ID?: number): { files: file_info[]; path: string; total: number; $schema?: string; }`\n\n**get** `/devices/{deviceId}/files`\n\nList files\n\n### Parameters\n\n- `deviceId: string`\n\n- `path: string`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `{ files: { extendedAttributes: boolean; group: string; hardLinks: number; modifiedAt: string; name: string; owner: string; permissions: object; size: number; type: string; symlinkTarget?: string; }[]; path: string; total: number; $schema?: string; }`\n\n  - `files: { extendedAttributes: boolean; group: string; hardLinks: number; modifiedAt: string; name: string; owner: string; permissions: { group: object; others: object; owner: object; special: { setGid: boolean; setUid: boolean; sticky: boolean; }; }; size: number; type: string; symlinkTarget?: string; }[]`\n  - `path: string`\n  - `total: number`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst files = await client.devices.files.list('deviceId', { path: 'path' });\n\nconsole.log(files);\n```",
  },
  {
    name: 'delete',
    endpoint: '/devices/{deviceId}/files',
    httpMethod: 'delete',
    summary: 'Delete file',
    description: 'Delete file',
    stainlessPath: '(resource) devices.files > (method) delete',
    qualified: 'client.devices.files.delete',
    params: ['deviceId: string;', 'path: string;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## delete\n\n`client.devices.files.delete(deviceId: string, path: string, X-Device-Display-ID?: number): void`\n\n**delete** `/devices/{deviceId}/files`\n\nDelete file\n\n### Parameters\n\n- `deviceId: string`\n\n- `path: string`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.files.delete('deviceId', { path: 'path' })\n```",
  },
  {
    name: 'download',
    endpoint: '/devices/{deviceId}/files/download',
    httpMethod: 'get',
    summary: 'Download file',
    description: 'Download file',
    stainlessPath: '(resource) devices.files > (method) download',
    qualified: 'client.devices.files.download',
    params: ['deviceId: string;', 'path: string;', 'X-Device-Display-ID?: number;'],
    response: 'string',
    markdown:
      "## download\n\n`client.devices.files.download(deviceId: string, path: string, X-Device-Display-ID?: number): string`\n\n**get** `/devices/{deviceId}/files/download`\n\nDownload file\n\n### Parameters\n\n- `deviceId: string`\n\n- `path: string`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.devices.files.download('deviceId', { path: 'path' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'upload',
    endpoint: '/devices/{deviceId}/files',
    httpMethod: 'post',
    summary: 'Upload file',
    description: 'Upload file',
    stainlessPath: '(resource) devices.files > (method) upload',
    qualified: 'client.devices.files.upload',
    params: ['deviceId: string;', 'path: string;', 'file: string;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## upload\n\n`client.devices.files.upload(deviceId: string, path: string, file: string, X-Device-Display-ID?: number): void`\n\n**post** `/devices/{deviceId}/files`\n\nUpload file\n\n### Parameters\n\n- `deviceId: string`\n\n- `path: string`\n\n- `file: string`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.files.upload('deviceId', { path: 'path', file: fs.createReadStream('path/to/file') })\n```",
  },
  {
    name: 'connect',
    endpoint: '/devices/{deviceId}/proxy',
    httpMethod: 'post',
    summary: 'Connect proxy',
    description: 'Connect proxy',
    stainlessPath: '(resource) devices.proxy > (method) connect',
    qualified: 'client.devices.proxy.connect',
    params: [
      'deviceId: string;',
      'host?: string;',
      'password?: string;',
      'port?: number;',
      'proxy?: { host: string; password: string; port: number; user: string; };',
      'smartIp?: boolean;',
      'user?: string;',
      'X-Device-Display-ID?: number;',
    ],
    markdown:
      "## connect\n\n`client.devices.proxy.connect(deviceId: string, host?: string, password?: string, port?: number, proxy?: { host: string; password: string; port: number; user: string; }, smartIp?: boolean, user?: string, X-Device-Display-ID?: number): void`\n\n**post** `/devices/{deviceId}/proxy`\n\nConnect proxy\n\n### Parameters\n\n- `deviceId: string`\n\n- `host?: string`\n\n- `password?: string`\n\n- `port?: number`\n\n- `proxy?: { host: string; password: string; port: number; user: string; }`\n  Preferred new format.\n  - `host: string`\n  - `password: string`\n  - `port: number`\n  - `user: string`\n\n- `smartIp?: boolean`\n\n- `user?: string`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.proxy.connect('deviceId')\n```",
  },
  {
    name: 'disconnect',
    endpoint: '/devices/{deviceId}/proxy',
    httpMethod: 'delete',
    summary: 'Disconnect proxy',
    description: 'Disconnect proxy',
    stainlessPath: '(resource) devices.proxy > (method) disconnect',
    qualified: 'client.devices.proxy.disconnect',
    params: ['deviceId: string;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## disconnect\n\n`client.devices.proxy.disconnect(deviceId: string, X-Device-Display-ID?: number): void`\n\n**delete** `/devices/{deviceId}/proxy`\n\nDisconnect proxy\n\n### Parameters\n\n- `deviceId: string`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.proxy.disconnect('deviceId')\n```",
  },
  {
    name: 'get',
    endpoint: '/devices/{deviceId}/location',
    httpMethod: 'get',
    summary: 'Get device location',
    description: 'Get device location',
    stainlessPath: '(resource) devices.location > (method) get',
    qualified: 'client.devices.location.get',
    params: ['deviceId: string;', 'X-Device-Display-ID?: number;'],
    response: '{ latitude: number; longitude: number; $schema?: string; }',
    markdown:
      "## get\n\n`client.devices.location.get(deviceId: string, X-Device-Display-ID?: number): { latitude: number; longitude: number; $schema?: string; }`\n\n**get** `/devices/{deviceId}/location`\n\nGet device location\n\n### Parameters\n\n- `deviceId: string`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `{ latitude: number; longitude: number; $schema?: string; }`\n\n  - `latitude: number`\n  - `longitude: number`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst location = await client.devices.location.get('deviceId');\n\nconsole.log(location);\n```",
  },
  {
    name: 'set',
    endpoint: '/devices/{deviceId}/location',
    httpMethod: 'post',
    summary: 'Set device location',
    description: 'Set device location',
    stainlessPath: '(resource) devices.location > (method) set',
    qualified: 'client.devices.location.set',
    params: ['deviceId: string;', 'latitude: number;', 'longitude: number;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## set\n\n`client.devices.location.set(deviceId: string, latitude: number, longitude: number, X-Device-Display-ID?: number): void`\n\n**post** `/devices/{deviceId}/location`\n\nSet device location\n\n### Parameters\n\n- `deviceId: string`\n\n- `latitude: number`\n\n- `longitude: number`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.location.set('deviceId', { latitude: 0, longitude: 0 })\n```",
  },
  {
    name: 'global',
    endpoint: '/devices/{deviceId}/global',
    httpMethod: 'post',
    summary: 'Perform a global action',
    description: 'Perform a global action',
    stainlessPath: '(resource) devices.actions > (method) global',
    qualified: 'client.devices.actions.global',
    params: ['deviceId: string;', 'action: number;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## global\n\n`client.devices.actions.global(deviceId: string, action: number, X-Device-Display-ID?: number): void`\n\n**post** `/devices/{deviceId}/global`\n\nPerform a global action\n\n### Parameters\n\n- `deviceId: string`\n\n- `action: number`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.actions.global('deviceId', { action: 0 })\n```",
  },
  {
    name: 'overlay_visible',
    endpoint: '/devices/{deviceId}/overlay',
    httpMethod: 'get',
    summary: 'Check if overlay is visible',
    description: 'Check if overlay is visible',
    stainlessPath: '(resource) devices.actions > (method) overlay_visible',
    qualified: 'client.devices.actions.overlayVisible',
    params: ['deviceId: string;', 'X-Device-Display-ID?: number;'],
    response: '{ visible: boolean; $schema?: string; }',
    markdown:
      "## overlay_visible\n\n`client.devices.actions.overlayVisible(deviceId: string, X-Device-Display-ID?: number): { visible: boolean; $schema?: string; }`\n\n**get** `/devices/{deviceId}/overlay`\n\nCheck if overlay is visible\n\n### Parameters\n\n- `deviceId: string`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `{ visible: boolean; $schema?: string; }`\n\n  - `visible: boolean`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.devices.actions.overlayVisible('deviceId');\n\nconsole.log(response);\n```",
  },
  {
    name: 'set_overlay_visible',
    endpoint: '/devices/{deviceId}/overlay',
    httpMethod: 'post',
    summary: 'Set overlay visibility',
    description: 'Set overlay visibility',
    stainlessPath: '(resource) devices.actions > (method) set_overlay_visible',
    qualified: 'client.devices.actions.setOverlayVisible',
    params: ['deviceId: string;', 'visible: boolean;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## set_overlay_visible\n\n`client.devices.actions.setOverlayVisible(deviceId: string, visible: boolean, X-Device-Display-ID?: number): void`\n\n**post** `/devices/{deviceId}/overlay`\n\nSet overlay visibility\n\n### Parameters\n\n- `deviceId: string`\n\n- `visible: boolean`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.actions.setOverlayVisible('deviceId', { visible: true })\n```",
  },
  {
    name: 'swipe',
    endpoint: '/devices/{deviceId}/swipe',
    httpMethod: 'post',
    summary: 'Swipe',
    description: 'Swipe',
    stainlessPath: '(resource) devices.actions > (method) swipe',
    qualified: 'client.devices.actions.swipe',
    params: [
      'deviceId: string;',
      'duration: number;',
      'endX: number;',
      'endY: number;',
      'startX: number;',
      'startY: number;',
      'stealth?: boolean;',
      'X-Device-Display-ID?: number;',
    ],
    markdown:
      "## swipe\n\n`client.devices.actions.swipe(deviceId: string, duration: number, endX: number, endY: number, startX: number, startY: number, stealth?: boolean, X-Device-Display-ID?: number): void`\n\n**post** `/devices/{deviceId}/swipe`\n\nSwipe\n\n### Parameters\n\n- `deviceId: string`\n\n- `duration: number`\n  Swipe duration in milliseconds\n\n- `endX: number`\n\n- `endY: number`\n\n- `startX: number`\n\n- `startY: number`\n\n- `stealth?: boolean`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.actions.swipe('deviceId', {\n  duration: 10,\n  endX: 0,\n  endY: 0,\n  startX: 0,\n  startY: 0,\n})\n```",
  },
  {
    name: 'tap',
    endpoint: '/devices/{deviceId}/tap',
    httpMethod: 'post',
    summary: 'Tap by coordinates',
    description: 'Tap by coordinates',
    stainlessPath: '(resource) devices.actions > (method) tap',
    qualified: 'client.devices.actions.tap',
    params: [
      'deviceId: string;',
      'x: number;',
      'y: number;',
      'stealth?: boolean;',
      'X-Device-Display-ID?: number;',
    ],
    markdown:
      "## tap\n\n`client.devices.actions.tap(deviceId: string, x: number, y: number, stealth?: boolean, X-Device-Display-ID?: number): void`\n\n**post** `/devices/{deviceId}/tap`\n\nTap by coordinates\n\n### Parameters\n\n- `deviceId: string`\n\n- `x: number`\n\n- `y: number`\n\n- `stealth?: boolean`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.actions.tap('deviceId', { x: 0, y: 0 })\n```",
  },
  {
    name: 'screenshot',
    endpoint: '/devices/{deviceId}/screenshot',
    httpMethod: 'get',
    summary: 'Take screenshot',
    description: 'Take screenshot',
    stainlessPath: '(resource) devices.state > (method) screenshot',
    qualified: 'client.devices.state.screenshot',
    params: ['deviceId: string;', 'hideOverlay?: boolean;', 'X-Device-Display-ID?: number;'],
    response: 'string',
    markdown:
      "## screenshot\n\n`client.devices.state.screenshot(deviceId: string, hideOverlay?: boolean, X-Device-Display-ID?: number): string`\n\n**get** `/devices/{deviceId}/screenshot`\n\nTake screenshot\n\n### Parameters\n\n- `deviceId: string`\n\n- `hideOverlay?: boolean`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.devices.state.screenshot('deviceId');\n\nconsole.log(response);\n```",
  },
  {
    name: 'ui',
    endpoint: '/devices/{deviceId}/ui-state',
    httpMethod: 'get',
    summary: 'UI state',
    description: 'UI state',
    stainlessPath: '(resource) devices.state > (method) ui',
    qualified: 'client.devices.state.ui',
    params: ['deviceId: string;', 'filter?: boolean;', 'X-Device-Display-ID?: number;'],
    response:
      '{ a11y_tree: object; device_context: { display_metrics: { density: number; densityDpi: number; heightPixels: number; scaledDensity: number; widthPixels: number; }; filtering_params: { min_element_size: number; overlay_offset: number; }; screen_bounds: object; screenSize: object; }; phone_state: { isEditable: boolean; keyboardVisible: boolean; activityName?: string; currentApp?: string; focusedElement?: { className?: string; resourceId?: string; text?: string; }; packageName?: string; }; $schema?: string; }',
    markdown:
      "## ui\n\n`client.devices.state.ui(deviceId: string, filter?: boolean, X-Device-Display-ID?: number): { a11y_tree: object; device_context: object; phone_state: object; $schema?: string; }`\n\n**get** `/devices/{deviceId}/ui-state`\n\nUI state\n\n### Parameters\n\n- `deviceId: string`\n\n- `filter?: boolean`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `{ a11y_tree: object; device_context: { display_metrics: { density: number; densityDpi: number; heightPixels: number; scaledDensity: number; widthPixels: number; }; filtering_params: { min_element_size: number; overlay_offset: number; }; screen_bounds: object; screenSize: object; }; phone_state: { isEditable: boolean; keyboardVisible: boolean; activityName?: string; currentApp?: string; focusedElement?: { className?: string; resourceId?: string; text?: string; }; packageName?: string; }; $schema?: string; }`\n\n  - `a11y_tree: object`\n  - `device_context: { display_metrics: { density: number; densityDpi: number; heightPixels: number; scaledDensity: number; widthPixels: number; }; filtering_params: { min_element_size: number; overlay_offset: number; }; screen_bounds: { height: number; width: number; }; screenSize: { height: number; width: number; }; }`\n  - `phone_state: { isEditable: boolean; keyboardVisible: boolean; activityName?: string; currentApp?: string; focusedElement?: { className?: string; resourceId?: string; text?: string; }; packageName?: string; }`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.devices.state.ui('deviceId');\n\nconsole.log(response);\n```",
  },
  {
    name: 'update',
    endpoint: '/devices/{deviceId}/apps/{packageName}',
    httpMethod: 'patch',
    summary: 'Stop app',
    description: 'Stop app',
    stainlessPath: '(resource) devices.apps > (method) update',
    qualified: 'client.devices.apps.update',
    params: ['deviceId: string;', 'packageName: string;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## update\n\n`client.devices.apps.update(deviceId: string, packageName: string, X-Device-Display-ID?: number): void`\n\n**patch** `/devices/{deviceId}/apps/{packageName}`\n\nStop app\n\n### Parameters\n\n- `deviceId: string`\n\n- `packageName: string`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.apps.update('packageName', { deviceId: 'deviceId' })\n```",
  },
  {
    name: 'list',
    endpoint: '/devices/{deviceId}/apps',
    httpMethod: 'get',
    summary: 'List apps',
    description: 'List apps',
    stainlessPath: '(resource) devices.apps > (method) list',
    qualified: 'client.devices.apps.list',
    params: [
      'deviceId: string;',
      'includeProtectedApps?: boolean;',
      'includeSystemApps?: boolean;',
      'X-Device-Display-ID?: number;',
    ],
    response:
      '{ isSystemApp: boolean; label: string; packageName: string; versionCode: number; versionName: string; }[]',
    markdown:
      "## list\n\n`client.devices.apps.list(deviceId: string, includeProtectedApps?: boolean, includeSystemApps?: boolean, X-Device-Display-ID?: number): { isSystemApp: boolean; label: string; packageName: string; versionCode: number; versionName: string; }[]`\n\n**get** `/devices/{deviceId}/apps`\n\nList apps\n\n### Parameters\n\n- `deviceId: string`\n\n- `includeProtectedApps?: boolean`\n\n- `includeSystemApps?: boolean`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `{ isSystemApp: boolean; label: string; packageName: string; versionCode: number; versionName: string; }[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst apps = await client.devices.apps.list('deviceId');\n\nconsole.log(apps);\n```",
  },
  {
    name: 'delete',
    endpoint: '/devices/{deviceId}/apps/{packageName}',
    httpMethod: 'delete',
    summary: 'Delete app',
    description: 'Delete app',
    stainlessPath: '(resource) devices.apps > (method) delete',
    qualified: 'client.devices.apps.delete',
    params: ['deviceId: string;', 'packageName: string;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## delete\n\n`client.devices.apps.delete(deviceId: string, packageName: string, X-Device-Display-ID?: number): void`\n\n**delete** `/devices/{deviceId}/apps/{packageName}`\n\nDelete app\n\n### Parameters\n\n- `deviceId: string`\n\n- `packageName: string`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.apps.delete('packageName', { deviceId: 'deviceId' })\n```",
  },
  {
    name: 'install',
    endpoint: '/devices/{deviceId}/apps',
    httpMethod: 'post',
    summary: 'Install app',
    description: 'Install app',
    stainlessPath: '(resource) devices.apps > (method) install',
    qualified: 'client.devices.apps.install',
    params: ['deviceId: string;', 'packageName: string;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## install\n\n`client.devices.apps.install(deviceId: string, packageName: string, X-Device-Display-ID?: number): void`\n\n**post** `/devices/{deviceId}/apps`\n\nInstall app\n\n### Parameters\n\n- `deviceId: string`\n\n- `packageName: string`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.apps.install('deviceId', { packageName: 'packageName' })\n```",
  },
  {
    name: 'start',
    endpoint: '/devices/{deviceId}/apps/{packageName}',
    httpMethod: 'put',
    summary: 'Start app',
    description: 'Start app',
    stainlessPath: '(resource) devices.apps > (method) start',
    qualified: 'client.devices.apps.start',
    params: [
      'deviceId: string;',
      'packageName: string;',
      'activity?: string;',
      'X-Device-Display-ID?: number;',
    ],
    markdown:
      "## start\n\n`client.devices.apps.start(deviceId: string, packageName: string, activity?: string, X-Device-Display-ID?: number): void`\n\n**put** `/devices/{deviceId}/apps/{packageName}`\n\nStart app\n\n### Parameters\n\n- `deviceId: string`\n\n- `packageName: string`\n\n- `activity?: string`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.apps.start('packageName', { deviceId: 'deviceId' })\n```",
  },
  {
    name: 'list',
    endpoint: '/devices/{deviceId}/packages',
    httpMethod: 'get',
    summary: 'List packages',
    description: 'List packages',
    stainlessPath: '(resource) devices.packages > (method) list',
    qualified: 'client.devices.packages.list',
    params: [
      'deviceId: string;',
      'includeProtectedPackages?: boolean;',
      'includeSystemPackages?: boolean;',
      'X-Device-Display-ID?: number;',
    ],
    response: 'string[]',
    markdown:
      "## list\n\n`client.devices.packages.list(deviceId: string, includeProtectedPackages?: boolean, includeSystemPackages?: boolean, X-Device-Display-ID?: number): string[]`\n\n**get** `/devices/{deviceId}/packages`\n\nList packages\n\n### Parameters\n\n- `deviceId: string`\n\n- `includeProtectedPackages?: boolean`\n\n- `includeSystemPackages?: boolean`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `string[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst packages = await client.devices.packages.list('deviceId');\n\nconsole.log(packages);\n```",
  },
  {
    name: 'clear',
    endpoint: '/devices/{deviceId}/keyboard',
    httpMethod: 'delete',
    summary: 'Clear input',
    description: 'Clear input',
    stainlessPath: '(resource) devices.keyboard > (method) clear',
    qualified: 'client.devices.keyboard.clear',
    params: ['deviceId: string;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## clear\n\n`client.devices.keyboard.clear(deviceId: string, X-Device-Display-ID?: number): void`\n\n**delete** `/devices/{deviceId}/keyboard`\n\nClear input\n\n### Parameters\n\n- `deviceId: string`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.keyboard.clear('deviceId')\n```",
  },
  {
    name: 'key',
    endpoint: '/devices/{deviceId}/keyboard',
    httpMethod: 'put',
    summary: 'Input key',
    description: 'Input key',
    stainlessPath: '(resource) devices.keyboard > (method) key',
    qualified: 'client.devices.keyboard.key',
    params: ['deviceId: string;', 'key: number;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## key\n\n`client.devices.keyboard.key(deviceId: string, key: number, X-Device-Display-ID?: number): void`\n\n**put** `/devices/{deviceId}/keyboard`\n\nInput key\n\n### Parameters\n\n- `deviceId: string`\n\n- `key: number`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.keyboard.key('deviceId', { key: 0 })\n```",
  },
  {
    name: 'write',
    endpoint: '/devices/{deviceId}/keyboard',
    httpMethod: 'post',
    summary: 'Input text',
    description: 'Input text',
    stainlessPath: '(resource) devices.keyboard > (method) write',
    qualified: 'client.devices.keyboard.write',
    params: [
      'deviceId: string;',
      'text: string;',
      'clear?: boolean;',
      'stealth?: boolean;',
      'wpm?: number;',
      'X-Device-Display-ID?: number;',
    ],
    markdown:
      "## write\n\n`client.devices.keyboard.write(deviceId: string, text: string, clear?: boolean, stealth?: boolean, wpm?: number, X-Device-Display-ID?: number): void`\n\n**post** `/devices/{deviceId}/keyboard`\n\nInput text\n\n### Parameters\n\n- `deviceId: string`\n\n- `text: string`\n\n- `clear?: boolean`\n\n- `stealth?: boolean`\n\n- `wpm?: number`\n  Words per minute for stealth typing. 0 uses portal default.\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.keyboard.write('deviceId', { text: 'text' })\n```",
  },
  {
    name: 'list',
    endpoint: '/devices/{deviceId}/tasks',
    httpMethod: 'get',
    summary: 'List tasks for a device',
    description: 'List tasks for a device',
    stainlessPath: '(resource) devices.tasks > (method) list',
    qualified: 'client.devices.tasks.list',
    params: [
      'deviceId: string;',
      "orderBy?: 'id' | 'createdAt' | 'updatedAt' | 'assignedAt';",
      "orderByDirection?: 'asc' | 'desc';",
      'page?: number;',
      'pageSize?: number;',
    ],
    response:
      '{ items: { createdAt: string; taskId: string; updatedAt: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; $schema?: string; }',
    markdown:
      "## list\n\n`client.devices.tasks.list(deviceId: string, orderBy?: 'id' | 'createdAt' | 'updatedAt' | 'assignedAt', orderByDirection?: 'asc' | 'desc', page?: number, pageSize?: number): { items: object[]; pagination: meta; $schema?: string; }`\n\n**get** `/devices/{deviceId}/tasks`\n\nList tasks for a device\n\n### Parameters\n\n- `deviceId: string`\n\n- `orderBy?: 'id' | 'createdAt' | 'updatedAt' | 'assignedAt'`\n\n- `orderByDirection?: 'asc' | 'desc'`\n\n- `page?: number`\n\n- `pageSize?: number`\n\n### Returns\n\n- `{ items: { createdAt: string; taskId: string; updatedAt: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; $schema?: string; }`\n\n  - `items: { createdAt: string; taskId: string; updatedAt: string; }[]`\n  - `pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst tasks = await client.devices.tasks.list('deviceId');\n\nconsole.log(tasks);\n```",
  },
  {
    name: 'list',
    endpoint: '/apps',
    httpMethod: 'get',
    summary: 'List apps',
    description: 'Retrieves a paginated list of apps with filtering and search capabilities',
    stainlessPath: '(resource) apps > (method) list',
    qualified: 'client.apps.list',
    params: [
      "order?: 'asc' | 'desc';",
      'page?: number;',
      'pageSize?: number;',
      'query?: string;',
      "sortBy?: 'createdAt' | 'name';",
      "source?: 'all' | 'uploaded' | 'store' | 'queued';",
    ],
    response:
      "{ count: { availableCount: number; queuedCount: number; storeCount: number; totalCount: number; uploadCount: number; }; items: { id: string; categoryName: string; country: string; createdAt: string; description: string; developerName: string; displayName: string; expectedFiles: string | number | boolean | object | object[]; iconURL: string; packageName: string; privacyPolicyUrl: string; queuedAt: string; ratingCount: number; ratingScore: string; sizeBytes: number; source: 'uploaded' | 'store'; status: 'queued' | 'available' | 'failed'; stealthTier: 'tier1' | 'tier2' | 'tier3'; targetSdk: number; type: 'android' | 'ios'; updatedAt: string; userId: string; versionCode: number; versionName: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }",
    markdown:
      "## list\n\n`client.apps.list(order?: 'asc' | 'desc', page?: number, pageSize?: number, query?: string, sortBy?: 'createdAt' | 'name', source?: 'all' | 'uploaded' | 'store' | 'queued'): { count: object; items: object[]; pagination: pagination; }`\n\n**get** `/apps`\n\nRetrieves a paginated list of apps with filtering and search capabilities\n\n### Parameters\n\n- `order?: 'asc' | 'desc'`\n\n- `page?: number`\n\n- `pageSize?: number`\n\n- `query?: string`\n\n- `sortBy?: 'createdAt' | 'name'`\n\n- `source?: 'all' | 'uploaded' | 'store' | 'queued'`\n\n### Returns\n\n- `{ count: { availableCount: number; queuedCount: number; storeCount: number; totalCount: number; uploadCount: number; }; items: { id: string; categoryName: string; country: string; createdAt: string; description: string; developerName: string; displayName: string; expectedFiles: string | number | boolean | object | object[]; iconURL: string; packageName: string; privacyPolicyUrl: string; queuedAt: string; ratingCount: number; ratingScore: string; sizeBytes: number; source: 'uploaded' | 'store'; status: 'queued' | 'available' | 'failed'; stealthTier: 'tier1' | 'tier2' | 'tier3'; targetSdk: number; type: 'android' | 'ios'; updatedAt: string; userId: string; versionCode: number; versionName: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }`\n\n  - `count: { availableCount: number; queuedCount: number; storeCount: number; totalCount: number; uploadCount: number; }`\n  - `items: { id: string; categoryName: string; country: string; createdAt: string; description: string; developerName: string; displayName: string; expectedFiles: string | number | boolean | object | object[]; iconURL: string; packageName: string; privacyPolicyUrl: string; queuedAt: string; ratingCount: number; ratingScore: string; sizeBytes: number; source: 'uploaded' | 'store'; status: 'queued' | 'available' | 'failed'; stealthTier: 'tier1' | 'tier2' | 'tier3'; targetSdk: number; type: 'android' | 'ios'; updatedAt: string; userId: string; versionCode: number; versionName: string; }[]`\n  - `pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst apps = await client.apps.list();\n\nconsole.log(apps);\n```",
  },
  {
    name: 'list',
    endpoint: '/credentials',
    httpMethod: 'get',
    summary: 'List all credentials for the authenticated user',
    description: 'List all credentials for the authenticated user',
    stainlessPath: '(resource) credentials > (method) list',
    qualified: 'client.credentials.list',
    params: ['page?: number;', 'pageSize?: number;'],
    response:
      '{ items: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }',
    markdown:
      "## list\n\n`client.credentials.list(page?: number, pageSize?: number): { items: credential[]; pagination: pagination; }`\n\n**get** `/credentials`\n\nList all credentials for the authenticated user\n\n### Parameters\n\n- `page?: number`\n\n- `pageSize?: number`\n\n### Returns\n\n- `{ items: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }`\n\n  - `items: { credentialName: string; fields: { fieldType: string; value: string; }[]; packageName: string; secretPath: string; userId: string; }[]`\n  - `pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst credentials = await client.credentials.list();\n\nconsole.log(credentials);\n```",
  },
  {
    name: 'create',
    endpoint: '/credentials/packages',
    httpMethod: 'post',
    summary: 'Initialize a new package/app',
    description: 'Initialize a new package/app',
    stainlessPath: '(resource) credentials.packages > (method) create',
    qualified: 'client.credentials.packages.create',
    params: ['packageName: string;'],
    response: '{ data: { packageName: string; }; message: string; success: true; }',
    markdown:
      "## create\n\n`client.credentials.packages.create(packageName: string): { data: object; message: string; success: true; }`\n\n**post** `/credentials/packages`\n\nInitialize a new package/app\n\n### Parameters\n\n- `packageName: string`\n\n### Returns\n\n- `{ data: { packageName: string; }; message: string; success: true; }`\n\n  - `data: { packageName: string; }`\n  - `message: string`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst _package = await client.credentials.packages.create({ packageName: 'packageName' });\n\nconsole.log(_package);\n```",
  },
  {
    name: 'list',
    endpoint: '/credentials/packages/{packageName}',
    httpMethod: 'get',
    summary: 'List credentials for a specific package',
    description: 'List credentials for a specific package',
    stainlessPath: '(resource) credentials.packages > (method) list',
    qualified: 'client.credentials.packages.list',
    params: ['packageName: string;'],
    response:
      '{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }[]; }',
    markdown:
      "## list\n\n`client.credentials.packages.list(packageName: string): { data: credential[]; }`\n\n**get** `/credentials/packages/{packageName}`\n\nList credentials for a specific package\n\n### Parameters\n\n- `packageName: string`\n\n### Returns\n\n- `{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }[]; }`\n\n  - `data: { credentialName: string; fields: { fieldType: string; value: string; }[]; packageName: string; secretPath: string; userId: string; }[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst packages = await client.credentials.packages.list('packageName');\n\nconsole.log(packages);\n```",
  },
  {
    name: 'create',
    endpoint: '/credentials/packages/{packageName}',
    httpMethod: 'post',
    summary: 'Create a credential with fields for a package',
    description: 'Create a credential with fields for a package',
    stainlessPath: '(resource) credentials.packages.credentials > (method) create',
    qualified: 'client.credentials.packages.credentials.create',
    params: [
      'packageName: string;',
      'credentialName: string;',
      'fields: { fieldType: string; value: string; }[];',
    ],
    response:
      '{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; message: string; success: true; }',
    markdown:
      "## create\n\n`client.credentials.packages.credentials.create(packageName: string, credentialName: string, fields: { fieldType: string; value: string; }[]): { data: credential; message: string; success: true; }`\n\n**post** `/credentials/packages/{packageName}`\n\nCreate a credential with fields for a package\n\n### Parameters\n\n- `packageName: string`\n\n- `credentialName: string`\n\n- `fields: { fieldType: string; value: string; }[]`\n\n### Returns\n\n- `{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; message: string; success: true; }`\n\n  - `data: { credentialName: string; fields: { fieldType: string; value: string; }[]; packageName: string; secretPath: string; userId: string; }`\n  - `message: string`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst credential = await client.credentials.packages.credentials.create('packageName', { credentialName: '26f1kl_-n-71', fields: [{ fieldType: 'email', value: 'x' }] });\n\nconsole.log(credential);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/credentials/packages/{packageName}/credentials/{credentialName}',
    httpMethod: 'get',
    summary: 'Get a specific credential with its fields',
    description: 'Get a specific credential with its fields',
    stainlessPath: '(resource) credentials.packages.credentials > (method) retrieve',
    qualified: 'client.credentials.packages.credentials.retrieve',
    params: ['packageName: string;', 'credentialName: string;'],
    response:
      '{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; }',
    markdown:
      "## retrieve\n\n`client.credentials.packages.credentials.retrieve(packageName: string, credentialName: string): { data: credential; }`\n\n**get** `/credentials/packages/{packageName}/credentials/{credentialName}`\n\nGet a specific credential with its fields\n\n### Parameters\n\n- `packageName: string`\n\n- `credentialName: string`\n\n### Returns\n\n- `{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; }`\n\n  - `data: { credentialName: string; fields: { fieldType: string; value: string; }[]; packageName: string; secretPath: string; userId: string; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst credential = await client.credentials.packages.credentials.retrieve('credentialName', { packageName: 'packageName' });\n\nconsole.log(credential);\n```",
  },
  {
    name: 'delete',
    endpoint: '/credentials/packages/{packageName}/credentials/{credentialName}',
    httpMethod: 'delete',
    summary: 'Delete a credential and all its fields',
    description: 'Delete a credential and all its fields',
    stainlessPath: '(resource) credentials.packages.credentials > (method) delete',
    qualified: 'client.credentials.packages.credentials.delete',
    params: ['packageName: string;', 'credentialName: string;'],
    response:
      '{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; message: string; success: true; }',
    markdown:
      "## delete\n\n`client.credentials.packages.credentials.delete(packageName: string, credentialName: string): { data: credential; message: string; success: true; }`\n\n**delete** `/credentials/packages/{packageName}/credentials/{credentialName}`\n\nDelete a credential and all its fields\n\n### Parameters\n\n- `packageName: string`\n\n- `credentialName: string`\n\n### Returns\n\n- `{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; message: string; success: true; }`\n\n  - `data: { credentialName: string; fields: { fieldType: string; value: string; }[]; packageName: string; secretPath: string; userId: string; }`\n  - `message: string`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst credential = await client.credentials.packages.credentials.delete('credentialName', { packageName: 'packageName' });\n\nconsole.log(credential);\n```",
  },
  {
    name: 'create',
    endpoint: '/credentials/packages/{packageName}/credentials/{credentialName}/fields',
    httpMethod: 'post',
    summary: 'Add a new field to an existing credential',
    description: 'Add a new field to an existing credential',
    stainlessPath: '(resource) credentials.packages.credentials.fields > (method) create',
    qualified: 'client.credentials.packages.credentials.fields.create',
    params: ['packageName: string;', 'credentialName: string;', 'fieldType: string;', 'value: string;'],
    response:
      '{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; message: string; success: true; }',
    markdown:
      "## create\n\n`client.credentials.packages.credentials.fields.create(packageName: string, credentialName: string, fieldType: string, value: string): { data: credential; message: string; success: true; }`\n\n**post** `/credentials/packages/{packageName}/credentials/{credentialName}/fields`\n\nAdd a new field to an existing credential\n\n### Parameters\n\n- `packageName: string`\n\n- `credentialName: string`\n\n- `fieldType: string`\n\n- `value: string`\n\n### Returns\n\n- `{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; message: string; success: true; }`\n\n  - `data: { credentialName: string; fields: { fieldType: string; value: string; }[]; packageName: string; secretPath: string; userId: string; }`\n  - `message: string`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst field = await client.credentials.packages.credentials.fields.create('credentialName', {\n  packageName: 'packageName',\n  fieldType: 'email',\n  value: 'x',\n});\n\nconsole.log(field);\n```",
  },
  {
    name: 'update',
    endpoint: '/credentials/packages/{packageName}/credentials/{credentialName}/fields/{fieldType}',
    httpMethod: 'patch',
    summary: 'Update the value of a credential field',
    description: 'Update the value of a credential field',
    stainlessPath: '(resource) credentials.packages.credentials.fields > (method) update',
    qualified: 'client.credentials.packages.credentials.fields.update',
    params: ['packageName: string;', 'credentialName: string;', 'fieldType: string;', 'value: string;'],
    response:
      '{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; message: string; success: true; }',
    markdown:
      "## update\n\n`client.credentials.packages.credentials.fields.update(packageName: string, credentialName: string, fieldType: string, value: string): { data: credential; message: string; success: true; }`\n\n**patch** `/credentials/packages/{packageName}/credentials/{credentialName}/fields/{fieldType}`\n\nUpdate the value of a credential field\n\n### Parameters\n\n- `packageName: string`\n\n- `credentialName: string`\n\n- `fieldType: string`\n\n- `value: string`\n\n### Returns\n\n- `{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; message: string; success: true; }`\n\n  - `data: { credentialName: string; fields: { fieldType: string; value: string; }[]; packageName: string; secretPath: string; userId: string; }`\n  - `message: string`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst field = await client.credentials.packages.credentials.fields.update('email', {\n  packageName: 'packageName',\n  credentialName: 'credentialName',\n  value: 'x',\n});\n\nconsole.log(field);\n```",
  },
  {
    name: 'delete',
    endpoint: '/credentials/packages/{packageName}/credentials/{credentialName}/fields/{fieldType}',
    httpMethod: 'delete',
    summary: 'Delete a field from a credential',
    description: 'Delete a field from a credential',
    stainlessPath: '(resource) credentials.packages.credentials.fields > (method) delete',
    qualified: 'client.credentials.packages.credentials.fields.delete',
    params: ['packageName: string;', 'credentialName: string;', 'fieldType: string;'],
    response:
      '{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; message: string; success: true; }',
    markdown:
      "## delete\n\n`client.credentials.packages.credentials.fields.delete(packageName: string, credentialName: string, fieldType: string): { data: credential; message: string; success: true; }`\n\n**delete** `/credentials/packages/{packageName}/credentials/{credentialName}/fields/{fieldType}`\n\nDelete a field from a credential\n\n### Parameters\n\n- `packageName: string`\n\n- `credentialName: string`\n\n- `fieldType: string`\n\n### Returns\n\n- `{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; message: string; success: true; }`\n\n  - `data: { credentialName: string; fields: { fieldType: string; value: string; }[]; packageName: string; secretPath: string; userId: string; }`\n  - `message: string`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst field = await client.credentials.packages.credentials.fields.delete('email', { packageName: 'packageName', credentialName: 'credentialName' });\n\nconsole.log(field);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/hooks/{hook_id}',
    httpMethod: 'get',
    summary: 'Get Hook',
    description: 'Get a hook subscription by id.',
    stainlessPath: '(resource) hooks > (method) retrieve',
    qualified: 'client.hooks.retrieve',
    params: ['hook_id: string;'],
    response:
      "{ service: 'zapier' | 'n8n' | 'make' | 'internal' | 'other'; url: string; userId: string; id?: string; createdAt?: string; events?: 'created' | 'running' | 'paused' | 'completed' | 'failed' | 'cancelled'[]; state?: 'active' | 'disabled' | 'deleted'; updatedAt?: string; }",
    markdown:
      "## retrieve\n\n`client.hooks.retrieve(hook_id: string): { service: 'zapier' | 'n8n' | 'make' | 'internal' | 'other'; url: string; userId: string; id?: string; createdAt?: string; events?: task_status[]; state?: 'active' | 'disabled' | 'deleted'; updatedAt?: string; }`\n\n**get** `/hooks/{hook_id}`\n\nGet a hook subscription by id.\n\n### Parameters\n\n- `hook_id: string`\n\n### Returns\n\n- `{ service: 'zapier' | 'n8n' | 'make' | 'internal' | 'other'; url: string; userId: string; id?: string; createdAt?: string; events?: 'created' | 'running' | 'paused' | 'completed' | 'failed' | 'cancelled'[]; state?: 'active' | 'disabled' | 'deleted'; updatedAt?: string; }`\n\n  - `service: 'zapier' | 'n8n' | 'make' | 'internal' | 'other'`\n  - `url: string`\n  - `userId: string`\n  - `id?: string`\n  - `createdAt?: string`\n  - `events?: 'created' | 'running' | 'paused' | 'completed' | 'failed' | 'cancelled'[]`\n  - `state?: 'active' | 'disabled' | 'deleted'`\n  - `updatedAt?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst hook = await client.hooks.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(hook);\n```",
  },
  {
    name: 'update',
    endpoint: '/hooks/{hook_id}/edit',
    httpMethod: 'post',
    summary: 'Edit Hook',
    description:
      'Edit a hook subscription (events or state).\n\nAllows updating the events filter and/or the state of a hook.',
    stainlessPath: '(resource) hooks > (method) update',
    qualified: 'client.hooks.update',
    params: ['hook_id: string;', 'events?: string[];', 'state?: string;'],
    response: '{ id: string; state: string; updated: boolean; url: string; events?: string[]; }',
    markdown:
      "## update\n\n`client.hooks.update(hook_id: string, events?: string[], state?: string): { id: string; state: string; updated: boolean; url: string; events?: string[]; }`\n\n**post** `/hooks/{hook_id}/edit`\n\nEdit a hook subscription (events or state).\n\nAllows updating the events filter and/or the state of a hook.\n\n### Parameters\n\n- `hook_id: string`\n\n- `events?: string[]`\n  Updated list of events to subscribe to\n\n- `state?: string`\n  Updated hook state (active, disabled, deleted)\n\n### Returns\n\n- `{ id: string; state: string; updated: boolean; url: string; events?: string[]; }`\n  Response model after successfully editing a hook.\n\n  - `id: string`\n  - `state: string`\n  - `updated: boolean`\n  - `url: string`\n  - `events?: string[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst hook = await client.hooks.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(hook);\n```",
  },
  {
    name: 'list',
    endpoint: '/hooks',
    httpMethod: 'get',
    summary: 'List Hooks',
    description: 'List hooks belonging to the requesting user (paginated).',
    stainlessPath: '(resource) hooks > (method) list',
    qualified: 'client.hooks.list',
    params: [
      'orderBy?: string;',
      "orderByDirection?: 'asc' | 'desc';",
      'page?: number;',
      'pageSize?: number;',
    ],
    response:
      "{ items: { service: 'zapier' | 'n8n' | 'make' | 'internal' | 'other'; url: string; userId: string; id?: string; createdAt?: string; events?: 'created' | 'running' | 'paused' | 'completed' | 'failed' | 'cancelled'[]; state?: 'active' | 'disabled' | 'deleted'; updatedAt?: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }",
    markdown:
      "## list\n\n`client.hooks.list(orderBy?: string, orderByDirection?: 'asc' | 'desc', page?: number, pageSize?: number): { items: object[]; pagination: pagination_meta; }`\n\n**get** `/hooks`\n\nList hooks belonging to the requesting user (paginated).\n\n### Parameters\n\n- `orderBy?: string`\n\n- `orderByDirection?: 'asc' | 'desc'`\n\n- `page?: number`\n\n- `pageSize?: number`\n\n### Returns\n\n- `{ items: { service: 'zapier' | 'n8n' | 'make' | 'internal' | 'other'; url: string; userId: string; id?: string; createdAt?: string; events?: 'created' | 'running' | 'paused' | 'completed' | 'failed' | 'cancelled'[]; state?: 'active' | 'disabled' | 'deleted'; updatedAt?: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }`\n\n  - `items: { service: 'zapier' | 'n8n' | 'make' | 'internal' | 'other'; url: string; userId: string; id?: string; createdAt?: string; events?: 'created' | 'running' | 'paused' | 'completed' | 'failed' | 'cancelled'[]; state?: 'active' | 'disabled' | 'deleted'; updatedAt?: string; }[]`\n  - `pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst hooks = await client.hooks.list();\n\nconsole.log(hooks);\n```",
  },
  {
    name: 'get_sample_data',
    endpoint: '/hooks/sample',
    httpMethod: 'get',
    summary: 'Get Sample Data',
    description: 'Get sample hook data for Zapier Perform List (testing/field mapping).',
    stainlessPath: '(resource) hooks > (method) get_sample_data',
    qualified: 'client.hooks.getSampleData',
    response:
      '{ id: string; createdAt: string; events: string[]; state: string; url: string; updatedAt?: string; }[]',
    markdown:
      "## get_sample_data\n\n`client.hooks.getSampleData(): { id: string; createdAt: string; events: string[]; state: string; url: string; updatedAt?: string; }[]`\n\n**get** `/hooks/sample`\n\nGet sample hook data for Zapier Perform List (testing/field mapping).\n\n### Returns\n\n- `{ id: string; createdAt: string; events: string[]; state: string; url: string; updatedAt?: string; }[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.hooks.getSampleData();\n\nconsole.log(response);\n```",
  },
  {
    name: 'perform',
    endpoint: '/hooks/perform',
    httpMethod: 'post',
    summary: 'Perform Hook',
    description: 'Zapier Perform endpoint - processes webhook payloads.',
    stainlessPath: '(resource) hooks > (method) perform',
    qualified: 'client.hooks.perform',
    params: ['body: object;'],
    response: 'object[]',
    markdown:
      "## perform\n\n`client.hooks.perform(body: object): object[]`\n\n**post** `/hooks/perform`\n\nZapier Perform endpoint - processes webhook payloads.\n\n### Parameters\n\n- `body: object`\n\n### Returns\n\n- `object[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.hooks.perform({ body: { foo: 'bar' } });\n\nconsole.log(response);\n```",
  },
  {
    name: 'subscribe',
    endpoint: '/hooks/subscribe',
    httpMethod: 'post',
    summary: 'Subscribe',
    description: 'Subscribe the current user to a webhook URL. Returns subscription id.',
    stainlessPath: '(resource) hooks > (method) subscribe',
    qualified: 'client.hooks.subscribe',
    params: ['targetUrl: string;', 'events?: string[];', 'service?: string;'],
    response: '{ id: string; subscribed: boolean; url: string; events?: string[]; service?: string; }',
    markdown:
      "## subscribe\n\n`client.hooks.subscribe(targetUrl: string, events?: string[], service?: string): { id: string; subscribed: boolean; url: string; events?: string[]; service?: string; }`\n\n**post** `/hooks/subscribe`\n\nSubscribe the current user to a webhook URL. Returns subscription id.\n\n### Parameters\n\n- `targetUrl: string`\n  The webhook URL to send notifications to\n\n- `events?: string[]`\n  List of task events to subscribe to (created, running, completed, failed, cancelled, paused)\n\n- `service?: string`\n  Service that receives the webhook\n\n### Returns\n\n- `{ id: string; subscribed: boolean; url: string; events?: string[]; service?: string; }`\n  Response model after successful subscription.\n\n  - `id: string`\n  - `subscribed: boolean`\n  - `url: string`\n  - `events?: string[]`\n  - `service?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.hooks.subscribe({ targetUrl: 'https://example.com' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'unsubscribe',
    endpoint: '/hooks/{hook_id}/unsubscribe',
    httpMethod: 'post',
    summary: 'Unsubscribe',
    description:
      'Unsubscribe a previously created subscription by id.\n\nPermanently deletes the subscription if it belongs to the user.',
    stainlessPath: '(resource) hooks > (method) unsubscribe',
    qualified: 'client.hooks.unsubscribe',
    params: ['hook_id: string;'],
    response: '{ id: string; unsubscribed: boolean; }',
    markdown:
      "## unsubscribe\n\n`client.hooks.unsubscribe(hook_id: string): { id: string; unsubscribed: boolean; }`\n\n**post** `/hooks/{hook_id}/unsubscribe`\n\nUnsubscribe a previously created subscription by id.\n\nPermanently deletes the subscription if it belongs to the user.\n\n### Parameters\n\n- `hook_id: string`\n\n### Returns\n\n- `{ id: string; unsubscribed: boolean; }`\n  Response model after successful unsubscription.\n\n  - `id: string`\n  - `unsubscribed: boolean`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.hooks.unsubscribe('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/models',
    httpMethod: 'get',
    summary: 'Get all LLM models',
    description: 'Get all LLM models',
    stainlessPath: '(resource) models > (method) list',
    qualified: 'client.models.list',
    response:
      '{ data?: { id?: string; created?: number; object?: string; owned_by?: string; }[]; object?: string; }',
    markdown:
      "## list\n\n`client.models.list(): { data?: object[]; object?: string; }`\n\n**get** `/models`\n\nGet all LLM models\n\n### Returns\n\n- `{ data?: { id?: string; created?: number; object?: string; owned_by?: string; }[]; object?: string; }`\n\n  - `data?: { id?: string; created?: number; object?: string; owned_by?: string; }[]`\n  - `object?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst models = await client.models.list();\n\nconsole.log(models);\n```",
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
