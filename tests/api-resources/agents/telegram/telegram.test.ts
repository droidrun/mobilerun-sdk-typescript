// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource telegram', () => {
  // Mock server tests are disabled
  test.skip('receiveUpdate: only required params', async () => {
    const responsePromise = client.agents.telegram.receiveUpdate({ update_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('receiveUpdate: required and optional params', async () => {
    const response = await client.agents.telegram.receiveUpdate({
      update_id: 0,
      message: {
        chat: { id: 0, type: 'type' },
        message_id: 0,
        caption: 'caption',
        from: {
          id: 0,
          first_name: 'first_name',
          is_bot: true,
          username: 'username',
        },
        text: 'text',
      },
    });
  });
});
