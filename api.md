# Shared

Types:

- <code><a href="./src/resources/shared.ts">DeviceCarrier</a></code>
- <code><a href="./src/resources/shared.ts">DeviceIdentifiers</a></code>
- <code><a href="./src/resources/shared.ts">DeviceSpec</a></code>
- <code><a href="./src/resources/shared.ts">Location</a></code>
- <code><a href="./src/resources/shared.ts">Meta</a></code>
- <code><a href="./src/resources/shared.ts">Pagination</a></code>
- <code><a href="./src/resources/shared.ts">PaginationMeta</a></code>
- <code><a href="./src/resources/shared.ts">PermissionSet</a></code>
- <code><a href="./src/resources/shared.ts">Socks5ProxyConfig</a></code>

# Apps

Types:

- <code><a href="./src/resources/apps.ts">AppRetrieveResponse</a></code>
- <code><a href="./src/resources/apps.ts">AppListResponse</a></code>
- <code><a href="./src/resources/apps.ts">AppDeleteResponse</a></code>
- <code><a href="./src/resources/apps.ts">AppConfirmUploadResponse</a></code>
- <code><a href="./src/resources/apps.ts">AppCreateSignedUploadURLResponse</a></code>
- <code><a href="./src/resources/apps.ts">AppListVersionsResponse</a></code>
- <code><a href="./src/resources/apps.ts">AppMarkFailedResponse</a></code>
- <code><a href="./src/resources/apps.ts">AppStorageUsageResponse</a></code>

Methods:

- <code title="get /apps/{id}">client.apps.<a href="./src/resources/apps.ts">retrieve</a>(id) -> AppRetrieveResponse</code>
- <code title="get /apps">client.apps.<a href="./src/resources/apps.ts">list</a>({ ...params }) -> AppListResponse</code>
- <code title="delete /apps/{id}">client.apps.<a href="./src/resources/apps.ts">delete</a>(id) -> AppDeleteResponse</code>
- <code title="post /apps/{id}/confirm-upload">client.apps.<a href="./src/resources/apps.ts">confirmUpload</a>(id) -> AppConfirmUploadResponse</code>
- <code title="post /apps/create-signed-upload-url">client.apps.<a href="./src/resources/apps.ts">createSignedUploadURL</a>({ ...params }) -> AppCreateSignedUploadURLResponse</code>
- <code title="get /apps/{id}/versions">client.apps.<a href="./src/resources/apps.ts">listVersions</a>(id) -> AppListVersionsResponse</code>
- <code title="post /apps/{id}/mark-failed">client.apps.<a href="./src/resources/apps.ts">markFailed</a>(id) -> AppMarkFailedResponse</code>
- <code title="get /apps/storage-usage">client.apps.<a href="./src/resources/apps.ts">storageUsage</a>() -> AppStorageUsageResponse</code>

# Carriers

Types:

- <code><a href="./src/resources/carriers.ts">CarrierCreateResponse</a></code>
- <code><a href="./src/resources/carriers.ts">CarrierRetrieveResponse</a></code>
- <code><a href="./src/resources/carriers.ts">CarrierUpdateResponse</a></code>
- <code><a href="./src/resources/carriers.ts">CarrierListResponse</a></code>
- <code><a href="./src/resources/carriers.ts">CarrierDeleteResponse</a></code>
- <code><a href="./src/resources/carriers.ts">CarrierLookupResponse</a></code>

Methods:

- <code title="post /carriers">client.carriers.<a href="./src/resources/carriers.ts">create</a>({ ...params }) -> CarrierCreateResponse</code>
- <code title="get /carriers/{carrierId}">client.carriers.<a href="./src/resources/carriers.ts">retrieve</a>(carrierID) -> CarrierRetrieveResponse</code>
- <code title="patch /carriers/{carrierId}">client.carriers.<a href="./src/resources/carriers.ts">update</a>(carrierID, { ...params }) -> CarrierUpdateResponse</code>
- <code title="get /carriers">client.carriers.<a href="./src/resources/carriers.ts">list</a>({ ...params }) -> CarrierListResponse</code>
- <code title="delete /carriers/{carrierId}">client.carriers.<a href="./src/resources/carriers.ts">delete</a>(carrierID) -> CarrierDeleteResponse</code>
- <code title="get /carriers/lookup">client.carriers.<a href="./src/resources/carriers.ts">lookup</a>({ ...params }) -> CarrierLookupResponse</code>

# Credentials

Types:

- <code><a href="./src/resources/credentials/credentials.ts">CredentialListResponse</a></code>

Methods:

- <code title="get /credentials">client.credentials.<a href="./src/resources/credentials/credentials.ts">list</a>({ ...params }) -> CredentialListResponse</code>

## Packages

Types:

- <code><a href="./src/resources/credentials/packages/packages.ts">PackageCreateResponse</a></code>
- <code><a href="./src/resources/credentials/packages/packages.ts">PackageListResponse</a></code>
- <code><a href="./src/resources/credentials/packages/packages.ts">PackageListAllResponse</a></code>

Methods:

- <code title="post /credentials/packages">client.credentials.packages.<a href="./src/resources/credentials/packages/packages.ts">create</a>({ ...params }) -> PackageCreateResponse</code>
- <code title="get /credentials/packages/{packageName}">client.credentials.packages.<a href="./src/resources/credentials/packages/packages.ts">list</a>(packageName) -> PackageListResponse</code>
- <code title="get /credentials/packages">client.credentials.packages.<a href="./src/resources/credentials/packages/packages.ts">listAll</a>() -> PackageListAllResponse</code>

### Credentials

Types:

- <code><a href="./src/resources/credentials/packages/credentials/credentials.ts">CredentialCreateResponse</a></code>
- <code><a href="./src/resources/credentials/packages/credentials/credentials.ts">CredentialRetrieveResponse</a></code>
- <code><a href="./src/resources/credentials/packages/credentials/credentials.ts">CredentialDeleteResponse</a></code>

Methods:

- <code title="post /credentials/packages/{packageName}">client.credentials.packages.credentials.<a href="./src/resources/credentials/packages/credentials/credentials.ts">create</a>(packageName, { ...params }) -> CredentialCreateResponse</code>
- <code title="get /credentials/packages/{packageName}/credentials/{credentialName}">client.credentials.packages.credentials.<a href="./src/resources/credentials/packages/credentials/credentials.ts">retrieve</a>(credentialName, { ...params }) -> CredentialRetrieveResponse</code>
- <code title="delete /credentials/packages/{packageName}/credentials/{credentialName}">client.credentials.packages.credentials.<a href="./src/resources/credentials/packages/credentials/credentials.ts">delete</a>(credentialName, { ...params }) -> CredentialDeleteResponse</code>

#### Fields

Types:

- <code><a href="./src/resources/credentials/packages/credentials/fields.ts">FieldCreateResponse</a></code>
- <code><a href="./src/resources/credentials/packages/credentials/fields.ts">FieldUpdateResponse</a></code>
- <code><a href="./src/resources/credentials/packages/credentials/fields.ts">FieldDeleteResponse</a></code>

Methods:

- <code title="post /credentials/packages/{packageName}/credentials/{credentialName}/fields">client.credentials.packages.credentials.fields.<a href="./src/resources/credentials/packages/credentials/fields.ts">create</a>(credentialName, { ...params }) -> FieldCreateResponse</code>
- <code title="patch /credentials/packages/{packageName}/credentials/{credentialName}/fields/{fieldType}">client.credentials.packages.credentials.fields.<a href="./src/resources/credentials/packages/credentials/fields.ts">update</a>(fieldType, { ...params }) -> FieldUpdateResponse</code>
- <code title="delete /credentials/packages/{packageName}/credentials/{credentialName}/fields/{fieldType}">client.credentials.packages.credentials.fields.<a href="./src/resources/credentials/packages/credentials/fields.ts">delete</a>(fieldType, { ...params }) -> FieldDeleteResponse</code>

# Devices

Types:

- <code><a href="./src/resources/devices/devices.ts">DeviceCreateResponse</a></code>
- <code><a href="./src/resources/devices/devices.ts">DeviceRetrieveResponse</a></code>
- <code><a href="./src/resources/devices/devices.ts">DeviceListResponse</a></code>
- <code><a href="./src/resources/devices/devices.ts">DeviceCountResponse</a></code>
- <code><a href="./src/resources/devices/devices.ts">DeviceFingerprintResponse</a></code>
- <code><a href="./src/resources/devices/devices.ts">DeviceRetrieveCapabilitiesResponse</a></code>
- <code><a href="./src/resources/devices/devices.ts">DeviceSetNameResponse</a></code>
- <code><a href="./src/resources/devices/devices.ts">DeviceWaitReadyResponse</a></code>

Methods:

- <code title="post /devices">client.devices.<a href="./src/resources/devices/devices.ts">create</a>({ ...params }) -> DeviceCreateResponse</code>
- <code title="get /devices/{deviceId}">client.devices.<a href="./src/resources/devices/devices.ts">retrieve</a>(deviceID) -> DeviceRetrieveResponse</code>
- <code title="get /devices">client.devices.<a href="./src/resources/devices/devices.ts">list</a>({ ...params }) -> DeviceListResponse</code>
- <code title="get /devices/count">client.devices.<a href="./src/resources/devices/devices.ts">count</a>() -> DeviceCountResponse</code>
- <code title="get /devices/{deviceId}/fingerprint">client.devices.<a href="./src/resources/devices/devices.ts">fingerprint</a>(deviceID, { ...params }) -> DeviceFingerprintResponse</code>
- <code title="post /devices/{deviceId}/reboot">client.devices.<a href="./src/resources/devices/devices.ts">reboot</a>(deviceID) -> void</code>
- <code title="post /devices/{deviceId}/reset">client.devices.<a href="./src/resources/devices/devices.ts">reset</a>(deviceID) -> void</code>
- <code title="post /devices/{deviceId}/resume">client.devices.<a href="./src/resources/devices/devices.ts">resume</a>(deviceID) -> void</code>
- <code title="get /devices/{deviceId}/capabilities">client.devices.<a href="./src/resources/devices/devices.ts">retrieveCapabilities</a>(deviceID) -> DeviceRetrieveCapabilitiesResponse</code>
- <code title="put /devices/{deviceId}/name">client.devices.<a href="./src/resources/devices/devices.ts">setName</a>(deviceID, { ...params }) -> DeviceSetNameResponse</code>
- <code title="post /devices/{deviceId}/stop">client.devices.<a href="./src/resources/devices/devices.ts">stop</a>(deviceID) -> void</code>
- <code title="delete /devices/{deviceId}">client.devices.<a href="./src/resources/devices/devices.ts">terminate</a>(deviceID, { ...params }) -> void</code>
- <code title="get /devices/{deviceId}/wait">client.devices.<a href="./src/resources/devices/devices.ts">waitReady</a>(deviceID) -> DeviceWaitReadyResponse</code>

## Actions

Types:

- <code><a href="./src/resources/devices/actions.ts">ActionOverlayVisibleResponse</a></code>

Methods:

- <code title="post /devices/{deviceId}/global">client.devices.actions.<a href="./src/resources/devices/actions.ts">global</a>(deviceID, { ...params }) -> void</code>
- <code title="get /devices/{deviceId}/overlay">client.devices.actions.<a href="./src/resources/devices/actions.ts">overlayVisible</a>(deviceID, { ...params }) -> ActionOverlayVisibleResponse</code>
- <code title="post /devices/{deviceId}/overlay">client.devices.actions.<a href="./src/resources/devices/actions.ts">setOverlayVisible</a>(deviceID, { ...params }) -> void</code>
- <code title="post /devices/{deviceId}/swipe">client.devices.actions.<a href="./src/resources/devices/actions.ts">swipe</a>(deviceID, { ...params }) -> void</code>
- <code title="post /devices/{deviceId}/tap">client.devices.actions.<a href="./src/resources/devices/actions.ts">tap</a>(deviceID, { ...params }) -> void</code>

## Apps

Types:

- <code><a href="./src/resources/devices/apps.ts">AppListResponse</a></code>
- <code><a href="./src/resources/devices/apps.ts">AppListInstallsResponse</a></code>

Methods:

- <code title="get /devices/{deviceId}/apps">client.devices.apps.<a href="./src/resources/devices/apps.ts">list</a>(deviceID, { ...params }) -> AppListResponse | null</code>
- <code title="delete /devices/{deviceId}/apps/{packageName}">client.devices.apps.<a href="./src/resources/devices/apps.ts">delete</a>(packageName, { ...params }) -> void</code>
- <code title="put /devices/{deviceId}/apps/{packageName}/permissions/{permission}">client.devices.apps.<a href="./src/resources/devices/apps.ts">grantPermission</a>(permission, { ...params }) -> void</code>
- <code title="post /devices/{deviceId}/apps">client.devices.apps.<a href="./src/resources/devices/apps.ts">install</a>(deviceID, { ...params }) -> void</code>
- <code title="get /devices/{deviceId}/apps/installs">client.devices.apps.<a href="./src/resources/devices/apps.ts">listInstalls</a>(deviceID, { ...params }) -> AppListInstallsResponse</code>
- <code title="delete /devices/{deviceId}/apps/{packageName}/permissions/{permission}">client.devices.apps.<a href="./src/resources/devices/apps.ts">revokePermission</a>(permission, { ...params }) -> void</code>
- <code title="put /devices/{deviceId}/apps/{packageName}">client.devices.apps.<a href="./src/resources/devices/apps.ts">start</a>(packageName, { ...params }) -> void</code>
- <code title="patch /devices/{deviceId}/apps/{packageName}">client.devices.apps.<a href="./src/resources/devices/apps.ts">stop</a>(packageName, { ...params }) -> void</code>

## Esim

Types:

- <code><a href="./src/resources/devices/esim/esim.ts">EsimListResponse</a></code>
- <code><a href="./src/resources/devices/esim/esim.ts">EsimActivateResponse</a></code>
- <code><a href="./src/resources/devices/esim/esim.ts">EsimStatusResponse</a></code>

Methods:

- <code title="get /devices/{deviceId}/esim">client.devices.esim.<a href="./src/resources/devices/esim/esim.ts">list</a>(deviceID, { ...params }) -> EsimListResponse | null</code>
- <code title="post /devices/{deviceId}/esim">client.devices.esim.<a href="./src/resources/devices/esim/esim.ts">activate</a>(deviceID, { ...params }) -> EsimActivateResponse</code>
- <code title="put /devices/{deviceId}/esim">client.devices.esim.<a href="./src/resources/devices/esim/esim.ts">enable</a>(deviceID, { ...params }) -> void</code>
- <code title="delete /devices/{deviceId}/esim">client.devices.esim.<a href="./src/resources/devices/esim/esim.ts">remove</a>(deviceID, { ...params }) -> void</code>
- <code title="put /devices/{deviceId}/esim/roaming">client.devices.esim.<a href="./src/resources/devices/esim/esim.ts">setRoaming</a>(deviceID, { ...params }) -> void</code>
- <code title="get /devices/{deviceId}/esim/status">client.devices.esim.<a href="./src/resources/devices/esim/esim.ts">status</a>(deviceID, { ...params }) -> EsimStatusResponse | null</code>

### Apn

Types:

- <code><a href="./src/resources/devices/esim/apn.ts">ApnListResponse</a></code>

Methods:

- <code title="get /devices/{deviceId}/esim/apn">client.devices.esim.apn.<a href="./src/resources/devices/esim/apn.ts">list</a>(deviceID, { ...params }) -> ApnListResponse | null</code>
- <code title="put /devices/{deviceId}/esim/apn">client.devices.esim.apn.<a href="./src/resources/devices/esim/apn.ts">select</a>(deviceID, { ...params }) -> void</code>
- <code title="post /devices/{deviceId}/esim/apn">client.devices.esim.apn.<a href="./src/resources/devices/esim/apn.ts">set</a>(deviceID, { ...params }) -> void</code>

## Files

Types:

- <code><a href="./src/resources/devices/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/devices/files.ts">FileDownloadResponse</a></code>

Methods:

- <code title="get /devices/{deviceId}/files">client.devices.files.<a href="./src/resources/devices/files.ts">list</a>(deviceID, { ...params }) -> FileListResponse</code>
- <code title="delete /devices/{deviceId}/files">client.devices.files.<a href="./src/resources/devices/files.ts">delete</a>(deviceID, { ...params }) -> void</code>
- <code title="get /devices/{deviceId}/files/download">client.devices.files.<a href="./src/resources/devices/files.ts">download</a>(deviceID, { ...params }) -> string</code>
- <code title="post /devices/{deviceId}/files">client.devices.files.<a href="./src/resources/devices/files.ts">upload</a>(deviceID, { ...params }) -> void</code>

## Keyboard

Methods:

- <code title="delete /devices/{deviceId}/keyboard">client.devices.keyboard.<a href="./src/resources/devices/keyboard.ts">clear</a>(deviceID, { ...params }) -> void</code>
- <code title="put /devices/{deviceId}/keyboard">client.devices.keyboard.<a href="./src/resources/devices/keyboard.ts">key</a>(deviceID, { ...params }) -> void</code>
- <code title="post /devices/{deviceId}/keyboard">client.devices.keyboard.<a href="./src/resources/devices/keyboard.ts">write</a>(deviceID, { ...params }) -> void</code>

## Location

Methods:

- <code title="get /devices/{deviceId}/location">client.devices.location.<a href="./src/resources/devices/location.ts">get</a>(deviceID, { ...params }) -> Location</code>
- <code title="delete /devices/{deviceId}/location">client.devices.location.<a href="./src/resources/devices/location.ts">reset</a>(deviceID, { ...params }) -> void</code>
- <code title="post /devices/{deviceId}/location">client.devices.location.<a href="./src/resources/devices/location.ts">set</a>(deviceID, { ...params }) -> void</code>

## Packages

Types:

- <code><a href="./src/resources/devices/packages.ts">PackageListResponse</a></code>

Methods:

- <code title="get /devices/{deviceId}/packages">client.devices.packages.<a href="./src/resources/devices/packages.ts">list</a>(deviceID, { ...params }) -> PackageListResponse | null</code>

## Profile

Methods:

- <code title="put /devices/{deviceId}/profile">client.devices.profile.<a href="./src/resources/devices/profile.ts">update</a>(deviceID, { ...params }) -> void</code>

## Proxy

Types:

- <code><a href="./src/resources/devices/proxy.ts">ProxyStatusResponse</a></code>

Methods:

- <code title="post /devices/{deviceId}/proxy">client.devices.proxy.<a href="./src/resources/devices/proxy.ts">connect</a>(deviceID, { ...params }) -> void</code>
- <code title="delete /devices/{deviceId}/proxy">client.devices.proxy.<a href="./src/resources/devices/proxy.ts">disconnect</a>(deviceID, { ...params }) -> void</code>
- <code title="get /devices/{deviceId}/proxy">client.devices.proxy.<a href="./src/resources/devices/proxy.ts">status</a>(deviceID, { ...params }) -> ProxyStatusResponse</code>

## State

Types:

- <code><a href="./src/resources/devices/state.ts">A11YNode</a></code>
- <code><a href="./src/resources/devices/state.ts">StateScreenshotResponse</a></code>
- <code><a href="./src/resources/devices/state.ts">StateTimeResponse</a></code>
- <code><a href="./src/resources/devices/state.ts">StateUiResponse</a></code>

Methods:

- <code title="get /devices/{deviceId}/screenshot">client.devices.state.<a href="./src/resources/devices/state.ts">screenshot</a>(deviceID, { ...params }) -> string</code>
- <code title="get /devices/{deviceId}/time">client.devices.state.<a href="./src/resources/devices/state.ts">time</a>(deviceID, { ...params }) -> string</code>
- <code title="get /devices/{deviceId}/ui-state">client.devices.state.<a href="./src/resources/devices/state.ts">ui</a>(deviceID, { ...params }) -> StateUiResponse</code>

## Tasks

Types:

- <code><a href="./src/resources/devices/tasks.ts">TaskListResponse</a></code>

Methods:

- <code title="get /devices/{deviceId}/tasks">client.devices.tasks.<a href="./src/resources/devices/tasks.ts">list</a>(deviceID, { ...params }) -> TaskListResponse</code>

## Timezone

Types:

- <code><a href="./src/resources/devices/timezone.ts">TimezoneGetResponse</a></code>

Methods:

- <code title="get /devices/{deviceId}/timezone">client.devices.timezone.<a href="./src/resources/devices/timezone.ts">get</a>(deviceID, { ...params }) -> TimezoneGetResponse</code>
- <code title="post /devices/{deviceId}/timezone">client.devices.timezone.<a href="./src/resources/devices/timezone.ts">set</a>(deviceID, { ...params }) -> void</code>

## Language

Types:

- <code><a href="./src/resources/devices/language.ts">LanguageGetResponse</a></code>

Methods:

- <code title="get /devices/{deviceId}/language">client.devices.language.<a href="./src/resources/devices/language.ts">get</a>(deviceID, { ...params }) -> LanguageGetResponse</code>
- <code title="post /devices/{deviceId}/language">client.devices.language.<a href="./src/resources/devices/language.ts">set</a>(deviceID, { ...params }) -> void</code>

## DeepLink

Methods:

- <code title="post /devices/{deviceId}/apps/open-deep-link">client.devices.deepLink.<a href="./src/resources/devices/deep-link.ts">executeDeepLink</a>(deviceID, { ...params }) -> void</code>

## Browser

Types:

- <code><a href="./src/resources/devices/browser.ts">BrowserExecuteScriptResponse</a></code>

Methods:

- <code title="post /devices/{deviceId}/browser/execute-script">client.devices.browser.<a href="./src/resources/devices/browser.ts">executeScript</a>(deviceID, { ...params }) -> BrowserExecuteScriptResponse</code>

## Kiosk

Methods:

- <code title="delete /devices/{deviceId}/kiosk">client.devices.kiosk.<a href="./src/resources/devices/kiosk.ts">disable</a>(deviceID, { ...params }) -> void</code>
- <code title="put /devices/{deviceId}/kiosk">client.devices.kiosk.<a href="./src/resources/devices/kiosk.ts">enable</a>(deviceID, { ...params }) -> void</code>

## MediaSessions

Types:

- <code><a href="./src/resources/devices/media-sessions.ts">MediaSessionCreateResponse</a></code>
- <code><a href="./src/resources/devices/media-sessions.ts">MediaSessionActivateResponse</a></code>
- <code><a href="./src/resources/devices/media-sessions.ts">MediaSessionRetrieveCurrentResponse</a></code>

Methods:

- <code title="post /devices/{deviceId}/media-sessions">client.devices.mediaSessions.<a href="./src/resources/devices/media-sessions.ts">create</a>(deviceID, { ...params }) -> MediaSessionCreateResponse</code>
- <code title="delete /devices/{deviceId}/media-sessions/{sessionId}">client.devices.mediaSessions.<a href="./src/resources/devices/media-sessions.ts">delete</a>(sessionID, { ...params }) -> void</code>
- <code title="post /devices/{deviceId}/media-sessions/{sessionId}/activate">client.devices.mediaSessions.<a href="./src/resources/devices/media-sessions.ts">activate</a>(sessionID, { ...params }) -> MediaSessionActivateResponse</code>
- <code title="get /devices/{deviceId}/media-sessions/current">client.devices.mediaSessions.<a href="./src/resources/devices/media-sessions.ts">retrieveCurrent</a>(deviceID) -> MediaSessionRetrieveCurrentResponse</code>

## Recordings

Types:

- <code><a href="./src/resources/devices/recordings.ts">RecordingListResponse</a></code>
- <code><a href="./src/resources/devices/recordings.ts">RecordingStartResponse</a></code>
- <code><a href="./src/resources/devices/recordings.ts">RecordingStatusResponse</a></code>
- <code><a href="./src/resources/devices/recordings.ts">RecordingStopResponse</a></code>

Methods:

- <code title="get /devices/{deviceId}/recordings">client.devices.recordings.<a href="./src/resources/devices/recordings.ts">list</a>(deviceID, { ...params }) -> RecordingListResponse | null</code>
- <code title="delete /devices/{deviceId}/recordings/{recordingId}">client.devices.recordings.<a href="./src/resources/devices/recordings.ts">delete</a>(recordingID, { ...params }) -> void</code>
- <code title="post /devices/{deviceId}/recordings">client.devices.recordings.<a href="./src/resources/devices/recordings.ts">start</a>(deviceID, { ...params }) -> RecordingStartResponse</code>
- <code title="get /devices/{deviceId}/recordings/{recordingId}">client.devices.recordings.<a href="./src/resources/devices/recordings.ts">status</a>(recordingID, { ...params }) -> RecordingStatusResponse</code>
- <code title="post /devices/{deviceId}/recordings/{recordingId}">client.devices.recordings.<a href="./src/resources/devices/recordings.ts">stop</a>(recordingID, { ...params }) -> RecordingStopResponse</code>
- <code title="get /devices/{deviceId}/recordings/{recordingId}/trajectory">client.devices.recordings.<a href="./src/resources/devices/recordings.ts">trajectory</a>(recordingID, { ...params }) -> void</code>
- <code title="get /devices/{deviceId}/recordings/{recordingId}/video">client.devices.recordings.<a href="./src/resources/devices/recordings.ts">video</a>(recordingID, { ...params }) -> void</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /models">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelListResponse</code>

# Profiles

Types:

- <code><a href="./src/resources/profiles.ts">ProfileCreateResponse</a></code>
- <code><a href="./src/resources/profiles.ts">ProfileRetrieveResponse</a></code>
- <code><a href="./src/resources/profiles.ts">ProfileUpdateResponse</a></code>
- <code><a href="./src/resources/profiles.ts">ProfileListResponse</a></code>
- <code><a href="./src/resources/profiles.ts">ProfileDeleteResponse</a></code>

Methods:

- <code title="post /profiles">client.profiles.<a href="./src/resources/profiles.ts">create</a>({ ...params }) -> ProfileCreateResponse</code>
- <code title="get /profiles/{profileId}">client.profiles.<a href="./src/resources/profiles.ts">retrieve</a>(profileID) -> ProfileRetrieveResponse</code>
- <code title="put /profiles/{profileId}">client.profiles.<a href="./src/resources/profiles.ts">update</a>(profileID, { ...params }) -> ProfileUpdateResponse</code>
- <code title="get /profiles">client.profiles.<a href="./src/resources/profiles.ts">list</a>({ ...params }) -> ProfileListResponse</code>
- <code title="delete /profiles/{profileId}">client.profiles.<a href="./src/resources/profiles.ts">delete</a>(profileID) -> ProfileDeleteResponse</code>

# Proxies

Types:

- <code><a href="./src/resources/proxies.ts">ProxyCreateResponse</a></code>
- <code><a href="./src/resources/proxies.ts">ProxyRetrieveResponse</a></code>
- <code><a href="./src/resources/proxies.ts">ProxyUpdateResponse</a></code>
- <code><a href="./src/resources/proxies.ts">ProxyListResponse</a></code>
- <code><a href="./src/resources/proxies.ts">ProxyDeleteResponse</a></code>
- <code><a href="./src/resources/proxies.ts">ProxyLookupResponse</a></code>

Methods:

- <code title="post /proxies">client.proxies.<a href="./src/resources/proxies.ts">create</a>({ ...params }) -> ProxyCreateResponse</code>
- <code title="get /proxies/{proxyId}">client.proxies.<a href="./src/resources/proxies.ts">retrieve</a>(proxyID) -> ProxyRetrieveResponse</code>
- <code title="put /proxies/{proxyId}">client.proxies.<a href="./src/resources/proxies.ts">update</a>(proxyID, { ...params }) -> ProxyUpdateResponse</code>
- <code title="get /proxies">client.proxies.<a href="./src/resources/proxies.ts">list</a>({ ...params }) -> ProxyListResponse</code>
- <code title="delete /proxies/{proxyId}">client.proxies.<a href="./src/resources/proxies.ts">delete</a>(proxyID) -> ProxyDeleteResponse</code>
- <code title="post /proxies/lookup">client.proxies.<a href="./src/resources/proxies.ts">lookup</a>({ ...params }) -> ProxyLookupResponse</code>

# Connect

## Countries

Types:

- <code><a href="./src/resources/connect/countries.ts">CountryListResponse</a></code>

Methods:

- <code title="get /connect/countries">client.connect.countries.<a href="./src/resources/connect/countries.ts">list</a>({ ...params }) -> CountryListResponse</code>

## Proxies

Types:

- <code><a href="./src/resources/connect/proxies.ts">ProxyRetrieveResponse</a></code>
- <code><a href="./src/resources/connect/proxies.ts">ProxyListResponse</a></code>
- <code><a href="./src/resources/connect/proxies.ts">ProxyBuyResponse</a></code>
- <code><a href="./src/resources/connect/proxies.ts">ProxyListConnectionsResponse</a></code>
- <code><a href="./src/resources/connect/proxies.ts">ProxyPingResponse</a></code>

Methods:

- <code title="get /connect/proxies/{id}">client.connect.proxies.<a href="./src/resources/connect/proxies.ts">retrieve</a>(id) -> ProxyRetrieveResponse</code>
- <code title="get /connect/proxies">client.connect.proxies.<a href="./src/resources/connect/proxies.ts">list</a>({ ...params }) -> ProxyListResponse</code>
- <code title="post /connect/proxies">client.connect.proxies.<a href="./src/resources/connect/proxies.ts">buy</a>({ ...params }) -> ProxyBuyResponse</code>
- <code title="delete /connect/proxies/{id}">client.connect.proxies.<a href="./src/resources/connect/proxies.ts">cancel</a>(id) -> void</code>
- <code title="get /connect/proxies/{id}/connections">client.connect.proxies.<a href="./src/resources/connect/proxies.ts">listConnections</a>(id, { ...params }) -> ProxyListConnectionsResponse</code>
- <code title="get /connect/proxies/{id}/ping">client.connect.proxies.<a href="./src/resources/connect/proxies.ts">ping</a>(id) -> ProxyPingResponse</code>

## Users

Types:

- <code><a href="./src/resources/connect/users.ts">UserCreateResponse</a></code>
- <code><a href="./src/resources/connect/users.ts">UserRetrieveResponse</a></code>
- <code><a href="./src/resources/connect/users.ts">UserUpdateResponse</a></code>
- <code><a href="./src/resources/connect/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/connect/users.ts">UserListConnectionsResponse</a></code>

Methods:

- <code title="post /connect/users">client.connect.users.<a href="./src/resources/connect/users.ts">create</a>({ ...params }) -> UserCreateResponse</code>
- <code title="get /connect/users/{id}">client.connect.users.<a href="./src/resources/connect/users.ts">retrieve</a>(id) -> UserRetrieveResponse</code>
- <code title="patch /connect/users/{id}">client.connect.users.<a href="./src/resources/connect/users.ts">update</a>(id, { ...params }) -> UserUpdateResponse</code>
- <code title="get /connect/users">client.connect.users.<a href="./src/resources/connect/users.ts">list</a>({ ...params }) -> UserListResponse</code>
- <code title="delete /connect/users/{id}">client.connect.users.<a href="./src/resources/connect/users.ts">delete</a>(id) -> void</code>
- <code title="get /connect/users/{id}/connections">client.connect.users.<a href="./src/resources/connect/users.ts">listConnections</a>(id, { ...params }) -> UserListConnectionsResponse</code>

# Tasks

Types:

- <code><a href="./src/resources/tasks/tasks.ts">TaskRetrieveResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskListResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskGetStatusResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskGetTrajectoryResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskRunResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskRunStreamedResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskSendMessageResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskStopResponse</a></code>

Methods:

- <code title="get /tasks/{task_id}">client.tasks.<a href="./src/resources/tasks/tasks.ts">retrieve</a>(taskID) -> TaskRetrieveResponse</code>
- <code title="get /tasks">client.tasks.<a href="./src/resources/tasks/tasks.ts">list</a>({ ...params }) -> TaskListResponse</code>
- <code title="get /tasks/{task_id}/attach">client.tasks.<a href="./src/resources/tasks/tasks.ts">attach</a>(taskID) -> void</code>
- <code title="get /tasks/{task_id}/status">client.tasks.<a href="./src/resources/tasks/tasks.ts">getStatus</a>(taskID) -> TaskGetStatusResponse</code>
- <code title="get /tasks/{task_id}/trajectory">client.tasks.<a href="./src/resources/tasks/tasks.ts">getTrajectory</a>(taskID) -> TaskGetTrajectoryResponse</code>
- <code title="post /tasks">client.tasks.<a href="./src/resources/tasks/tasks.ts">run</a>({ ...params }) -> TaskRunResponse</code>
- <code title="post /tasks/stream">client.tasks.<a href="./src/resources/tasks/tasks.ts">runStreamed</a>({ ...params }) -> unknown</code>
- <code title="post /tasks/{task_id}/message">client.tasks.<a href="./src/resources/tasks/tasks.ts">sendMessage</a>(taskID, { ...params }) -> TaskSendMessageResponse</code>
- <code title="post /tasks/{task_id}/cancel">client.tasks.<a href="./src/resources/tasks/tasks.ts">stop</a>(taskID) -> TaskStopResponse</code>

## Screenshots

Types:

- <code><a href="./src/resources/tasks/screenshots.ts">ScreenshotRetrieveResponse</a></code>
- <code><a href="./src/resources/tasks/screenshots.ts">ScreenshotListResponse</a></code>

Methods:

- <code title="get /tasks/{task_id}/screenshots/{index}">client.tasks.screenshots.<a href="./src/resources/tasks/screenshots.ts">retrieve</a>(index, { ...params }) -> ScreenshotRetrieveResponse</code>
- <code title="get /tasks/{task_id}/screenshots">client.tasks.screenshots.<a href="./src/resources/tasks/screenshots.ts">list</a>(taskID) -> ScreenshotListResponse</code>

## UiStates

Types:

- <code><a href="./src/resources/tasks/ui-states.ts">UiStateRetrieveResponse</a></code>
- <code><a href="./src/resources/tasks/ui-states.ts">UiStateListResponse</a></code>

Methods:

- <code title="get /tasks/{task_id}/ui_states/{index}">client.tasks.uiStates.<a href="./src/resources/tasks/ui-states.ts">retrieve</a>(index, { ...params }) -> UiStateRetrieveResponse</code>
- <code title="get /tasks/{task_id}/ui_states">client.tasks.uiStates.<a href="./src/resources/tasks/ui-states.ts">list</a>(taskID) -> UiStateListResponse</code>

# Workflows

## Triggers

Types:

- <code><a href="./src/resources/workflows/triggers.ts">TriggerCreateResponse</a></code>
- <code><a href="./src/resources/workflows/triggers.ts">TriggerRetrieveResponse</a></code>
- <code><a href="./src/resources/workflows/triggers.ts">TriggerUpdateResponse</a></code>
- <code><a href="./src/resources/workflows/triggers.ts">TriggerListResponse</a></code>
- <code><a href="./src/resources/workflows/triggers.ts">TriggerDeleteResponse</a></code>
- <code><a href="./src/resources/workflows/triggers.ts">TriggerFireResponse</a></code>

Methods:

- <code title="post /triggers">client.workflows.triggers.<a href="./src/resources/workflows/triggers.ts">create</a>({ ...params }) -> TriggerCreateResponse</code>
- <code title="get /triggers/{triggerId}">client.workflows.triggers.<a href="./src/resources/workflows/triggers.ts">retrieve</a>(triggerID) -> TriggerRetrieveResponse</code>
- <code title="patch /triggers/{triggerId}">client.workflows.triggers.<a href="./src/resources/workflows/triggers.ts">update</a>(triggerID, { ...params }) -> TriggerUpdateResponse</code>
- <code title="get /triggers">client.workflows.triggers.<a href="./src/resources/workflows/triggers.ts">list</a>({ ...params }) -> TriggerListResponse</code>
- <code title="delete /triggers/{triggerId}">client.workflows.triggers.<a href="./src/resources/workflows/triggers.ts">delete</a>(triggerID) -> TriggerDeleteResponse</code>
- <code title="post /triggers/{triggerId}/fire">client.workflows.triggers.<a href="./src/resources/workflows/triggers.ts">fire</a>(triggerID, { ...params }) -> TriggerFireResponse</code>

## ActionCatalog

Types:

- <code><a href="./src/resources/workflows/action-catalog.ts">ActionCatalogRetrieveResponse</a></code>
- <code><a href="./src/resources/workflows/action-catalog.ts">ActionCatalogListResponse</a></code>

Methods:

- <code title="get /action-catalog/{catalogEntryId}">client.workflows.actionCatalog.<a href="./src/resources/workflows/action-catalog.ts">retrieve</a>(catalogEntryID) -> ActionCatalogRetrieveResponse</code>
- <code title="get /action-catalog">client.workflows.actionCatalog.<a href="./src/resources/workflows/action-catalog.ts">list</a>({ ...params }) -> ActionCatalogListResponse</code>

## Actions

Types:

- <code><a href="./src/resources/workflows/actions/actions.ts">ActionCreateResponse</a></code>
- <code><a href="./src/resources/workflows/actions/actions.ts">ActionRetrieveResponse</a></code>
- <code><a href="./src/resources/workflows/actions/actions.ts">ActionUpdateResponse</a></code>
- <code><a href="./src/resources/workflows/actions/actions.ts">ActionListResponse</a></code>
- <code><a href="./src/resources/workflows/actions/actions.ts">ActionDeleteResponse</a></code>

Methods:

- <code title="post /actions">client.workflows.actions.<a href="./src/resources/workflows/actions/actions.ts">create</a>({ ...params }) -> ActionCreateResponse</code>
- <code title="get /actions/{actionId}">client.workflows.actions.<a href="./src/resources/workflows/actions/actions.ts">retrieve</a>(actionID) -> ActionRetrieveResponse</code>
- <code title="patch /actions/{actionId}">client.workflows.actions.<a href="./src/resources/workflows/actions/actions.ts">update</a>(actionID, { ...params }) -> ActionUpdateResponse</code>
- <code title="get /actions">client.workflows.actions.<a href="./src/resources/workflows/actions/actions.ts">list</a>({ ...params }) -> ActionListResponse</code>
- <code title="delete /actions/{actionId}">client.workflows.actions.<a href="./src/resources/workflows/actions/actions.ts">delete</a>(actionID) -> ActionDeleteResponse</code>

### Services

Types:

- <code><a href="./src/resources/workflows/actions/services.ts">ServiceListResponse</a></code>
- <code><a href="./src/resources/workflows/actions/services.ts">ServiceListMethodsResponse</a></code>

Methods:

- <code title="get /actions/services">client.workflows.actions.services.<a href="./src/resources/workflows/actions/services.ts">list</a>() -> ServiceListResponse</code>
- <code title="get /actions/services/{service}/methods">client.workflows.actions.services.<a href="./src/resources/workflows/actions/services.ts">listMethods</a>(service) -> ServiceListMethodsResponse</code>

## Flows

Types:

- <code><a href="./src/resources/workflows/flows/flows.ts">FlowCreateResponse</a></code>
- <code><a href="./src/resources/workflows/flows/flows.ts">FlowRetrieveResponse</a></code>
- <code><a href="./src/resources/workflows/flows/flows.ts">FlowUpdateResponse</a></code>
- <code><a href="./src/resources/workflows/flows/flows.ts">FlowListResponse</a></code>
- <code><a href="./src/resources/workflows/flows/flows.ts">FlowDeleteResponse</a></code>
- <code><a href="./src/resources/workflows/flows/flows.ts">FlowCloneResponse</a></code>
- <code><a href="./src/resources/workflows/flows/flows.ts">FlowDryRunResponse</a></code>
- <code><a href="./src/resources/workflows/flows/flows.ts">FlowListRepairsResponse</a></code>
- <code><a href="./src/resources/workflows/flows/flows.ts">FlowUnblockResponse</a></code>

Methods:

- <code title="post /flows">client.workflows.flows.<a href="./src/resources/workflows/flows/flows.ts">create</a>({ ...params }) -> FlowCreateResponse</code>
- <code title="get /flows/{flowId}">client.workflows.flows.<a href="./src/resources/workflows/flows/flows.ts">retrieve</a>(flowID) -> FlowRetrieveResponse</code>
- <code title="patch /flows/{flowId}">client.workflows.flows.<a href="./src/resources/workflows/flows/flows.ts">update</a>(flowID, { ...params }) -> FlowUpdateResponse</code>
- <code title="get /flows">client.workflows.flows.<a href="./src/resources/workflows/flows/flows.ts">list</a>({ ...params }) -> FlowListResponse</code>
- <code title="delete /flows/{flowId}">client.workflows.flows.<a href="./src/resources/workflows/flows/flows.ts">delete</a>(flowID) -> FlowDeleteResponse</code>
- <code title="post /flows/{flowId}/clone">client.workflows.flows.<a href="./src/resources/workflows/flows/flows.ts">clone</a>(flowID, { ...params }) -> FlowCloneResponse</code>
- <code title="post /flows/{flowId}/dry-run">client.workflows.flows.<a href="./src/resources/workflows/flows/flows.ts">dryRun</a>(flowID, { ...params }) -> FlowDryRunResponse</code>
- <code title="get /flows/{flowId}/repairs">client.workflows.flows.<a href="./src/resources/workflows/flows/flows.ts">listRepairs</a>(flowID) -> FlowListRepairsResponse</code>
- <code title="post /flows/{flowId}/unblock">client.workflows.flows.<a href="./src/resources/workflows/flows/flows.ts">unblock</a>(flowID) -> FlowUnblockResponse</code>

### Actions

Types:

- <code><a href="./src/resources/workflows/flows/actions.ts">ActionListResponse</a></code>
- <code><a href="./src/resources/workflows/flows/actions.ts">ActionAddResponse</a></code>
- <code><a href="./src/resources/workflows/flows/actions.ts">ActionRemoveResponse</a></code>
- <code><a href="./src/resources/workflows/flows/actions.ts">ActionReplaceResponse</a></code>

Methods:

- <code title="get /flows/{flowId}/actions">client.workflows.flows.actions.<a href="./src/resources/workflows/flows/actions.ts">list</a>(flowID) -> ActionListResponse</code>
- <code title="post /flows/{flowId}/actions">client.workflows.flows.actions.<a href="./src/resources/workflows/flows/actions.ts">add</a>(flowID, { ...params }) -> ActionAddResponse</code>
- <code title="delete /flows/{flowId}/actions/{flowActionId}">client.workflows.flows.actions.<a href="./src/resources/workflows/flows/actions.ts">remove</a>(flowActionID, { ...params }) -> ActionRemoveResponse</code>
- <code title="put /flows/{flowId}/actions">client.workflows.flows.actions.<a href="./src/resources/workflows/flows/actions.ts">replace</a>(flowID, { ...params }) -> ActionReplaceResponse</code>

## Events

Types:

- <code><a href="./src/resources/workflows/events.ts">EventDryRunResponse</a></code>
- <code><a href="./src/resources/workflows/events.ts">EventIngestResponse</a></code>

Methods:

- <code title="post /events/dry-run">client.workflows.events.<a href="./src/resources/workflows/events.ts">dryRun</a>({ ...params }) -> EventDryRunResponse</code>
- <code title="post /events/ingest">client.workflows.events.<a href="./src/resources/workflows/events.ts">ingest</a>({ ...params }) -> EventIngestResponse</code>

## Executions

Types:

- <code><a href="./src/resources/workflows/executions.ts">ExecutionRetrieveResponse</a></code>
- <code><a href="./src/resources/workflows/executions.ts">ExecutionListResponse</a></code>
- <code><a href="./src/resources/workflows/executions.ts">ExecutionAbortResponse</a></code>
- <code><a href="./src/resources/workflows/executions.ts">ExecutionGetMetricsResponse</a></code>

Methods:

- <code title="get /executions/{executionId}">client.workflows.executions.<a href="./src/resources/workflows/executions.ts">retrieve</a>(executionID) -> ExecutionRetrieveResponse</code>
- <code title="get /executions">client.workflows.executions.<a href="./src/resources/workflows/executions.ts">list</a>({ ...params }) -> ExecutionListResponse</code>
- <code title="post /executions/{executionId}/abort">client.workflows.executions.<a href="./src/resources/workflows/executions.ts">abort</a>(executionID) -> ExecutionAbortResponse</code>
- <code title="get /executions/metrics">client.workflows.executions.<a href="./src/resources/workflows/executions.ts">getMetrics</a>({ ...params }) -> ExecutionGetMetricsResponse</code>

## Timezones

Types:

- <code><a href="./src/resources/workflows/timezones.ts">TimezoneListResponse</a></code>

Methods:

- <code title="get /timezones">client.workflows.timezones.<a href="./src/resources/workflows/timezones.ts">list</a>() -> TimezoneListResponse</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks/webhooks.ts">WebhookCreateResponse</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">WebhookRetrieveResponse</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">WebhookUpdateResponse</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">WebhookListResponse</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">WebhookEventTypesResponse</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">WebhookRotateSecretResponse</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">WebhookTestDeliveryResponse</a></code>

Methods:

- <code title="post /webhooks">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">create</a>({ ...params }) -> WebhookCreateResponse</code>
- <code title="get /webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">retrieve</a>(id) -> WebhookRetrieveResponse</code>
- <code title="patch /webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">update</a>(id, { ...params }) -> WebhookUpdateResponse</code>
- <code title="get /webhooks">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">list</a>({ ...params }) -> WebhookListResponse</code>
- <code title="delete /webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">delete</a>(id) -> void</code>
- <code title="get /event-types">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">eventTypes</a>() -> WebhookEventTypesResponse</code>
- <code title="post /webhooks/{id}/rotate-secret">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">rotateSecret</a>(id) -> WebhookRotateSecretResponse</code>
- <code title="post /webhooks/{id}/test">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">testDelivery</a>(id) -> WebhookTestDeliveryResponse</code>

## Deliveries

Types:

- <code><a href="./src/resources/webhooks/deliveries.ts">DeliveryListResponse</a></code>
- <code><a href="./src/resources/webhooks/deliveries.ts">DeliveryListForWebhookResponse</a></code>
- <code><a href="./src/resources/webhooks/deliveries.ts">DeliveryRetrieveAttemptsResponse</a></code>
- <code><a href="./src/resources/webhooks/deliveries.ts">DeliveryStatsResponse</a></code>

Methods:

- <code title="get /webhooks/deliveries">client.webhooks.deliveries.<a href="./src/resources/webhooks/deliveries.ts">list</a>({ ...params }) -> DeliveryListResponse</code>
- <code title="get /webhooks/{id}/deliveries">client.webhooks.deliveries.<a href="./src/resources/webhooks/deliveries.ts">listForWebhook</a>(id, { ...params }) -> DeliveryListForWebhookResponse</code>
- <code title="get /webhooks/{id}/deliveries/{deliveryId}">client.webhooks.deliveries.<a href="./src/resources/webhooks/deliveries.ts">retrieveAttempts</a>(deliveryID, { ...params }) -> DeliveryRetrieveAttemptsResponse</code>
- <code title="get /webhooks/deliveries/stats">client.webhooks.deliveries.<a href="./src/resources/webhooks/deliveries.ts">stats</a>({ ...params }) -> DeliveryStatsResponse</code>

# Agents

Types:

- <code><a href="./src/resources/agents.ts">AgentListResponse</a></code>

Methods:

- <code title="get /agents">client.agents.<a href="./src/resources/agents.ts">list</a>() -> AgentListResponse</code>

# Assistant

## Conversations

Types:

- <code><a href="./src/resources/assistant/conversations.ts">ConversationCreateResponse</a></code>
- <code><a href="./src/resources/assistant/conversations.ts">ConversationUpdateResponse</a></code>
- <code><a href="./src/resources/assistant/conversations.ts">ConversationListResponse</a></code>
- <code><a href="./src/resources/assistant/conversations.ts">ConversationAbortResponse</a></code>
- <code><a href="./src/resources/assistant/conversations.ts">ConversationAnswerPermissionResponse</a></code>
- <code><a href="./src/resources/assistant/conversations.ts">ConversationAnswerQuestionResponse</a></code>
- <code><a href="./src/resources/assistant/conversations.ts">ConversationHistoryResponse</a></code>
- <code><a href="./src/resources/assistant/conversations.ts">ConversationRejectQuestionResponse</a></code>
- <code><a href="./src/resources/assistant/conversations.ts">ConversationSendResponse</a></code>
- <code><a href="./src/resources/assistant/conversations.ts">ConversationStreamResponse</a></code>

Methods:

- <code title="post /assistant/chat/sessions">client.assistant.conversations.<a href="./src/resources/assistant/conversations.ts">create</a>({ ...params }) -> ConversationCreateResponse</code>
- <code title="patch /assistant/chat/sessions/{id}">client.assistant.conversations.<a href="./src/resources/assistant/conversations.ts">update</a>(id, { ...params }) -> ConversationUpdateResponse</code>
- <code title="get /assistant/chat/sessions">client.assistant.conversations.<a href="./src/resources/assistant/conversations.ts">list</a>({ ...params }) -> ConversationListResponse</code>
- <code title="post /assistant/chat/abort">client.assistant.conversations.<a href="./src/resources/assistant/conversations.ts">abort</a>({ ...params }) -> ConversationAbortResponse</code>
- <code title="post /assistant/chat/permission">client.assistant.conversations.<a href="./src/resources/assistant/conversations.ts">answerPermission</a>({ ...params }) -> ConversationAnswerPermissionResponse</code>
- <code title="post /assistant/chat/question">client.assistant.conversations.<a href="./src/resources/assistant/conversations.ts">answerQuestion</a>({ ...params }) -> ConversationAnswerQuestionResponse</code>
- <code title="get /assistant/chat/messages">client.assistant.conversations.<a href="./src/resources/assistant/conversations.ts">history</a>({ ...params }) -> ConversationHistoryResponse</code>
- <code title="post /assistant/chat/question/reject">client.assistant.conversations.<a href="./src/resources/assistant/conversations.ts">rejectQuestion</a>({ ...params }) -> ConversationRejectQuestionResponse</code>
- <code title="post /assistant/chat/message">client.assistant.conversations.<a href="./src/resources/assistant/conversations.ts">send</a>({ ...params }) -> ConversationSendResponse</code>
- <code title="get /assistant/chat/stream">client.assistant.conversations.<a href="./src/resources/assistant/conversations.ts">stream</a>({ ...params }) -> string</code>

# AppEvents

Types:

- <code><a href="./src/resources/app-events/app-events.ts">AppEventRetrieveResponse</a></code>
- <code><a href="./src/resources/app-events/app-events.ts">AppEventListResponse</a></code>

Methods:

- <code title="get /app-events/{id}">client.appEvents.<a href="./src/resources/app-events/app-events.ts">retrieve</a>(id) -> AppEventRetrieveResponse</code>
- <code title="get /app-events">client.appEvents.<a href="./src/resources/app-events/app-events.ts">list</a>({ ...params }) -> AppEventListResponse</code>

## Catalog

Types:

- <code><a href="./src/resources/app-events/catalog.ts">CatalogRetrieveResponse</a></code>
- <code><a href="./src/resources/app-events/catalog.ts">CatalogListResponse</a></code>

Methods:

- <code title="get /app-events/catalog/{appEventType}">client.appEvents.catalog.<a href="./src/resources/app-events/catalog.ts">retrieve</a>(appEventType) -> CatalogRetrieveResponse</code>
- <code title="get /app-events/catalog">client.appEvents.catalog.<a href="./src/resources/app-events/catalog.ts">list</a>() -> CatalogListResponse</code>

# Notifications

Types:

- <code><a href="./src/resources/notifications.ts">NotificationCatalogResponse</a></code>
- <code><a href="./src/resources/notifications.ts">NotificationGetPreferencesResponse</a></code>
- <code><a href="./src/resources/notifications.ts">NotificationUpdatePreferencesResponse</a></code>

Methods:

- <code title="get /notifications/catalog">client.notifications.<a href="./src/resources/notifications.ts">catalog</a>() -> NotificationCatalogResponse</code>
- <code title="get /notifications/preferences">client.notifications.<a href="./src/resources/notifications.ts">getPreferences</a>() -> NotificationGetPreferencesResponse</code>
- <code title="patch /notifications/preferences">client.notifications.<a href="./src/resources/notifications.ts">updatePreferences</a>({ ...params }) -> NotificationUpdatePreferencesResponse</code>

# Esims

Types:

- <code><a href="./src/resources/esims/esims.ts">EsimCreateResponse</a></code>
- <code><a href="./src/resources/esims/esims.ts">EsimRetrieveResponse</a></code>
- <code><a href="./src/resources/esims/esims.ts">EsimUpdateResponse</a></code>
- <code><a href="./src/resources/esims/esims.ts">EsimListResponse</a></code>
- <code><a href="./src/resources/esims/esims.ts">EsimCapacityResponse</a></code>
- <code><a href="./src/resources/esims/esims.ts">EsimConfirmPaymentResponse</a></code>
- <code><a href="./src/resources/esims/esims.ts">EsimImportResponse</a></code>
- <code><a href="./src/resources/esims/esims.ts">EsimInstallResponse</a></code>
- <code><a href="./src/resources/esims/esims.ts">EsimInstallStatusResponse</a></code>
- <code><a href="./src/resources/esims/esims.ts">EsimSelectorResponse</a></code>

Methods:

- <code title="post /numbers/esims">client.esims.<a href="./src/resources/esims/esims.ts">create</a>({ ...params }) -> EsimCreateResponse</code>
- <code title="get /numbers/esims/{id}">client.esims.<a href="./src/resources/esims/esims.ts">retrieve</a>(id) -> EsimRetrieveResponse</code>
- <code title="patch /numbers/esims/{id}">client.esims.<a href="./src/resources/esims/esims.ts">update</a>(id, { ...params }) -> EsimUpdateResponse</code>
- <code title="get /numbers/esims">client.esims.<a href="./src/resources/esims/esims.ts">list</a>({ ...params }) -> EsimListResponse</code>
- <code title="delete /numbers/esims/{id}">client.esims.<a href="./src/resources/esims/esims.ts">delete</a>(id) -> void</code>
- <code title="get /numbers/esims/capacity">client.esims.<a href="./src/resources/esims/esims.ts">capacity</a>() -> EsimCapacityResponse</code>
- <code title="post /numbers/esims/{id}/confirm-payment">client.esims.<a href="./src/resources/esims/esims.ts">confirmPayment</a>(id) -> EsimConfirmPaymentResponse</code>
- <code title="post /numbers/esims/import">client.esims.<a href="./src/resources/esims/esims.ts">import</a>({ ...params }) -> EsimImportResponse</code>
- <code title="post /numbers/esims/{id}/install">client.esims.<a href="./src/resources/esims/esims.ts">install</a>(id, { ...params }) -> EsimInstallResponse</code>
- <code title="get /numbers/esims/{id}/install-status">client.esims.<a href="./src/resources/esims/esims.ts">installStatus</a>(id) -> EsimInstallStatusResponse</code>
- <code title="get /numbers/esims/selector">client.esims.<a href="./src/resources/esims/esims.ts">selector</a>() -> EsimSelectorResponse</code>

## Messages

Types:

- <code><a href="./src/resources/esims/messages.ts">MessageListResponse</a></code>
- <code><a href="./src/resources/esims/messages.ts">MessageSendResponse</a></code>

Methods:

- <code title="get /numbers/esims/{id}/messages">client.esims.messages.<a href="./src/resources/esims/messages.ts">list</a>(id, { ...params }) -> MessageListResponse</code>
- <code title="post /numbers/esims/{id}/messages">client.esims.messages.<a href="./src/resources/esims/messages.ts">send</a>(id, { ...params }) -> MessageSendResponse</code>

# Messages

Types:

- <code><a href="./src/resources/messages/messages.ts">MessageListResponse</a></code>

Methods:

- <code title="get /numbers/messages">client.messages.<a href="./src/resources/messages/messages.ts">list</a>({ ...params }) -> MessageListResponse</code>

## Conversations

Types:

- <code><a href="./src/resources/messages/conversations.ts">ConversationListResponse</a></code>
- <code><a href="./src/resources/messages/conversations.ts">ConversationMarkReadResponse</a></code>

Methods:

- <code title="get /numbers/messages/conversations">client.messages.conversations.<a href="./src/resources/messages/conversations.ts">list</a>({ ...params }) -> ConversationListResponse</code>
- <code title="post /numbers/messages/conversations/read">client.messages.conversations.<a href="./src/resources/messages/conversations.ts">markRead</a>({ ...params }) -> ConversationMarkReadResponse</code>

# Numbers

Types:

- <code><a href="./src/resources/numbers/numbers.ts">NumberCreateResponse</a></code>
- <code><a href="./src/resources/numbers/numbers.ts">NumberRetrieveResponse</a></code>
- <code><a href="./src/resources/numbers/numbers.ts">NumberListResponse</a></code>
- <code><a href="./src/resources/numbers/numbers.ts">NumberDeleteResponse</a></code>
- <code><a href="./src/resources/numbers/numbers.ts">NumberCountriesResponse</a></code>
- <code><a href="./src/resources/numbers/numbers.ts">NumberPurposesResponse</a></code>

Methods:

- <code title="post /numbers/phones">client.numbers.<a href="./src/resources/numbers/numbers.ts">create</a>({ ...params }) -> NumberCreateResponse</code>
- <code title="get /numbers/phones/{id}">client.numbers.<a href="./src/resources/numbers/numbers.ts">retrieve</a>(id) -> NumberRetrieveResponse</code>
- <code title="get /numbers/phones">client.numbers.<a href="./src/resources/numbers/numbers.ts">list</a>({ ...params }) -> NumberListResponse</code>
- <code title="delete /numbers/phones/{id}">client.numbers.<a href="./src/resources/numbers/numbers.ts">delete</a>(id) -> NumberDeleteResponse</code>
- <code title="get /numbers/phones/countries">client.numbers.<a href="./src/resources/numbers/numbers.ts">countries</a>() -> NumberCountriesResponse</code>
- <code title="get /numbers/phones/purposes">client.numbers.<a href="./src/resources/numbers/numbers.ts">purposes</a>() -> NumberPurposesResponse</code>

## Messages

Types:

- <code><a href="./src/resources/numbers/messages.ts">MessageListResponse</a></code>

Methods:

- <code title="get /numbers/phones/{id}/messages">client.numbers.messages.<a href="./src/resources/numbers/messages.ts">list</a>(id, { ...params }) -> MessageListResponse</code>

# Store

Types:

- <code><a href="./src/resources/store/store.ts">StoreCategoriesResponse</a></code>

Methods:

- <code title="get /store/categories">client.store.<a href="./src/resources/store/store.ts">categories</a>() -> StoreCategoriesResponse</code>

## Apps

Types:

- <code><a href="./src/resources/store/apps.ts">AppRetrieveResponse</a></code>
- <code><a href="./src/resources/store/apps.ts">AppListResponse</a></code>
- <code><a href="./src/resources/store/apps.ts">AppAddToWorkspaceResponse</a></code>

Methods:

- <code title="get /store/apps/{appId}">client.store.apps.<a href="./src/resources/store/apps.ts">retrieve</a>(appID) -> AppRetrieveResponse</code>
- <code title="get /store/apps">client.store.apps.<a href="./src/resources/store/apps.ts">list</a>({ ...params }) -> AppListResponse</code>
- <code title="post /store/apps/{appId}/add">client.store.apps.<a href="./src/resources/store/apps.ts">addToWorkspace</a>(appID) -> AppAddToWorkspaceResponse</code>
