import { IProgress } from './progress.type.js';

export function isProgressLengthComputable(progress: IProgress): boolean {
  return progress.total !== Number.POSITIVE_INFINITY;
}
