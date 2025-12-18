// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'mobilerun-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mobilerun from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'devices.keyboard',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/devices/{deviceId}/keyboard',
  operationId: 'clear-input',
};

export const tool: Tool = {
  name: 'clear_devices_keyboard',
  description: 'Clear input',
  inputSchema: {
    type: 'object',
    properties: {
      deviceId: {
        type: 'string',
      },
      'X-Device-Display-ID,omitempty': {
        type: 'integer',
      },
    },
    required: ['deviceId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Mobilerun, args: Record<string, unknown> | undefined) => {
  const { deviceId, ...body } = args as any;
  const response = await client.devices.keyboard.clear(deviceId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
