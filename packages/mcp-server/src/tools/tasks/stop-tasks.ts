// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'droidrun-cloud-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'droidrun-cloud-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DroidrunCloud from 'droidrun-cloud';

export const metadata: Metadata = {
  resource: 'tasks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/tasks/{task_id}/cancel',
  operationId: 'stop_task_tasks__task_id__cancel_post',
};

export const tool: Tool = {
  name: 'stop_tasks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nStop Task\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/task_stop_response',\n  $defs: {\n    task_stop_response: {\n      type: 'object',\n      title: 'TaskCancelResponse',\n      properties: {\n        cancelled: {\n          type: 'boolean',\n          title: 'Cancelled',\n          description: 'Whether the task was cancelled'\n        }\n      },\n      required: [        'cancelled'\n      ]\n    }\n  }\n}\n```",
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
  annotations: {},
};

export const handler = async (client: DroidrunCloud, args: Record<string, unknown> | undefined) => {
  const { task_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.tasks.stop(task_id)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
