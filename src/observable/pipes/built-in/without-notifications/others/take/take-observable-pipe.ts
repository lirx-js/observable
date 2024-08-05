import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { takeObservable } from './take-observable.js';

export function takeObservablePipe<GValue>(count: number): IObservablePipe<GValue, GValue> {
  return (subscribe: IObservable<GValue>): IObservable<GValue> => {
    return takeObservable<GValue>(subscribe, count);
  };
}
