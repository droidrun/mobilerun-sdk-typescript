// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Bots extends APIResource {
  /**
   * List the current user's Telegram link rows
   */
  list(options?: RequestOptions): APIPromise<BotListResponse> {
    return this._client.get('/agents/telegram/bots', options);
  }

  /**
   * Issues a one-shot deeplink (`t.me/<sharedBot>?start=<code>`) for the
   * operator-owned shared bot. The user opens the link, taps `Start`, and the
   * webhook binds their Telegram account to this droidrun user. No bot token is
   * needed from the user — the operator owns the bot.
   */
  requestLink(options?: RequestOptions): APIPromise<BotRequestLinkResponse> {
    return this._client.post('/agents/telegram/bots/connect', options);
  }

  /**
   * Disables the link. Future inbound messages from this Telegram account get the
   * welcome reply. The existing chat history is NOT wiped — start a fresh chat from
   * the UI if you suspect compromise.
   */
  revokeLink(id: string, options?: RequestOptions): APIPromise<BotRevokeLinkResponse> {
    return this._client.post(path`/agents/telegram/bots/${id}/revoke`, options);
  }
}

export interface BotListResponse {
  bots: Array<BotListResponse.Bot>;
}

export namespace BotListResponse {
  export interface Bot {
    id: string;

    botUsername: string;

    createdAt: string | null;

    lastMessageAt: string | null;

    linkCodeExpiresAt: string | null;

    ownerTelegramUserId: number | null;

    status: 'pending' | 'active' | 'disabled';
  }
}

export interface BotRequestLinkResponse {
  id: string;

  botUsername: string;

  deepLink: string;
}

export interface BotRevokeLinkResponse {
  revoked: true;
}

export declare namespace Bots {
  export {
    type BotListResponse as BotListResponse,
    type BotRequestLinkResponse as BotRequestLinkResponse,
    type BotRevokeLinkResponse as BotRevokeLinkResponse,
  };
}
