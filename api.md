# Shared

Types:

- <code><a href="./src/resources/shared.ts">DeviceCarrier</a></code>
- <code><a href="./src/resources/shared.ts">DeviceIdentifiers</a></code>
- <code><a href="./src/resources/shared.ts">DeviceSpec</a></code>
- <code><a href="./src/resources/shared.ts">Meta</a></code>
- <code><a href="./src/resources/shared.ts">Pagination</a></code>
- <code><a href="./src/resources/shared.ts">PaginationMeta</a></code>
- <code><a href="./src/resources/shared.ts">PermissionSet</a></code>

# Tasks

Types:

- <code><a href="./src/resources/tasks/tasks.ts">PackageCredentials</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">Task</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskStatus</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">UsageResult</a></code>
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

- <code><a href="./src/resources/tasks/screenshots.ts">MediaResponse</a></code>
- <code><a href="./src/resources/tasks/screenshots.ts">ScreenshotListResponse</a></code>

Methods:

- <code title="get /tasks/{task_id}/screenshots/{index}">client.tasks.screenshots.<a href="./src/resources/tasks/screenshots.ts">retrieve</a>(index, { ...params }) -> MediaResponse</code>
- <code title="get /tasks/{task_id}/screenshots">client.tasks.screenshots.<a href="./src/resources/tasks/screenshots.ts">list</a>(taskID) -> ScreenshotListResponse</code>

## UiStates

Types:

- <code><a href="./src/resources/tasks/ui-states.ts">UiStateListResponse</a></code>

Methods:

- <code title="get /tasks/{task_id}/ui_states/{index}">client.tasks.uiStates.<a href="./src/resources/tasks/ui-states.ts">retrieve</a>(index, { ...params }) -> MediaResponse</code>
- <code title="get /tasks/{task_id}/ui_states">client.tasks.uiStates.<a href="./src/resources/tasks/ui-states.ts">list</a>(taskID) -> UiStateListResponse</code>

# Agents

Types:

- <code><a href="./src/resources/agents.ts">AgentListResponse</a></code>

Methods:

- <code title="get /agents">client.agents.<a href="./src/resources/agents.ts">list</a>() -> AgentListResponse</code>

# Proxies

Types:

- <code><a href="./src/resources/proxies.ts">ProxyConfig</a></code>
- <code><a href="./src/resources/proxies.ts">ProxyCreateResponse</a></code>
- <code><a href="./src/resources/proxies.ts">ProxyRetrieveResponse</a></code>
- <code><a href="./src/resources/proxies.ts">ProxyUpdateResponse</a></code>
- <code><a href="./src/resources/proxies.ts">ProxyListResponse</a></code>
- <code><a href="./src/resources/proxies.ts">ProxyDeleteResponse</a></code>

Methods:

- <code title="post /proxies">client.proxies.<a href="./src/resources/proxies.ts">create</a>({ ...params }) -> ProxyCreateResponse</code>
- <code title="get /proxies/{proxyId}">client.proxies.<a href="./src/resources/proxies.ts">retrieve</a>(proxyID) -> ProxyRetrieveResponse</code>
- <code title="put /proxies/{proxyId}">client.proxies.<a href="./src/resources/proxies.ts">update</a>(proxyID, { ...params }) -> ProxyUpdateResponse</code>
- <code title="get /proxies">client.proxies.<a href="./src/resources/proxies.ts">list</a>({ ...params }) -> ProxyListResponse</code>
- <code title="delete /proxies/{proxyId}">client.proxies.<a href="./src/resources/proxies.ts">delete</a>(proxyID) -> ProxyDeleteResponse</code>

# Carriers

Types:

- <code><a href="./src/resources/carriers.ts">Carrier</a></code>
- <code><a href="./src/resources/carriers.ts">CarrierListResponse</a></code>
- <code><a href="./src/resources/carriers.ts">CarrierDeleteResponse</a></code>

Methods:

- <code title="post /carriers">client.carriers.<a href="./src/resources/carriers.ts">create</a>({ ...params }) -> Carrier</code>
- <code title="get /carriers/{carrierId}">client.carriers.<a href="./src/resources/carriers.ts">retrieve</a>(carrierID) -> Carrier</code>
- <code title="patch /carriers/{carrierId}">client.carriers.<a href="./src/resources/carriers.ts">update</a>(carrierID, { ...params }) -> Carrier</code>
- <code title="get /carriers">client.carriers.<a href="./src/resources/carriers.ts">list</a>({ ...params }) -> CarrierListResponse</code>
- <code title="delete /carriers/{carrierId}">client.carriers.<a href="./src/resources/carriers.ts">delete</a>(carrierID) -> CarrierDeleteResponse</code>
- <code title="get /carriers/lookup">client.carriers.<a href="./src/resources/carriers.ts">lookup</a>({ ...params }) -> Carrier</code>

# Profiles

Types:

- <code><a href="./src/resources/profiles.ts">Profile</a></code>
- <code><a href="./src/resources/profiles.ts">ProfileListResponse</a></code>
- <code><a href="./src/resources/profiles.ts">ProfileDeleteResponse</a></code>

Methods:

- <code title="post /profiles">client.profiles.<a href="./src/resources/profiles.ts">create</a>({ ...params }) -> Profile</code>
- <code title="get /profiles/{profileId}">client.profiles.<a href="./src/resources/profiles.ts">retrieve</a>(profileID) -> Profile</code>
- <code title="put /profiles/{profileId}">client.profiles.<a href="./src/resources/profiles.ts">update</a>(profileID, { ...params }) -> Profile</code>
- <code title="get /profiles">client.profiles.<a href="./src/resources/profiles.ts">list</a>({ ...params }) -> ProfileListResponse</code>
- <code title="delete /profiles/{profileId}">client.profiles.<a href="./src/resources/profiles.ts">delete</a>(profileID) -> ProfileDeleteResponse</code>

# Devices

Types:

- <code><a href="./src/resources/devices/devices.ts">Device</a></code>
- <code><a href="./src/resources/devices/devices.ts">DeviceListResponse</a></code>
- <code><a href="./src/resources/devices/devices.ts">DeviceCountResponse</a></code>

Methods:

- <code title="post /devices">client.devices.<a href="./src/resources/devices/devices.ts">create</a>({ ...params }) -> Device</code>
- <code title="get /devices/{deviceId}">client.devices.<a href="./src/resources/devices/devices.ts">retrieve</a>(deviceID) -> Device</code>
- <code title="get /devices">client.devices.<a href="./src/resources/devices/devices.ts">list</a>({ ...params }) -> DeviceListResponse</code>
- <code title="get /devices/count">client.devices.<a href="./src/resources/devices/devices.ts">count</a>() -> DeviceCountResponse</code>
- <code title="put /devices/{deviceId}/name">client.devices.<a href="./src/resources/devices/devices.ts">setName</a>(deviceID, { ...params }) -> Device</code>
- <code title="delete /devices/{deviceId}">client.devices.<a href="./src/resources/devices/devices.ts">terminate</a>(deviceID, { ...params }) -> void</code>
- <code title="get /devices/{deviceId}/wait">client.devices.<a href="./src/resources/devices/devices.ts">waitReady</a>(deviceID) -> Device</code>

## Time

Types:

- <code><a href="./src/resources/devices/time.ts">TimeTimeResponse</a></code>
- <code><a href="./src/resources/devices/time.ts">TimeTimezoneResponse</a></code>

Methods:

- <code title="post /devices/{deviceId}/timezone">client.devices.time.<a href="./src/resources/devices/time.ts">setTimezone</a>(deviceID, { ...params }) -> void</code>
- <code title="get /devices/{deviceId}/time">client.devices.time.<a href="./src/resources/devices/time.ts">time</a>(deviceID, { ...params }) -> string</code>
- <code title="get /devices/{deviceId}/timezone">client.devices.time.<a href="./src/resources/devices/time.ts">timezone</a>(deviceID, { ...params }) -> TimeTimezoneResponse</code>

## Profile

Methods:

- <code title="put /devices/{deviceId}/profile">client.devices.profile.<a href="./src/resources/devices/profile.ts">update</a>(deviceID, { ...params }) -> void</code>

## Files

Types:

- <code><a href="./src/resources/devices/files.ts">FileInfo</a></code>
- <code><a href="./src/resources/devices/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/devices/files.ts">FileDownloadResponse</a></code>

Methods:

- <code title="get /devices/{deviceId}/files">client.devices.files.<a href="./src/resources/devices/files.ts">list</a>(deviceID, { ...params }) -> FileListResponse</code>
- <code title="delete /devices/{deviceId}/files">client.devices.files.<a href="./src/resources/devices/files.ts">delete</a>(deviceID, { ...params }) -> void</code>
- <code title="get /devices/{deviceId}/files/download">client.devices.files.<a href="./src/resources/devices/files.ts">download</a>(deviceID, { ...params }) -> string</code>
- <code title="post /devices/{deviceId}/files">client.devices.files.<a href="./src/resources/devices/files.ts">upload</a>(deviceID, { ...params }) -> void</code>

## Proxy

Types:

- <code><a href="./src/resources/devices/proxy.ts">ProxyStatusResponse</a></code>

Methods:

- <code title="post /devices/{deviceId}/proxy">client.devices.proxy.<a href="./src/resources/devices/proxy.ts">connect</a>(deviceID, { ...params }) -> void</code>
- <code title="delete /devices/{deviceId}/proxy">client.devices.proxy.<a href="./src/resources/devices/proxy.ts">disconnect</a>(deviceID, { ...params }) -> void</code>
- <code title="get /devices/{deviceId}/proxy">client.devices.proxy.<a href="./src/resources/devices/proxy.ts">status</a>(deviceID, { ...params }) -> ProxyStatusResponse</code>

## Location

Types:

- <code><a href="./src/resources/devices/location.ts">LocationGetResponse</a></code>

Methods:

- <code title="get /devices/{deviceId}/location">client.devices.location.<a href="./src/resources/devices/location.ts">get</a>(deviceID, { ...params }) -> LocationGetResponse</code>
- <code title="post /devices/{deviceId}/location">client.devices.location.<a href="./src/resources/devices/location.ts">set</a>(deviceID, { ...params }) -> void</code>

## Actions

Types:

- <code><a href="./src/resources/devices/actions.ts">ActionOverlayVisibleResponse</a></code>

Methods:

- <code title="post /devices/{deviceId}/global">client.devices.actions.<a href="./src/resources/devices/actions.ts">global</a>(deviceID, { ...params }) -> void</code>
- <code title="get /devices/{deviceId}/overlay">client.devices.actions.<a href="./src/resources/devices/actions.ts">overlayVisible</a>(deviceID, { ...params }) -> ActionOverlayVisibleResponse</code>
- <code title="post /devices/{deviceId}/overlay">client.devices.actions.<a href="./src/resources/devices/actions.ts">setOverlayVisible</a>(deviceID, { ...params }) -> void</code>
- <code title="post /devices/{deviceId}/swipe">client.devices.actions.<a href="./src/resources/devices/actions.ts">swipe</a>(deviceID, { ...params }) -> void</code>
- <code title="post /devices/{deviceId}/tap">client.devices.actions.<a href="./src/resources/devices/actions.ts">tap</a>(deviceID, { ...params }) -> void</code>

## State

Types:

- <code><a href="./src/resources/devices/state.ts">Rect</a></code>
- <code><a href="./src/resources/devices/state.ts">StateScreenshotResponse</a></code>
- <code><a href="./src/resources/devices/state.ts">StateUiResponse</a></code>

Methods:

- <code title="get /devices/{deviceId}/screenshot">client.devices.state.<a href="./src/resources/devices/state.ts">screenshot</a>(deviceID, { ...params }) -> string</code>
- <code title="get /devices/{deviceId}/ui-state">client.devices.state.<a href="./src/resources/devices/state.ts">ui</a>(deviceID, { ...params }) -> StateUiResponse</code>

## Apps

Types:

- <code><a href="./src/resources/devices/apps.ts">AppListResponse</a></code>

Methods:

- <code title="patch /devices/{deviceId}/apps/{packageName}">client.devices.apps.<a href="./src/resources/devices/apps.ts">update</a>(packageName, { ...params }) -> void</code>
- <code title="get /devices/{deviceId}/apps">client.devices.apps.<a href="./src/resources/devices/apps.ts">list</a>(deviceID, { ...params }) -> AppListResponse | null</code>
- <code title="delete /devices/{deviceId}/apps/{packageName}">client.devices.apps.<a href="./src/resources/devices/apps.ts">delete</a>(packageName, { ...params }) -> void</code>
- <code title="post /devices/{deviceId}/apps">client.devices.apps.<a href="./src/resources/devices/apps.ts">install</a>(deviceID, { ...params }) -> void</code>
- <code title="put /devices/{deviceId}/apps/{packageName}">client.devices.apps.<a href="./src/resources/devices/apps.ts">start</a>(packageName, { ...params }) -> void</code>

## Packages

Types:

- <code><a href="./src/resources/devices/packages.ts">PackageListResponse</a></code>

Methods:

- <code title="get /devices/{deviceId}/packages">client.devices.packages.<a href="./src/resources/devices/packages.ts">list</a>(deviceID, { ...params }) -> PackageListResponse | null</code>

## Keyboard

Methods:

- <code title="delete /devices/{deviceId}/keyboard">client.devices.keyboard.<a href="./src/resources/devices/keyboard.ts">clear</a>(deviceID, { ...params }) -> void</code>
- <code title="put /devices/{deviceId}/keyboard">client.devices.keyboard.<a href="./src/resources/devices/keyboard.ts">key</a>(deviceID, { ...params }) -> void</code>
- <code title="post /devices/{deviceId}/keyboard">client.devices.keyboard.<a href="./src/resources/devices/keyboard.ts">write</a>(deviceID, { ...params }) -> void</code>

## Tasks

Types:

- <code><a href="./src/resources/devices/tasks.ts">TaskListResponse</a></code>

Methods:

- <code title="get /devices/{deviceId}/tasks">client.devices.tasks.<a href="./src/resources/devices/tasks.ts">list</a>(deviceID, { ...params }) -> TaskListResponse</code>

## Esim

Types:

- <code><a href="./src/resources/devices/esim.ts">EsimListResponse</a></code>
- <code><a href="./src/resources/devices/esim.ts">EsimActivateResponse</a></code>

Methods:

- <code title="get /devices/{deviceId}/esim">client.devices.esim.<a href="./src/resources/devices/esim.ts">list</a>(deviceID, { ...params }) -> EsimListResponse | null</code>
- <code title="post /devices/{deviceId}/esim">client.devices.esim.<a href="./src/resources/devices/esim.ts">activate</a>(deviceID, { ...params }) -> EsimActivateResponse</code>
- <code title="put /devices/{deviceId}/esim">client.devices.esim.<a href="./src/resources/devices/esim.ts">enable</a>(deviceID, { ...params }) -> void</code>
- <code title="delete /devices/{deviceId}/esim">client.devices.esim.<a href="./src/resources/devices/esim.ts">remove</a>(deviceID, { ...params }) -> void</code>

# Apps

# Credentials

Types:

- <code><a href="./src/resources/credentials/credentials.ts">CredentialListResponse</a></code>

Methods:

- <code title="get /credentials">client.credentials.<a href="./src/resources/credentials/credentials.ts">list</a>({ ...params }) -> CredentialListResponse</code>

## Packages

Types:

- <code><a href="./src/resources/credentials/packages/packages.ts">PackageCreateResponse</a></code>
- <code><a href="./src/resources/credentials/packages/packages.ts">PackageListResponse</a></code>

Methods:

- <code title="post /credentials/packages">client.credentials.packages.<a href="./src/resources/credentials/packages/packages.ts">create</a>({ ...params }) -> PackageCreateResponse</code>
- <code title="get /credentials/packages/{packageName}">client.credentials.packages.<a href="./src/resources/credentials/packages/packages.ts">list</a>(packageName) -> PackageListResponse</code>

### Credentials

Types:

- <code><a href="./src/resources/credentials/packages/credentials/credentials.ts">Credential</a></code>
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

# Hooks

Types:

- <code><a href="./src/resources/hooks.ts">HookRetrieveResponse</a></code>
- <code><a href="./src/resources/hooks.ts">HookUpdateResponse</a></code>
- <code><a href="./src/resources/hooks.ts">HookListResponse</a></code>
- <code><a href="./src/resources/hooks.ts">HookGetSampleDataResponse</a></code>
- <code><a href="./src/resources/hooks.ts">HookPerformResponse</a></code>
- <code><a href="./src/resources/hooks.ts">HookSubscribeResponse</a></code>
- <code><a href="./src/resources/hooks.ts">HookUnsubscribeResponse</a></code>

Methods:

- <code title="get /hooks/{hook_id}">client.hooks.<a href="./src/resources/hooks.ts">retrieve</a>(hookID) -> HookRetrieveResponse</code>
- <code title="post /hooks/{hook_id}/edit">client.hooks.<a href="./src/resources/hooks.ts">update</a>(hookID, { ...params }) -> HookUpdateResponse</code>
- <code title="get /hooks">client.hooks.<a href="./src/resources/hooks.ts">list</a>({ ...params }) -> HookListResponse</code>
- <code title="get /hooks/sample">client.hooks.<a href="./src/resources/hooks.ts">getSampleData</a>() -> HookGetSampleDataResponse</code>
- <code title="post /hooks/perform">client.hooks.<a href="./src/resources/hooks.ts">perform</a>({ ...params }) -> HookPerformResponse</code>
- <code title="post /hooks/subscribe">client.hooks.<a href="./src/resources/hooks.ts">subscribe</a>({ ...params }) -> HookSubscribeResponse</code>
- <code title="post /hooks/{hook_id}/unsubscribe">client.hooks.<a href="./src/resources/hooks.ts">unsubscribe</a>(hookID) -> HookUnsubscribeResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /models">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelListResponse</code>
