// Schedule and cancel without dispatching a device run. Pass an existing test flow ID.
import { MobilerunSDK } from '@mobilerun/sdk';

export async function scheduledRuns(sdk: MobilerunSDK, flowId: string) {
  const flow = sdk.workflows.flows.fromId(flowId);
  const schedule = await flow.scheduledRuns.create({
    runAt: new Date(Date.now() + 600_000).toISOString(),
    payload: {},
  });
  let failed = false;
  try {
    const page = await flow.scheduledRuns.list();
    if (!page.items.some((item) => item.id === schedule.id)) throw new Error('Schedule missing from list');
  } catch (error) {
    failed = true;
    throw error;
  } finally {
    try {
      const cancelled = await schedule.cancel();
      if (cancelled.data.status !== 'cancelled') throw new Error('Schedule was not cancelled');
    } catch (error) {
      if (!failed) throw error;
      console.error('Schedule cleanup failed for', schedule.id);
    }
  }
  for await (const item of flow.scheduledRuns.list({ status: 'all' })) {
    if (item.id === schedule.id && item.status === 'cancelled') return item;
  }
  throw new Error('Cancelled schedule missing from list');
}

if (require.main === module) {
  const id = process.argv[2];
  if (!id) throw new Error('Pass an existing test flow ID');
  scheduledRuns(new MobilerunSDK(), id).catch(() => {
    console.error('Schedule example failed.');
    process.exitCode = 1;
  });
}
