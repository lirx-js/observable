import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { ITakeWhileObservablePredicateFunction } from './take-while-observable-predicate-function.type.js';
import { takeWhileObservable } from './take-while-observable.js';

export function takeWhileObservablePipe<GValue>(
  predicate: ITakeWhileObservablePredicateFunction<GValue>,
): IObservablePipe<GValue, GValue> {
  return (subscribe: IObservable<GValue>): IObservable<GValue> => {
    return takeWhileObservable<GValue>(subscribe, predicate);
  };
}
