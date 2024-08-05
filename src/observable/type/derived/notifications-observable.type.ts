import { IDefaultNotificationsUnion } from '../../../misc/notifications/default-notifications-union.type.js';
import { IObservable } from '../observable.type.js';

export type INotificationsObservable<GValue> = IObservable<IDefaultNotificationsUnion<GValue>>;
