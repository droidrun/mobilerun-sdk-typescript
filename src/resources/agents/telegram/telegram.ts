// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BotsAPI from './bots';
import { BotListResponse, BotRequestLinkResponse, BotRevokeLinkResponse, Bots } from './bots';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Telegram extends APIResource {
  bots: BotsAPI.Bots = new BotsAPI.Bots(this._client);

  /**
   * Public endpoint called by Telegram's servers for the operator-owned shared bot.
   * One fixed URL, one fixed secret: the orchestrator compares
   * `X-Telegram-Bot-Api-Secret-Token` against `env.TELEGRAM_WEBHOOK_SECRET` with a
   * constant-time check. Inbound routing keys on `message.from.id` (Telegram user
   * id) → active link row → droidrun user. Returns 200 for ignorable events (group
   * chats, dedup hits, unrecognized senders) to avoid Telegram retry storms; 401
   * only for missing/wrong secret; 400 for malformed bodies.
   */
  receiveUpdate(body: TelegramReceiveUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/agents/telegram/webhook', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TelegramReceiveUpdateParams {
  update_id: number;

  message?: TelegramReceiveUpdateParams.Message;

  [k: string]: unknown;
}

export namespace TelegramReceiveUpdateParams {
  export interface Message {
    chat: Message.Chat;

    message_id: number;

    caption?: string;

    from?: Message.From;

    text?: string;

    [k: string]: unknown;
  }

  export namespace Message {
    export interface Chat {
      id: number;

      type: string;

      [k: string]: unknown;
    }

    export interface From {
      id: number;

      first_name?: string;

      is_bot?: boolean;

      username?: string;

      [k: string]: unknown;
    }
  }
}

Telegram.Bots = Bots;

export declare namespace Telegram {
  export { type TelegramReceiveUpdateParams as TelegramReceiveUpdateParams };

  export {
    Bots as Bots,
    type BotListResponse as BotListResponse,
    type BotRequestLinkResponse as BotRequestLinkResponse,
    type BotRevokeLinkResponse as BotRevokeLinkResponse,
  };
}
