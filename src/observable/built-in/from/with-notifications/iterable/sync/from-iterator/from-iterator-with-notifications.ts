import { noop } from '@lirx/utils';
import {
  STATIC_COMPLETE_NOTIFICATION
} from '../../../../../../../misc/notifications/built-in/complete/complete-notification.constant.js';
import {
  createErrorNotification
} from '../../../../../../../misc/notifications/built-in/error/create-error-notification.js';
import {
  createNextNotification
} from '../../../../../../../misc/notifications/built-in/next/create-next-notification.js';
import { IObserver } from '../../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../../type/observable.type.js';
import {
  IFromIteratorObservableNotifications
} from './from-iterator-observable-notifications.type.js';

/**
 * WARN use with caution: it's possible that you subscribe twice to the same Iterator, in this case the emitted values probably won't be what you expect
 */
export function fromIteratorWithNotifications<GValue>(
  iterator: Iterator<GValue>,
): IObservable<IFromIteratorObservableNotifications<GValue>> {
  type GNotificationsUnion = IFromIteratorObservableNotifications<GValue>;
  return (emit: IObserver<GNotificationsUnion>): IUnsubscribeOfObservable => {
    try {
      let result: IteratorResult<GValue>;
      while (!(result = iterator.next()).done) {
        emit(createNextNotification<GValue>(result.value));
      }
      emit(STATIC_COMPLETE_NOTIFICATION);
    } catch (error: unknown) {
      emit(createErrorNotification(error));
    }
    return noop;
  };
}
