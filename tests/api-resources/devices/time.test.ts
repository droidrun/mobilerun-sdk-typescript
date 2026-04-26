// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource time', () => {
  // Mock server tests are disabled
  test.skip('setTimezone: only required params', async () => {
    const responsePromise = client.devices.time.setTimezone('deviceId', { timezone: 'timezone' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('setTimezone: required and optional params', async () => {
    const response = await client.devices.time.setTimezone('deviceId', { timezone: 'timezone', 'X-Device-Display-ID': 0 });
  });

  // Mock server tests are disabled
  test.skip('time', async () => {
    const responsePromise = client.devices.time.time('deviceId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('time: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.devices.time.time('deviceId', { 'X-Device-Display-ID': 0 }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Mobilerun.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('timezone', async () => {
    const responsePromise = client.devices.time.timezone('deviceId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('timezone: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.devices.time.timezone('deviceId', { 'X-Device-Display-ID': 0 }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Mobilerun.NotFoundError);
  });
});
