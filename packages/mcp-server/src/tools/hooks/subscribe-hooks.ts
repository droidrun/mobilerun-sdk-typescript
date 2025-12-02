// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'droidrun-cloud-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'droidrun-cloud-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DroidrunCloud from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'hooks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/hooks/subscribe',
  operationId: 'subscribe_hooks_subscribe_post',
};

export const tool: Tool = {
  name: 'subscribe_hooks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSubscribe the current user to a webhook URL. Returns subscription id.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/hook_subscribe_response',\n  $defs: {\n    hook_subscribe_response: {\n      type: 'object',\n      title: 'SubscribeResponse',\n      description: 'Response model after successful subscription.',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id',\n          description: 'The subscription ID'\n        },\n        subscribed: {\n          type: 'boolean',\n          title: 'Subscribed',\n          description: 'Whether subscription was successful'\n        },\n        url: {\n          type: 'string',\n          title: 'Url',\n          description: 'The webhook URL'\n        },\n        events: {\n          type: 'array',\n          title: 'Events',\n          description: 'List of subscribed events',\n          items: {\n            type: 'string'\n          }\n        },\n        service: {\n          type: 'string',\n          title: 'Service',\n          description: 'Service that receives the webhook'\n        }\n      },\n      required: [        'id',\n        'subscribed',\n        'url'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      targetUrl: {
        type: 'string',
        title: 'Targeturl',
        description: 'The webhook URL to send notifications to',
      },
      events: {
        type: 'array',
        title: 'Events',
        description:
          'List of task events to subscribe to (created, running, completed, failed, cancelled, paused)',
        items: {
          type: 'string',
        },
      },
      service: {
        type: 'string',
        title: 'Service',
        description: 'Service that receives the webhook',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['targetUrl'],
  },
  annotations: {},
};

export const handler = async (client: DroidrunCloud, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.hooks.subscribe(body)));
  } catch (error) {
    if (error instanceof DroidrunCloud.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
