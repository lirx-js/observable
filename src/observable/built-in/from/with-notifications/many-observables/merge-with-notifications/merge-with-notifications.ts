import { futureUndo, mergeUndoFunctions } from '@lirx/utils';
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
  IGenericMergeWithNotificationsInObservables,
  IMergeWithNotificationsObservableNotifications,
  IMergeWithNotificationsObservablesValues,
} from './merge-with-notifications-observable-notifications.type.js';

export function mergeWithNotifications<
  GObservables extends IGenericMergeWithNotificationsInObservables,
>(
  observables: GObservables,
): IObservable<IMergeWithNotificationsObservableNotifications<GObservables>> {
  type GValues = IMergeWithNotificationsObservablesValues<GObservables>;
  type GNotifications = IMergeWithNotificationsObservableNotifications<GObservables>;

  const length: number = observables.length;

  if (length === 0) {
    return emptyWithNotifications();
  } else {
    return (emit: IObserver<GNotifications>): IUnsubscribeOfObservable => {
      return futureUndo((unsubscribe: IUnsubscribeOfObservable): IUnsubscribeOfObservable => {
        const completed: boolean[] = Array.from({ length });
        let completeCount: number = 0;

        return mergeUndoFunctions(
          observables.map(
            (subscribe: IGenericObservable, index: number): IUnsubscribeOfObservable => {
              return futureUndo(
                (localUnsubscribe: IUnsubscribeOfObservable): IUnsubscribeOfObservable => {
                  return subscribe(
                    defaultNotificationObserver<GValues>(
                      /* next */ (value: GValues): void => {
                        emit(createNextNotification<GValues>(value));
                      },
                      /* complete */ (): void => {
                        if (!completed[index]) {
                          completed[index] = true;
                          completeCount++;
                        }
                        if (completeCount === length) {
                          emit(STATIC_COMPLETE_NOTIFICATION);
                          unsubscribe();
                        }
                        localUnsubscribe();
                      },
                      /* error */ (error: unknown): void => {
                        emit(createErrorNotification(error));
                        unsubscribe();
                        localUnsubscribe();
                      },
                    ),
                  );
                },
              );
            },
          ),
        );
      });
    };
  }
}
