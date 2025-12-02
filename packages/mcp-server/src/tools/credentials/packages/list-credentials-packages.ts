// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'mobilerun-cloud-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'mobilerun-cloud-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import MobilerunCloud from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'credentials.packages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/credentials/packages/{packageName}',
  operationId: 'listPackageCredentials',
};

export const tool: Tool = {
  name: 'list_credentials_packages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList credentials for a specific package\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/package_list_response',\n  $defs: {\n    package_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/credential'\n          }\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    credential: {\n      type: 'object',\n      properties: {\n        credentialName: {\n          type: 'string'\n        },\n        fields: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              fieldType: {\n                type: 'string',\n                enum: [                  'email',\n                  'username',\n                  'password',\n                  'api_token',\n                  'phone_number',\n                  'two_factor_secret',\n                  'backup_codes'\n                ]\n              },\n              value: {\n                type: 'string'\n              }\n            },\n            required: [              'fieldType',\n              'value'\n            ]\n          }\n        },\n        packageName: {\n          type: 'string'\n        },\n        secretPath: {\n          type: 'string'\n        },\n        userId: {\n          type: 'string'\n        }\n      },\n      required: [        'credentialName',\n        'fields',\n        'packageName',\n        'secretPath',\n        'userId'\n      ]\n    }\n  }\n}\n```",
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: MobilerunCloud, args: Record<string, unknown> | undefined) => {
  const { packageName, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.credentials.packages.list(packageName)),
    );
  } catch (error) {
    if (error instanceof MobilerunCloud.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
