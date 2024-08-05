import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { firstObservable } from './first-observable.js';

export function firstObservablePipe<GValue>(): IObservablePipe<GValue, GValue> {
  return (subscribe: IObservable<GValue>): IObservable<GValue> => {
    return firstObservable<GValue>(subscribe);
  };
}
