// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'droidrun-cloud-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'droidrun-cloud-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DroidrunCloud from 'droidrun-cloud';

export const metadata: Metadata = {
  resource: 'tasks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/tasks/{task_id}/status',
  operationId: 'get_task_status_tasks__task_id__status_get',
};

export const tool: Tool = {
  name: 'get_status_tasks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the status of a task. If device is provided, return the status of the specific device. Otherwise, return the status of all devices.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/task_get_status_response',\n  $defs: {\n    task_get_status_response: {\n      type: 'object',\n      title: 'TaskStatusResponse',\n      properties: {\n        status: {\n          $ref: '#/$defs/task_status'\n        }\n      },\n      required: [        'status'\n      ]\n    },\n    task_status: {\n      type: 'string',\n      title: 'TaskStatus',\n      enum: [        'created',\n        'running',\n        'paused',\n        'completed',\n        'failed',\n        'cancelled'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      task_id: {
        type: 'string',
        title: 'Task Id',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['task_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DroidrunCloud, args: Record<string, unknown> | undefined) => {
  const { task_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.tasks.getStatus(task_id)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
