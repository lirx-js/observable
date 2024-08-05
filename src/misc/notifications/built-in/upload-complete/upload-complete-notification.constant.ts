import { createUploadCompleteNotification } from './create-upload-complete-notification.js';
import { IUploadCompleteNotification } from './upload-complete-notification.type.js';

export const STATIC_UPLOAD_COMPLETE_NOTIFICATION: IUploadCompleteNotification =
  createUploadCompleteNotification();
