// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'droidrun-cloud-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'droidrun-cloud-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DroidrunCloud from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'hooks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/hooks/sample',
  operationId: 'get_sample_data_hooks_sample_get',
};

export const tool: Tool = {
  name: 'get_sample_data_hooks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet sample hook data for Zapier Perform List (testing/field mapping).\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/hook_get_sample_data_response',\n  $defs: {\n    hook_get_sample_data_response: {\n      type: 'array',\n      title: 'Response Get Sample Data Hooks Sample Get',\n      items: {\n        type: 'object',\n        title: 'HookSampleData',\n        description: 'Sample webhook event data for testing/mapping in Zapier.',\n        properties: {\n          id: {\n            type: 'string',\n            title: 'Id',\n            description: 'The subscription ID'\n          },\n          createdAt: {\n            type: 'string',\n            title: 'Createdat',\n            description: 'ISO timestamp of when the subscription was created'\n          },\n          events: {\n            type: 'array',\n            title: 'Events',\n            description: 'List of subscribed events',\n            items: {\n              type: 'string'\n            }\n          },\n          state: {\n            type: 'string',\n            title: 'State',\n            description: 'The hook state'\n          },\n          url: {\n            type: 'string',\n            title: 'Url',\n            description: 'The webhook URL'\n          },\n          updatedAt: {\n            type: 'string',\n            title: 'Updatedat',\n            description: 'ISO timestamp of the last update'\n          }\n        },\n        required: [          'id',\n          'createdAt',\n          'events',\n          'state',\n          'url'\n        ]\n      }\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.hooks.getSampleData()));
  } catch (error) {
    if (error instanceof DroidrunCloud.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
