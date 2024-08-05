import { IProgress } from './progress.type.js';

export function createProgress(loaded: number, total: number): IProgress {
  return {
    loaded,
    total,
  };
}
