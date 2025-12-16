// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource keyboard', () => {
  // Prism tests are disabled
  test.skip('clear: only required params', async () => {
    const responsePromise = client.devices.keyboard.clear('deviceId', { 'X-User-ID': 'X-User-ID' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('clear: required and optional params', async () => {
    const response = await client.devices.keyboard.clear('deviceId', { 'X-User-ID': 'X-User-ID' });
  });

  // Prism tests are disabled
  test.skip('key: only required params', async () => {
    const responsePromise = client.devices.keyboard.key('deviceId', { key: 0, 'X-User-ID': 'X-User-ID' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('key: required and optional params', async () => {
    const response = await client.devices.keyboard.key('deviceId', { key: 0, 'X-User-ID': 'X-User-ID' });
  });

  // Prism tests are disabled
  test.skip('write: only required params', async () => {
    const responsePromise = client.devices.keyboard.write('deviceId', {
      clear: true,
      text: 'text',
      'X-User-ID': 'X-User-ID',
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
  test.skip('write: required and optional params', async () => {
    const response = await client.devices.keyboard.write('deviceId', {
      clear: true,
      text: 'text',
      'X-User-ID': 'X-User-ID',
    });
  });
});
