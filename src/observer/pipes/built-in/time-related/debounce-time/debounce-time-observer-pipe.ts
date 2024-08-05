import { IObserver } from '../../../../type/observer.type.js';
import { IObserverPipe } from '../../../type/observer-pipe.type.js';
import { debounceTimeObserver } from './debounce-time-observer.js';

/**
 * @deprecated
 * BAD because the timer cannot be cancelled
 */
export function debounceTimeObserverPipe<GValue>(duration: number): IObserverPipe<GValue, GValue> {
  return (emit: IObserver<GValue>): IObserver<GValue> => {
    return debounceTimeObserver<GValue>(emit, duration);
  };
}
