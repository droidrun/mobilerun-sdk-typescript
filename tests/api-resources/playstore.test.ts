// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DroidrunCloud from 'droidrun-cloud';

const client = new DroidrunCloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource playstore', () => {
  // Prism tests are disabled
  test.skip('createApp: only required params', async () => {
    const responsePromise = client.playstore.createApp({ packageName: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createApp: required and optional params', async () => {
    const response = await client.playstore.createApp({ packageName: 'x' });
  });

  // Prism tests are disabled
  test.skip('searchApp: only required params', async () => {
    const responsePromise = client.playstore.searchApp({ query: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('searchApp: required and optional params', async () => {
    const response = await client.playstore.searchApp({ query: 'x' });
  });
});
