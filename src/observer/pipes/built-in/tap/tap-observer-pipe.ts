import { IObserver } from '../../../type/observer.type.js';
import { IObserverPipe } from '../../type/observer-pipe.type.js';
import { ITapFunction } from './tap-function.type.js';
import { tapObserver } from './tap-observer.js';

export function tapObserverPipe<GValue>(
  tapFunction: ITapFunction<GValue>,
): IObserverPipe<GValue, GValue> {
  return (emit: IObserver<GValue>): IObserver<GValue> => {
    return tapObserver<GValue>(emit, tapFunction);
  };
}
