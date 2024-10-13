import { futureUndo, noop } from '@lirx/utils';
import { defaultNotificationObserver } from '../../../../../../../../misc/notifications/default-notification-observer.js';
import { IDefaultInNotificationsUnion } from '../../../../../../../../misc/notifications/default-notifications-union.type.js';
import { IObserver } from '../../../../../../../../observer/type/observer.type.js';
import {
  IObservable,
  IUnsubscribeOfObservable,
} from '../../../../../../../type/observable.type.js';
import { INotificationsToImmediateObservableOnErrorFunction } from './notifications-to-immediate-observable-on-error-function.type.js';

export function notificationsToImmediateObservable<GValue>(
  subscribe: IObservable<IDefaultInNotificationsUnion<GValue>>,
  onError: INotificationsToImmediateObservableOnErrorFunction = noop,
): IObservable<GValue> {
  return (emit: IObserver<GValue>): IUnsubscribeOfObservable => {
    return futureUndo((unsubscribe: IUnsubscribeOfObservable): IUnsubscribeOfObservable => {
      return subscribe(
        defaultNotificationObserver<GValue>(
          /* next */ (value: GValue): void => {
            emit(value);
          },
          /* complete */ (): void => {
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
