// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'droidrun-cloud-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'droidrun-cloud-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DroidrunCloud from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'tasks.ui_states',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/tasks/{task_id}/ui_states',
  operationId: 'get_task_ui_states_tasks__task_id__ui_states_get',
};

export const tool: Tool = {
  name: 'list_tasks_ui_states',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Task Ui States\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/ui_state_list_response',\n  $defs: {\n    ui_state_list_response: {\n      type: 'object',\n      title: 'MediaListResponse',\n      properties: {\n        urls: {\n          type: 'array',\n          title: 'Urls',\n          description: 'The list of media URLs',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: [        'urls'\n      ]\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.tasks.uiStates.list(task_id)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
