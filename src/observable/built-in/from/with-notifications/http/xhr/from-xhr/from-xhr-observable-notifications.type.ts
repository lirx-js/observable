import { IDownloadProgressNotification } from '../../../../../../../misc/notifications/built-in/download-progress/download-progress-notification.type.js';
import { IUploadCompleteNotification } from '../../../../../../../misc/notifications/built-in/upload-complete/upload-complete-notification.type.js';
import { IUploadProgressNotification } from '../../../../../../../misc/notifications/built-in/upload-progress/upload-progress-notification.type.js';
import { IDefaultNotificationsUnion } from '../../../../../../../misc/notifications/default-notifications-union.type.js';

export interface IFromXHRObservableOptions {
  useReadableStream?: boolean; // (default: true) - if you want to use ReadableStream. INFO won't work for too big downloads
}

export type IFromXHRObservableNotifications =
  | IDefaultNotificationsUnion<Response>
  | IUploadProgressNotification
  | IUploadCompleteNotification
  | IDownloadProgressNotification;
