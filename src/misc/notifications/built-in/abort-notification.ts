import { createNotification } from '../create-notification.js';
import { INotification } from '../notification.type.js';

export type IAbortNotification<GAbort = any> = INotification<'abort', GAbort>;

export function createAbortNotification<GAbort>(abort: GAbort): IAbortNotification<GAbort> {
  return createNotification<'abort', GAbort>('abort', abort);
}
