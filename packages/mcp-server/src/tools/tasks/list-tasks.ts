// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'droidrun-cloud-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'droidrun-cloud-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DroidrunCloud from '@mobilerun/sdk';

export const metadata: Metadata = {
  resource: 'tasks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/tasks/',
  operationId: 'list_tasks_tasks__get',
};

export const tool: Tool = {
  name: 'list_tasks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all tasks you've created so far\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/task_list_response',\n  $defs: {\n    task_list_response: {\n      type: 'object',\n      title: 'PaginatedResult[Task]',\n      properties: {\n        items: {\n          type: 'array',\n          title: 'Items',\n          description: 'The paginated items',\n          items: {\n            $ref: '#/$defs/task'\n          }\n        },\n        pagination: {\n          type: 'object',\n          title: 'PaginationMeta',\n          description: 'Pagination metadata',\n          properties: {\n            hasNext: {\n              type: 'boolean',\n              title: 'Hasnext',\n              description: 'Whether there is a next page'\n            },\n            hasPrev: {\n              type: 'boolean',\n              title: 'Hasprev',\n              description: 'Whether there is a previous page'\n            },\n            page: {\n              type: 'integer',\n              title: 'Page',\n              description: 'Current page number (1-based)'\n            },\n            pages: {\n              type: 'integer',\n              title: 'Pages',\n              description: 'Total number of pages'\n            },\n            pageSize: {\n              type: 'integer',\n              title: 'Pagesize',\n              description: 'Number of items per page'\n            },\n            total: {\n              type: 'integer',\n              title: 'Total',\n              description: 'Total number of items'\n            }\n          },\n          required: [            'hasNext',\n            'hasPrev',\n            'page',\n            'pages',\n            'pageSize',\n            'total'\n          ]\n        }\n      },\n      required: [        'items',\n        'pagination'\n      ]\n    },\n    task: {\n      type: 'object',\n      title: 'Task',\n      properties: {\n        deviceId: {\n          type: 'string',\n          title: 'Deviceid'\n        },\n        llmModel: {\n          $ref: '#/$defs/llm_model'\n        },\n        task: {\n          type: 'string',\n          title: 'Task'\n        },\n        userId: {\n          type: 'string',\n          title: 'Userid'\n        },\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        apps: {\n          type: 'array',\n          title: 'Apps',\n          items: {\n            type: 'string'\n          }\n        },\n        createdAt: {\n          type: 'string',\n          title: 'Createdat',\n          format: 'date-time'\n        },\n        credentials: {\n          type: 'array',\n          title: 'Credentials',\n          items: {\n            type: 'object',\n            title: 'PackageCredentials',\n            properties: {\n              credentialNames: {\n                type: 'array',\n                title: 'Credentialnames',\n                items: {\n                  type: 'string'\n                }\n              },\n              packageName: {\n                type: 'string',\n                title: 'Packagename'\n              }\n            },\n            required: [              'credentialNames',\n              'packageName'\n            ]\n          }\n        },\n        executionTimeout: {\n          type: 'integer',\n          title: 'Executiontimeout'\n        },\n        files: {\n          type: 'array',\n          title: 'Files',\n          items: {\n            type: 'string'\n          }\n        },\n        finishedAt: {\n          type: 'string',\n          title: 'Finishedat',\n          format: 'date-time'\n        },\n        maxSteps: {\n          type: 'integer',\n          title: 'Maxsteps'\n        },\n        output: {\n          type: 'object',\n          title: 'Output',\n          additionalProperties: true\n        },\n        outputSchema: {\n          type: 'object',\n          title: 'Outputschema',\n          additionalProperties: true\n        },\n        reasoning: {\n          type: 'boolean',\n          title: 'Reasoning'\n        },\n        status: {\n          $ref: '#/$defs/task_status'\n        },\n        steps: {\n          type: 'integer',\n          title: 'Steps'\n        },\n        succeeded: {\n          type: 'boolean',\n          title: 'Succeeded'\n        },\n        temperature: {\n          type: 'number',\n          title: 'Temperature'\n        },\n        trajectory: {\n          type: 'array',\n          title: 'Trajectory',\n          items: {\n            type: 'object',\n            additionalProperties: true\n          }\n        },\n        updatedAt: {\n          type: 'string',\n          title: 'Updatedat',\n          format: 'date-time'\n        },\n        vision: {\n          type: 'boolean',\n          title: 'Vision'\n        },\n        vpnCountry: {\n          type: 'string',\n          title: 'VPNCountry',\n          enum: [            'US',\n            'BR',\n            'FR',\n            'DE',\n            'IN',\n            'JP',\n            'KR',\n            'ZA'\n          ]\n        }\n      },\n      required: [        'deviceId',\n        'llmModel',\n        'task',\n        'userId'\n      ]\n    },\n    llm_model: {\n      type: 'string',\n      title: 'LLMModel',\n      enum: [        'openai/gpt-5',\n        'google/gemini-2.5-flash',\n        'google/gemini-2.5-pro',\n        'google/gemini-3-pro-preview',\n        'anthropic/claude-sonnet-4.5',\n        'minimax/minimax-m2',\n        'moonshotai/kimi-k2-thinking'\n      ]\n    },\n    task_status: {\n      type: 'string',\n      title: 'TaskStatus',\n      enum: [        'created',\n        'running',\n        'paused',\n        'completed',\n        'failed',\n        'cancelled'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      orderBy: {
        type: 'string',
        title: 'Orderby',
        enum: ['id', 'createdAt', 'finishedAt', 'status'],
      },
      orderByDirection: {
        type: 'string',
        title: 'Orderbydirection',
        enum: ['asc', 'desc'],
      },
      page: {
        type: 'integer',
        title: 'Page',
        description: 'Page number (1-based). If provided, returns paginated results.',
      },
      pageSize: {
        type: 'integer',
        title: 'Pagesize',
        description: 'Number of items per page',
      },
      query: {
        type: 'string',
        title: 'Query',
        description: 'Search in task description.',
      },
      status: {
        $ref: '#/$defs/task_status',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
    $defs: {
      task_status: {
        type: 'string',
        title: 'TaskStatus',
        enum: ['created', 'running', 'paused', 'completed', 'failed', 'cancelled'],
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DroidrunCloud, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.tasks.list(body)));
  } catch (error) {
    if (error instanceof DroidrunCloud.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
