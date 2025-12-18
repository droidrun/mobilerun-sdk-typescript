// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_devices from './devices/create-devices';
import retrieve_devices from './devices/retrieve-devices';
import list_devices from './devices/list-devices';
import terminate_devices from './devices/terminate-devices';
import wait_ready_devices from './devices/wait-ready-devices';
import global_devices_actions from './devices/actions/global-devices-actions';
import swipe_devices_actions from './devices/actions/swipe-devices-actions';
import tap_devices_actions from './devices/actions/tap-devices-actions';
import screenshot_devices_state from './devices/state/screenshot-devices-state';
import time_devices_state from './devices/state/time-devices-state';
import ui_devices_state from './devices/state/ui-devices-state';
import list_devices_apps from './devices/apps/list-devices-apps';
import delete_devices_apps from './devices/apps/delete-devices-apps';
import install_devices_apps from './devices/apps/install-devices-apps';
import start_devices_apps from './devices/apps/start-devices-apps';
import list_devices_packages from './devices/packages/list-devices-packages';
import clear_devices_keyboard from './devices/keyboard/clear-devices-keyboard';
import key_devices_keyboard from './devices/keyboard/key-devices-keyboard';
import write_devices_keyboard from './devices/keyboard/write-devices-keyboard';
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

addEndpoint(create_devices);
addEndpoint(retrieve_devices);
addEndpoint(list_devices);
addEndpoint(terminate_devices);
addEndpoint(wait_ready_devices);
addEndpoint(global_devices_actions);
addEndpoint(swipe_devices_actions);
addEndpoint(tap_devices_actions);
addEndpoint(screenshot_devices_state);
addEndpoint(time_devices_state);
addEndpoint(ui_devices_state);
addEndpoint(list_devices_apps);
addEndpoint(delete_devices_apps);
addEndpoint(install_devices_apps);
addEndpoint(start_devices_apps);
addEndpoint(list_devices_packages);
addEndpoint(clear_devices_keyboard);
addEndpoint(key_devices_keyboard);
addEndpoint(write_devices_keyboard);
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
