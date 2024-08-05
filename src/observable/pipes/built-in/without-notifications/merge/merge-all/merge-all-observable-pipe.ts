import { IHigherOrderObservable } from '../../../../../type/derived/higher-order-observable.type.js';
import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { mergeAllObservable } from './merge-all-observable.js';

export function mergeAllObservablePipe<GValue>(
  maxNumberOfSubscriptions?: number,
): IObservablePipe<IObservable<GValue>, GValue> {
  return (subscribe: IHigherOrderObservable<GValue>): IObservable<GValue> => {
    return mergeAllObservable<GValue>(subscribe, maxNumberOfSubscriptions);
  };
}
