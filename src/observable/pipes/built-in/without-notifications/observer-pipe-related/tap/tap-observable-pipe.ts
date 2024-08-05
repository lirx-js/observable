import { ITapFunction } from '../../../../../../observer/pipes/built-in/tap/tap-function.type.js';
import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { tapObservable } from './tap-observable.js';

export function tapObservablePipe<GValue>(
  tapFunction: ITapFunction<GValue>,
): IObservablePipe<GValue, GValue> {
  return (subscribe: IObservable<GValue>): IObservable<GValue> => {
    return tapObservable<GValue>(subscribe, tapFunction);
  };
}
