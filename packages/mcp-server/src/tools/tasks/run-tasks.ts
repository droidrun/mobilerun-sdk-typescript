// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'droidrun-cloud-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'droidrun-cloud-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DroidrunCloud from 'droidrun-cloud';

export const metadata: Metadata = {
  resource: 'tasks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/tasks/',
  operationId: 'run_task_tasks__post',
};

export const tool: Tool = {
  name: 'run_tasks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRun Task\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/task_run_response',\n  $defs: {\n    task_run_response: {\n      type: 'object',\n      title: 'TaskCreatedResponse',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id',\n          description: 'The ID of the task'\n        },\n        token: {\n          type: 'string',\n          title: 'Token',\n          description: 'The token of the stream'\n        },\n        streamUrl: {\n          type: 'string',\n          title: 'Streamurl',\n          description: 'The URL of the stream'\n        }\n      },\n      required: [        'id',\n        'token',\n        'streamUrl'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      llmModel: {
        $ref: '#/$defs/llm_model',
      },
      task: {
        type: 'string',
        title: 'Task',
      },
      apps: {
        type: 'array',
        title: 'Apps',
        items: {
          type: 'string',
        },
      },
      credentials: {
        type: 'array',
        title: 'Credentials',
        items: {
          type: 'object',
          title: 'PackageCredentials',
          properties: {
            credentialNames: {
              type: 'array',
              title: 'Credentialnames',
              items: {
                type: 'string',
              },
            },
            packageName: {
              type: 'string',
              title: 'Packagename',
            },
          },
          required: ['credentialNames', 'packageName'],
        },
      },
      files: {
        type: 'array',
        title: 'Files',
        items: {
          type: 'string',
        },
      },
      maxSteps: {
        type: 'integer',
        title: 'Maxsteps',
      },
      outputSchema: {
        type: 'object',
        title: 'Outputschema',
        additionalProperties: true,
      },
      reasoning: {
        type: 'boolean',
        title: 'Reasoning',
      },
      temperature: {
        type: 'number',
        title: 'Temperature',
      },
      timeout: {
        type: 'integer',
        title: 'Timeout',
      },
      vision: {
        type: 'boolean',
        title: 'Vision',
      },
      vpnCountry: {
        type: 'string',
        title: 'VPNCountry',
        enum: ['US', 'BR', 'FR', 'DE', 'IN', 'JP', 'KR', 'ZA'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['llmModel', 'task'],
    $defs: {
      llm_model: {
        type: 'string',
        title: 'LLMModel',
        enum: [
          'openai/gpt-5',
          'google/gemini-2.5-flash',
          'google/gemini-2.5-pro',
          'google/gemini-3-pro-preview',
          'anthropic/claude-sonnet-4.5',
          'minimax/minimax-m2',
          'moonshotai/kimi-k2-thinking',
        ],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: DroidrunCloud, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.tasks.run(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
