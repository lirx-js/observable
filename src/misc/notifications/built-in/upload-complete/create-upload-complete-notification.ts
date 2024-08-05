import { createNotification } from '../../create-notification.js';
import { UPLOAD_COMPLETE_NOTIFICATION_NAME } from './upload-complete-notification-name.constant.js';
import { IUploadCompleteNotification } from './upload-complete-notification.type.js';

export function createUploadCompleteNotification(): IUploadCompleteNotification {
  return createNotification<'upload-complete', void>(UPLOAD_COMPLETE_NOTIFICATION_NAME, void 0);
}
