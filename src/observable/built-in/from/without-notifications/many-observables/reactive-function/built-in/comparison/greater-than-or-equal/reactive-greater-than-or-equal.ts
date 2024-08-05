import { IObservable } from '../../../../../../../../type/observable.type.js';
import { optimizedReactiveFunction } from '../../../alternatives/optimized-reactive-function.js';
import { IReactiveFunctionObservables } from '../../../reactive-function.js';

export function reactiveGreaterThanOrEqual(
  ...observables: IReactiveFunctionObservables<typeof greaterThanOrEqual>
): IObservable<ReturnType<typeof greaterThanOrEqual>> {
  return optimizedReactiveFunction(observables, greaterThanOrEqual);
}

function greaterThanOrEqual(a: any, b: any): boolean {
  return a >= b;
}
