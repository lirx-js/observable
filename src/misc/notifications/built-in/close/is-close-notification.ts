import { isNotification } from '../../is-notification.js';
import { CLOSE_NOTIFICATION_NAME } from './close-notification-name.constant.js';
import { ICloseNotification } from './close-notification.type.js';

export function isCloseNotification<GValue>(value: any): value is ICloseNotification<GValue> {
  return isNotification<'close', GValue>(value, CLOSE_NOTIFICATION_NAME);
}
