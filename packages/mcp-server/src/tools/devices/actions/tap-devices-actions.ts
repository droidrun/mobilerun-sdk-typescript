// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'mobilerun-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mobilerun from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'devices.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/devices/{deviceId}/tap',
  operationId: 'tap',
};

export const tool: Tool = {
  name: 'tap_devices_actions',
  description: 'Tap by coordinates',
  inputSchema: {
    type: 'object',
    properties: {
      deviceId: {
        type: 'string',
      },
      x: {
        type: 'integer',
      },
      y: {
        type: 'integer',
      },
      'X-Device-Display-ID': {
        type: 'string',
      },
    },
    required: ['deviceId', 'x', 'y'],
  },
  annotations: {},
};

export const handler = async (client: Mobilerun, args: Record<string, unknown> | undefined) => {
  const { deviceId, ...body } = args as any;
  const response = await client.devices.actions.tap(deviceId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
