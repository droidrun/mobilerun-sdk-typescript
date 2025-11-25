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
  httpPath: '/hooks/{hook_id}/edit',
  operationId: 'edit_hook_hooks__hook_id__edit_post',
};

export const tool: Tool = {
  name: 'update_hooks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEdit a hook subscription (events or state).\n\nAllows updating the events filter and/or the state of a hook.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/hook_update_response',\n  $defs: {\n    hook_update_response: {\n      type: 'object',\n      title: 'EditHookResponse',\n      description: 'Response model after successfully editing a hook.',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id',\n          description: 'The subscription ID'\n        },\n        state: {\n          type: 'string',\n          title: 'State',\n          description: 'The hook state'\n        },\n        updated: {\n          type: 'boolean',\n          title: 'Updated',\n          description: 'Whether the hook was updated'\n        },\n        url: {\n          type: 'string',\n          title: 'Url',\n          description: 'The webhook URL'\n        },\n        events: {\n          type: 'array',\n          title: 'Events',\n          description: 'List of subscribed events',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: [        'id',\n        'state',\n        'updated',\n        'url'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      hook_id: {
        type: 'string',
        title: 'Hook Id',
      },
      events: {
        type: 'array',
        title: 'Events',
        description: 'Updated list of events to subscribe to',
        items: {
          type: 'string',
        },
      },
      state: {
        type: 'string',
        title: 'State',
        description: 'Updated hook state (active, disabled, deleted)',
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

export const handler = async (client: DroidrunCloud, args: Record<string, unknown> | undefined) => {
  const { hook_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.hooks.update(hook_id, body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
