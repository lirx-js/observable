import { IObservable } from '../../../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../../../type/observable-pipe.type.js';
import { toStringObservable } from './to-string-observable.js';

export function toStringObservablePipe<GValue>(): IObservablePipe<GValue, string> {
  return (subscribe: IObservable<GValue>): IObservable<string> => {
    return toStringObservable<GValue>(subscribe);
  };
}
