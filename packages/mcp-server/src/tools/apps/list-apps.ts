// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'droidrun-cloud-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'droidrun-cloud-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DroidrunCloud from 'droidrun-cloud';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/apps',
  operationId: 'listApps',
};

export const tool: Tool = {
  name: 'list_apps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of apps with filtering and search capabilities\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/app_list_response',\n  $defs: {\n    app_list_response: {\n      type: 'object',\n      properties: {\n        apps: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              categoryName: {\n                type: 'string'\n              },\n              createdAt: {\n                type: 'string',\n                format: 'date'\n              },\n              description: {\n                type: 'string'\n              },\n              developerName: {\n                type: 'string'\n              },\n              displayName: {\n                type: 'string'\n              },\n              externalIds: {\n                type: 'array',\n                items: {\n                  type: 'string'\n                }\n              },\n              iconURL: {\n                type: 'string'\n              },\n              packageName: {\n                type: 'string'\n              },\n              queuedAt: {\n                type: 'string',\n                format: 'date'\n              },\n              ratingCount: {\n                type: 'integer'\n              },\n              ratingScore: {\n                type: 'string'\n              },\n              sizeBytes: {\n                type: 'integer'\n              },\n              source: {\n                type: 'string',\n                enum: [                  'uploaded',\n                  'store'\n                ]\n              },\n              targetSdk: {\n                type: 'integer'\n              },\n              updatedAt: {\n                type: 'string',\n                format: 'date'\n              },\n              userId: {\n                type: 'string'\n              },\n              versionCode: {\n                type: 'integer'\n              },\n              versionName: {\n                type: 'string'\n              }\n            },\n            required: [              'id',\n              'categoryName',\n              'createdAt',\n              'description',\n              'developerName',\n              'displayName',\n              'externalIds',\n              'iconURL',\n              'packageName',\n              'queuedAt',\n              'ratingCount',\n              'ratingScore',\n              'sizeBytes',\n              'source',\n              'targetSdk',\n              'updatedAt',\n              'userId',\n              'versionCode',\n              'versionName'\n            ]\n          }\n        },\n        availableCount: {\n          type: 'number'\n        },\n        queuedCount: {\n          type: 'number'\n        },\n        storeCount: {\n          type: 'number'\n        },\n        totalCount: {\n          type: 'number'\n        },\n        uploadCount: {\n          type: 'number'\n        }\n      },\n      required: [        'apps',\n        'availableCount',\n        'queuedCount',\n        'storeCount',\n        'totalCount',\n        'uploadCount'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      order: {
        type: 'string',
        enum: ['asc', 'desc'],
      },
      page: {
        type: 'integer',
      },
      pageSize: {
        type: 'integer',
      },
      query: {
        type: 'string',
      },
      sortBy: {
        type: 'string',
        enum: ['createdAt', 'name'],
      },
      source: {
        type: 'string',
        enum: ['all', 'uploaded', 'store'],
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

export const handler = async (client: DroidrunCloud, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.apps.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
