import { IObservable } from '../../../../../type/observable.type.js';
import { fromArray } from '../../iterable/from-array/from-array.js';

export function of<GValue>(...values: readonly GValue[]): IObservable<GValue> {
  return fromArray<GValue>(values);
}
