// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'mobilerun-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'mobilerun-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mobilerun from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'hooks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/hooks/{hook_id}',
  operationId: 'get_hook_hooks__hook_id__get',
};

export const tool: Tool = {
  name: 'retrieve_hooks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a hook subscription by id.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/hook_retrieve_response',\n  $defs: {\n    hook_retrieve_response: {\n      type: 'object',\n      title: 'Hook',\n      properties: {\n        service: {\n          type: 'string',\n          title: 'HookService',\n          enum: [            'zapier',\n            'n8n',\n            'make',\n            'internal',\n            'other'\n          ]\n        },\n        url: {\n          type: 'string',\n          title: 'Url'\n        },\n        userId: {\n          type: 'string',\n          title: 'Userid'\n        },\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        createdAt: {\n          type: 'string',\n          title: 'Createdat',\n          format: 'date-time'\n        },\n        events: {\n          type: 'array',\n          title: 'Events',\n          items: {\n            $ref: '#/$defs/task_status'\n          }\n        },\n        state: {\n          type: 'string',\n          title: 'HookStatus',\n          enum: [            'active',\n            'disabled',\n            'deleted'\n          ]\n        },\n        updatedAt: {\n          type: 'string',\n          title: 'Updatedat',\n          format: 'date-time'\n        }\n      },\n      required: [        'service',\n        'url',\n        'userId'\n      ]\n    },\n    task_status: {\n      type: 'string',\n      title: 'TaskStatus',\n      enum: [        'created',\n        'running',\n        'paused',\n        'completed',\n        'failed',\n        'cancelled'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      hook_id: {
        type: 'string',
        title: 'Hook Id',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['hook_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Mobilerun, args: Record<string, unknown> | undefined) => {
  const { hook_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.hooks.retrieve(hook_id)));
  } catch (error) {
    if (error instanceof Mobilerun.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
