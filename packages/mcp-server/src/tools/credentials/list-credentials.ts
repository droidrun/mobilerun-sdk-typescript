// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'droidrun-cloud-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'droidrun-cloud-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DroidrunCloud from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'credentials',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/credentials',
  operationId: 'listAllUserCredentials',
};

export const tool: Tool = {
  name: 'list_credentials',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all credentials for the authenticated user\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/credential_list_response',\n  $defs: {\n    credential_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/credential'\n          }\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    credential: {\n      type: 'object',\n      properties: {\n        credentialName: {\n          type: 'string'\n        },\n        fields: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              fieldType: {\n                type: 'string',\n                enum: [                  'email',\n                  'username',\n                  'password',\n                  'api_token',\n                  'phone_number',\n                  'two_factor_secret',\n                  'backup_codes'\n                ]\n              },\n              value: {\n                type: 'string'\n              }\n            },\n            required: [              'fieldType',\n              'value'\n            ]\n          }\n        },\n        packageName: {\n          type: 'string'\n        },\n        secretPath: {\n          type: 'string'\n        },\n        userId: {\n          type: 'string'\n        }\n      },\n      required: [        'credentialName',\n        'fields',\n        'packageName',\n        'secretPath',\n        'userId'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.credentials.list()));
  } catch (error) {
    if (error instanceof DroidrunCloud.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
