// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'droidrun-cloud-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'droidrun-cloud-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DroidrunCloud from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'tasks.screenshots',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/tasks/{task_id}/screenshots',
  operationId: 'get_task_screenshots_tasks__task_id__screenshots_get',
};

export const tool: Tool = {
  name: 'list_tasks_screenshots',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Task Screenshots\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/screenshot_list_response',\n  $defs: {\n    screenshot_list_response: {\n      type: 'object',\n      title: 'MediaListResponse',\n      properties: {\n        urls: {\n          type: 'array',\n          title: 'Urls',\n          description: 'The list of media URLs',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: [        'urls'\n      ]\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.tasks.screenshots.list(task_id)));
  } catch (error) {
    if (error instanceof DroidrunCloud.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
