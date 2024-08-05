import { singleWithNotifications } from '../../../../../../built-in/from/with-notifications/values/single/single-with-notifications.js';
import { IObservable } from '../../../../../../type/observable.type.js';
import { IThenObservableOnRejected } from '../../then-observable-on-rejected.type.js';
import { IThenObservableInNotifications, thenObservable } from '../../then-observable.js';
import { IRejectedObservableOutNotifications } from './rejected-observable-out-notifications.type.js';

export function rejectedObservable<GInNextValue, GOut>(
  subscribe: IObservable<IThenObservableInNotifications<GInNextValue>>,
  onRejected: IThenObservableOnRejected<GOut>,
): IObservable<IRejectedObservableOutNotifications<GInNextValue, GOut>> {
  return thenObservable<GInNextValue, IRejectedObservableOutNotifications<GInNextValue, GOut>>(
    subscribe,
    singleWithNotifications,
    onRejected,
  );
}
