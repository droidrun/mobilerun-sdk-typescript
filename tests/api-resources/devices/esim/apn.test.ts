// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apn', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.devices.esim.apn.create('deviceId', {
      apn: 'apn',
      mcc: 'mcc',
      mnc: 'mnc',
      name: 'name',
      protocol: 'protocol',
      roamingProtocol: 'roamingProtocol',
      subId: 0,
      type: 'type',
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
    const response = await client.devices.esim.apn.create('deviceId', {
      apn: 'apn',
      mcc: 'mcc',
      mnc: 'mnc',
      name: 'name',
      protocol: 'protocol',
      roamingProtocol: 'roamingProtocol',
      subId: 0,
      type: 'type',
      'X-Device-Display-ID': 0,
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.devices.esim.apn.list('deviceId');
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
      client.devices.esim.apn.list(
        'deviceId',
        { 'X-Device-Display-ID': 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mobilerun.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('select: only required params', async () => {
    const responsePromise = client.devices.esim.apn.select('deviceId', { apnId: 0, subId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('select: required and optional params', async () => {
    const response = await client.devices.esim.apn.select('deviceId', {
      apnId: 0,
      subId: 0,
      'X-Device-Display-ID': 0,
    });
  });
});
