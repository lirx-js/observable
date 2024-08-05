import { IObservable } from '../../../../../../../../type/observable.type.js';
import { optimizedReactiveFunction } from '../../../alternatives/optimized-reactive-function.js';
import { IReactiveFunctionObservables } from '../../../reactive-function.js';

export function reactiveLowerThanOrEqual(
  ...observables: IReactiveFunctionObservables<typeof lowerThanOrEqual>
): IObservable<ReturnType<typeof lowerThanOrEqual>> {
  return optimizedReactiveFunction(observables, lowerThanOrEqual);
}

function lowerThanOrEqual(a: any, b: any): boolean {
  return a <= b;
}
