// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun, { toFile } from '@mobilerun/sdk';

const client = new Mobilerun({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource kiosk', () => {
  // Mock server tests are disabled
  test.skip('disable', async () => {
    const responsePromise = client.devices.kiosk.disable('deviceId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('disable: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.devices.kiosk.disable('deviceId', { 'X-Device-Display-ID': 0 }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Mobilerun.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('enable: only required params', async () => {
    const responsePromise = client.devices.kiosk.enable('deviceId', { packageName: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('enable: required and optional params', async () => {
    const response = await client.devices.kiosk.enable('deviceId', { packageName: 'x', 'X-Device-Display-ID': 0 });
  });
});
