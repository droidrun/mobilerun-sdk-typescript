// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'droidrun-cloud-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DroidrunCloud from 'droidrun-cloud';

export const metadata: Metadata = {
  resource: 'tasks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/tasks/stream',
  operationId: 'run_streamed_task_tasks_stream_post',
};

export const tool: Tool = {
  name: 'run_streamed_tasks',
  description: 'Run Streamed Task',
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
      executionTimeout: {
        type: 'integer',
        title: 'Executiontimeout',
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
      vision: {
        type: 'boolean',
        title: 'Vision',
      },
      vpnCountry: {
        type: 'string',
        title: 'VPNCountry',
        enum: ['US', 'BR', 'FR', 'DE', 'IN', 'JP', 'KR', 'ZA'],
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
  const body = args as any;
  const response = await client.tasks.runStreamed(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
