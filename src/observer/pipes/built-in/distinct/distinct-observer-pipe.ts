import { DistinctOptions } from '@lirx/utils';
import { IObserver } from '../../../type/observer.type.js';
import { IObserverPipe } from '../../type/observer-pipe.type.js';
import { distinctObserver } from './distinct-observer.js';

/**
 * Returns an Observer that emits all items emitted by the source Observer that are distinct by comparison from previous values
 */
export function distinctObserverPipe<GValue>(
  options?: DistinctOptions<GValue>,
): IObserverPipe<GValue, GValue> {
  return (emit: IObserver<GValue>): IObserver<GValue> => {
    return distinctObserver<GValue>(emit, options);
  };
}
