// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun, { toFile } from '@mobilerun/sdk';

const client = new Mobilerun({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource messages', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.esims.messages.list('550e8400-e29b-41d4-a716-446655440000');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.esims.messages.list('550e8400-e29b-41d4-a716-446655440000', {
    direction: 'all',
    numberId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    page: 1,
    pageSize: 1,
    peerKey: 'x',
    peerNumber: 'xxx',
    status: 'all',
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Mobilerun.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.esims.messages.send('550e8400-e29b-41d4-a716-446655440000', { body: 'x', to: '+15551230001' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('send: required and optional params', async () => {
    const response = await client.esims.messages.send('550e8400-e29b-41d4-a716-446655440000', {
    body: 'x',
    to: '+15551230001',
    clientRequestId: 'x',
    deliveryReport: true,
  });
  });
});
