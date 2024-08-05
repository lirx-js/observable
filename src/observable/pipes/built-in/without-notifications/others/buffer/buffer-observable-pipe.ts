import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { bufferObservable } from './buffer-observable.js';

export function bufferObservablePipe<GValue>(
  closingObservable: IObservable<any>,
): IObservablePipe<GValue, GValue[]> {
  return (subscribe: IObservable<GValue>): IObservable<GValue[]> => {
    return bufferObservable<GValue>(subscribe, closingObservable);
  };
}
