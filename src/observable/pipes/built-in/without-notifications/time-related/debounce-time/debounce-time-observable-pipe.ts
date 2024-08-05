import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { debounceTimeObservable } from './debounce-time-observable.js';

export function debounceTimeObservablePipe<GValue>(
  duration: number,
): IObservablePipe<GValue, GValue> {
  return (subscribe: IObservable<GValue>): IObservable<GValue> => {
    return debounceTimeObservable<GValue>(subscribe, duration);
  };
}
