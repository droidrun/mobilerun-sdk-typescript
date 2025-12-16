// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'mobilerun-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mobilerun from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'devices.apps',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/devices/{deviceId}/apps/{packageName}',
  operationId: 'delete-app',
};

export const tool: Tool = {
  name: 'delete_devices_apps',
  description: 'Delete app',
  inputSchema: {
    type: 'object',
    properties: {
      deviceId: {
        type: 'string',
      },
      packageName: {
        type: 'string',
      },
    },
    required: ['deviceId', 'packageName'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Mobilerun, args: Record<string, unknown> | undefined) => {
  const { packageName, ...body } = args as any;
  const response = await client.devices.apps.delete(packageName, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
