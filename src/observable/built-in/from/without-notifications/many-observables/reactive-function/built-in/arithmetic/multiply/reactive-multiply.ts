import { IObservable } from '../../../../../../../../type/observable.type.js';
import { optimizedReactiveFunction } from '../../../alternatives/optimized-reactive-function.js';
import { IReactiveFunctionObservables } from '../../../reactive-function.js';

export function reactiveMultiply(
  ...observables: IReactiveFunctionObservables<typeof multiply>
): IObservable<ReturnType<typeof multiply>> {
  return optimizedReactiveFunction(observables, multiply);
}

function multiply(a: number, b: number): number {
  return a * b;
}
