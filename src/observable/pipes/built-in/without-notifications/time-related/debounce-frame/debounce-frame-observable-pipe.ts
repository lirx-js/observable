import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { debounceFrameObservable } from './debounce-frame-observable.js';

export function debounceFrameObservablePipe<GValue>(): IObservablePipe<GValue, GValue> {
  return (subscribe: IObservable<GValue>): IObservable<GValue> => {
    return debounceFrameObservable<GValue>(subscribe);
  };
}
