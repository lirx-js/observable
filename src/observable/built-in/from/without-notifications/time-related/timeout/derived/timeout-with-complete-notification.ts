import { STATIC_COMPLETE_NOTIFICATION } from '../../../../../../../misc/notifications/built-in/complete/complete-notification.constant.js';
import { ICompleteNotification } from '../../../../../../../misc/notifications/built-in/complete/complete-notification.type.js';
import { IObservable } from '../../../../../../type/observable.type.js';
import { timeout } from '../timeout.js';

export function timeoutWithCompleteNotification(
  duration: number,
): IObservable<ICompleteNotification> {
  return timeout<ICompleteNotification>(
    duration,
    (): ICompleteNotification => STATIC_COMPLETE_NOTIFICATION,
  );
}
