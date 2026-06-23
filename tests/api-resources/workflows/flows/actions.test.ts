// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.workflows.flows.actions.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.workflows.flows.actions.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      actionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      position: 0,
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
  test.skip('add: required and optional params', async () => {
    const response = await client.workflows.flows.actions.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      actionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      position: 0,
      children: [
        {
          actionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          position: 0,
          continueOnError: true,
          nameOverride: 'x',
          overrides: { params: { foo: 'bar' } },
        },
      ],
      continueOnError: true,
      nameOverride: 'x',
      overrides: { params: { foo: 'bar' } },
      parentFlowActionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('remove: only required params', async () => {
    const responsePromise = client.workflows.flows.actions.remove('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      flowId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('remove: required and optional params', async () => {
    const response = await client.workflows.flows.actions.remove('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      flowId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('replace: only required params', async () => {
    const responsePromise = client.workflows.flows.actions.replace('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      actions: [{ actionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', position: 0 }],
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
  test.skip('replace: required and optional params', async () => {
    const response = await client.workflows.flows.actions.replace('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      actions: [
        {
          actionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          position: 0,
          children: [
            {
              actionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              position: 0,
              continueOnError: true,
              nameOverride: 'x',
              overrides: { params: { foo: 'bar' } },
            },
          ],
          continueOnError: true,
          nameOverride: 'x',
          overrides: { params: { foo: 'bar' } },
        },
      ],
    });
  });
});
