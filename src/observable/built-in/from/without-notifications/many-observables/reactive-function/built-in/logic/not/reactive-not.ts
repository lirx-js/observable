import { mapObservable } from '../../../../../../../../pipes/built-in/without-notifications/observer-pipe-related/map/map-observable.js';
import { IObservable } from '../../../../../../../../type/observable.type.js';

export function reactiveNot(subscribe: IObservable<boolean>): IObservable<boolean> {
  return mapObservable(subscribe, not);
}

// export function reactiveNot(
//   ...observables: IReactiveFunctionObservables<typeof not>
// ): IObservable<ReturnType<typeof not>> {
//   return optimizedReactiveFunction(
//     observables,
//     not,
//   );
// }

function not(value: boolean): boolean {
  return !value;
}
