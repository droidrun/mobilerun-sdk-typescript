// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource devices', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.devices.create({
      apps: ['string'],
      files: ['string'],
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
  test.skip('create: required and optional params', async () => {
    const response = await client.devices.create({
      apps: ['string'],
      files: ['string'],
      'X-User-ID': 'X-User-ID',
      country: 'country',
      name: 'name',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.devices.retrieve('deviceId', { 'X-User-ID': 'X-User-ID' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.devices.retrieve('deviceId', { 'X-User-ID': 'X-User-ID' });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.devices.list({ 'X-User-ID': 'X-User-ID' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.devices.list({
      'X-User-ID': 'X-User-ID',
      country: 'country',
      orderBy: 'id',
      orderByDirection: 'asc',
      page: 0,
      pageSize: 0,
      state: 'creating',
    });
  });

  // Prism tests are disabled
  test.skip('terminate: only required params', async () => {
    const responsePromise = client.devices.terminate('deviceId', { 'X-User-ID': 'X-User-ID' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('terminate: required and optional params', async () => {
    const response = await client.devices.terminate('deviceId', { 'X-User-ID': 'X-User-ID' });
  });

  // Prism tests are disabled
  test.skip('waitReady: only required params', async () => {
    const responsePromise = client.devices.waitReady('deviceId', { 'X-User-ID': 'X-User-ID' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('waitReady: required and optional params', async () => {
    const response = await client.devices.waitReady('deviceId', { 'X-User-ID': 'X-User-ID' });
  });
});
