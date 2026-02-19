#!/usr/bin/env node

// Load environment variables from .env file
try {
  // Try to load dotenv if available (optional dependency)
  const dotenv = require('dotenv');
  const path = require('path');
  // Look for .env file in current directory, parent directory (mcp), or project root
  const envPaths = [
    path.resolve(process.cwd(), '.env'),
    path.resolve(process.cwd(), '..', '.env'),
    path.resolve(__dirname, '..', '..', '..', '..', 'mcp', '.env'),
  ];
  for (const envPath of envPaths) {
    const result = dotenv.config({ path: envPath });
    if (!result.error) {
      break;
    }
  }
} catch (e) {
  // dotenv is optional, continue without it if not available
}

import { selectTools } from './server';
import { McpOptions, parseCLIOptions } from './options';
import { launchStdioServer } from './stdio';
import { launchStreamableHTTPServer } from './http';
import type { McpTool } from './types';

async function main() {
  const options = parseOptionsOrError();

  const selectedTools = await selectToolsOrError(options);

  console.error(
    `MCP Server starting with ${selectedTools.length} tools:`,
    selectedTools.map((e) => e.tool.name),
  );

  switch (options.transport) {
    case 'stdio':
      await launchStdioServer(options);
      break;
    case 'http':
      await launchStreamableHTTPServer({
        mcpOptions: options,
        debug: options.debug,
        port: options.port ?? options.socket,
      });
      break;
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error('Fatal error in main():', error);
    process.exit(1);
  });
}

function parseOptionsOrError() {
  try {
    return parseCLIOptions();
  } catch (error) {
    console.error('Error parsing options:', error);
    process.exit(1);
  }
}

async function selectToolsOrError(options: McpOptions): Promise<McpTool[]> {
  try {
    const includedTools = selectTools(options);
    if (includedTools.length === 0) {
      console.error('No tools match the provided filters.');
      process.exit(1);
    }
    return includedTools;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error filtering tools:', error.message);
    } else {
      console.error('Error filtering tools:', error);
    }
    process.exit(1);
  }
}
