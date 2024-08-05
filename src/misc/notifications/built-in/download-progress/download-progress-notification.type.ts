import { IProgress } from '../../../progress/progress.type.js';
import { INotification } from '../../notification.type.js';

export type IDownloadProgressNotification = INotification<'download-progress', IProgress>;
