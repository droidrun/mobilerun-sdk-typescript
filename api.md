# Tasks

Types:

- <code><a href="./src/resources/tasks/tasks.ts">TaskRetrieveResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskListResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskGetGifResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskGetStatusResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskGetTrajectoryResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskRunResponse</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">TaskStopResponse</a></code>

Methods:

- <code title="get /tasks/{task_id}">client.tasks.<a href="./src/resources/tasks/tasks.ts">retrieve</a>(taskID) -> unknown</code>
- <code title="get /tasks/">client.tasks.<a href="./src/resources/tasks/tasks.ts">list</a>({ ...params }) -> unknown</code>
- <code title="get /tasks/{task_id}/attach">client.tasks.<a href="./src/resources/tasks/tasks.ts">attach</a>(taskID) -> void</code>
- <code title="get /tasks/{task_id}/gif">client.tasks.<a href="./src/resources/tasks/tasks.ts">getGif</a>(taskID) -> unknown</code>
- <code title="get /tasks/{task_id}/status">client.tasks.<a href="./src/resources/tasks/tasks.ts">getStatus</a>(taskID) -> unknown</code>
- <code title="get /tasks/{task_id}/trajectory">client.tasks.<a href="./src/resources/tasks/tasks.ts">getTrajectory</a>(taskID) -> unknown</code>
- <code title="post /tasks/">client.tasks.<a href="./src/resources/tasks/tasks.ts">run</a>({ ...params }) -> unknown</code>
- <code title="post /tasks/stream">client.tasks.<a href="./src/resources/tasks/tasks.ts">runStreamed</a>({ ...params }) -> void</code>
- <code title="post /tasks/{task_id}/cancel">client.tasks.<a href="./src/resources/tasks/tasks.ts">stop</a>(taskID) -> unknown</code>

## Screenshots

Types:

- <code><a href="./src/resources/tasks/screenshots.ts">ScreenshotRetrieveResponse</a></code>
- <code><a href="./src/resources/tasks/screenshots.ts">ScreenshotListResponse</a></code>

Methods:

- <code title="get /tasks/{task_id}/screenshots/{index}">client.tasks.screenshots.<a href="./src/resources/tasks/screenshots.ts">retrieve</a>(index, { ...params }) -> unknown</code>
- <code title="get /tasks/{task_id}/screenshots">client.tasks.screenshots.<a href="./src/resources/tasks/screenshots.ts">list</a>(taskID) -> unknown</code>
