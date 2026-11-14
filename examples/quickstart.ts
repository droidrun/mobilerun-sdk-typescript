// Uses device minutes until the device is stopped or terminated. Task execution may incur costs. Run: pnpm tsn examples/quickstart.ts
import { MobilerunSDK } from '@mobilerun/sdk';

async function main() {
  const sdk = new MobilerunSDK(); // Reads MOBILERUN_API_KEY from the environment.
  const device = await sdk.devices.create({
    billing: 'minute',
    deviceType: 'android_cloud_phone',
  });
  try {
    const task = await device.run({ task: 'Open Settings' });
    console.log((await task.wait()).status);
  } finally {
    await device.stop();
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
