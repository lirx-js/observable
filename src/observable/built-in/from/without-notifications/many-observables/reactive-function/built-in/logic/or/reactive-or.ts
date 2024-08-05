import { IObservable } from '../../../../../../../../type/observable.type.js';
import { optimizedReactiveFunction } from '../../../alternatives/optimized-reactive-function.js';
import { IReactiveFunctionObservables } from '../../../reactive-function.js';

export function reactiveOr(
  ...observables: IReactiveFunctionObservables<typeof or>
): IObservable<ReturnType<typeof or>> {
  return optimizedReactiveFunction(observables, or);
}

function or(a: boolean, b: boolean): boolean {
  return a || b;
}
