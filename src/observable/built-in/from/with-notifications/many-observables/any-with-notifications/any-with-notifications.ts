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
  IAnyWithNotificationsObservableNotifications,
  IAnyWithNotificationsObservablesValues,
  IGenericAnyWithNotificationsInObservables,
} from './any-with-notifications-observable-notifications.type.js';

export function anyWithNotifications<
  GObservables extends IGenericAnyWithNotificationsInObservables,
>(
  observables: GObservables,
): IObservable<IAnyWithNotificationsObservableNotifications<GObservables>> {
  type GValues = IAnyWithNotificationsObservablesValues<GObservables>;
  type GNotifications = IAnyWithNotificationsObservableNotifications<GObservables>;

  const length: number = observables.length;

  if (length === 0) {
    return emptyWithNotifications();
  } else {
    return (emit: IObserver<GNotifications>): IUnsubscribeOfObservable => {
      const values: unknown[] = Array.from({ length });
      const errored: boolean[] = Array.from({ length });
      let errorCount: number = 0;

      return futureUndo(
        (
          unsubscribe: IUnsubscribeOfObservable,
          running: IsRunningFunction,
        ): IUnsubscribeOfObservable => {
          return mergeUndoFunctions(
            observables.map(
              (subscribe: IGenericObservable, index: number): IUnsubscribeOfObservable => {
                return futureUndo(
                  (localUnsubscribe: IUnsubscribeOfObservable): IUnsubscribeOfObservable => {
                    return subscribe(
                      defaultNotificationObserver<GValues>(
                        /* next */ (value: GValues): void => {
                          values[index] = value;
                        },
                        /* complete */ (): void => {
                          emit(
                            createNextNotification<GValues>(values[index] as unknown as GValues),
                          );
                          if (running()) {
                            emit(STATIC_COMPLETE_NOTIFICATION);
                          }
                          unsubscribe();
                        },
                        /* error */ (error: unknown): void => {
                          if (!errored[index]) {
                            values[index] = error;
                            errored[index] = true;
                            errorCount++;
                          }
                          if (errorCount === length) {
                            emit(
                              createErrorNotification<AggregateError>(
                                new AggregateError(values, `All observables threw`),
                              ),
                            );
                            unsubscribe();
                          } else {
                            localUnsubscribe();
                          }
                        },
                      ),
                    );
                  },
                );
              },
            ),
          );
        },
      );
    };
  }
}
