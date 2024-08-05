import { IObservable } from '../../../../../../observable/type/observable.type.js';
import { IObserver } from '../../../../../../observer/type/observer.type.js';
import { ICreateReplayLastSourceInitialValue } from '../create-replay-last-source.js';
import { createMulticastReplayLastSource } from './create-multicast-replay-last-source.js';

export type ILetTuple<GValue> = [
  emit: IObserver<GValue>,
  subscribe: IObservable<GValue>,
  getValue: () => GValue,
];

export function let$$<GValue>(
  ...initialValue: ICreateReplayLastSourceInitialValue<GValue>
): ILetTuple<GValue> {
  const { emit, subscribe, getValue } = createMulticastReplayLastSource<GValue>(...initialValue);
  return [emit, subscribe, getValue];
}
