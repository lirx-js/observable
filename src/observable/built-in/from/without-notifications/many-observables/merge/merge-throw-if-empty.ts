import { IGenericObservable, IObservable } from '../../../../../type/observable.type.js';
import { IMergeObservablesValues, merge } from './merge.js';

export function mergeThrowIfEmpty<GObservables extends readonly IGenericObservable[]>(
  observables: GObservables,
): IObservable<IMergeObservablesValues<GObservables>> {
  if (observables.length === 0) {
    throw new Error('Empty.');
  } else {
    return merge<GObservables>(observables);
  }
}
