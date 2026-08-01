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
    clientCallName: 'client.apps.retrieve',
    fullyQualifiedName: 'apps.retrieve',
    httpMethod: 'get',
    httpPath: '/apps/{id}',
  },
  {
    clientCallName: 'client.apps.list',
    fullyQualifiedName: 'apps.list',
    httpMethod: 'get',
    httpPath: '/apps',
  },
  {
    clientCallName: 'client.apps.delete',
    fullyQualifiedName: 'apps.delete',
    httpMethod: 'delete',
    httpPath: '/apps/{id}',
  },
  {
    clientCallName: 'client.apps.confirmUpload',
    fullyQualifiedName: 'apps.confirmUpload',
    httpMethod: 'post',
    httpPath: '/apps/{id}/confirm-upload',
  },
  {
    clientCallName: 'client.apps.createSignedUploadURL',
    fullyQualifiedName: 'apps.createSignedUploadURL',
    httpMethod: 'post',
    httpPath: '/apps/create-signed-upload-url',
  },
  {
    clientCallName: 'client.apps.listVersions',
    fullyQualifiedName: 'apps.listVersions',
    httpMethod: 'get',
    httpPath: '/apps/{id}/versions',
  },
  {
    clientCallName: 'client.apps.markFailed',
    fullyQualifiedName: 'apps.markFailed',
    httpMethod: 'post',
    httpPath: '/apps/{id}/mark-failed',
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
    clientCallName: 'client.models.list',
    fullyQualifiedName: 'models.list',
    httpMethod: 'get',
    httpPath: '/models',
  },
  {
    clientCallName: 'client.proxies.create',
    fullyQualifiedName: 'proxies.create',
    httpMethod: 'post',
    httpPath: '/proxies',
  },
  {
    clientCallName: 'client.proxies.retrieve',
    fullyQualifiedName: 'proxies.retrieve',
    httpMethod: 'get',
    httpPath: '/proxies/{proxyId}',
  },
  {
    clientCallName: 'client.proxies.update',
    fullyQualifiedName: 'proxies.update',
    httpMethod: 'put',
    httpPath: '/proxies/{proxyId}',
  },
  {
    clientCallName: 'client.proxies.list',
    fullyQualifiedName: 'proxies.list',
    httpMethod: 'get',
    httpPath: '/proxies',
  },
  {
    clientCallName: 'client.proxies.delete',
    fullyQualifiedName: 'proxies.delete',
    httpMethod: 'delete',
    httpPath: '/proxies/{proxyId}',
  },
  {
    clientCallName: 'client.connect.countries.list',
    fullyQualifiedName: 'connect.countries.list',
    httpMethod: 'get',
    httpPath: '/connect/countries',
  },
  {
    clientCallName: 'client.connect.proxies.retrieve',
    fullyQualifiedName: 'connect.proxies.retrieve',
    httpMethod: 'get',
    httpPath: '/connect/proxies/{id}',
  },
  {
    clientCallName: 'client.connect.proxies.list',
    fullyQualifiedName: 'connect.proxies.list',
    httpMethod: 'get',
    httpPath: '/connect/proxies',
  },
  {
    clientCallName: 'client.connect.proxies.buy',
    fullyQualifiedName: 'connect.proxies.buy',
    httpMethod: 'post',
    httpPath: '/connect/proxies',
  },
  {
    clientCallName: 'client.connect.proxies.cancel',
    fullyQualifiedName: 'connect.proxies.cancel',
    httpMethod: 'delete',
    httpPath: '/connect/proxies/{id}',
  },
  {
    clientCallName: 'client.connect.proxies.listConnections',
    fullyQualifiedName: 'connect.proxies.listConnections',
    httpMethod: 'get',
    httpPath: '/connect/proxies/{id}/connections',
  },
  {
    clientCallName: 'client.connect.proxies.ping',
    fullyQualifiedName: 'connect.proxies.ping',
    httpMethod: 'get',
    httpPath: '/connect/proxies/{id}/ping',
  },
  {
    clientCallName: 'client.connect.users.create',
    fullyQualifiedName: 'connect.users.create',
    httpMethod: 'post',
    httpPath: '/connect/users',
  },
  {
    clientCallName: 'client.connect.users.retrieve',
    fullyQualifiedName: 'connect.users.retrieve',
    httpMethod: 'get',
    httpPath: '/connect/users/{id}',
  },
  {
    clientCallName: 'client.connect.users.update',
    fullyQualifiedName: 'connect.users.update',
    httpMethod: 'patch',
    httpPath: '/connect/users/{id}',
  },
  {
    clientCallName: 'client.connect.users.list',
    fullyQualifiedName: 'connect.users.list',
    httpMethod: 'get',
    httpPath: '/connect/users',
  },
  {
    clientCallName: 'client.connect.users.delete',
    fullyQualifiedName: 'connect.users.delete',
    httpMethod: 'delete',
    httpPath: '/connect/users/{id}',
  },
  {
    clientCallName: 'client.connect.users.listConnections',
    fullyQualifiedName: 'connect.users.listConnections',
    httpMethod: 'get',
    httpPath: '/connect/users/{id}/connections',
  },
  {
    clientCallName: 'client.tasks.retrieve',
    fullyQualifiedName: 'tasks.retrieve',
    httpMethod: 'get',
    httpPath: '/tasks/{task_id}',
  },
  {
    clientCallName: 'client.tasks.list',
    fullyQualifiedName: 'tasks.list',
    httpMethod: 'get',
    httpPath: '/tasks',
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
    clientCallName: 'client.tasks.run',
    fullyQualifiedName: 'tasks.run',
    httpMethod: 'post',
    httpPath: '/tasks',
  },
  {
    clientCallName: 'client.tasks.runStreamed',
    fullyQualifiedName: 'tasks.runStreamed',
    httpMethod: 'post',
    httpPath: '/tasks/stream',
  },
  {
    clientCallName: 'client.tasks.sendMessage',
    fullyQualifiedName: 'tasks.sendMessage',
    httpMethod: 'post',
    httpPath: '/tasks/{task_id}/message',
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
    clientCallName: 'client.workflows.triggers.create',
    fullyQualifiedName: 'workflows.triggers.create',
    httpMethod: 'post',
    httpPath: '/triggers',
  },
  {
    clientCallName: 'client.workflows.triggers.retrieve',
    fullyQualifiedName: 'workflows.triggers.retrieve',
    httpMethod: 'get',
    httpPath: '/triggers/{triggerId}',
  },
  {
    clientCallName: 'client.workflows.triggers.update',
    fullyQualifiedName: 'workflows.triggers.update',
    httpMethod: 'patch',
    httpPath: '/triggers/{triggerId}',
  },
  {
    clientCallName: 'client.workflows.triggers.list',
    fullyQualifiedName: 'workflows.triggers.list',
    httpMethod: 'get',
    httpPath: '/triggers',
  },
  {
    clientCallName: 'client.workflows.triggers.delete',
    fullyQualifiedName: 'workflows.triggers.delete',
    httpMethod: 'delete',
    httpPath: '/triggers/{triggerId}',
  },
  {
    clientCallName: 'client.workflows.triggers.fire',
    fullyQualifiedName: 'workflows.triggers.fire',
    httpMethod: 'post',
    httpPath: '/triggers/{triggerId}/fire',
  },
  {
    clientCallName: 'client.workflows.actionCatalog.retrieve',
    fullyQualifiedName: 'workflows.actionCatalog.retrieve',
    httpMethod: 'get',
    httpPath: '/action-catalog/{catalogEntryId}',
  },
  {
    clientCallName: 'client.workflows.actionCatalog.list',
    fullyQualifiedName: 'workflows.actionCatalog.list',
    httpMethod: 'get',
    httpPath: '/action-catalog',
  },
  {
    clientCallName: 'client.workflows.actions.create',
    fullyQualifiedName: 'workflows.actions.create',
    httpMethod: 'post',
    httpPath: '/actions',
  },
  {
    clientCallName: 'client.workflows.actions.retrieve',
    fullyQualifiedName: 'workflows.actions.retrieve',
    httpMethod: 'get',
    httpPath: '/actions/{actionId}',
  },
  {
    clientCallName: 'client.workflows.actions.update',
    fullyQualifiedName: 'workflows.actions.update',
    httpMethod: 'patch',
    httpPath: '/actions/{actionId}',
  },
  {
    clientCallName: 'client.workflows.actions.list',
    fullyQualifiedName: 'workflows.actions.list',
    httpMethod: 'get',
    httpPath: '/actions',
  },
  {
    clientCallName: 'client.workflows.actions.delete',
    fullyQualifiedName: 'workflows.actions.delete',
    httpMethod: 'delete',
    httpPath: '/actions/{actionId}',
  },
  {
    clientCallName: 'client.workflows.actions.services.list',
    fullyQualifiedName: 'workflows.actions.services.list',
    httpMethod: 'get',
    httpPath: '/actions/services',
  },
  {
    clientCallName: 'client.workflows.actions.services.listMethods',
    fullyQualifiedName: 'workflows.actions.services.listMethods',
    httpMethod: 'get',
    httpPath: '/actions/services/{service}/methods',
  },
  {
    clientCallName: 'client.workflows.flows.create',
    fullyQualifiedName: 'workflows.flows.create',
    httpMethod: 'post',
    httpPath: '/flows',
  },
  {
    clientCallName: 'client.workflows.flows.retrieve',
    fullyQualifiedName: 'workflows.flows.retrieve',
    httpMethod: 'get',
    httpPath: '/flows/{flowId}',
  },
  {
    clientCallName: 'client.workflows.flows.update',
    fullyQualifiedName: 'workflows.flows.update',
    httpMethod: 'patch',
    httpPath: '/flows/{flowId}',
  },
  {
    clientCallName: 'client.workflows.flows.list',
    fullyQualifiedName: 'workflows.flows.list',
    httpMethod: 'get',
    httpPath: '/flows',
  },
  {
    clientCallName: 'client.workflows.flows.delete',
    fullyQualifiedName: 'workflows.flows.delete',
    httpMethod: 'delete',
    httpPath: '/flows/{flowId}',
  },
  {
    clientCallName: 'client.workflows.flows.clone',
    fullyQualifiedName: 'workflows.flows.clone',
    httpMethod: 'post',
    httpPath: '/flows/{flowId}/clone',
  },
  {
    clientCallName: 'client.workflows.flows.unblock',
    fullyQualifiedName: 'workflows.flows.unblock',
    httpMethod: 'post',
    httpPath: '/flows/{flowId}/unblock',
  },
  {
    clientCallName: 'client.workflows.flows.actions.list',
    fullyQualifiedName: 'workflows.flows.actions.list',
    httpMethod: 'get',
    httpPath: '/flows/{flowId}/actions',
  },
  {
    clientCallName: 'client.workflows.flows.actions.add',
    fullyQualifiedName: 'workflows.flows.actions.add',
    httpMethod: 'post',
    httpPath: '/flows/{flowId}/actions',
  },
  {
    clientCallName: 'client.workflows.flows.actions.remove',
    fullyQualifiedName: 'workflows.flows.actions.remove',
    httpMethod: 'delete',
    httpPath: '/flows/{flowId}/actions/{flowActionId}',
  },
  {
    clientCallName: 'client.workflows.flows.actions.replace',
    fullyQualifiedName: 'workflows.flows.actions.replace',
    httpMethod: 'put',
    httpPath: '/flows/{flowId}/actions',
  },
  {
    clientCallName: 'client.workflows.events.dryRun',
    fullyQualifiedName: 'workflows.events.dryRun',
    httpMethod: 'post',
    httpPath: '/events/dry-run',
  },
  {
    clientCallName: 'client.workflows.events.ingest',
    fullyQualifiedName: 'workflows.events.ingest',
    httpMethod: 'post',
    httpPath: '/events/ingest',
  },
  {
    clientCallName: 'client.workflows.executions.retrieve',
    fullyQualifiedName: 'workflows.executions.retrieve',
    httpMethod: 'get',
    httpPath: '/executions/{executionId}',
  },
  {
    clientCallName: 'client.workflows.executions.list',
    fullyQualifiedName: 'workflows.executions.list',
    httpMethod: 'get',
    httpPath: '/executions',
  },
  {
    clientCallName: 'client.workflows.executions.getMetrics',
    fullyQualifiedName: 'workflows.executions.getMetrics',
    httpMethod: 'get',
    httpPath: '/executions/metrics',
  },
  {
    clientCallName: 'client.workflows.timezones.list',
    fullyQualifiedName: 'workflows.timezones.list',
    httpMethod: 'get',
    httpPath: '/timezones',
  },
  {
    clientCallName: 'client.webhooks.create',
    fullyQualifiedName: 'webhooks.create',
    httpMethod: 'post',
    httpPath: '/webhooks',
  },
  {
    clientCallName: 'client.webhooks.retrieve',
    fullyQualifiedName: 'webhooks.retrieve',
    httpMethod: 'get',
    httpPath: '/webhooks/{id}',
  },
  {
    clientCallName: 'client.webhooks.update',
    fullyQualifiedName: 'webhooks.update',
    httpMethod: 'patch',
    httpPath: '/webhooks/{id}',
  },
  {
    clientCallName: 'client.webhooks.list',
    fullyQualifiedName: 'webhooks.list',
    httpMethod: 'get',
    httpPath: '/webhooks',
  },
  {
    clientCallName: 'client.webhooks.delete',
    fullyQualifiedName: 'webhooks.delete',
    httpMethod: 'delete',
    httpPath: '/webhooks/{id}',
  },
  {
    clientCallName: 'client.webhooks.eventTypes',
    fullyQualifiedName: 'webhooks.eventTypes',
    httpMethod: 'get',
    httpPath: '/event-types',
  },
  {
    clientCallName: 'client.webhooks.rotateSecret',
    fullyQualifiedName: 'webhooks.rotateSecret',
    httpMethod: 'post',
    httpPath: '/webhooks/{id}/rotate-secret',
  },
  {
    clientCallName: 'client.webhooks.testDelivery',
    fullyQualifiedName: 'webhooks.testDelivery',
    httpMethod: 'post',
    httpPath: '/webhooks/{id}/test',
  },
  {
    clientCallName: 'client.webhooks.deliveries.list',
    fullyQualifiedName: 'webhooks.deliveries.list',
    httpMethod: 'get',
    httpPath: '/webhooks/deliveries',
  },
  {
    clientCallName: 'client.webhooks.deliveries.listForWebhook',
    fullyQualifiedName: 'webhooks.deliveries.listForWebhook',
    httpMethod: 'get',
    httpPath: '/webhooks/{id}/deliveries',
  },
  {
    clientCallName: 'client.webhooks.deliveries.retrieveAttempts',
    fullyQualifiedName: 'webhooks.deliveries.retrieveAttempts',
    httpMethod: 'get',
    httpPath: '/webhooks/{id}/deliveries/{deliveryId}',
  },
  {
    clientCallName: 'client.webhooks.deliveries.stats',
    fullyQualifiedName: 'webhooks.deliveries.stats',
    httpMethod: 'get',
    httpPath: '/webhooks/deliveries/stats',
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
