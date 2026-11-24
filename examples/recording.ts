// Uses device minutes until the device is stopped or terminated. Task execution may incur costs. Recording storage may incur costs. Run: pnpm tsn examples/recording.ts DEVICE_ID
import { writeFile } from 'node:fs/promises';
import { MobilerunSDK } from '@mobilerun/sdk';

async function main() {
  const id = process.argv[2];
  if (!id) throw new Error('Pass an existing device ID');
  const sdk = new MobilerunSDK(); // Reads MOBILERUN_API_KEY from the environment.
  const device = sdk.devices.fromId(id);
  const recording = await device.recordings.start();
  try {
    const task = await device.run({ task: 'Open Settings' });
    await task.wait();
  } finally {
    await recording.stop();
  }
  await recording.wait();
  await writeFile('recording.mp4', await recording.video());
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
