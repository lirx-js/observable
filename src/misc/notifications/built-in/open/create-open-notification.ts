import { createNotification } from '../../create-notification.js';
import { OPEN_NOTIFICATION_NAME } from './open-notification-name.constant.js';
import { IOpenNotification } from './open-notification.type.js';

export function createOpenNotification<GValue>(value: GValue): IOpenNotification<GValue> {
  return createNotification<'open', GValue>(OPEN_NOTIFICATION_NAME, value);
}
