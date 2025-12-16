// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Prism tests are disabled
  test.skip('swipe: only required params', async () => {
    const responsePromise = client.devices.actions.swipe('deviceId', {
      duration: 0,
      endX: 0,
      endY: 0,
      startX: 0,
      startY: 0,
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
  test.skip('swipe: required and optional params', async () => {
    const response = await client.devices.actions.swipe('deviceId', {
      duration: 0,
      endX: 0,
      endY: 0,
      startX: 0,
      startY: 0,
    });
  });

  // Prism tests are disabled
  test.skip('tap: only required params', async () => {
    const responsePromise = client.devices.actions.tap('deviceId', { x: 0, y: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('tap: required and optional params', async () => {
    const response = await client.devices.actions.tap('deviceId', { x: 0, y: 0 });
  });
});
