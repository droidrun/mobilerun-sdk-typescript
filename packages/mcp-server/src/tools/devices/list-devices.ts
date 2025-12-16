// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'mobilerun-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'mobilerun-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mobilerun from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'devices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/devices',
  operationId: 'list-devices',
};

export const tool: Tool = {
  name: 'list_devices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList devices\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/device_list_response',\n  $defs: {\n    device_list_response: {\n      type: 'object',\n      properties: {\n        items: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/device'\n          }\n        },\n        pagination: {\n          type: 'object',\n          properties: {\n            hasNext: {\n              type: 'boolean'\n            },\n            hasPrev: {\n              type: 'boolean'\n            },\n            page: {\n              type: 'integer'\n            },\n            pages: {\n              type: 'integer'\n            },\n            pageSize: {\n              type: 'integer'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'hasNext',\n            'hasPrev',\n            'page',\n            'pages',\n            'pageSize',\n            'total'\n          ]\n        },\n        $schema: {\n          type: 'string',\n          description: 'A URL to the JSON Schema for this object.'\n        }\n      },\n      required: [        'items',\n        'pagination'\n      ]\n    },\n    device: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        apps: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        assignedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        country: {\n          type: 'string'\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        files: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        name: {\n          type: 'string'\n        },\n        state: {\n          type: 'string'\n        },\n        streamToken: {\n          type: 'string'\n        },\n        streamUrl: {\n          type: 'string'\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        $schema: {\n          type: 'string',\n          description: 'A URL to the JSON Schema for this object.'\n        },\n        taskId: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'apps',\n        'assignedAt',\n        'country',\n        'createdAt',\n        'files',\n        'name',\n        'state',\n        'streamToken',\n        'streamUrl',\n        'updatedAt'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      country: {
        type: 'string',
      },
      orderBy: {
        type: 'string',
        enum: ['id', 'createdAt', 'updatedAt', 'assignedAt'],
      },
      orderByDirection: {
        type: 'string',
        enum: ['asc', 'desc'],
      },
      page: {
        type: 'integer',
      },
      pageSize: {
        type: 'integer',
      },
      state: {
        type: 'string',
        enum: ['creating', 'assigned', 'ready', 'terminated', 'unknown'],
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

export const handler = async (client: Mobilerun, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.devices.list(body)));
  } catch (error) {
    if (error instanceof Mobilerun.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
