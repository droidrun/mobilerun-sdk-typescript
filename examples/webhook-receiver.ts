// No API key is needed. Set WEBHOOK_SECRET to your endpoint signing secret.
// Usage: npx tsx examples/webhook-receiver.ts
import { createServer } from 'node:http';
import { verifyWebhook, WebhookVerificationError } from '@mobilerun/sdk';

createServer(async (request, response) => {
  if (request.method !== 'POST') {
    response.writeHead(405).end();
    return;
  }
  const chunks: Buffer[] = [];
  for await (const chunk of request) chunks.push(Buffer.from(chunk));
  try {
    await verifyWebhook({
      body: Buffer.concat(chunks),
      headers: request.headers,
      secret: process.env['WEBHOOK_SECRET']!,
    });
    response.writeHead(204).end();
  } catch (error) {
    response.writeHead(error instanceof WebhookVerificationError ? 400 : 500).end();
  }
}).listen(Number(process.env['PORT'] ?? 8080));
