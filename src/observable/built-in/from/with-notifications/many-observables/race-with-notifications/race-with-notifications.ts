import { futureUndo, IsRunningFunction, mergeUndoFunctions } from '@lirx/utils';
import { STATIC_COMPLETE_NOTIFICATION } from '../../../../../../misc/notifications/built-in/complete/complete-notification.constant.js';
import { createErrorNotification } from '../../../../../../misc/notifications/built-in/error/create-error-notification.js';
import { createNextNotification } from '../../../../../../misc/notifications/built-in/next/create-next-notification.js';
import { defaultNotificationObserver } from '../../../../../../misc/notifications/default-notification-observer.js';
import { IObserver } from '../../../../../../observer/type/observer.type.js';
import {
  IGenericObservable,
  IObservable,
  IUnsubscribeOfObservable,
} from '../../../../../type/observable.type.js';
import { emptyWithNotifications } from '../../values/empty/empty-with-notifications.js';
import {
  IGenericRaceWithNotificationsInObservables,
  IRaceWithNotificationsObservableNotifications,
  IRaceWithNotificationsObservablesValues,
} from './race-with-notifications-observable-notifications.type.js';

export function raceWithNotifications<
  GObservables extends IGenericRaceWithNotificationsInObservables,
>(
  observables: GObservables,
): IObservable<IRaceWithNotificationsObservableNotifications<GObservables>> {
  type GValues = IRaceWithNotificationsObservablesValues<GObservables>;
  type GNotifications = IRaceWithNotificationsObservableNotifications<GObservables>;

  const length: number = observables.length;

  if (length === 0) {
    return emptyWithNotifications();
  } else {
    return (emit: IObserver<GNotifications>): IUnsubscribeOfObservable => {
      let lastValue: GValues;

      return futureUndo(
        (
          unsubscribe: IUnsubscribeOfObservable,
          running: IsRunningFunction,
        ): IUnsubscribeOfObservable => {
          return mergeUndoFunctions(
            observables.map(
              (subscribe: IGenericObservable, index: number): IUnsubscribeOfObservable => {
                return subscribe(
                  defaultNotificationObserver<GValues>(
                    /* next */ (value: GValues): void => {
                      lastValue = value;
                    },
                    /* complete */ (): void => {
                      emit(createNextNotification<GValues>(lastValue));
                      if (running()) {
                        emit(STATIC_COMPLETE_NOTIFICATION);
                      }
                      unsubscribe();
                    },
                    /* error */ (error: unknown): void => {
                      emit(createErrorNotification(error));
                      unsubscribe();
                    },
                  ),
                );
              },
            ),
          );
        },
      );
    };
  }
}
