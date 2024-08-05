import { IObservable } from '../../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../../type/observable-pipe.type.js';
import { IThenObservableInNotifications } from '../../then-observable.js';
import { IThenAnyObservableCallback } from './then-any-observable-callback.type.js';
import { thenAnyObservable } from './then-any-observable.js';

export function thenAnyObservablePipe<GInNextValue, GOut>(
  onThenAny: IThenAnyObservableCallback<GInNextValue, GOut>,
): IObservablePipe<IThenObservableInNotifications<GInNextValue>, GOut> {
  return (
    subscribe: IObservable<IThenObservableInNotifications<GInNextValue>>,
  ): IObservable<GOut> => {
    return thenAnyObservable<GInNextValue, GOut>(subscribe, onThenAny);
  };
}
