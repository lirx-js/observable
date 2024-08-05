import { IObservable } from '../../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../../type/observable-pipe.type.js';
import { IThenObservableInNotifications } from '../../then-observable.js';
import { IFinallyObservableCallback } from './finally-observable-callback.type.js';
import { IFinallyObservableOutNotifications } from './finally-observable-out-notifications.type.js';
import { finallyObservable } from './finally-observable.js';

export function finallyObservablePipe<GInNextValue>(
  onFinally: IFinallyObservableCallback<GInNextValue>,
): IObservablePipe<
  IThenObservableInNotifications<GInNextValue>,
  IFinallyObservableOutNotifications<GInNextValue>
> {
  return (
    subscribe: IObservable<IThenObservableInNotifications<GInNextValue>>,
  ): IObservable<IFinallyObservableOutNotifications<GInNextValue>> => {
    return finallyObservable<GInNextValue>(subscribe, onFinally);
  };
}
