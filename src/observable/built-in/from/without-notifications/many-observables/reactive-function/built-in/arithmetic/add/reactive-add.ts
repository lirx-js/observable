import { IObservable } from '../../../../../../../../type/observable.type.js';
import { optimizedReactiveFunction } from '../../../alternatives/optimized-reactive-function.js';
import { IReactiveFunctionObservables } from '../../../reactive-function.js';

export function reactiveAdd(
  ...observables: IReactiveFunctionObservables<typeof add>
): IObservable<ReturnType<typeof add>> {
  return optimizedReactiveFunction(observables, add);
}

function add(a: number, b: number): number {
  return a + b;
}
