// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'mobilerun-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'mobilerun-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mobilerun from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'credentials.packages',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/credentials/packages',
  operationId: 'initializePackage',
};

export const tool: Tool = {
  name: 'create_credentials_packages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nInitialize a new package/app\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/package_create_response',\n  $defs: {\n    package_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            packageName: {\n              type: 'string'\n            }\n          },\n          required: [            'packageName'\n          ]\n        },\n        message: {\n          type: 'string'\n        },\n        success: {\n          type: 'string',\n          enum: [            true\n          ]\n        }\n      },\n      required: [        'data',\n        'message',\n        'success'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      packageName: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['packageName'],
  },
  annotations: {},
};

export const handler = async (client: Mobilerun, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.credentials.packages.create(body)));
  } catch (error) {
    if (error instanceof Mobilerun.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
