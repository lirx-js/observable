import { IProgress } from '../../../progress/progress.type.js';
import { isNotification } from '../../is-notification.js';
import { DOWNLOAD_PROGRESS_NOTIFICATION_NAME } from './download-progress-notification-name.constant.js';
import { IDownloadProgressNotification } from './download-progress-notification.type.js';

export function isDownloadProgressNotification(value: any): value is IDownloadProgressNotification {
  return isNotification<'download-progress', IProgress>(value, DOWNLOAD_PROGRESS_NOTIFICATION_NAME);
}
