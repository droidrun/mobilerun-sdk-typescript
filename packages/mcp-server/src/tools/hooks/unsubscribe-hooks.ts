// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'mobilerun-cloud-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'mobilerun-cloud-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import MobilerunCloud from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'hooks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/hooks/{hook_id}/unsubscribe',
  operationId: 'unsubscribe_hooks__hook_id__unsubscribe_post',
};

export const tool: Tool = {
  name: 'unsubscribe_hooks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUnsubscribe a previously created subscription by id.\n\nMarks the subscription as DELETED if it belongs to the user.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/hook_unsubscribe_response',\n  $defs: {\n    hook_unsubscribe_response: {\n      type: 'object',\n      title: 'UnsubscribeResponse',\n      description: 'Response model after successful unsubscription.',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id',\n          description: 'The subscription ID'\n        },\n        unsubscribed: {\n          type: 'boolean',\n          title: 'Unsubscribed',\n          description: 'Whether unsubscription was successful'\n        }\n      },\n      required: [        'id',\n        'unsubscribed'\n      ]\n    }\n  }\n}\n```",
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
  annotations: {},
};

export const handler = async (client: MobilerunCloud, args: Record<string, unknown> | undefined) => {
  const { hook_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.hooks.unsubscribe(hook_id)));
  } catch (error) {
    if (error instanceof MobilerunCloud.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
