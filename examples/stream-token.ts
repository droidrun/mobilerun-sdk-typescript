// Run: pnpm tsn examples/stream-token.ts DEVICE_ID [ALLOWED_ORIGIN]
// Tokens are single-use secrets; never print the response.
import { MobilerunSDK } from '@mobilerun/sdk';

export async function streamToken(sdk: MobilerunSDK, deviceId: string, allowedOrigins?: string[]) {
  const token = await sdk.devices
    .fromId(deviceId)
    .createStreamToken({ ttlSeconds: 120, ...(allowedOrigins ? { allowedOrigins } : {}) });
  try {
    if (!token.key || !token.keyId || !token.expiresAt) throw new Error('Invalid token response');
  } finally {
    await sdk.streamTokens.delete(token.keyId);
  }
}

if (require.main === module) {
  const id = process.argv[2];
  if (!id) throw new Error('Pass an existing device ID');
  const origin = process.argv[3];
  streamToken(new MobilerunSDK(), id, origin ? [origin] : undefined).catch(() => {
    console.error('Stream token example failed.');
    process.exitCode = 1;
  });
}
