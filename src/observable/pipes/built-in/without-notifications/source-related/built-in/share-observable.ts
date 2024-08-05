import { createMulticastSource } from '../../../../../../observer-observable-pair/build-in/source/built-in/multicast-source/create-multicast-source.js';
import { IObservable } from '../../../../../type/observable.type.js';
import { ISourceObservableOptions } from '../source-observable-options.type.js';
import { sourceObservable } from '../source-observable.js';
import { IShareObservablePipeCreateSource } from './share-observable-pipe-create-source.type.js';

export interface IShareObservableOptions<GValue>
  extends Omit<ISourceObservableOptions<GValue>, 'createSource' | 'onSubscribe' | 'onUnsubscribe'> {
  createSource?: IShareObservablePipeCreateSource<GValue>;
}

export function shareObservable<GValue>(
  subscribe: IObservable<GValue>,
  { createSource = createMulticastSource, ...options }: IShareObservableOptions<GValue> = {},
): IObservable<GValue> {
  let observersCount: number = 0;

  return sourceObservable<GValue>(subscribe, {
    createSource,
    onSubscribe: (): boolean => {
      observersCount++;
      return observersCount === 1;
    },
    onUnsubscribe: (): boolean => {
      observersCount--;
      return observersCount === 0;
    },
    ...options,
  });
}
