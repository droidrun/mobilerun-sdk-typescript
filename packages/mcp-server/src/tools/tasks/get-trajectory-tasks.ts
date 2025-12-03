// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'mobilerun-cloud-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Mobilerun from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'tasks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/tasks/{task_id}/trajectory',
  operationId: 'get_task_trajectory_tasks__task_id__trajectory_get',
};

export const tool: Tool = {
  name: 'get_trajectory_tasks',
  description: 'Get the trajectory of a task.',
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

export const handler = async (client: Mobilerun, args: Record<string, unknown> | undefined) => {
  const { task_id, ...body } = args as any;
  try {
    return asTextContentResult(await client.tasks.getTrajectory(task_id));
  } catch (error) {
    if (error instanceof Mobilerun.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
