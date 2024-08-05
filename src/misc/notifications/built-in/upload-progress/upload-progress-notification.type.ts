import { IProgress } from '../../../progress/progress.type.js';
import { INotification } from '../../notification.type.js';

export type IUploadProgressNotification = INotification<'upload-progress', IProgress>;
