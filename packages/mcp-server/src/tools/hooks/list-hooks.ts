// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'mobilerun-cloud-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'mobilerun-cloud-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import MobilerunCloud from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'hooks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/hooks/',
  operationId: 'list_hooks_hooks__get',
};

export const tool: Tool = {
  name: 'list_hooks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList hooks belonging to the requesting user (paginated).\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/hook_list_response',\n  $defs: {\n    hook_list_response: {\n      type: 'object',\n      title: 'PaginatedResult[Hook]',\n      properties: {\n        items: {\n          type: 'array',\n          title: 'Items',\n          description: 'The paginated items',\n          items: {\n            type: 'object',\n            title: 'Hook',\n            properties: {\n              service: {\n                type: 'string',\n                title: 'HookService',\n                enum: [                  'zapier',\n                  'n8n',\n                  'make',\n                  'internal',\n                  'other'\n                ]\n              },\n              url: {\n                type: 'string',\n                title: 'Url'\n              },\n              userId: {\n                type: 'string',\n                title: 'Userid'\n              },\n              id: {\n                type: 'string',\n                title: 'Id'\n              },\n              createdAt: {\n                type: 'string',\n                title: 'Createdat',\n                format: 'date-time'\n              },\n              events: {\n                type: 'array',\n                title: 'Events',\n                items: {\n                  $ref: '#/$defs/task_status'\n                }\n              },\n              state: {\n                type: 'string',\n                title: 'HookStatus',\n                enum: [                  'active',\n                  'disabled',\n                  'deleted'\n                ]\n              },\n              updatedAt: {\n                type: 'string',\n                title: 'Updatedat',\n                format: 'date-time'\n              }\n            },\n            required: [              'service',\n              'url',\n              'userId'\n            ]\n          }\n        },\n        pagination: {\n          type: 'object',\n          title: 'PaginationMeta',\n          description: 'Pagination metadata',\n          properties: {\n            hasNext: {\n              type: 'boolean',\n              title: 'Hasnext',\n              description: 'Whether there is a next page'\n            },\n            hasPrev: {\n              type: 'boolean',\n              title: 'Hasprev',\n              description: 'Whether there is a previous page'\n            },\n            page: {\n              type: 'integer',\n              title: 'Page',\n              description: 'Current page number (1-based)'\n            },\n            pages: {\n              type: 'integer',\n              title: 'Pages',\n              description: 'Total number of pages'\n            },\n            pageSize: {\n              type: 'integer',\n              title: 'Pagesize',\n              description: 'Number of items per page'\n            },\n            total: {\n              type: 'integer',\n              title: 'Total',\n              description: 'Total number of items'\n            }\n          },\n          required: [            'hasNext',\n            'hasPrev',\n            'page',\n            'pages',\n            'pageSize',\n            'total'\n          ]\n        }\n      },\n      required: [        'items',\n        'pagination'\n      ]\n    },\n    task_status: {\n      type: 'string',\n      title: 'TaskStatus',\n      enum: [        'created',\n        'running',\n        'paused',\n        'completed',\n        'failed',\n        'cancelled'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      orderBy: {
        type: 'string',
        title: 'Orderby',
      },
      orderByDirection: {
        type: 'string',
        title: 'Orderbydirection',
        enum: ['asc', 'desc'],
      },
      page: {
        type: 'integer',
        title: 'Page',
      },
      pageSize: {
        type: 'integer',
        title: 'Pagesize',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: MobilerunCloud, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.hooks.list(body)));
  } catch (error) {
    if (error instanceof MobilerunCloud.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
