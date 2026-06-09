// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource question', () => {
  // Mock server tests are disabled
  test.skip('deliverAnswer: only required params', async () => {
    const responsePromise = client.agents.chat.question.deliverAnswer({
      answers: [[{ label: 'x' }]],
      questionId: 'x',
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
  test.skip('deliverAnswer: required and optional params', async () => {
    const response = await client.agents.chat.question.deliverAnswer({
      answers: [[{ label: 'x' }]],
      questionId: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('dismiss: only required params', async () => {
    const responsePromise = client.agents.chat.question.dismiss({ questionId: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('dismiss: required and optional params', async () => {
    const response = await client.agents.chat.question.dismiss({ questionId: 'x' });
  });
});
