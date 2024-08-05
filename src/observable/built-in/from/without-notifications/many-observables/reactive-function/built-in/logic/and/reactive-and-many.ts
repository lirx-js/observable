import { IObservable } from '../../../../../../../../type/observable.type.js';
import { optimizedReactiveFunction } from '../../../alternatives/optimized-reactive-function.js';
import { IReactiveFunctionObservables } from '../../../reactive-function.js';

export function reactiveAndMany(
  ...observables: IReactiveFunctionObservables<typeof andMany>
): IObservable<ReturnType<typeof andMany>> {
  return optimizedReactiveFunction(observables, andMany);
}

// export function reactiveAndMany(
//   observables: IReactiveFunctionObservables<typeof andMany>,
//   distinct: boolean = true,
// ): IObservable<ReturnType<typeof andMany>> {
//   return reactiveFunction(
//     andMany,
//     observables,
//     distinct,
//   );
// }

function andMany(...values: boolean[]): boolean {
  for (let i = 0, l = values.length; i < l; i++) {
    if (!values[i]) {
      return false;
    }
  }
  return true;
}
