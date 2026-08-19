// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun, { toFile } from '@mobilerun/sdk';

const client = new Mobilerun({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource recordings', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.devices.recordings.list('deviceId');
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
    await expect(client.devices.recordings.list('deviceId', { status: 'status', type: 'type' }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Mobilerun.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.devices.recordings.delete('recordingId', { deviceId: 'deviceId' });
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
    const response = await client.devices.recordings.delete('recordingId', { deviceId: 'deviceId' });
  });

  // Mock server tests are disabled
  test.skip('start', async () => {
    const responsePromise = client.devices.recordings.start('deviceId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('status: only required params', async () => {
    const responsePromise = client.devices.recordings.status('recordingId', { deviceId: 'deviceId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('status: required and optional params', async () => {
    const response = await client.devices.recordings.status('recordingId', { deviceId: 'deviceId' });
  });

  // Mock server tests are disabled
  test.skip('stop: only required params', async () => {
    const responsePromise = client.devices.recordings.stop('recordingId', { deviceId: 'deviceId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('stop: required and optional params', async () => {
    const response = await client.devices.recordings.stop('recordingId', { deviceId: 'deviceId' });
  });

  // Mock server tests are disabled
  test.skip('trajectory: only required params', async () => {
    const responsePromise = client.devices.recordings.trajectory('recordingId', { deviceId: 'deviceId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('trajectory: required and optional params', async () => {
    const response = await client.devices.recordings.trajectory('recordingId', { deviceId: 'deviceId' });
  });

  // Mock server tests are disabled
  test.skip('video: only required params', async () => {
    const responsePromise = client.devices.recordings.video('recordingId', { deviceId: 'deviceId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('video: required and optional params', async () => {
    const response = await client.devices.recordings.video('recordingId', { deviceId: 'deviceId' });
  });
});
