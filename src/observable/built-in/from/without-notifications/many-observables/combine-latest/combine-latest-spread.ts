import { IGenericObservable, IObservable } from '../../../../../type/observable.type.js';
import { combineLatest, ICombineLatestObservablesValues } from './combine-latest.js';

export function combineLatestSpread<GObservables extends readonly IGenericObservable[]>(
  ...observables: GObservables
): IObservable<ICombineLatestObservablesValues<GObservables>> {
  return combineLatest<GObservables>(observables);
}
