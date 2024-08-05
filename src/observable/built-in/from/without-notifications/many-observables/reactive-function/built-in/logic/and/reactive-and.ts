import { IObservable } from '../../../../../../../../type/observable.type.js';
import { optimizedReactiveFunction } from '../../../alternatives/optimized-reactive-function.js';
import { IReactiveFunctionObservables } from '../../../reactive-function.js';

export function reactiveAnd(
  ...observables: IReactiveFunctionObservables<typeof and>
): IObservable<ReturnType<typeof and>> {
  return optimizedReactiveFunction(observables, and);
}

function and(a: boolean, b: boolean): boolean {
  return a && b;
}
