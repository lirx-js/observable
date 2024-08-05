import { isNotification } from '../../is-notification.js';
import { COMPLETE_NOTIFICATION_NAME } from './complete-notification-name.constant.js';
import { ICompleteNotification } from './complete-notification.type.js';

export function isCompleteNotification(value: any): value is ICompleteNotification {
  return isNotification<'complete', void>(value, COMPLETE_NOTIFICATION_NAME);
}
