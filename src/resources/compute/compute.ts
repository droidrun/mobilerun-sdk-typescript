// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RunsAPI from './runs';
import {
  FunctionRun,
  FunctionRunSummary,
  RunCancelResponse,
  RunListParams,
  RunListResponse,
  RunLogsResponse,
  RunRetrieveParams,
  RunRetrieveResponse,
  Runs,
} from './runs';
import * as SandboxesAPI from './sandboxes/sandboxes';
import {
  Sandbox,
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
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);
  sandboxes: SandboxesAPI.Sandboxes = new SandboxesAPI.Sandboxes(this._client);
}

Compute.Runs = Runs;
Compute.Sandboxes = Sandboxes;

export declare namespace Compute {
  export {
    Runs as Runs,
    type FunctionRun as FunctionRun,
    type FunctionRunSummary as FunctionRunSummary,
    type RunRetrieveResponse as RunRetrieveResponse,
    type RunListResponse as RunListResponse,
    type RunCancelResponse as RunCancelResponse,
    type RunLogsResponse as RunLogsResponse,
    type RunRetrieveParams as RunRetrieveParams,
    type RunListParams as RunListParams,
  };

  export {
    Sandboxes as Sandboxes,
    type Sandbox as Sandbox,
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
