// Costs: existing mailbox rental may apply; no mailbox is created. Run: pnpm tsn examples/mailbox-otp.ts MAILBOX_ID
import { MobilerunSDK } from '@mobilerun/sdk';

async function main() {
  const id = process.argv[2];
  if (!id) throw new Error('Pass an existing mailbox ID');
  const sdk = new MobilerunSDK(); // Reads MOBILERUN_API_KEY from the environment.
  console.log(await sdk.mailboxes.fromId(id).waitForOtp());
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
