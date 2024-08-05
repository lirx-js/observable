import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { debounceImmediateObservable } from './debounce-immediate-observable.js';

export function debounceImmediateObservablePipe<GValue>(): IObservablePipe<GValue, GValue> {
  return (subscribe: IObservable<GValue>): IObservable<GValue> => {
    return debounceImmediateObservable<GValue>(subscribe);
  };
}
