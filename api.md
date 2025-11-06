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
- <code title="get /tasks/{task_id}/gif">client.tasks.<a href="./src/resources/tasks/tasks.ts">getGif</a>(taskID) -> MediaResponse</code>
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

# Apps

Types:

- <code><a href="./src/resources/apps.ts">AppRetrieveResponse</a></code>
- <code><a href="./src/resources/apps.ts">AppListResponse</a></code>
- <code><a href="./src/resources/apps.ts">AppCreateSignedUploadURLResponse</a></code>
- <code><a href="./src/resources/apps.ts">AppMarkUploadFailedResponse</a></code>
- <code><a href="./src/resources/apps.ts">AppRetrieveByPackageNameResponse</a></code>
- <code><a href="./src/resources/apps.ts">AppUpdateAppResponse</a></code>

Methods:

- <code title="get /apps/{id}">client.apps.<a href="./src/resources/apps.ts">retrieve</a>(id) -> AppRetrieveResponse | null</code>
- <code title="get /apps">client.apps.<a href="./src/resources/apps.ts">list</a>({ ...params }) -> AppListResponse</code>
- <code title="post /apps/create-signed-upload-url">client.apps.<a href="./src/resources/apps.ts">createSignedUploadURL</a>({ ...params }) -> AppCreateSignedUploadURLResponse</code>
- <code title="post /apps/mark-upload-failed">client.apps.<a href="./src/resources/apps.ts">markUploadFailed</a>({ ...params }) -> AppMarkUploadFailedResponse</code>
- <code title="get /apps/packages/{packageName}">client.apps.<a href="./src/resources/apps.ts">retrieveByPackageName</a>(packageName) -> AppRetrieveByPackageNameResponse | null</code>
- <code title="patch /apps/{id}">client.apps.<a href="./src/resources/apps.ts">updateApp</a>(id, { ...params }) -> AppUpdateAppResponse</code>

# Playstore

Types:

- <code><a href="./src/resources/playstore.ts">PlaystoreCreateAppResponse</a></code>
- <code><a href="./src/resources/playstore.ts">PlaystoreSearchAppResponse</a></code>

Methods:

- <code title="post /playstore/request">client.playstore.<a href="./src/resources/playstore.ts">createApp</a>({ ...params }) -> PlaystoreCreateAppResponse</code>
- <code title="get /playstore/search">client.playstore.<a href="./src/resources/playstore.ts">searchApp</a>({ ...params }) -> PlaystoreSearchAppResponse</code>

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
