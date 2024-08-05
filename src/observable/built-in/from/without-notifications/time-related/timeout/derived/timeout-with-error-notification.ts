import { createTimeoutErrorNotification } from '../../../../../../../misc/notifications/built-in/error/derived/create-timeout-error-notification.js';
import { IErrorNotification } from '../../../../../../../misc/notifications/built-in/error/error-notification.type.js';
import { IObservable } from '../../../../../../type/observable.type.js';
import { timeout } from '../timeout.js';

export function timeoutWithErrorNotification(
  duration: number,
): IObservable<IErrorNotification<Error>> {
  return timeout<IErrorNotification<Error>>(
    duration,
    (): IErrorNotification<Error> => createTimeoutErrorNotification(),
  );
}
