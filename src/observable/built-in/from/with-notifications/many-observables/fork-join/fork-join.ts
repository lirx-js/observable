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
import { singleWithNotifications } from '../../values/single/single-with-notifications.js';
import {
  IForkJoinObservableNotifications,
  IForkJoinObservablesValues,
  IGenericForkInObservables,
} from './fork-join-observable-notifications.type.js';

export function forkJoin<GObservables extends IGenericForkInObservables>(
  observables: GObservables,
): IObservable<IForkJoinObservableNotifications<GObservables>> {
  type GValues = IForkJoinObservablesValues<GObservables>;
  type GNotifications = IForkJoinObservableNotifications<GObservables>;

  const length: number = observables.length;

  if (length === 0) {
    return singleWithNotifications<GValues>([] as unknown as GValues);
  } else {
    return (emit: IObserver<GNotifications>): IUnsubscribeOfObservable => {
      const values: unknown[] = Array.from({ length });
      const completed: boolean[] = Array.from({ length });
      let completeCount: number = 0;

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
                          if (!completed[index]) {
                            completed[index] = true;
                            completeCount++;
                          }
                          if (completeCount === length) {
                            emit(createNextNotification<GValues>(values as unknown as GValues));
                            if (running()) {
                              emit(STATIC_COMPLETE_NOTIFICATION);
                            }
                            unsubscribe();
                          } else {
                            localUnsubscribe();
                          }
                        },
                        /* error */ (error: unknown): void => {
                          emit(createErrorNotification(error));
                          unsubscribe();
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
