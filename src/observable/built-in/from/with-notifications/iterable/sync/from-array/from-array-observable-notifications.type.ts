import { ICompleteNotification } from '../../../../../../../misc/notifications/built-in/complete/complete-notification.type.js';
import { INextNotification } from '../../../../../../../misc/notifications/built-in/next/next-notification.type.js';

export type IFromArrayObservableNotifications<GValue> =
  | INextNotification<GValue>
  | ICompleteNotification;
