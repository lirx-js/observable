import { IObservable } from '../../../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../../../type/observable-pipe.type.js';
import { mergeAllSingleObservable } from './merge-all-single-observable.js';

export function mergeAllSingleObservablePipe<GValue>(): IObservablePipe<
  IObservable<GValue>,
  GValue
> {
  return mergeAllSingleObservable;
}

// export function mergeAllSingleObservablePipe<GValue>(): IObservablePipe<IObservable<GValue>, GValue> {
//   return mergeAllObservablePipe<GValue>(1);
// }
