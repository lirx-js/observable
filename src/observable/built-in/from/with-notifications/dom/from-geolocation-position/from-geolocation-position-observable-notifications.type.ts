import { IErrorNotification } from '../../../../../../misc/notifications/built-in/error/error-notification.type.js';
import { INextNotification } from '../../../../../../misc/notifications/built-in/next/next-notification.type.js';

export type IFromGeolocationPositionObservableNotifications =
  | INextNotification<GeolocationPosition>
  | IErrorNotification<GeolocationPositionError>;
