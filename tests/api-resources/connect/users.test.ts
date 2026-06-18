// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // Mock server tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.connect.users.create({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.connect.users.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.connect.users.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
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
    const responsePromise = client.connect.users.list();
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
      client.connect.users.list(
        {
          page: 1,
          pageSize: 1,
          proxyId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mobilerun.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.connect.users.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listConnections', async () => {
    const responsePromise = client.connect.users.listConnections('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listConnections: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.connect.users.listConnections(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          closeReason: 'closeReason',
          country: 'country',
          dstHost: 'dstHost',
          dstPort: 0,
          endedAfter: '2019-12-27T18:11:19.117Z',
          endedBefore: '2019-12-27T18:11:19.117Z',
          maxBytesIn: 0,
          maxBytesOut: 0,
          maxDurationMs: 0,
          maxTotalBytes: 0,
          minBytesIn: 0,
          minBytesOut: 0,
          minDurationMs: 0,
          minTotalBytes: 0,
          order: 'asc',
          orderBy: 'startedAt',
          page: 1,
          pageSize: 1,
          protocol: 'tcp',
          provider: 'provider',
          proxyId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          sessionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          startedAfter: '2019-12-27T18:11:19.117Z',
          startedBefore: '2019-12-27T18:11:19.117Z',
          status: 'active',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mobilerun.NotFoundError);
  });
});
