import { DistinctOptions } from '@lirx/utils';
import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { distinctObservable } from './distinct-observable.js';

export function distinctObservablePipe<GValue>(
  options?: DistinctOptions<GValue>,
): IObservablePipe<GValue, GValue> {
  return (subscribe: IObservable<GValue>): IObservable<GValue> => {
    return distinctObservable<GValue>(subscribe, options);
  };
}
