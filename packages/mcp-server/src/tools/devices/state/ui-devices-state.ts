// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'mobilerun-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mobilerun from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'devices.state',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/devices/{deviceId}/ui-state',
  operationId: 'ui-state',
};

export const tool: Tool = {
  name: 'ui_devices_state',
  description: 'UI state',
  inputSchema: {
    type: 'object',
    properties: {
      deviceId: {
        type: 'string',
      },
      'X-User-ID': {
        type: 'string',
      },
      filter: {
        type: 'boolean',
      },
    },
    required: ['deviceId', 'X-User-ID'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Mobilerun, args: Record<string, unknown> | undefined) => {
  const { deviceId, ...body } = args as any;
  return asTextContentResult((await client.devices.state.ui(deviceId, body)) as object);
};

export default { metadata, tool, handler };
