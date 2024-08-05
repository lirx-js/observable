import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { IFindObservablePipeConditionFunction } from './find-observable-pipe-condition-function.type.js';
import { findObservable } from './find-observable.js';

export function findObservablePipe<GValue>(
  condition: IFindObservablePipeConditionFunction<GValue>,
): IObservablePipe<GValue, GValue> {
  return (subscribe: IObservable<GValue>): IObservable<GValue> => {
    return findObservable<GValue>(subscribe, condition);
  };
}
