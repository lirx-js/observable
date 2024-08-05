import { IErrorNotification } from '../../../../../../../misc/notifications/built-in/error/error-notification.type.js';

export type IFulfilledObservableOutNotifications<GOut> = GOut | IErrorNotification;
