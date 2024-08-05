import { noop } from '@lirx/utils';
import { STATIC_COMPLETE_NOTIFICATION } from '../../../../../../../misc/notifications/built-in/complete/complete-notification.constant.js';
import { createNextNotification } from '../../../../../../../misc/notifications/built-in/next/create-next-notification.js';
import { IObserver } from '../../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../../type/observable.type.js';
import { IFromArrayObservableNotifications } from './from-array-observable-notifications.type.js';

export function fromArrayWithNotifications<GValue>(
  array: ArrayLike<GValue>,
): IObservable<IFromArrayObservableNotifications<GValue>> {
  type GNotificationsUnion = IFromArrayObservableNotifications<GValue>;
  return (emit: IObserver<GNotificationsUnion>): IUnsubscribeOfObservable => {
    for (let i = 0, l = array.length; i < l; i++) {
      emit(createNextNotification<GValue>(array[i]));
    }
    emit(STATIC_COMPLETE_NOTIFICATION);
    return noop;
  };
}
