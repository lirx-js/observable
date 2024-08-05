import { createNotification } from '../../create-notification.js';
import { ERROR_NOTIFICATION_NAME } from './error-notification-name.constant.js';
import { IErrorNotification } from './error-notification.type.js';

export function createErrorNotification<GError>(error: GError): IErrorNotification<GError> {
  return createNotification<'error', GError>(ERROR_NOTIFICATION_NAME, error);
}
