// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apps', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.devices.apps.list('deviceId');
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
      client.devices.apps.list(
        'deviceId',
        { includeSystemApps: true, 'X-Device-Display-ID': 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mobilerun.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.devices.apps.delete('packageName', { deviceId: 'deviceId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.devices.apps.delete('packageName', {
      deviceId: 'deviceId',
      'X-Device-Display-ID': 0,
    });
  });

  // Prism tests are disabled
  test.skip('install: only required params', async () => {
    const responsePromise = client.devices.apps.install('deviceId', { packageName: 'packageName' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('install: required and optional params', async () => {
    const response = await client.devices.apps.install('deviceId', {
      packageName: 'packageName',
      'X-Device-Display-ID': 0,
    });
  });

  // Prism tests are disabled
  test.skip('start: only required params', async () => {
    const responsePromise = client.devices.apps.start('packageName', { deviceId: 'deviceId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('start: required and optional params', async () => {
    const response = await client.devices.apps.start('packageName', {
      deviceId: 'deviceId',
      activity: 'activity',
      'X-Device-Display-ID': 0,
    });
  });
});
