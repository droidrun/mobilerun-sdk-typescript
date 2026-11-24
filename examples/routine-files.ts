// Read-only. Run: pnpm tsn examples/routine-files.ts EXECUTION_ID OUTPUT_PATH
import { writeFile } from 'node:fs/promises';
import { APIError, MobilerunSDK } from '@mobilerun/sdk';

export async function routineFiles(sdk: MobilerunSDK, executionId: string, output: string) {
  await sdk.routineFiles.listFolders();
  for await (const file of sdk.routineFiles.list({ executionId })) {
    const bytes = await file.download();
    await writeFile(output, bytes);
    return bytes;
  }
  throw new Error('No saved routine file fixture for this execution');
}

if (require.main === module) {
  const execution = process.argv[2];
  const output = process.argv[3];
  if (!execution || !output) throw new Error('Pass execution ID and output path');
  routineFiles(new MobilerunSDK(), execution, output).catch((error: unknown) => {
    console.error(
      error instanceof Error ? error.message : 'Example failed',
      error instanceof APIError ? error.status : undefined,
    );
    process.exitCode = 1;
  });
}
