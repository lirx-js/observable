import { noop } from '@lirx/utils';
import { IObserver } from '../../observer/type/observer.type.js';
import { throwFunction } from '../helpers/throw-function.js';
import { IDefaultInNotificationsUnion } from './default-notifications-union.type.js';
import { IGenericNotification } from './notification.type.js';

export function defaultNotificationObserver<GValue>(
  next: IObserver<GValue> | undefined,
  complete?: IObserver<void> | undefined,
  error?: IObserver<unknown> | undefined,
  other?: IObserver<IGenericNotification> | undefined,
): IObserver<IDefaultInNotificationsUnion<GValue>> {
  if (next === void 0) {
    next = noop;
  }

  if (complete === void 0) {
    complete = noop;
  }

  if (error === void 0) {
    error = throwFunction;
  }

  if (other === void 0) {
    other = noop;
  }

  return (notification: IDefaultInNotificationsUnion<GValue>): void => {
    switch (notification.name) {
      case 'next':
        (next as IObserver<GValue>)(notification.value);
        break;
      case 'complete':
        (complete as IObserver<void>)();
        break;
      case 'error':
        (error as IObserver<unknown>)(notification.value);
        break;
      default:
        (other as IObserver<IGenericNotification>)(notification);
        break;
    }
  };
}

// export function defaultNotificationObserver<GValue>(
//   next: IObserver<GValue> | undefined,
//   complete?: IObserver<void> | undefined,
//   error?: IObserver<unknown> | undefined,
//   other?: IObserver<IGenericNotification> | undefined,
// ): IObserver<IDefaultInNotificationsUnion<GValue>> {
//   return (notification: IDefaultInNotificationsUnion<GValue>): void => {
//     switch (notification.name) {
//       case 'next':
//         if (next !== void 0) {
//           next(notification.value);
//         }
//         break;
//       case 'complete':
//         if (complete !== void 0) {
//           complete();
//         }
//         break;
//       case 'error':
//         if (error !== void 0) {
//           error(notification.value);
//         }
//         break;
//       default:
//         if (other !== void 0) {
//           other(notification);
//         }
//         break;
//     }
//   };
// }
