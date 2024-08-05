import { IObservable } from '../../../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../../../type/observable-pipe.type.js';
import { toNumberObservable } from './to-number-observable.js';

export function toNumberObservablePipe<GValue>(): IObservablePipe<GValue, number> {
  return (subscribe: IObservable<GValue>): IObservable<number> => {
    return toNumberObservable<GValue>(subscribe);
  };
}
