// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource links', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.credentials.packages.links.create('x', {
      credentialName: '26f1kl_-n-71',
      fieldMap: [{ fieldId: 'x', fieldType: 'email' }],
      itemId: 'x',
      vaultId: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.credentials.packages.links.create('x', {
      credentialName: '26f1kl_-n-71',
      fieldMap: [{ fieldId: 'x', fieldType: 'email' }],
      itemId: 'x',
      vaultId: 'x',
    });
  });
});
