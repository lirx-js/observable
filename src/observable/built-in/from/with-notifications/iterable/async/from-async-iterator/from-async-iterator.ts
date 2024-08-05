import { STATIC_COMPLETE_NOTIFICATION } from '../../../../../../../misc/notifications/built-in/complete/complete-notification.constant.js';
import { createErrorNotification } from '../../../../../../../misc/notifications/built-in/error/create-error-notification.js';
import { createNextNotification } from '../../../../../../../misc/notifications/built-in/next/create-next-notification.js';
import { IObserver } from '../../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../../type/observable.type.js';
import { IFromAsyncIteratorObservableNotifications } from './from-async-iterator-observable-notifications.type.js';

export function fromAsyncIterator<GValue>(
  asyncIterator: AsyncIterator<GValue>,
): IObservable<IFromAsyncIteratorObservableNotifications<GValue>> {
  type GNotificationsUnion = IFromAsyncIteratorObservableNotifications<GValue>;
  return (emit: IObserver<GNotificationsUnion>): IUnsubscribeOfObservable => {
    let running: boolean = true;

    (async (): Promise<void> => {
      while (running) {
        let result: IteratorResult<GValue>;
        try {
          result = await asyncIterator.next();
        } catch (error) {
          if (running) {
            emit(createErrorNotification(error));
          }
          return;
        }
        if (running) {
          if (result.done) {
            emit(STATIC_COMPLETE_NOTIFICATION);
            return;
          } else {
            emit(createNextNotification<GValue>(result.value));
          }
        }
      }

      if ('return' in asyncIterator) {
        (asyncIterator as AsyncGenerator).return(void 0);
      }
    })();

    return (): void => {
      running = false;
    };
  };
}
