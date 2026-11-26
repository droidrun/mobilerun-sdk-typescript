// Uploading uses storage quota and may incur storage charges.
// Usage: npx tsx examples/upload.ts app.apk com.example.app "Example" 1 1.0
import { MobilerunSDK } from '@mobilerun/sdk';

async function main() {
  const [file, bundleId, displayName, versionCode, versionName] = process.argv.slice(2);
  if (!file || !bundleId || !displayName || !versionCode || !versionName) {
    throw new Error('Usage: upload.ts FILE BUNDLE_ID DISPLAY_NAME VERSION_CODE VERSION_NAME');
  }
  const sdk = new MobilerunSDK();
  const app = await sdk.apps.upload({
    files: [file],
    bundleId,
    displayName,
    versionCode: Number(versionCode),
    versionName,
  });
  console.log(app.id);
}
main().catch((error) => {
  console.error(error instanceof Error ? error.message : 'Upload failed');
  process.exitCode = 1;
});
