// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'mobilerun-cloud-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import MobilerunCloud from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'tasks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/tasks/{task_id}/attach',
  operationId: 'attach_task_tasks__task_id__attach_get',
};

export const tool: Tool = {
  name: 'attach_tasks',
  description: 'Attach Task',
  inputSchema: {
    type: 'object',
    properties: {
      task_id: {
        type: 'string',
        title: 'Task Id',
      },
    },
    required: ['task_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: MobilerunCloud, args: Record<string, unknown> | undefined) => {
  const { task_id, ...body } = args as any;
  const response = await client.tasks.attach(task_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
