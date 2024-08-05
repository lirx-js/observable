import { IObservable } from '../../../../../../../type/observable.type.js';
import { mapObservable } from '../../map-observable.js';

export function toStringObservable<GValue>(subscribe: IObservable<GValue>): IObservable<string> {
  return mapObservable<GValue, string>(subscribe, String);
}
