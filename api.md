# Tasks

Types:

- <code><a href="./src/resources/tasks/tasks.ts">LlmModel</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">Task</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskCreate</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskStatus</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskRetrieveResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskListResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskGetStatusResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskGetTrajectoryResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskRunResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskStopResponse</a></code>

Methods:

- <code title="get /tasks/{task_id}">client.tasks.<a href="./src/resources/tasks/tasks.ts">retrieve</a>(taskID) -> TaskRetrieveResponse</code>
- <code title="get /tasks/">client.tasks.<a href="./src/resources/tasks/tasks.ts">list</a>({ ...params }) -> TaskListResponse</code>
- <code title="get /tasks/{task_id}/attach">client.tasks.<a href="./src/resources/tasks/tasks.ts">attach</a>(taskID) -> void</code>
- <code title="get /tasks/{task_id}/status">client.tasks.<a href="./src/resources/tasks/tasks.ts">getStatus</a>(taskID) -> TaskGetStatusResponse</code>
- <code title="get /tasks/{task_id}/trajectory">client.tasks.<a href="./src/resources/tasks/tasks.ts">getTrajectory</a>(taskID) -> TaskGetTrajectoryResponse</code>
- <code title="post /tasks/">client.tasks.<a href="./src/resources/tasks/tasks.ts">run</a>({ ...params }) -> TaskRunResponse</code>
- <code title="post /tasks/stream">client.tasks.<a href="./src/resources/tasks/tasks.ts">runStreamed</a>({ ...params }) -> void</code>
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

# Apps

Types:

- <code><a href="./src/resources/apps.ts">AppListResponse</a></code>

Methods:

- <code title="get /apps">client.apps.<a href="./src/resources/apps.ts">list</a>({ ...params }) -> AppListResponse</code>

# Credentials

Types:

- <code><a href="./src/resources/credentials/credentials.ts">CredentialListResponse</a></code>

Methods:

- <code title="get /credentials">client.credentials.<a href="./src/resources/credentials/credentials.ts">list</a>() -> CredentialListResponse</code>

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
- <code title="get /hooks/">client.hooks.<a href="./src/resources/hooks.ts">list</a>({ ...params }) -> HookListResponse</code>
- <code title="get /hooks/sample">client.hooks.<a href="./src/resources/hooks.ts">getSampleData</a>() -> HookGetSampleDataResponse</code>
- <code title="post /hooks/perform">client.hooks.<a href="./src/resources/hooks.ts">perform</a>() -> HookPerformResponse</code>
- <code title="post /hooks/subscribe">client.hooks.<a href="./src/resources/hooks.ts">subscribe</a>({ ...params }) -> HookSubscribeResponse</code>
- <code title="post /hooks/{hook_id}/unsubscribe">client.hooks.<a href="./src/resources/hooks.ts">unsubscribe</a>(hookID) -> HookUnsubscribeResponse</code>
