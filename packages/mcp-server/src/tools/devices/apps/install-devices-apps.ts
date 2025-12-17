// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'mobilerun-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mobilerun from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'devices.apps',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/devices/{deviceId}/apps',
  operationId: 'install-app',
};

export const tool: Tool = {
  name: 'install_devices_apps',
  description: 'Install app',
  inputSchema: {
    type: 'object',
    properties: {
      deviceId: {
        type: 'string',
      },
      packageName: {
        type: 'string',
      },
      'X-Device-Display-ID': {
        type: 'integer',
      },
    },
    required: ['deviceId', 'packageName'],
  },
  annotations: {},
};

export const handler = async (client: Mobilerun, args: Record<string, unknown> | undefined) => {
  const { deviceId, ...body } = args as any;
  const response = await client.devices.apps.install(deviceId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
