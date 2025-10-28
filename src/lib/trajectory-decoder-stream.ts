import type { TaskGetTrajectoryResponse } from '../resources';

export type TrajectoryEvent = TaskGetTrajectoryResponse['trajectory'][number];
type GenericTrajectoryEvent = { event?: string; data?: any };

const EVENT_NAME_PREFIX = 'event: ';
const DATA_PREFIX = 'data: ';

export class TaskTrajectoryDecoderStream extends TransformStream<string, TrajectoryEvent> {
  constructor() {
    let buffer = '';
    let lines: string[];
    let event: GenericTrajectoryEvent = { event: '', data: {} };

    super({
      transform(chunk, controller) {
        buffer += chunk;
        lines = buffer.split('\n');
        buffer = lines.pop() || '';
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed) continue;
          if (trimmed.startsWith(DATA_PREFIX)) {
            try {
              event.data = JSON.parse(trimmed.substring(DATA_PREFIX.length));
              // TODO: validate with zod?
              controller.enqueue(event as TrajectoryEvent);
              event = { event: '', data: {} };
            } catch (err) {
              // Optionally handle parse errors
              console.warn('Failed to parse event:', trimmed, err);
            }
          } else if (trimmed.startsWith(EVENT_NAME_PREFIX)) {
            event.event = trimmed.substring(EVENT_NAME_PREFIX.length);
          }
        }
      },
    });
  }
}
