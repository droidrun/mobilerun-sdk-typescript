// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'mobilerun-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mobilerun from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'devices',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/devices/{deviceId}',
  operationId: 'terminate-device',
};

export const tool: Tool = {
  name: 'terminate_devices',
  description: 'Terminate a device',
  inputSchema: {
    type: 'object',
    properties: {
      deviceId: {
        type: 'string',
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
  const response = await client.devices.terminate(deviceId).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
