import { IDefaultInNotificationsUnion } from '../../../../../../../../misc/notifications/default-notifications-union.type.js';
import { IObservable } from '../../../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../../../type/observable-pipe.type.js';
import { INotificationsToImmediateObservableOnErrorFunction } from './notifications-to-immediate-observable-on-error-function.type.js';
import { notificationsToImmediateObservable } from './notifications-to-immediate-observable.js';

export function notificationsToImmediateObservablePipe<GValue>(
  onError?: INotificationsToImmediateObservableOnErrorFunction,
): IObservablePipe<IDefaultInNotificationsUnion<GValue>, GValue> {
  return (subscribe: IObservable<IDefaultInNotificationsUnion<GValue>>): IObservable<GValue> => {
    return notificationsToImmediateObservable<GValue>(subscribe, onError);
  };
}
