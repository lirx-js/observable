import { isNotification } from '../../is-notification.js';
import { ERROR_NOTIFICATION_NAME } from './error-notification-name.constant.js';
import { IErrorNotification } from './error-notification.type.js';

export function isErrorNotification<GValue = any>(value: any): value is IErrorNotification<GValue> {
  return isNotification<'error', GValue>(value, ERROR_NOTIFICATION_NAME);
}
