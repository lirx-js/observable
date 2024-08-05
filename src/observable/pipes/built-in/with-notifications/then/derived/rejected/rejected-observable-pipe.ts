import { IObservable } from '../../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../../type/observable-pipe.type.js';
import { IThenObservableOnRejected } from '../../then-observable-on-rejected.type.js';
import { IThenObservableInNotifications } from '../../then-observable.js';
import { IRejectedObservableOutNotifications } from './rejected-observable-out-notifications.type.js';
import { rejectedObservable } from './rejected-observable.js';

export function rejectedObservablePipe<GInNextValue, GOut>(
  onRejected: IThenObservableOnRejected<GOut>,
): IObservablePipe<
  IThenObservableInNotifications<GInNextValue>,
  IRejectedObservableOutNotifications<GInNextValue, GOut>
> {
  return (
    subscribe: IObservable<IThenObservableInNotifications<GInNextValue>>,
  ): IObservable<IRejectedObservableOutNotifications<GInNextValue, GOut>> => {
    return rejectedObservable<GInNextValue, GOut>(subscribe, onRejected);
  };
}
