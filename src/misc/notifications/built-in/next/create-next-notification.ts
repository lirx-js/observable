import { createNotification } from '../../create-notification.js';
import { NEXT_NOTIFICATION_NAME } from './next-notification-name.constant.js';
import { INextNotification } from './next-notification.type.js';

export function createNextNotification<GValue>(value: GValue): INextNotification<GValue> {
  return createNotification<'next', GValue>(NEXT_NOTIFICATION_NAME, value);
}
