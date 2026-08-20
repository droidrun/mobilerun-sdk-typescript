// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource mediaSessions', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.devices.mediaSessions.create('deviceId', {
      camera: true,
      microphone: true,
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
  test.skip('create: required and optional params', async () => {
    const response = await client.devices.mediaSessions.create('deviceId', {
      camera: true,
      microphone: true,
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.devices.mediaSessions.delete('sessionId', {
      deviceId: 'deviceId',
      'X-Media-Control-Token': 'X-Media-Control-Token',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.devices.mediaSessions.delete('sessionId', {
      deviceId: 'deviceId',
      'X-Media-Control-Token': 'X-Media-Control-Token',
    });
  });

  // Mock server tests are disabled
  test.skip('activate: only required params', async () => {
    const responsePromise = client.devices.mediaSessions.activate('sessionId', {
      deviceId: 'deviceId',
      'X-Media-Control-Token': 'X-Media-Control-Token',
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
  test.skip('activate: required and optional params', async () => {
    const response = await client.devices.mediaSessions.activate('sessionId', {
      deviceId: 'deviceId',
      'X-Media-Control-Token': 'X-Media-Control-Token',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveCurrent', async () => {
    const responsePromise = client.devices.mediaSessions.retrieveCurrent('deviceId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
