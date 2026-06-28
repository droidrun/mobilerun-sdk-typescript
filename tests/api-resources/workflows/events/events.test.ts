// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource events', () => {
  // Mock server tests are disabled
  test.skip('dryRun: only required params', async () => {
    const responsePromise = client.workflows.events.dryRun({ eventType: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('dryRun: required and optional params', async () => {
    const response = await client.workflows.events.dryRun({
      eventType: 'x',
      deviceId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      payload: { foo: 'bar' },
    });
  });

  // Mock server tests are disabled
  test.skip('ingest: only required params', async () => {
    const responsePromise = client.workflows.events.ingest({ eventType: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('ingest: required and optional params', async () => {
    const response = await client.workflows.events.ingest({
      eventType: 'x',
      deviceId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      payload: { foo: 'bar' },
    });
  });
});
