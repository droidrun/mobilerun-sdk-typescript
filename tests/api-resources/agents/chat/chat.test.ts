// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mobilerun from '@mobilerun/sdk';

const client = new Mobilerun({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chat', () => {
  // Mock server tests are disabled
  test.skip('deliverPermission: only required params', async () => {
    const responsePromise = client.agents.chat.deliverPermission({ permissionId: 'x', response: 'once' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deliverPermission: required and optional params', async () => {
    const response = await client.agents.chat.deliverPermission({ permissionId: 'x', response: 'once' });
  });

  // Mock server tests are disabled
  test.skip('getChatState', async () => {
    const responsePromise = client.agents.chat.getChatState();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listSlashCommands', async () => {
    const responsePromise = client.agents.chat.listSlashCommands();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('rehydrateChat', async () => {
    const responsePromise = client.agents.chat.rehydrateChat();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('sendMessage: only required params', async () => {
    const responsePromise = client.agents.chat.sendMessage({ message: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('sendMessage: required and optional params', async () => {
    const response = await client.agents.chat.sendMessage({ message: 'x', agent: 'agent' });
  });

  // Mock server tests are disabled
  test.skip('sendPrompt: only required params', async () => {
    const responsePromise = client.agents.chat.sendPrompt({
      messages: [
        {
          id: 'id',
          parts: [{ type: 'type' }],
          role: 'user',
        },
      ],
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
  test.skip('sendPrompt: required and optional params', async () => {
    const response = await client.agents.chat.sendPrompt({
      messages: [
        {
          id: 'id',
          parts: [{ type: 'type' }],
          role: 'user',
          metadata: { foo: 'bar' },
        },
      ],
      id: 'id',
      agent: 'agent',
      context: 'x',
      fileIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      metadata: { foo: 'bar' },
      trigger: 'submit-message',
    });
  });

  // Mock server tests are disabled
  test.skip('subscribeEvents', async () => {
    const responsePromise = client.agents.chat.subscribeEvents();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
