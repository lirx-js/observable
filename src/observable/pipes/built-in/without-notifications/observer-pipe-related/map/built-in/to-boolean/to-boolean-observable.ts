import { IObservable } from '../../../../../../../type/observable.type.js';
import { mapObservable } from '../../map-observable.js';

export function toBooleanObservable<GValue>(subscribe: IObservable<GValue>): IObservable<boolean> {
  return mapObservable<GValue, boolean>(subscribe, Boolean);
}
