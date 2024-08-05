import { IObservable } from '../../../../../../../../type/observable.type.js';
import { optimizedReactiveFunction } from '../../../alternatives/optimized-reactive-function.js';
import { IReactiveFunctionObservables } from '../../../reactive-function.js';

export function reactiveLowerThan(
  ...observables: IReactiveFunctionObservables<typeof lowerThan>
): IObservable<ReturnType<typeof lowerThan>> {
  return optimizedReactiveFunction(observables, lowerThan);
}

function lowerThan(a: any, b: any): boolean {
  return a < b;
}
