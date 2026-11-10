// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource routines', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.agents.routines.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      actions: [{ actionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', position: 0 }],
      name: 'x',
      triggerId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.agents.routines.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      actions: [{ actionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', position: 0 }],
      name: 'x',
      triggerId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      cooldownScope: 'flow',
      cooldownSeconds: 0,
      delivery: {
        destination: 'one_drive',
        folder: 'x',
        recording: { filename: 'x' },
        screenshots: {},
      },
      description: 'description',
      deviceIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      enabled: true,
      healthMonitoringEnabled: true,
      notifyOnFailure: true,
      notifyOnSuccess: true,
      notifyWebhookId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      recordingEnabled: true,
      recordingPolicy: { mode: 'off' },
      selfHealingEnabled: true,
      selfHealingMaxAttempts: 1,
    });
  });

  // Mock server tests are disabled
  test.skip('clone: only required params', async () => {
    const responsePromise = client.agents.routines.clone('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      agentId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('clone: required and optional params', async () => {
    const response = await client.agents.routines.clone('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      agentId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      deviceIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      name: 'x',
    });
  });
});
