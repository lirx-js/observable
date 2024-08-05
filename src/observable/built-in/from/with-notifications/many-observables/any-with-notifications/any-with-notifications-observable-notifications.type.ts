import { TupleTypes } from '@lirx/utils';
import { INextNotification } from '../../../../../../misc/notifications/built-in/next/next-notification.type.js';
import {
  IDefaultInNotificationsUnion,
  IDefaultNotificationsUnion,
} from '../../../../../../misc/notifications/default-notifications-union.type.js';
import { IObservable } from '../../../../../type/observable.type.js';

export type IGenericAnyWithNotificationsInNotifications = IDefaultInNotificationsUnion<any>;

export type IGenericAnyWithNotificationsInObservable =
  IObservable<IGenericAnyWithNotificationsInNotifications>;

export type IGenericAnyWithNotificationsInObservables =
  readonly IGenericAnyWithNotificationsInObservable[];

export type IAnyWithNotificationsObservablesValues<
  GObservables extends IGenericAnyWithNotificationsInObservables,
> = TupleTypes<{
  [GKey in keyof GObservables]: GObservables[GKey] extends IObservable<infer GNotificationUnion>
    ? GNotificationUnion extends INextNotification<infer GValue>
      ? GValue
      : never
    : never;
}>;

export type IAnyWithNotificationsObservableNotifications<
  GObservables extends IGenericAnyWithNotificationsInObservables,
> = IDefaultNotificationsUnion<IAnyWithNotificationsObservablesValues<GObservables>>;
