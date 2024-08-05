import { IGenericFunction } from '@lirx/utils';
import { mapObservable } from '../../../../../pipes/built-in/without-notifications/observer-pipe-related/map/map-observable.js';
import { IMapValueTupleToObservableTuple } from '../../../../../type/helpers/map-value-tuple-to-observable-tuple.type.js';
import { IObservable } from '../../../../../type/observable.type.js';
import {
  combineLatest,
  ICombineLatestObservablesValues,
} from '../combine-latest/combine-latest.js';

export type IReactiveFunctionObservables<GFunction extends IGenericFunction> =
  IMapValueTupleToObservableTuple<Parameters<GFunction>>;
export type IReactiveFunctionReturn<GFunction extends IGenericFunction> = IObservable<
  ReturnType<GFunction>
>;

export function reactiveFunction<GFunction extends IGenericFunction>(
  observables: IReactiveFunctionObservables<GFunction>,
  fnc: GFunction,
): IReactiveFunctionReturn<GFunction> {
  type GObservables = IReactiveFunctionObservables<GFunction>;
  type GCombineLastObservables = ICombineLatestObservablesValues<GObservables>;
  type GOut = ReturnType<GFunction>;

  return mapObservable<GCombineLastObservables, GOut>(
    combineLatest<GObservables>(observables),
    (args: GCombineLastObservables): GOut => fnc(...(args as any)),
  );
}

// export function reactiveFunction<GFunction extends IGenericFunction>(
//   fnc: GFunction,
//   observables: IReactiveFunctionObservables<GFunction>,
// ): IReactiveFunctionReturn<GFunction> {
//   type GObservables = IReactiveFunctionObservables<GFunction>;
//   type GCombineLastObservables = ICombineLatestObservablesValues<GObservables>;
//   type GOut = ReturnType<GFunction>;
//
//   return pipeObservable(combineLatest<GObservables>(observables), [
//     mapObservablePipe<GCombineLastObservables, GOut>((args: GCombineLastObservables) => fnc(...(args as any))),
//   ]);
// }
