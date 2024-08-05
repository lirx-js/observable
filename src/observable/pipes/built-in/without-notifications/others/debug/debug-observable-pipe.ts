import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { debugObservable } from './debug-observable.js';

export function debugObservablePipe<GValue>(
  name: string,
  color?: string,
): IObservablePipe<GValue, GValue> {
  return (subscribe: IObservable<GValue>): IObservable<GValue> => {
    return debugObservable<GValue>(subscribe, name, color);
  };
}
