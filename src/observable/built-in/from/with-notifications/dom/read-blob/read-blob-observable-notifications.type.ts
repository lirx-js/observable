import { IProgressNotification } from '../../../../../../misc/notifications/built-in/progress-notification.js';
import { IDefaultNotificationsUnion } from '../../../../../../misc/notifications/default-notifications-union.type.js';

export interface IFileReaderFormatsToTypeMap {
  'data-url': string;
  text: string;
  'array-buffer': ArrayBuffer;
}

export type IFileReaderReadType = keyof IFileReaderFormatsToTypeMap;

export type IInferFileReaderReturnTypeFromReadType<GReadType extends IFileReaderReadType> =
  IFileReaderFormatsToTypeMap[GReadType];

export type IReadBlobObservableNotifications<GReadType extends IFileReaderReadType> =
  | IDefaultNotificationsUnion<IInferFileReaderReturnTypeFromReadType<GReadType>>
  | IProgressNotification;
