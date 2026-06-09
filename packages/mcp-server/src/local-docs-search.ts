// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'list',
    endpoint: '/agents',
    httpMethod: 'get',
    summary: 'Get Agents',
    description: 'List all available agents with their default configurations.',
    stainlessPath: '(resource) agents > (method) list',
    qualified: 'client.agents.list',
    response:
      '{ id: number; description: string; icon: string; llmModel: string; maxSteps: number; name: string; reasoning: boolean; subagentModel: string; vision: boolean; }[]',
    markdown:
      "## list\n\n`client.agents.list(): { id: number; description: string; icon: string; llmModel: string; maxSteps: number; name: string; reasoning: boolean; subagentModel: string; vision: boolean; }[]`\n\n**get** `/agents`\n\nList all available agents with their default configurations.\n\n### Returns\n\n- `{ id: number; description: string; icon: string; llmModel: string; maxSteps: number; name: string; reasoning: boolean; subagentModel: string; vision: boolean; }[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst agents = await client.agents.list();\n\nconsole.log(agents);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst agents = await client.agents.list();\n\nconsole.log(agents);",
      },
      python: {
        method: 'agents.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nagents = client.agents.list()\nprint(agents)',
      },
      go: {
        method: 'client.Agents.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tagents, err := client.Agents.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", agents)\n}\n',
      },
      cli: {
        method: 'agents list',
        example: "mobilerun-cloud agents list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'rehydrate_chat',
    endpoint: '/agents/chat/messages',
    httpMethod: 'get',
    summary: "Rehydrate the user's single chat from the orchestrator display cache",
    description: "Rehydrate the user's chat history. Does not wake a hibernated machine.",
    stainlessPath: '(resource) agents.chat > (method) rehydrate_chat',
    qualified: 'client.agents.chat.rehydrateChat',
    response:
      "{ messages: { id: string; parts: { type: string; }[]; role: 'user' | 'assistant' | 'system'; source?: 'cloud' | 'telegram' | 'api' | 'workflow'; synthetic?: boolean; }[]; turnActive: boolean; }",
    markdown:
      "## rehydrate_chat\n\n`client.agents.chat.rehydrateChat(): { messages: object[]; turnActive: boolean; }`\n\n**get** `/agents/chat/messages`\n\nRehydrate the user's chat history. Does not wake a hibernated machine.\n\n### Returns\n\n- `{ messages: { id: string; parts: { type: string; }[]; role: 'user' | 'assistant' | 'system'; source?: 'cloud' | 'telegram' | 'api' | 'workflow'; synthetic?: boolean; }[]; turnActive: boolean; }`\n\n  - `messages: { id: string; parts: { type: string; }[]; role: 'user' | 'assistant' | 'system'; source?: 'cloud' | 'telegram' | 'api' | 'workflow'; synthetic?: boolean; }[]`\n  - `turnActive: boolean`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.agents.chat.rehydrateChat();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.chat.rehydrateChat',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agents.chat.rehydrateChat();\n\nconsole.log(response.messages);",
      },
      python: {
        method: 'agents.chat.rehydrate_chat',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agents.chat.rehydrate_chat()\nprint(response.messages)',
      },
      go: {
        method: 'client.Agents.Chat.RehydrateChat',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agents.Chat.RehydrateChat(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Messages)\n}\n',
      },
      cli: {
        method: 'chat rehydrate_chat',
        example: "mobilerun-cloud agents:chat rehydrate-chat \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents/chat/messages \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'get_chat_state',
    endpoint: '/agents/chat/state',
    httpMethod: 'get',
    summary: 'Snapshot of in-flight activity for the caller',
    description:
      'Advisory snapshot of in-flight activity for the caller. Returns boolean flags for an interactive chat turn, a background workflow run, and a pending graceful abort. Intended for FE UI before deciding to invoke /chat/abort/force.',
    stainlessPath: '(resource) agents.chat > (method) get_chat_state',
    qualified: 'client.agents.chat.getChatState',
    response: '{ abortRequested: boolean; chatActive: boolean; workflowActive: boolean; }',
    markdown:
      "## get_chat_state\n\n`client.agents.chat.getChatState(): { abortRequested: boolean; chatActive: boolean; workflowActive: boolean; }`\n\n**get** `/agents/chat/state`\n\nAdvisory snapshot of in-flight activity for the caller. Returns boolean flags for an interactive chat turn, a background workflow run, and a pending graceful abort. Intended for FE UI before deciding to invoke /chat/abort/force.\n\n### Returns\n\n- `{ abortRequested: boolean; chatActive: boolean; workflowActive: boolean; }`\n\n  - `abortRequested: boolean`\n  - `chatActive: boolean`\n  - `workflowActive: boolean`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.agents.chat.getChatState();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.chat.getChatState',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agents.chat.getChatState();\n\nconsole.log(response.abortRequested);",
      },
      python: {
        method: 'agents.chat.get_chat_state',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agents.chat.get_chat_state()\nprint(response.abort_requested)',
      },
      go: {
        method: 'client.Agents.Chat.GetChatState',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agents.Chat.GetChatState(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.AbortRequested)\n}\n',
      },
      cli: {
        method: 'chat get_chat_state',
        example: "mobilerun-cloud agents:chat get-chat-state \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents/chat/state \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'list_slash_commands',
    endpoint: '/agents/chat/slash-commands',
    httpMethod: 'get',
    summary: 'List the chat slash-command catalog',
    description: 'List the chat slash-command catalog.',
    stainlessPath: '(resource) agents.chat > (method) list_slash_commands',
    qualified: 'client.agents.chat.listSlashCommands',
    response: '{ commands: { name: string; summary: string; args?: string; }[]; }',
    markdown:
      "## list_slash_commands\n\n`client.agents.chat.listSlashCommands(): { commands: object[]; }`\n\n**get** `/agents/chat/slash-commands`\n\nList the chat slash-command catalog.\n\n### Returns\n\n- `{ commands: { name: string; summary: string; args?: string; }[]; }`\n\n  - `commands: { name: string; summary: string; args?: string; }[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.agents.chat.listSlashCommands();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.chat.listSlashCommands',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agents.chat.listSlashCommands();\n\nconsole.log(response.commands);",
      },
      python: {
        method: 'agents.chat.list_slash_commands',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agents.chat.list_slash_commands()\nprint(response.commands)',
      },
      go: {
        method: 'client.Agents.Chat.ListSlashCommands',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agents.Chat.ListSlashCommands(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Commands)\n}\n',
      },
      cli: {
        method: 'chat list_slash_commands',
        example: "mobilerun-cloud agents:chat list-slash-commands \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents/chat/slash-commands \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'deliver_permission',
    endpoint: '/agents/chat/permission',
    httpMethod: 'post',
    summary: "Deliver a HITL approval/rejection to the user's active chat session",
    description: 'Deliver a HITL approval/rejection for an in-flight turn.',
    stainlessPath: '(resource) agents.chat > (method) deliver_permission',
    qualified: 'client.agents.chat.deliverPermission',
    params: ['permissionId: string;', "response: 'once' | 'always' | 'reject';"],
    response: '{ ok: true; }',
    markdown:
      "## deliver_permission\n\n`client.agents.chat.deliverPermission(permissionId: string, response: 'once' | 'always' | 'reject'): { ok: true; }`\n\n**post** `/agents/chat/permission`\n\nDeliver a HITL approval/rejection for an in-flight turn.\n\n### Parameters\n\n- `permissionId: string`\n\n- `response: 'once' | 'always' | 'reject'`\n\n### Returns\n\n- `{ ok: true; }`\n\n  - `ok: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.agents.chat.deliverPermission({ permissionId: 'x', response: 'once' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.chat.deliverPermission',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agents.chat.deliverPermission({\n  permissionId: 'x',\n  response: 'once',\n});\n\nconsole.log(response.ok);",
      },
      python: {
        method: 'agents.chat.deliver_permission',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agents.chat.deliver_permission(\n    permission_id="x",\n    response="once",\n)\nprint(response.ok)',
      },
      go: {
        method: 'client.Agents.Chat.DeliverPermission',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agents.Chat.DeliverPermission(context.TODO(), mobileruncloud.AgentChatDeliverPermissionParams{\n\t\tPermissionID: "x",\n\t\tResponse:     mobileruncloud.AgentChatDeliverPermissionParamsResponseOnce,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Ok)\n}\n',
      },
      cli: {
        method: 'chat deliver_permission',
        example:
          "mobilerun-cloud agents:chat deliver-permission \\\n  --api-key 'My API Key' \\\n  --permission-id x \\\n  --response once",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents/chat/permission \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "permissionId": "x",\n          "response": "once"\n        }\'',
      },
    },
  },
  {
    name: 'send_prompt',
    endpoint: '/agents/chat/prompt',
    httpMethod: 'post',
    summary: 'Send a chat prompt; receive streamed agent events',
    description: 'Send a chat prompt; streams agent events.',
    stainlessPath: '(resource) agents.chat > (method) send_prompt',
    qualified: 'client.agents.chat.sendPrompt',
    params: [
      "messages: { id: string; parts: { type: string; }[]; role: 'user' | 'assistant' | 'system'; metadata?: object; }[];",
      'id?: string;',
      'agent?: string;',
      'context?: string;',
      'fileIds?: string[];',
      'metadata?: object;',
      "trigger?: 'submit-message' | 'regenerate-message';",
    ],
    response: 'string',
    markdown:
      "## send_prompt\n\n`client.agents.chat.sendPrompt(messages: { id: string; parts: { type: string; }[]; role: 'user' | 'assistant' | 'system'; metadata?: object; }[], id?: string, agent?: string, context?: string, fileIds?: string[], metadata?: object, trigger?: 'submit-message' | 'regenerate-message'): string`\n\n**post** `/agents/chat/prompt`\n\nSend a chat prompt; streams agent events.\n\n### Parameters\n\n- `messages: { id: string; parts: { type: string; }[]; role: 'user' | 'assistant' | 'system'; metadata?: object; }[]`\n\n- `id?: string`\n\n- `agent?: string`\n\n- `context?: string`\n\n- `fileIds?: string[]`\n\n- `metadata?: object`\n\n- `trigger?: 'submit-message' | 'regenerate-message'`\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst stream = await client.agents.chat.sendPrompt({ messages: [{\n  id: 'id',\n  parts: [{ type: 'type' }],\n  role: 'user',\n}] });\nfor await (const chatSendPromptResponse of stream) {\n  console.log(chatSendPromptResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.chat.sendPrompt',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agents.chat.sendPrompt({\n  messages: [\n    {\n      id: 'id',\n      parts: [{ type: 'type' }],\n      role: 'user',\n    },\n  ],\n});\n\nconsole.log(response);",
      },
      python: {
        method: 'agents.chat.send_prompt',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nfor chat in client.agents.chat.send_prompt(\n    messages=[{\n        "id": "id",\n        "parts": [{\n            "type": "type"\n        }],\n        "role": "user",\n    }],\n):\n  print(chat)',
      },
      go: {
        method: 'client.Agents.Chat.SendPrompt',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tstream := client.Agents.Chat.SendPromptStreaming(context.TODO(), mobileruncloud.AgentChatSendPromptParams{\n\t\tMessages: []mobileruncloud.AgentChatSendPromptParamsMessage{{\n\t\t\tID: "id",\n\t\t\tParts: []mobileruncloud.AgentChatSendPromptParamsMessagePart{{\n\t\t\t\tType: "type",\n\t\t\t}},\n\t\t\tRole: "user",\n\t\t}},\n\t})\n\tfor stream.Next() {\n\t\tfmt.Printf("%+v\\n", stream.Current())\n\t}\n\terr := stream.Err()\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'chat send_prompt',
        example:
          "mobilerun-cloud agents:chat send-prompt \\\n  --api-key 'My API Key' \\\n  --message '{id: id, parts: [{type: type}], role: user}'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents/chat/prompt \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "messages": [\n            {\n              "id": "id",\n              "parts": [\n                {\n                  "type": "type"\n                }\n              ],\n              "role": "user"\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'send_message',
    endpoint: '/agents/chat/message',
    httpMethod: 'post',
    summary: 'Send a single user message via direct API',
    description: 'Send a single user message (direct API). Content-negotiated: SSE or JSON.',
    stainlessPath: '(resource) agents.chat > (method) send_message',
    qualified: 'client.agents.chat.sendMessage',
    params: ['message: string;', 'agent?: string;'],
    response: '{ assistantText: string; errorText?: string; }',
    markdown:
      "## send_message\n\n`client.agents.chat.sendMessage(message: string, agent?: string): { assistantText: string; errorText?: string; }`\n\n**post** `/agents/chat/message`\n\nSend a single user message (direct API). Content-negotiated: SSE or JSON.\n\n### Parameters\n\n- `message: string`\n\n- `agent?: string`\n\n### Returns\n\n- `{ assistantText: string; errorText?: string; }`\n\n  - `assistantText: string`\n  - `errorText?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.agents.chat.sendMessage({ message: 'x' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.chat.sendMessage',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agents.chat.sendMessage({ message: 'x' });\n\nconsole.log(response.assistantText);",
      },
      python: {
        method: 'agents.chat.send_message',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agents.chat.send_message(\n    message="x",\n)\nprint(response.assistant_text)',
      },
      go: {
        method: 'client.Agents.Chat.SendMessage',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agents.Chat.SendMessage(context.TODO(), mobileruncloud.AgentChatSendMessageParams{\n\t\tMessage: "x",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.AssistantText)\n}\n',
      },
      cli: {
        method: 'chat send_message',
        example: "mobilerun-cloud agents:chat send-message \\\n  --api-key 'My API Key' \\\n  --message x",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents/chat/message \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "message": "x"\n        }\'',
      },
    },
  },
  {
    name: 'subscribe_events',
    endpoint: '/agents/chat/events',
    httpMethod: 'get',
    summary: 'Subscribe to out-of-band chat-change notifications',
    description: 'SSE channel for chat-change notifications.',
    stainlessPath: '(resource) agents.chat > (method) subscribe_events',
    qualified: 'client.agents.chat.subscribeEvents',
    response: 'string',
    markdown:
      "## subscribe_events\n\n`client.agents.chat.subscribeEvents(): string`\n\n**get** `/agents/chat/events`\n\nSSE channel for chat-change notifications.\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst stream = await client.agents.chat.subscribeEvents();\nfor await (const chatSubscribeEventsResponse of stream) {\n  console.log(chatSubscribeEventsResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.chat.subscribeEvents',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agents.chat.subscribeEvents();\n\nconsole.log(response);",
      },
      python: {
        method: 'agents.chat.subscribe_events',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nfor chat in client.agents.chat.subscribe_events():\n  print(chat)',
      },
      go: {
        method: 'client.Agents.Chat.SubscribeEvents',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tstream := client.Agents.Chat.SubscribeEventsStreaming(context.TODO())\n\tfor stream.Next() {\n\t\tfmt.Printf("%+v\\n", stream.Current())\n\t}\n\terr := stream.Err()\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'chat subscribe_events',
        example: "mobilerun-cloud agents:chat subscribe-events \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents/chat/events \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'perform',
    endpoint: '/agents/chat/abort',
    httpMethod: 'post',
    summary: 'Abort the currently in-flight chat turn for this user',
    description: 'Abort the in-flight chat turn. Idempotent.',
    stainlessPath: '(resource) agents.chat.abort > (method) perform',
    qualified: 'client.agents.chat.abort.perform',
    response: '{ ok: true; }',
    markdown:
      "## perform\n\n`client.agents.chat.abort.perform(): { ok: true; }`\n\n**post** `/agents/chat/abort`\n\nAbort the in-flight chat turn. Idempotent.\n\n### Returns\n\n- `{ ok: true; }`\n\n  - `ok: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.agents.chat.abort.perform();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.chat.abort.perform',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agents.chat.abort.perform();\n\nconsole.log(response.ok);",
      },
      python: {
        method: 'agents.chat.abort.perform',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agents.chat.abort.perform()\nprint(response.ok)',
      },
      go: {
        method: 'client.Agents.Chat.Abort.Perform',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agents.Chat.Abort.Perform(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Ok)\n}\n',
      },
      cli: {
        method: 'abort perform',
        example: "mobilerun-cloud agents:chat:abort perform \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents/chat/abort \\\n    -X POST \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'force_clear',
    endpoint: '/agents/chat/abort/force',
    httpMethod: 'post',
    summary: 'Force-clear stuck in-flight chat state for this user',
    description:
      'Unconditionally clears the in-flight chat state for the caller. Idempotent escape hatch when /chat/abort cannot settle.',
    stainlessPath: '(resource) agents.chat.abort > (method) force_clear',
    qualified: 'client.agents.chat.abort.forceClear',
    response: '{ cleared: number; ok: true; }',
    markdown:
      "## force_clear\n\n`client.agents.chat.abort.forceClear(): { cleared: number; ok: true; }`\n\n**post** `/agents/chat/abort/force`\n\nUnconditionally clears the in-flight chat state for the caller. Idempotent escape hatch when /chat/abort cannot settle.\n\n### Returns\n\n- `{ cleared: number; ok: true; }`\n\n  - `cleared: number`\n  - `ok: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.agents.chat.abort.forceClear();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.chat.abort.forceClear',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agents.chat.abort.forceClear();\n\nconsole.log(response.cleared);",
      },
      python: {
        method: 'agents.chat.abort.force_clear',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agents.chat.abort.force_clear()\nprint(response.cleared)',
      },
      go: {
        method: 'client.Agents.Chat.Abort.ForceClear',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agents.Chat.Abort.ForceClear(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Cleared)\n}\n',
      },
      cli: {
        method: 'abort force_clear',
        example: "mobilerun-cloud agents:chat:abort force-clear \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents/chat/abort/force \\\n    -X POST \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'deliver_answer',
    endpoint: '/agents/chat/question',
    httpMethod: 'post',
    summary: "Deliver a question answer to the user's active chat session",
    description:
      "Forward the user's answers to kilo's `/question/{id}/reply` for an in-flight turn. Idempotent via the `idempotency-key` header.",
    stainlessPath: '(resource) agents.chat.question > (method) deliver_answer',
    qualified: 'client.agents.chat.question.deliverAnswer',
    params: ['answers: { label: string; } | { custom: string; }[][];', 'questionId: string;'],
    response: '{ ok: true; }',
    markdown:
      "## deliver_answer\n\n`client.agents.chat.question.deliverAnswer(answers: { label: string; } | { custom: string; }[][], questionId: string): { ok: true; }`\n\n**post** `/agents/chat/question`\n\nForward the user's answers to kilo's `/question/{id}/reply` for an in-flight turn. Idempotent via the `idempotency-key` header.\n\n### Parameters\n\n- `answers: { label: string; } | { custom: string; }[][]`\n\n- `questionId: string`\n\n### Returns\n\n- `{ ok: true; }`\n\n  - `ok: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.agents.chat.question.deliverAnswer({ answers: [[{ label: 'x' }]], questionId: 'x' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.chat.question.deliverAnswer',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agents.chat.question.deliverAnswer({\n  answers: [[{ label: 'x' }]],\n  questionId: 'x',\n});\n\nconsole.log(response.ok);",
      },
      python: {
        method: 'agents.chat.question.deliver_answer',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agents.chat.question.deliver_answer(\n    answers=[[{\n        "label": "x"\n    }]],\n    question_id="x",\n)\nprint(response.ok)',
      },
      go: {
        method: 'client.Agents.Chat.Question.DeliverAnswer',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agents.Chat.Question.DeliverAnswer(context.TODO(), mobileruncloud.AgentChatQuestionDeliverAnswerParams{\n\t\tAnswers: [][]mobileruncloud.AgentChatQuestionDeliverAnswerParamsAnswerUnion{{{\n\t\t\tOfAgentChatQuestionDeliverAnswersAnswerLabel: &mobileruncloud.AgentChatQuestionDeliverAnswerParamsAnswerLabel{\n\t\t\t\tLabel: "x",\n\t\t\t},\n\t\t}}},\n\t\tQuestionID: "x",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Ok)\n}\n',
      },
      cli: {
        method: 'question deliver_answer',
        example:
          "mobilerun-cloud agents:chat:question deliver-answer \\\n  --api-key 'My API Key' \\\n  --answer '[{label: x}]' \\\n  --question-id x",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents/chat/question \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "answers": [\n            [\n              {\n                "label": "x"\n              }\n            ]\n          ],\n          "questionId": "x"\n        }\'',
      },
    },
  },
  {
    name: 'dismiss',
    endpoint: '/agents/chat/question/reject',
    httpMethod: 'post',
    summary: 'Dismiss an outstanding question without answering',
    description:
      "Forward a reject to kilo's `/question/{id}/reject`. Already-resolved questions return 200 (no-op) so multi-tab dismiss stays idempotent.",
    stainlessPath: '(resource) agents.chat.question > (method) dismiss',
    qualified: 'client.agents.chat.question.dismiss',
    params: ['questionId: string;'],
    response: '{ ok: true; }',
    markdown:
      "## dismiss\n\n`client.agents.chat.question.dismiss(questionId: string): { ok: true; }`\n\n**post** `/agents/chat/question/reject`\n\nForward a reject to kilo's `/question/{id}/reject`. Already-resolved questions return 200 (no-op) so multi-tab dismiss stays idempotent.\n\n### Parameters\n\n- `questionId: string`\n\n### Returns\n\n- `{ ok: true; }`\n\n  - `ok: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.agents.chat.question.dismiss({ questionId: 'x' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.chat.question.dismiss',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agents.chat.question.dismiss({ questionId: 'x' });\n\nconsole.log(response.ok);",
      },
      python: {
        method: 'agents.chat.question.dismiss',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agents.chat.question.dismiss(\n    question_id="x",\n)\nprint(response.ok)',
      },
      go: {
        method: 'client.Agents.Chat.Question.Dismiss',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agents.Chat.Question.Dismiss(context.TODO(), mobileruncloud.AgentChatQuestionDismissParams{\n\t\tQuestionID: "x",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Ok)\n}\n',
      },
      cli: {
        method: 'question dismiss',
        example:
          "mobilerun-cloud agents:chat:question dismiss \\\n  --api-key 'My API Key' \\\n  --question-id x",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents/chat/question/reject \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "questionId": "x"\n        }\'',
      },
    },
  },
  {
    name: 'mint_upload_url',
    endpoint: '/agents/files/upload-url',
    httpMethod: 'post',
    summary: 'Mint a presigned PUT URL for a user file upload',
    description: 'Mint a presigned PUT URL for a user file upload',
    stainlessPath: '(resource) agents.files > (method) mint_upload_url',
    qualified: 'client.agents.files.mintUploadURL',
    params: [
      'filename: string;',
      'mimeType: string;',
      'sizeBytes: number;',
      "zone?: 'user' | 'skills';",
      'Idempotency-Key?: string;',
    ],
    response: '{ expiresAt: string; fileId: string; putUrl: string; }',
    markdown:
      "## mint_upload_url\n\n`client.agents.files.mintUploadURL(filename: string, mimeType: string, sizeBytes: number, zone?: 'user' | 'skills', Idempotency-Key?: string): { expiresAt: string; fileId: string; putUrl: string; }`\n\n**post** `/agents/files/upload-url`\n\nMint a presigned PUT URL for a user file upload\n\n### Parameters\n\n- `filename: string`\n\n- `mimeType: string`\n\n- `sizeBytes: number`\n\n- `zone?: 'user' | 'skills'`\n\n- `Idempotency-Key?: string`\n\n### Returns\n\n- `{ expiresAt: string; fileId: string; putUrl: string; }`\n\n  - `expiresAt: string`\n  - `fileId: string`\n  - `putUrl: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.agents.files.mintUploadURL({\n  filename: 'x',\n  mimeType: 'x',\n  sizeBytes: 1,\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.files.mintUploadURL',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agents.files.mintUploadURL({\n  filename: 'x',\n  mimeType: 'x',\n  sizeBytes: 1,\n});\n\nconsole.log(response.expiresAt);",
      },
      python: {
        method: 'agents.files.mint_upload_url',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agents.files.mint_upload_url(\n    filename="x",\n    mime_type="x",\n    size_bytes=1,\n)\nprint(response.expires_at)',
      },
      go: {
        method: 'client.Agents.Files.MintUploadURL',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agents.Files.MintUploadURL(context.TODO(), mobileruncloud.AgentFileMintUploadURLParams{\n\t\tFilename:  "x",\n\t\tMimeType:  "x",\n\t\tSizeBytes: 1,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ExpiresAt)\n}\n',
      },
      cli: {
        method: 'files mint_upload_url',
        example:
          "mobilerun-cloud agents:files mint-upload-url \\\n  --api-key 'My API Key' \\\n  --filename x \\\n  --mime-type x \\\n  --size-bytes 1",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents/files/upload-url \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "filename": "x",\n          "mimeType": "x",\n          "sizeBytes": 1\n        }\'',
      },
    },
  },
  {
    name: 'list_files',
    endpoint: '/agents/files',
    httpMethod: 'get',
    summary: "List the user's ready files, optionally filtered by zone",
    description: "List the user's ready files, optionally filtered by zone",
    stainlessPath: '(resource) agents.files > (method) list_files',
    qualified: 'client.agents.files.listFiles',
    params: ["zone?: 'user' | 'agent' | 'workflow' | 'skills';"],
    response:
      "{ files: { createdAt: string; createdBy: 'user' | 'agent' | 'workflow'; displayName: string; enabled: boolean; fileId: string; filename: string; mimeType: string; sizeBytes: number; zone: 'user' | 'agent' | 'workflow' | 'skills'; }[]; quota: { currentBytes: number; quotaBytes: number; }; }",
    markdown:
      "## list_files\n\n`client.agents.files.listFiles(zone?: 'user' | 'agent' | 'workflow' | 'skills'): { files: object[]; quota: object; }`\n\n**get** `/agents/files`\n\nList the user's ready files, optionally filtered by zone\n\n### Parameters\n\n- `zone?: 'user' | 'agent' | 'workflow' | 'skills'`\n\n### Returns\n\n- `{ files: { createdAt: string; createdBy: 'user' | 'agent' | 'workflow'; displayName: string; enabled: boolean; fileId: string; filename: string; mimeType: string; sizeBytes: number; zone: 'user' | 'agent' | 'workflow' | 'skills'; }[]; quota: { currentBytes: number; quotaBytes: number; }; }`\n\n  - `files: { createdAt: string; createdBy: 'user' | 'agent' | 'workflow'; displayName: string; enabled: boolean; fileId: string; filename: string; mimeType: string; sizeBytes: number; zone: 'user' | 'agent' | 'workflow' | 'skills'; }[]`\n  - `quota: { currentBytes: number; quotaBytes: number; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.agents.files.listFiles();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.files.listFiles',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agents.files.listFiles();\n\nconsole.log(response.files);",
      },
      python: {
        method: 'agents.files.list_files',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agents.files.list_files()\nprint(response.files)',
      },
      go: {
        method: 'client.Agents.Files.ListFiles',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agents.Files.ListFiles(context.TODO(), mobileruncloud.AgentFileListFilesParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Files)\n}\n',
      },
      cli: {
        method: 'files list_files',
        example: "mobilerun-cloud agents:files list-files \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents/files \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'confirm_upload',
    endpoint: '/agents/files/:fileId/confirm',
    httpMethod: 'post',
    summary: 'Confirm a file upload by server-side HEAD validation',
    description: 'Confirm a file upload by server-side HEAD validation',
    stainlessPath: '(resource) agents.files.file_id > (method) confirm_upload',
    qualified: 'client.agents.files.fileID.confirmUpload',
    response:
      "{ actualSizeBytes: number; createdAt: string; createdBy: 'user' | 'agent' | 'workflow'; displayName: string; enabled: boolean; fileId: string; filename: string; mimeType: string; sizeBytes: number; state: 'ready'; zone: 'user' | 'agent' | 'workflow' | 'skills'; }",
    markdown:
      "## confirm_upload\n\n`client.agents.files.fileID.confirmUpload(): { actualSizeBytes: number; createdAt: string; createdBy: 'user' | 'agent' | 'workflow'; displayName: string; enabled: boolean; fileId: string; filename: string; mimeType: string; sizeBytes: number; state: 'ready'; zone: 'user' | 'agent' | 'workflow' | 'skills'; }`\n\n**post** `/agents/files/:fileId/confirm`\n\nConfirm a file upload by server-side HEAD validation\n\n### Returns\n\n- `{ actualSizeBytes: number; createdAt: string; createdBy: 'user' | 'agent' | 'workflow'; displayName: string; enabled: boolean; fileId: string; filename: string; mimeType: string; sizeBytes: number; state: 'ready'; zone: 'user' | 'agent' | 'workflow' | 'skills'; }`\n\n  - `actualSizeBytes: number`\n  - `createdAt: string`\n  - `createdBy: 'user' | 'agent' | 'workflow'`\n  - `displayName: string`\n  - `enabled: boolean`\n  - `fileId: string`\n  - `filename: string`\n  - `mimeType: string`\n  - `sizeBytes: number`\n  - `state: 'ready'`\n  - `zone: 'user' | 'agent' | 'workflow' | 'skills'`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.agents.files.fileID.confirmUpload();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.files.fileID.confirmUpload',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agents.files.fileID.confirmUpload();\n\nconsole.log(response.actualSizeBytes);",
      },
      python: {
        method: 'agents.files.file_id.confirm_upload',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agents.files.file_id.confirm_upload()\nprint(response.actual_size_bytes)',
      },
      go: {
        method: 'client.Agents.Files.FileID.ConfirmUpload',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agents.Files.FileID.ConfirmUpload(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ActualSizeBytes)\n}\n',
      },
      cli: {
        method: 'file_id confirm_upload',
        example: "mobilerun-cloud agents:files:file-id confirm-upload \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents/files/:fileId/confirm \\\n    -X POST \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'download_file',
    endpoint: '/agents/files/:fileId/download',
    httpMethod: 'get',
    summary: 'Redirect to a presigned GET URL for a file (FE owner only)',
    description: 'Redirect to a presigned GET URL for a file (FE owner only)',
    stainlessPath: '(resource) agents.files.file_id > (method) download_file',
    qualified: 'client.agents.files.fileID.downloadFile',
    markdown:
      "## download_file\n\n`client.agents.files.fileID.downloadFile(): void`\n\n**get** `/agents/files/:fileId/download`\n\nRedirect to a presigned GET URL for a file (FE owner only)\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.agents.files.fileID.downloadFile()\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.files.fileID.downloadFile',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.agents.files.fileID.downloadFile();",
      },
      python: {
        method: 'agents.files.file_id.download_file',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.agents.files.file_id.download_file()',
      },
      go: {
        method: 'client.Agents.Files.FileID.DownloadFile',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Agents.Files.FileID.DownloadFile(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'file_id download_file',
        example: "mobilerun-cloud agents:files:file-id download-file \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents/files/:fileId/download \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'update_metadata',
    endpoint: '/agents/files/:fileId',
    httpMethod: 'patch',
    summary: 'Update file metadata (skills zone only)',
    description:
      'Partial update of `displayName` and/or `enabled`. Only files with `zone=skills` are mutable; other zones return 422 `unsupported_zone`.',
    stainlessPath: '(resource) agents.files.file_id > (method) update_metadata',
    qualified: 'client.agents.files.fileID.updateMetadata',
    params: ['displayName?: string;', 'enabled?: boolean;'],
    response:
      "{ createdAt: string; createdBy: 'user' | 'agent' | 'workflow'; displayName: string; enabled: boolean; fileId: string; filename: string; mimeType: string; sizeBytes: number; zone: 'user' | 'agent' | 'workflow' | 'skills'; }",
    markdown:
      "## update_metadata\n\n`client.agents.files.fileID.updateMetadata(displayName?: string, enabled?: boolean): { createdAt: string; createdBy: 'user' | 'agent' | 'workflow'; displayName: string; enabled: boolean; fileId: string; filename: string; mimeType: string; sizeBytes: number; zone: 'user' | 'agent' | 'workflow' | 'skills'; }`\n\n**patch** `/agents/files/:fileId`\n\nPartial update of `displayName` and/or `enabled`. Only files with `zone=skills` are mutable; other zones return 422 `unsupported_zone`.\n\n### Parameters\n\n- `displayName?: string`\n\n- `enabled?: boolean`\n\n### Returns\n\n- `{ createdAt: string; createdBy: 'user' | 'agent' | 'workflow'; displayName: string; enabled: boolean; fileId: string; filename: string; mimeType: string; sizeBytes: number; zone: 'user' | 'agent' | 'workflow' | 'skills'; }`\n\n  - `createdAt: string`\n  - `createdBy: 'user' | 'agent' | 'workflow'`\n  - `displayName: string`\n  - `enabled: boolean`\n  - `fileId: string`\n  - `filename: string`\n  - `mimeType: string`\n  - `sizeBytes: number`\n  - `zone: 'user' | 'agent' | 'workflow' | 'skills'`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.agents.files.fileID.updateMetadata();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.files.fileID.updateMetadata',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agents.files.fileID.updateMetadata();\n\nconsole.log(response.createdAt);",
      },
      python: {
        method: 'agents.files.file_id.update_metadata',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agents.files.file_id.update_metadata()\nprint(response.created_at)',
      },
      go: {
        method: 'client.Agents.Files.FileID.UpdateMetadata',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agents.Files.FileID.UpdateMetadata(context.TODO(), mobileruncloud.AgentFileFileIDUpdateMetadataParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.CreatedAt)\n}\n',
      },
      cli: {
        method: 'file_id update_metadata',
        example: "mobilerun-cloud agents:files:file-id update-metadata \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents/files/:fileId \\\n    -X PATCH \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'delete_file',
    endpoint: '/agents/files/:fileId',
    httpMethod: 'delete',
    summary: 'Hard-delete a file',
    description: 'Hard-delete a file',
    stainlessPath: '(resource) agents.files.file_id > (method) delete_file',
    qualified: 'client.agents.files.fileID.deleteFile',
    response: '{ ok: true; }',
    markdown:
      "## delete_file\n\n`client.agents.files.fileID.deleteFile(): { ok: true; }`\n\n**delete** `/agents/files/:fileId`\n\nHard-delete a file\n\n### Returns\n\n- `{ ok: true; }`\n\n  - `ok: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.agents.files.fileID.deleteFile();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.files.fileID.deleteFile',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agents.files.fileID.deleteFile();\n\nconsole.log(response.ok);",
      },
      python: {
        method: 'agents.files.file_id.delete_file',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agents.files.file_id.delete_file()\nprint(response.ok)',
      },
      go: {
        method: 'client.Agents.Files.FileID.DeleteFile',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agents.Files.FileID.DeleteFile(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Ok)\n}\n',
      },
      cli: {
        method: 'file_id delete_file',
        example: "mobilerun-cloud agents:files:file-id delete-file \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents/files/:fileId \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'cancel_pending_upload',
    endpoint: '/agents/files/:fileId/pending',
    httpMethod: 'delete',
    summary: 'Cancel a pending upload (transitions to expired, deletes the underlying object)',
    description:
      'Soft-cancels an in-flight upload before confirm. Only acts on `pending` rows — refuses to touch `ready` to avoid wiping confirmed files. Idempotent: `{ cancelled: false }` if the row exists but is no longer pending.',
    stainlessPath: '(resource) agents.files.file_id > (method) cancel_pending_upload',
    qualified: 'client.agents.files.fileID.cancelPendingUpload',
    response: '{ cancelled: boolean; }',
    markdown:
      "## cancel_pending_upload\n\n`client.agents.files.fileID.cancelPendingUpload(): { cancelled: boolean; }`\n\n**delete** `/agents/files/:fileId/pending`\n\nSoft-cancels an in-flight upload before confirm. Only acts on `pending` rows — refuses to touch `ready` to avoid wiping confirmed files. Idempotent: `{ cancelled: false }` if the row exists but is no longer pending.\n\n### Returns\n\n- `{ cancelled: boolean; }`\n\n  - `cancelled: boolean`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.agents.files.fileID.cancelPendingUpload();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.files.fileID.cancelPendingUpload',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agents.files.fileID.cancelPendingUpload();\n\nconsole.log(response.cancelled);",
      },
      python: {
        method: 'agents.files.file_id.cancel_pending_upload',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agents.files.file_id.cancel_pending_upload()\nprint(response.cancelled)',
      },
      go: {
        method: 'client.Agents.Files.FileID.CancelPendingUpload',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agents.Files.FileID.CancelPendingUpload(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Cancelled)\n}\n',
      },
      cli: {
        method: 'file_id cancel_pending_upload',
        example: "mobilerun-cloud agents:files:file-id cancel-pending-upload \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents/files/:fileId/pending \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'receive_update',
    endpoint: '/agents/telegram/webhook',
    httpMethod: 'post',
    summary: 'Receive a Telegram bot update',
    description:
      "Public endpoint called by Telegram's servers for the operator-owned shared bot. One fixed URL, one fixed secret: the orchestrator compares `X-Telegram-Bot-Api-Secret-Token` against `env.TELEGRAM_WEBHOOK_SECRET` with a constant-time check. Inbound routing keys on `message.from.id` (Telegram user id) → active link row → droidrun user. Returns 200 for ignorable events (group chats, dedup hits, unrecognized senders) to avoid Telegram retry storms; 401 only for missing/wrong secret; 400 for malformed bodies.",
    stainlessPath: '(resource) agents.telegram > (method) receive_update',
    qualified: 'client.agents.telegram.receiveUpdate',
    params: [
      'update_id: number;',
      'message?: { chat: { id: number; type: string; }; message_id: number; caption?: string; from?: { id: number; first_name?: string; is_bot?: boolean; username?: string; }; text?: string; };',
    ],
    markdown:
      "## receive_update\n\n`client.agents.telegram.receiveUpdate(update_id: number, message?: { chat: { id: number; type: string; }; message_id: number; caption?: string; from?: { id: number; first_name?: string; is_bot?: boolean; username?: string; }; text?: string; }): void`\n\n**post** `/agents/telegram/webhook`\n\nPublic endpoint called by Telegram's servers for the operator-owned shared bot. One fixed URL, one fixed secret: the orchestrator compares `X-Telegram-Bot-Api-Secret-Token` against `env.TELEGRAM_WEBHOOK_SECRET` with a constant-time check. Inbound routing keys on `message.from.id` (Telegram user id) → active link row → droidrun user. Returns 200 for ignorable events (group chats, dedup hits, unrecognized senders) to avoid Telegram retry storms; 401 only for missing/wrong secret; 400 for malformed bodies.\n\n### Parameters\n\n- `update_id: number`\n\n- `message?: { chat: { id: number; type: string; }; message_id: number; caption?: string; from?: { id: number; first_name?: string; is_bot?: boolean; username?: string; }; text?: string; }`\n  - `chat: { id: number; type: string; }`\n  - `message_id: number`\n  - `caption?: string`\n  - `from?: { id: number; first_name?: string; is_bot?: boolean; username?: string; }`\n  - `text?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.agents.telegram.receiveUpdate({ update_id: 0 })\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.telegram.receiveUpdate',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.agents.telegram.receiveUpdate({ update_id: 0 });",
      },
      python: {
        method: 'agents.telegram.receive_update',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.agents.telegram.receive_update(\n    update_id=0,\n)',
      },
      go: {
        method: 'client.Agents.Telegram.ReceiveUpdate',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Agents.Telegram.ReceiveUpdate(context.TODO(), mobileruncloud.AgentTelegramReceiveUpdateParams{\n\t\tUpdateID: 0,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'telegram receive_update',
        example:
          "mobilerun-cloud agents:telegram receive-update \\\n  --api-key 'My API Key' \\\n  --update-id 0",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents/telegram/webhook \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "update_id": 0\n        }\'',
      },
    },
  },
  {
    name: 'request_link',
    endpoint: '/agents/telegram/bots/connect',
    httpMethod: 'post',
    summary: 'Request a Telegram link',
    description:
      'Issues a one-shot deeplink (`t.me/<sharedBot>?start=<code>`) for the operator-owned shared bot. The user opens the link, taps `Start`, and the webhook binds their Telegram account to this droidrun user. No bot token is needed from the user — the operator owns the bot.',
    stainlessPath: '(resource) agents.telegram.bots > (method) request_link',
    qualified: 'client.agents.telegram.bots.requestLink',
    response: '{ id: string; botUsername: string; deepLink: string; }',
    markdown:
      "## request_link\n\n`client.agents.telegram.bots.requestLink(): { id: string; botUsername: string; deepLink: string; }`\n\n**post** `/agents/telegram/bots/connect`\n\nIssues a one-shot deeplink (`t.me/<sharedBot>?start=<code>`) for the operator-owned shared bot. The user opens the link, taps `Start`, and the webhook binds their Telegram account to this droidrun user. No bot token is needed from the user — the operator owns the bot.\n\n### Returns\n\n- `{ id: string; botUsername: string; deepLink: string; }`\n\n  - `id: string`\n  - `botUsername: string`\n  - `deepLink: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.agents.telegram.bots.requestLink();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.telegram.bots.requestLink',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agents.telegram.bots.requestLink();\n\nconsole.log(response.id);",
      },
      python: {
        method: 'agents.telegram.bots.request_link',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agents.telegram.bots.request_link()\nprint(response.id)',
      },
      go: {
        method: 'client.Agents.Telegram.Bots.RequestLink',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agents.Telegram.Bots.RequestLink(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      cli: {
        method: 'bots request_link',
        example: "mobilerun-cloud agents:telegram:bots request-link \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents/telegram/bots/connect \\\n    -X POST \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/agents/telegram/bots',
    httpMethod: 'get',
    summary: "List the current user's Telegram link rows",
    description: "List the current user's Telegram link rows",
    stainlessPath: '(resource) agents.telegram.bots > (method) list',
    qualified: 'client.agents.telegram.bots.list',
    response:
      "{ bots: { id: string; botUsername: string; createdAt: string; lastMessageAt: string; linkCodeExpiresAt: string; ownerTelegramUserId: number; status: 'pending' | 'active' | 'disabled'; }[]; }",
    markdown:
      "## list\n\n`client.agents.telegram.bots.list(): { bots: object[]; }`\n\n**get** `/agents/telegram/bots`\n\nList the current user's Telegram link rows\n\n### Returns\n\n- `{ bots: { id: string; botUsername: string; createdAt: string; lastMessageAt: string; linkCodeExpiresAt: string; ownerTelegramUserId: number; status: 'pending' | 'active' | 'disabled'; }[]; }`\n\n  - `bots: { id: string; botUsername: string; createdAt: string; lastMessageAt: string; linkCodeExpiresAt: string; ownerTelegramUserId: number; status: 'pending' | 'active' | 'disabled'; }[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst bots = await client.agents.telegram.bots.list();\n\nconsole.log(bots);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.telegram.bots.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst bots = await client.agents.telegram.bots.list();\n\nconsole.log(bots.bots);",
      },
      python: {
        method: 'agents.telegram.bots.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nbots = client.agents.telegram.bots.list()\nprint(bots.bots)',
      },
      go: {
        method: 'client.Agents.Telegram.Bots.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tbots, err := client.Agents.Telegram.Bots.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", bots.Bots)\n}\n',
      },
      cli: {
        method: 'bots list',
        example: "mobilerun-cloud agents:telegram:bots list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents/telegram/bots \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'revoke_link',
    endpoint: '/agents/telegram/bots/{id}/revoke',
    httpMethod: 'post',
    summary: 'Revoke a Telegram link',
    description:
      'Disables the link. Future inbound messages from this Telegram account get the welcome reply. The existing chat history is NOT wiped — start a fresh chat from the UI if you suspect compromise.',
    stainlessPath: '(resource) agents.telegram.bots > (method) revoke_link',
    qualified: 'client.agents.telegram.bots.revokeLink',
    params: ['id: string;'],
    response: '{ revoked: true; }',
    markdown:
      "## revoke_link\n\n`client.agents.telegram.bots.revokeLink(id: string): { revoked: true; }`\n\n**post** `/agents/telegram/bots/{id}/revoke`\n\nDisables the link. Future inbound messages from this Telegram account get the welcome reply. The existing chat history is NOT wiped — start a fresh chat from the UI if you suspect compromise.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ revoked: true; }`\n\n  - `revoked: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.agents.telegram.bots.revokeLink('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.agents.telegram.bots.revokeLink',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.agents.telegram.bots.revokeLink(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(response.revoked);",
      },
      python: {
        method: 'agents.telegram.bots.revoke_link',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.agents.telegram.bots.revoke_link(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.revoked)',
      },
      go: {
        method: 'client.Agents.Telegram.Bots.RevokeLink',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Agents.Telegram.Bots.RevokeLink(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Revoked)\n}\n',
      },
      cli: {
        method: 'bots revoke_link',
        example:
          "mobilerun-cloud agents:telegram:bots revoke-link \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/agents/telegram/bots/$ID/revoke \\\n    -X POST \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'confirm_upload',
    endpoint: '/apps/{id}/confirm-upload',
    httpMethod: 'post',
    summary: 'Confirm successful app upload',
    description: 'Verifies the APK file exists in R2 and sets the app status to available.',
    stainlessPath: '(resource) apps > (method) confirm_upload',
    qualified: 'client.apps.confirmUpload',
    params: ['id: string;'],
    response: '{ message: string; success: true; }',
    markdown:
      "## confirm_upload\n\n`client.apps.confirmUpload(id: string): { message: string; success: true; }`\n\n**post** `/apps/{id}/confirm-upload`\n\nVerifies the APK file exists in R2 and sets the app status to available.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ message: string; success: true; }`\n\n  - `message: string`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.apps.confirmUpload('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.apps.confirmUpload',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.apps.confirmUpload('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.message);",
      },
      python: {
        method: 'apps.confirm_upload',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.apps.confirm_upload(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.message)',
      },
      go: {
        method: 'client.Apps.ConfirmUpload',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Apps.ConfirmUpload(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Message)\n}\n',
      },
      cli: {
        method: 'apps confirm_upload',
        example:
          "mobilerun-cloud apps confirm-upload \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/apps/$ID/confirm-upload \\\n    -X POST \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'create_signed_upload_url',
    endpoint: '/apps/create-signed-upload-url',
    httpMethod: 'post',
    summary: 'Create a signed R2 upload URL for an app',
    description: 'Creates or updates an app and returns pre-signed Cloudflare R2 upload URLs for each file',
    stainlessPath: '(resource) apps > (method) create_signed_upload_url',
    qualified: 'client.apps.createSignedUploadURL',
    params: [
      'bundleId: string;',
      'displayName: string;',
      'files: { contentType: string; fileName: string; }[];',
      'sizeBytes: number;',
      'versionCode: number;',
      'versionName: string;',
      'country?: string;',
      'description?: string;',
      'developerName?: string;',
      'iconURL?: string;',
      "platform?: 'android' | 'ios';",
      'targetSdk?: number;',
    ],
    response:
      '{ appId: string; r2UploadUrls: { fileName: string; r2UploadUrl: string; }[]; versionId: string; }',
    markdown:
      "## create_signed_upload_url\n\n`client.apps.createSignedUploadURL(bundleId: string, displayName: string, files: { contentType: string; fileName: string; }[], sizeBytes: number, versionCode: number, versionName: string, country?: string, description?: string, developerName?: string, iconURL?: string, platform?: 'android' | 'ios', targetSdk?: number): { appId: string; r2UploadUrls: object[]; versionId: string; }`\n\n**post** `/apps/create-signed-upload-url`\n\nCreates or updates an app and returns pre-signed Cloudflare R2 upload URLs for each file\n\n### Parameters\n\n- `bundleId: string`\n\n- `displayName: string`\n\n- `files: { contentType: string; fileName: string; }[]`\n\n- `sizeBytes: number`\n\n- `versionCode: number`\n\n- `versionName: string`\n\n- `country?: string`\n  Country code for Search Results\n\n- `description?: string`\n\n- `developerName?: string`\n\n- `iconURL?: string`\n\n- `platform?: 'android' | 'ios'`\n\n- `targetSdk?: number`\n\n### Returns\n\n- `{ appId: string; r2UploadUrls: { fileName: string; r2UploadUrl: string; }[]; versionId: string; }`\n\n  - `appId: string`\n  - `r2UploadUrls: { fileName: string; r2UploadUrl: string; }[]`\n  - `versionId: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.apps.createSignedUploadURL({\n  bundleId: 'x',\n  displayName: 'x',\n  files: [{ contentType: 'x', fileName: 'x' }],\n  sizeBytes: 0,\n  versionCode: 0,\n  versionName: 'x',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.apps.createSignedUploadURL',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.apps.createSignedUploadURL({\n  bundleId: 'x',\n  displayName: 'x',\n  files: [{ contentType: 'x', fileName: 'x' }],\n  sizeBytes: 0,\n  versionCode: 0,\n  versionName: 'x',\n});\n\nconsole.log(response.appId);",
      },
      python: {
        method: 'apps.create_signed_upload_url',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.apps.create_signed_upload_url(\n    bundle_id="x",\n    display_name="x",\n    files=[{\n        "content_type": "x",\n        "file_name": "x",\n    }],\n    size_bytes=0,\n    version_code=0,\n    version_name="x",\n)\nprint(response.app_id)',
      },
      go: {
        method: 'client.Apps.NewSignedUploadURL',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Apps.NewSignedUploadURL(context.TODO(), mobileruncloud.AppNewSignedUploadURLParams{\n\t\tBundleID:    "x",\n\t\tDisplayName: "x",\n\t\tFiles: []mobileruncloud.AppNewSignedUploadURLParamsFile{{\n\t\t\tContentType: "x",\n\t\t\tFileName:    "x",\n\t\t}},\n\t\tSizeBytes:   0,\n\t\tVersionCode: 0,\n\t\tVersionName: "x",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.AppID)\n}\n',
      },
      cli: {
        method: 'apps create_signed_upload_url',
        example:
          "mobilerun-cloud apps create-signed-upload-url \\\n  --api-key 'My API Key' \\\n  --bundle-id x \\\n  --display-name x \\\n  --file '{contentType: x, fileName: x}' \\\n  --size-bytes 0 \\\n  --version-code 0 \\\n  --version-name x",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/apps/create-signed-upload-url \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "bundleId": "x",\n          "displayName": "x",\n          "files": [\n            {\n              "contentType": "x",\n              "fileName": "x"\n            }\n          ],\n          "sizeBytes": 0,\n          "versionCode": 0,\n          "versionName": "x",\n          "country": "US"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/apps/{id}',
    httpMethod: 'delete',
    summary: 'Delete uploaded app',
    description: 'Deletes an uploaded app by ID. Removes files from R2 storage and the database entry.',
    stainlessPath: '(resource) apps > (method) delete',
    qualified: 'client.apps.delete',
    params: ['id: string;'],
    response: '{ message: string; success: true; }',
    markdown:
      "## delete\n\n`client.apps.delete(id: string): { message: string; success: true; }`\n\n**delete** `/apps/{id}`\n\nDeletes an uploaded app by ID. Removes files from R2 storage and the database entry.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ message: string; success: true; }`\n\n  - `message: string`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst app = await client.apps.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(app);\n```",
    perLanguage: {
      typescript: {
        method: 'client.apps.delete',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst app = await client.apps.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(app.message);",
      },
      python: {
        method: 'apps.delete',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\napp = client.apps.delete(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(app.message)',
      },
      go: {
        method: 'client.Apps.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tapp, err := client.Apps.Delete(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", app.Message)\n}\n',
      },
      cli: {
        method: 'apps delete',
        example:
          "mobilerun-cloud apps delete \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/apps/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/apps',
    httpMethod: 'get',
    summary: 'List apps',
    description: 'Retrieves a paginated list of apps with filtering and search capabilities',
    stainlessPath: '(resource) apps > (method) list',
    qualified: 'client.apps.list',
    params: [
      "order?: 'asc' | 'desc';",
      'page?: number;',
      'pageSize?: number;',
      "platform?: 'all' | 'android' | 'ios';",
      'query?: string;',
      "sortBy?: 'createdAt' | 'name';",
      "status?: 'all' | 'queued' | 'available' | 'failed';",
    ],
    response:
      "{ count: { availableCount: number; failedCount: number; queuedCount: number; totalCount: number; }; items: { id: string; bundleId: string; createdAt: string; description: string; developerName: string; displayName: string; iconURL: string; platform: 'android' | 'ios'; updatedAt: string; version: { id: string; appId: string; country: string; createdAt: string; queuedAt: string; sizeBytes: number; source: 'user' | 'system' | 'portal'; status: 'queued' | 'available' | 'failed'; targetSdk: number; updatedAt: string; userId: string; versionCode: number; versionName: string; }; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }",
    markdown:
      "## list\n\n`client.apps.list(order?: 'asc' | 'desc', page?: number, pageSize?: number, platform?: 'all' | 'android' | 'ios', query?: string, sortBy?: 'createdAt' | 'name', status?: 'all' | 'queued' | 'available' | 'failed'): { count: object; items: object[]; pagination: pagination; }`\n\n**get** `/apps`\n\nRetrieves a paginated list of apps with filtering and search capabilities\n\n### Parameters\n\n- `order?: 'asc' | 'desc'`\n\n- `page?: number`\n\n- `pageSize?: number`\n\n- `platform?: 'all' | 'android' | 'ios'`\n\n- `query?: string`\n\n- `sortBy?: 'createdAt' | 'name'`\n\n- `status?: 'all' | 'queued' | 'available' | 'failed'`\n\n### Returns\n\n- `{ count: { availableCount: number; failedCount: number; queuedCount: number; totalCount: number; }; items: { id: string; bundleId: string; createdAt: string; description: string; developerName: string; displayName: string; iconURL: string; platform: 'android' | 'ios'; updatedAt: string; version: { id: string; appId: string; country: string; createdAt: string; queuedAt: string; sizeBytes: number; source: 'user' | 'system' | 'portal'; status: 'queued' | 'available' | 'failed'; targetSdk: number; updatedAt: string; userId: string; versionCode: number; versionName: string; }; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }`\n\n  - `count: { availableCount: number; failedCount: number; queuedCount: number; totalCount: number; }`\n  - `items: { id: string; bundleId: string; createdAt: string; description: string; developerName: string; displayName: string; iconURL: string; platform: 'android' | 'ios'; updatedAt: string; version: { id: string; appId: string; country: string; createdAt: string; queuedAt: string; sizeBytes: number; source: 'user' | 'system' | 'portal'; status: 'queued' | 'available' | 'failed'; targetSdk: number; updatedAt: string; userId: string; versionCode: number; versionName: string; }; }[]`\n  - `pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst apps = await client.apps.list();\n\nconsole.log(apps);\n```",
    perLanguage: {
      typescript: {
        method: 'client.apps.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst apps = await client.apps.list();\n\nconsole.log(apps.count);",
      },
      python: {
        method: 'apps.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\napps = client.apps.list()\nprint(apps.count)',
      },
      go: {
        method: 'client.Apps.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tapps, err := client.Apps.List(context.TODO(), mobileruncloud.AppListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", apps.Count)\n}\n',
      },
      cli: {
        method: 'apps list',
        example: "mobilerun-cloud apps list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/apps \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'mark_failed',
    endpoint: '/apps/{id}/mark-failed',
    httpMethod: 'post',
    summary: 'Mark app upload as failed',
    description: 'Sets the app status to failed.',
    stainlessPath: '(resource) apps > (method) mark_failed',
    qualified: 'client.apps.markFailed',
    params: ['id: string;'],
    response: '{ message: string; success: true; }',
    markdown:
      "## mark_failed\n\n`client.apps.markFailed(id: string): { message: string; success: true; }`\n\n**post** `/apps/{id}/mark-failed`\n\nSets the app status to failed.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ message: string; success: true; }`\n\n  - `message: string`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.apps.markFailed('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.apps.markFailed',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.apps.markFailed('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.message);",
      },
      python: {
        method: 'apps.mark_failed',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.apps.mark_failed(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.message)',
      },
      go: {
        method: 'client.Apps.MarkFailed',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Apps.MarkFailed(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Message)\n}\n',
      },
      cli: {
        method: 'apps mark_failed',
        example:
          "mobilerun-cloud apps mark-failed \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/apps/$ID/mark-failed \\\n    -X POST \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/apps/{id}',
    httpMethod: 'get',
    summary: 'Get app by ID',
    description: 'Retrieves an app by its ID',
    stainlessPath: '(resource) apps > (method) retrieve',
    qualified: 'client.apps.retrieve',
    params: ['id: string;'],
    response:
      "{ data: { id: string; bundleId: string; createdAt: string; description: string; developerName: string; displayName: string; iconURL: string; platform: 'android' | 'ios'; updatedAt: string; }; }",
    markdown:
      "## retrieve\n\n`client.apps.retrieve(id: string): { data: object; }`\n\n**get** `/apps/{id}`\n\nRetrieves an app by its ID\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; bundleId: string; createdAt: string; description: string; developerName: string; displayName: string; iconURL: string; platform: 'android' | 'ios'; updatedAt: string; }; }`\n\n  - `data: { id: string; bundleId: string; createdAt: string; description: string; developerName: string; displayName: string; iconURL: string; platform: 'android' | 'ios'; updatedAt: string; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst app = await client.apps.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(app);\n```",
    perLanguage: {
      typescript: {
        method: 'client.apps.retrieve',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst app = await client.apps.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(app.data);",
      },
      python: {
        method: 'apps.retrieve',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\napp = client.apps.retrieve(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(app.data)',
      },
      go: {
        method: 'client.Apps.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tapp, err := client.Apps.Get(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", app.Data)\n}\n',
      },
      cli: {
        method: 'apps retrieve',
        example:
          "mobilerun-cloud apps retrieve \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/apps/$ID \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'list_versions',
    endpoint: '/apps/{id}/versions',
    httpMethod: 'get',
    summary: 'List versions for an app',
    description: 'Retrieves all versions of an app visible to the user (own uploads + system versions)',
    stainlessPath: '(resource) apps > (method) list_versions',
    qualified: 'client.apps.listVersions',
    params: ['id: string;'],
    response:
      "{ data: { id: string; appId: string; country: string; createdAt: string; queuedAt: string; sizeBytes: number; source: 'user' | 'system' | 'portal'; status: 'queued' | 'available' | 'failed'; targetSdk: number; updatedAt: string; userId: string; versionCode: number; versionName: string; }[]; }",
    markdown:
      "## list_versions\n\n`client.apps.listVersions(id: string): { data: object[]; }`\n\n**get** `/apps/{id}/versions`\n\nRetrieves all versions of an app visible to the user (own uploads + system versions)\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { id: string; appId: string; country: string; createdAt: string; queuedAt: string; sizeBytes: number; source: 'user' | 'system' | 'portal'; status: 'queued' | 'available' | 'failed'; targetSdk: number; updatedAt: string; userId: string; versionCode: number; versionName: string; }[]; }`\n\n  - `data: { id: string; appId: string; country: string; createdAt: string; queuedAt: string; sizeBytes: number; source: 'user' | 'system' | 'portal'; status: 'queued' | 'available' | 'failed'; targetSdk: number; updatedAt: string; userId: string; versionCode: number; versionName: string; }[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.apps.listVersions('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.apps.listVersions',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.apps.listVersions('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'apps.list_versions',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.apps.list_versions(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      go: {
        method: 'client.Apps.ListVersions',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Apps.ListVersions(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      cli: {
        method: 'apps list_versions',
        example:
          "mobilerun-cloud apps list-versions \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/apps/$ID/versions \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/carriers',
    httpMethod: 'post',
    summary: 'Create a new carrier',
    description: 'Create a new carrier',
    stainlessPath: '(resource) carriers > (method) create',
    qualified: 'client.carriers.create',
    params: [
      'country: string;',
      'mcc: string;',
      'mnc: string;',
      'operator: string;',
      'company?: string;',
      'country_code?: string;',
      'country_iso?: string;',
      'detail_url?: string;',
      'gsm_bands?: string;',
      'lte_bands?: string;',
      'mobile_prefix?: string;',
      'nsn_size?: string;',
      'number_format?: string;',
      'protocols?: string;',
      'umts_bands?: string;',
      'website?: string;',
    ],
    response:
      '{ id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }',
    markdown:
      "## create\n\n`client.carriers.create(country: string, mcc: string, mnc: string, operator: string, company?: string, country_code?: string, country_iso?: string, detail_url?: string, gsm_bands?: string, lte_bands?: string, mobile_prefix?: string, nsn_size?: string, number_format?: string, protocols?: string, umts_bands?: string, website?: string): { id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }`\n\n**post** `/carriers`\n\nCreate a new carrier\n\n### Parameters\n\n- `country: string`\n  Country name\n\n- `mcc: string`\n  Mobile Country Code\n\n- `mnc: string`\n  Mobile Network Code\n\n- `operator: string`\n  Operator name\n\n- `company?: string`\n  Company name\n\n- `country_code?: string`\n  Country dialing code (e.g., +1)\n\n- `country_iso?: string`\n  ISO country code\n\n- `detail_url?: string`\n  URL to carrier details page\n\n- `gsm_bands?: string`\n  Supported GSM bands\n\n- `lte_bands?: string`\n  Supported LTE bands\n\n- `mobile_prefix?: string`\n  Mobile number prefix\n\n- `nsn_size?: string`\n  National Significant Number size\n\n- `number_format?: string`\n  Phone number format\n\n- `protocols?: string`\n  Supported protocols (comma-separated)\n\n- `umts_bands?: string`\n  Supported UMTS bands\n\n- `website?: string`\n  Company website\n\n### Returns\n\n- `{ id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }`\n\n  - `id: number`\n  - `company: string`\n  - `country: string`\n  - `country_code: string`\n  - `country_iso: string`\n  - `created_at: string`\n  - `detail_url: string`\n  - `gsm_bands: string`\n  - `lte_bands: string`\n  - `mcc: string`\n  - `mnc: string`\n  - `mobile_prefix: string`\n  - `nsn_size: string`\n  - `number_format: string`\n  - `operator: string`\n  - `protocols: string`\n  - `umts_bands: string`\n  - `website: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst carrier = await client.carriers.create({\n  country: 'x',\n  mcc: 'x',\n  mnc: 'x',\n  operator: 'x',\n});\n\nconsole.log(carrier);\n```",
    perLanguage: {
      typescript: {
        method: 'client.carriers.create',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst carrier = await client.carriers.create({\n  country: 'x',\n  mcc: 'x',\n  mnc: 'x',\n  operator: 'x',\n});\n\nconsole.log(carrier.id);",
      },
      python: {
        method: 'carriers.create',
        example:
          'from mobilerun_sdk import Mobilerun\n\nclient = Mobilerun()\ncarrier = client.carriers.create(\n    country="x",\n    mcc="x",\n    mnc="x",\n    operator="x",\n)\nprint(carrier.id)',
      },
      go: {
        method: 'client.Carriers.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient()\n\tcarrier, err := client.Carriers.New(context.TODO(), mobileruncloud.CarrierNewParams{\n\t\tCountry:  "x",\n\t\tMcc:      "x",\n\t\tMnc:      "x",\n\t\tOperator: "x",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", carrier.ID)\n}\n',
      },
      cli: {
        method: 'carriers create',
        example:
          'mobilerun-cloud carriers create \\\n  --country x \\\n  --mcc x \\\n  --mnc x \\\n  --operator x',
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/carriers \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n          "country": "x",\n          "mcc": "x",\n          "mnc": "x",\n          "operator": "x"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/carriers/{carrierId}',
    httpMethod: 'delete',
    summary: 'Delete a carrier',
    description: 'Delete a carrier',
    stainlessPath: '(resource) carriers > (method) delete',
    qualified: 'client.carriers.delete',
    params: ['carrierId: number;'],
    response: '{ message: string; $schema?: string; }',
    markdown:
      "## delete\n\n`client.carriers.delete(carrierId: number): { message: string; $schema?: string; }`\n\n**delete** `/carriers/{carrierId}`\n\nDelete a carrier\n\n### Parameters\n\n- `carrierId: number`\n  Carrier ID\n\n### Returns\n\n- `{ message: string; $schema?: string; }`\n\n  - `message: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst carrier = await client.carriers.delete(1);\n\nconsole.log(carrier);\n```",
    perLanguage: {
      typescript: {
        method: 'client.carriers.delete',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst carrier = await client.carriers.delete(1);\n\nconsole.log(carrier.message);",
      },
      python: {
        method: 'carriers.delete',
        example:
          'from mobilerun_sdk import Mobilerun\n\nclient = Mobilerun()\ncarrier = client.carriers.delete(\n    1,\n)\nprint(carrier.message)',
      },
      go: {
        method: 'client.Carriers.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient()\n\tcarrier, err := client.Carriers.Delete(context.TODO(), 1)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", carrier.Message)\n}\n',
      },
      cli: {
        method: 'carriers delete',
        example: 'mobilerun-cloud carriers delete \\\n  --carrier-id 1',
      },
      http: {
        example: 'curl https://api.mobilerun.ai/v1/carriers/$CARRIER_ID \\\n    -X DELETE',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/carriers',
    httpMethod: 'get',
    summary: 'List carriers with pagination',
    description: 'List carriers with pagination',
    stainlessPath: '(resource) carriers > (method) list',
    qualified: 'client.carriers.list',
    params: [
      'country?: string;',
      'countryISO?: string;',
      "orderBy?: 'id' | 'mcc' | 'mnc' | 'operator' | 'country' | 'country_iso';",
      "orderDir?: 'asc' | 'desc';",
      'page?: number;',
      'pageSize?: number;',
    ],
    response:
      '{ items: { id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; $schema?: string; }',
    markdown:
      "## list\n\n`client.carriers.list(country?: string, countryISO?: string, orderBy?: 'id' | 'mcc' | 'mnc' | 'operator' | 'country' | 'country_iso', orderDir?: 'asc' | 'desc', page?: number, pageSize?: number): { items: object[]; pagination: meta; $schema?: string; }`\n\n**get** `/carriers`\n\nList carriers with pagination\n\n### Parameters\n\n- `country?: string`\n  Filter by country name\n\n- `countryISO?: string`\n  Filter by country ISO code\n\n- `orderBy?: 'id' | 'mcc' | 'mnc' | 'operator' | 'country' | 'country_iso'`\n  Field to order by\n\n- `orderDir?: 'asc' | 'desc'`\n  Order direction\n\n- `page?: number`\n  Page number\n\n- `pageSize?: number`\n  Items per page\n\n### Returns\n\n- `{ items: { id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; $schema?: string; }`\n\n  - `items: { id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }[]`\n  - `pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst carriers = await client.carriers.list();\n\nconsole.log(carriers);\n```",
    perLanguage: {
      typescript: {
        method: 'client.carriers.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst carriers = await client.carriers.list();\n\nconsole.log(carriers.items);",
      },
      python: {
        method: 'carriers.list',
        example:
          'from mobilerun_sdk import Mobilerun\n\nclient = Mobilerun()\ncarriers = client.carriers.list()\nprint(carriers.items)',
      },
      go: {
        method: 'client.Carriers.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient()\n\tcarriers, err := client.Carriers.List(context.TODO(), mobileruncloud.CarrierListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", carriers.Items)\n}\n',
      },
      cli: {
        method: 'carriers list',
        example: 'mobilerun-cloud carriers list',
      },
      http: {
        example: 'curl https://api.mobilerun.ai/v1/carriers',
      },
    },
  },
  {
    name: 'lookup',
    endpoint: '/carriers/lookup',
    httpMethod: 'get',
    summary: 'Get carrier by MCC and MNC',
    description: 'Get carrier by MCC and MNC',
    stainlessPath: '(resource) carriers > (method) lookup',
    qualified: 'client.carriers.lookup',
    params: ['mcc: string;', 'mnc: string;'],
    response:
      '{ id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }',
    markdown:
      "## lookup\n\n`client.carriers.lookup(mcc: string, mnc: string): { id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }`\n\n**get** `/carriers/lookup`\n\nGet carrier by MCC and MNC\n\n### Parameters\n\n- `mcc: string`\n  Mobile Country Code\n\n- `mnc: string`\n  Mobile Network Code\n\n### Returns\n\n- `{ id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }`\n\n  - `id: number`\n  - `company: string`\n  - `country: string`\n  - `country_code: string`\n  - `country_iso: string`\n  - `created_at: string`\n  - `detail_url: string`\n  - `gsm_bands: string`\n  - `lte_bands: string`\n  - `mcc: string`\n  - `mnc: string`\n  - `mobile_prefix: string`\n  - `nsn_size: string`\n  - `number_format: string`\n  - `operator: string`\n  - `protocols: string`\n  - `umts_bands: string`\n  - `website: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.carriers.lookup({ mcc: 'x', mnc: 'x' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.carriers.lookup',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.carriers.lookup({ mcc: 'x', mnc: 'x' });\n\nconsole.log(response.id);",
      },
      python: {
        method: 'carriers.lookup',
        example:
          'from mobilerun_sdk import Mobilerun\n\nclient = Mobilerun()\nresponse = client.carriers.lookup(\n    mcc="x",\n    mnc="x",\n)\nprint(response.id)',
      },
      go: {
        method: 'client.Carriers.Lookup',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient()\n\tresponse, err := client.Carriers.Lookup(context.TODO(), mobileruncloud.CarrierLookupParams{\n\t\tMcc: "x",\n\t\tMnc: "x",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      cli: {
        method: 'carriers lookup',
        example: 'mobilerun-cloud carriers lookup \\\n  --mcc x \\\n  --mnc x',
      },
      http: {
        example: 'curl https://api.mobilerun.ai/v1/carriers/lookup',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/carriers/{carrierId}',
    httpMethod: 'get',
    summary: 'Get carrier by ID',
    description: 'Get carrier by ID',
    stainlessPath: '(resource) carriers > (method) retrieve',
    qualified: 'client.carriers.retrieve',
    params: ['carrierId: number;'],
    response:
      '{ id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }',
    markdown:
      "## retrieve\n\n`client.carriers.retrieve(carrierId: number): { id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }`\n\n**get** `/carriers/{carrierId}`\n\nGet carrier by ID\n\n### Parameters\n\n- `carrierId: number`\n  Carrier ID\n\n### Returns\n\n- `{ id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }`\n\n  - `id: number`\n  - `company: string`\n  - `country: string`\n  - `country_code: string`\n  - `country_iso: string`\n  - `created_at: string`\n  - `detail_url: string`\n  - `gsm_bands: string`\n  - `lte_bands: string`\n  - `mcc: string`\n  - `mnc: string`\n  - `mobile_prefix: string`\n  - `nsn_size: string`\n  - `number_format: string`\n  - `operator: string`\n  - `protocols: string`\n  - `umts_bands: string`\n  - `website: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst carrier = await client.carriers.retrieve(1);\n\nconsole.log(carrier);\n```",
    perLanguage: {
      typescript: {
        method: 'client.carriers.retrieve',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst carrier = await client.carriers.retrieve(1);\n\nconsole.log(carrier.id);",
      },
      python: {
        method: 'carriers.retrieve',
        example:
          'from mobilerun_sdk import Mobilerun\n\nclient = Mobilerun()\ncarrier = client.carriers.retrieve(\n    1,\n)\nprint(carrier.id)',
      },
      go: {
        method: 'client.Carriers.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient()\n\tcarrier, err := client.Carriers.Get(context.TODO(), 1)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", carrier.ID)\n}\n',
      },
      cli: {
        method: 'carriers retrieve',
        example: 'mobilerun-cloud carriers retrieve \\\n  --carrier-id 1',
      },
      http: {
        example: 'curl https://api.mobilerun.ai/v1/carriers/$CARRIER_ID',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/carriers/{carrierId}',
    httpMethod: 'patch',
    summary: 'Update a carrier',
    description: 'Update a carrier',
    stainlessPath: '(resource) carriers > (method) update',
    qualified: 'client.carriers.update',
    params: [
      'carrierId: number;',
      'company?: string;',
      'country?: string;',
      'country_code?: string;',
      'country_iso?: string;',
      'detail_url?: string;',
      'gsm_bands?: string;',
      'lte_bands?: string;',
      'mobile_prefix?: string;',
      'nsn_size?: string;',
      'number_format?: string;',
      'operator?: string;',
      'protocols?: string;',
      'umts_bands?: string;',
      'website?: string;',
    ],
    response:
      '{ id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }',
    markdown:
      "## update\n\n`client.carriers.update(carrierId: number, company?: string, country?: string, country_code?: string, country_iso?: string, detail_url?: string, gsm_bands?: string, lte_bands?: string, mobile_prefix?: string, nsn_size?: string, number_format?: string, operator?: string, protocols?: string, umts_bands?: string, website?: string): { id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }`\n\n**patch** `/carriers/{carrierId}`\n\nUpdate a carrier\n\n### Parameters\n\n- `carrierId: number`\n  Carrier ID\n\n- `company?: string`\n  Company name\n\n- `country?: string`\n  Country name\n\n- `country_code?: string`\n  Country dialing code\n\n- `country_iso?: string`\n  ISO country code\n\n- `detail_url?: string`\n  URL to carrier details\n\n- `gsm_bands?: string`\n  Supported GSM bands\n\n- `lte_bands?: string`\n  Supported LTE bands\n\n- `mobile_prefix?: string`\n  Mobile number prefix\n\n- `nsn_size?: string`\n  NSN size\n\n- `number_format?: string`\n  Phone number format\n\n- `operator?: string`\n  Operator name\n\n- `protocols?: string`\n  Supported protocols\n\n- `umts_bands?: string`\n  Supported UMTS bands\n\n- `website?: string`\n  Company website\n\n### Returns\n\n- `{ id: number; company: string; country: string; country_code: string; country_iso: string; created_at: string; detail_url: string; gsm_bands: string; lte_bands: string; mcc: string; mnc: string; mobile_prefix: string; nsn_size: string; number_format: string; operator: string; protocols: string; umts_bands: string; website: string; $schema?: string; }`\n\n  - `id: number`\n  - `company: string`\n  - `country: string`\n  - `country_code: string`\n  - `country_iso: string`\n  - `created_at: string`\n  - `detail_url: string`\n  - `gsm_bands: string`\n  - `lte_bands: string`\n  - `mcc: string`\n  - `mnc: string`\n  - `mobile_prefix: string`\n  - `nsn_size: string`\n  - `number_format: string`\n  - `operator: string`\n  - `protocols: string`\n  - `umts_bands: string`\n  - `website: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst carrier = await client.carriers.update(1);\n\nconsole.log(carrier);\n```",
    perLanguage: {
      typescript: {
        method: 'client.carriers.update',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst carrier = await client.carriers.update(1);\n\nconsole.log(carrier.id);",
      },
      python: {
        method: 'carriers.update',
        example:
          'from mobilerun_sdk import Mobilerun\n\nclient = Mobilerun()\ncarrier = client.carriers.update(\n    carrier_id=1,\n)\nprint(carrier.id)',
      },
      go: {
        method: 'client.Carriers.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient()\n\tcarrier, err := client.Carriers.Update(\n\t\tcontext.TODO(),\n\t\t1,\n\t\tmobileruncloud.CarrierUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", carrier.ID)\n}\n',
      },
      cli: {
        method: 'carriers update',
        example: 'mobilerun-cloud carriers update \\\n  --carrier-id 1',
      },
      http: {
        example:
          "curl https://api.mobilerun.ai/v1/carriers/$CARRIER_ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/credentials',
    httpMethod: 'get',
    summary: 'List all credentials for the authenticated user',
    description: 'List all credentials for the authenticated user',
    stainlessPath: '(resource) credentials > (method) list',
    qualified: 'client.credentials.list',
    params: ['page?: number;', 'pageSize?: number;'],
    response:
      '{ items: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }',
    markdown:
      "## list\n\n`client.credentials.list(page?: number, pageSize?: number): { items: credential[]; pagination: pagination; }`\n\n**get** `/credentials`\n\nList all credentials for the authenticated user\n\n### Parameters\n\n- `page?: number`\n\n- `pageSize?: number`\n\n### Returns\n\n- `{ items: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }`\n\n  - `items: { credentialName: string; fields: { fieldType: string; value: string; }[]; packageName: string; secretPath: string; userId: string; }[]`\n  - `pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst credentials = await client.credentials.list();\n\nconsole.log(credentials);\n```",
    perLanguage: {
      typescript: {
        method: 'client.credentials.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst credentials = await client.credentials.list();\n\nconsole.log(credentials.items);",
      },
      python: {
        method: 'credentials.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\ncredentials = client.credentials.list()\nprint(credentials.items)',
      },
      go: {
        method: 'client.Credentials.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcredentials, err := client.Credentials.List(context.TODO(), mobileruncloud.CredentialListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", credentials.Items)\n}\n',
      },
      cli: {
        method: 'credentials list',
        example: "mobilerun-cloud credentials list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/credentials \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/credentials/packages',
    httpMethod: 'post',
    summary: 'Initialize a new package/app',
    description: 'Initialize a new package/app',
    stainlessPath: '(resource) credentials.packages > (method) create',
    qualified: 'client.credentials.packages.create',
    params: ['packageName: string;'],
    response: '{ data: { packageName: string; }; message: string; success: true; }',
    markdown:
      "## create\n\n`client.credentials.packages.create(packageName: string): { data: object; message: string; success: true; }`\n\n**post** `/credentials/packages`\n\nInitialize a new package/app\n\n### Parameters\n\n- `packageName: string`\n\n### Returns\n\n- `{ data: { packageName: string; }; message: string; success: true; }`\n\n  - `data: { packageName: string; }`\n  - `message: string`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst _package = await client.credentials.packages.create({ packageName: 'packageName' });\n\nconsole.log(_package);\n```",
    perLanguage: {
      typescript: {
        method: 'client.credentials.packages.create',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst _package = await client.credentials.packages.create({ packageName: 'packageName' });\n\nconsole.log(_package.data);",
      },
      python: {
        method: 'credentials.packages.create',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\npackage = client.credentials.packages.create(\n    package_name="packageName",\n)\nprint(package.data)',
      },
      go: {
        method: 'client.Credentials.Packages.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpackage_, err := client.Credentials.Packages.New(context.TODO(), mobileruncloud.CredentialPackageNewParams{\n\t\tPackageName: "packageName",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", package_.Data)\n}\n',
      },
      cli: {
        method: 'packages create',
        example:
          "mobilerun-cloud credentials:packages create \\\n  --api-key 'My API Key' \\\n  --package-name packageName",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/credentials/packages \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "packageName": "packageName"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/credentials/packages/{packageName}',
    httpMethod: 'get',
    summary: 'List credentials for a specific package',
    description: 'List credentials for a specific package',
    stainlessPath: '(resource) credentials.packages > (method) list',
    qualified: 'client.credentials.packages.list',
    params: ['packageName: string;'],
    response:
      '{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }[]; }',
    markdown:
      "## list\n\n`client.credentials.packages.list(packageName: string): { data: credential[]; }`\n\n**get** `/credentials/packages/{packageName}`\n\nList credentials for a specific package\n\n### Parameters\n\n- `packageName: string`\n\n### Returns\n\n- `{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }[]; }`\n\n  - `data: { credentialName: string; fields: { fieldType: string; value: string; }[]; packageName: string; secretPath: string; userId: string; }[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst packages = await client.credentials.packages.list('packageName');\n\nconsole.log(packages);\n```",
    perLanguage: {
      typescript: {
        method: 'client.credentials.packages.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst packages = await client.credentials.packages.list('packageName');\n\nconsole.log(packages.data);",
      },
      python: {
        method: 'credentials.packages.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\npackages = client.credentials.packages.list(\n    "packageName",\n)\nprint(packages.data)',
      },
      go: {
        method: 'client.Credentials.Packages.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpackages, err := client.Credentials.Packages.List(context.TODO(), "packageName")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", packages.Data)\n}\n',
      },
      cli: {
        method: 'packages list',
        example:
          "mobilerun-cloud credentials:packages list \\\n  --api-key 'My API Key' \\\n  --package-name packageName",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/credentials/packages/$PACKAGE_NAME \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/credentials/packages/{packageName}',
    httpMethod: 'post',
    summary: 'Create a credential with fields for a package',
    description: 'Create a credential with fields for a package',
    stainlessPath: '(resource) credentials.packages.credentials > (method) create',
    qualified: 'client.credentials.packages.credentials.create',
    params: [
      'packageName: string;',
      'credentialName: string;',
      'fields: { fieldType: string; value: string; }[];',
    ],
    response:
      '{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; message: string; success: true; }',
    markdown:
      "## create\n\n`client.credentials.packages.credentials.create(packageName: string, credentialName: string, fields: { fieldType: string; value: string; }[]): { data: credential; message: string; success: true; }`\n\n**post** `/credentials/packages/{packageName}`\n\nCreate a credential with fields for a package\n\n### Parameters\n\n- `packageName: string`\n\n- `credentialName: string`\n\n- `fields: { fieldType: string; value: string; }[]`\n\n### Returns\n\n- `{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; message: string; success: true; }`\n\n  - `data: { credentialName: string; fields: { fieldType: string; value: string; }[]; packageName: string; secretPath: string; userId: string; }`\n  - `message: string`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst credential = await client.credentials.packages.credentials.create('packageName', { credentialName: '26f1kl_-n-71', fields: [{ fieldType: 'email', value: 'x' }] });\n\nconsole.log(credential);\n```",
    perLanguage: {
      typescript: {
        method: 'client.credentials.packages.credentials.create',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst credential = await client.credentials.packages.credentials.create('packageName', {\n  credentialName: '26f1kl_-n-71',\n  fields: [{ fieldType: 'email', value: 'x' }],\n});\n\nconsole.log(credential.data);",
      },
      python: {
        method: 'credentials.packages.credentials.create',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\ncredential = client.credentials.packages.credentials.create(\n    package_name="packageName",\n    credential_name="26f1kl_-n-71",\n    fields=[{\n        "field_type": "email",\n        "value": "x",\n    }],\n)\nprint(credential.data)',
      },
      go: {
        method: 'client.Credentials.Packages.Credentials.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcredential, err := client.Credentials.Packages.Credentials.New(\n\t\tcontext.TODO(),\n\t\t"packageName",\n\t\tmobileruncloud.CredentialPackageCredentialNewParams{\n\t\t\tCredentialName: "26f1kl_-n-71",\n\t\t\tFields: []mobileruncloud.CredentialPackageCredentialNewParamsField{{\n\t\t\t\tFieldType: "email",\n\t\t\t\tValue:     "x",\n\t\t\t}},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", credential.Data)\n}\n',
      },
      cli: {
        method: 'credentials create',
        example:
          "mobilerun-cloud credentials:packages:credentials create \\\n  --api-key 'My API Key' \\\n  --package-name packageName \\\n  --credential-name 26f1kl_-n-71 \\\n  --field '{fieldType: email, value: x}'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/credentials/packages/$PACKAGE_NAME \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "credentialName": "26f1kl_-n-71",\n          "fields": [\n            {\n              "fieldType": "email",\n              "value": "x"\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/credentials/packages/{packageName}/credentials/{credentialName}',
    httpMethod: 'delete',
    summary: 'Delete a credential and all its fields',
    description: 'Delete a credential and all its fields',
    stainlessPath: '(resource) credentials.packages.credentials > (method) delete',
    qualified: 'client.credentials.packages.credentials.delete',
    params: ['packageName: string;', 'credentialName: string;'],
    response:
      '{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; message: string; success: true; }',
    markdown:
      "## delete\n\n`client.credentials.packages.credentials.delete(packageName: string, credentialName: string): { data: credential; message: string; success: true; }`\n\n**delete** `/credentials/packages/{packageName}/credentials/{credentialName}`\n\nDelete a credential and all its fields\n\n### Parameters\n\n- `packageName: string`\n\n- `credentialName: string`\n\n### Returns\n\n- `{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; message: string; success: true; }`\n\n  - `data: { credentialName: string; fields: { fieldType: string; value: string; }[]; packageName: string; secretPath: string; userId: string; }`\n  - `message: string`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst credential = await client.credentials.packages.credentials.delete('credentialName', { packageName: 'packageName' });\n\nconsole.log(credential);\n```",
    perLanguage: {
      typescript: {
        method: 'client.credentials.packages.credentials.delete',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst credential = await client.credentials.packages.credentials.delete('credentialName', {\n  packageName: 'packageName',\n});\n\nconsole.log(credential.data);",
      },
      python: {
        method: 'credentials.packages.credentials.delete',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\ncredential = client.credentials.packages.credentials.delete(\n    credential_name="credentialName",\n    package_name="packageName",\n)\nprint(credential.data)',
      },
      go: {
        method: 'client.Credentials.Packages.Credentials.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcredential, err := client.Credentials.Packages.Credentials.Delete(\n\t\tcontext.TODO(),\n\t\t"credentialName",\n\t\tmobileruncloud.CredentialPackageCredentialDeleteParams{\n\t\t\tPackageName: "packageName",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", credential.Data)\n}\n',
      },
      cli: {
        method: 'credentials delete',
        example:
          "mobilerun-cloud credentials:packages:credentials delete \\\n  --api-key 'My API Key' \\\n  --package-name packageName \\\n  --credential-name credentialName",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/credentials/packages/$PACKAGE_NAME/credentials/$CREDENTIAL_NAME \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/credentials/packages/{packageName}/credentials/{credentialName}',
    httpMethod: 'get',
    summary: 'Get a specific credential with its fields',
    description: 'Get a specific credential with its fields',
    stainlessPath: '(resource) credentials.packages.credentials > (method) retrieve',
    qualified: 'client.credentials.packages.credentials.retrieve',
    params: ['packageName: string;', 'credentialName: string;'],
    response:
      '{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; }',
    markdown:
      "## retrieve\n\n`client.credentials.packages.credentials.retrieve(packageName: string, credentialName: string): { data: credential; }`\n\n**get** `/credentials/packages/{packageName}/credentials/{credentialName}`\n\nGet a specific credential with its fields\n\n### Parameters\n\n- `packageName: string`\n\n- `credentialName: string`\n\n### Returns\n\n- `{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; }`\n\n  - `data: { credentialName: string; fields: { fieldType: string; value: string; }[]; packageName: string; secretPath: string; userId: string; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst credential = await client.credentials.packages.credentials.retrieve('credentialName', { packageName: 'packageName' });\n\nconsole.log(credential);\n```",
    perLanguage: {
      typescript: {
        method: 'client.credentials.packages.credentials.retrieve',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst credential = await client.credentials.packages.credentials.retrieve('credentialName', {\n  packageName: 'packageName',\n});\n\nconsole.log(credential.data);",
      },
      python: {
        method: 'credentials.packages.credentials.retrieve',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\ncredential = client.credentials.packages.credentials.retrieve(\n    credential_name="credentialName",\n    package_name="packageName",\n)\nprint(credential.data)',
      },
      go: {
        method: 'client.Credentials.Packages.Credentials.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcredential, err := client.Credentials.Packages.Credentials.Get(\n\t\tcontext.TODO(),\n\t\t"credentialName",\n\t\tmobileruncloud.CredentialPackageCredentialGetParams{\n\t\t\tPackageName: "packageName",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", credential.Data)\n}\n',
      },
      cli: {
        method: 'credentials retrieve',
        example:
          "mobilerun-cloud credentials:packages:credentials retrieve \\\n  --api-key 'My API Key' \\\n  --package-name packageName \\\n  --credential-name credentialName",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/credentials/packages/$PACKAGE_NAME/credentials/$CREDENTIAL_NAME \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/credentials/packages/{packageName}/credentials/{credentialName}/fields',
    httpMethod: 'post',
    summary: 'Add a new field to an existing credential',
    description: 'Add a new field to an existing credential',
    stainlessPath: '(resource) credentials.packages.credentials.fields > (method) create',
    qualified: 'client.credentials.packages.credentials.fields.create',
    params: ['packageName: string;', 'credentialName: string;', 'fieldType: string;', 'value: string;'],
    response:
      '{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; message: string; success: true; }',
    markdown:
      "## create\n\n`client.credentials.packages.credentials.fields.create(packageName: string, credentialName: string, fieldType: string, value: string): { data: credential; message: string; success: true; }`\n\n**post** `/credentials/packages/{packageName}/credentials/{credentialName}/fields`\n\nAdd a new field to an existing credential\n\n### Parameters\n\n- `packageName: string`\n\n- `credentialName: string`\n\n- `fieldType: string`\n\n- `value: string`\n\n### Returns\n\n- `{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; message: string; success: true; }`\n\n  - `data: { credentialName: string; fields: { fieldType: string; value: string; }[]; packageName: string; secretPath: string; userId: string; }`\n  - `message: string`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst field = await client.credentials.packages.credentials.fields.create('credentialName', {\n  packageName: 'packageName',\n  fieldType: 'email',\n  value: 'x',\n});\n\nconsole.log(field);\n```",
    perLanguage: {
      typescript: {
        method: 'client.credentials.packages.credentials.fields.create',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst field = await client.credentials.packages.credentials.fields.create('credentialName', {\n  packageName: 'packageName',\n  fieldType: 'email',\n  value: 'x',\n});\n\nconsole.log(field.data);",
      },
      python: {
        method: 'credentials.packages.credentials.fields.create',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nfield = client.credentials.packages.credentials.fields.create(\n    credential_name="credentialName",\n    package_name="packageName",\n    field_type="email",\n    value="x",\n)\nprint(field.data)',
      },
      go: {
        method: 'client.Credentials.Packages.Credentials.Fields.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfield, err := client.Credentials.Packages.Credentials.Fields.New(\n\t\tcontext.TODO(),\n\t\t"credentialName",\n\t\tmobileruncloud.CredentialPackageCredentialFieldNewParams{\n\t\t\tPackageName: "packageName",\n\t\t\tFieldType:   mobileruncloud.CredentialPackageCredentialFieldNewParamsFieldTypeEmail,\n\t\t\tValue:       "x",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", field.Data)\n}\n',
      },
      cli: {
        method: 'fields create',
        example:
          "mobilerun-cloud credentials:packages:credentials:fields create \\\n  --api-key 'My API Key' \\\n  --package-name packageName \\\n  --credential-name credentialName \\\n  --field-type email \\\n  --value x",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/credentials/packages/$PACKAGE_NAME/credentials/$CREDENTIAL_NAME/fields \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "fieldType": "email",\n          "value": "x"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/credentials/packages/{packageName}/credentials/{credentialName}/fields/{fieldType}',
    httpMethod: 'delete',
    summary: 'Delete a field from a credential',
    description: 'Delete a field from a credential',
    stainlessPath: '(resource) credentials.packages.credentials.fields > (method) delete',
    qualified: 'client.credentials.packages.credentials.fields.delete',
    params: ['packageName: string;', 'credentialName: string;', 'fieldType: string;'],
    response:
      '{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; message: string; success: true; }',
    markdown:
      "## delete\n\n`client.credentials.packages.credentials.fields.delete(packageName: string, credentialName: string, fieldType: string): { data: credential; message: string; success: true; }`\n\n**delete** `/credentials/packages/{packageName}/credentials/{credentialName}/fields/{fieldType}`\n\nDelete a field from a credential\n\n### Parameters\n\n- `packageName: string`\n\n- `credentialName: string`\n\n- `fieldType: string`\n\n### Returns\n\n- `{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; message: string; success: true; }`\n\n  - `data: { credentialName: string; fields: { fieldType: string; value: string; }[]; packageName: string; secretPath: string; userId: string; }`\n  - `message: string`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst field = await client.credentials.packages.credentials.fields.delete('email', { packageName: 'packageName', credentialName: 'credentialName' });\n\nconsole.log(field);\n```",
    perLanguage: {
      typescript: {
        method: 'client.credentials.packages.credentials.fields.delete',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst field = await client.credentials.packages.credentials.fields.delete('email', {\n  packageName: 'packageName',\n  credentialName: 'credentialName',\n});\n\nconsole.log(field.data);",
      },
      python: {
        method: 'credentials.packages.credentials.fields.delete',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nfield = client.credentials.packages.credentials.fields.delete(\n    field_type="email",\n    package_name="packageName",\n    credential_name="credentialName",\n)\nprint(field.data)',
      },
      go: {
        method: 'client.Credentials.Packages.Credentials.Fields.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfield, err := client.Credentials.Packages.Credentials.Fields.Delete(\n\t\tcontext.TODO(),\n\t\tmobileruncloud.CredentialPackageCredentialFieldDeleteParamsFieldTypeEmail,\n\t\tmobileruncloud.CredentialPackageCredentialFieldDeleteParams{\n\t\t\tPackageName:    "packageName",\n\t\t\tCredentialName: "credentialName",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", field.Data)\n}\n',
      },
      cli: {
        method: 'fields delete',
        example:
          "mobilerun-cloud credentials:packages:credentials:fields delete \\\n  --api-key 'My API Key' \\\n  --package-name packageName \\\n  --credential-name credentialName \\\n  --field-type email",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/credentials/packages/$PACKAGE_NAME/credentials/$CREDENTIAL_NAME/fields/$FIELD_TYPE \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/credentials/packages/{packageName}/credentials/{credentialName}/fields/{fieldType}',
    httpMethod: 'patch',
    summary: 'Update the value of a credential field',
    description: 'Update the value of a credential field',
    stainlessPath: '(resource) credentials.packages.credentials.fields > (method) update',
    qualified: 'client.credentials.packages.credentials.fields.update',
    params: ['packageName: string;', 'credentialName: string;', 'fieldType: string;', 'value: string;'],
    response:
      '{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; message: string; success: true; }',
    markdown:
      "## update\n\n`client.credentials.packages.credentials.fields.update(packageName: string, credentialName: string, fieldType: string, value: string): { data: credential; message: string; success: true; }`\n\n**patch** `/credentials/packages/{packageName}/credentials/{credentialName}/fields/{fieldType}`\n\nUpdate the value of a credential field\n\n### Parameters\n\n- `packageName: string`\n\n- `credentialName: string`\n\n- `fieldType: string`\n\n- `value: string`\n\n### Returns\n\n- `{ data: { credentialName: string; fields: object[]; packageName: string; secretPath: string; userId: string; }; message: string; success: true; }`\n\n  - `data: { credentialName: string; fields: { fieldType: string; value: string; }[]; packageName: string; secretPath: string; userId: string; }`\n  - `message: string`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst field = await client.credentials.packages.credentials.fields.update('email', {\n  packageName: 'packageName',\n  credentialName: 'credentialName',\n  value: 'x',\n});\n\nconsole.log(field);\n```",
    perLanguage: {
      typescript: {
        method: 'client.credentials.packages.credentials.fields.update',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst field = await client.credentials.packages.credentials.fields.update('email', {\n  packageName: 'packageName',\n  credentialName: 'credentialName',\n  value: 'x',\n});\n\nconsole.log(field.data);",
      },
      python: {
        method: 'credentials.packages.credentials.fields.update',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nfield = client.credentials.packages.credentials.fields.update(\n    field_type="email",\n    package_name="packageName",\n    credential_name="credentialName",\n    value="x",\n)\nprint(field.data)',
      },
      go: {
        method: 'client.Credentials.Packages.Credentials.Fields.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfield, err := client.Credentials.Packages.Credentials.Fields.Update(\n\t\tcontext.TODO(),\n\t\tmobileruncloud.CredentialPackageCredentialFieldUpdateParamsFieldTypeEmail,\n\t\tmobileruncloud.CredentialPackageCredentialFieldUpdateParams{\n\t\t\tPackageName:    "packageName",\n\t\t\tCredentialName: "credentialName",\n\t\t\tValue:          "x",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", field.Data)\n}\n',
      },
      cli: {
        method: 'fields update',
        example:
          "mobilerun-cloud credentials:packages:credentials:fields update \\\n  --api-key 'My API Key' \\\n  --package-name packageName \\\n  --credential-name credentialName \\\n  --field-type email \\\n  --value x",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/credentials/packages/$PACKAGE_NAME/credentials/$CREDENTIAL_NAME/fields/$FIELD_TYPE \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "value": "x"\n        }\'',
      },
    },
  },
  {
    name: 'count',
    endpoint: '/devices/count',
    httpMethod: 'get',
    summary: 'Count claimed devices',
    description: 'Count claimed devices',
    stainlessPath: '(resource) devices > (method) count',
    qualified: 'client.devices.count',
    response: 'object',
    markdown:
      "## count\n\n`client.devices.count(): object`\n\n**get** `/devices/count`\n\nCount claimed devices\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.devices.count();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.count',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.devices.count();\n\nconsole.log(response);",
      },
      python: {
        method: 'devices.count',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.devices.count()\nprint(response)',
      },
      go: {
        method: 'client.Devices.Count',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Devices.Count(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      cli: {
        method: 'devices count',
        example: "mobilerun-cloud devices count \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/count \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/devices',
    httpMethod: 'post',
    summary: 'Provision a new device',
    description: 'Provision a new device',
    stainlessPath: '(resource) devices > (method) create',
    qualified: 'client.devices.create',
    params: [
      'country?: string;',
      "deviceType?: 'dedicated_physical_device' | 'dedicated_premium_device' | 'dedicated_ios_device';",
      'profileId?: string;',
      'androidVersion?: number;',
      'apps?: string[];',
      'carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; };',
      'country?: string;',
      'files?: string[];',
      'identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; };',
      'locale?: string;',
      'location?: { latitude: number; longitude: number; $schema?: string; };',
      'name?: string;',
      'proxy?: { name?: string; smartIp?: boolean; socks5?: { host: string; password: string; port: number; user: string; }; };',
      'timezone?: string;',
    ],
    response:
      '{ id: string; activeTaskId: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; providerId?: string; streamToken?: string; userId?: string; }',
    markdown:
      "## create\n\n`client.devices.create(country?: string, deviceType?: 'dedicated_physical_device' | 'dedicated_premium_device' | 'dedicated_ios_device', profileId?: string, androidVersion?: number, apps?: string[], carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }, country?: string, files?: string[], identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }, locale?: string, location?: { latitude: number; longitude: number; $schema?: string; }, name?: string, proxy?: { name?: string; smartIp?: boolean; socks5?: object; }, timezone?: string): { id: string; activeTaskId: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; providerId?: string; streamToken?: string; userId?: string; }`\n\n**post** `/devices`\n\nProvision a new device\n\n### Parameters\n\n- `country?: string`\n  ISO 3166-1 alpha-2 country code. If omitted the system picks the country with the most availability.\n\n- `deviceType?: 'dedicated_physical_device' | 'dedicated_premium_device' | 'dedicated_ios_device'`\n\n- `profileId?: string`\n  Profile ID to use as device spec\n\n- `androidVersion?: number`\n\n- `apps?: string[]`\n\n- `carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }`\n  - `GsmOperatorAlpha: string`\n  - `GsmOperatorNumeric: number`\n  - `GsmSimOperatorAlpha: string`\n  - `GsmSimOperatorIsoCountry: string`\n  - `GsmSimOperatorNumeric: number`\n  - `PersistSysTimezone: string`\n\n- `country?: string`\n\n- `files?: string[]`\n\n- `identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }`\n  - `BootloaderSerialNumber: string`\n  - `IdentifierAndroidID: string`\n  - `IdentifierAppSetID: string`\n  - `IdentifierBluetoothMAC: string`\n  - `IdentifierGAID: string`\n  - `IdentifierGSFID: string`\n  - `IdentifierICCID: string`\n  - `IdentifierIMEI: string`\n  - `IdentifierIMSI: string`\n  - `IdentifierMediaDRMID: string`\n  - `IdentifierMEID: string`\n  - `IdentifierPhoneNumber: string`\n  - `IdentifierSerial: string`\n  - `IdentifierWifiMAC: string`\n  - `SerialNumber: string`\n\n- `locale?: string`\n\n- `location?: { latitude: number; longitude: number; $schema?: string; }`\n  - `latitude: number`\n  - `longitude: number`\n  - `$schema?: string`\n    A URL to the JSON Schema for this object.\n\n- `name?: string`\n\n- `proxy?: { name?: string; smartIp?: boolean; socks5?: { host: string; password: string; port: number; user: string; }; }`\n  - `name?: string`\n  - `smartIp?: boolean`\n  - `socks5?: { host: string; password: string; port: number; user: string; }`\n\n- `timezone?: string`\n\n### Returns\n\n- `{ id: string; activeTaskId: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; providerId?: string; streamToken?: string; userId?: string; }`\n\n  - `id: string`\n  - `activeTaskId: string`\n  - `assignedAt: string`\n  - `createdAt: string`\n  - `name: string`\n  - `state: string`\n  - `stateMessage: string`\n  - `streamUrl: string`\n  - `taskCount: number`\n  - `terminatesAt: string`\n  - `type: string`\n  - `updatedAt: string`\n  - `$schema?: string`\n  - `providerId?: string`\n  - `streamToken?: string`\n  - `userId?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst device = await client.devices.create();\n\nconsole.log(device);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.create',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst device = await client.devices.create();\n\nconsole.log(device.id);",
      },
      python: {
        method: 'devices.create',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\ndevice = client.devices.create()\nprint(device.id)',
      },
      go: {
        method: 'client.Devices.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n\t"github.com/stainless-sdks/droidrun-cloud-go/shared"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tdevice, err := client.Devices.New(context.TODO(), mobileruncloud.DeviceNewParams{\n\t\tDeviceSpec: shared.DeviceSpecParam{},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", device.ID)\n}\n',
      },
      cli: {
        method: 'devices create',
        example: "mobilerun-cloud devices create \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          "curl https://api.mobilerun.ai/v1/devices \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MOBILERUN_CLOUD_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/devices',
    httpMethod: 'get',
    summary: 'List devices',
    description: 'List devices',
    stainlessPath: '(resource) devices > (method) list',
    qualified: 'client.devices.list',
    params: [
      'country?: string;',
      'name?: string;',
      "orderBy?: 'id' | 'createdAt' | 'updatedAt' | 'assignedAt';",
      "orderByDirection?: 'asc' | 'desc';",
      'page?: number;',
      'pageSize?: number;',
      'providerId?: string;',
      'state?: string[];',
      "type?: 'dedicated_physical_device' | 'dedicated_premium_device' | 'dedicated_ios_device';",
    ],
    response:
      '{ items: { id: string; activeTaskId: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; providerId?: string; streamToken?: string; userId?: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; $schema?: string; }',
    markdown:
      "## list\n\n`client.devices.list(country?: string, name?: string, orderBy?: 'id' | 'createdAt' | 'updatedAt' | 'assignedAt', orderByDirection?: 'asc' | 'desc', page?: number, pageSize?: number, providerId?: string, state?: string[], type?: 'dedicated_physical_device' | 'dedicated_premium_device' | 'dedicated_ios_device'): { items: device[]; pagination: meta; $schema?: string; }`\n\n**get** `/devices`\n\nList devices\n\n### Parameters\n\n- `country?: string`\n\n- `name?: string`\n\n- `orderBy?: 'id' | 'createdAt' | 'updatedAt' | 'assignedAt'`\n\n- `orderByDirection?: 'asc' | 'desc'`\n\n- `page?: number`\n\n- `pageSize?: number`\n\n- `providerId?: string`\n\n- `state?: string[]`\n\n- `type?: 'dedicated_physical_device' | 'dedicated_premium_device' | 'dedicated_ios_device'`\n\n### Returns\n\n- `{ items: { id: string; activeTaskId: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; providerId?: string; streamToken?: string; userId?: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; $schema?: string; }`\n\n  - `items: { id: string; activeTaskId: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; providerId?: string; streamToken?: string; userId?: string; }[]`\n  - `pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst devices = await client.devices.list();\n\nconsole.log(devices);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst devices = await client.devices.list();\n\nconsole.log(devices.items);",
      },
      python: {
        method: 'devices.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\ndevices = client.devices.list()\nprint(devices.items)',
      },
      go: {
        method: 'client.Devices.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tdevices, err := client.Devices.List(context.TODO(), mobileruncloud.DeviceListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", devices.Items)\n}\n',
      },
      cli: {
        method: 'devices list',
        example: "mobilerun-cloud devices list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/devices/{deviceId}',
    httpMethod: 'get',
    summary: 'Get device info',
    description: 'Get device info',
    stainlessPath: '(resource) devices > (method) retrieve',
    qualified: 'client.devices.retrieve',
    params: ['deviceId: string;'],
    response:
      '{ id: string; activeTaskId: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; providerId?: string; streamToken?: string; userId?: string; }',
    markdown:
      "## retrieve\n\n`client.devices.retrieve(deviceId: string): { id: string; activeTaskId: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; providerId?: string; streamToken?: string; userId?: string; }`\n\n**get** `/devices/{deviceId}`\n\nGet device info\n\n### Parameters\n\n- `deviceId: string`\n\n### Returns\n\n- `{ id: string; activeTaskId: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; providerId?: string; streamToken?: string; userId?: string; }`\n\n  - `id: string`\n  - `activeTaskId: string`\n  - `assignedAt: string`\n  - `createdAt: string`\n  - `name: string`\n  - `state: string`\n  - `stateMessage: string`\n  - `streamUrl: string`\n  - `taskCount: number`\n  - `terminatesAt: string`\n  - `type: string`\n  - `updatedAt: string`\n  - `$schema?: string`\n  - `providerId?: string`\n  - `streamToken?: string`\n  - `userId?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst device = await client.devices.retrieve('deviceId');\n\nconsole.log(device);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.retrieve',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst device = await client.devices.retrieve('deviceId');\n\nconsole.log(device.id);",
      },
      python: {
        method: 'devices.retrieve',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\ndevice = client.devices.retrieve(\n    "deviceId",\n)\nprint(device.id)',
      },
      go: {
        method: 'client.Devices.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tdevice, err := client.Devices.Get(context.TODO(), "deviceId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", device.ID)\n}\n',
      },
      cli: {
        method: 'devices retrieve',
        example: "mobilerun-cloud devices retrieve \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'set_name',
    endpoint: '/devices/{deviceId}/name',
    httpMethod: 'put',
    summary: 'Update device name',
    description: 'Update device name',
    stainlessPath: '(resource) devices > (method) set_name',
    qualified: 'client.devices.setName',
    params: ['deviceId: string;', 'name: string;'],
    response:
      '{ id: string; activeTaskId: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; providerId?: string; streamToken?: string; userId?: string; }',
    markdown:
      "## set_name\n\n`client.devices.setName(deviceId: string, name: string): { id: string; activeTaskId: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; providerId?: string; streamToken?: string; userId?: string; }`\n\n**put** `/devices/{deviceId}/name`\n\nUpdate device name\n\n### Parameters\n\n- `deviceId: string`\n\n- `name: string`\n\n### Returns\n\n- `{ id: string; activeTaskId: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; providerId?: string; streamToken?: string; userId?: string; }`\n\n  - `id: string`\n  - `activeTaskId: string`\n  - `assignedAt: string`\n  - `createdAt: string`\n  - `name: string`\n  - `state: string`\n  - `stateMessage: string`\n  - `streamUrl: string`\n  - `taskCount: number`\n  - `terminatesAt: string`\n  - `type: string`\n  - `updatedAt: string`\n  - `$schema?: string`\n  - `providerId?: string`\n  - `streamToken?: string`\n  - `userId?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst device = await client.devices.setName('deviceId', { name: 'x' });\n\nconsole.log(device);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.setName',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst device = await client.devices.setName('deviceId', { name: 'x' });\n\nconsole.log(device.id);",
      },
      python: {
        method: 'devices.set_name',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\ndevice = client.devices.set_name(\n    device_id="deviceId",\n    name="x",\n)\nprint(device.id)',
      },
      go: {
        method: 'client.Devices.SetName',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tdevice, err := client.Devices.SetName(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceSetNameParams{\n\t\t\tName: "x",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", device.ID)\n}\n',
      },
      cli: {
        method: 'devices set_name',
        example:
          "mobilerun-cloud devices set-name \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --name x",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/name \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "name": "x"\n        }\'',
      },
    },
  },
  {
    name: 'terminate',
    endpoint: '/devices/{deviceId}',
    httpMethod: 'delete',
    summary: 'Terminate a device',
    description: 'Terminate a device',
    stainlessPath: '(resource) devices > (method) terminate',
    qualified: 'client.devices.terminate',
    params: ['deviceId: string;', 'previousDeviceId?: string;', 'terminateAt?: string;'],
    markdown:
      "## terminate\n\n`client.devices.terminate(deviceId: string, previousDeviceId?: string, terminateAt?: string): void`\n\n**delete** `/devices/{deviceId}`\n\nTerminate a device\n\n### Parameters\n\n- `deviceId: string`\n\n- `previousDeviceId?: string`\n\n- `terminateAt?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.terminate('deviceId')\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.terminate',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.terminate('deviceId');",
      },
      python: {
        method: 'devices.terminate',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.terminate(\n    device_id="deviceId",\n)',
      },
      go: {
        method: 'client.Devices.Terminate',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Terminate(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceTerminateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'devices terminate',
        example: "mobilerun-cloud devices terminate \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'reboot',
    endpoint: '/devices/{deviceId}/reboot',
    httpMethod: 'post',
    summary: 'Reboot a device',
    description: 'Reboot a device',
    stainlessPath: '(resource) devices > (method) reboot',
    qualified: 'client.devices.reboot',
    params: ['deviceId: string;'],
    markdown:
      "## reboot\n\n`client.devices.reboot(deviceId: string): void`\n\n**post** `/devices/{deviceId}/reboot`\n\nReboot a device\n\n### Parameters\n\n- `deviceId: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.reboot('deviceId')\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.reboot',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.reboot('deviceId');",
      },
      python: {
        method: 'devices.reboot',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.reboot(\n    "deviceId",\n)',
      },
      go: {
        method: 'client.Devices.Reboot',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Reboot(context.TODO(), "deviceId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'devices reboot',
        example: "mobilerun-cloud devices reboot \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/reboot \\\n    -X POST \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'reset',
    endpoint: '/devices/{deviceId}/reset',
    httpMethod: 'post',
    summary: 'Reset a device to a fresh state',
    description: 'Reset a device to a fresh state',
    stainlessPath: '(resource) devices > (method) reset',
    qualified: 'client.devices.reset',
    params: ['deviceId: string;'],
    markdown:
      "## reset\n\n`client.devices.reset(deviceId: string): void`\n\n**post** `/devices/{deviceId}/reset`\n\nReset a device to a fresh state\n\n### Parameters\n\n- `deviceId: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.reset('deviceId')\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.reset',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.reset('deviceId');",
      },
      python: {
        method: 'devices.reset',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.reset(\n    "deviceId",\n)',
      },
      go: {
        method: 'client.Devices.Reset',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Reset(context.TODO(), "deviceId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'devices reset',
        example: "mobilerun-cloud devices reset \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/reset \\\n    -X POST \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'wait_ready',
    endpoint: '/devices/{deviceId}/wait',
    httpMethod: 'get',
    summary: 'Wait for device to be ready',
    description: 'Wait for device to be ready',
    stainlessPath: '(resource) devices > (method) wait_ready',
    qualified: 'client.devices.waitReady',
    params: ['deviceId: string;'],
    response:
      '{ id: string; activeTaskId: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; providerId?: string; streamToken?: string; userId?: string; }',
    markdown:
      "## wait_ready\n\n`client.devices.waitReady(deviceId: string): { id: string; activeTaskId: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; providerId?: string; streamToken?: string; userId?: string; }`\n\n**get** `/devices/{deviceId}/wait`\n\nWait for device to be ready\n\n### Parameters\n\n- `deviceId: string`\n\n### Returns\n\n- `{ id: string; activeTaskId: string; assignedAt: string; createdAt: string; name: string; state: string; stateMessage: string; streamUrl: string; taskCount: number; terminatesAt: string; type: string; updatedAt: string; $schema?: string; providerId?: string; streamToken?: string; userId?: string; }`\n\n  - `id: string`\n  - `activeTaskId: string`\n  - `assignedAt: string`\n  - `createdAt: string`\n  - `name: string`\n  - `state: string`\n  - `stateMessage: string`\n  - `streamUrl: string`\n  - `taskCount: number`\n  - `terminatesAt: string`\n  - `type: string`\n  - `updatedAt: string`\n  - `$schema?: string`\n  - `providerId?: string`\n  - `streamToken?: string`\n  - `userId?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst device = await client.devices.waitReady('deviceId');\n\nconsole.log(device);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.waitReady',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst device = await client.devices.waitReady('deviceId');\n\nconsole.log(device.id);",
      },
      python: {
        method: 'devices.wait_ready',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\ndevice = client.devices.wait_ready(\n    "deviceId",\n)\nprint(device.id)',
      },
      go: {
        method: 'client.Devices.WaitReady',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tdevice, err := client.Devices.WaitReady(context.TODO(), "deviceId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", device.ID)\n}\n',
      },
      cli: {
        method: 'devices wait_ready',
        example: "mobilerun-cloud devices wait-ready \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/wait \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'fingerprint',
    endpoint: '/devices/{deviceId}/fingerprint',
    httpMethod: 'get',
    summary: 'Device fingerprint snapshot',
    description: 'Device fingerprint snapshot',
    stainlessPath: '(resource) devices > (method) fingerprint',
    qualified: 'client.devices.fingerprint',
    params: ['deviceId: string;', 'X-Device-Display-ID?: number;'],
    response:
      '{ carrier: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }; display: { densityDpi?: number; height?: number; width?: number; }; identifiers: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }; model: { aospVersion?: string; brand?: string; device?: string; hardware?: string; imageRepository?: string; manufacturer?: string; model?: string; }; $schema?: string; }',
    markdown:
      "## fingerprint\n\n`client.devices.fingerprint(deviceId: string, X-Device-Display-ID?: number): { carrier: device_carrier; display: object; identifiers: device_identifiers; model: object; $schema?: string; }`\n\n**get** `/devices/{deviceId}/fingerprint`\n\nDevice fingerprint snapshot\n\n### Parameters\n\n- `deviceId: string`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `{ carrier: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }; display: { densityDpi?: number; height?: number; width?: number; }; identifiers: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }; model: { aospVersion?: string; brand?: string; device?: string; hardware?: string; imageRepository?: string; manufacturer?: string; model?: string; }; $schema?: string; }`\n\n  - `carrier: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }`\n  - `display: { densityDpi?: number; height?: number; width?: number; }`\n  - `identifiers: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }`\n  - `model: { aospVersion?: string; brand?: string; device?: string; hardware?: string; imageRepository?: string; manufacturer?: string; model?: string; }`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.devices.fingerprint('deviceId');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.fingerprint',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.devices.fingerprint('deviceId');\n\nconsole.log(response.identifiers);",
      },
      python: {
        method: 'devices.fingerprint',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.devices.fingerprint(\n    device_id="deviceId",\n)\nprint(response.identifiers)',
      },
      go: {
        method: 'client.Devices.Fingerprint',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Devices.Fingerprint(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceFingerprintParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Identifiers)\n}\n',
      },
      cli: {
        method: 'devices fingerprint',
        example:
          "mobilerun-cloud devices fingerprint \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/fingerprint \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'global',
    endpoint: '/devices/{deviceId}/global',
    httpMethod: 'post',
    summary: 'Perform a global action',
    description: 'Perform a global action',
    stainlessPath: '(resource) devices.actions > (method) global',
    qualified: 'client.devices.actions.global',
    params: ['deviceId: string;', 'action: number;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## global\n\n`client.devices.actions.global(deviceId: string, action: number, X-Device-Display-ID?: number): void`\n\n**post** `/devices/{deviceId}/global`\n\nPerform a global action\n\n### Parameters\n\n- `deviceId: string`\n\n- `action: number`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.actions.global('deviceId', { action: 0 })\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.actions.global',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.actions.global('deviceId', { action: 0 });",
      },
      python: {
        method: 'devices.actions.global_',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.actions.global_(\n    device_id="deviceId",\n    action=0,\n)',
      },
      go: {
        method: 'client.Devices.Actions.Global',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Actions.Global(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceActionGlobalParams{\n\t\t\tAction: 0,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'actions global',
        example:
          "mobilerun-cloud devices:actions global \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --action 0",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/global \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "action": 0\n        }\'',
      },
    },
  },
  {
    name: 'overlay_visible',
    endpoint: '/devices/{deviceId}/overlay',
    httpMethod: 'get',
    summary: 'Check if overlay is visible',
    description: 'Check if overlay is visible',
    stainlessPath: '(resource) devices.actions > (method) overlay_visible',
    qualified: 'client.devices.actions.overlayVisible',
    params: ['deviceId: string;', 'X-Device-Display-ID?: number;'],
    response: '{ visible: boolean; $schema?: string; }',
    markdown:
      "## overlay_visible\n\n`client.devices.actions.overlayVisible(deviceId: string, X-Device-Display-ID?: number): { visible: boolean; $schema?: string; }`\n\n**get** `/devices/{deviceId}/overlay`\n\nCheck if overlay is visible\n\n### Parameters\n\n- `deviceId: string`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `{ visible: boolean; $schema?: string; }`\n\n  - `visible: boolean`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.devices.actions.overlayVisible('deviceId');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.actions.overlayVisible',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.devices.actions.overlayVisible('deviceId');\n\nconsole.log(response.visible);",
      },
      python: {
        method: 'devices.actions.overlay_visible',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.devices.actions.overlay_visible(\n    device_id="deviceId",\n)\nprint(response.visible)',
      },
      go: {
        method: 'client.Devices.Actions.OverlayVisible',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Devices.Actions.OverlayVisible(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceActionOverlayVisibleParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Visible)\n}\n',
      },
      cli: {
        method: 'actions overlay_visible',
        example:
          "mobilerun-cloud devices:actions overlay-visible \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/overlay \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'set_overlay_visible',
    endpoint: '/devices/{deviceId}/overlay',
    httpMethod: 'post',
    summary: 'Set overlay visibility',
    description: 'Set overlay visibility',
    stainlessPath: '(resource) devices.actions > (method) set_overlay_visible',
    qualified: 'client.devices.actions.setOverlayVisible',
    params: ['deviceId: string;', 'visible: boolean;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## set_overlay_visible\n\n`client.devices.actions.setOverlayVisible(deviceId: string, visible: boolean, X-Device-Display-ID?: number): void`\n\n**post** `/devices/{deviceId}/overlay`\n\nSet overlay visibility\n\n### Parameters\n\n- `deviceId: string`\n\n- `visible: boolean`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.actions.setOverlayVisible('deviceId', { visible: true })\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.actions.setOverlayVisible',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.actions.setOverlayVisible('deviceId', { visible: true });",
      },
      python: {
        method: 'devices.actions.set_overlay_visible',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.actions.set_overlay_visible(\n    device_id="deviceId",\n    visible=True,\n)',
      },
      go: {
        method: 'client.Devices.Actions.SetOverlayVisible',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Actions.SetOverlayVisible(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceActionSetOverlayVisibleParams{\n\t\t\tVisible: true,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'actions set_overlay_visible',
        example:
          "mobilerun-cloud devices:actions set-overlay-visible \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --visible",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/overlay \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "visible": true\n        }\'',
      },
    },
  },
  {
    name: 'swipe',
    endpoint: '/devices/{deviceId}/swipe',
    httpMethod: 'post',
    summary: 'Swipe',
    description: 'Swipe',
    stainlessPath: '(resource) devices.actions > (method) swipe',
    qualified: 'client.devices.actions.swipe',
    params: [
      'deviceId: string;',
      'duration: number;',
      'endX: number;',
      'endY: number;',
      'startX: number;',
      'startY: number;',
      'stealth?: boolean;',
      'X-Device-Display-ID?: number;',
    ],
    markdown:
      "## swipe\n\n`client.devices.actions.swipe(deviceId: string, duration: number, endX: number, endY: number, startX: number, startY: number, stealth?: boolean, X-Device-Display-ID?: number): void`\n\n**post** `/devices/{deviceId}/swipe`\n\nSwipe\n\n### Parameters\n\n- `deviceId: string`\n\n- `duration: number`\n  Swipe duration in milliseconds\n\n- `endX: number`\n\n- `endY: number`\n\n- `startX: number`\n\n- `startY: number`\n\n- `stealth?: boolean`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.actions.swipe('deviceId', {\n  duration: 10,\n  endX: 0,\n  endY: 0,\n  startX: 0,\n  startY: 0,\n})\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.actions.swipe',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.actions.swipe('deviceId', {\n  duration: 10,\n  endX: 0,\n  endY: 0,\n  startX: 0,\n  startY: 0,\n});",
      },
      python: {
        method: 'devices.actions.swipe',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.actions.swipe(\n    device_id="deviceId",\n    duration=10,\n    end_x=0,\n    end_y=0,\n    start_x=0,\n    start_y=0,\n)',
      },
      go: {
        method: 'client.Devices.Actions.Swipe',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Actions.Swipe(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceActionSwipeParams{\n\t\t\tDuration: 10,\n\t\t\tEndX:     0,\n\t\t\tEndY:     0,\n\t\t\tStartX:   0,\n\t\t\tStartY:   0,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'actions swipe',
        example:
          "mobilerun-cloud devices:actions swipe \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --duration 10 \\\n  --end-x 0 \\\n  --end-y 0 \\\n  --start-x 0 \\\n  --start-y 0",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/swipe \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "duration": 10,\n          "endX": 0,\n          "endY": 0,\n          "startX": 0,\n          "startY": 0\n        }\'',
      },
    },
  },
  {
    name: 'tap',
    endpoint: '/devices/{deviceId}/tap',
    httpMethod: 'post',
    summary: 'Tap by coordinates',
    description: 'Tap by coordinates',
    stainlessPath: '(resource) devices.actions > (method) tap',
    qualified: 'client.devices.actions.tap',
    params: [
      'deviceId: string;',
      'x: number;',
      'y: number;',
      'stealth?: boolean;',
      'X-Device-Display-ID?: number;',
    ],
    markdown:
      "## tap\n\n`client.devices.actions.tap(deviceId: string, x: number, y: number, stealth?: boolean, X-Device-Display-ID?: number): void`\n\n**post** `/devices/{deviceId}/tap`\n\nTap by coordinates\n\n### Parameters\n\n- `deviceId: string`\n\n- `x: number`\n\n- `y: number`\n\n- `stealth?: boolean`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.actions.tap('deviceId', { x: 0, y: 0 })\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.actions.tap',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.actions.tap('deviceId', { x: 0, y: 0 });",
      },
      python: {
        method: 'devices.actions.tap',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.actions.tap(\n    device_id="deviceId",\n    x=0,\n    y=0,\n)',
      },
      go: {
        method: 'client.Devices.Actions.Tap',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Actions.Tap(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceActionTapParams{\n\t\t\tX: 0,\n\t\t\tY: 0,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'actions tap',
        example:
          "mobilerun-cloud devices:actions tap \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --x 0 \\\n  --y 0",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/tap \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "x": 0,\n          "y": 0\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/devices/{deviceId}/apps/{packageName}',
    httpMethod: 'delete',
    summary: 'Delete app',
    description: 'Delete app',
    stainlessPath: '(resource) devices.apps > (method) delete',
    qualified: 'client.devices.apps.delete',
    params: ['deviceId: string;', 'packageName: string;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## delete\n\n`client.devices.apps.delete(deviceId: string, packageName: string, X-Device-Display-ID?: number): void`\n\n**delete** `/devices/{deviceId}/apps/{packageName}`\n\nDelete app\n\n### Parameters\n\n- `deviceId: string`\n\n- `packageName: string`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.apps.delete('packageName', { deviceId: 'deviceId' })\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.apps.delete',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.apps.delete('packageName', { deviceId: 'deviceId' });",
      },
      python: {
        method: 'devices.apps.delete',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.apps.delete(\n    package_name="packageName",\n    device_id="deviceId",\n)',
      },
      go: {
        method: 'client.Devices.Apps.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Apps.Delete(\n\t\tcontext.TODO(),\n\t\t"packageName",\n\t\tmobileruncloud.DeviceAppDeleteParams{\n\t\t\tDeviceID: "deviceId",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'apps delete',
        example:
          "mobilerun-cloud devices:apps delete \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --package-name packageName",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/apps/$PACKAGE_NAME \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'install',
    endpoint: '/devices/{deviceId}/apps',
    httpMethod: 'post',
    summary: 'Install app',
    description: 'Install app',
    stainlessPath: '(resource) devices.apps > (method) install',
    qualified: 'client.devices.apps.install',
    params: [
      'deviceId: string;',
      'body: { bundleId: string; packageName?: string; } | { packageName: string; bundleId?: string; };',
      'X-Device-Display-ID?: number;',
    ],
    perLanguage: {
      typescript: {
        method: 'client.devices.apps.install',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.apps.install('deviceId', { bundleId: 'x' });",
      },
      python: {
        method: 'devices.apps.install',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.apps.install(\n    device_id="deviceId",\n    bundle_id="x",\n)',
      },
      go: {
        method: 'client.Devices.Apps.Install',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Apps.Install(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceAppInstallParams{\n\t\t\tOfObject: &mobileruncloud.DeviceAppInstallParamsBodyObject{\n\t\t\t\tBundleID: "x",\n\t\t\t},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'apps install',
        example:
          "mobilerun-cloud devices:apps install \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --bundle-id x",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/apps \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "bundleId": "x"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/devices/{deviceId}/apps',
    httpMethod: 'get',
    summary: 'List apps',
    description: 'List apps',
    stainlessPath: '(resource) devices.apps > (method) list',
    qualified: 'client.devices.apps.list',
    params: [
      'deviceId: string;',
      'includeProtectedApps?: boolean;',
      'includeSystemApps?: boolean;',
      'X-Device-Display-ID?: number;',
    ],
    response:
      '{ isSystemApp: boolean; label: string; packageName: string; versionCode: number; versionName: string; }[]',
    markdown:
      "## list\n\n`client.devices.apps.list(deviceId: string, includeProtectedApps?: boolean, includeSystemApps?: boolean, X-Device-Display-ID?: number): { isSystemApp: boolean; label: string; packageName: string; versionCode: number; versionName: string; }[]`\n\n**get** `/devices/{deviceId}/apps`\n\nList apps\n\n### Parameters\n\n- `deviceId: string`\n\n- `includeProtectedApps?: boolean`\n\n- `includeSystemApps?: boolean`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `{ isSystemApp: boolean; label: string; packageName: string; versionCode: number; versionName: string; }[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst apps = await client.devices.apps.list('deviceId');\n\nconsole.log(apps);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.apps.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst apps = await client.devices.apps.list('deviceId');\n\nconsole.log(apps);",
      },
      python: {
        method: 'devices.apps.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\napps = client.devices.apps.list(\n    device_id="deviceId",\n)\nprint(apps)',
      },
      go: {
        method: 'client.Devices.Apps.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tapps, err := client.Devices.Apps.List(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceAppListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", apps)\n}\n',
      },
      cli: {
        method: 'apps list',
        example: "mobilerun-cloud devices:apps list \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/apps \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'start',
    endpoint: '/devices/{deviceId}/apps/{packageName}',
    httpMethod: 'put',
    summary: 'Start app',
    description: 'Start app',
    stainlessPath: '(resource) devices.apps > (method) start',
    qualified: 'client.devices.apps.start',
    params: [
      'deviceId: string;',
      'packageName: string;',
      'activity?: string;',
      'X-Device-Display-ID?: number;',
    ],
    markdown:
      "## start\n\n`client.devices.apps.start(deviceId: string, packageName: string, activity?: string, X-Device-Display-ID?: number): void`\n\n**put** `/devices/{deviceId}/apps/{packageName}`\n\nStart app\n\n### Parameters\n\n- `deviceId: string`\n\n- `packageName: string`\n\n- `activity?: string`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.apps.start('packageName', { deviceId: 'deviceId' })\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.apps.start',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.apps.start('packageName', { deviceId: 'deviceId' });",
      },
      python: {
        method: 'devices.apps.start',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.apps.start(\n    package_name="packageName",\n    device_id="deviceId",\n)',
      },
      go: {
        method: 'client.Devices.Apps.Start',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Apps.Start(\n\t\tcontext.TODO(),\n\t\t"packageName",\n\t\tmobileruncloud.DeviceAppStartParams{\n\t\t\tDeviceID: "deviceId",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'apps start',
        example:
          "mobilerun-cloud devices:apps start \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --package-name packageName",
      },
      http: {
        example:
          "curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/apps/$PACKAGE_NAME \\\n    -X PUT \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MOBILERUN_CLOUD_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'stop',
    endpoint: '/devices/{deviceId}/apps/{packageName}',
    httpMethod: 'patch',
    summary: 'Stop app',
    description: 'Stop app',
    stainlessPath: '(resource) devices.apps > (method) stop',
    qualified: 'client.devices.apps.stop',
    params: ['deviceId: string;', 'packageName: string;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## stop\n\n`client.devices.apps.stop(deviceId: string, packageName: string, X-Device-Display-ID?: number): void`\n\n**patch** `/devices/{deviceId}/apps/{packageName}`\n\nStop app\n\n### Parameters\n\n- `deviceId: string`\n\n- `packageName: string`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.apps.stop('packageName', { deviceId: 'deviceId' })\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.apps.stop',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.apps.stop('packageName', { deviceId: 'deviceId' });",
      },
      python: {
        method: 'devices.apps.stop',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.apps.stop(\n    package_name="packageName",\n    device_id="deviceId",\n)',
      },
      go: {
        method: 'client.Devices.Apps.Stop',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Apps.Stop(\n\t\tcontext.TODO(),\n\t\t"packageName",\n\t\tmobileruncloud.DeviceAppStopParams{\n\t\t\tDeviceID: "deviceId",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'apps stop',
        example:
          "mobilerun-cloud devices:apps stop \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --package-name packageName",
      },
      http: {
        example:
          "curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/apps/$PACKAGE_NAME \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MOBILERUN_CLOUD_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'activate',
    endpoint: '/devices/{deviceId}/esim',
    httpMethod: 'post',
    summary: 'Configure eSIM (download profile and/or enable subscription)',
    description: 'Configure eSIM (download profile and/or enable subscription)',
    stainlessPath: '(resource) devices.esim > (method) activate',
    qualified: 'client.devices.esim.activate',
    params: [
      'deviceId: string;',
      'enable: boolean;',
      'smDpAddr: string;',
      'confirmationCode?: string;',
      'matchingId?: string;',
      'X-Device-Display-ID?: number;',
    ],
    response:
      '{ carrier: string; displayName: string; iccid: string; isEmbedded: boolean; slot: number; subId: number; type: string; $schema?: string; }',
    markdown:
      "## activate\n\n`client.devices.esim.activate(deviceId: string, enable: boolean, smDpAddr: string, confirmationCode?: string, matchingId?: string, X-Device-Display-ID?: number): { carrier: string; displayName: string; iccid: string; isEmbedded: boolean; slot: number; subId: number; type: string; $schema?: string; }`\n\n**post** `/devices/{deviceId}/esim`\n\nConfigure eSIM (download profile and/or enable subscription)\n\n### Parameters\n\n- `deviceId: string`\n\n- `enable: boolean`\n\n- `smDpAddr: string`\n\n- `confirmationCode?: string`\n  Optional carrier-issued confirmation code (the 4th LPA segment). Required only for plans whose SM-DP+ challenges the device for one. Requires matchingId — the LPA spec only interprets segment 4 when segment 3 is present.\n\n- `matchingId?: string`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `{ carrier: string; displayName: string; iccid: string; isEmbedded: boolean; slot: number; subId: number; type: string; $schema?: string; }`\n\n  - `carrier: string`\n  - `displayName: string`\n  - `iccid: string`\n  - `isEmbedded: boolean`\n  - `slot: number`\n  - `subId: number`\n  - `type: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.devices.esim.activate('deviceId', { enable: true, smDpAddr: 'smDpAddr' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.esim.activate',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.devices.esim.activate('deviceId', {\n  enable: true,\n  smDpAddr: 'smDpAddr',\n});\n\nconsole.log(response.iccid);",
      },
      python: {
        method: 'devices.esim.activate',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.devices.esim.activate(\n    device_id="deviceId",\n    enable=True,\n    sm_dp_addr="smDpAddr",\n)\nprint(response.iccid)',
      },
      go: {
        method: 'client.Devices.Esim.Activate',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Devices.Esim.Activate(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceEsimActivateParams{\n\t\t\tEnable:   true,\n\t\t\tSmDpAddr: "smDpAddr",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Iccid)\n}\n',
      },
      cli: {
        method: 'esim activate',
        example:
          "mobilerun-cloud devices:esim activate \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --enable \\\n  --sm-dp-addr smDpAddr",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/esim \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "enable": true,\n          "smDpAddr": "smDpAddr"\n        }\'',
      },
    },
  },
  {
    name: 'enable',
    endpoint: '/devices/{deviceId}/esim',
    httpMethod: 'put',
    summary: 'Enable an eSIM subscription',
    description: 'Enable an eSIM subscription',
    stainlessPath: '(resource) devices.esim > (method) enable',
    qualified: 'client.devices.esim.enable',
    params: ['deviceId: string;', 'subId: number;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## enable\n\n`client.devices.esim.enable(deviceId: string, subId: number, X-Device-Display-ID?: number): void`\n\n**put** `/devices/{deviceId}/esim`\n\nEnable an eSIM subscription\n\n### Parameters\n\n- `deviceId: string`\n\n- `subId: number`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.esim.enable('deviceId', { subId: 0 })\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.esim.enable',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.esim.enable('deviceId', { subId: 0 });",
      },
      python: {
        method: 'devices.esim.enable',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.esim.enable(\n    device_id="deviceId",\n    sub_id=0,\n)',
      },
      go: {
        method: 'client.Devices.Esim.Enable',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Esim.Enable(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceEsimEnableParams{\n\t\t\tSubID: 0,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'esim enable',
        example:
          "mobilerun-cloud devices:esim enable \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --sub-id 0",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/esim \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "subId": 0\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/devices/{deviceId}/esim',
    httpMethod: 'get',
    summary: 'List eSIM subscriptions',
    description: 'List eSIM subscriptions',
    stainlessPath: '(resource) devices.esim > (method) list',
    qualified: 'client.devices.esim.list',
    params: ['deviceId: string;', 'X-Device-Display-ID?: number;'],
    response:
      '{ carrier: string; displayName: string; iccid: string; isEmbedded: boolean; slot: number; subId: number; type: string; $schema?: string; }[]',
    markdown:
      "## list\n\n`client.devices.esim.list(deviceId: string, X-Device-Display-ID?: number): { carrier: string; displayName: string; iccid: string; isEmbedded: boolean; slot: number; subId: number; type: string; $schema?: string; }[]`\n\n**get** `/devices/{deviceId}/esim`\n\nList eSIM subscriptions\n\n### Parameters\n\n- `deviceId: string`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `{ carrier: string; displayName: string; iccid: string; isEmbedded: boolean; slot: number; subId: number; type: string; $schema?: string; }[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst esims = await client.devices.esim.list('deviceId');\n\nconsole.log(esims);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.esim.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst esims = await client.devices.esim.list('deviceId');\n\nconsole.log(esims);",
      },
      python: {
        method: 'devices.esim.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nesims = client.devices.esim.list(\n    device_id="deviceId",\n)\nprint(esims)',
      },
      go: {
        method: 'client.Devices.Esim.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tesims, err := client.Devices.Esim.List(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceEsimListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", esims)\n}\n',
      },
      cli: {
        method: 'esim list',
        example: "mobilerun-cloud devices:esim list \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/esim \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'remove',
    endpoint: '/devices/{deviceId}/esim',
    httpMethod: 'delete',
    summary: 'Delete eSIM subscription',
    description: 'Delete eSIM subscription',
    stainlessPath: '(resource) devices.esim > (method) remove',
    qualified: 'client.devices.esim.remove',
    params: ['deviceId: string;', 'subId: number;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## remove\n\n`client.devices.esim.remove(deviceId: string, subId: number, X-Device-Display-ID?: number): void`\n\n**delete** `/devices/{deviceId}/esim`\n\nDelete eSIM subscription\n\n### Parameters\n\n- `deviceId: string`\n\n- `subId: number`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.esim.remove('deviceId', { subId: 0 })\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.esim.remove',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.esim.remove('deviceId', { subId: 0 });",
      },
      python: {
        method: 'devices.esim.remove',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.esim.remove(\n    device_id="deviceId",\n    sub_id=0,\n)',
      },
      go: {
        method: 'client.Devices.Esim.Remove',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Esim.Remove(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceEsimRemoveParams{\n\t\t\tSubID: 0,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'esim remove',
        example:
          "mobilerun-cloud devices:esim remove \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --sub-id 0",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/esim \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'status',
    endpoint: '/devices/{deviceId}/esim/status',
    httpMethod: 'get',
    summary: 'Get eSIM connectivity status',
    description: 'Get eSIM connectivity status',
    stainlessPath: '(resource) devices.esim > (method) status',
    qualified: 'client.devices.esim.status',
    params: ['deviceId: string;', 'X-Device-Display-ID?: number;'],
    response:
      '{ carrier: string; dataRoamingEnabled: boolean; dataState: string; isRoaming: boolean; mobileDataEnabled: boolean; networkType: string; operator: string; phoneType: string; simState: string; subId: number; }[]',
    markdown:
      "## status\n\n`client.devices.esim.status(deviceId: string, X-Device-Display-ID?: number): { carrier: string; dataRoamingEnabled: boolean; dataState: string; isRoaming: boolean; mobileDataEnabled: boolean; networkType: string; operator: string; phoneType: string; simState: string; subId: number; }[]`\n\n**get** `/devices/{deviceId}/esim/status`\n\nGet eSIM connectivity status\n\n### Parameters\n\n- `deviceId: string`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `{ carrier: string; dataRoamingEnabled: boolean; dataState: string; isRoaming: boolean; mobileDataEnabled: boolean; networkType: string; operator: string; phoneType: string; simState: string; subId: number; }[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.devices.esim.status('deviceId');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.esim.status',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.devices.esim.status('deviceId');\n\nconsole.log(response);",
      },
      python: {
        method: 'devices.esim.status',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.devices.esim.status(\n    device_id="deviceId",\n)\nprint(response)',
      },
      go: {
        method: 'client.Devices.Esim.Status',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Devices.Esim.Status(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceEsimStatusParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      cli: {
        method: 'esim status',
        example:
          "mobilerun-cloud devices:esim status \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/esim/status \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'set_roaming',
    endpoint: '/devices/{deviceId}/esim/roaming',
    httpMethod: 'put',
    summary: 'Toggle eSIM data roaming',
    description: 'Toggle eSIM data roaming',
    stainlessPath: '(resource) devices.esim > (method) set_roaming',
    qualified: 'client.devices.esim.setRoaming',
    params: ['deviceId: string;', 'enabled: boolean;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## set_roaming\n\n`client.devices.esim.setRoaming(deviceId: string, enabled: boolean, X-Device-Display-ID?: number): void`\n\n**put** `/devices/{deviceId}/esim/roaming`\n\nToggle eSIM data roaming\n\n### Parameters\n\n- `deviceId: string`\n\n- `enabled: boolean`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.esim.setRoaming('deviceId', { enabled: true })\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.esim.setRoaming',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.esim.setRoaming('deviceId', { enabled: true });",
      },
      python: {
        method: 'devices.esim.set_roaming',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.esim.set_roaming(\n    device_id="deviceId",\n    enabled=True,\n)',
      },
      go: {
        method: 'client.Devices.Esim.SetRoaming',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Esim.SetRoaming(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceEsimSetRoamingParams{\n\t\t\tEnabled: true,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'esim set_roaming',
        example:
          "mobilerun-cloud devices:esim set-roaming \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --enabled",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/esim/roaming \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "enabled": true\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/devices/{deviceId}/esim/apn',
    httpMethod: 'get',
    summary: 'List APNs for active subscriptions',
    description: 'List APNs for active subscriptions',
    stainlessPath: '(resource) devices.esim.apn > (method) list',
    qualified: 'client.devices.esim.apn.list',
    params: ['deviceId: string;', 'X-Device-Display-ID?: number;'],
    response:
      '{ id: number; apn: string; isPreferred: boolean; mcc: string; mnc: string; name: string; protocol: string; roamingProtocol: string; subId: number; type: string; }[]',
    markdown:
      "## list\n\n`client.devices.esim.apn.list(deviceId: string, X-Device-Display-ID?: number): { id: number; apn: string; isPreferred: boolean; mcc: string; mnc: string; name: string; protocol: string; roamingProtocol: string; subId: number; type: string; }[]`\n\n**get** `/devices/{deviceId}/esim/apn`\n\nList APNs for active subscriptions\n\n### Parameters\n\n- `deviceId: string`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `{ id: number; apn: string; isPreferred: boolean; mcc: string; mnc: string; name: string; protocol: string; roamingProtocol: string; subId: number; type: string; }[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst apns = await client.devices.esim.apn.list('deviceId');\n\nconsole.log(apns);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.esim.apn.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst apns = await client.devices.esim.apn.list('deviceId');\n\nconsole.log(apns);",
      },
      python: {
        method: 'devices.esim.apn.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\napns = client.devices.esim.apn.list(\n    device_id="deviceId",\n)\nprint(apns)',
      },
      go: {
        method: 'client.Devices.Esim.Apn.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tapns, err := client.Devices.Esim.Apn.List(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceEsimApnListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", apns)\n}\n',
      },
      cli: {
        method: 'apn list',
        example:
          "mobilerun-cloud devices:esim:apn list \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/esim/apn \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/devices/{deviceId}/esim/apn',
    httpMethod: 'post',
    summary: 'Create and set an APN for an eSIM subscription',
    description: 'Create and set an APN for an eSIM subscription',
    stainlessPath: '(resource) devices.esim.apn > (method) create',
    qualified: 'client.devices.esim.apn.create',
    params: [
      'deviceId: string;',
      'apn: string;',
      'mcc: string;',
      'mnc: string;',
      'name: string;',
      'protocol: string;',
      'roamingProtocol: string;',
      'subId: number;',
      'type: string;',
      'X-Device-Display-ID?: number;',
    ],
    markdown:
      "## create\n\n`client.devices.esim.apn.create(deviceId: string, apn: string, mcc: string, mnc: string, name: string, protocol: string, roamingProtocol: string, subId: number, type: string, X-Device-Display-ID?: number): void`\n\n**post** `/devices/{deviceId}/esim/apn`\n\nCreate and set an APN for an eSIM subscription\n\n### Parameters\n\n- `deviceId: string`\n\n- `apn: string`\n\n- `mcc: string`\n\n- `mnc: string`\n\n- `name: string`\n\n- `protocol: string`\n\n- `roamingProtocol: string`\n\n- `subId: number`\n\n- `type: string`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.esim.apn.create('deviceId', {\n  apn: 'apn',\n  mcc: 'mcc',\n  mnc: 'mnc',\n  name: 'name',\n  protocol: 'protocol',\n  roamingProtocol: 'roamingProtocol',\n  subId: 0,\n  type: 'type',\n})\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.esim.apn.create',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.esim.apn.create('deviceId', {\n  apn: 'apn',\n  mcc: 'mcc',\n  mnc: 'mnc',\n  name: 'name',\n  protocol: 'protocol',\n  roamingProtocol: 'roamingProtocol',\n  subId: 0,\n  type: 'type',\n});",
      },
      python: {
        method: 'devices.esim.apn.create',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.esim.apn.create(\n    device_id="deviceId",\n    apn="apn",\n    mcc="mcc",\n    mnc="mnc",\n    name="name",\n    protocol="protocol",\n    roaming_protocol="roamingProtocol",\n    sub_id=0,\n    type="type",\n)',
      },
      go: {
        method: 'client.Devices.Esim.Apn.New',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Esim.Apn.New(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceEsimApnNewParams{\n\t\t\tApn:             "apn",\n\t\t\tMcc:             "mcc",\n\t\t\tMnc:             "mnc",\n\t\t\tName:            "name",\n\t\t\tProtocol:        "protocol",\n\t\t\tRoamingProtocol: "roamingProtocol",\n\t\t\tSubID:           0,\n\t\t\tType:            "type",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'apn create',
        example:
          "mobilerun-cloud devices:esim:apn create \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --apn apn \\\n  --mcc mcc \\\n  --mnc mnc \\\n  --name name \\\n  --protocol protocol \\\n  --roaming-protocol roamingProtocol \\\n  --sub-id 0 \\\n  --type type",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/esim/apn \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "apn": "apn",\n          "mcc": "mcc",\n          "mnc": "mnc",\n          "name": "name",\n          "protocol": "protocol",\n          "roamingProtocol": "roamingProtocol",\n          "subId": 0,\n          "type": "type"\n        }\'',
      },
    },
  },
  {
    name: 'select',
    endpoint: '/devices/{deviceId}/esim/apn',
    httpMethod: 'put',
    summary: 'Select an existing APN as preferred',
    description: 'Select an existing APN as preferred',
    stainlessPath: '(resource) devices.esim.apn > (method) select',
    qualified: 'client.devices.esim.apn.select',
    params: ['deviceId: string;', 'apnId: number;', 'subId: number;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## select\n\n`client.devices.esim.apn.select(deviceId: string, apnId: number, subId: number, X-Device-Display-ID?: number): void`\n\n**put** `/devices/{deviceId}/esim/apn`\n\nSelect an existing APN as preferred\n\n### Parameters\n\n- `deviceId: string`\n\n- `apnId: number`\n\n- `subId: number`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.esim.apn.select('deviceId', { apnId: 0, subId: 0 })\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.esim.apn.select',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.esim.apn.select('deviceId', { apnId: 0, subId: 0 });",
      },
      python: {
        method: 'devices.esim.apn.select',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.esim.apn.select(\n    device_id="deviceId",\n    apn_id=0,\n    sub_id=0,\n)',
      },
      go: {
        method: 'client.Devices.Esim.Apn.Select',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Esim.Apn.Select(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceEsimApnSelectParams{\n\t\t\tApnID: 0,\n\t\t\tSubID: 0,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'apn select',
        example:
          "mobilerun-cloud devices:esim:apn select \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --apn-id 0 \\\n  --sub-id 0",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/esim/apn \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "apnId": 0,\n          "subId": 0\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/devices/{deviceId}/files',
    httpMethod: 'delete',
    summary: 'Delete file',
    description: 'Delete file',
    stainlessPath: '(resource) devices.files > (method) delete',
    qualified: 'client.devices.files.delete',
    params: ['deviceId: string;', 'path: string;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## delete\n\n`client.devices.files.delete(deviceId: string, path: string, X-Device-Display-ID?: number): void`\n\n**delete** `/devices/{deviceId}/files`\n\nDelete file\n\n### Parameters\n\n- `deviceId: string`\n\n- `path: string`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.files.delete('deviceId', { path: 'path' })\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.files.delete',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.files.delete('deviceId', { path: 'path' });",
      },
      python: {
        method: 'devices.files.delete',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.files.delete(\n    device_id="deviceId",\n    path="path",\n)',
      },
      go: {
        method: 'client.Devices.Files.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Files.Delete(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceFileDeleteParams{\n\t\t\tPath: "path",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'files delete',
        example:
          "mobilerun-cloud devices:files delete \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --path path",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/files \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'download',
    endpoint: '/devices/{deviceId}/files/download',
    httpMethod: 'get',
    summary: 'Download file',
    description: 'Download file',
    stainlessPath: '(resource) devices.files > (method) download',
    qualified: 'client.devices.files.download',
    params: ['deviceId: string;', 'path: string;', 'X-Device-Display-ID?: number;'],
    response: 'string',
    markdown:
      "## download\n\n`client.devices.files.download(deviceId: string, path: string, X-Device-Display-ID?: number): string`\n\n**get** `/devices/{deviceId}/files/download`\n\nDownload file\n\n### Parameters\n\n- `deviceId: string`\n\n- `path: string`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.devices.files.download('deviceId', { path: 'path' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.files.download',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.devices.files.download('deviceId', { path: 'path' });\n\nconsole.log(response);",
      },
      python: {
        method: 'devices.files.download',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.devices.files.download(\n    device_id="deviceId",\n    path="path",\n)\nprint(response)',
      },
      go: {
        method: 'client.Devices.Files.Download',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Devices.Files.Download(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceFileDownloadParams{\n\t\t\tPath: "path",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      cli: {
        method: 'files download',
        example:
          "mobilerun-cloud devices:files download \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --path path",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/files/download \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/devices/{deviceId}/files',
    httpMethod: 'get',
    summary: 'List files',
    description: 'List files',
    stainlessPath: '(resource) devices.files > (method) list',
    qualified: 'client.devices.files.list',
    params: ['deviceId: string;', 'path: string;', 'X-Device-Display-ID?: number;'],
    response:
      '{ files: { extendedAttributes: boolean; group: string; hardLinks: number; modifiedAt: string; name: string; owner: string; permissions: object; size: number; type: string; symlinkTarget?: string; }[]; path: string; total: number; $schema?: string; }',
    markdown:
      "## list\n\n`client.devices.files.list(deviceId: string, path: string, X-Device-Display-ID?: number): { files: file_info[]; path: string; total: number; $schema?: string; }`\n\n**get** `/devices/{deviceId}/files`\n\nList files\n\n### Parameters\n\n- `deviceId: string`\n\n- `path: string`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `{ files: { extendedAttributes: boolean; group: string; hardLinks: number; modifiedAt: string; name: string; owner: string; permissions: object; size: number; type: string; symlinkTarget?: string; }[]; path: string; total: number; $schema?: string; }`\n\n  - `files: { extendedAttributes: boolean; group: string; hardLinks: number; modifiedAt: string; name: string; owner: string; permissions: { group: object; others: object; owner: object; special: { setGid: boolean; setUid: boolean; sticky: boolean; }; }; size: number; type: string; symlinkTarget?: string; }[]`\n  - `path: string`\n  - `total: number`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst files = await client.devices.files.list('deviceId', { path: 'path' });\n\nconsole.log(files);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.files.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst files = await client.devices.files.list('deviceId', { path: 'path' });\n\nconsole.log(files.files);",
      },
      python: {
        method: 'devices.files.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nfiles = client.devices.files.list(\n    device_id="deviceId",\n    path="path",\n)\nprint(files.files)',
      },
      go: {
        method: 'client.Devices.Files.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfiles, err := client.Devices.Files.List(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceFileListParams{\n\t\t\tPath: "path",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", files.Files)\n}\n',
      },
      cli: {
        method: 'files list',
        example:
          "mobilerun-cloud devices:files list \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --path path",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/files \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'upload',
    endpoint: '/devices/{deviceId}/files',
    httpMethod: 'post',
    summary: 'Upload file',
    description: 'Upload file',
    stainlessPath: '(resource) devices.files > (method) upload',
    qualified: 'client.devices.files.upload',
    params: ['deviceId: string;', 'path: string;', 'file: string;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## upload\n\n`client.devices.files.upload(deviceId: string, path: string, file: string, X-Device-Display-ID?: number): void`\n\n**post** `/devices/{deviceId}/files`\n\nUpload file\n\n### Parameters\n\n- `deviceId: string`\n\n- `path: string`\n\n- `file: string`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.files.upload('deviceId', { path: 'path', file: fs.createReadStream('path/to/file') })\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.files.upload',
        example:
          "import fs from 'fs';\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.files.upload('deviceId', {\n  path: 'path',\n  file: fs.createReadStream('path/to/file'),\n});",
      },
      python: {
        method: 'devices.files.upload',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.files.upload(\n    device_id="deviceId",\n    path="path",\n    file=b"Example data",\n)',
      },
      go: {
        method: 'client.Devices.Files.Upload',
        example:
          'package main\n\nimport (\n\t"bytes"\n\t"context"\n\t"io"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Files.Upload(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceFileUploadParams{\n\t\t\tPath: "path",\n\t\t\tFile: io.Reader(bytes.NewBuffer([]byte("Example data"))),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'files upload',
        example:
          "mobilerun-cloud devices:files upload \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --path path \\\n  --file 'Example data'",
      },
      http: {
        example:
          "curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/files \\\n    -H 'Content-Type: multipart/form-data' \\\n    -H \"Authorization: Bearer $MOBILERUN_CLOUD_API_KEY\" \\\n    -F 'file=@/path/to/file'",
      },
    },
  },
  {
    name: 'clear',
    endpoint: '/devices/{deviceId}/keyboard',
    httpMethod: 'delete',
    summary: 'Clear input',
    description: 'Clear input',
    stainlessPath: '(resource) devices.keyboard > (method) clear',
    qualified: 'client.devices.keyboard.clear',
    params: ['deviceId: string;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## clear\n\n`client.devices.keyboard.clear(deviceId: string, X-Device-Display-ID?: number): void`\n\n**delete** `/devices/{deviceId}/keyboard`\n\nClear input\n\n### Parameters\n\n- `deviceId: string`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.keyboard.clear('deviceId')\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.keyboard.clear',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.keyboard.clear('deviceId');",
      },
      python: {
        method: 'devices.keyboard.clear',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.keyboard.clear(\n    device_id="deviceId",\n)',
      },
      go: {
        method: 'client.Devices.Keyboard.Clear',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Keyboard.Clear(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceKeyboardClearParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'keyboard clear',
        example:
          "mobilerun-cloud devices:keyboard clear \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/keyboard \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'key',
    endpoint: '/devices/{deviceId}/keyboard',
    httpMethod: 'put',
    summary: 'Input key',
    description: 'Input key',
    stainlessPath: '(resource) devices.keyboard > (method) key',
    qualified: 'client.devices.keyboard.key',
    params: ['deviceId: string;', 'key: number;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## key\n\n`client.devices.keyboard.key(deviceId: string, key: number, X-Device-Display-ID?: number): void`\n\n**put** `/devices/{deviceId}/keyboard`\n\nInput key\n\n### Parameters\n\n- `deviceId: string`\n\n- `key: number`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.keyboard.key('deviceId', { key: 0 })\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.keyboard.key',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.keyboard.key('deviceId', { key: 0 });",
      },
      python: {
        method: 'devices.keyboard.key',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.keyboard.key(\n    device_id="deviceId",\n    key=0,\n)',
      },
      go: {
        method: 'client.Devices.Keyboard.Key',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Keyboard.Key(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceKeyboardKeyParams{\n\t\t\tKey: 0,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'keyboard key',
        example:
          "mobilerun-cloud devices:keyboard key \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --key 0",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/keyboard \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "key": 0\n        }\'',
      },
    },
  },
  {
    name: 'write',
    endpoint: '/devices/{deviceId}/keyboard',
    httpMethod: 'post',
    summary: 'Input text',
    description: 'Input text',
    stainlessPath: '(resource) devices.keyboard > (method) write',
    qualified: 'client.devices.keyboard.write',
    params: [
      'deviceId: string;',
      'text: string;',
      'clear?: boolean;',
      'errorRate?: number;',
      'stealth?: boolean;',
      'wpm?: number;',
      'X-Device-Display-ID?: number;',
    ],
    markdown:
      "## write\n\n`client.devices.keyboard.write(deviceId: string, text: string, clear?: boolean, errorRate?: number, stealth?: boolean, wpm?: number, X-Device-Display-ID?: number): void`\n\n**post** `/devices/{deviceId}/keyboard`\n\nInput text\n\n### Parameters\n\n- `deviceId: string`\n\n- `text: string`\n\n- `clear?: boolean`\n\n- `errorRate?: number`\n  Per-character mistake rate for humantouch typing. -1 uses server default.\n\n- `stealth?: boolean`\n\n- `wpm?: number`\n  Words per minute for stealth typing. 0 uses portal default.\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.keyboard.write('deviceId', { text: 'text' })\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.keyboard.write',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.keyboard.write('deviceId', { text: 'text' });",
      },
      python: {
        method: 'devices.keyboard.write',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.keyboard.write(\n    device_id="deviceId",\n    text="text",\n)',
      },
      go: {
        method: 'client.Devices.Keyboard.Write',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Keyboard.Write(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceKeyboardWriteParams{\n\t\t\tText: "text",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'keyboard write',
        example:
          "mobilerun-cloud devices:keyboard write \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --text text",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/keyboard \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "text": "text"\n        }\'',
      },
    },
  },
  {
    name: 'get',
    endpoint: '/devices/{deviceId}/location',
    httpMethod: 'get',
    summary: 'Get device location',
    description: 'Get device location',
    stainlessPath: '(resource) devices.location > (method) get',
    qualified: 'client.devices.location.get',
    params: ['deviceId: string;', 'X-Device-Display-ID?: number;'],
    response: '{ latitude: number; longitude: number; $schema?: string; }',
    markdown:
      "## get\n\n`client.devices.location.get(deviceId: string, X-Device-Display-ID?: number): { latitude: number; longitude: number; $schema?: string; }`\n\n**get** `/devices/{deviceId}/location`\n\nGet device location\n\n### Parameters\n\n- `deviceId: string`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `{ latitude: number; longitude: number; $schema?: string; }`\n\n  - `latitude: number`\n  - `longitude: number`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst location = await client.devices.location.get('deviceId');\n\nconsole.log(location);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.location.get',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst location = await client.devices.location.get('deviceId');\n\nconsole.log(location.latitude);",
      },
      python: {
        method: 'devices.location.get',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nlocation = client.devices.location.get(\n    device_id="deviceId",\n)\nprint(location.latitude)',
      },
      go: {
        method: 'client.Devices.Location.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tlocation, err := client.Devices.Location.Get(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceLocationGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", location.Latitude)\n}\n',
      },
      cli: {
        method: 'location get',
        example:
          "mobilerun-cloud devices:location get \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/location \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'set',
    endpoint: '/devices/{deviceId}/location',
    httpMethod: 'post',
    summary: 'Set device location',
    description: 'Set device location',
    stainlessPath: '(resource) devices.location > (method) set',
    qualified: 'client.devices.location.set',
    params: ['deviceId: string;', 'latitude: number;', 'longitude: number;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## set\n\n`client.devices.location.set(deviceId: string, latitude: number, longitude: number, X-Device-Display-ID?: number): void`\n\n**post** `/devices/{deviceId}/location`\n\nSet device location\n\n### Parameters\n\n- `deviceId: string`\n\n- `latitude: number`\n\n- `longitude: number`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.location.set('deviceId', { latitude: 0, longitude: 0 })\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.location.set',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.location.set('deviceId', { latitude: 0, longitude: 0 });",
      },
      python: {
        method: 'devices.location.set',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.location.set(\n    device_id="deviceId",\n    latitude=0,\n    longitude=0,\n)',
      },
      go: {
        method: 'client.Devices.Location.Set',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n\t"github.com/stainless-sdks/droidrun-cloud-go/shared"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Location.Set(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceLocationSetParams{\n\t\t\tLocation: shared.LocationParam{\n\t\t\t\tLatitude:  0,\n\t\t\t\tLongitude: 0,\n\t\t\t},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'location set',
        example:
          "mobilerun-cloud devices:location set \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --latitude 0 \\\n  --longitude 0",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/location \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "latitude": 0,\n          "longitude": 0\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/devices/{deviceId}/packages',
    httpMethod: 'get',
    summary: 'List packages',
    description: 'List packages',
    stainlessPath: '(resource) devices.packages > (method) list',
    qualified: 'client.devices.packages.list',
    params: [
      'deviceId: string;',
      'includeProtectedPackages?: boolean;',
      'includeSystemPackages?: boolean;',
      'X-Device-Display-ID?: number;',
    ],
    response: 'string[]',
    markdown:
      "## list\n\n`client.devices.packages.list(deviceId: string, includeProtectedPackages?: boolean, includeSystemPackages?: boolean, X-Device-Display-ID?: number): string[]`\n\n**get** `/devices/{deviceId}/packages`\n\nList packages\n\n### Parameters\n\n- `deviceId: string`\n\n- `includeProtectedPackages?: boolean`\n\n- `includeSystemPackages?: boolean`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `string[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst packages = await client.devices.packages.list('deviceId');\n\nconsole.log(packages);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.packages.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst packages = await client.devices.packages.list('deviceId');\n\nconsole.log(packages);",
      },
      python: {
        method: 'devices.packages.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\npackages = client.devices.packages.list(\n    device_id="deviceId",\n)\nprint(packages)',
      },
      go: {
        method: 'client.Devices.Packages.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpackages, err := client.Devices.Packages.List(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DevicePackageListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", packages)\n}\n',
      },
      cli: {
        method: 'packages list',
        example:
          "mobilerun-cloud devices:packages list \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/packages \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/devices/{deviceId}/profile',
    httpMethod: 'put',
    summary: 'Apply a profile to a device',
    description: 'Apply a profile to a device',
    stainlessPath: '(resource) devices.profile > (method) update',
    qualified: 'client.devices.profile.update',
    params: ['deviceId: string;', 'profileId: string;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## update\n\n`client.devices.profile.update(deviceId: string, profileId: string, X-Device-Display-ID?: number): void`\n\n**put** `/devices/{deviceId}/profile`\n\nApply a profile to a device\n\n### Parameters\n\n- `deviceId: string`\n\n- `profileId: string`\n  ID of the profile to apply\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.profile.update('deviceId', { profileId: 'profileId' })\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.profile.update',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.profile.update('deviceId', { profileId: 'profileId' });",
      },
      python: {
        method: 'devices.profile.update',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.profile.update(\n    device_id="deviceId",\n    profile_id="profileId",\n)',
      },
      go: {
        method: 'client.Devices.Profile.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Profile.Update(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceProfileUpdateParams{\n\t\t\tProfileID: "profileId",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'profile update',
        example:
          "mobilerun-cloud devices:profile update \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --profile-id profileId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/profile \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "profileId": "profileId"\n        }\'',
      },
    },
  },
  {
    name: 'connect',
    endpoint: '/devices/{deviceId}/proxy',
    httpMethod: 'post',
    summary: 'Connect proxy',
    description: 'Connect proxy',
    stainlessPath: '(resource) devices.proxy > (method) connect',
    qualified: 'client.devices.proxy.connect',
    params: [
      'deviceId: string;',
      'host?: string;',
      'name?: string;',
      'password?: string;',
      'port?: number;',
      'smartIp?: boolean;',
      'socks5?: { host: string; port: number; password?: string; user?: string; };',
      'user?: string;',
      'X-Device-Display-ID?: number;',
    ],
    markdown:
      "## connect\n\n`client.devices.proxy.connect(deviceId: string, host?: string, name?: string, password?: string, port?: number, smartIp?: boolean, socks5?: { host: string; port: number; password?: string; user?: string; }, user?: string, X-Device-Display-ID?: number): void`\n\n**post** `/devices/{deviceId}/proxy`\n\nConnect proxy\n\n### Parameters\n\n- `deviceId: string`\n\n- `host?: string`\n\n- `name?: string`\n  Proxy name\n\n- `password?: string`\n\n- `port?: number`\n\n- `smartIp?: boolean`\n\n- `socks5?: { host: string; port: number; password?: string; user?: string; }`\n  SOCKS5 proxy configuration (required for socks5).\n  - `host: string`\n  - `port: number`\n  - `password?: string`\n  - `user?: string`\n\n- `user?: string`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.proxy.connect('deviceId')\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.proxy.connect',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.proxy.connect('deviceId');",
      },
      python: {
        method: 'devices.proxy.connect',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.proxy.connect(\n    device_id="deviceId",\n)',
      },
      go: {
        method: 'client.Devices.Proxy.Connect',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Proxy.Connect(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceProxyConnectParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'proxy connect',
        example:
          "mobilerun-cloud devices:proxy connect \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          "curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/proxy \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MOBILERUN_CLOUD_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'disconnect',
    endpoint: '/devices/{deviceId}/proxy',
    httpMethod: 'delete',
    summary: 'Disconnect proxy',
    description: 'Disconnect proxy',
    stainlessPath: '(resource) devices.proxy > (method) disconnect',
    qualified: 'client.devices.proxy.disconnect',
    params: ['deviceId: string;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## disconnect\n\n`client.devices.proxy.disconnect(deviceId: string, X-Device-Display-ID?: number): void`\n\n**delete** `/devices/{deviceId}/proxy`\n\nDisconnect proxy\n\n### Parameters\n\n- `deviceId: string`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.proxy.disconnect('deviceId')\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.proxy.disconnect',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.proxy.disconnect('deviceId');",
      },
      python: {
        method: 'devices.proxy.disconnect',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.proxy.disconnect(\n    device_id="deviceId",\n)',
      },
      go: {
        method: 'client.Devices.Proxy.Disconnect',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Proxy.Disconnect(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceProxyDisconnectParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'proxy disconnect',
        example:
          "mobilerun-cloud devices:proxy disconnect \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/proxy \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'status',
    endpoint: '/devices/{deviceId}/proxy',
    httpMethod: 'get',
    summary: 'Get proxy connection state',
    description: 'Get proxy connection state',
    stainlessPath: '(resource) devices.proxy > (method) status',
    qualified: 'client.devices.proxy.status',
    params: ['deviceId: string;', 'X-Device-Display-ID?: number;'],
    response: '{ connected: boolean; name: string; protocol: string; $schema?: string; }',
    markdown:
      "## status\n\n`client.devices.proxy.status(deviceId: string, X-Device-Display-ID?: number): { connected: boolean; name: string; protocol: string; $schema?: string; }`\n\n**get** `/devices/{deviceId}/proxy`\n\nGet proxy connection state\n\n### Parameters\n\n- `deviceId: string`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `{ connected: boolean; name: string; protocol: string; $schema?: string; }`\n\n  - `connected: boolean`\n  - `name: string`\n  - `protocol: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.devices.proxy.status('deviceId');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.proxy.status',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.devices.proxy.status('deviceId');\n\nconsole.log(response.connected);",
      },
      python: {
        method: 'devices.proxy.status',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.devices.proxy.status(\n    device_id="deviceId",\n)\nprint(response.connected)',
      },
      go: {
        method: 'client.Devices.Proxy.Status',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Devices.Proxy.Status(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceProxyStatusParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Connected)\n}\n',
      },
      cli: {
        method: 'proxy status',
        example:
          "mobilerun-cloud devices:proxy status \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/proxy \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'screenshot',
    endpoint: '/devices/{deviceId}/screenshot',
    httpMethod: 'get',
    summary: 'Take screenshot',
    description: 'Take screenshot',
    stainlessPath: '(resource) devices.state > (method) screenshot',
    qualified: 'client.devices.state.screenshot',
    params: ['deviceId: string;', 'hideOverlay?: boolean;', 'X-Device-Display-ID?: number;'],
    response: 'string',
    markdown:
      "## screenshot\n\n`client.devices.state.screenshot(deviceId: string, hideOverlay?: boolean, X-Device-Display-ID?: number): string`\n\n**get** `/devices/{deviceId}/screenshot`\n\nTake screenshot\n\n### Parameters\n\n- `deviceId: string`\n\n- `hideOverlay?: boolean`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.devices.state.screenshot('deviceId');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.state.screenshot',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.devices.state.screenshot('deviceId');\n\nconsole.log(response);",
      },
      python: {
        method: 'devices.state.screenshot',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.devices.state.screenshot(\n    device_id="deviceId",\n)\nprint(response)',
      },
      go: {
        method: 'client.Devices.State.Screenshot',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Devices.State.Screenshot(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceStateScreenshotParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      cli: {
        method: 'state screenshot',
        example:
          "mobilerun-cloud devices:state screenshot \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/screenshot \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'ui',
    endpoint: '/devices/{deviceId}/ui-state',
    httpMethod: 'get',
    summary: 'UI state',
    description: 'UI state',
    stainlessPath: '(resource) devices.state > (method) ui',
    qualified: 'client.devices.state.ui',
    params: ['deviceId: string;', 'filter?: boolean;', 'X-Device-Display-ID?: number;'],
    response:
      '{ a11y_tree: object; device_context: { display_metrics: object; filtering_params: object; screen_bounds: rect; }; ime_tree: object; phone_state: { isEditable: boolean; keyboardVisible: boolean; activityName?: string; currentApp?: string; focusedElement?: object; packageName?: string; }; $schema?: string; }',
    markdown:
      "## ui\n\n`client.devices.state.ui(deviceId: string, filter?: boolean, X-Device-Display-ID?: number): { a11y_tree: a11_y_node; device_context: object; ime_tree: a11_y_node; phone_state: object; $schema?: string; }`\n\n**get** `/devices/{deviceId}/ui-state`\n\nUI state\n\n### Parameters\n\n- `deviceId: string`\n\n- `filter?: boolean`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `{ a11y_tree: { boundsInScreen: object; children: a11_y_node[]; className: string; contentDescription: string; isCheckable: boolean; isChecked: boolean; isClickable: boolean; isEnabled: boolean; isFocusable: boolean; isFocused: boolean; isLongClickable: boolean; isPassword: boolean; isScrollable: boolean; isSelected: boolean; packageName: string; resourceId: string; text: string; }; device_context: { display_metrics: { density: number; densityDpi: number; heightPixels: number; scaledDensity: number; widthPixels: number; }; filtering_params: { min_element_size: number; overlay_offset: number; }; screen_bounds: object; }; ime_tree: { boundsInScreen: object; children: a11_y_node[]; className: string; contentDescription: string; isCheckable: boolean; isChecked: boolean; isClickable: boolean; isEnabled: boolean; isFocusable: boolean; isFocused: boolean; isLongClickable: boolean; isPassword: boolean; isScrollable: boolean; isSelected: boolean; packageName: string; resourceId: string; text: string; }; phone_state: { isEditable: boolean; keyboardVisible: boolean; activityName?: string; currentApp?: string; focusedElement?: { className?: string; resourceId?: string; text?: string; }; packageName?: string; }; $schema?: string; }`\n\n  - `a11y_tree: { boundsInScreen: { bottom: number; left: number; right: number; top: number; }; children: { boundsInScreen: object; children: a11_y_node[]; className: string; contentDescription: string; isCheckable: boolean; isChecked: boolean; isClickable: boolean; isEnabled: boolean; isFocusable: boolean; isFocused: boolean; isLongClickable: boolean; isPassword: boolean; isScrollable: boolean; isSelected: boolean; packageName: string; resourceId: string; text: string; }[]; className: string; contentDescription: string; isCheckable: boolean; isChecked: boolean; isClickable: boolean; isEnabled: boolean; isFocusable: boolean; isFocused: boolean; isLongClickable: boolean; isPassword: boolean; isScrollable: boolean; isSelected: boolean; packageName: string; resourceId: string; text: string; }`\n  - `device_context: { display_metrics: { density: number; densityDpi: number; heightPixels: number; scaledDensity: number; widthPixels: number; }; filtering_params: { min_element_size: number; overlay_offset: number; }; screen_bounds: { height: number; width: number; }; }`\n  - `ime_tree: { boundsInScreen: { bottom: number; left: number; right: number; top: number; }; children: { boundsInScreen: object; children: a11_y_node[]; className: string; contentDescription: string; isCheckable: boolean; isChecked: boolean; isClickable: boolean; isEnabled: boolean; isFocusable: boolean; isFocused: boolean; isLongClickable: boolean; isPassword: boolean; isScrollable: boolean; isSelected: boolean; packageName: string; resourceId: string; text: string; }[]; className: string; contentDescription: string; isCheckable: boolean; isChecked: boolean; isClickable: boolean; isEnabled: boolean; isFocusable: boolean; isFocused: boolean; isLongClickable: boolean; isPassword: boolean; isScrollable: boolean; isSelected: boolean; packageName: string; resourceId: string; text: string; }`\n  - `phone_state: { isEditable: boolean; keyboardVisible: boolean; activityName?: string; currentApp?: string; focusedElement?: { className?: string; resourceId?: string; text?: string; }; packageName?: string; }`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.devices.state.ui('deviceId');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.state.ui',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.devices.state.ui('deviceId');\n\nconsole.log(response.a11y_tree);",
      },
      python: {
        method: 'devices.state.ui',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.devices.state.ui(\n    device_id="deviceId",\n)\nprint(response.a11y_tree)',
      },
      go: {
        method: 'client.Devices.State.Ui',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Devices.State.Ui(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceStateUiParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.A11yTree)\n}\n',
      },
      cli: {
        method: 'state ui',
        example: "mobilerun-cloud devices:state ui \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/ui-state \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'time',
    endpoint: '/devices/{deviceId}/time',
    httpMethod: 'get',
    summary: 'Device time',
    description: 'Device time',
    stainlessPath: '(resource) devices.state > (method) time',
    qualified: 'client.devices.state.time',
    params: ['deviceId: string;', 'X-Device-Display-ID?: number;'],
    response: 'string',
    markdown:
      "## time\n\n`client.devices.state.time(deviceId: string, X-Device-Display-ID?: number): string`\n\n**get** `/devices/{deviceId}/time`\n\nDevice time\n\n### Parameters\n\n- `deviceId: string`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.devices.state.time('deviceId');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.state.time',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.devices.state.time('deviceId');\n\nconsole.log(response);",
      },
      python: {
        method: 'devices.state.time',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.devices.state.time(\n    device_id="deviceId",\n)\nprint(response)',
      },
      go: {
        method: 'client.Devices.State.Time',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Devices.State.Time(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceStateTimeParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      cli: {
        method: 'state time',
        example: "mobilerun-cloud devices:state time \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/time \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/devices/{deviceId}/tasks',
    httpMethod: 'get',
    summary: 'List tasks for a device',
    description: 'List tasks for a device',
    stainlessPath: '(resource) devices.tasks > (method) list',
    qualified: 'client.devices.tasks.list',
    params: [
      'deviceId: string;',
      "orderBy?: 'id' | 'createdAt' | 'updatedAt' | 'assignedAt';",
      "orderByDirection?: 'asc' | 'desc';",
      'page?: number;',
      'pageSize?: number;',
    ],
    response:
      '{ items: { createdAt: string; taskId: string; updatedAt: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; $schema?: string; }',
    markdown:
      "## list\n\n`client.devices.tasks.list(deviceId: string, orderBy?: 'id' | 'createdAt' | 'updatedAt' | 'assignedAt', orderByDirection?: 'asc' | 'desc', page?: number, pageSize?: number): { items: object[]; pagination: meta; $schema?: string; }`\n\n**get** `/devices/{deviceId}/tasks`\n\nList tasks for a device\n\n### Parameters\n\n- `deviceId: string`\n\n- `orderBy?: 'id' | 'createdAt' | 'updatedAt' | 'assignedAt'`\n\n- `orderByDirection?: 'asc' | 'desc'`\n\n- `page?: number`\n\n- `pageSize?: number`\n\n### Returns\n\n- `{ items: { createdAt: string; taskId: string; updatedAt: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; $schema?: string; }`\n\n  - `items: { createdAt: string; taskId: string; updatedAt: string; }[]`\n  - `pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst tasks = await client.devices.tasks.list('deviceId');\n\nconsole.log(tasks);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.tasks.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst tasks = await client.devices.tasks.list('deviceId');\n\nconsole.log(tasks.items);",
      },
      python: {
        method: 'devices.tasks.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\ntasks = client.devices.tasks.list(\n    device_id="deviceId",\n)\nprint(tasks.items)',
      },
      go: {
        method: 'client.Devices.Tasks.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\ttasks, err := client.Devices.Tasks.List(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceTaskListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", tasks.Items)\n}\n',
      },
      cli: {
        method: 'tasks list',
        example: "mobilerun-cloud devices:tasks list \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/tasks \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'set',
    endpoint: '/devices/{deviceId}/timezone',
    httpMethod: 'post',
    summary: 'Set device timezone',
    description: 'Set device timezone',
    stainlessPath: '(resource) devices.timezone > (method) set',
    qualified: 'client.devices.timezone.set',
    params: ['deviceId: string;', 'timezone: string;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## set\n\n`client.devices.timezone.set(deviceId: string, timezone: string, X-Device-Display-ID?: number): void`\n\n**post** `/devices/{deviceId}/timezone`\n\nSet device timezone\n\n### Parameters\n\n- `deviceId: string`\n\n- `timezone: string`\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.timezone.set('deviceId', { timezone: 'timezone' })\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.timezone.set',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.timezone.set('deviceId', { timezone: 'timezone' });",
      },
      python: {
        method: 'devices.timezone.set',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.timezone.set(\n    device_id="deviceId",\n    timezone="timezone",\n)',
      },
      go: {
        method: 'client.Devices.Timezone.Set',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Timezone.Set(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceTimezoneSetParams{\n\t\t\tTimezone: "timezone",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'timezone set',
        example:
          "mobilerun-cloud devices:timezone set \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --timezone timezone",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/timezone \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "timezone": "timezone"\n        }\'',
      },
    },
  },
  {
    name: 'get',
    endpoint: '/devices/{deviceId}/timezone',
    httpMethod: 'get',
    summary: 'Get device timezone',
    description: 'Get device timezone',
    stainlessPath: '(resource) devices.timezone > (method) get',
    qualified: 'client.devices.timezone.get',
    params: ['deviceId: string;', 'X-Device-Display-ID?: number;'],
    response: '{ timezone: string; $schema?: string; }',
    markdown:
      "## get\n\n`client.devices.timezone.get(deviceId: string, X-Device-Display-ID?: number): { timezone: string; $schema?: string; }`\n\n**get** `/devices/{deviceId}/timezone`\n\nGet device timezone\n\n### Parameters\n\n- `deviceId: string`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `{ timezone: string; $schema?: string; }`\n\n  - `timezone: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst timezone = await client.devices.timezone.get('deviceId');\n\nconsole.log(timezone);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.timezone.get',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst timezone = await client.devices.timezone.get('deviceId');\n\nconsole.log(timezone.timezone);",
      },
      python: {
        method: 'devices.timezone.get',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\ntimezone = client.devices.timezone.get(\n    device_id="deviceId",\n)\nprint(timezone.timezone)',
      },
      go: {
        method: 'client.Devices.Timezone.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\ttimezone, err := client.Devices.Timezone.Get(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceTimezoneGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", timezone.Timezone)\n}\n',
      },
      cli: {
        method: 'timezone get',
        example:
          "mobilerun-cloud devices:timezone get \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/timezone \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'set',
    endpoint: '/devices/{deviceId}/language',
    httpMethod: 'post',
    summary: 'Set device language/locale',
    description: 'Set device language/locale',
    stainlessPath: '(resource) devices.language > (method) set',
    qualified: 'client.devices.language.set',
    params: ['deviceId: string;', 'locale: string;', 'restart?: boolean;', 'X-Device-Display-ID?: number;'],
    markdown:
      "## set\n\n`client.devices.language.set(deviceId: string, locale: string, restart?: boolean, X-Device-Display-ID?: number): void`\n\n**post** `/devices/{deviceId}/language`\n\nSet device language/locale\n\n### Parameters\n\n- `deviceId: string`\n\n- `locale: string`\n  BCP-47 locale: a 2–3 letter language tag, optionally followed by a 4-letter script and/or a 2-letter region (e.g. en-US, de-DE, ja-JP, zh-Hans-CN).\n\n- `restart?: boolean`\n  Restart zygote so the locale change takes full effect immediately. Without it, the locale is written but won't fully apply until the next reboot.\n\n- `X-Device-Display-ID?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.devices.language.set('deviceId', { locale: 'sqf-Kkif-BB' })\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.language.set',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.devices.language.set('deviceId', { locale: 'sqf-Kkif-BB' });",
      },
      python: {
        method: 'devices.language.set',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.devices.language.set(\n    device_id="deviceId",\n    locale="sqf-Kkif-BB",\n)',
      },
      go: {
        method: 'client.Devices.Language.Set',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Devices.Language.Set(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceLanguageSetParams{\n\t\t\tLocale: "sqf-Kkif-BB",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'language set',
        example:
          "mobilerun-cloud devices:language set \\\n  --api-key 'My API Key' \\\n  --device-id deviceId \\\n  --locale sqf-Kkif-BB",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/language \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "locale": "sqf-Kkif-BB"\n        }\'',
      },
    },
  },
  {
    name: 'get',
    endpoint: '/devices/{deviceId}/language',
    httpMethod: 'get',
    summary: 'Get device language/locale',
    description: 'Get device language/locale',
    stainlessPath: '(resource) devices.language > (method) get',
    qualified: 'client.devices.language.get',
    params: ['deviceId: string;', 'X-Device-Display-ID?: number;'],
    response: '{ locale: string; $schema?: string; }',
    markdown:
      "## get\n\n`client.devices.language.get(deviceId: string, X-Device-Display-ID?: number): { locale: string; $schema?: string; }`\n\n**get** `/devices/{deviceId}/language`\n\nGet device language/locale\n\n### Parameters\n\n- `deviceId: string`\n\n- `X-Device-Display-ID?: number`\n\n### Returns\n\n- `{ locale: string; $schema?: string; }`\n\n  - `locale: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst language = await client.devices.language.get('deviceId');\n\nconsole.log(language);\n```",
    perLanguage: {
      typescript: {
        method: 'client.devices.language.get',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst language = await client.devices.language.get('deviceId');\n\nconsole.log(language.locale);",
      },
      python: {
        method: 'devices.language.get',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nlanguage = client.devices.language.get(\n    device_id="deviceId",\n)\nprint(language.locale)',
      },
      go: {
        method: 'client.Devices.Language.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tlanguage, err := client.Devices.Language.Get(\n\t\tcontext.TODO(),\n\t\t"deviceId",\n\t\tmobileruncloud.DeviceLanguageGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", language.Locale)\n}\n',
      },
      cli: {
        method: 'language get',
        example:
          "mobilerun-cloud devices:language get \\\n  --api-key 'My API Key' \\\n  --device-id deviceId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/devices/$DEVICE_ID/language \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'get_sample_data',
    endpoint: '/hooks/sample',
    httpMethod: 'get',
    summary: 'Get Sample Data',
    description: 'Get sample hook data for Zapier Perform List (testing/field mapping).',
    stainlessPath: '(resource) hooks > (method) get_sample_data',
    qualified: 'client.hooks.getSampleData',
    response:
      '{ id: string; createdAt: string; events: string[]; state: string; url: string; updatedAt?: string; }[]',
    markdown:
      "## get_sample_data\n\n`client.hooks.getSampleData(): { id: string; createdAt: string; events: string[]; state: string; url: string; updatedAt?: string; }[]`\n\n**get** `/hooks/sample`\n\nGet sample hook data for Zapier Perform List (testing/field mapping).\n\n### Returns\n\n- `{ id: string; createdAt: string; events: string[]; state: string; url: string; updatedAt?: string; }[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.hooks.getSampleData();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hooks.getSampleData',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hooks.getSampleData();\n\nconsole.log(response);",
      },
      python: {
        method: 'hooks.get_sample_data',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hooks.get_sample_data()\nprint(response)',
      },
      go: {
        method: 'client.Hooks.GetSampleData',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Hooks.GetSampleData(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      cli: {
        method: 'hooks get_sample_data',
        example: "mobilerun-cloud hooks get-sample-data \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/hooks/sample \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/hooks',
    httpMethod: 'get',
    summary: 'List Hooks',
    description: 'List hooks belonging to the requesting user (paginated).',
    stainlessPath: '(resource) hooks > (method) list',
    qualified: 'client.hooks.list',
    params: [
      'orderBy?: string;',
      "orderByDirection?: 'asc' | 'desc';",
      'page?: number;',
      'pageSize?: number;',
    ],
    response:
      "{ items: { service: 'zapier' | 'n8n' | 'make' | 'internal' | 'other'; url: string; userId: string; id?: string; createdAt?: string; events?: 'queued' | 'created' | 'running' | 'cancelling' | 'paused' | 'completed' | 'failed' | 'cancelled'[]; state?: 'active' | 'disabled' | 'deleted'; updatedAt?: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }",
    markdown:
      "## list\n\n`client.hooks.list(orderBy?: string, orderByDirection?: 'asc' | 'desc', page?: number, pageSize?: number): { items: object[]; pagination: pagination_meta; }`\n\n**get** `/hooks`\n\nList hooks belonging to the requesting user (paginated).\n\n### Parameters\n\n- `orderBy?: string`\n\n- `orderByDirection?: 'asc' | 'desc'`\n\n- `page?: number`\n\n- `pageSize?: number`\n\n### Returns\n\n- `{ items: { service: 'zapier' | 'n8n' | 'make' | 'internal' | 'other'; url: string; userId: string; id?: string; createdAt?: string; events?: 'queued' | 'created' | 'running' | 'cancelling' | 'paused' | 'completed' | 'failed' | 'cancelled'[]; state?: 'active' | 'disabled' | 'deleted'; updatedAt?: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }`\n\n  - `items: { service: 'zapier' | 'n8n' | 'make' | 'internal' | 'other'; url: string; userId: string; id?: string; createdAt?: string; events?: 'queued' | 'created' | 'running' | 'cancelling' | 'paused' | 'completed' | 'failed' | 'cancelled'[]; state?: 'active' | 'disabled' | 'deleted'; updatedAt?: string; }[]`\n  - `pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst hooks = await client.hooks.list();\n\nconsole.log(hooks);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hooks.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst hooks = await client.hooks.list();\n\nconsole.log(hooks.items);",
      },
      python: {
        method: 'hooks.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nhooks = client.hooks.list()\nprint(hooks.items)',
      },
      go: {
        method: 'client.Hooks.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\thooks, err := client.Hooks.List(context.TODO(), mobileruncloud.HookListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", hooks.Items)\n}\n',
      },
      cli: {
        method: 'hooks list',
        example: "mobilerun-cloud hooks list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/hooks \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'perform',
    endpoint: '/hooks/perform',
    httpMethod: 'post',
    summary: 'Perform Hook',
    description: 'Zapier Perform endpoint - processes webhook payloads.',
    stainlessPath: '(resource) hooks > (method) perform',
    qualified: 'client.hooks.perform',
    params: ['body: object;'],
    response: 'object[]',
    markdown:
      "## perform\n\n`client.hooks.perform(body: object): object[]`\n\n**post** `/hooks/perform`\n\nZapier Perform endpoint - processes webhook payloads.\n\n### Parameters\n\n- `body: object`\n\n### Returns\n\n- `object[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.hooks.perform({ body: { foo: 'bar' } });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hooks.perform',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hooks.perform({ body: { foo: 'bar' } });\n\nconsole.log(response);",
      },
      python: {
        method: 'hooks.perform',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hooks.perform(\n    body={\n        "foo": "bar"\n    },\n)\nprint(response)',
      },
      go: {
        method: 'client.Hooks.Perform',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Hooks.Perform(context.TODO(), mobileruncloud.HookPerformParams{\n\t\tBody: map[string]any{\n\t\t\t"foo": "bar",\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      cli: {
        method: 'hooks perform',
        example: "mobilerun-cloud hooks perform \\\n  --api-key 'My API Key' \\\n  --body '{foo: bar}'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/hooks/perform \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "foo": "bar"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/hooks/{hook_id}',
    httpMethod: 'get',
    summary: 'Get Hook',
    description: 'Get a hook subscription by id.',
    stainlessPath: '(resource) hooks > (method) retrieve',
    qualified: 'client.hooks.retrieve',
    params: ['hook_id: string;'],
    response:
      "{ service: 'zapier' | 'n8n' | 'make' | 'internal' | 'other'; url: string; userId: string; id?: string; createdAt?: string; events?: 'queued' | 'created' | 'running' | 'cancelling' | 'paused' | 'completed' | 'failed' | 'cancelled'[]; state?: 'active' | 'disabled' | 'deleted'; updatedAt?: string; }",
    markdown:
      "## retrieve\n\n`client.hooks.retrieve(hook_id: string): { service: 'zapier' | 'n8n' | 'make' | 'internal' | 'other'; url: string; userId: string; id?: string; createdAt?: string; events?: task_status[]; state?: 'active' | 'disabled' | 'deleted'; updatedAt?: string; }`\n\n**get** `/hooks/{hook_id}`\n\nGet a hook subscription by id.\n\n### Parameters\n\n- `hook_id: string`\n\n### Returns\n\n- `{ service: 'zapier' | 'n8n' | 'make' | 'internal' | 'other'; url: string; userId: string; id?: string; createdAt?: string; events?: 'queued' | 'created' | 'running' | 'cancelling' | 'paused' | 'completed' | 'failed' | 'cancelled'[]; state?: 'active' | 'disabled' | 'deleted'; updatedAt?: string; }`\n\n  - `service: 'zapier' | 'n8n' | 'make' | 'internal' | 'other'`\n  - `url: string`\n  - `userId: string`\n  - `id?: string`\n  - `createdAt?: string`\n  - `events?: 'queued' | 'created' | 'running' | 'cancelling' | 'paused' | 'completed' | 'failed' | 'cancelled'[]`\n  - `state?: 'active' | 'disabled' | 'deleted'`\n  - `updatedAt?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst hook = await client.hooks.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(hook);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hooks.retrieve',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst hook = await client.hooks.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(hook.id);",
      },
      python: {
        method: 'hooks.retrieve',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nhook = client.hooks.retrieve(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(hook.id)',
      },
      go: {
        method: 'client.Hooks.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\thook, err := client.Hooks.Get(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", hook.ID)\n}\n',
      },
      cli: {
        method: 'hooks retrieve',
        example:
          "mobilerun-cloud hooks retrieve \\\n  --api-key 'My API Key' \\\n  --hook-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/hooks/$HOOK_ID \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'subscribe',
    endpoint: '/hooks/subscribe',
    httpMethod: 'post',
    summary: 'Subscribe',
    description: 'Subscribe the current user to a webhook URL. Returns subscription id.',
    stainlessPath: '(resource) hooks > (method) subscribe',
    qualified: 'client.hooks.subscribe',
    params: ['targetUrl: string;', 'events?: string[];', 'service?: string;'],
    response: '{ id: string; subscribed: boolean; url: string; events?: string[]; service?: string; }',
    markdown:
      "## subscribe\n\n`client.hooks.subscribe(targetUrl: string, events?: string[], service?: string): { id: string; subscribed: boolean; url: string; events?: string[]; service?: string; }`\n\n**post** `/hooks/subscribe`\n\nSubscribe the current user to a webhook URL. Returns subscription id.\n\n### Parameters\n\n- `targetUrl: string`\n  The webhook URL to send notifications to\n\n- `events?: string[]`\n  List of task events to subscribe to (created, running, completed, failed, cancelled, paused)\n\n- `service?: string`\n  Service that receives the webhook\n\n### Returns\n\n- `{ id: string; subscribed: boolean; url: string; events?: string[]; service?: string; }`\n  Response model after successful subscription.\n\n  - `id: string`\n  - `subscribed: boolean`\n  - `url: string`\n  - `events?: string[]`\n  - `service?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.hooks.subscribe({ targetUrl: 'https://example.com' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hooks.subscribe',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hooks.subscribe({ targetUrl: 'https://example.com' });\n\nconsole.log(response.id);",
      },
      python: {
        method: 'hooks.subscribe',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hooks.subscribe(\n    target_url="https://example.com",\n)\nprint(response.id)',
      },
      go: {
        method: 'client.Hooks.Subscribe',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Hooks.Subscribe(context.TODO(), mobileruncloud.HookSubscribeParams{\n\t\tTargetURL: "https://example.com",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      cli: {
        method: 'hooks subscribe',
        example:
          "mobilerun-cloud hooks subscribe \\\n  --api-key 'My API Key' \\\n  --target-url https://example.com",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/hooks/subscribe \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "targetUrl": "https://example.com"\n        }\'',
      },
    },
  },
  {
    name: 'unsubscribe',
    endpoint: '/hooks/{hook_id}/unsubscribe',
    httpMethod: 'post',
    summary: 'Unsubscribe',
    description:
      'Unsubscribe a previously created subscription by id.\n\nPermanently deletes the subscription if it belongs to the user.',
    stainlessPath: '(resource) hooks > (method) unsubscribe',
    qualified: 'client.hooks.unsubscribe',
    params: ['hook_id: string;'],
    response: '{ id: string; unsubscribed: boolean; }',
    markdown:
      "## unsubscribe\n\n`client.hooks.unsubscribe(hook_id: string): { id: string; unsubscribed: boolean; }`\n\n**post** `/hooks/{hook_id}/unsubscribe`\n\nUnsubscribe a previously created subscription by id.\n\nPermanently deletes the subscription if it belongs to the user.\n\n### Parameters\n\n- `hook_id: string`\n\n### Returns\n\n- `{ id: string; unsubscribed: boolean; }`\n  Response model after successful unsubscription.\n\n  - `id: string`\n  - `unsubscribed: boolean`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.hooks.unsubscribe('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hooks.unsubscribe',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hooks.unsubscribe('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.id);",
      },
      python: {
        method: 'hooks.unsubscribe',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hooks.unsubscribe(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.id)',
      },
      go: {
        method: 'client.Hooks.Unsubscribe',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Hooks.Unsubscribe(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      cli: {
        method: 'hooks unsubscribe',
        example:
          "mobilerun-cloud hooks unsubscribe \\\n  --api-key 'My API Key' \\\n  --hook-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/hooks/$HOOK_ID/unsubscribe \\\n    -X POST \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/hooks/{hook_id}/edit',
    httpMethod: 'post',
    summary: 'Edit Hook',
    description:
      'Edit a hook subscription (events or state).\n\nAllows updating the events filter and/or the state of a hook.',
    stainlessPath: '(resource) hooks > (method) update',
    qualified: 'client.hooks.update',
    params: ['hook_id: string;', 'events?: string[];', 'state?: string;'],
    response: '{ id: string; state: string; updated: boolean; url: string; events?: string[]; }',
    markdown:
      "## update\n\n`client.hooks.update(hook_id: string, events?: string[], state?: string): { id: string; state: string; updated: boolean; url: string; events?: string[]; }`\n\n**post** `/hooks/{hook_id}/edit`\n\nEdit a hook subscription (events or state).\n\nAllows updating the events filter and/or the state of a hook.\n\n### Parameters\n\n- `hook_id: string`\n\n- `events?: string[]`\n  Updated list of events to subscribe to\n\n- `state?: string`\n  Updated hook state (active, disabled, deleted)\n\n### Returns\n\n- `{ id: string; state: string; updated: boolean; url: string; events?: string[]; }`\n  Response model after successfully editing a hook.\n\n  - `id: string`\n  - `state: string`\n  - `updated: boolean`\n  - `url: string`\n  - `events?: string[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst hook = await client.hooks.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(hook);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hooks.update',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst hook = await client.hooks.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(hook.id);",
      },
      python: {
        method: 'hooks.update',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nhook = client.hooks.update(\n    hook_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(hook.id)',
      },
      go: {
        method: 'client.Hooks.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\thook, err := client.Hooks.Update(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tmobileruncloud.HookUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", hook.ID)\n}\n',
      },
      cli: {
        method: 'hooks update',
        example:
          "mobilerun-cloud hooks update \\\n  --api-key 'My API Key' \\\n  --hook-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          "curl https://api.mobilerun.ai/v1/hooks/$HOOK_ID/edit \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MOBILERUN_CLOUD_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'test',
    endpoint: '/hooks/{hook_id}/test',
    httpMethod: 'post',
    summary: 'Test Hook',
    description:
      "Send a test event to a webhook endpoint.\n\nDelivers a sample payload to the hook's URL with a single attempt\n(no retries) for fast feedback.",
    stainlessPath: '(resource) hooks > (method) test',
    qualified: 'client.hooks.test',
    params: ['hook_id: string;', 'event?: string;'],
    response: '{ id: string; success: boolean; error?: string; statusCode?: number; }',
    markdown:
      "## test\n\n`client.hooks.test(hook_id: string, event?: string): { id: string; success: boolean; error?: string; statusCode?: number; }`\n\n**post** `/hooks/{hook_id}/test`\n\nSend a test event to a webhook endpoint.\n\nDelivers a sample payload to the hook's URL with a single attempt\n(no retries) for fast feedback.\n\n### Parameters\n\n- `hook_id: string`\n\n- `event?: string`\n  Event type to simulate (default: completed)\n\n### Returns\n\n- `{ id: string; success: boolean; error?: string; statusCode?: number; }`\n  Response after attempting test delivery.\n\n  - `id: string`\n  - `success: boolean`\n  - `error?: string`\n  - `statusCode?: number`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.hooks.test('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.hooks.test',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hooks.test('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.id);",
      },
      python: {
        method: 'hooks.test',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hooks.test(\n    hook_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.id)',
      },
      go: {
        method: 'client.Hooks.Test',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Hooks.Test(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tmobileruncloud.HookTestParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      cli: {
        method: 'hooks test',
        example:
          "mobilerun-cloud hooks test \\\n  --api-key 'My API Key' \\\n  --hook-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          "curl https://api.mobilerun.ai/v1/hooks/$HOOK_ID/test \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $MOBILERUN_CLOUD_API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/models',
    httpMethod: 'get',
    summary: 'Get all LLM models',
    description: 'Get all LLM models',
    stainlessPath: '(resource) models > (method) list',
    qualified: 'client.models.list',
    response:
      '{ data?: { id?: string; created?: number; object?: string; owned_by?: string; }[]; object?: string; }',
    markdown:
      "## list\n\n`client.models.list(): { data?: object[]; object?: string; }`\n\n**get** `/models`\n\nGet all LLM models\n\n### Returns\n\n- `{ data?: { id?: string; created?: number; object?: string; owned_by?: string; }[]; object?: string; }`\n\n  - `data?: { id?: string; created?: number; object?: string; owned_by?: string; }[]`\n  - `object?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst models = await client.models.list();\n\nconsole.log(models);\n```",
    perLanguage: {
      typescript: {
        method: 'client.models.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst models = await client.models.list();\n\nconsole.log(models.data);",
      },
      python: {
        method: 'models.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nmodels = client.models.list()\nprint(models.data)',
      },
      go: {
        method: 'client.Models.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tmodels, err := client.Models.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", models.Data)\n}\n',
      },
      cli: {
        method: 'models list',
        example: "mobilerun-cloud models list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/models \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/profiles',
    httpMethod: 'post',
    summary: 'Create a new device profile',
    description: 'Create a new device profile',
    stainlessPath: '(resource) profiles > (method) create',
    qualified: 'client.profiles.create',
    params: [
      'name: string;',
      'spec: { $schema?: string; androidVersion?: number; apps?: string[]; carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }; country?: string; files?: string[]; identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }; locale?: string; location?: { latitude: number; longitude: number; $schema?: string; }; name?: string; proxy?: { name?: string; smartIp?: boolean; socks5?: object; }; timezone?: string; };',
    ],
    response:
      '{ id: string; createdAt: string; name: string; spec: { $schema?: string; androidVersion?: number; apps?: string[]; carrier?: device_carrier; country?: string; files?: string[]; identifiers?: device_identifiers; locale?: string; location?: location; name?: string; proxy?: object; timezone?: string; }; updatedAt: string; userId: string; $schema?: string; }',
    markdown:
      "## create\n\n`client.profiles.create(name: string, spec: { $schema?: string; androidVersion?: number; apps?: string[]; carrier?: device_carrier; country?: string; files?: string[]; identifiers?: device_identifiers; locale?: string; location?: location; name?: string; proxy?: object; timezone?: string; }): { id: string; createdAt: string; name: string; spec: device_spec; updatedAt: string; userId: string; $schema?: string; }`\n\n**post** `/profiles`\n\nCreate a new device profile\n\n### Parameters\n\n- `name: string`\n  Profile name\n\n- `spec: { $schema?: string; androidVersion?: number; apps?: string[]; carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }; country?: string; files?: string[]; identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }; locale?: string; location?: { latitude: number; longitude: number; $schema?: string; }; name?: string; proxy?: { name?: string; smartIp?: boolean; socks5?: object; }; timezone?: string; }`\n  Device specification\n  - `$schema?: string`\n    A URL to the JSON Schema for this object.\n  - `androidVersion?: number`\n  - `apps?: string[]`\n  - `carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }`\n  - `country?: string`\n  - `files?: string[]`\n  - `identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }`\n  - `locale?: string`\n  - `location?: { latitude: number; longitude: number; $schema?: string; }`\n  - `name?: string`\n  - `proxy?: { name?: string; smartIp?: boolean; socks5?: { host: string; password: string; port: number; user: string; }; }`\n  - `timezone?: string`\n\n### Returns\n\n- `{ id: string; createdAt: string; name: string; spec: { $schema?: string; androidVersion?: number; apps?: string[]; carrier?: device_carrier; country?: string; files?: string[]; identifiers?: device_identifiers; locale?: string; location?: location; name?: string; proxy?: object; timezone?: string; }; updatedAt: string; userId: string; $schema?: string; }`\n\n  - `id: string`\n  - `createdAt: string`\n  - `name: string`\n  - `spec: { $schema?: string; androidVersion?: number; apps?: string[]; carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }; country?: string; files?: string[]; identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }; locale?: string; location?: { latitude: number; longitude: number; $schema?: string; }; name?: string; proxy?: { name?: string; smartIp?: boolean; socks5?: object; }; timezone?: string; }`\n  - `updatedAt: string`\n  - `userId: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst profile = await client.profiles.create({\n  name: 'x',\n  spec: {},\n});\n\nconsole.log(profile);\n```",
    perLanguage: {
      typescript: {
        method: 'client.profiles.create',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst profile = await client.profiles.create({\n  name: 'x',\n  spec: {},\n});\n\nconsole.log(profile.id);",
      },
      python: {
        method: 'profiles.create',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nprofile = client.profiles.create(\n    name="x",\n    spec={},\n)\nprint(profile.id)',
      },
      go: {
        method: 'client.Profiles.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n\t"github.com/stainless-sdks/droidrun-cloud-go/shared"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tprofile, err := client.Profiles.New(context.TODO(), mobileruncloud.ProfileNewParams{\n\t\tName: "x",\n\t\tSpec: shared.DeviceSpecParam{},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", profile.ID)\n}\n',
      },
      cli: {
        method: 'profiles create',
        example:
          "mobilerun-cloud profiles create \\\n  --api-key 'My API Key' \\\n  --name x \\\n  --spec '{}'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/profiles \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "name": "x",\n          "spec": {}\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/profiles/{profileId}',
    httpMethod: 'delete',
    summary: 'Delete a device profile',
    description: 'Delete a device profile',
    stainlessPath: '(resource) profiles > (method) delete',
    qualified: 'client.profiles.delete',
    params: ['profileId: string;'],
    response: '{ message: string; $schema?: string; }',
    markdown:
      "## delete\n\n`client.profiles.delete(profileId: string): { message: string; $schema?: string; }`\n\n**delete** `/profiles/{profileId}`\n\nDelete a device profile\n\n### Parameters\n\n- `profileId: string`\n\n### Returns\n\n- `{ message: string; $schema?: string; }`\n\n  - `message: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst profile = await client.profiles.delete('profileId');\n\nconsole.log(profile);\n```",
    perLanguage: {
      typescript: {
        method: 'client.profiles.delete',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst profile = await client.profiles.delete('profileId');\n\nconsole.log(profile.message);",
      },
      python: {
        method: 'profiles.delete',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nprofile = client.profiles.delete(\n    "profileId",\n)\nprint(profile.message)',
      },
      go: {
        method: 'client.Profiles.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tprofile, err := client.Profiles.Delete(context.TODO(), "profileId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", profile.Message)\n}\n',
      },
      cli: {
        method: 'profiles delete',
        example: "mobilerun-cloud profiles delete \\\n  --api-key 'My API Key' \\\n  --profile-id profileId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/profiles/$PROFILE_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/profiles',
    httpMethod: 'get',
    summary: 'List device profiles',
    description: 'List device profiles',
    stainlessPath: '(resource) profiles > (method) list',
    qualified: 'client.profiles.list',
    params: [
      'name?: string;',
      "orderBy?: 'name' | 'created_at' | 'updated_at';",
      "orderByDirection?: 'asc' | 'desc';",
      'page?: number;',
      'pageSize?: number;',
    ],
    response:
      '{ items: { id: string; createdAt: string; name: string; spec: device_spec; updatedAt: string; userId: string; $schema?: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; $schema?: string; }',
    markdown:
      "## list\n\n`client.profiles.list(name?: string, orderBy?: 'name' | 'created_at' | 'updated_at', orderByDirection?: 'asc' | 'desc', page?: number, pageSize?: number): { items: profile[]; pagination: meta; $schema?: string; }`\n\n**get** `/profiles`\n\nList device profiles\n\n### Parameters\n\n- `name?: string`\n\n- `orderBy?: 'name' | 'created_at' | 'updated_at'`\n\n- `orderByDirection?: 'asc' | 'desc'`\n\n- `page?: number`\n\n- `pageSize?: number`\n\n### Returns\n\n- `{ items: { id: string; createdAt: string; name: string; spec: device_spec; updatedAt: string; userId: string; $schema?: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; $schema?: string; }`\n\n  - `items: { id: string; createdAt: string; name: string; spec: { $schema?: string; androidVersion?: number; apps?: string[]; carrier?: device_carrier; country?: string; files?: string[]; identifiers?: device_identifiers; locale?: string; location?: location; name?: string; proxy?: object; timezone?: string; }; updatedAt: string; userId: string; $schema?: string; }[]`\n  - `pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst profiles = await client.profiles.list();\n\nconsole.log(profiles);\n```",
    perLanguage: {
      typescript: {
        method: 'client.profiles.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst profiles = await client.profiles.list();\n\nconsole.log(profiles.items);",
      },
      python: {
        method: 'profiles.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nprofiles = client.profiles.list()\nprint(profiles.items)',
      },
      go: {
        method: 'client.Profiles.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tprofiles, err := client.Profiles.List(context.TODO(), mobileruncloud.ProfileListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", profiles.Items)\n}\n',
      },
      cli: {
        method: 'profiles list',
        example: "mobilerun-cloud profiles list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/profiles \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/profiles/{profileId}',
    httpMethod: 'get',
    summary: 'Get device profile by ID',
    description: 'Get device profile by ID',
    stainlessPath: '(resource) profiles > (method) retrieve',
    qualified: 'client.profiles.retrieve',
    params: ['profileId: string;'],
    response:
      '{ id: string; createdAt: string; name: string; spec: { $schema?: string; androidVersion?: number; apps?: string[]; carrier?: device_carrier; country?: string; files?: string[]; identifiers?: device_identifiers; locale?: string; location?: location; name?: string; proxy?: object; timezone?: string; }; updatedAt: string; userId: string; $schema?: string; }',
    markdown:
      "## retrieve\n\n`client.profiles.retrieve(profileId: string): { id: string; createdAt: string; name: string; spec: device_spec; updatedAt: string; userId: string; $schema?: string; }`\n\n**get** `/profiles/{profileId}`\n\nGet device profile by ID\n\n### Parameters\n\n- `profileId: string`\n\n### Returns\n\n- `{ id: string; createdAt: string; name: string; spec: { $schema?: string; androidVersion?: number; apps?: string[]; carrier?: device_carrier; country?: string; files?: string[]; identifiers?: device_identifiers; locale?: string; location?: location; name?: string; proxy?: object; timezone?: string; }; updatedAt: string; userId: string; $schema?: string; }`\n\n  - `id: string`\n  - `createdAt: string`\n  - `name: string`\n  - `spec: { $schema?: string; androidVersion?: number; apps?: string[]; carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }; country?: string; files?: string[]; identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }; locale?: string; location?: { latitude: number; longitude: number; $schema?: string; }; name?: string; proxy?: { name?: string; smartIp?: boolean; socks5?: object; }; timezone?: string; }`\n  - `updatedAt: string`\n  - `userId: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst profile = await client.profiles.retrieve('profileId');\n\nconsole.log(profile);\n```",
    perLanguage: {
      typescript: {
        method: 'client.profiles.retrieve',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst profile = await client.profiles.retrieve('profileId');\n\nconsole.log(profile.id);",
      },
      python: {
        method: 'profiles.retrieve',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nprofile = client.profiles.retrieve(\n    "profileId",\n)\nprint(profile.id)',
      },
      go: {
        method: 'client.Profiles.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tprofile, err := client.Profiles.Get(context.TODO(), "profileId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", profile.ID)\n}\n',
      },
      cli: {
        method: 'profiles retrieve',
        example:
          "mobilerun-cloud profiles retrieve \\\n  --api-key 'My API Key' \\\n  --profile-id profileId",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/profiles/$PROFILE_ID \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/profiles/{profileId}',
    httpMethod: 'put',
    summary: 'Update a device profile',
    description: 'Update a device profile',
    stainlessPath: '(resource) profiles > (method) update',
    qualified: 'client.profiles.update',
    params: [
      'profileId: string;',
      'name: string;',
      'spec: { $schema?: string; androidVersion?: number; apps?: string[]; carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }; country?: string; files?: string[]; identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }; locale?: string; location?: { latitude: number; longitude: number; $schema?: string; }; name?: string; proxy?: { name?: string; smartIp?: boolean; socks5?: object; }; timezone?: string; };',
    ],
    response:
      '{ id: string; createdAt: string; name: string; spec: { $schema?: string; androidVersion?: number; apps?: string[]; carrier?: device_carrier; country?: string; files?: string[]; identifiers?: device_identifiers; locale?: string; location?: location; name?: string; proxy?: object; timezone?: string; }; updatedAt: string; userId: string; $schema?: string; }',
    markdown:
      "## update\n\n`client.profiles.update(profileId: string, name: string, spec: { $schema?: string; androidVersion?: number; apps?: string[]; carrier?: device_carrier; country?: string; files?: string[]; identifiers?: device_identifiers; locale?: string; location?: location; name?: string; proxy?: object; timezone?: string; }): { id: string; createdAt: string; name: string; spec: device_spec; updatedAt: string; userId: string; $schema?: string; }`\n\n**put** `/profiles/{profileId}`\n\nUpdate a device profile\n\n### Parameters\n\n- `profileId: string`\n\n- `name: string`\n  Profile name\n\n- `spec: { $schema?: string; androidVersion?: number; apps?: string[]; carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }; country?: string; files?: string[]; identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }; locale?: string; location?: { latitude: number; longitude: number; $schema?: string; }; name?: string; proxy?: { name?: string; smartIp?: boolean; socks5?: object; }; timezone?: string; }`\n  Device specification\n  - `$schema?: string`\n    A URL to the JSON Schema for this object.\n  - `androidVersion?: number`\n  - `apps?: string[]`\n  - `carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }`\n  - `country?: string`\n  - `files?: string[]`\n  - `identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }`\n  - `locale?: string`\n  - `location?: { latitude: number; longitude: number; $schema?: string; }`\n  - `name?: string`\n  - `proxy?: { name?: string; smartIp?: boolean; socks5?: { host: string; password: string; port: number; user: string; }; }`\n  - `timezone?: string`\n\n### Returns\n\n- `{ id: string; createdAt: string; name: string; spec: { $schema?: string; androidVersion?: number; apps?: string[]; carrier?: device_carrier; country?: string; files?: string[]; identifiers?: device_identifiers; locale?: string; location?: location; name?: string; proxy?: object; timezone?: string; }; updatedAt: string; userId: string; $schema?: string; }`\n\n  - `id: string`\n  - `createdAt: string`\n  - `name: string`\n  - `spec: { $schema?: string; androidVersion?: number; apps?: string[]; carrier?: { GsmOperatorAlpha: string; GsmOperatorNumeric: number; GsmSimOperatorAlpha: string; GsmSimOperatorIsoCountry: string; GsmSimOperatorNumeric: number; PersistSysTimezone: string; }; country?: string; files?: string[]; identifiers?: { BootloaderSerialNumber: string; IdentifierAndroidID: string; IdentifierAppSetID: string; IdentifierBluetoothMAC: string; IdentifierGAID: string; IdentifierGSFID: string; IdentifierICCID: string; IdentifierIMEI: string; IdentifierIMSI: string; IdentifierMediaDRMID: string; IdentifierMEID: string; IdentifierPhoneNumber: string; IdentifierSerial: string; IdentifierWifiMAC: string; SerialNumber: string; }; locale?: string; location?: { latitude: number; longitude: number; $schema?: string; }; name?: string; proxy?: { name?: string; smartIp?: boolean; socks5?: object; }; timezone?: string; }`\n  - `updatedAt: string`\n  - `userId: string`\n  - `$schema?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst profile = await client.profiles.update('profileId', {\n  name: 'x',\n  spec: {},\n});\n\nconsole.log(profile);\n```",
    perLanguage: {
      typescript: {
        method: 'client.profiles.update',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst profile = await client.profiles.update('profileId', {\n  name: 'x',\n  spec: {},\n});\n\nconsole.log(profile.id);",
      },
      python: {
        method: 'profiles.update',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nprofile = client.profiles.update(\n    profile_id="profileId",\n    name="x",\n    spec={},\n)\nprint(profile.id)',
      },
      go: {
        method: 'client.Profiles.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n\t"github.com/stainless-sdks/droidrun-cloud-go/shared"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tprofile, err := client.Profiles.Update(\n\t\tcontext.TODO(),\n\t\t"profileId",\n\t\tmobileruncloud.ProfileUpdateParams{\n\t\t\tName: "x",\n\t\t\tSpec: shared.DeviceSpecParam{},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", profile.ID)\n}\n',
      },
      cli: {
        method: 'profiles update',
        example:
          "mobilerun-cloud profiles update \\\n  --api-key 'My API Key' \\\n  --profile-id profileId \\\n  --name x \\\n  --spec '{}'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/profiles/$PROFILE_ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "name": "x",\n          "spec": {}\n        }\'',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/proxies',
    httpMethod: 'post',
    summary: 'Create a new proxy config',
    description: 'Create a new proxy config',
    stainlessPath: '(resource) proxies > (method) create',
    qualified: 'client.proxies.create',
    params: [
      "{ host: string; name: string; password: string; port: number; protocol: 'socks5'; user: string; } | { config: string; name: string; protocol: 'wireguard'; };",
    ],
    response:
      "{ data: { host: string; name: string; password: string; port: number; protocol: 'socks5'; proxyId: string; user: string; } | { config: string; name: string; protocol: 'wireguard'; proxyId: string; }; message: string; success: true; }",
    perLanguage: {
      typescript: {
        method: 'client.proxies.create',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst proxy = await client.proxies.create({\n  host: 'x',\n  name: 'xxx',\n  password: 'x',\n  port: 1,\n  protocol: 'socks5',\n  user: 'x',\n});\n\nconsole.log(proxy.data);",
      },
      python: {
        method: 'proxies.create',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nproxy = client.proxies.create(\n    host="x",\n    name="xxx",\n    password="x",\n    port=1,\n    protocol="socks5",\n    user="x",\n)\nprint(proxy.data)',
      },
      go: {
        method: 'client.Proxies.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproxy, err := client.Proxies.New(context.TODO(), mobileruncloud.ProxyNewParams{\n\t\tOfSocks5: &mobileruncloud.ProxyNewParamsBodySocks5{\n\t\t\tHost:     "x",\n\t\t\tName:     "xxx",\n\t\t\tPassword: "x",\n\t\t\tPort:     1,\n\t\t\tUser:     "x",\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", proxy.Data)\n}\n',
      },
      cli: {
        method: 'proxies create',
        example:
          "mobilerun-cloud proxies create \\\n  --api-key 'My API Key' \\\n  --host x \\\n  --name xxx \\\n  --password x \\\n  --port 1 \\\n  --protocol socks5 \\\n  --user x \\\n  --config x",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/proxies \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "host": "x",\n          "name": "xxx",\n          "password": "x",\n          "port": 1,\n          "protocol": "socks5",\n          "user": "x"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/proxies/{proxyId}',
    httpMethod: 'delete',
    summary: 'Delete a proxy config',
    description: 'Delete a proxy config',
    stainlessPath: '(resource) proxies > (method) delete',
    qualified: 'client.proxies.delete',
    params: ['proxyId: string;'],
    response:
      "{ data: { host: string; name: string; password: string; port: number; protocol: 'socks5'; proxyId: string; user: string; } | { config: string; name: string; protocol: 'wireguard'; proxyId: string; }; message: string; success: true; }",
    markdown:
      "## delete\n\n`client.proxies.delete(proxyId: string): { data: proxy_config; message: string; success: true; }`\n\n**delete** `/proxies/{proxyId}`\n\nDelete a proxy config\n\n### Parameters\n\n- `proxyId: string`\n\n### Returns\n\n- `{ data: { host: string; name: string; password: string; port: number; protocol: 'socks5'; proxyId: string; user: string; } | { config: string; name: string; protocol: 'wireguard'; proxyId: string; }; message: string; success: true; }`\n\n  - `data: { host: string; name: string; password: string; port: number; protocol: 'socks5'; proxyId: string; user: string; } | { config: string; name: string; protocol: 'wireguard'; proxyId: string; }`\n  - `message: string`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst proxy = await client.proxies.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(proxy);\n```",
    perLanguage: {
      typescript: {
        method: 'client.proxies.delete',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst proxy = await client.proxies.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(proxy.data);",
      },
      python: {
        method: 'proxies.delete',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nproxy = client.proxies.delete(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(proxy.data)',
      },
      go: {
        method: 'client.Proxies.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproxy, err := client.Proxies.Delete(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", proxy.Data)\n}\n',
      },
      cli: {
        method: 'proxies delete',
        example:
          "mobilerun-cloud proxies delete \\\n  --api-key 'My API Key' \\\n  --proxy-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/proxies/$PROXY_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/proxies',
    httpMethod: 'get',
    summary: 'List all proxy configs for the authenticated user',
    description: 'List all proxy configs for the authenticated user',
    stainlessPath: '(resource) proxies > (method) list',
    qualified: 'client.proxies.list',
    params: ["protocol?: 'socks5' | 'wireguard';"],
    response:
      "{ data: { host: string; name: string; password: string; port: number; protocol: 'socks5'; proxyId: string; user: string; } | { config: string; name: string; protocol: 'wireguard'; proxyId: string; }[]; }",
    markdown:
      "## list\n\n`client.proxies.list(protocol?: 'socks5' | 'wireguard'): { data: proxy_config[]; }`\n\n**get** `/proxies`\n\nList all proxy configs for the authenticated user\n\n### Parameters\n\n- `protocol?: 'socks5' | 'wireguard'`\n\n### Returns\n\n- `{ data: { host: string; name: string; password: string; port: number; protocol: 'socks5'; proxyId: string; user: string; } | { config: string; name: string; protocol: 'wireguard'; proxyId: string; }[]; }`\n\n  - `data: { host: string; name: string; password: string; port: number; protocol: 'socks5'; proxyId: string; user: string; } | { config: string; name: string; protocol: 'wireguard'; proxyId: string; }[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst proxies = await client.proxies.list();\n\nconsole.log(proxies);\n```",
    perLanguage: {
      typescript: {
        method: 'client.proxies.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst proxies = await client.proxies.list();\n\nconsole.log(proxies.data);",
      },
      python: {
        method: 'proxies.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nproxies = client.proxies.list()\nprint(proxies.data)',
      },
      go: {
        method: 'client.Proxies.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproxies, err := client.Proxies.List(context.TODO(), mobileruncloud.ProxyListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", proxies.Data)\n}\n',
      },
      cli: {
        method: 'proxies list',
        example: "mobilerun-cloud proxies list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/proxies \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/proxies/{proxyId}',
    httpMethod: 'get',
    summary: 'Get a specific proxy config',
    description: 'Get a specific proxy config',
    stainlessPath: '(resource) proxies > (method) retrieve',
    qualified: 'client.proxies.retrieve',
    params: ['proxyId: string;'],
    response:
      "{ data: { host: string; name: string; password: string; port: number; protocol: 'socks5'; proxyId: string; user: string; } | { config: string; name: string; protocol: 'wireguard'; proxyId: string; }; }",
    markdown:
      "## retrieve\n\n`client.proxies.retrieve(proxyId: string): { data: proxy_config; }`\n\n**get** `/proxies/{proxyId}`\n\nGet a specific proxy config\n\n### Parameters\n\n- `proxyId: string`\n\n### Returns\n\n- `{ data: { host: string; name: string; password: string; port: number; protocol: 'socks5'; proxyId: string; user: string; } | { config: string; name: string; protocol: 'wireguard'; proxyId: string; }; }`\n\n  - `data: { host: string; name: string; password: string; port: number; protocol: 'socks5'; proxyId: string; user: string; } | { config: string; name: string; protocol: 'wireguard'; proxyId: string; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst proxy = await client.proxies.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(proxy);\n```",
    perLanguage: {
      typescript: {
        method: 'client.proxies.retrieve',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst proxy = await client.proxies.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(proxy.data);",
      },
      python: {
        method: 'proxies.retrieve',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nproxy = client.proxies.retrieve(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(proxy.data)',
      },
      go: {
        method: 'client.Proxies.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproxy, err := client.Proxies.Get(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", proxy.Data)\n}\n',
      },
      cli: {
        method: 'proxies retrieve',
        example:
          "mobilerun-cloud proxies retrieve \\\n  --api-key 'My API Key' \\\n  --proxy-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/proxies/$PROXY_ID \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/proxies/{proxyId}',
    httpMethod: 'put',
    summary: 'Update a proxy config',
    description: 'Update a proxy config',
    stainlessPath: '(resource) proxies > (method) update',
    qualified: 'client.proxies.update',
    params: [
      'proxyId: string;',
      "body: { host: string; name: string; password: string; port: number; protocol: 'socks5'; user: string; } | { config: string; name: string; protocol: 'wireguard'; };",
    ],
    response:
      "{ data: { host: string; name: string; password: string; port: number; protocol: 'socks5'; proxyId: string; user: string; } | { config: string; name: string; protocol: 'wireguard'; proxyId: string; }; message: string; success: true; }",
    perLanguage: {
      typescript: {
        method: 'client.proxies.update',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst proxy = await client.proxies.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  host: 'x',\n  name: 'xxx',\n  password: 'x',\n  port: 1,\n  protocol: 'socks5',\n  user: 'x',\n});\n\nconsole.log(proxy.data);",
      },
      python: {
        method: 'proxies.update',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nproxy = client.proxies.update(\n    proxy_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    host="x",\n    name="xxx",\n    password="x",\n    port=1,\n    protocol="socks5",\n    user="x",\n)\nprint(proxy.data)',
      },
      go: {
        method: 'client.Proxies.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tproxy, err := client.Proxies.Update(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tmobileruncloud.ProxyUpdateParams{\n\t\t\tOfSocks5: &mobileruncloud.ProxyUpdateParamsBodySocks5{\n\t\t\t\tHost:     "x",\n\t\t\t\tName:     "xxx",\n\t\t\t\tPassword: "x",\n\t\t\t\tPort:     1,\n\t\t\t\tUser:     "x",\n\t\t\t},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", proxy.Data)\n}\n',
      },
      cli: {
        method: 'proxies update',
        example:
          "mobilerun-cloud proxies update \\\n  --api-key 'My API Key' \\\n  --proxy-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --host x \\\n  --name xxx \\\n  --password x \\\n  --port 1 \\\n  --protocol socks5 \\\n  --user x \\\n  --config x",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/proxies/$PROXY_ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "host": "x",\n          "name": "xxx",\n          "password": "x",\n          "port": 1,\n          "protocol": "socks5",\n          "user": "x"\n        }\'',
      },
    },
  },
  {
    name: 'lookup',
    endpoint: '/proxies/lookup',
    httpMethod: 'post',
    summary: 'Lookup proxy location',
    description: 'Lookup proxy location',
    stainlessPath: '(resource) proxies > (method) lookup',
    qualified: 'client.proxies.lookup',
    params: ['socks5: { host: string; port: number; password?: string; user?: string; };'],
    response:
      '{ ip: string; isMobile: boolean; latitude: number; longitude: number; $schema?: string; carrier?: { mcc?: string; mnc?: string; name?: string; }; city?: string; country?: string; countryCode?: string; region?: string; timezone?: string; }',
    markdown:
      "## lookup\n\n`client.proxies.lookup(socks5: { host: string; port: number; password?: string; user?: string; }): { ip: string; isMobile: boolean; latitude: number; longitude: number; $schema?: string; carrier?: object; city?: string; country?: string; countryCode?: string; region?: string; timezone?: string; }`\n\n**post** `/proxies/lookup`\n\nLookup proxy location\n\n### Parameters\n\n- `socks5: { host: string; port: number; password?: string; user?: string; }`\n  SOCKS5 proxy configuration.\n  - `host: string`\n  - `port: number`\n  - `password?: string`\n  - `user?: string`\n\n### Returns\n\n- `{ ip: string; isMobile: boolean; latitude: number; longitude: number; $schema?: string; carrier?: { mcc?: string; mnc?: string; name?: string; }; city?: string; country?: string; countryCode?: string; region?: string; timezone?: string; }`\n\n  - `ip: string`\n  - `isMobile: boolean`\n  - `latitude: number`\n  - `longitude: number`\n  - `$schema?: string`\n  - `carrier?: { mcc?: string; mnc?: string; name?: string; }`\n  - `city?: string`\n  - `country?: string`\n  - `countryCode?: string`\n  - `region?: string`\n  - `timezone?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.proxies.lookup({ socks5: { host: 'host', port: 1 } });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.proxies.lookup',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.proxies.lookup({ socks5: { host: 'host', port: 1 } });\n\nconsole.log(response.ip);",
      },
      python: {
        method: 'proxies.lookup',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.proxies.lookup(\n    socks5={\n        "host": "host",\n        "port": 1,\n    },\n)\nprint(response.ip)',
      },
      go: {
        method: 'client.Proxies.Lookup',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Proxies.Lookup(context.TODO(), mobileruncloud.ProxyLookupParams{\n\t\tSocks5: mobileruncloud.ProxyLookupParamsSocks5{\n\t\t\tHost: "host",\n\t\t\tPort: 1,\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.IP)\n}\n',
      },
      cli: {
        method: 'proxies lookup',
        example:
          "mobilerun-cloud proxies lookup \\\n  --api-key 'My API Key' \\\n  --socks5 '{host: host, port: 1}'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/proxies/lookup \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "socks5": {\n            "host": "host",\n            "port": 1\n          }\n        }\'',
      },
    },
  },
  {
    name: 'attach',
    endpoint: '/tasks/{task_id}/attach',
    httpMethod: 'get',
    summary: 'Attach Task',
    description: 'Attach to a running task and receive its events as an SSE stream.',
    stainlessPath: '(resource) tasks > (method) attach',
    qualified: 'client.tasks.attach',
    params: ['task_id: string;'],
    markdown:
      "## attach\n\n`client.tasks.attach(task_id: string): void`\n\n**get** `/tasks/{task_id}/attach`\n\nAttach to a running task and receive its events as an SSE stream.\n\n### Parameters\n\n- `task_id: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nawait client.tasks.attach('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e')\n```",
    perLanguage: {
      typescript: {
        method: 'client.tasks.attach',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.tasks.attach('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');",
      },
      python: {
        method: 'tasks.attach',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nclient.tasks.attach(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)',
      },
      go: {
        method: 'client.Tasks.Attach',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Tasks.Attach(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      cli: {
        method: 'tasks attach',
        example:
          "mobilerun-cloud tasks attach \\\n  --api-key 'My API Key' \\\n  --task-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/tasks/$TASK_ID/attach \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'get_status',
    endpoint: '/tasks/{task_id}/status',
    httpMethod: 'get',
    summary: 'Get Task Status',
    description: 'Get the status of a task.',
    stainlessPath: '(resource) tasks > (method) get_status',
    qualified: 'client.tasks.getStatus',
    params: ['task_id: string;'],
    response:
      "{ status: 'queued' | 'created' | 'running' | 'cancelling' | 'paused' | 'completed' | 'failed' | 'cancelled'; lastResponse?: object; message?: string; output?: object; steps?: number; succeeded?: boolean; }",
    markdown:
      "## get_status\n\n`client.tasks.getStatus(task_id: string): { status: task_status; lastResponse?: object; message?: string; output?: object; steps?: number; succeeded?: boolean; }`\n\n**get** `/tasks/{task_id}/status`\n\nGet the status of a task.\n\n### Parameters\n\n- `task_id: string`\n\n### Returns\n\n- `{ status: 'queued' | 'created' | 'running' | 'cancelling' | 'paused' | 'completed' | 'failed' | 'cancelled'; lastResponse?: object; message?: string; output?: object; steps?: number; succeeded?: boolean; }`\n\n  - `status: 'queued' | 'created' | 'running' | 'cancelling' | 'paused' | 'completed' | 'failed' | 'cancelled'`\n  - `lastResponse?: object`\n  - `message?: string`\n  - `output?: object`\n  - `steps?: number`\n  - `succeeded?: boolean`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.tasks.getStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.tasks.getStatus',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.tasks.getStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.status);",
      },
      python: {
        method: 'tasks.get_status',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.tasks.get_status(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.status)',
      },
      go: {
        method: 'client.Tasks.GetStatus',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Tasks.GetStatus(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Status)\n}\n',
      },
      cli: {
        method: 'tasks get_status',
        example:
          "mobilerun-cloud tasks get-status \\\n  --api-key 'My API Key' \\\n  --task-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/tasks/$TASK_ID/status \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'get_trajectory',
    endpoint: '/tasks/{task_id}/trajectory',
    httpMethod: 'get',
    summary: 'Get Task Trajectory',
    description: 'Get the trajectory of a task.',
    stainlessPath: '(resource) tasks > (method) get_trajectory',
    qualified: 'client.tasks.getTrajectory',
    params: ['task_id: string;'],
    response:
      '{ trajectory: object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object[]; }',
    markdown:
      "## get_trajectory\n\n`client.tasks.getTrajectory(task_id: string): { trajectory: object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object | object[]; }`\n\n**get** `/tasks/{task_id}/trajectory`\n\nGet the trajectory of a task.\n\n### Parameters\n\n- `task_id: string`\n\n### Returns\n\n- `{ trajectory: { data: { id: string; status?: string; }; event: 'QueuedEvent'; } | { data: { id: string; streamUrl: string; }; event: 'CreatedEvent'; } | { data: { exception: string; }; event: 'ExceptionEvent'; } | { data: { reason: string; }; event: 'CancelEvent'; } | { data: { index: number; url: string; }; event: 'ScreenshotEvent'; } | { data: object; event: 'StartEvent'; } | { data: { reason: string; success: boolean; }; event: 'FinalizeEvent'; } | { data: object; event: 'StopEvent'; } | { data: { message?: string; steps?: number; structured_output?: object; success?: boolean; }; event: 'ResultEvent'; } | { data: object; event: 'ManagerInputEvent'; } | { data: { current_subgoal: string; plan: string; thought: string; answer?: string; success?: boolean; }; event: 'ManagerPlanEvent'; } | { data: { current_subgoal: string; }; event: 'ExecutorInputEvent'; } | { data: { action: object; error: string; outcome: boolean; summary: string; }; event: 'ExecutorResultEvent'; } | { data: object; event: 'FastAgentInputEvent'; } | { data: { thought: string; code?: string; usage?: usage_result; }; event: 'FastAgentResponseEvent'; } | { data: { tool_calls_repr: string; }; event: 'FastAgentToolCallEvent'; } | { data: { output: string; }; event: 'FastAgentOutputEvent'; } | { data: { reason: string; success: boolean; tool_call_count?: number; }; event: 'FastAgentEndEvent'; } | { data: { instruction: string; }; event: 'FastAgentExecuteEvent'; } | { data: { instruction: string; reason: string; success: boolean; }; event: 'FastAgentResultEvent'; } | { data: { success: boolean; summary: string; tool_args: object; tool_name: string; }; event: 'ToolExecutionEvent'; } | { data: { index: number; url: string; }; event: 'RecordUIStateEvent'; } | { data: object; event: 'ManagerContextEvent'; } | { data: { response: string; usage?: usage_result; }; event: 'ManagerResponseEvent'; } | { data: { plan: string; subgoal: string; thought: string; answer?: string; full_response?: string; memory_update?: string; progress_summary?: string; success?: boolean; }; event: 'ManagerPlanDetailsEvent'; } | { data: { subgoal: string; }; event: 'ExecutorContextEvent'; } | { data: { response: string; usage?: usage_result; }; event: 'ExecutorResponseEvent'; } | { data: { action_json: string; description: string; thought: string; full_response?: string; }; event: 'ExecutorActionEvent'; } | { data: { action: object; error: string; success: boolean; summary: string; full_response?: string; thought?: string; }; event: 'ExecutorActionResultEvent'; } | { data: { action: string; message_ids: string[]; consumer?: string; reason?: string; step_number?: number; }; event: 'UserMessageEvent'; } | { event: string; data?: object; }[]; }`\n\n  - `trajectory: { data: { id: string; status?: string; }; event: 'QueuedEvent'; } | { data: { id: string; streamUrl: string; }; event: 'CreatedEvent'; } | { data: { exception: string; }; event: 'ExceptionEvent'; } | { data: { reason: string; }; event: 'CancelEvent'; } | { data: { index: number; url: string; }; event: 'ScreenshotEvent'; } | { data: object; event: 'StartEvent'; } | { data: { reason: string; success: boolean; }; event: 'FinalizeEvent'; } | { data: object; event: 'StopEvent'; } | { data: { message?: string; steps?: number; structured_output?: object; success?: boolean; }; event: 'ResultEvent'; } | { data: object; event: 'ManagerInputEvent'; } | { data: { current_subgoal: string; plan: string; thought: string; answer?: string; success?: boolean; }; event: 'ManagerPlanEvent'; } | { data: { current_subgoal: string; }; event: 'ExecutorInputEvent'; } | { data: { action: object; error: string; outcome: boolean; summary: string; }; event: 'ExecutorResultEvent'; } | { data: object; event: 'FastAgentInputEvent'; } | { data: { thought: string; code?: string; usage?: { request_tokens: number; requests: number; response_tokens: number; total_tokens: number; }; }; event: 'FastAgentResponseEvent'; } | { data: { tool_calls_repr: string; }; event: 'FastAgentToolCallEvent'; } | { data: { output: string; }; event: 'FastAgentOutputEvent'; } | { data: { reason: string; success: boolean; tool_call_count?: number; }; event: 'FastAgentEndEvent'; } | { data: { instruction: string; }; event: 'FastAgentExecuteEvent'; } | { data: { instruction: string; reason: string; success: boolean; }; event: 'FastAgentResultEvent'; } | { data: { success: boolean; summary: string; tool_args: object; tool_name: string; }; event: 'ToolExecutionEvent'; } | { data: { index: number; url: string; }; event: 'RecordUIStateEvent'; } | { data: object; event: 'ManagerContextEvent'; } | { data: { response: string; usage?: { request_tokens: number; requests: number; response_tokens: number; total_tokens: number; }; }; event: 'ManagerResponseEvent'; } | { data: { plan: string; subgoal: string; thought: string; answer?: string; full_response?: string; memory_update?: string; progress_summary?: string; success?: boolean; }; event: 'ManagerPlanDetailsEvent'; } | { data: { subgoal: string; }; event: 'ExecutorContextEvent'; } | { data: { response: string; usage?: { request_tokens: number; requests: number; response_tokens: number; total_tokens: number; }; }; event: 'ExecutorResponseEvent'; } | { data: { action_json: string; description: string; thought: string; full_response?: string; }; event: 'ExecutorActionEvent'; } | { data: { action: object; error: string; success: boolean; summary: string; full_response?: string; thought?: string; }; event: 'ExecutorActionResultEvent'; } | { data: { action: string; message_ids: string[]; consumer?: string; reason?: string; step_number?: number; }; event: 'UserMessageEvent'; } | { event: string; data?: object; }[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.tasks.getTrajectory('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.tasks.getTrajectory',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.tasks.getTrajectory('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.trajectory);",
      },
      python: {
        method: 'tasks.get_trajectory',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.tasks.get_trajectory(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.trajectory)',
      },
      go: {
        method: 'client.Tasks.GetTrajectory',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Tasks.GetTrajectory(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Trajectory)\n}\n',
      },
      cli: {
        method: 'tasks get_trajectory',
        example:
          "mobilerun-cloud tasks get-trajectory \\\n  --api-key 'My API Key' \\\n  --task-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/tasks/$TASK_ID/trajectory \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/tasks',
    httpMethod: 'get',
    summary: 'List Tasks',
    description: 'List tasks with optional filtering, sorting, and pagination.',
    stainlessPath: '(resource) tasks > (method) list',
    qualified: 'client.tasks.list',
    params: [
      "orderBy?: 'id' | 'createdAt' | 'finishedAt' | 'status';",
      "orderByDirection?: 'asc' | 'desc';",
      'page?: number;',
      'pageSize?: number;',
      'query?: string;',
      "status?: 'queued' | 'created' | 'running' | 'cancelling' | 'paused' | 'completed' | 'failed' | 'cancelled';",
    ],
    response:
      "{ items: { id: string; deviceId: string; displayId: number; llmModel: string; status: 'queued' | 'created' | 'running' | 'cancelling' | 'paused' | 'completed' | 'failed' | 'cancelled'; task: string; tmpDevice: boolean; userId: string; accessibility?: boolean; agentId?: number; apps?: string[]; cancelRequestedAt?: string; claimedAt?: string; continueOnFailure?: boolean; createdAt?: string; credentials?: object[]; creditsUsed?: number; dispatchedAt?: string; executionTimeout?: number; files?: string[]; finishedAt?: string; maxSteps?: number; memoryNamespace?: string; message?: string; output?: object; outputSchema?: object; reasoning?: boolean; stealth?: boolean; steps?: number; streamUrl?: string; subagentModel?: string; succeeded?: boolean; temperature?: number; updatedAt?: string; vision?: boolean; vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA'; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }",
    markdown:
      "## list\n\n`client.tasks.list(orderBy?: 'id' | 'createdAt' | 'finishedAt' | 'status', orderByDirection?: 'asc' | 'desc', page?: number, pageSize?: number, query?: string, status?: 'queued' | 'created' | 'running' | 'cancelling' | 'paused' | 'completed' | 'failed' | 'cancelled'): { items: object[]; pagination: pagination_meta; }`\n\n**get** `/tasks`\n\nList tasks with optional filtering, sorting, and pagination.\n\n### Parameters\n\n- `orderBy?: 'id' | 'createdAt' | 'finishedAt' | 'status'`\n\n- `orderByDirection?: 'asc' | 'desc'`\n\n- `page?: number`\n\n- `pageSize?: number`\n\n- `query?: string`\n  Search in task description.\n\n- `status?: 'queued' | 'created' | 'running' | 'cancelling' | 'paused' | 'completed' | 'failed' | 'cancelled'`\n\n### Returns\n\n- `{ items: { id: string; deviceId: string; displayId: number; llmModel: string; status: 'queued' | 'created' | 'running' | 'cancelling' | 'paused' | 'completed' | 'failed' | 'cancelled'; task: string; tmpDevice: boolean; userId: string; accessibility?: boolean; agentId?: number; apps?: string[]; cancelRequestedAt?: string; claimedAt?: string; continueOnFailure?: boolean; createdAt?: string; credentials?: object[]; creditsUsed?: number; dispatchedAt?: string; executionTimeout?: number; files?: string[]; finishedAt?: string; maxSteps?: number; memoryNamespace?: string; message?: string; output?: object; outputSchema?: object; reasoning?: boolean; stealth?: boolean; steps?: number; streamUrl?: string; subagentModel?: string; succeeded?: boolean; temperature?: number; updatedAt?: string; vision?: boolean; vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA'; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }`\n\n  - `items: { id: string; deviceId: string; displayId: number; llmModel: string; status: 'queued' | 'created' | 'running' | 'cancelling' | 'paused' | 'completed' | 'failed' | 'cancelled'; task: string; tmpDevice: boolean; userId: string; accessibility?: boolean; agentId?: number; apps?: string[]; cancelRequestedAt?: string; claimedAt?: string; continueOnFailure?: boolean; createdAt?: string; credentials?: { credentialNames: string[]; packageName: string; }[]; creditsUsed?: number; dispatchedAt?: string; executionTimeout?: number; files?: string[]; finishedAt?: string; maxSteps?: number; memoryNamespace?: string; message?: string; output?: object; outputSchema?: object; reasoning?: boolean; stealth?: boolean; steps?: number; streamUrl?: string; subagentModel?: string; succeeded?: boolean; temperature?: number; updatedAt?: string; vision?: boolean; vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA'; }[]`\n  - `pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst tasks = await client.tasks.list();\n\nconsole.log(tasks);\n```",
    perLanguage: {
      typescript: {
        method: 'client.tasks.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst tasks = await client.tasks.list();\n\nconsole.log(tasks.items);",
      },
      python: {
        method: 'tasks.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\ntasks = client.tasks.list()\nprint(tasks.items)',
      },
      go: {
        method: 'client.Tasks.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\ttasks, err := client.Tasks.List(context.TODO(), mobileruncloud.TaskListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", tasks.Items)\n}\n',
      },
      cli: {
        method: 'tasks list',
        example: "mobilerun-cloud tasks list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/tasks \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/tasks/{task_id}',
    httpMethod: 'get',
    summary: 'Get Task',
    description: 'Get full details of a task by ID.',
    stainlessPath: '(resource) tasks > (method) retrieve',
    qualified: 'client.tasks.retrieve',
    params: ['task_id: string;'],
    response:
      "{ task: { deviceId: string; llmModel: string; task: string; userId: string; id?: string; accessibility?: boolean; agentId?: number; apps?: string[]; cancelRequestedAt?: string; claimedAt?: string; continueOnFailure?: boolean; createdAt?: string; credentials?: package_credentials[]; creditsUsed?: number; dispatchedAt?: string; displayId?: number; executionTimeout?: number; files?: string[]; finishedAt?: string; maxSteps?: number; memoryNamespace?: string; message?: string; output?: object; outputSchema?: object; reasoning?: boolean; status?: task_status; stealth?: boolean; steps?: number; streamUrl?: string; subagentModel?: string; succeeded?: boolean; temperature?: number; tmpDevice?: boolean; trajectory?: object[]; updatedAt?: string; vision?: boolean; vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA'; }; }",
    markdown:
      "## retrieve\n\n`client.tasks.retrieve(task_id: string): { task: task; }`\n\n**get** `/tasks/{task_id}`\n\nGet full details of a task by ID.\n\n### Parameters\n\n- `task_id: string`\n\n### Returns\n\n- `{ task: { deviceId: string; llmModel: string; task: string; userId: string; id?: string; accessibility?: boolean; agentId?: number; apps?: string[]; cancelRequestedAt?: string; claimedAt?: string; continueOnFailure?: boolean; createdAt?: string; credentials?: package_credentials[]; creditsUsed?: number; dispatchedAt?: string; displayId?: number; executionTimeout?: number; files?: string[]; finishedAt?: string; maxSteps?: number; memoryNamespace?: string; message?: string; output?: object; outputSchema?: object; reasoning?: boolean; status?: task_status; stealth?: boolean; steps?: number; streamUrl?: string; subagentModel?: string; succeeded?: boolean; temperature?: number; tmpDevice?: boolean; trajectory?: object[]; updatedAt?: string; vision?: boolean; vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA'; }; }`\n\n  - `task: { deviceId: string; llmModel: string; task: string; userId: string; id?: string; accessibility?: boolean; agentId?: number; apps?: string[]; cancelRequestedAt?: string; claimedAt?: string; continueOnFailure?: boolean; createdAt?: string; credentials?: { credentialNames: string[]; packageName: string; }[]; creditsUsed?: number; dispatchedAt?: string; displayId?: number; executionTimeout?: number; files?: string[]; finishedAt?: string; maxSteps?: number; memoryNamespace?: string; message?: string; output?: object; outputSchema?: object; reasoning?: boolean; status?: 'queued' | 'created' | 'running' | 'cancelling' | 'paused' | 'completed' | 'failed' | 'cancelled'; stealth?: boolean; steps?: number; streamUrl?: string; subagentModel?: string; succeeded?: boolean; temperature?: number; tmpDevice?: boolean; trajectory?: object[]; updatedAt?: string; vision?: boolean; vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA'; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst task = await client.tasks.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(task);\n```",
    perLanguage: {
      typescript: {
        method: 'client.tasks.retrieve',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst task = await client.tasks.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(task.task);",
      },
      python: {
        method: 'tasks.retrieve',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\ntask = client.tasks.retrieve(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(task.task)',
      },
      go: {
        method: 'client.Tasks.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\ttask, err := client.Tasks.Get(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", task.Task)\n}\n',
      },
      cli: {
        method: 'tasks retrieve',
        example:
          "mobilerun-cloud tasks retrieve \\\n  --api-key 'My API Key' \\\n  --task-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/tasks/$TASK_ID \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'run',
    endpoint: '/tasks',
    httpMethod: 'post',
    summary: 'Run Task',
    description: 'Create and dispatch a new agent task. Returns the task ID and device stream details.',
    stainlessPath: '(resource) tasks > (method) run',
    qualified: 'client.tasks.run',
    params: [
      'deviceId: string;',
      'task: string;',
      'accessibility?: boolean;',
      'agentId?: number;',
      'apps?: string[];',
      'continueOnFailure?: boolean;',
      'credentials?: { credentialNames: string[]; packageName: string; }[];',
      'displayId?: number;',
      'executionTimeout?: number;',
      'files?: string[];',
      'llmModel?: string;',
      'maxSteps?: number;',
      'memoryNamespace?: string;',
      'outputSchema?: object;',
      'reasoning?: boolean;',
      'stealth?: boolean;',
      'subagentModel?: string;',
      'temperature?: number;',
      'vision?: boolean;',
      "vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA';",
    ],
    response:
      "{ id: string; status: 'queued' | 'created' | 'running' | 'cancelling' | 'paused' | 'completed' | 'failed' | 'cancelled'; streamUrl?: string; }",
    markdown:
      "## run\n\n`client.tasks.run(deviceId: string, task: string, accessibility?: boolean, agentId?: number, apps?: string[], continueOnFailure?: boolean, credentials?: { credentialNames: string[]; packageName: string; }[], displayId?: number, executionTimeout?: number, files?: string[], llmModel?: string, maxSteps?: number, memoryNamespace?: string, outputSchema?: object, reasoning?: boolean, stealth?: boolean, subagentModel?: string, temperature?: number, vision?: boolean, vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA'): { id: string; status: task_status; streamUrl?: string; }`\n\n**post** `/tasks`\n\nCreate and dispatch a new agent task. Returns the task ID and device stream details.\n\n### Parameters\n\n- `deviceId: string`\n  The ID of the device to run the task on.\n\n- `task: string`\n\n- `accessibility?: boolean`\n\n- `agentId?: number`\n\n- `apps?: string[]`\n\n- `continueOnFailure?: boolean`\n\n- `credentials?: { credentialNames: string[]; packageName: string; }[]`\n\n- `displayId?: number`\n  The display ID of the device to run the task on.\n\n- `executionTimeout?: number`\n\n- `files?: string[]`\n\n- `llmModel?: string`\n  The LLM model identifier to use for the task (e.g. 'google/gemini-3.1-flash-lite')\n\n- `maxSteps?: number`\n\n- `memoryNamespace?: string`\n  Memory namespace for cross-task personalization\n\n- `outputSchema?: object`\n\n- `reasoning?: boolean`\n\n- `stealth?: boolean`\n\n- `subagentModel?: string`\n  LLM model used by sub-agent roles: executor, app_opener, structured_output\n\n- `temperature?: number`\n\n- `vision?: boolean`\n\n- `vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA'`\n\n### Returns\n\n- `{ id: string; status: 'queued' | 'created' | 'running' | 'cancelling' | 'paused' | 'completed' | 'failed' | 'cancelled'; streamUrl?: string; }`\n\n  - `id: string`\n  - `status: 'queued' | 'created' | 'running' | 'cancelling' | 'paused' | 'completed' | 'failed' | 'cancelled'`\n  - `streamUrl?: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.tasks.run({ deviceId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', task: 'x' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.tasks.run',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.tasks.run({\n  deviceId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  task: 'x',\n});\n\nconsole.log(response.id);",
      },
      python: {
        method: 'tasks.run',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.tasks.run(\n    device_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    task="x",\n)\nprint(response.id)',
      },
      go: {
        method: 'client.Tasks.Run',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Tasks.Run(context.TODO(), mobileruncloud.TaskRunParams{\n\t\tDeviceID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tTask:     "x",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      cli: {
        method: 'tasks run',
        example:
          "mobilerun-cloud tasks run \\\n  --api-key 'My API Key' \\\n  --device-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --task x",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/tasks \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "deviceId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "task": "x"\n        }\'',
      },
    },
  },
  {
    name: 'run_streamed',
    endpoint: '/tasks/stream',
    httpMethod: 'post',
    summary: 'Run Streamed Task',
    description:
      'Create and dispatch a new agent task, returning an SSE stream of task events. Cancels the task if the client disconnects.',
    stainlessPath: '(resource) tasks > (method) run_streamed',
    qualified: 'client.tasks.runStreamed',
    params: [
      'deviceId: string;',
      'task: string;',
      'accessibility?: boolean;',
      'agentId?: number;',
      'apps?: string[];',
      'continueOnFailure?: boolean;',
      'credentials?: { credentialNames: string[]; packageName: string; }[];',
      'displayId?: number;',
      'executionTimeout?: number;',
      'files?: string[];',
      'llmModel?: string;',
      'maxSteps?: number;',
      'memoryNamespace?: string;',
      'outputSchema?: object;',
      'reasoning?: boolean;',
      'stealth?: boolean;',
      'subagentModel?: string;',
      'temperature?: number;',
      'vision?: boolean;',
      "vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA';",
    ],
    response: 'object',
    markdown:
      "## run_streamed\n\n`client.tasks.runStreamed(deviceId: string, task: string, accessibility?: boolean, agentId?: number, apps?: string[], continueOnFailure?: boolean, credentials?: { credentialNames: string[]; packageName: string; }[], displayId?: number, executionTimeout?: number, files?: string[], llmModel?: string, maxSteps?: number, memoryNamespace?: string, outputSchema?: object, reasoning?: boolean, stealth?: boolean, subagentModel?: string, temperature?: number, vision?: boolean, vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA'): object`\n\n**post** `/tasks/stream`\n\nCreate and dispatch a new agent task, returning an SSE stream of task events. Cancels the task if the client disconnects.\n\n### Parameters\n\n- `deviceId: string`\n  The ID of the device to run the task on.\n\n- `task: string`\n\n- `accessibility?: boolean`\n\n- `agentId?: number`\n\n- `apps?: string[]`\n\n- `continueOnFailure?: boolean`\n\n- `credentials?: { credentialNames: string[]; packageName: string; }[]`\n\n- `displayId?: number`\n  The display ID of the device to run the task on.\n\n- `executionTimeout?: number`\n\n- `files?: string[]`\n\n- `llmModel?: string`\n  The LLM model identifier to use for the task (e.g. 'google/gemini-3.1-flash-lite')\n\n- `maxSteps?: number`\n\n- `memoryNamespace?: string`\n  Memory namespace for cross-task personalization\n\n- `outputSchema?: object`\n\n- `reasoning?: boolean`\n\n- `stealth?: boolean`\n\n- `subagentModel?: string`\n  LLM model used by sub-agent roles: executor, app_opener, structured_output\n\n- `temperature?: number`\n\n- `vision?: boolean`\n\n- `vpnCountry?: 'US' | 'BR' | 'FR' | 'DE' | 'IN' | 'JP' | 'KR' | 'ZA'`\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.tasks.runStreamed({ deviceId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', task: 'x' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.tasks.runStreamed',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.tasks.runStreamed({\n  deviceId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  task: 'x',\n});\n\nconsole.log(response);",
      },
      python: {
        method: 'tasks.run_streamed',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.tasks.run_streamed(\n    device_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    task="x",\n)\nprint(response)',
      },
      go: {
        method: 'client.Tasks.RunStreamed',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Tasks.RunStreamed(context.TODO(), mobileruncloud.TaskRunStreamedParams{\n\t\tDeviceID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tTask:     "x",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      cli: {
        method: 'tasks run_streamed',
        example:
          "mobilerun-cloud tasks run-streamed \\\n  --api-key 'My API Key' \\\n  --device-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --task x",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/tasks/stream \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "deviceId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "task": "x"\n        }\'',
      },
    },
  },
  {
    name: 'send_message',
    endpoint: '/tasks/{task_id}/message',
    httpMethod: 'post',
    summary: 'Send Message',
    description:
      'Send a message to a running agent task. The message ID is delivered via SSE (UserMessageEvent with action=queued).',
    stainlessPath: '(resource) tasks > (method) send_message',
    qualified: 'client.tasks.sendMessage',
    params: ['task_id: string;', 'message: string;'],
    response: '{ sent: boolean; }',
    markdown:
      "## send_message\n\n`client.tasks.sendMessage(task_id: string, message: string): { sent: boolean; }`\n\n**post** `/tasks/{task_id}/message`\n\nSend a message to a running agent task. The message ID is delivered via SSE (UserMessageEvent with action=queued).\n\n### Parameters\n\n- `task_id: string`\n\n- `message: string`\n  Message to send to the running agent\n\n### Returns\n\n- `{ sent: boolean; }`\n\n  - `sent: boolean`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.tasks.sendMessage('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { message: 'x' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.tasks.sendMessage',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.tasks.sendMessage('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  message: 'x',\n});\n\nconsole.log(response.sent);",
      },
      python: {
        method: 'tasks.send_message',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.tasks.send_message(\n    task_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    message="x",\n)\nprint(response.sent)',
      },
      go: {
        method: 'client.Tasks.SendMessage',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Tasks.SendMessage(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tmobileruncloud.TaskSendMessageParams{\n\t\t\tMessage: "x",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Sent)\n}\n',
      },
      cli: {
        method: 'tasks send_message',
        example:
          "mobilerun-cloud tasks send-message \\\n  --api-key 'My API Key' \\\n  --task-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --message x",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/tasks/$TASK_ID/message \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "message": "x"\n        }\'',
      },
    },
  },
  {
    name: 'stop',
    endpoint: '/tasks/{task_id}/cancel',
    httpMethod: 'post',
    summary: 'Stop Task',
    description: 'Cancel a running task. Returns an error if the task is already in a terminal state.',
    stainlessPath: '(resource) tasks > (method) stop',
    qualified: 'client.tasks.stop',
    params: ['task_id: string;'],
    response: '{ cancelled: boolean; }',
    markdown:
      "## stop\n\n`client.tasks.stop(task_id: string): { cancelled: boolean; }`\n\n**post** `/tasks/{task_id}/cancel`\n\nCancel a running task. Returns an error if the task is already in a terminal state.\n\n### Parameters\n\n- `task_id: string`\n\n### Returns\n\n- `{ cancelled: boolean; }`\n\n  - `cancelled: boolean`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.tasks.stop('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.tasks.stop',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.tasks.stop('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.cancelled);",
      },
      python: {
        method: 'tasks.stop',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.tasks.stop(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.cancelled)',
      },
      go: {
        method: 'client.Tasks.Stop',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Tasks.Stop(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Cancelled)\n}\n',
      },
      cli: {
        method: 'tasks stop',
        example:
          "mobilerun-cloud tasks stop \\\n  --api-key 'My API Key' \\\n  --task-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/tasks/$TASK_ID/cancel \\\n    -X POST \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/tasks/{task_id}/screenshots',
    httpMethod: 'get',
    summary: 'Get Task Screenshots',
    description: 'List all screenshot URLs for a task.',
    stainlessPath: '(resource) tasks.screenshots > (method) list',
    qualified: 'client.tasks.screenshots.list',
    params: ['task_id: string;'],
    response: '{ urls: string[]; }',
    markdown:
      "## list\n\n`client.tasks.screenshots.list(task_id: string): { urls: string[]; }`\n\n**get** `/tasks/{task_id}/screenshots`\n\nList all screenshot URLs for a task.\n\n### Parameters\n\n- `task_id: string`\n\n### Returns\n\n- `{ urls: string[]; }`\n\n  - `urls: string[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst screenshots = await client.tasks.screenshots.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(screenshots);\n```",
    perLanguage: {
      typescript: {
        method: 'client.tasks.screenshots.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst screenshots = await client.tasks.screenshots.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(screenshots.urls);",
      },
      python: {
        method: 'tasks.screenshots.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nscreenshots = client.tasks.screenshots.list(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(screenshots.urls)',
      },
      go: {
        method: 'client.Tasks.Screenshots.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tscreenshots, err := client.Tasks.Screenshots.List(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", screenshots.URLs)\n}\n',
      },
      cli: {
        method: 'screenshots list',
        example:
          "mobilerun-cloud tasks:screenshots list \\\n  --api-key 'My API Key' \\\n  --task-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/tasks/$TASK_ID/screenshots \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/tasks/{task_id}/screenshots/{index}',
    httpMethod: 'get',
    summary: 'Get Task Screenshot',
    description: 'Get a specific screenshot by index.',
    stainlessPath: '(resource) tasks.screenshots > (method) retrieve',
    qualified: 'client.tasks.screenshots.retrieve',
    params: ['task_id: string;', 'index: number;'],
    response: '{ url: string; }',
    markdown:
      "## retrieve\n\n`client.tasks.screenshots.retrieve(task_id: string, index: number): { url: string; }`\n\n**get** `/tasks/{task_id}/screenshots/{index}`\n\nGet a specific screenshot by index.\n\n### Parameters\n\n- `task_id: string`\n\n- `index: number`\n\n### Returns\n\n- `{ url: string; }`\n\n  - `url: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst mediaResponse = await client.tasks.screenshots.retrieve(0, { task_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(mediaResponse);\n```",
    perLanguage: {
      typescript: {
        method: 'client.tasks.screenshots.retrieve',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst mediaResponse = await client.tasks.screenshots.retrieve(0, {\n  task_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(mediaResponse.url);",
      },
      python: {
        method: 'tasks.screenshots.retrieve',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nmedia_response = client.tasks.screenshots.retrieve(\n    index=0,\n    task_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(media_response.url)',
      },
      go: {
        method: 'client.Tasks.Screenshots.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tmediaResponse, err := client.Tasks.Screenshots.Get(\n\t\tcontext.TODO(),\n\t\t0,\n\t\tmobileruncloud.TaskScreenshotGetParams{\n\t\t\tTaskID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", mediaResponse.URL)\n}\n',
      },
      cli: {
        method: 'screenshots retrieve',
        example:
          "mobilerun-cloud tasks:screenshots retrieve \\\n  --api-key 'My API Key' \\\n  --task-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --index 0",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/tasks/$TASK_ID/screenshots/$INDEX \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/tasks/{task_id}/ui_states',
    httpMethod: 'get',
    summary: 'Get Task Ui States',
    description: 'List all UI state URLs for a task.',
    stainlessPath: '(resource) tasks.ui_states > (method) list',
    qualified: 'client.tasks.uiStates.list',
    params: ['task_id: string;'],
    response: '{ urls: string[]; }',
    markdown:
      "## list\n\n`client.tasks.uiStates.list(task_id: string): { urls: string[]; }`\n\n**get** `/tasks/{task_id}/ui_states`\n\nList all UI state URLs for a task.\n\n### Parameters\n\n- `task_id: string`\n\n### Returns\n\n- `{ urls: string[]; }`\n\n  - `urls: string[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst uiStates = await client.tasks.uiStates.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(uiStates);\n```",
    perLanguage: {
      typescript: {
        method: 'client.tasks.uiStates.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst uiStates = await client.tasks.uiStates.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(uiStates.urls);",
      },
      python: {
        method: 'tasks.ui_states.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nui_states = client.tasks.ui_states.list(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(ui_states.urls)',
      },
      go: {
        method: 'client.Tasks.UiStates.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tuiStates, err := client.Tasks.UiStates.List(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", uiStates.URLs)\n}\n',
      },
      cli: {
        method: 'ui_states list',
        example:
          "mobilerun-cloud tasks:ui-states list \\\n  --api-key 'My API Key' \\\n  --task-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/tasks/$TASK_ID/ui_states \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/tasks/{task_id}/ui_states/{index}',
    httpMethod: 'get',
    summary: 'Get Task Ui State',
    description: 'Get a specific UI state by index.',
    stainlessPath: '(resource) tasks.ui_states > (method) retrieve',
    qualified: 'client.tasks.uiStates.retrieve',
    params: ['task_id: string;', 'index: number;'],
    response: '{ url: string; }',
    markdown:
      "## retrieve\n\n`client.tasks.uiStates.retrieve(task_id: string, index: number): { url: string; }`\n\n**get** `/tasks/{task_id}/ui_states/{index}`\n\nGet a specific UI state by index.\n\n### Parameters\n\n- `task_id: string`\n\n- `index: number`\n\n### Returns\n\n- `{ url: string; }`\n\n  - `url: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst mediaResponse = await client.tasks.uiStates.retrieve(0, { task_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(mediaResponse);\n```",
    perLanguage: {
      typescript: {
        method: 'client.tasks.uiStates.retrieve',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst mediaResponse = await client.tasks.uiStates.retrieve(0, {\n  task_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(mediaResponse.url);",
      },
      python: {
        method: 'tasks.ui_states.retrieve',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nmedia_response = client.tasks.ui_states.retrieve(\n    index=0,\n    task_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(media_response.url)',
      },
      go: {
        method: 'client.Tasks.UiStates.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tmediaResponse, err := client.Tasks.UiStates.Get(\n\t\tcontext.TODO(),\n\t\t0,\n\t\tmobileruncloud.TaskUiStateGetParams{\n\t\t\tTaskID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", mediaResponse.URL)\n}\n',
      },
      cli: {
        method: 'ui_states retrieve',
        example:
          "mobilerun-cloud tasks:ui-states retrieve \\\n  --api-key 'My API Key' \\\n  --task-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --index 0",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/tasks/$TASK_ID/ui_states/$INDEX \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/triggers',
    httpMethod: 'post',
    summary: 'Create a trigger',
    description: 'Create a trigger',
    stainlessPath: '(resource) workflows.triggers > (method) create',
    qualified: 'client.workflows.triggers.create',
    params: [
      "activation: 'event' | 'schedule' | 'custom';",
      'name: string;',
      'conditions?: { all?: object[]; any?: object[]; };',
      'customPayloadSchema?: object;',
      'description?: string;',
      'eventType?: string;',
      "scheduleRule?: { type: 'once' | 'cron' | 'recurring'; dateTime?: string; expression?: string; rrule?: string; };",
      'timezone?: string;',
    ],
    response:
      "{ data: { id: string; activation: 'event' | 'schedule' | 'custom'; createdAt: string; customPayloadSchema: object; description: string; eventType: string; name: string; scheduleRule: { type: 'once' | 'cron' | 'recurring'; dateTime?: string; expression?: string; rrule?: string; }; timezone: string; updatedAt: string; userId: string; conditions?: object; nextFireTime?: string; }; }",
    markdown:
      "## create\n\n`client.workflows.triggers.create(activation: 'event' | 'schedule' | 'custom', name: string, conditions?: { all?: object[]; any?: object[]; }, customPayloadSchema?: object, description?: string, eventType?: string, scheduleRule?: { type: 'once' | 'cron' | 'recurring'; dateTime?: string; expression?: string; rrule?: string; }, timezone?: string): { data: object; }`\n\n**post** `/triggers`\n\nCreate a trigger\n\n### Parameters\n\n- `activation: 'event' | 'schedule' | 'custom'`\n\n- `name: string`\n\n- `conditions?: { all?: object[]; any?: object[]; }`\n  - `all?: object[]`\n  - `any?: object[]`\n\n- `customPayloadSchema?: object`\n  Optional JSON Schema for validating payloads sent to this custom trigger\n\n- `description?: string`\n\n- `eventType?: string`\n\n- `scheduleRule?: { type: 'once' | 'cron' | 'recurring'; dateTime?: string; expression?: string; rrule?: string; }`\n  - `type: 'once' | 'cron' | 'recurring'`\n  - `dateTime?: string`\n    ISO 8601 datetime (for type=once)\n  - `expression?: string`\n    Cron expression (for type=cron)\n  - `rrule?: string`\n    RRULE string (for type=recurring)\n\n- `timezone?: string`\n\n### Returns\n\n- `{ data: { id: string; activation: 'event' | 'schedule' | 'custom'; createdAt: string; customPayloadSchema: object; description: string; eventType: string; name: string; scheduleRule: { type: 'once' | 'cron' | 'recurring'; dateTime?: string; expression?: string; rrule?: string; }; timezone: string; updatedAt: string; userId: string; conditions?: object; nextFireTime?: string; }; }`\n\n  - `data: { id: string; activation: 'event' | 'schedule' | 'custom'; createdAt: string; customPayloadSchema: object; description: string; eventType: string; name: string; scheduleRule: { type: 'once' | 'cron' | 'recurring'; dateTime?: string; expression?: string; rrule?: string; }; timezone: string; updatedAt: string; userId: string; conditions?: object; nextFireTime?: string; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst trigger = await client.workflows.triggers.create({ activation: 'event', name: 'x' });\n\nconsole.log(trigger);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.triggers.create',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst trigger = await client.workflows.triggers.create({ activation: 'event', name: 'x' });\n\nconsole.log(trigger.data);",
      },
      python: {
        method: 'workflows.triggers.create',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\ntrigger = client.workflows.triggers.create(\n    activation="event",\n    name="x",\n)\nprint(trigger.data)',
      },
      go: {
        method: 'client.Workflows.Triggers.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\ttrigger, err := client.Workflows.Triggers.New(context.TODO(), mobileruncloud.WorkflowTriggerNewParams{\n\t\tActivation: mobileruncloud.WorkflowTriggerNewParamsActivationEvent,\n\t\tName:       "x",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", trigger.Data)\n}\n',
      },
      cli: {
        method: 'triggers create',
        example:
          "mobilerun-cloud workflows:triggers create \\\n  --api-key 'My API Key' \\\n  --activation event \\\n  --name x",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/triggers \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "activation": "event",\n          "name": "x"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/triggers',
    httpMethod: 'get',
    summary: 'List triggers',
    description: 'List triggers',
    stainlessPath: '(resource) workflows.triggers > (method) list',
    qualified: 'client.workflows.triggers.list',
    params: [
      "activation?: 'event' | 'schedule' | 'custom';",
      'eventType?: string;',
      "orderBy?: 'name' | 'createdAt' | 'updatedAt';",
      "orderByDirection?: 'asc' | 'desc';",
      'page?: number;',
      'pageSize?: number;',
      'search?: string;',
    ],
    response:
      "{ items: { id: string; activation: 'event' | 'schedule' | 'custom'; createdAt: string; customPayloadSchema: object; description: string; eventType: string; name: string; scheduleRule: { type: 'once' | 'cron' | 'recurring'; dateTime?: string; expression?: string; rrule?: string; }; timezone: string; updatedAt: string; userId: string; conditions?: object; nextFireTime?: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }",
    markdown:
      "## list\n\n`client.workflows.triggers.list(activation?: 'event' | 'schedule' | 'custom', eventType?: string, orderBy?: 'name' | 'createdAt' | 'updatedAt', orderByDirection?: 'asc' | 'desc', page?: number, pageSize?: number, search?: string): { items: object[]; pagination: pagination; }`\n\n**get** `/triggers`\n\nList triggers\n\n### Parameters\n\n- `activation?: 'event' | 'schedule' | 'custom'`\n\n- `eventType?: string`\n\n- `orderBy?: 'name' | 'createdAt' | 'updatedAt'`\n\n- `orderByDirection?: 'asc' | 'desc'`\n\n- `page?: number`\n\n- `pageSize?: number`\n\n- `search?: string`\n\n### Returns\n\n- `{ items: { id: string; activation: 'event' | 'schedule' | 'custom'; createdAt: string; customPayloadSchema: object; description: string; eventType: string; name: string; scheduleRule: { type: 'once' | 'cron' | 'recurring'; dateTime?: string; expression?: string; rrule?: string; }; timezone: string; updatedAt: string; userId: string; conditions?: object; nextFireTime?: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }`\n\n  - `items: { id: string; activation: 'event' | 'schedule' | 'custom'; createdAt: string; customPayloadSchema: object; description: string; eventType: string; name: string; scheduleRule: { type: 'once' | 'cron' | 'recurring'; dateTime?: string; expression?: string; rrule?: string; }; timezone: string; updatedAt: string; userId: string; conditions?: object; nextFireTime?: string; }[]`\n  - `pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst triggers = await client.workflows.triggers.list();\n\nconsole.log(triggers);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.triggers.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst triggers = await client.workflows.triggers.list();\n\nconsole.log(triggers.items);",
      },
      python: {
        method: 'workflows.triggers.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\ntriggers = client.workflows.triggers.list()\nprint(triggers.items)',
      },
      go: {
        method: 'client.Workflows.Triggers.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\ttriggers, err := client.Workflows.Triggers.List(context.TODO(), mobileruncloud.WorkflowTriggerListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", triggers.Items)\n}\n',
      },
      cli: {
        method: 'triggers list',
        example: "mobilerun-cloud workflows:triggers list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/triggers \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/triggers/{triggerId}',
    httpMethod: 'get',
    summary: 'Get a trigger',
    description: 'Get a trigger',
    stainlessPath: '(resource) workflows.triggers > (method) retrieve',
    qualified: 'client.workflows.triggers.retrieve',
    params: ['triggerId: string;'],
    response:
      "{ data: { id: string; activation: 'event' | 'schedule' | 'custom'; createdAt: string; customPayloadSchema: object; description: string; eventType: string; name: string; scheduleRule: { type: 'once' | 'cron' | 'recurring'; dateTime?: string; expression?: string; rrule?: string; }; timezone: string; updatedAt: string; userId: string; conditions?: object; nextFireTime?: string; }; }",
    markdown:
      "## retrieve\n\n`client.workflows.triggers.retrieve(triggerId: string): { data: object; }`\n\n**get** `/triggers/{triggerId}`\n\nGet a trigger\n\n### Parameters\n\n- `triggerId: string`\n\n### Returns\n\n- `{ data: { id: string; activation: 'event' | 'schedule' | 'custom'; createdAt: string; customPayloadSchema: object; description: string; eventType: string; name: string; scheduleRule: { type: 'once' | 'cron' | 'recurring'; dateTime?: string; expression?: string; rrule?: string; }; timezone: string; updatedAt: string; userId: string; conditions?: object; nextFireTime?: string; }; }`\n\n  - `data: { id: string; activation: 'event' | 'schedule' | 'custom'; createdAt: string; customPayloadSchema: object; description: string; eventType: string; name: string; scheduleRule: { type: 'once' | 'cron' | 'recurring'; dateTime?: string; expression?: string; rrule?: string; }; timezone: string; updatedAt: string; userId: string; conditions?: object; nextFireTime?: string; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst trigger = await client.workflows.triggers.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(trigger);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.triggers.retrieve',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst trigger = await client.workflows.triggers.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(trigger.data);",
      },
      python: {
        method: 'workflows.triggers.retrieve',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\ntrigger = client.workflows.triggers.retrieve(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(trigger.data)',
      },
      go: {
        method: 'client.Workflows.Triggers.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\ttrigger, err := client.Workflows.Triggers.Get(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", trigger.Data)\n}\n',
      },
      cli: {
        method: 'triggers retrieve',
        example:
          "mobilerun-cloud workflows:triggers retrieve \\\n  --api-key 'My API Key' \\\n  --trigger-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/triggers/$TRIGGER_ID \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/triggers/{triggerId}',
    httpMethod: 'patch',
    summary: 'Update a trigger',
    description: 'Update a trigger',
    stainlessPath: '(resource) workflows.triggers > (method) update',
    qualified: 'client.workflows.triggers.update',
    params: [
      'triggerId: string;',
      "activation?: 'event' | 'schedule' | 'custom';",
      'conditions?: { all?: object[]; any?: object[]; };',
      'customPayloadSchema?: object;',
      'description?: string;',
      'eventType?: string;',
      'name?: string;',
      "scheduleRule?: { type: 'once' | 'cron' | 'recurring'; dateTime?: string; expression?: string; rrule?: string; };",
      'timezone?: string;',
    ],
    response:
      "{ data: { id: string; activation: 'event' | 'schedule' | 'custom'; createdAt: string; customPayloadSchema: object; description: string; eventType: string; name: string; scheduleRule: { type: 'once' | 'cron' | 'recurring'; dateTime?: string; expression?: string; rrule?: string; }; timezone: string; updatedAt: string; userId: string; conditions?: object; nextFireTime?: string; }; }",
    markdown:
      "## update\n\n`client.workflows.triggers.update(triggerId: string, activation?: 'event' | 'schedule' | 'custom', conditions?: { all?: object[]; any?: object[]; }, customPayloadSchema?: object, description?: string, eventType?: string, name?: string, scheduleRule?: { type: 'once' | 'cron' | 'recurring'; dateTime?: string; expression?: string; rrule?: string; }, timezone?: string): { data: object; }`\n\n**patch** `/triggers/{triggerId}`\n\nUpdate a trigger\n\n### Parameters\n\n- `triggerId: string`\n\n- `activation?: 'event' | 'schedule' | 'custom'`\n\n- `conditions?: { all?: object[]; any?: object[]; }`\n  - `all?: object[]`\n  - `any?: object[]`\n\n- `customPayloadSchema?: object`\n  Optional JSON Schema for validating payloads sent to this custom trigger\n\n- `description?: string`\n\n- `eventType?: string`\n\n- `name?: string`\n\n- `scheduleRule?: { type: 'once' | 'cron' | 'recurring'; dateTime?: string; expression?: string; rrule?: string; }`\n  - `type: 'once' | 'cron' | 'recurring'`\n  - `dateTime?: string`\n    ISO 8601 datetime (for type=once)\n  - `expression?: string`\n    Cron expression (for type=cron)\n  - `rrule?: string`\n    RRULE string (for type=recurring)\n\n- `timezone?: string`\n\n### Returns\n\n- `{ data: { id: string; activation: 'event' | 'schedule' | 'custom'; createdAt: string; customPayloadSchema: object; description: string; eventType: string; name: string; scheduleRule: { type: 'once' | 'cron' | 'recurring'; dateTime?: string; expression?: string; rrule?: string; }; timezone: string; updatedAt: string; userId: string; conditions?: object; nextFireTime?: string; }; }`\n\n  - `data: { id: string; activation: 'event' | 'schedule' | 'custom'; createdAt: string; customPayloadSchema: object; description: string; eventType: string; name: string; scheduleRule: { type: 'once' | 'cron' | 'recurring'; dateTime?: string; expression?: string; rrule?: string; }; timezone: string; updatedAt: string; userId: string; conditions?: object; nextFireTime?: string; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst trigger = await client.workflows.triggers.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(trigger);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.triggers.update',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst trigger = await client.workflows.triggers.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(trigger.data);",
      },
      python: {
        method: 'workflows.triggers.update',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\ntrigger = client.workflows.triggers.update(\n    trigger_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(trigger.data)',
      },
      go: {
        method: 'client.Workflows.Triggers.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\ttrigger, err := client.Workflows.Triggers.Update(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tmobileruncloud.WorkflowTriggerUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", trigger.Data)\n}\n',
      },
      cli: {
        method: 'triggers update',
        example:
          "mobilerun-cloud workflows:triggers update \\\n  --api-key 'My API Key' \\\n  --trigger-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/triggers/$TRIGGER_ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/triggers/{triggerId}',
    httpMethod: 'delete',
    summary: 'Delete a trigger',
    description: 'Delete a trigger',
    stainlessPath: '(resource) workflows.triggers > (method) delete',
    qualified: 'client.workflows.triggers.delete',
    params: ['triggerId: string;'],
    response: '{ message: string; }',
    markdown:
      "## delete\n\n`client.workflows.triggers.delete(triggerId: string): { message: string; }`\n\n**delete** `/triggers/{triggerId}`\n\nDelete a trigger\n\n### Parameters\n\n- `triggerId: string`\n\n### Returns\n\n- `{ message: string; }`\n\n  - `message: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst trigger = await client.workflows.triggers.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(trigger);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.triggers.delete',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst trigger = await client.workflows.triggers.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(trigger.message);",
      },
      python: {
        method: 'workflows.triggers.delete',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\ntrigger = client.workflows.triggers.delete(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(trigger.message)',
      },
      go: {
        method: 'client.Workflows.Triggers.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\ttrigger, err := client.Workflows.Triggers.Delete(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", trigger.Message)\n}\n',
      },
      cli: {
        method: 'triggers delete',
        example:
          "mobilerun-cloud workflows:triggers delete \\\n  --api-key 'My API Key' \\\n  --trigger-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/triggers/$TRIGGER_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'fire',
    endpoint: '/triggers/{triggerId}/fire',
    httpMethod: 'post',
    summary: 'Fire a custom trigger with payload',
    description:
      'Invoke a custom trigger directly with an arbitrary JSON payload.\n\nFan-out: a trigger may be referenced by multiple flows (workflows). Firing it enqueues one execution per enabled, non-deleted flow attached to this trigger, each receiving the same payload. The `enqueuedCount` in the response reports how many were enqueued (0 if no flows are attached, or if all matching flows are gated by a cooldown).\n\nPayload validation:\n- If the trigger has a `customPayloadSchema`, the payload is validated against it (JSON Schema via AJV).\n- If no schema is configured, the payload only needs to be a JSON object — any keys and values are accepted.\n\nOnly triggers with `activation = "custom"` can be fired through this endpoint; event and schedule triggers return 409.',
    stainlessPath: '(resource) workflows.triggers > (method) fire',
    qualified: 'client.workflows.triggers.fire',
    params: ['triggerId: string;', 'payload: object;', 'deviceId?: string;'],
    response: '{ enqueuedCount: number; invocationId: string; }',
    markdown:
      "## fire\n\n`client.workflows.triggers.fire(triggerId: string, payload: object, deviceId?: string): { enqueuedCount: number; invocationId: string; }`\n\n**post** `/triggers/{triggerId}/fire`\n\nInvoke a custom trigger directly with an arbitrary JSON payload.\n\nFan-out: a trigger may be referenced by multiple flows (workflows). Firing it enqueues one execution per enabled, non-deleted flow attached to this trigger, each receiving the same payload. The `enqueuedCount` in the response reports how many were enqueued (0 if no flows are attached, or if all matching flows are gated by a cooldown).\n\nPayload validation:\n- If the trigger has a `customPayloadSchema`, the payload is validated against it (JSON Schema via AJV).\n- If no schema is configured, the payload only needs to be a JSON object — any keys and values are accepted.\n\nOnly triggers with `activation = \"custom\"` can be fired through this endpoint; event and schedule triggers return 409.\n\n### Parameters\n\n- `triggerId: string`\n\n- `payload: object`\n  Arbitrary JSON object forwarded to every flow attached to this trigger. Validated against the trigger's customPayloadSchema when one is configured; otherwise only \"must be a JSON object\" is enforced.\n\n- `deviceId?: string`\n  Optional device scope. When supplied, ownership is verified for the calling user and the value is passed through to each enqueued execution as the default device context.\n\n### Returns\n\n- `{ enqueuedCount: number; invocationId: string; }`\n\n  - `enqueuedCount: number`\n  - `invocationId: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.workflows.triggers.fire('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { payload: { foo: 'bar' } });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.triggers.fire',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.workflows.triggers.fire('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  payload: { foo: 'bar' },\n});\n\nconsole.log(response.enqueuedCount);",
      },
      python: {
        method: 'workflows.triggers.fire',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.workflows.triggers.fire(\n    trigger_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    payload={\n        "foo": "bar"\n    },\n)\nprint(response.enqueued_count)',
      },
      go: {
        method: 'client.Workflows.Triggers.Fire',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Workflows.Triggers.Fire(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tmobileruncloud.WorkflowTriggerFireParams{\n\t\t\tPayload: map[string]any{\n\t\t\t\t"foo": "bar",\n\t\t\t},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.EnqueuedCount)\n}\n',
      },
      cli: {
        method: 'triggers fire',
        example:
          "mobilerun-cloud workflows:triggers fire \\\n  --api-key 'My API Key' \\\n  --trigger-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --payload '{foo: bar}'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/triggers/$TRIGGER_ID/fire \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "payload": {\n            "foo": "bar"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/action-catalog',
    httpMethod: 'get',
    summary: 'List action catalog entries',
    description: 'List action catalog entries',
    stainlessPath: '(resource) workflows.action_catalog > (method) list',
    qualified: 'client.workflows.actionCatalog.list',
    params: [
      'page?: number;',
      'pageSize?: number;',
      "service?: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks';",
    ],
    response:
      "{ items: { id: string; createdAt: string; description: string; isAsync: boolean; method: string; name: string; service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'; updatedAt: string; paramsSchema?: object; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }",
    markdown:
      "## list\n\n`client.workflows.actionCatalog.list(page?: number, pageSize?: number, service?: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'): { items: action_catalog_entry[]; pagination: pagination; }`\n\n**get** `/action-catalog`\n\nList action catalog entries\n\n### Parameters\n\n- `page?: number`\n\n- `pageSize?: number`\n\n- `service?: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'`\n\n### Returns\n\n- `{ items: { id: string; createdAt: string; description: string; isAsync: boolean; method: string; name: string; service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'; updatedAt: string; paramsSchema?: object; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }`\n\n  - `items: { id: string; createdAt: string; description: string; isAsync: boolean; method: string; name: string; service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'; updatedAt: string; paramsSchema?: object; }[]`\n  - `pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst actionCatalogs = await client.workflows.actionCatalog.list();\n\nconsole.log(actionCatalogs);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.actionCatalog.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst actionCatalogs = await client.workflows.actionCatalog.list();\n\nconsole.log(actionCatalogs.items);",
      },
      python: {
        method: 'workflows.action_catalog.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\naction_catalogs = client.workflows.action_catalog.list()\nprint(action_catalogs.items)',
      },
      go: {
        method: 'client.Workflows.ActionCatalog.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tactionCatalogs, err := client.Workflows.ActionCatalog.List(context.TODO(), mobileruncloud.WorkflowActionCatalogListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", actionCatalogs.Items)\n}\n',
      },
      cli: {
        method: 'action_catalog list',
        example: "mobilerun-cloud workflows:action-catalog list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/action-catalog \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/action-catalog/{catalogEntryId}',
    httpMethod: 'get',
    summary: 'Get a catalog entry',
    description: 'Get a catalog entry',
    stainlessPath: '(resource) workflows.action_catalog > (method) retrieve',
    qualified: 'client.workflows.actionCatalog.retrieve',
    params: ['catalogEntryId: string;'],
    response:
      "{ data: { id: string; createdAt: string; description: string; isAsync: boolean; method: string; name: string; service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'; updatedAt: string; paramsSchema?: object; }; }",
    markdown:
      "## retrieve\n\n`client.workflows.actionCatalog.retrieve(catalogEntryId: string): { data: action_catalog_entry; }`\n\n**get** `/action-catalog/{catalogEntryId}`\n\nGet a catalog entry\n\n### Parameters\n\n- `catalogEntryId: string`\n\n### Returns\n\n- `{ data: { id: string; createdAt: string; description: string; isAsync: boolean; method: string; name: string; service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'; updatedAt: string; paramsSchema?: object; }; }`\n\n  - `data: { id: string; createdAt: string; description: string; isAsync: boolean; method: string; name: string; service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'; updatedAt: string; paramsSchema?: object; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst actionCatalog = await client.workflows.actionCatalog.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(actionCatalog);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.actionCatalog.retrieve',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst actionCatalog = await client.workflows.actionCatalog.retrieve(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(actionCatalog.data);",
      },
      python: {
        method: 'workflows.action_catalog.retrieve',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\naction_catalog = client.workflows.action_catalog.retrieve(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(action_catalog.data)',
      },
      go: {
        method: 'client.Workflows.ActionCatalog.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tactionCatalog, err := client.Workflows.ActionCatalog.Get(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", actionCatalog.Data)\n}\n',
      },
      cli: {
        method: 'action_catalog retrieve',
        example:
          "mobilerun-cloud workflows:action-catalog retrieve \\\n  --api-key 'My API Key' \\\n  --catalog-entry-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/action-catalog/$CATALOG_ENTRY_ID \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/actions',
    httpMethod: 'post',
    summary: 'Create an action',
    description: 'Create an action',
    stainlessPath: '(resource) workflows.actions > (method) create',
    qualified: 'client.workflows.actions.create',
    params: ['catalogEntryId: string;', 'name: string;', 'description?: string;', 'params?: object;'],
    response:
      "{ data: { id: string; catalogEntryId: string; createdAt: string; description: string; isAsync: boolean; method: string; name: string; service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'; updatedAt: string; userId: string; params?: object; paramsSchema?: object; }; }",
    markdown:
      "## create\n\n`client.workflows.actions.create(catalogEntryId: string, name: string, description?: string, params?: object): { data: action; }`\n\n**post** `/actions`\n\nCreate an action\n\n### Parameters\n\n- `catalogEntryId: string`\n\n- `name: string`\n\n- `description?: string`\n\n- `params?: object`\n\n### Returns\n\n- `{ data: { id: string; catalogEntryId: string; createdAt: string; description: string; isAsync: boolean; method: string; name: string; service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'; updatedAt: string; userId: string; params?: object; paramsSchema?: object; }; }`\n\n  - `data: { id: string; catalogEntryId: string; createdAt: string; description: string; isAsync: boolean; method: string; name: string; service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'; updatedAt: string; userId: string; params?: object; paramsSchema?: object; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst action = await client.workflows.actions.create({ catalogEntryId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', name: 'x' });\n\nconsole.log(action);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.actions.create',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst action = await client.workflows.actions.create({\n  catalogEntryId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  name: 'x',\n});\n\nconsole.log(action.data);",
      },
      python: {
        method: 'workflows.actions.create',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\naction = client.workflows.actions.create(\n    catalog_entry_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    name="x",\n)\nprint(action.data)',
      },
      go: {
        method: 'client.Workflows.Actions.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taction, err := client.Workflows.Actions.New(context.TODO(), mobileruncloud.WorkflowActionNewParams{\n\t\tCatalogEntryID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tName:           "x",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", action.Data)\n}\n',
      },
      cli: {
        method: 'actions create',
        example:
          "mobilerun-cloud workflows:actions create \\\n  --api-key 'My API Key' \\\n  --catalog-entry-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --name x",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/actions \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "catalogEntryId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "name": "x"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/actions',
    httpMethod: 'get',
    summary: 'List actions',
    description: 'List actions',
    stainlessPath: '(resource) workflows.actions > (method) list',
    qualified: 'client.workflows.actions.list',
    params: [
      "orderBy?: 'name' | 'createdAt' | 'updatedAt';",
      "orderByDirection?: 'asc' | 'desc';",
      'page?: number;',
      'pageSize?: number;',
      'search?: string;',
      "service?: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks';",
    ],
    response:
      "{ items: { id: string; catalogEntryId: string; createdAt: string; description: string; isAsync: boolean; method: string; name: string; service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'; updatedAt: string; userId: string; params?: object; paramsSchema?: object; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }",
    markdown:
      "## list\n\n`client.workflows.actions.list(orderBy?: 'name' | 'createdAt' | 'updatedAt', orderByDirection?: 'asc' | 'desc', page?: number, pageSize?: number, search?: string, service?: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'): { items: action[]; pagination: pagination; }`\n\n**get** `/actions`\n\nList actions\n\n### Parameters\n\n- `orderBy?: 'name' | 'createdAt' | 'updatedAt'`\n\n- `orderByDirection?: 'asc' | 'desc'`\n\n- `page?: number`\n\n- `pageSize?: number`\n\n- `search?: string`\n\n- `service?: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'`\n\n### Returns\n\n- `{ items: { id: string; catalogEntryId: string; createdAt: string; description: string; isAsync: boolean; method: string; name: string; service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'; updatedAt: string; userId: string; params?: object; paramsSchema?: object; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }`\n\n  - `items: { id: string; catalogEntryId: string; createdAt: string; description: string; isAsync: boolean; method: string; name: string; service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'; updatedAt: string; userId: string; params?: object; paramsSchema?: object; }[]`\n  - `pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst actions = await client.workflows.actions.list();\n\nconsole.log(actions);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.actions.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst actions = await client.workflows.actions.list();\n\nconsole.log(actions.items);",
      },
      python: {
        method: 'workflows.actions.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nactions = client.workflows.actions.list()\nprint(actions.items)',
      },
      go: {
        method: 'client.Workflows.Actions.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tactions, err := client.Workflows.Actions.List(context.TODO(), mobileruncloud.WorkflowActionListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", actions.Items)\n}\n',
      },
      cli: {
        method: 'actions list',
        example: "mobilerun-cloud workflows:actions list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/actions \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/actions/{actionId}',
    httpMethod: 'get',
    summary: 'Get an action',
    description: 'Get an action',
    stainlessPath: '(resource) workflows.actions > (method) retrieve',
    qualified: 'client.workflows.actions.retrieve',
    params: ['actionId: string;'],
    response:
      "{ data: { id: string; catalogEntryId: string; createdAt: string; description: string; isAsync: boolean; method: string; name: string; service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'; updatedAt: string; userId: string; params?: object; paramsSchema?: object; }; }",
    markdown:
      "## retrieve\n\n`client.workflows.actions.retrieve(actionId: string): { data: action; }`\n\n**get** `/actions/{actionId}`\n\nGet an action\n\n### Parameters\n\n- `actionId: string`\n\n### Returns\n\n- `{ data: { id: string; catalogEntryId: string; createdAt: string; description: string; isAsync: boolean; method: string; name: string; service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'; updatedAt: string; userId: string; params?: object; paramsSchema?: object; }; }`\n\n  - `data: { id: string; catalogEntryId: string; createdAt: string; description: string; isAsync: boolean; method: string; name: string; service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'; updatedAt: string; userId: string; params?: object; paramsSchema?: object; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst action = await client.workflows.actions.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(action);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.actions.retrieve',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst action = await client.workflows.actions.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(action.data);",
      },
      python: {
        method: 'workflows.actions.retrieve',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\naction = client.workflows.actions.retrieve(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(action.data)',
      },
      go: {
        method: 'client.Workflows.Actions.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taction, err := client.Workflows.Actions.Get(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", action.Data)\n}\n',
      },
      cli: {
        method: 'actions retrieve',
        example:
          "mobilerun-cloud workflows:actions retrieve \\\n  --api-key 'My API Key' \\\n  --action-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/actions/$ACTION_ID \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/actions/{actionId}',
    httpMethod: 'patch',
    summary: 'Update an action',
    description: 'Update an action',
    stainlessPath: '(resource) workflows.actions > (method) update',
    qualified: 'client.workflows.actions.update',
    params: ['actionId: string;', 'description?: string;', 'name?: string;', 'params?: object;'],
    response:
      "{ data: { id: string; catalogEntryId: string; createdAt: string; description: string; isAsync: boolean; method: string; name: string; service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'; updatedAt: string; userId: string; params?: object; paramsSchema?: object; }; }",
    markdown:
      "## update\n\n`client.workflows.actions.update(actionId: string, description?: string, name?: string, params?: object): { data: action; }`\n\n**patch** `/actions/{actionId}`\n\nUpdate an action\n\n### Parameters\n\n- `actionId: string`\n\n- `description?: string`\n\n- `name?: string`\n\n- `params?: object`\n\n### Returns\n\n- `{ data: { id: string; catalogEntryId: string; createdAt: string; description: string; isAsync: boolean; method: string; name: string; service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'; updatedAt: string; userId: string; params?: object; paramsSchema?: object; }; }`\n\n  - `data: { id: string; catalogEntryId: string; createdAt: string; description: string; isAsync: boolean; method: string; name: string; service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'; updatedAt: string; userId: string; params?: object; paramsSchema?: object; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst action = await client.workflows.actions.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(action);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.actions.update',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst action = await client.workflows.actions.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(action.data);",
      },
      python: {
        method: 'workflows.actions.update',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\naction = client.workflows.actions.update(\n    action_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(action.data)',
      },
      go: {
        method: 'client.Workflows.Actions.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taction, err := client.Workflows.Actions.Update(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tmobileruncloud.WorkflowActionUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", action.Data)\n}\n',
      },
      cli: {
        method: 'actions update',
        example:
          "mobilerun-cloud workflows:actions update \\\n  --api-key 'My API Key' \\\n  --action-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/actions/$ACTION_ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/actions/{actionId}',
    httpMethod: 'delete',
    summary: 'Delete an action',
    description: 'Delete an action',
    stainlessPath: '(resource) workflows.actions > (method) delete',
    qualified: 'client.workflows.actions.delete',
    params: ['actionId: string;'],
    response: '{ message: string; }',
    markdown:
      "## delete\n\n`client.workflows.actions.delete(actionId: string): { message: string; }`\n\n**delete** `/actions/{actionId}`\n\nDelete an action\n\n### Parameters\n\n- `actionId: string`\n\n### Returns\n\n- `{ message: string; }`\n\n  - `message: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst action = await client.workflows.actions.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(action);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.actions.delete',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst action = await client.workflows.actions.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(action.message);",
      },
      python: {
        method: 'workflows.actions.delete',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\naction = client.workflows.actions.delete(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(action.message)',
      },
      go: {
        method: 'client.Workflows.Actions.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taction, err := client.Workflows.Actions.Delete(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", action.Message)\n}\n',
      },
      cli: {
        method: 'actions delete',
        example:
          "mobilerun-cloud workflows:actions delete \\\n  --api-key 'My API Key' \\\n  --action-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/actions/$ACTION_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/actions/services',
    httpMethod: 'get',
    summary: 'List available services',
    description: 'List available services',
    stainlessPath: '(resource) workflows.actions.services > (method) list',
    qualified: 'client.workflows.actions.services.list',
    response: '{ data: string[]; }',
    markdown:
      "## list\n\n`client.workflows.actions.services.list(): { data: string[]; }`\n\n**get** `/actions/services`\n\nList available services\n\n### Returns\n\n- `{ data: string[]; }`\n\n  - `data: string[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst services = await client.workflows.actions.services.list();\n\nconsole.log(services);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.actions.services.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst services = await client.workflows.actions.services.list();\n\nconsole.log(services.data);",
      },
      python: {
        method: 'workflows.actions.services.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nservices = client.workflows.actions.services.list()\nprint(services.data)',
      },
      go: {
        method: 'client.Workflows.Actions.Services.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tservices, err := client.Workflows.Actions.Services.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", services.Data)\n}\n',
      },
      cli: {
        method: 'services list',
        example: "mobilerun-cloud workflows:actions:services list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/actions/services \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'list_methods',
    endpoint: '/actions/services/{service}/methods',
    httpMethod: 'get',
    summary: 'List allowed methods for a service',
    description: 'List allowed methods for a service',
    stainlessPath: '(resource) workflows.actions.services > (method) list_methods',
    qualified: 'client.workflows.actions.services.listMethods',
    params: ['service: string;'],
    response:
      "{ data: { isAsync: boolean; method: string; params: { description: string; name: string; required: boolean; type: 'string' | 'number' | 'boolean' | 'object' | 'array'; default?: object; example?: object; }[]; requiresTarget: boolean; }[]; }",
    markdown:
      "## list_methods\n\n`client.workflows.actions.services.listMethods(service: string): { data: object[]; }`\n\n**get** `/actions/services/{service}/methods`\n\nList allowed methods for a service\n\n### Parameters\n\n- `service: string`\n\n### Returns\n\n- `{ data: { isAsync: boolean; method: string; params: { description: string; name: string; required: boolean; type: 'string' | 'number' | 'boolean' | 'object' | 'array'; default?: object; example?: object; }[]; requiresTarget: boolean; }[]; }`\n\n  - `data: { isAsync: boolean; method: string; params: { description: string; name: string; required: boolean; type: 'string' | 'number' | 'boolean' | 'object' | 'array'; default?: object; example?: object; }[]; requiresTarget: boolean; }[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.workflows.actions.services.listMethods('x');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.actions.services.listMethods',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.workflows.actions.services.listMethods('x');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'workflows.actions.services.list_methods',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.workflows.actions.services.list_methods(\n    "x",\n)\nprint(response.data)',
      },
      go: {
        method: 'client.Workflows.Actions.Services.ListMethods',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Workflows.Actions.Services.ListMethods(context.TODO(), "x")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      cli: {
        method: 'services list_methods',
        example:
          "mobilerun-cloud workflows:actions:services list-methods \\\n  --api-key 'My API Key' \\\n  --service x",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/actions/services/$SERVICE/methods \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/flows',
    httpMethod: 'post',
    summary: 'Create a flow',
    description: 'Create a flow',
    stainlessPath: '(resource) workflows.flows > (method) create',
    qualified: 'client.workflows.flows.create',
    params: [
      'actions: { actionId: string; position: number; children?: { actionId: string; position: number; continueOnError?: boolean; deviceId?: string; nameOverride?: string; overrides?: object; }[]; continueOnError?: boolean; deviceId?: string; nameOverride?: string; overrides?: { params?: object; }; }[];',
      'name: string;',
      'triggerId: string;',
      "cooldownScope?: 'flow' | 'device';",
      'cooldownSeconds?: number;',
      'description?: string;',
      'enabled?: boolean;',
    ],
    response:
      "{ data: { id: string; blockedAt: string; consecutiveFailures: number; cooldownScope: 'flow' | 'device'; cooldownSeconds: number; createdAt: string; description: string; enabled: boolean; lastFailureAt: string; lastFailureCode: 'device_not_found' | 'permission_denied' | 'client_error' | 'transient' | 'logic'; lastTriggeredAt: string; name: string; status: 'healthy' | 'failing' | 'blocked'; triggerId: string; updatedAt: string; userId: string; }; }",
    markdown:
      "## create\n\n`client.workflows.flows.create(actions: { actionId: string; position: number; children?: object[]; continueOnError?: boolean; deviceId?: string; nameOverride?: string; overrides?: object; }[], name: string, triggerId: string, cooldownScope?: 'flow' | 'device', cooldownSeconds?: number, description?: string, enabled?: boolean): { data: flow; }`\n\n**post** `/flows`\n\nCreate a flow\n\n### Parameters\n\n- `actions: { actionId: string; position: number; children?: { actionId: string; position: number; continueOnError?: boolean; deviceId?: string; nameOverride?: string; overrides?: object; }[]; continueOnError?: boolean; deviceId?: string; nameOverride?: string; overrides?: { params?: object; }; }[]`\n\n- `name: string`\n\n- `triggerId: string`\n\n- `cooldownScope?: 'flow' | 'device'`\n\n- `cooldownSeconds?: number`\n\n- `description?: string`\n\n- `enabled?: boolean`\n\n### Returns\n\n- `{ data: { id: string; blockedAt: string; consecutiveFailures: number; cooldownScope: 'flow' | 'device'; cooldownSeconds: number; createdAt: string; description: string; enabled: boolean; lastFailureAt: string; lastFailureCode: 'device_not_found' | 'permission_denied' | 'client_error' | 'transient' | 'logic'; lastTriggeredAt: string; name: string; status: 'healthy' | 'failing' | 'blocked'; triggerId: string; updatedAt: string; userId: string; }; }`\n\n  - `data: { id: string; blockedAt: string; consecutiveFailures: number; cooldownScope: 'flow' | 'device'; cooldownSeconds: number; createdAt: string; description: string; enabled: boolean; lastFailureAt: string; lastFailureCode: 'device_not_found' | 'permission_denied' | 'client_error' | 'transient' | 'logic'; lastTriggeredAt: string; name: string; status: 'healthy' | 'failing' | 'blocked'; triggerId: string; updatedAt: string; userId: string; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst flow = await client.workflows.flows.create({\n  actions: [{ actionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', position: 0 }],\n  name: 'x',\n  triggerId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(flow);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.flows.create',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst flow = await client.workflows.flows.create({\n  actions: [{ actionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', position: 0 }],\n  name: 'x',\n  triggerId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(flow.data);",
      },
      python: {
        method: 'workflows.flows.create',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nflow = client.workflows.flows.create(\n    actions=[{\n        "action_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n        "position": 0,\n    }],\n    name="x",\n    trigger_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(flow.data)',
      },
      go: {
        method: 'client.Workflows.Flows.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tflow, err := client.Workflows.Flows.New(context.TODO(), mobileruncloud.WorkflowFlowNewParams{\n\t\tActions: []mobileruncloud.WorkflowFlowNewParamsAction{{\n\t\t\tActionID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t\tPosition: 0,\n\t\t}},\n\t\tName:      "x",\n\t\tTriggerID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", flow.Data)\n}\n',
      },
      cli: {
        method: 'flows create',
        example:
          "mobilerun-cloud workflows:flows create \\\n  --api-key 'My API Key' \\\n  --action '{actionId: 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e, position: 0}' \\\n  --name x \\\n  --trigger-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/flows \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "actions": [\n            {\n              "actionId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n              "position": 0\n            }\n          ],\n          "name": "x",\n          "triggerId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/flows',
    httpMethod: 'get',
    summary: 'List flows',
    description: 'List flows',
    stainlessPath: '(resource) workflows.flows > (method) list',
    qualified: 'client.workflows.flows.list',
    params: [
      'enabled?: boolean;',
      "orderBy?: 'name' | 'createdAt' | 'updatedAt';",
      "orderByDirection?: 'asc' | 'desc';",
      'page?: number;',
      'pageSize?: number;',
      'search?: string;',
      "status?: 'healthy' | 'failing' | 'blocked'[];",
      'triggerId?: string;',
    ],
    response:
      "{ items: { id: string; blockedAt: string; consecutiveFailures: number; cooldownScope: 'flow' | 'device'; cooldownSeconds: number; createdAt: string; description: string; enabled: boolean; lastFailureAt: string; lastFailureCode: 'device_not_found' | 'permission_denied' | 'client_error' | 'transient' | 'logic'; lastTriggeredAt: string; name: string; status: 'healthy' | 'failing' | 'blocked'; triggerId: string; updatedAt: string; userId: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }",
    markdown:
      "## list\n\n`client.workflows.flows.list(enabled?: boolean, orderBy?: 'name' | 'createdAt' | 'updatedAt', orderByDirection?: 'asc' | 'desc', page?: number, pageSize?: number, search?: string, status?: 'healthy' | 'failing' | 'blocked'[], triggerId?: string): { items: flow[]; pagination: pagination; }`\n\n**get** `/flows`\n\nList flows\n\n### Parameters\n\n- `enabled?: boolean`\n\n- `orderBy?: 'name' | 'createdAt' | 'updatedAt'`\n\n- `orderByDirection?: 'asc' | 'desc'`\n\n- `page?: number`\n\n- `pageSize?: number`\n\n- `search?: string`\n\n- `status?: 'healthy' | 'failing' | 'blocked'[]`\n\n- `triggerId?: string`\n\n### Returns\n\n- `{ items: { id: string; blockedAt: string; consecutiveFailures: number; cooldownScope: 'flow' | 'device'; cooldownSeconds: number; createdAt: string; description: string; enabled: boolean; lastFailureAt: string; lastFailureCode: 'device_not_found' | 'permission_denied' | 'client_error' | 'transient' | 'logic'; lastTriggeredAt: string; name: string; status: 'healthy' | 'failing' | 'blocked'; triggerId: string; updatedAt: string; userId: string; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }`\n\n  - `items: { id: string; blockedAt: string; consecutiveFailures: number; cooldownScope: 'flow' | 'device'; cooldownSeconds: number; createdAt: string; description: string; enabled: boolean; lastFailureAt: string; lastFailureCode: 'device_not_found' | 'permission_denied' | 'client_error' | 'transient' | 'logic'; lastTriggeredAt: string; name: string; status: 'healthy' | 'failing' | 'blocked'; triggerId: string; updatedAt: string; userId: string; }[]`\n  - `pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst flows = await client.workflows.flows.list();\n\nconsole.log(flows);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.flows.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst flows = await client.workflows.flows.list();\n\nconsole.log(flows.items);",
      },
      python: {
        method: 'workflows.flows.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nflows = client.workflows.flows.list()\nprint(flows.items)',
      },
      go: {
        method: 'client.Workflows.Flows.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tflows, err := client.Workflows.Flows.List(context.TODO(), mobileruncloud.WorkflowFlowListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", flows.Items)\n}\n',
      },
      cli: {
        method: 'flows list',
        example: "mobilerun-cloud workflows:flows list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/flows \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/flows/{flowId}',
    httpMethod: 'get',
    summary: 'Get a flow',
    description: 'Get a flow',
    stainlessPath: '(resource) workflows.flows > (method) retrieve',
    qualified: 'client.workflows.flows.retrieve',
    params: ['flowId: string;'],
    response:
      "{ data: { id: string; blockedAt: string; consecutiveFailures: number; cooldownScope: 'flow' | 'device'; cooldownSeconds: number; createdAt: string; description: string; enabled: boolean; lastFailureAt: string; lastFailureCode: 'device_not_found' | 'permission_denied' | 'client_error' | 'transient' | 'logic'; lastTriggeredAt: string; name: string; status: 'healthy' | 'failing' | 'blocked'; triggerId: string; updatedAt: string; userId: string; }; }",
    markdown:
      "## retrieve\n\n`client.workflows.flows.retrieve(flowId: string): { data: flow; }`\n\n**get** `/flows/{flowId}`\n\nGet a flow\n\n### Parameters\n\n- `flowId: string`\n\n### Returns\n\n- `{ data: { id: string; blockedAt: string; consecutiveFailures: number; cooldownScope: 'flow' | 'device'; cooldownSeconds: number; createdAt: string; description: string; enabled: boolean; lastFailureAt: string; lastFailureCode: 'device_not_found' | 'permission_denied' | 'client_error' | 'transient' | 'logic'; lastTriggeredAt: string; name: string; status: 'healthy' | 'failing' | 'blocked'; triggerId: string; updatedAt: string; userId: string; }; }`\n\n  - `data: { id: string; blockedAt: string; consecutiveFailures: number; cooldownScope: 'flow' | 'device'; cooldownSeconds: number; createdAt: string; description: string; enabled: boolean; lastFailureAt: string; lastFailureCode: 'device_not_found' | 'permission_denied' | 'client_error' | 'transient' | 'logic'; lastTriggeredAt: string; name: string; status: 'healthy' | 'failing' | 'blocked'; triggerId: string; updatedAt: string; userId: string; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst flow = await client.workflows.flows.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(flow);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.flows.retrieve',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst flow = await client.workflows.flows.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(flow.data);",
      },
      python: {
        method: 'workflows.flows.retrieve',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nflow = client.workflows.flows.retrieve(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(flow.data)',
      },
      go: {
        method: 'client.Workflows.Flows.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tflow, err := client.Workflows.Flows.Get(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", flow.Data)\n}\n',
      },
      cli: {
        method: 'flows retrieve',
        example:
          "mobilerun-cloud workflows:flows retrieve \\\n  --api-key 'My API Key' \\\n  --flow-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/flows/$FLOW_ID \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/flows/{flowId}',
    httpMethod: 'patch',
    summary: 'Update a flow',
    description: 'Update a flow',
    stainlessPath: '(resource) workflows.flows > (method) update',
    qualified: 'client.workflows.flows.update',
    params: [
      'flowId: string;',
      "cooldownScope?: 'flow' | 'device';",
      'cooldownSeconds?: number;',
      'description?: string;',
      'enabled?: boolean;',
      'name?: string;',
      'triggerId?: string;',
    ],
    response:
      "{ data: { id: string; blockedAt: string; consecutiveFailures: number; cooldownScope: 'flow' | 'device'; cooldownSeconds: number; createdAt: string; description: string; enabled: boolean; lastFailureAt: string; lastFailureCode: 'device_not_found' | 'permission_denied' | 'client_error' | 'transient' | 'logic'; lastTriggeredAt: string; name: string; status: 'healthy' | 'failing' | 'blocked'; triggerId: string; updatedAt: string; userId: string; }; }",
    markdown:
      "## update\n\n`client.workflows.flows.update(flowId: string, cooldownScope?: 'flow' | 'device', cooldownSeconds?: number, description?: string, enabled?: boolean, name?: string, triggerId?: string): { data: flow; }`\n\n**patch** `/flows/{flowId}`\n\nUpdate a flow\n\n### Parameters\n\n- `flowId: string`\n\n- `cooldownScope?: 'flow' | 'device'`\n\n- `cooldownSeconds?: number`\n\n- `description?: string`\n\n- `enabled?: boolean`\n\n- `name?: string`\n\n- `triggerId?: string`\n\n### Returns\n\n- `{ data: { id: string; blockedAt: string; consecutiveFailures: number; cooldownScope: 'flow' | 'device'; cooldownSeconds: number; createdAt: string; description: string; enabled: boolean; lastFailureAt: string; lastFailureCode: 'device_not_found' | 'permission_denied' | 'client_error' | 'transient' | 'logic'; lastTriggeredAt: string; name: string; status: 'healthy' | 'failing' | 'blocked'; triggerId: string; updatedAt: string; userId: string; }; }`\n\n  - `data: { id: string; blockedAt: string; consecutiveFailures: number; cooldownScope: 'flow' | 'device'; cooldownSeconds: number; createdAt: string; description: string; enabled: boolean; lastFailureAt: string; lastFailureCode: 'device_not_found' | 'permission_denied' | 'client_error' | 'transient' | 'logic'; lastTriggeredAt: string; name: string; status: 'healthy' | 'failing' | 'blocked'; triggerId: string; updatedAt: string; userId: string; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst flow = await client.workflows.flows.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(flow);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.flows.update',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst flow = await client.workflows.flows.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(flow.data);",
      },
      python: {
        method: 'workflows.flows.update',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nflow = client.workflows.flows.update(\n    flow_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(flow.data)',
      },
      go: {
        method: 'client.Workflows.Flows.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tflow, err := client.Workflows.Flows.Update(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tmobileruncloud.WorkflowFlowUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", flow.Data)\n}\n',
      },
      cli: {
        method: 'flows update',
        example:
          "mobilerun-cloud workflows:flows update \\\n  --api-key 'My API Key' \\\n  --flow-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/flows/$FLOW_ID \\\n    -X PATCH \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/flows/{flowId}',
    httpMethod: 'delete',
    summary: 'Delete a flow',
    description: 'Delete a flow',
    stainlessPath: '(resource) workflows.flows > (method) delete',
    qualified: 'client.workflows.flows.delete',
    params: ['flowId: string;'],
    response: '{ message: string; }',
    markdown:
      "## delete\n\n`client.workflows.flows.delete(flowId: string): { message: string; }`\n\n**delete** `/flows/{flowId}`\n\nDelete a flow\n\n### Parameters\n\n- `flowId: string`\n\n### Returns\n\n- `{ message: string; }`\n\n  - `message: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst flow = await client.workflows.flows.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(flow);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.flows.delete',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst flow = await client.workflows.flows.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(flow.message);",
      },
      python: {
        method: 'workflows.flows.delete',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nflow = client.workflows.flows.delete(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(flow.message)',
      },
      go: {
        method: 'client.Workflows.Flows.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tflow, err := client.Workflows.Flows.Delete(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", flow.Message)\n}\n',
      },
      cli: {
        method: 'flows delete',
        example:
          "mobilerun-cloud workflows:flows delete \\\n  --api-key 'My API Key' \\\n  --flow-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/flows/$FLOW_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'clone',
    endpoint: '/flows/{flowId}/clone',
    httpMethod: 'post',
    summary: 'Clone a flow',
    description: 'Clone a flow',
    stainlessPath: '(resource) workflows.flows > (method) clone',
    qualified: 'client.workflows.flows.clone',
    params: ['flowId: string;', 'name?: string;'],
    response:
      "{ data: { id: string; blockedAt: string; consecutiveFailures: number; cooldownScope: 'flow' | 'device'; cooldownSeconds: number; createdAt: string; description: string; enabled: boolean; lastFailureAt: string; lastFailureCode: 'device_not_found' | 'permission_denied' | 'client_error' | 'transient' | 'logic'; lastTriggeredAt: string; name: string; status: 'healthy' | 'failing' | 'blocked'; triggerId: string; updatedAt: string; userId: string; }; }",
    markdown:
      "## clone\n\n`client.workflows.flows.clone(flowId: string, name?: string): { data: flow; }`\n\n**post** `/flows/{flowId}/clone`\n\nClone a flow\n\n### Parameters\n\n- `flowId: string`\n\n- `name?: string`\n\n### Returns\n\n- `{ data: { id: string; blockedAt: string; consecutiveFailures: number; cooldownScope: 'flow' | 'device'; cooldownSeconds: number; createdAt: string; description: string; enabled: boolean; lastFailureAt: string; lastFailureCode: 'device_not_found' | 'permission_denied' | 'client_error' | 'transient' | 'logic'; lastTriggeredAt: string; name: string; status: 'healthy' | 'failing' | 'blocked'; triggerId: string; updatedAt: string; userId: string; }; }`\n\n  - `data: { id: string; blockedAt: string; consecutiveFailures: number; cooldownScope: 'flow' | 'device'; cooldownSeconds: number; createdAt: string; description: string; enabled: boolean; lastFailureAt: string; lastFailureCode: 'device_not_found' | 'permission_denied' | 'client_error' | 'transient' | 'logic'; lastTriggeredAt: string; name: string; status: 'healthy' | 'failing' | 'blocked'; triggerId: string; updatedAt: string; userId: string; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.workflows.flows.clone('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.flows.clone',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.workflows.flows.clone('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'workflows.flows.clone',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.workflows.flows.clone(\n    flow_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      go: {
        method: 'client.Workflows.Flows.Clone',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Workflows.Flows.Clone(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tmobileruncloud.WorkflowFlowCloneParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      cli: {
        method: 'flows clone',
        example:
          "mobilerun-cloud workflows:flows clone \\\n  --api-key 'My API Key' \\\n  --flow-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/flows/$FLOW_ID/clone \\\n    -X POST \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'unblock',
    endpoint: '/flows/{flowId}/unblock',
    httpMethod: 'post',
    summary:
      "Clear a flow's blocked status after fixing the underlying issue. Idempotent — safe to call on already-healthy flows.",
    description:
      "Clear a flow's blocked status after fixing the underlying issue. Idempotent — safe to call on already-healthy flows.",
    stainlessPath: '(resource) workflows.flows > (method) unblock',
    qualified: 'client.workflows.flows.unblock',
    params: ['flowId: string;'],
    response:
      "{ data: { id: string; blockedAt: string; consecutiveFailures: number; cooldownScope: 'flow' | 'device'; cooldownSeconds: number; createdAt: string; description: string; enabled: boolean; lastFailureAt: string; lastFailureCode: 'device_not_found' | 'permission_denied' | 'client_error' | 'transient' | 'logic'; lastTriggeredAt: string; name: string; status: 'healthy' | 'failing' | 'blocked'; triggerId: string; updatedAt: string; userId: string; }; }",
    markdown:
      "## unblock\n\n`client.workflows.flows.unblock(flowId: string): { data: flow; }`\n\n**post** `/flows/{flowId}/unblock`\n\nClear a flow's blocked status after fixing the underlying issue. Idempotent — safe to call on already-healthy flows.\n\n### Parameters\n\n- `flowId: string`\n\n### Returns\n\n- `{ data: { id: string; blockedAt: string; consecutiveFailures: number; cooldownScope: 'flow' | 'device'; cooldownSeconds: number; createdAt: string; description: string; enabled: boolean; lastFailureAt: string; lastFailureCode: 'device_not_found' | 'permission_denied' | 'client_error' | 'transient' | 'logic'; lastTriggeredAt: string; name: string; status: 'healthy' | 'failing' | 'blocked'; triggerId: string; updatedAt: string; userId: string; }; }`\n\n  - `data: { id: string; blockedAt: string; consecutiveFailures: number; cooldownScope: 'flow' | 'device'; cooldownSeconds: number; createdAt: string; description: string; enabled: boolean; lastFailureAt: string; lastFailureCode: 'device_not_found' | 'permission_denied' | 'client_error' | 'transient' | 'logic'; lastTriggeredAt: string; name: string; status: 'healthy' | 'failing' | 'blocked'; triggerId: string; updatedAt: string; userId: string; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.workflows.flows.unblock('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.flows.unblock',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.workflows.flows.unblock('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
      python: {
        method: 'workflows.flows.unblock',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.workflows.flows.unblock(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      go: {
        method: 'client.Workflows.Flows.Unblock',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Workflows.Flows.Unblock(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      cli: {
        method: 'flows unblock',
        example:
          "mobilerun-cloud workflows:flows unblock \\\n  --api-key 'My API Key' \\\n  --flow-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/flows/$FLOW_ID/unblock \\\n    -X POST \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/flows/{flowId}/actions',
    httpMethod: 'get',
    summary: 'List actions for a flow',
    description: 'List actions for a flow',
    stainlessPath: '(resource) workflows.flows.actions > (method) list',
    qualified: 'client.workflows.flows.actions.list',
    params: ['flowId: string;'],
    response:
      '{ data: { id: string; actionId: string; continueOnError: boolean; createdAt: string; deviceId: string; flowId: string; nameOverride: string; overrides: object; parentFlowActionId: string; position: number; }[]; }',
    markdown:
      "## list\n\n`client.workflows.flows.actions.list(flowId: string): { data: flow_action[]; }`\n\n**get** `/flows/{flowId}/actions`\n\nList actions for a flow\n\n### Parameters\n\n- `flowId: string`\n\n### Returns\n\n- `{ data: { id: string; actionId: string; continueOnError: boolean; createdAt: string; deviceId: string; flowId: string; nameOverride: string; overrides: object; parentFlowActionId: string; position: number; }[]; }`\n\n  - `data: { id: string; actionId: string; continueOnError: boolean; createdAt: string; deviceId: string; flowId: string; nameOverride: string; overrides: { params?: object; }; parentFlowActionId: string; position: number; }[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst actions = await client.workflows.flows.actions.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(actions);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.flows.actions.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst actions = await client.workflows.flows.actions.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(actions.data);",
      },
      python: {
        method: 'workflows.flows.actions.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nactions = client.workflows.flows.actions.list(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(actions.data)',
      },
      go: {
        method: 'client.Workflows.Flows.Actions.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tactions, err := client.Workflows.Flows.Actions.List(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", actions.Data)\n}\n',
      },
      cli: {
        method: 'actions list',
        example:
          "mobilerun-cloud workflows:flows:actions list \\\n  --api-key 'My API Key' \\\n  --flow-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/flows/$FLOW_ID/actions \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'replace',
    endpoint: '/flows/{flowId}/actions',
    httpMethod: 'put',
    summary: 'Replace all actions for a flow',
    description: 'Replace all actions for a flow',
    stainlessPath: '(resource) workflows.flows.actions > (method) replace',
    qualified: 'client.workflows.flows.actions.replace',
    params: [
      'flowId: string;',
      'actions: { actionId: string; position: number; children?: { actionId: string; position: number; continueOnError?: boolean; deviceId?: string; nameOverride?: string; overrides?: object; }[]; continueOnError?: boolean; deviceId?: string; nameOverride?: string; overrides?: { params?: object; }; }[];',
    ],
    response:
      '{ data: { id: string; actionId: string; continueOnError: boolean; createdAt: string; deviceId: string; flowId: string; nameOverride: string; overrides: object; parentFlowActionId: string; position: number; }[]; }',
    markdown:
      "## replace\n\n`client.workflows.flows.actions.replace(flowId: string, actions: { actionId: string; position: number; children?: object[]; continueOnError?: boolean; deviceId?: string; nameOverride?: string; overrides?: object; }[]): { data: flow_action[]; }`\n\n**put** `/flows/{flowId}/actions`\n\nReplace all actions for a flow\n\n### Parameters\n\n- `flowId: string`\n\n- `actions: { actionId: string; position: number; children?: { actionId: string; position: number; continueOnError?: boolean; deviceId?: string; nameOverride?: string; overrides?: object; }[]; continueOnError?: boolean; deviceId?: string; nameOverride?: string; overrides?: { params?: object; }; }[]`\n\n### Returns\n\n- `{ data: { id: string; actionId: string; continueOnError: boolean; createdAt: string; deviceId: string; flowId: string; nameOverride: string; overrides: object; parentFlowActionId: string; position: number; }[]; }`\n\n  - `data: { id: string; actionId: string; continueOnError: boolean; createdAt: string; deviceId: string; flowId: string; nameOverride: string; overrides: { params?: object; }; parentFlowActionId: string; position: number; }[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.workflows.flows.actions.replace('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { actions: [{ actionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', position: 0 }] });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.flows.actions.replace',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.workflows.flows.actions.replace(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { actions: [{ actionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', position: 0 }] },\n);\n\nconsole.log(response.data);",
      },
      python: {
        method: 'workflows.flows.actions.replace',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.workflows.flows.actions.replace(\n    flow_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    actions=[{\n        "action_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n        "position": 0,\n    }],\n)\nprint(response.data)',
      },
      go: {
        method: 'client.Workflows.Flows.Actions.Replace',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Workflows.Flows.Actions.Replace(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tmobileruncloud.WorkflowFlowActionReplaceParams{\n\t\t\tActions: []mobileruncloud.WorkflowFlowActionReplaceParamsAction{{\n\t\t\t\tActionID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t\t\tPosition: 0,\n\t\t\t}},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      cli: {
        method: 'actions replace',
        example:
          "mobilerun-cloud workflows:flows:actions replace \\\n  --api-key 'My API Key' \\\n  --flow-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --action '{actionId: 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e, position: 0}'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/flows/$FLOW_ID/actions \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "actions": [\n            {\n              "actionId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n              "position": 0\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'add',
    endpoint: '/flows/{flowId}/actions',
    httpMethod: 'post',
    summary: 'Add an action to a flow',
    description: 'Add an action to a flow',
    stainlessPath: '(resource) workflows.flows.actions > (method) add',
    qualified: 'client.workflows.flows.actions.add',
    params: [
      'flowId: string;',
      'actionId: string;',
      'position: number;',
      'children?: { actionId: string; position: number; continueOnError?: boolean; deviceId?: string; nameOverride?: string; overrides?: { params?: object; }; }[];',
      'continueOnError?: boolean;',
      'deviceId?: string;',
      'nameOverride?: string;',
      'overrides?: { params?: object; };',
      'parentFlowActionId?: string;',
    ],
    response:
      '{ data: { id: string; actionId: string; continueOnError: boolean; createdAt: string; deviceId: string; flowId: string; nameOverride: string; overrides: object; parentFlowActionId: string; position: number; }; }',
    markdown:
      "## add\n\n`client.workflows.flows.actions.add(flowId: string, actionId: string, position: number, children?: { actionId: string; position: number; continueOnError?: boolean; deviceId?: string; nameOverride?: string; overrides?: flow_action_overrides; }[], continueOnError?: boolean, deviceId?: string, nameOverride?: string, overrides?: { params?: object; }, parentFlowActionId?: string): { data: flow_action; }`\n\n**post** `/flows/{flowId}/actions`\n\nAdd an action to a flow\n\n### Parameters\n\n- `flowId: string`\n\n- `actionId: string`\n\n- `position: number`\n\n- `children?: { actionId: string; position: number; continueOnError?: boolean; deviceId?: string; nameOverride?: string; overrides?: { params?: object; }; }[]`\n\n- `continueOnError?: boolean`\n\n- `deviceId?: string`\n\n- `nameOverride?: string`\n\n- `overrides?: { params?: object; }`\n  - `params?: object`\n\n- `parentFlowActionId?: string`\n\n### Returns\n\n- `{ data: { id: string; actionId: string; continueOnError: boolean; createdAt: string; deviceId: string; flowId: string; nameOverride: string; overrides: object; parentFlowActionId: string; position: number; }; }`\n\n  - `data: { id: string; actionId: string; continueOnError: boolean; createdAt: string; deviceId: string; flowId: string; nameOverride: string; overrides: { params?: object; }; parentFlowActionId: string; position: number; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.workflows.flows.actions.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { actionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', position: 0 });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.flows.actions.add',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.workflows.flows.actions.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  actionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  position: 0,\n});\n\nconsole.log(response.data);",
      },
      python: {
        method: 'workflows.flows.actions.add',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.workflows.flows.actions.add(\n    flow_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    action_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    position=0,\n)\nprint(response.data)',
      },
      go: {
        method: 'client.Workflows.Flows.Actions.Add',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Workflows.Flows.Actions.Add(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tmobileruncloud.WorkflowFlowActionAddParams{\n\t\t\tActionID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t\tPosition: 0,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      cli: {
        method: 'actions add',
        example:
          "mobilerun-cloud workflows:flows:actions add \\\n  --api-key 'My API Key' \\\n  --flow-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --action-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --position 0",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/flows/$FLOW_ID/actions \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "actionId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "position": 0\n        }\'',
      },
    },
  },
  {
    name: 'remove',
    endpoint: '/flows/{flowId}/actions/{flowActionId}',
    httpMethod: 'delete',
    summary: 'Remove an action from a flow',
    description: 'Remove an action from a flow',
    stainlessPath: '(resource) workflows.flows.actions > (method) remove',
    qualified: 'client.workflows.flows.actions.remove',
    params: ['flowId: string;', 'flowActionId: string;'],
    response: '{ message: string; }',
    markdown:
      "## remove\n\n`client.workflows.flows.actions.remove(flowId: string, flowActionId: string): { message: string; }`\n\n**delete** `/flows/{flowId}/actions/{flowActionId}`\n\nRemove an action from a flow\n\n### Parameters\n\n- `flowId: string`\n\n- `flowActionId: string`\n\n### Returns\n\n- `{ message: string; }`\n\n  - `message: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst action = await client.workflows.flows.actions.remove('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { flowId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(action);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.flows.actions.remove',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst action = await client.workflows.flows.actions.remove('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  flowId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(action.message);",
      },
      python: {
        method: 'workflows.flows.actions.remove',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\naction = client.workflows.flows.actions.remove(\n    flow_action_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    flow_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(action.message)',
      },
      go: {
        method: 'client.Workflows.Flows.Actions.Remove',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taction, err := client.Workflows.Flows.Actions.Remove(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tmobileruncloud.WorkflowFlowActionRemoveParams{\n\t\t\tFlowID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", action.Message)\n}\n',
      },
      cli: {
        method: 'actions remove',
        example:
          "mobilerun-cloud workflows:flows:actions remove \\\n  --api-key 'My API Key' \\\n  --flow-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --flow-action-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/flows/$FLOW_ID/actions/$FLOW_ACTION_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'dry_run',
    endpoint: '/events/dry-run',
    httpMethod: 'post',
    summary: 'Simulate event matching (dry run)',
    description:
      'Simulate an event against all configured flows. Returns which flows would match and what actions would run, without storing the event or enqueuing jobs.',
    stainlessPath: '(resource) workflows.events > (method) dry_run',
    qualified: 'client.workflows.events.dryRun',
    params: ['eventType: string;', 'deviceId?: string;', 'payload?: object;'],
    response:
      '{ data: { matchedFlows: { actions: object[]; flow: flow; trigger: object; }[]; validation: { valid: boolean; errors?: object[]; }; }; }',
    markdown:
      "## dry_run\n\n`client.workflows.events.dryRun(eventType: string, deviceId?: string, payload?: object): { data: object; }`\n\n**post** `/events/dry-run`\n\nSimulate an event against all configured flows. Returns which flows would match and what actions would run, without storing the event or enqueuing jobs.\n\n### Parameters\n\n- `eventType: string`\n\n- `deviceId?: string`\n\n- `payload?: object`\n\n### Returns\n\n- `{ data: { matchedFlows: { actions: object[]; flow: flow; trigger: object; }[]; validation: { valid: boolean; errors?: object[]; }; }; }`\n\n  - `data: { matchedFlows: { actions: { continueOnError: boolean; method: string; name: string; service: 'tasks_api' | 'devices_api' | 'agents_api' | 'webhooks'; deviceId?: string; params?: object; }[]; flow: { id: string; blockedAt: string; consecutiveFailures: number; cooldownScope: 'flow' | 'device'; cooldownSeconds: number; createdAt: string; description: string; enabled: boolean; lastFailureAt: string; lastFailureCode: 'device_not_found' | 'permission_denied' | 'client_error' | 'transient' | 'logic'; lastTriggeredAt: string; name: string; status: 'healthy' | 'failing' | 'blocked'; triggerId: string; updatedAt: string; userId: string; }; trigger: { id: string; activation: 'event' | 'schedule' | 'custom'; createdAt: string; customPayloadSchema: object; description: string; eventType: string; name: string; scheduleRule: { type: 'once' | 'cron' | 'recurring'; dateTime?: string; expression?: string; rrule?: string; }; timezone: string; updatedAt: string; userId: string; conditions?: object; nextFireTime?: string; }; }[]; validation: { valid: boolean; errors?: { field: string; message: string; }[]; }; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.workflows.events.dryRun({ eventType: 'x' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.events.dryRun',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.workflows.events.dryRun({ eventType: 'x' });\n\nconsole.log(response.data);",
      },
      python: {
        method: 'workflows.events.dry_run',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.workflows.events.dry_run(\n    event_type="x",\n)\nprint(response.data)',
      },
      go: {
        method: 'client.Workflows.Events.DryRun',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Workflows.Events.DryRun(context.TODO(), mobileruncloud.WorkflowEventDryRunParams{\n\t\tEventType: "x",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      cli: {
        method: 'events dry_run',
        example: "mobilerun-cloud workflows:events dry-run \\\n  --api-key 'My API Key' \\\n  --event-type x",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/events/dry-run \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "eventType": "x"\n        }\'',
      },
    },
  },
  {
    name: 'ingest',
    endpoint: '/events/ingest',
    httpMethod: 'post',
    summary: 'Ingest an event',
    description: 'Ingest an event for trigger evaluation. Returns immediately with 202 Accepted.',
    stainlessPath: '(resource) workflows.events > (method) ingest',
    qualified: 'client.workflows.events.ingest',
    params: ['eventType: string;', 'deviceId?: string;', 'payload?: object;'],
    response: '{ eventId: string; }',
    markdown:
      "## ingest\n\n`client.workflows.events.ingest(eventType: string, deviceId?: string, payload?: object): { eventId: string; }`\n\n**post** `/events/ingest`\n\nIngest an event for trigger evaluation. Returns immediately with 202 Accepted.\n\n### Parameters\n\n- `eventType: string`\n\n- `deviceId?: string`\n\n- `payload?: object`\n\n### Returns\n\n- `{ eventId: string; }`\n\n  - `eventId: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.workflows.events.ingest({ eventType: 'x' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.events.ingest',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.workflows.events.ingest({ eventType: 'x' });\n\nconsole.log(response.eventId);",
      },
      python: {
        method: 'workflows.events.ingest',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.workflows.events.ingest(\n    event_type="x",\n)\nprint(response.event_id)',
      },
      go: {
        method: 'client.Workflows.Events.Ingest',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Workflows.Events.Ingest(context.TODO(), mobileruncloud.WorkflowEventIngestParams{\n\t\tEventType: "x",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.EventID)\n}\n',
      },
      cli: {
        method: 'events ingest',
        example: "mobilerun-cloud workflows:events ingest \\\n  --api-key 'My API Key' \\\n  --event-type x",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/events/ingest \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "eventType": "x"\n        }\'',
      },
    },
  },
  {
    name: 'register',
    endpoint: '/events/catalog/register',
    httpMethod: 'post',
    summary: 'Register event types in the catalog',
    description: 'Register event types in the catalog',
    stainlessPath: '(resource) workflows.events.catalog > (method) register',
    qualified: 'client.workflows.events.catalog.register',
    params: [
      "events: { eventType: string; label: string; description?: string; payloadSchema?: object; source?: 'device' | 'system' | 'webhook'; }[];",
    ],
    response: '{ message: string; }',
    markdown:
      "## register\n\n`client.workflows.events.catalog.register(events: { eventType: string; label: string; description?: string; payloadSchema?: object; source?: 'device' | 'system' | 'webhook'; }[]): { message: string; }`\n\n**post** `/events/catalog/register`\n\nRegister event types in the catalog\n\n### Parameters\n\n- `events: { eventType: string; label: string; description?: string; payloadSchema?: object; source?: 'device' | 'system' | 'webhook'; }[]`\n\n### Returns\n\n- `{ message: string; }`\n\n  - `message: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.workflows.events.catalog.register({ events: [{ eventType: 'x', label: 'x' }] });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.events.catalog.register',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.workflows.events.catalog.register({\n  events: [{ eventType: 'x', label: 'x' }],\n});\n\nconsole.log(response.message);",
      },
      python: {
        method: 'workflows.events.catalog.register',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.workflows.events.catalog.register(\n    events=[{\n        "event_type": "x",\n        "label": "x",\n    }],\n)\nprint(response.message)',
      },
      go: {
        method: 'client.Workflows.Events.Catalog.Register',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Workflows.Events.Catalog.Register(context.TODO(), mobileruncloud.WorkflowEventCatalogRegisterParams{\n\t\tEvents: []mobileruncloud.WorkflowEventCatalogRegisterParamsEvent{{\n\t\t\tEventType: "x",\n\t\t\tLabel:     "x",\n\t\t}},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Message)\n}\n',
      },
      cli: {
        method: 'catalog register',
        example:
          "mobilerun-cloud workflows:events:catalog register \\\n  --api-key 'My API Key' \\\n  --event '{eventType: x, label: x}'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/events/catalog/register \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "events": [\n            {\n              "eventType": "x",\n              "label": "x"\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/events/catalog',
    httpMethod: 'get',
    summary: 'List event catalog',
    description: 'List event catalog',
    stainlessPath: '(resource) workflows.events.catalog > (method) list',
    qualified: 'client.workflows.events.catalog.list',
    params: ['page?: number;', 'pageSize?: number;', "source?: 'device' | 'system' | 'webhook';"],
    response:
      '{ items: { createdAt: string; description: string; eventType: string; label: string; source: string; updatedAt: string; payloadSchema?: object; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }',
    markdown:
      "## list\n\n`client.workflows.events.catalog.list(page?: number, pageSize?: number, source?: 'device' | 'system' | 'webhook'): { items: object[]; pagination: pagination; }`\n\n**get** `/events/catalog`\n\nList event catalog\n\n### Parameters\n\n- `page?: number`\n\n- `pageSize?: number`\n\n- `source?: 'device' | 'system' | 'webhook'`\n\n### Returns\n\n- `{ items: { createdAt: string; description: string; eventType: string; label: string; source: string; updatedAt: string; payloadSchema?: object; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }`\n\n  - `items: { createdAt: string; description: string; eventType: string; label: string; source: string; updatedAt: string; payloadSchema?: object; }[]`\n  - `pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst catalogs = await client.workflows.events.catalog.list();\n\nconsole.log(catalogs);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.events.catalog.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst catalogs = await client.workflows.events.catalog.list();\n\nconsole.log(catalogs.items);",
      },
      python: {
        method: 'workflows.events.catalog.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\ncatalogs = client.workflows.events.catalog.list()\nprint(catalogs.items)',
      },
      go: {
        method: 'client.Workflows.Events.Catalog.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcatalogs, err := client.Workflows.Events.Catalog.List(context.TODO(), mobileruncloud.WorkflowEventCatalogListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", catalogs.Items)\n}\n',
      },
      cli: {
        method: 'catalog list',
        example: "mobilerun-cloud workflows:events:catalog list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/events/catalog \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/executions',
    httpMethod: 'get',
    summary: 'List flow executions',
    description: 'List flow executions',
    stainlessPath: '(resource) workflows.executions > (method) list',
    qualified: 'client.workflows.executions.list',
    params: [
      'flowId?: string;',
      'from?: string;',
      "orderBy?: 'startedAt' | 'finishedAt' | 'status';",
      "orderByDirection?: 'asc' | 'desc';",
      'page?: number;',
      'pageSize?: number;',
      'search?: string;',
      "status?: 'pending' | 'running' | 'success' | 'failed';",
      'to?: string;',
      'triggerId?: string;',
    ],
    response:
      "{ items: { id: string; error: string; eventId: string; finishedAt: string; flowId: string; flowName: string; startedAt: string; status: 'pending' | 'running' | 'success' | 'failed'; triggerId: string; triggerName: string; result?: object; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }",
    markdown:
      "## list\n\n`client.workflows.executions.list(flowId?: string, from?: string, orderBy?: 'startedAt' | 'finishedAt' | 'status', orderByDirection?: 'asc' | 'desc', page?: number, pageSize?: number, search?: string, status?: 'pending' | 'running' | 'success' | 'failed', to?: string, triggerId?: string): { items: flow_execution[]; pagination: pagination; }`\n\n**get** `/executions`\n\nList flow executions\n\n### Parameters\n\n- `flowId?: string`\n\n- `from?: string`\n\n- `orderBy?: 'startedAt' | 'finishedAt' | 'status'`\n\n- `orderByDirection?: 'asc' | 'desc'`\n\n- `page?: number`\n\n- `pageSize?: number`\n\n- `search?: string`\n\n- `status?: 'pending' | 'running' | 'success' | 'failed'`\n\n- `to?: string`\n\n- `triggerId?: string`\n\n### Returns\n\n- `{ items: { id: string; error: string; eventId: string; finishedAt: string; flowId: string; flowName: string; startedAt: string; status: 'pending' | 'running' | 'success' | 'failed'; triggerId: string; triggerName: string; result?: object; }[]; pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }; }`\n\n  - `items: { id: string; error: string; eventId: string; finishedAt: string; flowId: string; flowName: string; startedAt: string; status: 'pending' | 'running' | 'success' | 'failed'; triggerId: string; triggerName: string; result?: object; }[]`\n  - `pagination: { hasNext: boolean; hasPrev: boolean; page: number; pages: number; pageSize: number; total: number; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst executions = await client.workflows.executions.list();\n\nconsole.log(executions);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.executions.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst executions = await client.workflows.executions.list();\n\nconsole.log(executions.items);",
      },
      python: {
        method: 'workflows.executions.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nexecutions = client.workflows.executions.list()\nprint(executions.items)',
      },
      go: {
        method: 'client.Workflows.Executions.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\texecutions, err := client.Workflows.Executions.List(context.TODO(), mobileruncloud.WorkflowExecutionListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", executions.Items)\n}\n',
      },
      cli: {
        method: 'executions list',
        example: "mobilerun-cloud workflows:executions list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/executions \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'get_metrics',
    endpoint: '/executions/metrics',
    httpMethod: 'get',
    summary: 'Get execution metrics',
    description: 'Get execution metrics',
    stainlessPath: '(resource) workflows.executions > (method) get_metrics',
    qualified: 'client.workflows.executions.getMetrics',
    params: ['flowId?: string;', 'from?: string;', 'to?: string;', 'triggerId?: string;'],
    response:
      '{ data: { avgDurationMs: number; byStatus: { failed: number; pending: number; running: number; success: number; }; lastExecutionAt: string; total: number; }; }',
    markdown:
      "## get_metrics\n\n`client.workflows.executions.getMetrics(flowId?: string, from?: string, to?: string, triggerId?: string): { data: object; }`\n\n**get** `/executions/metrics`\n\nGet execution metrics\n\n### Parameters\n\n- `flowId?: string`\n\n- `from?: string`\n\n- `to?: string`\n\n- `triggerId?: string`\n\n### Returns\n\n- `{ data: { avgDurationMs: number; byStatus: { failed: number; pending: number; running: number; success: number; }; lastExecutionAt: string; total: number; }; }`\n\n  - `data: { avgDurationMs: number; byStatus: { failed: number; pending: number; running: number; success: number; }; lastExecutionAt: string; total: number; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst response = await client.workflows.executions.getMetrics();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.executions.getMetrics',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.workflows.executions.getMetrics();\n\nconsole.log(response.data);",
      },
      python: {
        method: 'workflows.executions.get_metrics',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.workflows.executions.get_metrics()\nprint(response.data)',
      },
      go: {
        method: 'client.Workflows.Executions.GetMetrics',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Workflows.Executions.GetMetrics(context.TODO(), mobileruncloud.WorkflowExecutionGetMetricsParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      cli: {
        method: 'executions get_metrics',
        example: "mobilerun-cloud workflows:executions get-metrics \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/executions/metrics \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/executions/{executionId}',
    httpMethod: 'get',
    summary: 'Get execution details',
    description: 'Get execution details',
    stainlessPath: '(resource) workflows.executions > (method) retrieve',
    qualified: 'client.workflows.executions.retrieve',
    params: ['executionId: string;'],
    response:
      "{ data: { id: string; error: string; eventId: string; finishedAt: string; flowId: string; flowName: string; startedAt: string; status: 'pending' | 'running' | 'success' | 'failed'; triggerId: string; triggerName: string; result?: object; }; }",
    markdown:
      "## retrieve\n\n`client.workflows.executions.retrieve(executionId: string): { data: flow_execution; }`\n\n**get** `/executions/{executionId}`\n\nGet execution details\n\n### Parameters\n\n- `executionId: string`\n\n### Returns\n\n- `{ data: { id: string; error: string; eventId: string; finishedAt: string; flowId: string; flowName: string; startedAt: string; status: 'pending' | 'running' | 'success' | 'failed'; triggerId: string; triggerName: string; result?: object; }; }`\n\n  - `data: { id: string; error: string; eventId: string; finishedAt: string; flowId: string; flowName: string; startedAt: string; status: 'pending' | 'running' | 'success' | 'failed'; triggerId: string; triggerName: string; result?: object; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst execution = await client.workflows.executions.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(execution);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.executions.retrieve',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst execution = await client.workflows.executions.retrieve(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(execution.data);",
      },
      python: {
        method: 'workflows.executions.retrieve',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nexecution = client.workflows.executions.retrieve(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(execution.data)',
      },
      go: {
        method: 'client.Workflows.Executions.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\texecution, err := client.Workflows.Executions.Get(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", execution.Data)\n}\n',
      },
      cli: {
        method: 'executions retrieve',
        example:
          "mobilerun-cloud workflows:executions retrieve \\\n  --api-key 'My API Key' \\\n  --execution-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/executions/$EXECUTION_ID \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/timezones',
    httpMethod: 'get',
    summary: 'List supported IANA timezones',
    description: 'List supported IANA timezones',
    stainlessPath: '(resource) workflows.timezones > (method) list',
    qualified: 'client.workflows.timezones.list',
    response: '{ data: string[]; }',
    markdown:
      "## list\n\n`client.workflows.timezones.list(): { data: string[]; }`\n\n**get** `/timezones`\n\nList supported IANA timezones\n\n### Returns\n\n- `{ data: string[]; }`\n\n  - `data: string[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst timezones = await client.workflows.timezones.list();\n\nconsole.log(timezones);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.timezones.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst timezones = await client.workflows.timezones.list();\n\nconsole.log(timezones.data);",
      },
      python: {
        method: 'workflows.timezones.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\ntimezones = client.workflows.timezones.list()\nprint(timezones.data)',
      },
      go: {
        method: 'client.Workflows.Timezones.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\ttimezones, err := client.Workflows.Timezones.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", timezones.Data)\n}\n',
      },
      cli: {
        method: 'timezones list',
        example: "mobilerun-cloud workflows:timezones list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/timezones \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/secrets',
    httpMethod: 'post',
    summary: 'Create a user secret (write-only; value cannot be read back)',
    description: 'Create a user secret (write-only; value cannot be read back)',
    stainlessPath: '(resource) workflows.secrets > (method) create',
    qualified: 'client.workflows.secrets.create',
    params: ['name: string;', 'value: string;', 'description?: string;'],
    response:
      '{ data: { id: string; createdAt: string; description: string; name: string; updatedAt: string; }; }',
    markdown:
      "## create\n\n`client.workflows.secrets.create(name: string, value: string, description?: string): { data: user_secret; }`\n\n**post** `/secrets`\n\nCreate a user secret (write-only; value cannot be read back)\n\n### Parameters\n\n- `name: string`\n\n- `value: string`\n\n- `description?: string`\n\n### Returns\n\n- `{ data: { id: string; createdAt: string; description: string; name: string; updatedAt: string; }; }`\n\n  - `data: { id: string; createdAt: string; description: string; name: string; updatedAt: string; }`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst secret = await client.workflows.secrets.create({ name: 'name', value: 'x' });\n\nconsole.log(secret);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.secrets.create',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst secret = await client.workflows.secrets.create({ name: 'name', value: 'x' });\n\nconsole.log(secret.data);",
      },
      python: {
        method: 'workflows.secrets.create',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nsecret = client.workflows.secrets.create(\n    name="name",\n    value="x",\n)\nprint(secret.data)',
      },
      go: {
        method: 'client.Workflows.Secrets.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tsecret, err := client.Workflows.Secrets.New(context.TODO(), mobileruncloud.WorkflowSecretNewParams{\n\t\tName:  "name",\n\t\tValue: "x",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", secret.Data)\n}\n',
      },
      cli: {
        method: 'secrets create',
        example:
          "mobilerun-cloud workflows:secrets create \\\n  --api-key 'My API Key' \\\n  --name name \\\n  --value x",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/secrets \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY" \\\n    -d \'{\n          "name": "name",\n          "value": "x"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/secrets',
    httpMethod: 'get',
    summary: 'List user secrets (metadata only — values never returned)',
    description: 'List user secrets (metadata only — values never returned)',
    stainlessPath: '(resource) workflows.secrets > (method) list',
    qualified: 'client.workflows.secrets.list',
    response:
      '{ data: { id: string; createdAt: string; description: string; name: string; updatedAt: string; }[]; }',
    markdown:
      "## list\n\n`client.workflows.secrets.list(): { data: user_secret[]; }`\n\n**get** `/secrets`\n\nList user secrets (metadata only — values never returned)\n\n### Returns\n\n- `{ data: { id: string; createdAt: string; description: string; name: string; updatedAt: string; }[]; }`\n\n  - `data: { id: string; createdAt: string; description: string; name: string; updatedAt: string; }[]`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst secrets = await client.workflows.secrets.list();\n\nconsole.log(secrets);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.secrets.list',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst secrets = await client.workflows.secrets.list();\n\nconsole.log(secrets.data);",
      },
      python: {
        method: 'workflows.secrets.list',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nsecrets = client.workflows.secrets.list()\nprint(secrets.data)',
      },
      go: {
        method: 'client.Workflows.Secrets.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tsecrets, err := client.Workflows.Secrets.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", secrets.Data)\n}\n',
      },
      cli: {
        method: 'secrets list',
        example: "mobilerun-cloud workflows:secrets list \\\n  --api-key 'My API Key'",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/secrets \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/secrets/{secretId}',
    httpMethod: 'delete',
    summary: 'Delete a user secret',
    description: 'Delete a user secret',
    stainlessPath: '(resource) workflows.secrets > (method) delete',
    qualified: 'client.workflows.secrets.delete',
    params: ['secretId: string;'],
    response: '{ message: string; }',
    markdown:
      "## delete\n\n`client.workflows.secrets.delete(secretId: string): { message: string; }`\n\n**delete** `/secrets/{secretId}`\n\nDelete a user secret\n\n### Parameters\n\n- `secretId: string`\n\n### Returns\n\n- `{ message: string; }`\n\n  - `message: string`\n\n### Example\n\n```typescript\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\nconst secret = await client.workflows.secrets.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(secret);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.secrets.delete',
        example:
          "import Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst secret = await client.workflows.secrets.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(secret.message);",
      },
      python: {
        method: 'workflows.secrets.delete',
        example:
          'import os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\nsecret = client.workflows.secrets.delete(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(secret.message)',
      },
      go: {
        method: 'client.Workflows.Secrets.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tsecret, err := client.Workflows.Secrets.Delete(context.TODO(), "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", secret.Message)\n}\n',
      },
      cli: {
        method: 'secrets delete',
        example:
          "mobilerun-cloud workflows:secrets delete \\\n  --api-key 'My API Key' \\\n  --secret-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      http: {
        example:
          'curl https://api.mobilerun.ai/v1/secrets/$SECRET_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $MOBILERUN_CLOUD_API_KEY"',
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'cli',
    content:
      "# Mobilerun CLI\n\nThe official CLI for the [Mobilerun REST API](https://docs.mobilerun.ai).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n<!-- x-release-please-start-version -->\n\n## Installation\n\n### Installing with Go\n\nTo test or install the CLI locally, you need [Go](https://go.dev/doc/install) version 1.22 or later installed.\n\n~~~sh\ngo install 'github.com/droidrun/mobilerun-sdk-cli/cmd/mobilerun-cloud@latest'\n~~~\n\nOnce you have run `go install`, the binary is placed in your Go bin directory:\n\n- **Default location**: `$HOME/go/bin` (or `$GOPATH/bin` if GOPATH is set)\n- **Check your path**: Run `go env GOPATH` to see the base directory\n\nIf commands aren't found after installation, add the Go bin directory to your PATH:\n\n~~~sh\n# Add to your shell profile (.zshrc, .bashrc, etc.)\nexport PATH=\"$PATH:$(go env GOPATH)/bin\"\n~~~\n\n<!-- x-release-please-end -->\n\n### Running Locally\n\nAfter cloning the git repository for this project, you can use the\n`scripts/run` script to run the tool locally:\n\n~~~sh\n./scripts/run args...\n~~~\n\n## Usage\n\nThe CLI follows a resource-based command structure:\n\n~~~sh\nmobilerun-cloud [resource] <command> [flags...]\n~~~\n\n~~~sh\nmobilerun-cloud tasks list \\\n  --api-key 'My API Key'\n~~~\n\nFor details about specific commands, use the `--help` flag.\n\n### Environment variables\n\n| Environment variable      | Required | Default value |\n| ------------------------- | -------- | ------------- |\n| `MOBILERUN_CLOUD_API_KEY` | no       | `null`        |\n\n### Global flags\n\n- `--api-key` (can also be set with `MOBILERUN_CLOUD_API_KEY` env var)\n- `--help` - Show command line usage\n- `--debug` - Enable debug logging (includes HTTP request/response details)\n- `--version`, `-v` - Show the CLI version\n- `--base-url` - Use a custom API backend URL\n- `--format` - Change the output format (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--format-error` - Change the output format for errors (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--transform` - Transform the data output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n- `--transform-error` - Transform the error output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n\n### Passing files as arguments\n\nTo pass files to your API, you can use the `@myfile.ext` syntax:\n\n~~~bash\nmobilerun-cloud <command> --arg @abe.jpg\n~~~\n\nFiles can also be passed inside JSON or YAML blobs:\n\n~~~bash\nmobilerun-cloud <command> --arg '{image: \"@abe.jpg\"}'\n# Equivalent:\nmobilerun-cloud <command> <<YAML\narg:\n  image: \"@abe.jpg\"\nYAML\n~~~\n\nIf you need to pass a string literal that begins with an `@` sign, you can\nescape the `@` sign to avoid accidentally passing a file.\n\n~~~bash\nmobilerun-cloud <command> --username '\\@abe'\n~~~\n\n#### Explicit encoding\n\nFor JSON endpoints, the CLI tool does filetype sniffing to determine whether the\nfile contents should be sent as a string literal (for plain text files) or as a\nbase64-encoded string literal (for binary files). If you need to explicitly send\nthe file as either plain text or base64-encoded data, you can use\n`@file://myfile.txt` (for string encoding) or `@data://myfile.dat` (for\nbase64-encoding). Note that absolute paths will begin with `@file://` or\n`@data://`, followed by a third `/` (for example, `@file:///tmp/file.txt`).\n\n~~~bash\nmobilerun-cloud <command> --arg @data://file.txt\n~~~\n\n## Linking different Go SDK versions\n\nYou can link the CLI against a different version of the Mobilerun Go SDK\nfor development purposes using the `./scripts/link` script.\n\nTo link to a specific version from a repository (version can be a branch,\ngit tag, or commit hash):\n\n~~~bash\n./scripts/link github.com/org/repo@version\n~~~\n\nTo link to a local copy of the SDK:\n\n~~~bash\n./scripts/link ../path/to/mobileruncloud-go\n~~~\n\nIf you run the link script without any arguments, it will default to `../mobileruncloud-go`.\n",
  },
  {
    language: 'go',
    content:
      '# Mobilerun Go API Library\n\n<a href="https://pkg.go.dev/github.com/stainless-sdks/droidrun-cloud-go"><img src="https://pkg.go.dev/badge/github.com/stainless-sdks/droidrun-cloud-go.svg" alt="Go Reference"></a>\n\nThe Mobilerun Go library provides convenient access to the [Mobilerun REST API](https://docs.mobilerun.ai)\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Mobilerun MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40mobilerun%2Fsdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBtb2JpbGVydW4vc2RrLW1jcCJdLCJlbnYiOnsiTU9CSUxFUlVOX0NMT1VEX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40mobilerun%2Fsdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40mobilerun%2Fsdk-mcp%22%5D%2C%22env%22%3A%7B%22MOBILERUN_CLOUD_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n\n\n```go\nimport (\n\t"github.com/stainless-sdks/droidrun-cloud-go" // imported as SDK_PackageName\n)\n```\n\n\n\nOr to pin the version:\n\n\n\n```sh\ngo get -u \'github.com/stainless-sdks/droidrun-cloud-go@v0.0.1\'\n```\n\n\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/droidrun-cloud-go"\n\t"github.com/stainless-sdks/droidrun-cloud-go/option"\n)\n\nfunc main() {\n\tclient := mobileruncloud.NewClient(\n\t\toption.WithAPIKey("My API Key"), // defaults to os.LookupEnv("MOBILERUN_CLOUD_API_KEY")\n\t)\n\ttasks, err := client.Tasks.List(context.TODO(), mobileruncloud.TaskListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", tasks.Items)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.Tasks.List(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/stainless-sdks/droidrun-cloud-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.Tasks.List(context.TODO(), mobileruncloud.TaskListParams{})\nif err != nil {\n\tvar apierr *mobileruncloud.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/tasks": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.Tasks.List(\n\tctx,\n\tmobileruncloud.TaskListParams{},\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n```go\n// A file from the file system\nfile, err := os.Open("/path/to/file")\nmobileruncloud.DeviceFileUploadParams{\n\tPath: "path",\n\tFile: file,\n}\n\n// A file from a string\nmobileruncloud.DeviceFileUploadParams{\n\tPath: "path",\n\tFile: strings.NewReader("my file contents"),\n}\n\n// With a custom filename and contentType\nmobileruncloud.DeviceFileUploadParams{\n\tPath: "path",\n\tFile: mobileruncloud.File(strings.NewReader(`{"hello": "foo"}`), "file.go", "application/json"),\n}\n```\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := mobileruncloud.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.Tasks.List(\n\tcontext.TODO(),\n\tmobileruncloud.TaskListParams{},\n\toption.WithMaxRetries(5),\n)\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\ntasks, err := client.Tasks.List(\n\tcontext.TODO(),\n\tmobileruncloud.TaskListParams{},\n\toption.WithResponseInto(&response),\n)\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", tasks)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/droidrun-cloud-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'python',
    content:
      '# Mobilerun Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/mobilerun-sdk.svg?label=pypi%20(stable))](https://pypi.org/project/mobilerun-sdk/)\n\nThe Mobilerun Python library provides convenient access to the Mobilerun REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Mobilerun MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40mobilerun%2Fsdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBtb2JpbGVydW4vc2RrLW1jcCJdLCJlbnYiOnsiTU9CSUxFUlVOX0NMT1VEX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40mobilerun%2Fsdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40mobilerun%2Fsdk-mcp%22%5D%2C%22env%22%3A%7B%22MOBILERUN_CLOUD_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [docs.mobilerun.ai](https://docs.mobilerun.ai). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install mobilerun-sdk\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\n\ntasks = client.tasks.list()\nprint(tasks.items)\n```\n\nWhile you can provide a `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `MOBILERUN_CLOUD_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncMobilerun` instead of `Mobilerun` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom mobilerun_sdk import AsyncMobilerun\n\nclient = AsyncMobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  tasks = await client.tasks.list()\n  print(tasks.items)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install mobilerun-sdk[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom mobilerun_sdk import DefaultAioHttpClient\nfrom mobilerun_sdk import AsyncMobilerun\n\nasync def main() -> None:\n  async with AsyncMobilerun(\n    api_key=os.environ.get("MOBILERUN_CLOUD_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    tasks = await client.tasks.list()\n    print(tasks.items)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun()\n\nclient.agents.telegram.receive_update(\n    update_id=0,\n    message={\n        "chat": {\n            "id": 0,\n            "type": "type",\n        },\n        "message_id": 0,\n    },\n)\n```\n\n## File uploads\n\nRequest parameters that correspond to file uploads can be passed as `bytes`, or a [`PathLike`](https://docs.python.org/3/library/os.html#os.PathLike) instance or a tuple of `(filename, contents, media type)`.\n\n```python\nfrom pathlib import Path\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun()\n\nclient.devices.files.upload(\n    device_id="deviceId",\n    path="path",\n    file=Path("/path/to/file"),\n)\n```\n\nThe async client uses the exact same interface. If you pass a [`PathLike`](https://docs.python.org/3/library/os.html#os.PathLike) instance, the file contents will be read asynchronously automatically.\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `mobilerun_sdk.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `mobilerun_sdk.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `mobilerun_sdk.APIError`.\n\n```python\nimport mobilerun_sdk\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun()\n\ntry:\n    client.tasks.list()\nexcept mobilerun_sdk.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept mobilerun_sdk.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept mobilerun_sdk.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom mobilerun_sdk import Mobilerun\n\n# Configure the default for all requests:\nclient = Mobilerun(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).tasks.list()\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom mobilerun_sdk import Mobilerun\n\n# Configure the default for all requests:\nclient = Mobilerun(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = Mobilerun(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).tasks.list()\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `MOBILERUN_LOG` to `info`.\n\n```shell\n$ export MOBILERUN_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom mobilerun_sdk import Mobilerun\n\nclient = Mobilerun()\nresponse = client.tasks.with_raw_response.list()\nprint(response.headers.get(\'X-My-Header\'))\n\ntask = response.parse()  # get the object that `tasks.list()` would have returned\nprint(task.items)\n```\n\nThese methods return an [`APIResponse`](https://github.com/droidrun/mobilerun-sdk-python/tree/main/src/mobilerun_sdk/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/droidrun/mobilerun-sdk-python/tree/main/src/mobilerun_sdk/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.tasks.with_streaming_response.list() as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom mobilerun_sdk import Mobilerun, DefaultHttpxClient\n\nclient = Mobilerun(\n    # Or use the `MOBILERUN_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom mobilerun_sdk import Mobilerun\n\nwith Mobilerun() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/droidrun/mobilerun-sdk-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport mobilerun_sdk\nprint(mobilerun_sdk.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Mobilerun TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/@mobilerun/sdk.svg?label=npm%20(stable))](https://npmjs.org/package/@mobilerun/sdk) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@mobilerun/sdk)\n\nThis library provides convenient access to the Mobilerun REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [docs.mobilerun.ai](https://docs.mobilerun.ai). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Mobilerun MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40mobilerun%2Fsdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBtb2JpbGVydW4vc2RrLW1jcCJdLCJlbnYiOnsiTU9CSUxFUlVOX0NMT1VEX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40mobilerun%2Fsdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40mobilerun%2Fsdk-mcp%22%5D%2C%22env%22%3A%7B%22MOBILERUN_CLOUD_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install @mobilerun/sdk\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst tasks = await client.tasks.list();\n\nconsole.log(tasks.items);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  apiKey: process.env['MOBILERUN_CLOUD_API_KEY'], // This is the default and can be omitted\n});\n\nconst tasks: Mobilerun.TaskListResponse = await client.tasks.list();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n## File uploads\n\nRequest parameters that correspond to file uploads can be passed in many different forms:\n- `File` (or an object with the same structure)\n- a `fetch` `Response` (or an object with the same structure)\n- an `fs.ReadStream`\n- the return value of our `toFile` helper\n\n```ts\nimport fs from 'fs';\nimport Mobilerun, { toFile } from '@mobilerun/sdk';\n\nconst client = new Mobilerun();\n\n// If you have access to Node `fs` we recommend using `fs.createReadStream()`:\nawait client.devices.files.upload('deviceId', {\n  path: 'path',\n  file: fs.createReadStream('/path/to/file'),\n});\n\n// Or if you have the web `File` API you can pass a `File` instance:\nawait client.devices.files.upload('deviceId', {\n  path: 'path',\n  file: new File(['my bytes'], 'file'),\n});\n\n// You can also pass a `fetch` `Response`:\nawait client.devices.files.upload('deviceId', {\n  path: 'path',\n  file: await fetch('https://somesite/file'),\n});\n\n// Finally, if none of the above are convenient, you can use our `toFile` helper:\nawait client.devices.files.upload('deviceId', {\n  path: 'path',\n  file: await toFile(Buffer.from('my bytes'), 'file'),\n});\nawait client.devices.files.upload('deviceId', {\n  path: 'path',\n  file: await toFile(new Uint8Array([0, 1, 2]), 'file'),\n});\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst tasks = await client.tasks.list().catch(async (err) => {\n  if (err instanceof Mobilerun.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Mobilerun({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.tasks.list({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Mobilerun({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.tasks.list({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Mobilerun();\n\nconst response = await client.tasks.list().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: tasks, response: raw } = await client.tasks.list().withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(tasks.items);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `MOBILERUN_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Mobilerun from '@mobilerun/sdk';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Mobilerun({\n  logger: logger.child({ name: 'Mobilerun' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.tasks.list({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Mobilerun from '@mobilerun/sdk';\nimport fetch from 'my-fetch';\n\nconst client = new Mobilerun({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Mobilerun from '@mobilerun/sdk';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Mobilerun({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Mobilerun from '@mobilerun/sdk';\n\nconst client = new Mobilerun({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Mobilerun from 'npm:@mobilerun/sdk';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Mobilerun({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/droidrun/mobilerun-sdk-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
