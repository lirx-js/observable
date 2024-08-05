import { IDefaultInNotificationsUnion } from '../../../../../../../../misc/notifications/default-notifications-union.type.js';
import { IObservable } from '../../../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../../../type/observable-pipe.type.js';
import { INotificationsToLastValueObservableOnErrorFunction } from './notifications-to-last-value-observable-on-error-function.type.js';
import { notificationsToLastValueObservable } from './notifications-to-last-value-observable.js';

export function notificationsToLastValueObservablePipe<GValue>(
  onError?: INotificationsToLastValueObservableOnErrorFunction,
): IObservablePipe<IDefaultInNotificationsUnion<GValue>, GValue> {
  return (subscribe: IObservable<IDefaultInNotificationsUnion<GValue>>): IObservable<GValue> => {
    return notificationsToLastValueObservable<GValue>(subscribe, onError);
  };
}
