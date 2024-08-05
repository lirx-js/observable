import { IProgress } from '../../../progress/progress.type.js';
import { isNotification } from '../../is-notification.js';
import { UPLOAD_PROGRESS_NOTIFICATION_NAME } from './upload-progress-notification-name.constant.js';
import { IUploadProgressNotification } from './upload-progress-notification.type.js';

export function isUploadProgressNotification(value: any): value is IUploadProgressNotification {
  return isNotification<'upload-progress', IProgress>(value, UPLOAD_PROGRESS_NOTIFICATION_NAME);
}
