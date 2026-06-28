// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource executions', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.workflows.executions.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.workflows.executions.list();
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
      client.workflows.executions.list(
        {
          flowId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          from: 'from',
          orderBy: 'startedAt',
          orderByDirection: 'asc',
          page: 1,
          pageSize: 1,
          search: 'search',
          status: 'pending',
          to: 'to',
          triggerId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mobilerun.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getMetrics', async () => {
    const responsePromise = client.workflows.executions.getMetrics();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getMetrics: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workflows.executions.getMetrics(
        {
          flowId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          from: 'from',
          to: 'to',
          triggerId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mobilerun.NotFoundError);
  });
});
