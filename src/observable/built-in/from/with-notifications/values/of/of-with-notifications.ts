import { IObservable } from '../../../../../type/observable.type.js';
import { fromArrayWithNotifications } from '../../iterable/sync/from-array/from-array-with-notifications.js';
import { IOfObservableNotifications } from './of-observable-notifications.type.js';

export function ofWithNotifications<GValue>(
  ...values: GValue[]
): IObservable<IOfObservableNotifications<GValue>> {
  return fromArrayWithNotifications<GValue>(values);
}
