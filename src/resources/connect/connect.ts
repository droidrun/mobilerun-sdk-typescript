// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CountriesAPI from './countries';
import { Countries, CountryListParams, CountryListResponse } from './countries';
import * as ProxiesAPI from './proxies';
import {
  Proxies,
  ProxyBuyParams,
  ProxyBuyResponse,
  ProxyListConnectionsParams,
  ProxyListConnectionsResponse,
  ProxyListParams,
  ProxyListResponse,
  ProxyPingResponse,
  ProxyRetrieveResponse,
} from './proxies';
import * as UsersAPI from './users';
import {
  UserCreateParams,
  UserCreateResponse,
  UserListConnectionsParams,
  UserListConnectionsResponse,
  UserListParams,
  UserListResponse,
  UserRetrieveResponse,
  UserUpdateParams,
  UserUpdateResponse,
  Users,
} from './users';

export class Connect extends APIResource {
  countries: CountriesAPI.Countries = new CountriesAPI.Countries(this._client);
  proxies: ProxiesAPI.Proxies = new ProxiesAPI.Proxies(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

Connect.Countries = Countries;
Connect.Proxies = Proxies;
Connect.Users = Users;

export declare namespace Connect {
  export {
    Countries as Countries,
    type CountryListResponse as CountryListResponse,
    type CountryListParams as CountryListParams,
  };

  export {
    Proxies as Proxies,
    type ProxyRetrieveResponse as ProxyRetrieveResponse,
    type ProxyListResponse as ProxyListResponse,
    type ProxyBuyResponse as ProxyBuyResponse,
    type ProxyListConnectionsResponse as ProxyListConnectionsResponse,
    type ProxyPingResponse as ProxyPingResponse,
    type ProxyListParams as ProxyListParams,
    type ProxyBuyParams as ProxyBuyParams,
    type ProxyListConnectionsParams as ProxyListConnectionsParams,
  };

  export {
    Users as Users,
    type UserCreateResponse as UserCreateResponse,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserListResponse as UserListResponse,
    type UserListConnectionsResponse as UserListConnectionsResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserListConnectionsParams as UserListConnectionsParams,
  };
}
