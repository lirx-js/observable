import { IObservable } from '../../../../../../../type/observable.type.js';
import { mapObservable } from '../../map-observable.js';

export function toNumberObservable<GValue>(subscribe: IObservable<GValue>): IObservable<number> {
  return mapObservable<GValue, number>(subscribe, Number);
}
