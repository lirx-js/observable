import { createProgress } from '../../progress/create-progress.js';
import { IProgress } from '../../progress/progress.type.js';
import { createNotification } from '../create-notification.js';
import { INotification } from '../notification.type.js';

export type IProgressNotification = INotification<'progress', IProgress>;

export function createProgressNotification(progress: IProgress): IProgressNotification {
  return createNotification<'progress', IProgress>('progress', progress);
}

export function createBasicProgressNotification(
  loaded: number,
  total: number,
): IProgressNotification {
  return createNotification<'progress', IProgress>('progress', createProgress(loaded, total));
}
