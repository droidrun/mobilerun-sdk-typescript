// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'mobilerun-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mobilerun from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'devices.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/devices/{deviceId}/global',
  operationId: 'global',
};

export const tool: Tool = {
  name: 'global_devices_actions',
  description: 'Perform a global action',
  inputSchema: {
    type: 'object',
    properties: {
      deviceId: {
        type: 'string',
      },
      action: {
        type: 'integer',
      },
      'X-Device-Display-ID': {
        type: 'integer',
      },
    },
    required: ['deviceId', 'action'],
  },
  annotations: {},
};

export const handler = async (client: Mobilerun, args: Record<string, unknown> | undefined) => {
  const { deviceId, ...body } = args as any;
  const response = await client.devices.actions.global(deviceId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
