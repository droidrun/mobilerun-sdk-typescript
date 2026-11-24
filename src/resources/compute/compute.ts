// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RunsAPI from './runs';
import {
  RunCancelResponse,
  RunListParams,
  RunListResponse,
  RunLogsResponse,
  RunRetrieveParams,
  RunRetrieveResponse,
  Runs,
} from './runs';
import * as FunctionsAPI from './functions/functions';
import {
  FunctionCreateParams,
  FunctionCreateResponse,
  FunctionListParams,
  FunctionListResponse,
  FunctionRetrieveResponse,
  FunctionSource,
  FunctionSourceParams,
  FunctionSourceResponse,
  FunctionUpdateParams,
  FunctionUpdateResponse,
  Functions,
  ServerlessFunction,
} from './functions/functions';
import * as SandboxesAPI from './sandboxes/sandboxes';
import {
  SandboxCreateParams,
  SandboxCreateResponse,
  SandboxDeleteResponse,
  SandboxExecParams,
  SandboxExecResponse,
  SandboxListParams,
  SandboxListResponse,
  SandboxRetrieveResponse,
  Sandboxes,
} from './sandboxes/sandboxes';

export class Compute extends APIResource {
  functions: FunctionsAPI.Functions = new FunctionsAPI.Functions(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);
  sandboxes: SandboxesAPI.Sandboxes = new SandboxesAPI.Sandboxes(this._client);
}

Compute.Functions = Functions;
Compute.Runs = Runs;
Compute.Sandboxes = Sandboxes;

export declare namespace Compute {
  export {
    Functions as Functions,
    type FunctionSource as FunctionSource,
    type ServerlessFunction as ServerlessFunction,
    type FunctionCreateResponse as FunctionCreateResponse,
    type FunctionRetrieveResponse as FunctionRetrieveResponse,
    type FunctionUpdateResponse as FunctionUpdateResponse,
    type FunctionListResponse as FunctionListResponse,
    type FunctionSourceResponse as FunctionSourceResponse,
    type FunctionCreateParams as FunctionCreateParams,
    type FunctionUpdateParams as FunctionUpdateParams,
    type FunctionListParams as FunctionListParams,
    type FunctionSourceParams as FunctionSourceParams,
  };

  export {
    Runs as Runs,
    type RunRetrieveResponse as RunRetrieveResponse,
    type RunListResponse as RunListResponse,
    type RunCancelResponse as RunCancelResponse,
    type RunLogsResponse as RunLogsResponse,
    type RunRetrieveParams as RunRetrieveParams,
    type RunListParams as RunListParams,
  };

  export {
    Sandboxes as Sandboxes,
    type SandboxCreateResponse as SandboxCreateResponse,
    type SandboxRetrieveResponse as SandboxRetrieveResponse,
    type SandboxListResponse as SandboxListResponse,
    type SandboxDeleteResponse as SandboxDeleteResponse,
    type SandboxExecResponse as SandboxExecResponse,
    type SandboxCreateParams as SandboxCreateParams,
    type SandboxListParams as SandboxListParams,
    type SandboxExecParams as SandboxExecParams,
  };
}
