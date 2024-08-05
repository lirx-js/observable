import { IObservable } from '../../../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../../../type/observable-pipe.type.js';
import {
  IShareObservableWithMulticastReplayLastSourceOptions,
  shareObservableWithMulticastReplayLastSource,
} from './share-observable-with-multicast-replay-last-source.js';

export function shareObservablePipeWithMulticastReplayLastSource<GValue>(
  options?: IShareObservableWithMulticastReplayLastSourceOptions<GValue>,
): IObservablePipe<GValue, GValue> {
  return (subscribe: IObservable<GValue>): IObservable<GValue> => {
    return shareObservableWithMulticastReplayLastSource<GValue>(subscribe, options);
  };
}
