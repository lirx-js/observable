import { createProgress } from './create-progress.js';
import { IProgress } from './progress.type.js';

export function createProgressFromProgressEvent(event: ProgressEvent): IProgress {
  const total: number = event.lengthComputable
    ? Math.max(0, event.total)
    : Number.POSITIVE_INFINITY;
  return createProgress(Math.max(0, Math.min(total, event.loaded)), total);
}
