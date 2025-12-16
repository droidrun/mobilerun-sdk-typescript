// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource state', () => {
  // Prism tests are disabled
  test.skip('screenshot: only required params', async () => {
    const responsePromise = client.devices.state.screenshot('deviceId', { 'X-User-ID': 'X-User-ID' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('screenshot: required and optional params', async () => {
    const response = await client.devices.state.screenshot('deviceId', {
      'X-User-ID': 'X-User-ID',
      hideOverlay: true,
    });
  });

  // Prism tests are disabled
  test.skip('time: only required params', async () => {
    const responsePromise = client.devices.state.time('deviceId', { 'X-User-ID': 'X-User-ID' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('time: required and optional params', async () => {
    const response = await client.devices.state.time('deviceId', { 'X-User-ID': 'X-User-ID' });
  });

  // Prism tests are disabled
  test.skip('ui: only required params', async () => {
    const responsePromise = client.devices.state.ui('deviceId', { 'X-User-ID': 'X-User-ID' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('ui: required and optional params', async () => {
    const response = await client.devices.state.ui('deviceId', { 'X-User-ID': 'X-User-ID', filter: true });
  });
});
