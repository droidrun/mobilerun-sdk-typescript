// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'mobilerun-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mobilerun from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'devices.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/devices/{deviceId}/swipe',
  operationId: 'swipe',
};

export const tool: Tool = {
  name: 'swipe_devices_actions',
  description: 'Swipe',
  inputSchema: {
    type: 'object',
    properties: {
      deviceId: {
        type: 'string',
      },
      duration: {
        type: 'integer',
      },
      endX: {
        type: 'integer',
      },
      endY: {
        type: 'integer',
      },
      startX: {
        type: 'integer',
      },
      startY: {
        type: 'integer',
      },
    },
    required: ['deviceId', 'duration', 'endX', 'endY', 'startX', 'startY'],
  },
  annotations: {},
};

export const handler = async (client: Mobilerun, args: Record<string, unknown> | undefined) => {
  const { deviceId, ...body } = args as any;
  const response = await client.devices.actions.swipe(deviceId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
