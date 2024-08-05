import { IObservable } from '../../../../../../type/observable.type.js';
import { IThenObservableInNotifications, thenObservable } from '../../then-observable.js';
import { IThenAnyObservableCallback } from './then-any-observable-callback.type.js';

export function thenAnyObservable<GInNextValue, GOut>(
  subscribe: IObservable<IThenObservableInNotifications<GInNextValue>>,
  onThenAny: IThenAnyObservableCallback<GInNextValue, GOut>,
): IObservable<GOut> {
  return thenObservable<GInNextValue, GOut>(
    subscribe,
    (value: GInNextValue): IObservable<GOut> => {
      return onThenAny({
        state: 'fulfilled',
        value,
      });
    },
    (error: unknown): IObservable<GOut> => {
      return onThenAny({
        state: 'rejected',
        error,
      });
    },
  );
}
