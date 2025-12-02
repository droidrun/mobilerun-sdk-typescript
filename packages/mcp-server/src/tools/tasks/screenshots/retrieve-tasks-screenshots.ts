// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'mobilerun-cloud-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'mobilerun-cloud-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import MobilerunCloud from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'tasks.screenshots',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/tasks/{task_id}/screenshots/{index}',
  operationId: 'get_task_screenshot_tasks__task_id__screenshots__index__get',
};

export const tool: Tool = {
  name: 'retrieve_tasks_screenshots',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Task Screenshot\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/media_response',\n  $defs: {\n    media_response: {\n      type: 'object',\n      title: 'MediaResponse',\n      properties: {\n        url: {\n          type: 'string',\n          title: 'Url',\n          description: 'The URL of the media'\n        }\n      },\n      required: [        'url'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      task_id: {
        type: 'string',
        title: 'Task Id',
      },
      index: {
        type: 'integer',
        title: 'Index',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['task_id', 'index'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: MobilerunCloud, args: Record<string, unknown> | undefined) => {
  const { index, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.tasks.screenshots.retrieve(index, body)),
    );
  } catch (error) {
    if (error instanceof MobilerunCloud.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
