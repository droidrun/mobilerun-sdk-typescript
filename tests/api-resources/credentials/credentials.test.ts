// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DroidrunCloud from 'droidrun-cloud';

const client = new DroidrunCloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource credentials', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.credentials.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.credentials.list({ page: 'page', pageSize: 'pageSize' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(DroidrunCloud.NotFoundError);
  });
});
