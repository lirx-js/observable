import { IObservable } from '../../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../../type/observable-pipe.type.js';
import { IThenObservableOnFulfilled } from '../../then-observable-on-fulfilled.type.js';
import { IThenObservableInNotifications } from '../../then-observable.js';
import { IFulfilledObservableOutNotifications } from './fulfilled-observable-out-notifications.type.js';
import { fulfilledObservable } from './fulfilled-observable.js';

export function fulfilledObservablePipe<GInNextValue, GOut>(
  onFulfilled: IThenObservableOnFulfilled<GInNextValue, GOut>,
): IObservablePipe<
  IThenObservableInNotifications<GInNextValue>,
  IFulfilledObservableOutNotifications<GOut>
> {
  return (
    subscribe: IObservable<IThenObservableInNotifications<GInNextValue>>,
  ): IObservable<IFulfilledObservableOutNotifications<GOut>> => {
    return fulfilledObservable<GInNextValue, GOut>(subscribe, onFulfilled);
  };
}
