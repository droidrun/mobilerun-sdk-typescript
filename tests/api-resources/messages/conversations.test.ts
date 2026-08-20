// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource conversations', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.messages.conversations.list();
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
      client.messages.conversations.list(
        {
          cursorLastMessageId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          cursorLastOccurredAt: '2019-12-27T18:11:19.117Z',
          esimId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          limit: 1,
          numberId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mobilerun.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('markRead: only required params', async () => {
    const responsePromise = client.messages.conversations.markRead({
      peerKey: 'x',
      upToMessageId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      upToOccurredAt: '2019-12-27T18:11:19.117Z',
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
  test.skip('markRead: required and optional params', async () => {
    const response = await client.messages.conversations.markRead({
      peerKey: 'x',
      upToMessageId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      upToOccurredAt: '2019-12-27T18:11:19.117Z',
    });
  });
});
