// Uses device minutes until the device is stopped or terminated. Run: pnpm tsn examples/existing-device.ts DEVICE_ID
import { MobilerunSDK } from '@mobilerun/sdk';

async function main() {
  const id = process.argv[2];
  if (!id) throw new Error('Pass an existing device ID');
  const sdk = new MobilerunSDK(); // Reads MOBILERUN_API_KEY from the environment.
  const device = await sdk.devices.get(id);
  await device.home();
  await device.openApp('com.android.settings');
  await device.back();
  await (await device.screenshot()).save('screenshot.png');
  for await (const existing of sdk.devices.list()) console.log(existing.id, existing.name);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
