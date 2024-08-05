import { createNotification } from '../../create-notification.js';
import { COMPLETE_NOTIFICATION_NAME } from './complete-notification-name.constant.js';
import { ICompleteNotification } from './complete-notification.type.js';

export function createCompleteNotification(): ICompleteNotification {
  return createNotification<'complete', void>(COMPLETE_NOTIFICATION_NAME, void 0);
}
