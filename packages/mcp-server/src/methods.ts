// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.tasks.retrieve',
    fullyQualifiedName: 'tasks.retrieve',
    httpMethod: 'get',
    httpPath: '/tasks/{task_id}',
  },
  {
    clientCallName: 'client.tasks.attach',
    fullyQualifiedName: 'tasks.attach',
    httpMethod: 'get',
    httpPath: '/tasks/{task_id}/attach',
  },
  {
    clientCallName: 'client.tasks.getStatus',
    fullyQualifiedName: 'tasks.getStatus',
    httpMethod: 'get',
    httpPath: '/tasks/{task_id}/status',
  },
  {
    clientCallName: 'client.tasks.getTrajectory',
    fullyQualifiedName: 'tasks.getTrajectory',
    httpMethod: 'get',
    httpPath: '/tasks/{task_id}/trajectory',
  },
  {
    clientCallName: 'client.tasks.runStreamed',
    fullyQualifiedName: 'tasks.runStreamed',
    httpMethod: 'post',
    httpPath: '/tasks/stream',
  },
  {
    clientCallName: 'client.tasks.stop',
    fullyQualifiedName: 'tasks.stop',
    httpMethod: 'post',
    httpPath: '/tasks/{task_id}/cancel',
  },
  {
    clientCallName: 'client.tasks.screenshots.retrieve',
    fullyQualifiedName: 'tasks.screenshots.retrieve',
    httpMethod: 'get',
    httpPath: '/tasks/{task_id}/screenshots/{index}',
  },
  {
    clientCallName: 'client.tasks.screenshots.list',
    fullyQualifiedName: 'tasks.screenshots.list',
    httpMethod: 'get',
    httpPath: '/tasks/{task_id}/screenshots',
  },
  {
    clientCallName: 'client.tasks.uiStates.retrieve',
    fullyQualifiedName: 'tasks.uiStates.retrieve',
    httpMethod: 'get',
    httpPath: '/tasks/{task_id}/ui_states/{index}',
  },
  {
    clientCallName: 'client.tasks.uiStates.list',
    fullyQualifiedName: 'tasks.uiStates.list',
    httpMethod: 'get',
    httpPath: '/tasks/{task_id}/ui_states',
  },
  {
    clientCallName: 'client.devices.create',
    fullyQualifiedName: 'devices.create',
    httpMethod: 'post',
    httpPath: '/devices',
  },
  {
    clientCallName: 'client.devices.retrieve',
    fullyQualifiedName: 'devices.retrieve',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}',
  },
  {
    clientCallName: 'client.devices.list',
    fullyQualifiedName: 'devices.list',
    httpMethod: 'get',
    httpPath: '/devices',
  },
  {
    clientCallName: 'client.devices.count',
    fullyQualifiedName: 'devices.count',
    httpMethod: 'get',
    httpPath: '/devices/count',
  },
  {
    clientCallName: 'client.devices.terminate',
    fullyQualifiedName: 'devices.terminate',
    httpMethod: 'delete',
    httpPath: '/devices/{deviceId}',
  },
  {
    clientCallName: 'client.devices.waitReady',
    fullyQualifiedName: 'devices.waitReady',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/wait',
  },
  {
    clientCallName: 'client.devices.actions.global',
    fullyQualifiedName: 'devices.actions.global',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/global',
  },
  {
    clientCallName: 'client.devices.actions.swipe',
    fullyQualifiedName: 'devices.actions.swipe',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/swipe',
  },
  {
    clientCallName: 'client.devices.actions.tap',
    fullyQualifiedName: 'devices.actions.tap',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/tap',
  },
  {
    clientCallName: 'client.devices.state.screenshot',
    fullyQualifiedName: 'devices.state.screenshot',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/screenshot',
  },
  {
    clientCallName: 'client.devices.state.time',
    fullyQualifiedName: 'devices.state.time',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/time',
  },
  {
    clientCallName: 'client.devices.state.ui',
    fullyQualifiedName: 'devices.state.ui',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/ui-state',
  },
  {
    clientCallName: 'client.devices.apps.list',
    fullyQualifiedName: 'devices.apps.list',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/apps',
  },
  {
    clientCallName: 'client.devices.apps.delete',
    fullyQualifiedName: 'devices.apps.delete',
    httpMethod: 'delete',
    httpPath: '/devices/{deviceId}/apps/{packageName}',
  },
  {
    clientCallName: 'client.devices.apps.install',
    fullyQualifiedName: 'devices.apps.install',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/apps',
  },
  {
    clientCallName: 'client.devices.apps.start',
    fullyQualifiedName: 'devices.apps.start',
    httpMethod: 'put',
    httpPath: '/devices/{deviceId}/apps/{packageName}',
  },
  {
    clientCallName: 'client.devices.packages.list',
    fullyQualifiedName: 'devices.packages.list',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/packages',
  },
  {
    clientCallName: 'client.devices.keyboard.clear',
    fullyQualifiedName: 'devices.keyboard.clear',
    httpMethod: 'delete',
    httpPath: '/devices/{deviceId}/keyboard',
  },
  {
    clientCallName: 'client.devices.keyboard.key',
    fullyQualifiedName: 'devices.keyboard.key',
    httpMethod: 'put',
    httpPath: '/devices/{deviceId}/keyboard',
  },
  {
    clientCallName: 'client.devices.keyboard.write',
    fullyQualifiedName: 'devices.keyboard.write',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/keyboard',
  },
  {
    clientCallName: 'client.devices.tasks.list',
    fullyQualifiedName: 'devices.tasks.list',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/tasks',
  },
  {
    clientCallName: 'client.apps.list',
    fullyQualifiedName: 'apps.list',
    httpMethod: 'get',
    httpPath: '/apps',
  },
  {
    clientCallName: 'client.credentials.list',
    fullyQualifiedName: 'credentials.list',
    httpMethod: 'get',
    httpPath: '/credentials',
  },
  {
    clientCallName: 'client.credentials.packages.create',
    fullyQualifiedName: 'credentials.packages.create',
    httpMethod: 'post',
    httpPath: '/credentials/packages',
  },
  {
    clientCallName: 'client.credentials.packages.list',
    fullyQualifiedName: 'credentials.packages.list',
    httpMethod: 'get',
    httpPath: '/credentials/packages/{packageName}',
  },
  {
    clientCallName: 'client.credentials.packages.credentials.create',
    fullyQualifiedName: 'credentials.packages.credentials.create',
    httpMethod: 'post',
    httpPath: '/credentials/packages/{packageName}',
  },
  {
    clientCallName: 'client.credentials.packages.credentials.retrieve',
    fullyQualifiedName: 'credentials.packages.credentials.retrieve',
    httpMethod: 'get',
    httpPath: '/credentials/packages/{packageName}/credentials/{credentialName}',
  },
  {
    clientCallName: 'client.credentials.packages.credentials.delete',
    fullyQualifiedName: 'credentials.packages.credentials.delete',
    httpMethod: 'delete',
    httpPath: '/credentials/packages/{packageName}/credentials/{credentialName}',
  },
  {
    clientCallName: 'client.credentials.packages.credentials.fields.create',
    fullyQualifiedName: 'credentials.packages.credentials.fields.create',
    httpMethod: 'post',
    httpPath: '/credentials/packages/{packageName}/credentials/{credentialName}/fields',
  },
  {
    clientCallName: 'client.credentials.packages.credentials.fields.update',
    fullyQualifiedName: 'credentials.packages.credentials.fields.update',
    httpMethod: 'patch',
    httpPath: '/credentials/packages/{packageName}/credentials/{credentialName}/fields/{fieldType}',
  },
  {
    clientCallName: 'client.credentials.packages.credentials.fields.delete',
    fullyQualifiedName: 'credentials.packages.credentials.fields.delete',
    httpMethod: 'delete',
    httpPath: '/credentials/packages/{packageName}/credentials/{credentialName}/fields/{fieldType}',
  },
  {
    clientCallName: 'client.hooks.retrieve',
    fullyQualifiedName: 'hooks.retrieve',
    httpMethod: 'get',
    httpPath: '/hooks/{hook_id}',
  },
  {
    clientCallName: 'client.hooks.update',
    fullyQualifiedName: 'hooks.update',
    httpMethod: 'post',
    httpPath: '/hooks/{hook_id}/edit',
  },
  {
    clientCallName: 'client.hooks.getSampleData',
    fullyQualifiedName: 'hooks.getSampleData',
    httpMethod: 'get',
    httpPath: '/hooks/sample',
  },
  {
    clientCallName: 'client.hooks.perform',
    fullyQualifiedName: 'hooks.perform',
    httpMethod: 'post',
    httpPath: '/hooks/perform',
  },
  {
    clientCallName: 'client.hooks.subscribe',
    fullyQualifiedName: 'hooks.subscribe',
    httpMethod: 'post',
    httpPath: '/hooks/subscribe',
  },
  {
    clientCallName: 'client.hooks.unsubscribe',
    fullyQualifiedName: 'hooks.unsubscribe',
    httpMethod: 'post',
    httpPath: '/hooks/{hook_id}/unsubscribe',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
