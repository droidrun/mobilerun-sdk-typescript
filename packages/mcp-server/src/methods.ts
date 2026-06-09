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
    clientCallName: 'client.agents.chat.deliverPermission',
    fullyQualifiedName: 'agents.chat.deliverPermission',
    httpMethod: 'post',
    httpPath: '/agents/chat/permission',
  },
  {
    clientCallName: 'client.agents.chat.getChatState',
    fullyQualifiedName: 'agents.chat.getChatState',
    httpMethod: 'get',
    httpPath: '/agents/chat/state',
  },
  {
    clientCallName: 'client.agents.chat.listSlashCommands',
    fullyQualifiedName: 'agents.chat.listSlashCommands',
    httpMethod: 'get',
    httpPath: '/agents/chat/slash-commands',
  },
  {
    clientCallName: 'client.agents.chat.rehydrateChat',
    fullyQualifiedName: 'agents.chat.rehydrateChat',
    httpMethod: 'get',
    httpPath: '/agents/chat/messages',
  },
  {
    clientCallName: 'client.agents.chat.abort.forceClear',
    fullyQualifiedName: 'agents.chat.abort.forceClear',
    httpMethod: 'post',
    httpPath: '/agents/chat/abort/force',
  },
  {
    clientCallName: 'client.agents.chat.abort.perform',
    fullyQualifiedName: 'agents.chat.abort.perform',
    httpMethod: 'post',
    httpPath: '/agents/chat/abort',
  },
  {
    clientCallName: 'client.agents.chat.question.deliverAnswer',
    fullyQualifiedName: 'agents.chat.question.deliverAnswer',
    httpMethod: 'post',
    httpPath: '/agents/chat/question',
  },
  {
    clientCallName: 'client.agents.chat.question.dismiss',
    fullyQualifiedName: 'agents.chat.question.dismiss',
    httpMethod: 'post',
    httpPath: '/agents/chat/question/reject',
  },
  {
    clientCallName: 'client.agents.files.listFiles',
    fullyQualifiedName: 'agents.files.listFiles',
    httpMethod: 'get',
    httpPath: '/agents/files',
  },
  {
    clientCallName: 'client.agents.files.mintUploadURL',
    fullyQualifiedName: 'agents.files.mintUploadURL',
    httpMethod: 'post',
    httpPath: '/agents/files/upload-url',
  },
  {
    clientCallName: 'client.agents.files.fileID.cancelPendingUpload',
    fullyQualifiedName: 'agents.files.fileID.cancelPendingUpload',
    httpMethod: 'delete',
    httpPath: '/agents/files/:fileId/pending',
  },
  {
    clientCallName: 'client.agents.files.fileID.confirmUpload',
    fullyQualifiedName: 'agents.files.fileID.confirmUpload',
    httpMethod: 'post',
    httpPath: '/agents/files/:fileId/confirm',
  },
  {
    clientCallName: 'client.agents.files.fileID.deleteFile',
    fullyQualifiedName: 'agents.files.fileID.deleteFile',
    httpMethod: 'delete',
    httpPath: '/agents/files/:fileId',
  },
  {
    clientCallName: 'client.agents.files.fileID.downloadFile',
    fullyQualifiedName: 'agents.files.fileID.downloadFile',
    httpMethod: 'get',
    httpPath: '/agents/files/:fileId/download',
  },
  {
    clientCallName: 'client.agents.files.fileID.updateMetadata',
    fullyQualifiedName: 'agents.files.fileID.updateMetadata',
    httpMethod: 'patch',
    httpPath: '/agents/files/:fileId',
  },
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
    clientCallName: 'client.carriers.create',
    fullyQualifiedName: 'carriers.create',
    httpMethod: 'post',
    httpPath: '/carriers',
  },
  {
    clientCallName: 'client.carriers.retrieve',
    fullyQualifiedName: 'carriers.retrieve',
    httpMethod: 'get',
    httpPath: '/carriers/{carrierId}',
  },
  {
    clientCallName: 'client.carriers.update',
    fullyQualifiedName: 'carriers.update',
    httpMethod: 'patch',
    httpPath: '/carriers/{carrierId}',
  },
  {
    clientCallName: 'client.carriers.list',
    fullyQualifiedName: 'carriers.list',
    httpMethod: 'get',
    httpPath: '/carriers',
  },
  {
    clientCallName: 'client.carriers.delete',
    fullyQualifiedName: 'carriers.delete',
    httpMethod: 'delete',
    httpPath: '/carriers/{carrierId}',
  },
  {
    clientCallName: 'client.carriers.lookup',
    fullyQualifiedName: 'carriers.lookup',
    httpMethod: 'get',
    httpPath: '/carriers/lookup',
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
    clientCallName: 'client.devices.fingerprint',
    fullyQualifiedName: 'devices.fingerprint',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/fingerprint',
  },
  {
    clientCallName: 'client.devices.reboot',
    fullyQualifiedName: 'devices.reboot',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/reboot',
  },
  {
    clientCallName: 'client.devices.reset',
    fullyQualifiedName: 'devices.reset',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/reset',
  },
  {
    clientCallName: 'client.devices.setName',
    fullyQualifiedName: 'devices.setName',
    httpMethod: 'put',
    httpPath: '/devices/{deviceId}/name',
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
    clientCallName: 'client.devices.actions.overlayVisible',
    fullyQualifiedName: 'devices.actions.overlayVisible',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/overlay',
  },
  {
    clientCallName: 'client.devices.actions.setOverlayVisible',
    fullyQualifiedName: 'devices.actions.setOverlayVisible',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/overlay',
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
    clientCallName: 'client.devices.apps.stop',
    fullyQualifiedName: 'devices.apps.stop',
    httpMethod: 'patch',
    httpPath: '/devices/{deviceId}/apps/{packageName}',
  },
  {
    clientCallName: 'client.devices.esim.list',
    fullyQualifiedName: 'devices.esim.list',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/esim',
  },
  {
    clientCallName: 'client.devices.esim.activate',
    fullyQualifiedName: 'devices.esim.activate',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/esim',
  },
  {
    clientCallName: 'client.devices.esim.enable',
    fullyQualifiedName: 'devices.esim.enable',
    httpMethod: 'put',
    httpPath: '/devices/{deviceId}/esim',
  },
  {
    clientCallName: 'client.devices.esim.remove',
    fullyQualifiedName: 'devices.esim.remove',
    httpMethod: 'delete',
    httpPath: '/devices/{deviceId}/esim',
  },
  {
    clientCallName: 'client.devices.esim.setRoaming',
    fullyQualifiedName: 'devices.esim.setRoaming',
    httpMethod: 'put',
    httpPath: '/devices/{deviceId}/esim/roaming',
  },
  {
    clientCallName: 'client.devices.esim.status',
    fullyQualifiedName: 'devices.esim.status',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/esim/status',
  },
  {
    clientCallName: 'client.devices.esim.apn.create',
    fullyQualifiedName: 'devices.esim.apn.create',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/esim/apn',
  },
  {
    clientCallName: 'client.devices.esim.apn.list',
    fullyQualifiedName: 'devices.esim.apn.list',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/esim/apn',
  },
  {
    clientCallName: 'client.devices.esim.apn.select',
    fullyQualifiedName: 'devices.esim.apn.select',
    httpMethod: 'put',
    httpPath: '/devices/{deviceId}/esim/apn',
  },
  {
    clientCallName: 'client.devices.files.list',
    fullyQualifiedName: 'devices.files.list',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/files',
  },
  {
    clientCallName: 'client.devices.files.delete',
    fullyQualifiedName: 'devices.files.delete',
    httpMethod: 'delete',
    httpPath: '/devices/{deviceId}/files',
  },
  {
    clientCallName: 'client.devices.files.download',
    fullyQualifiedName: 'devices.files.download',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/files/download',
  },
  {
    clientCallName: 'client.devices.files.upload',
    fullyQualifiedName: 'devices.files.upload',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/files',
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
    clientCallName: 'client.devices.location.get',
    fullyQualifiedName: 'devices.location.get',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/location',
  },
  {
    clientCallName: 'client.devices.location.set',
    fullyQualifiedName: 'devices.location.set',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/location',
  },
  {
    clientCallName: 'client.devices.packages.list',
    fullyQualifiedName: 'devices.packages.list',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/packages',
  },
  {
    clientCallName: 'client.devices.profile.update',
    fullyQualifiedName: 'devices.profile.update',
    httpMethod: 'put',
    httpPath: '/devices/{deviceId}/profile',
  },
  {
    clientCallName: 'client.devices.proxy.connect',
    fullyQualifiedName: 'devices.proxy.connect',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/proxy',
  },
  {
    clientCallName: 'client.devices.proxy.disconnect',
    fullyQualifiedName: 'devices.proxy.disconnect',
    httpMethod: 'delete',
    httpPath: '/devices/{deviceId}/proxy',
  },
  {
    clientCallName: 'client.devices.proxy.status',
    fullyQualifiedName: 'devices.proxy.status',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/proxy',
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
    clientCallName: 'client.devices.tasks.list',
    fullyQualifiedName: 'devices.tasks.list',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/tasks',
  },
  {
    clientCallName: 'client.devices.timezone.get',
    fullyQualifiedName: 'devices.timezone.get',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/timezone',
  },
  {
    clientCallName: 'client.devices.timezone.set',
    fullyQualifiedName: 'devices.timezone.set',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/timezone',
  },
  {
    clientCallName: 'client.devices.language.get',
    fullyQualifiedName: 'devices.language.get',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/language',
  },
  {
    clientCallName: 'client.devices.language.set',
    fullyQualifiedName: 'devices.language.set',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/language',
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
    clientCallName: 'client.hooks.list',
    fullyQualifiedName: 'hooks.list',
    httpMethod: 'get',
    httpPath: '/hooks',
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
    clientCallName: 'client.hooks.test',
    fullyQualifiedName: 'hooks.test',
    httpMethod: 'post',
    httpPath: '/hooks/{hook_id}/test',
  },
  {
    clientCallName: 'client.hooks.unsubscribe',
    fullyQualifiedName: 'hooks.unsubscribe',
    httpMethod: 'post',
    httpPath: '/hooks/{hook_id}/unsubscribe',
  },
  {
    clientCallName: 'client.models.list',
    fullyQualifiedName: 'models.list',
    httpMethod: 'get',
    httpPath: '/models',
  },
  {
    clientCallName: 'client.profiles.create',
    fullyQualifiedName: 'profiles.create',
    httpMethod: 'post',
    httpPath: '/profiles',
  },
  {
    clientCallName: 'client.profiles.retrieve',
    fullyQualifiedName: 'profiles.retrieve',
    httpMethod: 'get',
    httpPath: '/profiles/{profileId}',
  },
  {
    clientCallName: 'client.profiles.update',
    fullyQualifiedName: 'profiles.update',
    httpMethod: 'put',
    httpPath: '/profiles/{profileId}',
  },
  {
    clientCallName: 'client.profiles.list',
    fullyQualifiedName: 'profiles.list',
    httpMethod: 'get',
    httpPath: '/profiles',
  },
  {
    clientCallName: 'client.profiles.delete',
    fullyQualifiedName: 'profiles.delete',
    httpMethod: 'delete',
    httpPath: '/profiles/{profileId}',
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
    clientCallName: 'client.proxies.lookup',
    fullyQualifiedName: 'proxies.lookup',
    httpMethod: 'post',
    httpPath: '/proxies/lookup',
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
    clientCallName: 'client.workflows.events.catalog.list',
    fullyQualifiedName: 'workflows.events.catalog.list',
    httpMethod: 'get',
    httpPath: '/events/catalog',
  },
  {
    clientCallName: 'client.workflows.events.catalog.register',
    fullyQualifiedName: 'workflows.events.catalog.register',
    httpMethod: 'post',
    httpPath: '/events/catalog/register',
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
    clientCallName: 'client.workflows.secrets.create',
    fullyQualifiedName: 'workflows.secrets.create',
    httpMethod: 'post',
    httpPath: '/secrets',
  },
  {
    clientCallName: 'client.workflows.secrets.list',
    fullyQualifiedName: 'workflows.secrets.list',
    httpMethod: 'get',
    httpPath: '/secrets',
  },
  {
    clientCallName: 'client.workflows.secrets.delete',
    fullyQualifiedName: 'workflows.secrets.delete',
    httpMethod: 'delete',
    httpPath: '/secrets/{secretId}',
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
