import { IObservable } from '../../../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../../../type/observable-pipe.type.js';
import { bufferTimeObservable } from './buffer-time-observable.js';

export function bufferTimeObservablePipe<GValue>(
  duration: number,
): IObservablePipe<GValue, GValue[]> {
  return (subscribe: IObservable<GValue>): IObservable<GValue[]> => {
    return bufferTimeObservable<GValue>(subscribe, duration);
  };
}
