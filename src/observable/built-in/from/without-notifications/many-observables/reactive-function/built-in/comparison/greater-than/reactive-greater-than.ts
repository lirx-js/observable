import { IObservable } from '../../../../../../../../type/observable.type.js';
import { optimizedReactiveFunction } from '../../../alternatives/optimized-reactive-function.js';
import { IReactiveFunctionObservables } from '../../../reactive-function.js';

export function reactiveGreaterThan(
  ...observables: IReactiveFunctionObservables<typeof greaterThan>
): IObservable<ReturnType<typeof greaterThan>> {
  return optimizedReactiveFunction(observables, greaterThan);
}

function greaterThan(a: any, b: any): boolean {
  return a > b;
}
