// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DroidrunCloud from 'droidrun-cloud';

const client = new DroidrunCloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apps', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.apps.retrieve('550e8400-e29b-41d4-a716-446655440000');
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
    const responsePromise = client.apps.list();
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
      client.apps.list(
        { order: 'asc', page: 1, pageSize: 1, query: 'query', sortBy: 'createdAt', source: 'all' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DroidrunCloud.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('createSignedUploadURL: only required params', async () => {
    const responsePromise = client.apps.createSignedUploadURL({
      displayName: 'displayName',
      iconURL: 'https://example.com',
      packageName: 'packageName',
      sizeBytes: 0,
      targetSdk: 0,
      versionCode: 0,
      versionName: 'versionName',
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
  test.skip('createSignedUploadURL: required and optional params', async () => {
    const response = await client.apps.createSignedUploadURL({
      displayName: 'displayName',
      iconURL: 'https://example.com',
      packageName: 'packageName',
      sizeBytes: 0,
      targetSdk: 0,
      versionCode: 0,
      versionName: 'versionName',
      categoryName: 'categoryName',
      description: 'description',
      developerName: 'developerName',
      ratingCount: 0,
      ratingScore: 0,
    });
  });

  // Prism tests are disabled
  test.skip('markUploadFailed: only required params', async () => {
    const responsePromise = client.apps.markUploadFailed({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('markUploadFailed: required and optional params', async () => {
    const response = await client.apps.markUploadFailed({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
  });

  // Prism tests are disabled
  test.skip('retrieveByPackageName', async () => {
    const responsePromise = client.apps.retrieveByPackageName('com.example.app');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateApp: only required params', async () => {
    const responsePromise = client.apps.updateApp('550e8400-e29b-41d4-a716-446655440000', {
      externalIds: ['string'],
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
  test.skip('updateApp: required and optional params', async () => {
    const response = await client.apps.updateApp('550e8400-e29b-41d4-a716-446655440000', {
      externalIds: ['string'],
    });
  });
});
