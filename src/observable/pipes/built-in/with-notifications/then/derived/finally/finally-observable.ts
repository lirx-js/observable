import { IErrorNotification } from '../../../../../../../misc/notifications/built-in/error/error-notification.type.js';
import { IDefaultNotificationsUnion } from '../../../../../../../misc/notifications/default-notifications-union.type.js';
import { throwError } from '../../../../../../built-in/from/with-notifications/others/throw-error/throw-error.js';
import { ISingleObservableNotifications } from '../../../../../../built-in/from/with-notifications/values/single/single-observable-notifications.type.js';
import { singleWithNotifications } from '../../../../../../built-in/from/with-notifications/values/single/single-with-notifications.js';
import { IObservable } from '../../../../../../type/observable.type.js';
import { IThenObservableInNotifications, thenObservable } from '../../then-observable.js';
import { fulfilledObservable } from '../fulfilled/fulfilled-observable.js';
import { IFinallyObservableCallback } from './finally-observable-callback.type.js';
import { IFinallyObservableOutNotifications } from './finally-observable-out-notifications.type.js';

export function finallyObservable<GInNextValue>(
  subscribe: IObservable<IThenObservableInNotifications<GInNextValue>>,
  onFinally: IFinallyObservableCallback<GInNextValue>,
): IObservable<IFinallyObservableOutNotifications<GInNextValue>> {
  return thenObservable<GInNextValue, IDefaultNotificationsUnion<GInNextValue>>(
    subscribe,
    (value: GInNextValue): IObservable<IFinallyObservableOutNotifications<GInNextValue>> => {
      return fulfilledObservable(
        onFinally({
          state: 'fulfilled',
          value,
        }),
        (): IObservable<ISingleObservableNotifications<GInNextValue>> => {
          return singleWithNotifications<GInNextValue>(value);
        },
      );
    },
    (error: unknown): IObservable<IFinallyObservableOutNotifications<GInNextValue>> => {
      return fulfilledObservable(
        onFinally({
          state: 'rejected',
          error,
        }),
        (): IObservable<IErrorNotification<unknown>> => {
          return throwError<unknown>(error);
        },
      );
    },
  );
}
