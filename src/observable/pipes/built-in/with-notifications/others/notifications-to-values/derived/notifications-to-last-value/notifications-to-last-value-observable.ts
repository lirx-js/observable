import { futureUndo, noop } from '@lirx/utils';
import { defaultNotificationObserver } from '../../../../../../../../misc/notifications/default-notification-observer.js';
import { IDefaultInNotificationsUnion } from '../../../../../../../../misc/notifications/default-notifications-union.type.js';
import { IObserver } from '../../../../../../../../observer/type/observer.type.js';
import {
  IObservable,
  IUnsubscribeOfObservable,
} from '../../../../../../../type/observable.type.js';
import { INotificationsToLastValueObservableOnErrorFunction } from './notifications-to-last-value-observable-on-error-function.type.js';

export function notificationsToLastValueObservable<GValue>(
  subscribe: IObservable<IDefaultInNotificationsUnion<GValue>>,
  onError: INotificationsToLastValueObservableOnErrorFunction = noop,
): IObservable<GValue> {
  return (emit: IObserver<GValue>): IUnsubscribeOfObservable => {
    let lastValue: GValue;

    return futureUndo((unsubscribe: IUnsubscribeOfObservable): IUnsubscribeOfObservable => {
      return subscribe(
        defaultNotificationObserver<GValue>(
          /* next */ (value: GValue): void => {
            lastValue = value;
          },
          /* complete */ (): void => {
            emit(lastValue);
            unsubscribe();
          },
          /* error */ (error: unknown): void => {
            onError(error);
            unsubscribe();
          },
        ),
      );
    });
  };
}
