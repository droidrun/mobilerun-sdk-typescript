// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'mobilerun-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mobilerun from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'devices.apps',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/devices/{deviceId}/apps/{packageName}',
  operationId: 'start-app',
};

export const tool: Tool = {
  name: 'start_devices_apps',
  description: 'Start app',
  inputSchema: {
    type: 'object',
    properties: {
      deviceId: {
        type: 'string',
      },
      packageName: {
        type: 'string',
      },
      activity: {
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
  const response = await client.devices.apps.start(packageName, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
