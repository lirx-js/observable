import { IObservable } from '../../../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../../../type/observable-pipe.type.js';
import {
  IShareObservableWithMulticastReplaySourceOptions,
  shareObservableWithMulticastReplaySource,
} from './share-observable-with-multicast-replay-source.js';

export function shareObservablePipeWithMulticastReplaySource<GValue>(
  options?: IShareObservableWithMulticastReplaySourceOptions<GValue>,
): IObservablePipe<GValue, GValue> {
  return (subscribe: IObservable<GValue>): IObservable<GValue> => {
    return shareObservableWithMulticastReplaySource<GValue>(subscribe, options);
  };
}
