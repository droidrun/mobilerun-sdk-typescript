// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource flows', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.workflows.flows.create({
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
    const response = await client.workflows.flows.create({
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
      name: 'x',
      triggerId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      cooldownScope: 'flow',
      cooldownSeconds: 0,
      description: 'description',
      deviceIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      enabled: true,
      notifyOnFailure: true,
      notifyOnSuccess: true,
      notifyWebhookId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.workflows.flows.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.workflows.flows.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workflows.flows.update(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          cooldownScope: 'flow',
          cooldownSeconds: 0,
          description: 'description',
          deviceIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          enabled: true,
          name: 'x',
          notifyOnFailure: true,
          notifyOnSuccess: true,
          notifyWebhookId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          triggerId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mobilerun.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.workflows.flows.list();
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
      client.workflows.flows.list(
        {
          enabled: true,
          orderBy: 'name',
          orderByDirection: 'asc',
          page: 1,
          pageSize: 1,
          search: 'search',
          status: ['healthy'],
          triggerId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mobilerun.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.workflows.flows.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('clone', async () => {
    const responsePromise = client.workflows.flows.clone('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('clone: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workflows.flows.clone(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { deviceIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'], name: 'x' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Mobilerun.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('unblock', async () => {
    const responsePromise = client.workflows.flows.unblock('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
