import { isNotification } from '../../is-notification.js';
import { OPEN_NOTIFICATION_NAME } from './open-notification-name.constant.js';
import { IOpenNotification } from './open-notification.type.js';

export function isOpenNotification<GValue>(value: any): value is IOpenNotification<GValue> {
  return isNotification<'open', GValue>(value, OPEN_NOTIFICATION_NAME);
}
