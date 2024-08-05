import { IObservable } from '../../../../../../../../type/observable.type.js';
import { optimizedReactiveFunction } from '../../../alternatives/optimized-reactive-function.js';
import { IReactiveFunctionObservables } from '../../../reactive-function.js';

export function reactiveSubtract(
  ...observables: IReactiveFunctionObservables<typeof subtract>
): IObservable<ReturnType<typeof subtract>> {
  return optimizedReactiveFunction(observables, subtract);
}

function subtract(a: number, b: number): number {
  return a - b;
}
