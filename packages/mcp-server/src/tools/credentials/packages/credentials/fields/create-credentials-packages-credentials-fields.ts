// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'mobilerun-cloud-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'mobilerun-cloud-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mobilerun from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'credentials.packages.credentials.fields',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/credentials/packages/{packageName}/credentials/{credentialName}/fields',
  operationId: 'addCredentialField',
};

export const tool: Tool = {
  name: 'create_credentials_packages_credentials_fields',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdd a new field to an existing credential\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/field_create_response',\n  $defs: {\n    field_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/credential'\n        },\n        message: {\n          type: 'string'\n        },\n        success: {\n          type: 'string',\n          enum: [            true\n          ]\n        }\n      },\n      required: [        'data',\n        'message',\n        'success'\n      ]\n    },\n    credential: {\n      type: 'object',\n      properties: {\n        credentialName: {\n          type: 'string'\n        },\n        fields: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              fieldType: {\n                type: 'string',\n                enum: [                  'email',\n                  'username',\n                  'password',\n                  'api_token',\n                  'phone_number',\n                  'two_factor_secret',\n                  'backup_codes'\n                ]\n              },\n              value: {\n                type: 'string'\n              }\n            },\n            required: [              'fieldType',\n              'value'\n            ]\n          }\n        },\n        packageName: {\n          type: 'string'\n        },\n        secretPath: {\n          type: 'string'\n        },\n        userId: {\n          type: 'string'\n        }\n      },\n      required: [        'credentialName',\n        'fields',\n        'packageName',\n        'secretPath',\n        'userId'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      packageName: {
        type: 'string',
      },
      credentialName: {
        type: 'string',
      },
      fieldType: {
        type: 'string',
        enum: [
          'email',
          'username',
          'password',
          'api_token',
          'phone_number',
          'two_factor_secret',
          'backup_codes',
        ],
      },
      value: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['packageName', 'credentialName', 'fieldType', 'value'],
  },
  annotations: {},
};

export const handler = async (client: Mobilerun, args: Record<string, unknown> | undefined) => {
  const { credentialName, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.credentials.packages.credentials.fields.create(credentialName, body),
      ),
    );
  } catch (error) {
    if (error instanceof Mobilerun.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
