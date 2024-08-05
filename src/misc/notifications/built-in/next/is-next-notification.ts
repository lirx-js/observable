import { isNotification } from '../../is-notification.js';
import { NEXT_NOTIFICATION_NAME } from './next-notification-name.constant.js';
import { INextNotification } from './next-notification.type.js';

export function isNextNotification<GValue>(value: any): value is INextNotification<GValue> {
  return isNotification<'next', GValue>(value, NEXT_NOTIFICATION_NAME);
}
