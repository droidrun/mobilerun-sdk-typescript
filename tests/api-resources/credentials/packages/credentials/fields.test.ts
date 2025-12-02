// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MobilerunCloud from '@mobilerun/sdk';

const client = new MobilerunCloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fields', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.credentials.packages.credentials.fields.create('credentialName', {
      packageName: 'packageName',
      fieldType: 'email',
      value: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.credentials.packages.credentials.fields.create('credentialName', {
      packageName: 'packageName',
      fieldType: 'email',
      value: 'x',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.credentials.packages.credentials.fields.update('email', {
      packageName: 'packageName',
      credentialName: 'credentialName',
      value: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.credentials.packages.credentials.fields.update('email', {
      packageName: 'packageName',
      credentialName: 'credentialName',
      value: 'x',
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.credentials.packages.credentials.fields.delete('email', {
      packageName: 'packageName',
      credentialName: 'credentialName',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.credentials.packages.credentials.fields.delete('email', {
      packageName: 'packageName',
      credentialName: 'credentialName',
    });
  });
});
