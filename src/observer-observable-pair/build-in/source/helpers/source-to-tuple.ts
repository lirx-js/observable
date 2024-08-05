import { IObserverObservableTuple } from '../../../type/observer-observable-tuple.type.js';
import { ISource } from '../type/source.type.js';

export function sourceToTuple<GValue>({
  emit,
  subscribe,
}: ISource<GValue>): IObserverObservableTuple<GValue> {
  return [emit, subscribe];
}
