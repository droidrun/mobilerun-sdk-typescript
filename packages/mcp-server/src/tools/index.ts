// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import retrieve_tasks from './tasks/retrieve-tasks';
import list_tasks from './tasks/list-tasks';
import attach_tasks from './tasks/attach-tasks';
import get_status_tasks from './tasks/get-status-tasks';
import get_trajectory_tasks from './tasks/get-trajectory-tasks';
import run_tasks from './tasks/run-tasks';
import run_streamed_tasks from './tasks/run-streamed-tasks';
import stop_tasks from './tasks/stop-tasks';
import retrieve_tasks_screenshots from './tasks/screenshots/retrieve-tasks-screenshots';
import list_tasks_screenshots from './tasks/screenshots/list-tasks-screenshots';
import list_apps from './apps/list-apps';
import list_credentials from './credentials/list-credentials';
import create_credentials_packages from './credentials/packages/create-credentials-packages';
import list_credentials_packages from './credentials/packages/list-credentials-packages';
import create_packages_credentials_credentials from './credentials/packages/credentials/create-packages-credentials-credentials';
import retrieve_packages_credentials_credentials from './credentials/packages/credentials/retrieve-packages-credentials-credentials';
import delete_packages_credentials_credentials from './credentials/packages/credentials/delete-packages-credentials-credentials';
import create_credentials_packages_credentials_fields from './credentials/packages/credentials/fields/create-credentials-packages-credentials-fields';
import update_credentials_packages_credentials_fields from './credentials/packages/credentials/fields/update-credentials-packages-credentials-fields';
import delete_credentials_packages_credentials_fields from './credentials/packages/credentials/fields/delete-credentials-packages-credentials-fields';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(retrieve_tasks);
addEndpoint(list_tasks);
addEndpoint(attach_tasks);
addEndpoint(get_status_tasks);
addEndpoint(get_trajectory_tasks);
addEndpoint(run_tasks);
addEndpoint(run_streamed_tasks);
addEndpoint(stop_tasks);
addEndpoint(retrieve_tasks_screenshots);
addEndpoint(list_tasks_screenshots);
addEndpoint(list_apps);
addEndpoint(list_credentials);
addEndpoint(create_credentials_packages);
addEndpoint(list_credentials_packages);
addEndpoint(create_packages_credentials_credentials);
addEndpoint(retrieve_packages_credentials_credentials);
addEndpoint(delete_packages_credentials_credentials);
addEndpoint(create_credentials_packages_credentials_fields);
addEndpoint(update_credentials_packages_credentials_fields);
addEndpoint(delete_credentials_packages_credentials_fields);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
