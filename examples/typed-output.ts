// Uses device minutes until the device is stopped or terminated. Task execution may incur costs. Run: pnpm tsn examples/typed-output.ts DEVICE_ID
// Install the optional adapter dependency: pnpm add zod@^4
import { MobilerunSDK } from '@mobilerun/sdk';
import { output } from '@mobilerun/sdk/zod';
import { z } from 'zod/v4';

async function main() {
  const id = process.argv[2];
  if (!id) throw new Error('Pass an existing device ID');
  const sdk = new MobilerunSDK(); // Reads MOBILERUN_API_KEY from the environment.
  const device = await sdk.devices.get(id);
  const task = await device.run({
    task: 'Read the visible heading',
    outputSchema: output(z.object({ heading: z.string() })),
  });
  const result = await task.waitOutput();
  const heading: string = result.output.heading;
  console.log(heading);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
