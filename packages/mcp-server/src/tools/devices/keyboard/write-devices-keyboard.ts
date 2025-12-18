// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'mobilerun-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mobilerun from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'devices.keyboard',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/devices/{deviceId}/keyboard',
  operationId: 'input-text',
};

export const tool: Tool = {
  name: 'write_devices_keyboard',
  description: 'Input text',
  inputSchema: {
    type: 'object',
    properties: {
      deviceId: {
        type: 'string',
      },
      clear: {
        type: 'boolean',
      },
      text: {
        type: 'string',
      },
      'X-Device-Display-ID,omitempty': {
        type: 'integer',
      },
    },
    required: ['deviceId', 'clear', 'text'],
  },
  annotations: {},
};

export const handler = async (client: Mobilerun, args: Record<string, unknown> | undefined) => {
  const { deviceId, ...body } = args as any;
  const response = await client.devices.keyboard.write(deviceId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
