import { IObservable } from '../../../../type/observable.type.js';
import { IObservablePipe } from '../../../type/observable-pipe.type.js';
import { IThenObservableOnFulfilled } from './then-observable-on-fulfilled.type.js';
import { IThenObservableOnRejected } from './then-observable-on-rejected.type.js';
import { IThenObservableInNotifications, thenObservable } from './then-observable.js';

export function thenObservablePipe<GInNextValue, GOut>(
  onFulfilled: IThenObservableOnFulfilled<GInNextValue, GOut>,
  onRejected: IThenObservableOnRejected<GOut>,
): IObservablePipe<IThenObservableInNotifications<GInNextValue>, GOut> {
  return (
    subscribe: IObservable<IThenObservableInNotifications<GInNextValue>>,
  ): IObservable<GOut> => {
    return thenObservable<GInNextValue, GOut>(subscribe, onFulfilled, onRejected);
  };
}
