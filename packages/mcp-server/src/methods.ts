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
    clientCallName: 'client.apps.storageUsage',
    fullyQualifiedName: 'apps.storageUsage',
    httpMethod: 'get',
    httpPath: '/apps/storage-usage',
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
    clientCallName: 'client.credentials.packages.listAll',
    fullyQualifiedName: 'credentials.packages.listAll',
    httpMethod: 'get',
    httpPath: '/credentials/packages',
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
    clientCallName: 'client.devices.resume',
    fullyQualifiedName: 'devices.resume',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/resume',
  },
  {
    clientCallName: 'client.devices.retrieveCapabilities',
    fullyQualifiedName: 'devices.retrieveCapabilities',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/capabilities',
  },
  {
    clientCallName: 'client.devices.setName',
    fullyQualifiedName: 'devices.setName',
    httpMethod: 'put',
    httpPath: '/devices/{deviceId}/name',
  },
  {
    clientCallName: 'client.devices.stop',
    fullyQualifiedName: 'devices.stop',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/stop',
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
    clientCallName: 'client.devices.apps.grantPermission',
    fullyQualifiedName: 'devices.apps.grantPermission',
    httpMethod: 'put',
    httpPath: '/devices/{deviceId}/apps/{packageName}/permissions/{permission}',
  },
  {
    clientCallName: 'client.devices.apps.install',
    fullyQualifiedName: 'devices.apps.install',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/apps',
  },
  {
    clientCallName: 'client.devices.apps.listInstalls',
    fullyQualifiedName: 'devices.apps.listInstalls',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/apps/installs',
  },
  {
    clientCallName: 'client.devices.apps.revokePermission',
    fullyQualifiedName: 'devices.apps.revokePermission',
    httpMethod: 'delete',
    httpPath: '/devices/{deviceId}/apps/{packageName}/permissions/{permission}',
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
    clientCallName: 'client.devices.esim.apn.set',
    fullyQualifiedName: 'devices.esim.apn.set',
    httpMethod: 'post',
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
    clientCallName: 'client.devices.location.reset',
    fullyQualifiedName: 'devices.location.reset',
    httpMethod: 'delete',
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
    clientCallName: 'client.devices.clipboard.get',
    fullyQualifiedName: 'devices.clipboard.get',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/clipboard',
  },
  {
    clientCallName: 'client.devices.clipboard.set',
    fullyQualifiedName: 'devices.clipboard.set',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/clipboard',
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
    clientCallName: 'client.devices.deepLink.executeDeepLink',
    fullyQualifiedName: 'devices.deepLink.executeDeepLink',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/apps/open-deep-link',
  },
  {
    clientCallName: 'client.devices.browser.executeScript',
    fullyQualifiedName: 'devices.browser.executeScript',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/browser/execute-script',
  },
  {
    clientCallName: 'client.devices.kiosk.disable',
    fullyQualifiedName: 'devices.kiosk.disable',
    httpMethod: 'delete',
    httpPath: '/devices/{deviceId}/kiosk',
  },
  {
    clientCallName: 'client.devices.kiosk.enable',
    fullyQualifiedName: 'devices.kiosk.enable',
    httpMethod: 'put',
    httpPath: '/devices/{deviceId}/kiosk',
  },
  {
    clientCallName: 'client.devices.mediaSessions.create',
    fullyQualifiedName: 'devices.mediaSessions.create',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/media-sessions',
  },
  {
    clientCallName: 'client.devices.mediaSessions.delete',
    fullyQualifiedName: 'devices.mediaSessions.delete',
    httpMethod: 'delete',
    httpPath: '/devices/{deviceId}/media-sessions/{sessionId}',
  },
  {
    clientCallName: 'client.devices.mediaSessions.activate',
    fullyQualifiedName: 'devices.mediaSessions.activate',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/media-sessions/{sessionId}/activate',
  },
  {
    clientCallName: 'client.devices.mediaSessions.retrieveCurrent',
    fullyQualifiedName: 'devices.mediaSessions.retrieveCurrent',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/media-sessions/current',
  },
  {
    clientCallName: 'client.devices.recordings.list',
    fullyQualifiedName: 'devices.recordings.list',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/recordings',
  },
  {
    clientCallName: 'client.devices.recordings.delete',
    fullyQualifiedName: 'devices.recordings.delete',
    httpMethod: 'delete',
    httpPath: '/devices/{deviceId}/recordings/{recordingId}',
  },
  {
    clientCallName: 'client.devices.recordings.start',
    fullyQualifiedName: 'devices.recordings.start',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/recordings',
  },
  {
    clientCallName: 'client.devices.recordings.status',
    fullyQualifiedName: 'devices.recordings.status',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/recordings/{recordingId}',
  },
  {
    clientCallName: 'client.devices.recordings.stop',
    fullyQualifiedName: 'devices.recordings.stop',
    httpMethod: 'post',
    httpPath: '/devices/{deviceId}/recordings/{recordingId}',
  },
  {
    clientCallName: 'client.devices.recordings.trajectory',
    fullyQualifiedName: 'devices.recordings.trajectory',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/recordings/{recordingId}/trajectory',
  },
  {
    clientCallName: 'client.devices.recordings.video',
    fullyQualifiedName: 'devices.recordings.video',
    httpMethod: 'get',
    httpPath: '/devices/{deviceId}/recordings/{recordingId}/video',
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
    clientCallName: 'client.workflows.flows.dryRun',
    fullyQualifiedName: 'workflows.flows.dryRun',
    httpMethod: 'post',
    httpPath: '/flows/{flowId}/dry-run',
  },
  {
    clientCallName: 'client.workflows.flows.listRepairs',
    fullyQualifiedName: 'workflows.flows.listRepairs',
    httpMethod: 'get',
    httpPath: '/flows/{flowId}/repairs',
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
    clientCallName: 'client.workflows.executions.abort',
    fullyQualifiedName: 'workflows.executions.abort',
    httpMethod: 'post',
    httpPath: '/executions/{executionId}/abort',
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
  {
    clientCallName: 'client.mailboxes.create',
    fullyQualifiedName: 'mailboxes.create',
    httpMethod: 'post',
    httpPath: '/mailboxes',
  },
  {
    clientCallName: 'client.mailboxes.retrieve',
    fullyQualifiedName: 'mailboxes.retrieve',
    httpMethod: 'get',
    httpPath: '/mailboxes/{mailboxId}',
  },
  {
    clientCallName: 'client.mailboxes.update',
    fullyQualifiedName: 'mailboxes.update',
    httpMethod: 'patch',
    httpPath: '/mailboxes/{mailboxId}',
  },
  {
    clientCallName: 'client.mailboxes.list',
    fullyQualifiedName: 'mailboxes.list',
    httpMethod: 'get',
    httpPath: '/mailboxes',
  },
  {
    clientCallName: 'client.mailboxes.delete',
    fullyQualifiedName: 'mailboxes.delete',
    httpMethod: 'delete',
    httpPath: '/mailboxes/{mailboxId}',
  },
  {
    clientCallName: 'client.mailboxes.capacity',
    fullyQualifiedName: 'mailboxes.capacity',
    httpMethod: 'get',
    httpPath: '/mailboxes/capacity',
  },
  {
    clientCallName: 'client.mailboxes.otp',
    fullyQualifiedName: 'mailboxes.otp',
    httpMethod: 'get',
    httpPath: '/mailboxes/{mailboxId}/otp',
  },
  {
    clientCallName: 'client.mailboxes.restart',
    fullyQualifiedName: 'mailboxes.restart',
    httpMethod: 'post',
    httpPath: '/mailboxes/{mailboxId}/restart',
  },
  {
    clientCallName: 'client.mailboxes.uncancel',
    fullyQualifiedName: 'mailboxes.uncancel',
    httpMethod: 'post',
    httpPath: '/mailboxes/{mailboxId}/uncancel',
  },
  {
    clientCallName: 'client.mailboxes.messages.retrieve',
    fullyQualifiedName: 'mailboxes.messages.retrieve',
    httpMethod: 'get',
    httpPath: '/mailboxes/{mailboxId}/messages/{messageId}',
  },
  {
    clientCallName: 'client.mailboxes.messages.list',
    fullyQualifiedName: 'mailboxes.messages.list',
    httpMethod: 'get',
    httpPath: '/mailboxes/{mailboxId}/messages',
  },
  {
    clientCallName: 'client.files.update',
    fullyQualifiedName: 'files.update',
    httpMethod: 'patch',
    httpPath: '/agents/files/{fileId}',
  },
  {
    clientCallName: 'client.files.list',
    fullyQualifiedName: 'files.list',
    httpMethod: 'get',
    httpPath: '/agents/files',
  },
  {
    clientCallName: 'client.files.delete',
    fullyQualifiedName: 'files.delete',
    httpMethod: 'delete',
    httpPath: '/agents/files/{fileId}',
  },
  {
    clientCallName: 'client.files.cancelPending',
    fullyQualifiedName: 'files.cancelPending',
    httpMethod: 'delete',
    httpPath: '/agents/files/{fileId}/pending',
  },
  {
    clientCallName: 'client.files.confirm',
    fullyQualifiedName: 'files.confirm',
    httpMethod: 'post',
    httpPath: '/agents/files/{fileId}/confirm',
  },
  {
    clientCallName: 'client.files.download',
    fullyQualifiedName: 'files.download',
    httpMethod: 'get',
    httpPath: '/agents/files/{fileId}/download',
  },
  {
    clientCallName: 'client.files.uploadURL',
    fullyQualifiedName: 'files.uploadURL',
    httpMethod: 'post',
    httpPath: '/agents/files/upload-url',
  },
  {
    clientCallName: 'client.assistant.conversations.create',
    fullyQualifiedName: 'assistant.conversations.create',
    httpMethod: 'post',
    httpPath: '/assistant/chat/sessions',
  },
  {
    clientCallName: 'client.assistant.conversations.update',
    fullyQualifiedName: 'assistant.conversations.update',
    httpMethod: 'patch',
    httpPath: '/assistant/chat/sessions/{id}',
  },
  {
    clientCallName: 'client.assistant.conversations.list',
    fullyQualifiedName: 'assistant.conversations.list',
    httpMethod: 'get',
    httpPath: '/assistant/chat/sessions',
  },
  {
    clientCallName: 'client.assistant.conversations.abort',
    fullyQualifiedName: 'assistant.conversations.abort',
    httpMethod: 'post',
    httpPath: '/assistant/chat/abort',
  },
  {
    clientCallName: 'client.assistant.conversations.answerPermission',
    fullyQualifiedName: 'assistant.conversations.answerPermission',
    httpMethod: 'post',
    httpPath: '/assistant/chat/permission',
  },
  {
    clientCallName: 'client.assistant.conversations.answerQuestion',
    fullyQualifiedName: 'assistant.conversations.answerQuestion',
    httpMethod: 'post',
    httpPath: '/assistant/chat/question',
  },
  {
    clientCallName: 'client.assistant.conversations.history',
    fullyQualifiedName: 'assistant.conversations.history',
    httpMethod: 'get',
    httpPath: '/assistant/chat/messages',
  },
  {
    clientCallName: 'client.assistant.conversations.rejectQuestion',
    fullyQualifiedName: 'assistant.conversations.rejectQuestion',
    httpMethod: 'post',
    httpPath: '/assistant/chat/question/reject',
  },
  {
    clientCallName: 'client.assistant.conversations.send',
    fullyQualifiedName: 'assistant.conversations.send',
    httpMethod: 'post',
    httpPath: '/assistant/chat/message',
  },
  {
    clientCallName: 'client.assistant.conversations.stream',
    fullyQualifiedName: 'assistant.conversations.stream',
    httpMethod: 'get',
    httpPath: '/assistant/chat/stream',
  },
  {
    clientCallName: 'client.appEvents.retrieve',
    fullyQualifiedName: 'appEvents.retrieve',
    httpMethod: 'get',
    httpPath: '/app-events/{id}',
  },
  {
    clientCallName: 'client.appEvents.list',
    fullyQualifiedName: 'appEvents.list',
    httpMethod: 'get',
    httpPath: '/app-events',
  },
  {
    clientCallName: 'client.appEvents.catalog.retrieve',
    fullyQualifiedName: 'appEvents.catalog.retrieve',
    httpMethod: 'get',
    httpPath: '/app-events/catalog/{appEventType}',
  },
  {
    clientCallName: 'client.appEvents.catalog.list',
    fullyQualifiedName: 'appEvents.catalog.list',
    httpMethod: 'get',
    httpPath: '/app-events/catalog',
  },
  {
    clientCallName: 'client.notifications.catalog',
    fullyQualifiedName: 'notifications.catalog',
    httpMethod: 'get',
    httpPath: '/notifications/catalog',
  },
  {
    clientCallName: 'client.notifications.getPreferences',
    fullyQualifiedName: 'notifications.getPreferences',
    httpMethod: 'get',
    httpPath: '/notifications/preferences',
  },
  {
    clientCallName: 'client.notifications.updatePreferences',
    fullyQualifiedName: 'notifications.updatePreferences',
    httpMethod: 'patch',
    httpPath: '/notifications/preferences',
  },
  {
    clientCallName: 'client.esims.create',
    fullyQualifiedName: 'esims.create',
    httpMethod: 'post',
    httpPath: '/numbers/esims',
  },
  {
    clientCallName: 'client.esims.retrieve',
    fullyQualifiedName: 'esims.retrieve',
    httpMethod: 'get',
    httpPath: '/numbers/esims/{id}',
  },
  {
    clientCallName: 'client.esims.update',
    fullyQualifiedName: 'esims.update',
    httpMethod: 'patch',
    httpPath: '/numbers/esims/{id}',
  },
  {
    clientCallName: 'client.esims.list',
    fullyQualifiedName: 'esims.list',
    httpMethod: 'get',
    httpPath: '/numbers/esims',
  },
  {
    clientCallName: 'client.esims.delete',
    fullyQualifiedName: 'esims.delete',
    httpMethod: 'delete',
    httpPath: '/numbers/esims/{id}',
  },
  {
    clientCallName: 'client.esims.capacity',
    fullyQualifiedName: 'esims.capacity',
    httpMethod: 'get',
    httpPath: '/numbers/esims/capacity',
  },
  {
    clientCallName: 'client.esims.confirmPayment',
    fullyQualifiedName: 'esims.confirmPayment',
    httpMethod: 'post',
    httpPath: '/numbers/esims/{id}/confirm-payment',
  },
  {
    clientCallName: 'client.esims.import',
    fullyQualifiedName: 'esims.import',
    httpMethod: 'post',
    httpPath: '/numbers/esims/import',
  },
  {
    clientCallName: 'client.esims.install',
    fullyQualifiedName: 'esims.install',
    httpMethod: 'post',
    httpPath: '/numbers/esims/{id}/install',
  },
  {
    clientCallName: 'client.esims.installStatus',
    fullyQualifiedName: 'esims.installStatus',
    httpMethod: 'get',
    httpPath: '/numbers/esims/{id}/install-status',
  },
  {
    clientCallName: 'client.esims.selector',
    fullyQualifiedName: 'esims.selector',
    httpMethod: 'get',
    httpPath: '/numbers/esims/selector',
  },
  {
    clientCallName: 'client.esims.messages.list',
    fullyQualifiedName: 'esims.messages.list',
    httpMethod: 'get',
    httpPath: '/numbers/esims/{id}/messages',
  },
  {
    clientCallName: 'client.esims.messages.send',
    fullyQualifiedName: 'esims.messages.send',
    httpMethod: 'post',
    httpPath: '/numbers/esims/{id}/messages',
  },
  {
    clientCallName: 'client.messages.list',
    fullyQualifiedName: 'messages.list',
    httpMethod: 'get',
    httpPath: '/numbers/messages',
  },
  {
    clientCallName: 'client.messages.conversations.list',
    fullyQualifiedName: 'messages.conversations.list',
    httpMethod: 'get',
    httpPath: '/numbers/messages/conversations',
  },
  {
    clientCallName: 'client.messages.conversations.markRead',
    fullyQualifiedName: 'messages.conversations.markRead',
    httpMethod: 'post',
    httpPath: '/numbers/messages/conversations/read',
  },
  {
    clientCallName: 'client.numbers.create',
    fullyQualifiedName: 'numbers.create',
    httpMethod: 'post',
    httpPath: '/numbers/phones',
  },
  {
    clientCallName: 'client.numbers.retrieve',
    fullyQualifiedName: 'numbers.retrieve',
    httpMethod: 'get',
    httpPath: '/numbers/phones/{id}',
  },
  {
    clientCallName: 'client.numbers.update',
    fullyQualifiedName: 'numbers.update',
    httpMethod: 'patch',
    httpPath: '/numbers/phones/{id}',
  },
  {
    clientCallName: 'client.numbers.list',
    fullyQualifiedName: 'numbers.list',
    httpMethod: 'get',
    httpPath: '/numbers/phones',
  },
  {
    clientCallName: 'client.numbers.delete',
    fullyQualifiedName: 'numbers.delete',
    httpMethod: 'delete',
    httpPath: '/numbers/phones/{id}',
  },
  {
    clientCallName: 'client.numbers.countries',
    fullyQualifiedName: 'numbers.countries',
    httpMethod: 'get',
    httpPath: '/numbers/phones/countries',
  },
  {
    clientCallName: 'client.numbers.purposes',
    fullyQualifiedName: 'numbers.purposes',
    httpMethod: 'get',
    httpPath: '/numbers/phones/purposes',
  },
  {
    clientCallName: 'client.numbers.messages.list',
    fullyQualifiedName: 'numbers.messages.list',
    httpMethod: 'get',
    httpPath: '/numbers/phones/{id}/messages',
  },
  {
    clientCallName: 'client.store.categories',
    fullyQualifiedName: 'store.categories',
    httpMethod: 'get',
    httpPath: '/store/categories',
  },
  {
    clientCallName: 'client.store.apps.retrieve',
    fullyQualifiedName: 'store.apps.retrieve',
    httpMethod: 'get',
    httpPath: '/store/apps/{appId}',
  },
  {
    clientCallName: 'client.store.apps.list',
    fullyQualifiedName: 'store.apps.list',
    httpMethod: 'get',
    httpPath: '/store/apps',
  },
  {
    clientCallName: 'client.store.apps.addToWorkspace',
    fullyQualifiedName: 'store.apps.addToWorkspace',
    httpMethod: 'post',
    httpPath: '/store/apps/{appId}/add',
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
