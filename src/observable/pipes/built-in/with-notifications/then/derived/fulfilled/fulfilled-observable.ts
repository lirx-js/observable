import { futureUndo } from '@lirx/utils';
import { IErrorNotification } from '../../../../../../../misc/notifications/built-in/error/error-notification.type.js';
import { IDefaultInNotificationsUnion } from '../../../../../../../misc/notifications/default-notifications-union.type.js';
import { IObserver } from '../../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../../type/observable.type.js';
import { IThenObservableOnFulfilled } from '../../then-observable-on-fulfilled.type.js';
import { IThenObservableInNotifications } from '../../then-observable.js';
import { IFulfilledObservableOutNotifications } from './fulfilled-observable-out-notifications.type.js';

export function fulfilledObservable<GInNextValue, GOut>(
  subscribe: IObservable<IThenObservableInNotifications<GInNextValue>>,
  onFulfilled: IThenObservableOnFulfilled<GInNextValue, GOut>,
): IObservable<IFulfilledObservableOutNotifications<GOut>> {
  return (
    emit: IObserver<IFulfilledObservableOutNotifications<GOut>>,
  ): IUnsubscribeOfObservable => {
    let childUnsubscribe: IUnsubscribeOfObservable;
    let lastValue: GInNextValue;

    const unsubscribe: IUnsubscribeOfObservable = futureUndo(
      (unsubscribe: IUnsubscribeOfObservable): IUnsubscribeOfObservable => {
        return subscribe((notification: IDefaultInNotificationsUnion<GInNextValue>): void => {
          switch (notification.name) {
            case 'next':
              lastValue = notification.value;
              break;
            case 'complete':
              childUnsubscribe = onFulfilled(lastValue)(emit);
              unsubscribe();
              break;
            case 'error':
              emit(notification as IErrorNotification);
              unsubscribe();
              break;
          }
        });
      },
    );

    return (): void => {
      unsubscribe();
      if (childUnsubscribe !== void 0) {
        childUnsubscribe();
      }
    };
  };

  // return thenObservable<GInNextValue, IFulfilledObservableOutNotifications<GOut>>(
  //   subscribe,
  //   onFulfilled,
  //   throwError,
  // );
}
