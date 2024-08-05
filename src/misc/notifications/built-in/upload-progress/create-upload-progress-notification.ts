import { IProgress } from '../../../progress/progress.type.js';
import { createNotification } from '../../create-notification.js';
import { UPLOAD_PROGRESS_NOTIFICATION_NAME } from './upload-progress-notification-name.constant.js';
import { IUploadProgressNotification } from './upload-progress-notification.type.js';

export function createUploadProgressNotification(progress: IProgress): IUploadProgressNotification {
  return createNotification<'upload-progress', IProgress>(
    UPLOAD_PROGRESS_NOTIFICATION_NAME,
    progress,
  );
}
