import { createNotification } from '../../create-notification.js';
import { CLOSE_NOTIFICATION_NAME } from './close-notification-name.constant.js';
import { ICloseNotification } from './close-notification.type.js';

export function createCloseNotification<GValue>(value: GValue): ICloseNotification<GValue> {
  return createNotification<'close', GValue>(CLOSE_NOTIFICATION_NAME, value);
}
