// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun, { toFile } from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource files', () => {
  // Mock server tests are disabled
  test.skip('download: required and optional params', async () => {
    const response = await client.compute.sandboxes.files.download('550e8400-e29b-41d4-a716-446655440000', {
      path: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('upload: only required params', async () => {
    const responsePromise = client.compute.sandboxes.files.upload(
      '550e8400-e29b-41d4-a716-446655440000',
      await toFile(Buffer.from('Example data'), 'README.md'),
      { path: 'x' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('upload: required and optional params', async () => {
    const response = await client.compute.sandboxes.files.upload(
      '550e8400-e29b-41d4-a716-446655440000',
      await toFile(Buffer.from('Example data'), 'README.md'),
      { path: 'x' },
    );
  });
});
