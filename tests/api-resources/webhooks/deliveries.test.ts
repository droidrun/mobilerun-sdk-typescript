// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource deliveries', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.webhooks.deliveries.list();
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
    await expect(
      client.webhooks.deliveries.list(
        {
          page: 1,
          pageSize: 1,
          since: '2019-12-27T18:11:19.117Z',
          status: 'pending',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mobilerun.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listForWebhook', async () => {
    const responsePromise = client.webhooks.deliveries.listForWebhook('550e8400-e29b-41d4-a716-446655440000');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listForWebhook: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooks.deliveries.listForWebhook(
        '550e8400-e29b-41d4-a716-446655440000',
        { page: 1, pageSize: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mobilerun.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveAttempts: only required params', async () => {
    const responsePromise = client.webhooks.deliveries.retrieveAttempts(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { id: '550e8400-e29b-41d4-a716-446655440000' },
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
  test.skip('retrieveAttempts: required and optional params', async () => {
    const response = await client.webhooks.deliveries.retrieveAttempts(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { id: '550e8400-e29b-41d4-a716-446655440000' },
    );
  });

  // Mock server tests are disabled
  test.skip('stats', async () => {
    const responsePromise = client.webhooks.deliveries.stats();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('stats: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooks.deliveries.stats(
        { since: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mobilerun.NotFoundError);
  });
});
