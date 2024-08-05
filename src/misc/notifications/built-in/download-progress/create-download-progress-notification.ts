import { IProgress } from '../../../progress/progress.type.js';
import { createNotification } from '../../create-notification.js';
import { DOWNLOAD_PROGRESS_NOTIFICATION_NAME } from './download-progress-notification-name.constant.js';
import { IDownloadProgressNotification } from './download-progress-notification.type.js';

export function createDownloadProgressNotification(
  progress: IProgress,
): IDownloadProgressNotification {
  return createNotification<'download-progress', IProgress>(
    DOWNLOAD_PROGRESS_NOTIFICATION_NAME,
    progress,
  );
}
