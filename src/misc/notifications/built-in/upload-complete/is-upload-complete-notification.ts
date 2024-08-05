import { isNotification } from '../../is-notification.js';
import { UPLOAD_COMPLETE_NOTIFICATION_NAME } from './upload-complete-notification-name.constant.js';
import { IUploadCompleteNotification } from './upload-complete-notification.type.js';

export function isUploadCompleteNotification(value: any): value is IUploadCompleteNotification {
  return isNotification<'upload-complete', void>(value, UPLOAD_COMPLETE_NOTIFICATION_NAME);
}
