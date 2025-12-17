// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'mobilerun-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mobilerun from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'devices.keyboard',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/devices/{deviceId}/keyboard',
  operationId: 'input-key',
};

export const tool: Tool = {
  name: 'key_devices_keyboard',
  description: 'Input key',
  inputSchema: {
    type: 'object',
    properties: {
      deviceId: {
        type: 'string',
      },
      key: {
        type: 'integer',
      },
      'X-Device-Display-ID': {
        type: 'integer',
      },
    },
    required: ['deviceId', 'key'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Mobilerun, args: Record<string, unknown> | undefined) => {
  const { deviceId, ...body } = args as any;
  const response = await client.devices.keyboard.key(deviceId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
