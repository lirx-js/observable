import { GenericFunction } from '@lirx/utils';
import { distinctObservable } from '../../../../../../pipes/built-in/without-notifications/observer-pipe-related/distinct/distinct-observable.js';
import { mapObservable } from '../../../../../../pipes/built-in/without-notifications/observer-pipe-related/map/map-observable.js';
import { debounceMicrotaskObservable } from '../../../../../../pipes/built-in/without-notifications/time-related/debounce-microtask/debounce-microtask-observable.js';
import {
  combineLatest,
  ICombineLatestObservablesValues,
} from '../../combine-latest/combine-latest.js';
import { IReactiveFunctionObservables, IReactiveFunctionReturn } from '../reactive-function.js';

export function optimizedReactiveFunction<GFunction extends GenericFunction>(
  observables: IReactiveFunctionObservables<GFunction>,
  fnc: GFunction,
): IReactiveFunctionReturn<GFunction> {
  type GObservables = IReactiveFunctionObservables<GFunction>;
  type GCombineLastObservables = ICombineLatestObservablesValues<GObservables>;
  type GOut = ReturnType<GFunction>;

  return distinctObservable<GOut>(
    mapObservable<GCombineLastObservables, GOut>(
      debounceMicrotaskObservable<GCombineLastObservables>(
        combineLatest<GObservables>(observables),
      ),
      (args: GCombineLastObservables): GOut => fnc(...(args as any)),
    ),
  );
  // return distinctObservable<GOut>(debounceMicrotaskObservable<GOut>(reactiveFunction<GFunction>(observables, fnc)));
}
