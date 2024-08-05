import { IGenericObservable, IObservable } from '../../../../../type/observable.type.js';
import { combineLatest, ICombineLatestObservablesValues } from './combine-latest.js';

export function combineLatestThrowIfEmpty<GObservables extends readonly IGenericObservable[]>(
  observables: GObservables,
): IObservable<ICombineLatestObservablesValues<GObservables>> {
  if (observables.length === 0) {
    throw new Error('Empty');
  } else {
    return combineLatest<GObservables>(observables);
  }
}
