import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { debounceMicrotaskObservable } from './debounce-microtask-observable.js';

export function debounceMicrotaskObservablePipe<GValue>(): IObservablePipe<GValue, GValue> {
  return (subscribe: IObservable<GValue>): IObservable<GValue> => {
    return debounceMicrotaskObservable<GValue>(subscribe);
  };
}
