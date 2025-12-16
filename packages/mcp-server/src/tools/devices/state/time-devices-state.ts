// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'mobilerun-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'mobilerun-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mobilerun from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'devices.state',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/devices/{deviceId}/time',
  operationId: 'device-time',
};

export const tool: Tool = {
  name: 'time_devices_state',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDevice time\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/state_time_response',\n  $defs: {\n    state_time_response: {\n      type: 'string',\n      format: 'date-time'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      deviceId: {
        type: 'string',
      },
      'X-User-ID': {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['deviceId', 'X-User-ID'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Mobilerun, args: Record<string, unknown> | undefined) => {
  const { deviceId, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.devices.state.time(deviceId, body)));
  } catch (error) {
    if (error instanceof Mobilerun.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
