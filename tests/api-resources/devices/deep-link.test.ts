// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource deepLink', () => {
  // Mock server tests are disabled
  test.skip('executeDeepLink: only required params', async () => {
    const responsePromise = client.devices.deepLink.executeDeepLink('deviceId', { deepLink: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('executeDeepLink: required and optional params', async () => {
    const response = await client.devices.deepLink.executeDeepLink('deviceId', {
      deepLink: 'x',
      action: 'action',
      bundleId: 'bundleId',
      packageName: 'packageName',
      'X-Device-Display-ID': 0,
    });
  });
});
