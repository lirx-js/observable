import { IObservable } from '../../../../type/observable.type.js';
import { IObservablePipe } from '../../../type/observable-pipe.type.js';
import { ISourceObservableOptions } from './source-observable-options.type.js';
import { sourceObservable } from './source-observable.js';

export function sourceObservablePipe<GValue>(
  options: ISourceObservableOptions<GValue>,
): IObservablePipe<GValue, GValue> {
  return (subscribe: IObservable<GValue>): IObservable<GValue> => {
    return sourceObservable<GValue>(subscribe, options);
  };
}
