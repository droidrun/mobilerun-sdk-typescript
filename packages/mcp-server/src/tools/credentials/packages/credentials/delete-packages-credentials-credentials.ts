// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'droidrun-cloud-mcp/filtering';
import { Metadata, asTextContentResult } from 'droidrun-cloud-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DroidrunCloud from 'droidrun-cloud';

export const metadata: Metadata = {
  resource: 'credentials.packages.credentials',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/credentials/packages/{packageName}/credentials/{credentialName}',
  operationId: 'deleteCredential',
};

export const tool: Tool = {
  name: 'delete_packages_credentials_credentials',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete a credential and all its fields\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/credential_delete_response',\n  $defs: {\n    credential_delete_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/credential'\n        },\n        message: {\n          type: 'string'\n        },\n        success: {\n          type: 'string',\n          enum: [            true\n          ]\n        }\n      },\n      required: [        'data',\n        'message',\n        'success'\n      ]\n    },\n    credential: {\n      type: 'object',\n      properties: {\n        credentialName: {\n          type: 'string'\n        },\n        fields: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              fieldType: {\n                type: 'string',\n                enum: [                  'email',\n                  'username',\n                  'password',\n                  'api_token',\n                  'phone_number',\n                  'two_factor_secret',\n                  'backup_codes'\n                ]\n              },\n              value: {\n                type: 'string'\n              }\n            },\n            required: [              'fieldType',\n              'value'\n            ]\n          }\n        },\n        packageName: {\n          type: 'string'\n        },\n        secretPath: {\n          type: 'string'\n        },\n        userId: {\n          type: 'string'\n        }\n      },\n      required: [        'credentialName',\n        'fields',\n        'packageName',\n        'secretPath',\n        'userId'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      packageName: {
        type: 'string',
      },
      credentialName: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['packageName', 'credentialName'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: DroidrunCloud, args: Record<string, unknown> | undefined) => {
  const { credentialName, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.credentials.packages.credentials.delete(credentialName, body)),
  );
};

export default { metadata, tool, handler };
