// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Number extends APIResource {
  /**
   * Returns the cloud number bound to the device and the SIM line the device
   * presents (carrier, number).
   */
  retrieve(
    deviceID: string,
    params: NumberRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NumberRetrieveResponse> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {};
    return this._client.get(path`/devices/${deviceID}/number`, {
      ...options,
      headers: buildHeaders([
        {
          ...(xDeviceDisplayID?.toString() != null ?
            { 'X-Device-Display-ID': xDeviceDisplayID?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Binds one of your cloud numbers to the device. The device's SIM shows the number
   * and every SMS it receives is delivered into the device's messages app. Available
   * on devices whose capabilities report telephony. A number can be bound to one
   * device, and a device holds one number; unbind first to move it.
   */
  bind(deviceID: string, params: NumberBindParams, options?: RequestOptions): APIPromise<NumberBindResponse> {
    const { 'X-Device-Display-ID': xDeviceDisplayID, ...body } = params;
    return this._client.post(path`/devices/${deviceID}/number`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(xDeviceDisplayID?.toString() != null ?
            { 'X-Device-Display-ID': xDeviceDisplayID?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Releases the number bound to the device. The device returns to its own default
   * line; SMS to the number stop reaching the device.
   */
  unbind(
    deviceID: string,
    params: NumberUnbindParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NumberUnbindResponse> {
    const { 'X-Device-Display-ID': xDeviceDisplayID } = params ?? {};
    return this._client.delete(path`/devices/${deviceID}/number`, {
      ...options,
      headers: buildHeaders([
        {
          ...(xDeviceDisplayID?.toString() != null ?
            { 'X-Device-Display-ID': xDeviceDisplayID?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export interface NumberRetrieveResponse {
  binding: NumberRetrieveResponse.Binding;

  line: NumberRetrieveResponse.Line;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export namespace NumberRetrieveResponse {
  export interface Binding {
    boundAt: string;

    numberId: string;

    phoneNumber: string;
  }

  export interface Line {
    carrier: Line.Carrier;

    defaultNumber: boolean;

    kind: 'simulated' | 'uicc' | 'esim' | 'unknown';

    lineId: string;

    numberSource: 'backend_default' | 'caller' | 'unknown';

    state: 'pending' | 'active' | 'inactive' | 'failed' | 'unknown';

    iccid?: string;

    phoneNumber?: string;
  }

  export namespace Line {
    export interface Carrier {
      countryIso: string;

      mcc: string;

      mnc: string;

      name: string;
    }
  }
}

export interface NumberBindResponse {
  binding: NumberBindResponse.Binding;

  line: NumberBindResponse.Line;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export namespace NumberBindResponse {
  export interface Binding {
    boundAt: string;

    numberId: string;

    phoneNumber: string;
  }

  export interface Line {
    carrier: Line.Carrier;

    defaultNumber: boolean;

    kind: 'simulated' | 'uicc' | 'esim' | 'unknown';

    lineId: string;

    numberSource: 'backend_default' | 'caller' | 'unknown';

    state: 'pending' | 'active' | 'inactive' | 'failed' | 'unknown';

    iccid?: string;

    phoneNumber?: string;
  }

  export namespace Line {
    export interface Carrier {
      countryIso: string;

      mcc: string;

      mnc: string;

      name: string;
    }
  }
}

export interface NumberUnbindResponse {
  binding: NumberUnbindResponse.Binding;

  line: NumberUnbindResponse.Line;

  /**
   * A URL to the JSON Schema for this object.
   */
  $schema?: string;
}

export namespace NumberUnbindResponse {
  export interface Binding {
    boundAt: string;

    numberId: string;

    phoneNumber: string;
  }

  export interface Line {
    carrier: Line.Carrier;

    defaultNumber: boolean;

    kind: 'simulated' | 'uicc' | 'esim' | 'unknown';

    lineId: string;

    numberSource: 'backend_default' | 'caller' | 'unknown';

    state: 'pending' | 'active' | 'inactive' | 'failed' | 'unknown';

    iccid?: string;

    phoneNumber?: string;
  }

  export namespace Line {
    export interface Carrier {
      countryIso: string;

      mcc: string;

      mnc: string;

      name: string;
    }
  }
}

export interface NumberRetrieveParams {
  'X-Device-Display-ID'?: number;
}

export interface NumberBindParams {
  /**
   * Body param: The cloud number's id.
   */
  numberId: string;

  /**
   * Header param
   */
  'X-Device-Display-ID'?: number;
}

export interface NumberUnbindParams {
  'X-Device-Display-ID'?: number;
}

export declare namespace Number {
  export {
    type NumberRetrieveResponse as NumberRetrieveResponse,
    type NumberBindResponse as NumberBindResponse,
    type NumberUnbindResponse as NumberUnbindResponse,
    type NumberRetrieveParams as NumberRetrieveParams,
    type NumberBindParams as NumberBindParams,
    type NumberUnbindParams as NumberUnbindParams,
  };
}
