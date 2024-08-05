import { IDefaultInNotificationsUnion } from '../../../../../../misc/notifications/default-notifications-union.type.js';
import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { INotificationsToValuesObservableOnErrorFunction } from './notifications-to-values-observable-on-error-function.type.js';
import { notificationsToValuesObservable } from './notifications-to-values-observable.js';

export function notificationsToValuesObservablePipe<GValue>(
  onError?: INotificationsToValuesObservableOnErrorFunction,
  maxNumberOfValues?: number,
): IObservablePipe<IDefaultInNotificationsUnion<GValue>, GValue[]> {
  return (subscribe: IObservable<IDefaultInNotificationsUnion<GValue>>): IObservable<GValue[]> => {
    return notificationsToValuesObservable<GValue>(subscribe, onError, maxNumberOfValues);
  };
}
