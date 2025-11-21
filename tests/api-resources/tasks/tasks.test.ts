// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DroidrunCloud from 'droidrun-cloud';

const client = new DroidrunCloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tasks', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.tasks.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.tasks.list();
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
      client.tasks.list(
        { orderBy: 'id', orderByDirection: 'asc', page: 1, pageSize: 1, query: 'query', status: 'created' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DroidrunCloud.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('attach', async () => {
    const responsePromise = client.tasks.attach('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getStatus', async () => {
    const responsePromise = client.tasks.getStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getTrajectory', async () => {
    const responsePromise = client.tasks.getTrajectory('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('run: only required params', async () => {
    const responsePromise = client.tasks.run({ llmModel: 'openai/gpt-5', task: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('run: required and optional params', async () => {
    const response = await client.tasks.run({
      llmModel: 'openai/gpt-5',
      task: 'x',
      apps: ['string'],
      credentials: [{ credentialNames: ['string'], packageName: 'packageName' }],
      executionTimeout: 0,
      files: ['string'],
      maxSteps: 0,
      outputSchema: { foo: 'bar' },
      reasoning: true,
      temperature: 0,
      vision: true,
      vpnCountry: 'US',
    });
  });

  // Prism tests are disabled
  test.skip('runStreamed: only required params', async () => {
    const responsePromise = client.tasks.runStreamed({ llmModel: 'openai/gpt-5', task: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('runStreamed: required and optional params', async () => {
    const response = await client.tasks.runStreamed({
      llmModel: 'openai/gpt-5',
      task: 'x',
      apps: ['string'],
      credentials: [{ credentialNames: ['string'], packageName: 'packageName' }],
      executionTimeout: 0,
      files: ['string'],
      maxSteps: 0,
      outputSchema: { foo: 'bar' },
      reasoning: true,
      temperature: 0,
      vision: true,
      vpnCountry: 'US',
    });
  });

  // Prism tests are disabled
  test.skip('stop', async () => {
    const responsePromise = client.tasks.stop('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
