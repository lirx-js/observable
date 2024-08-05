import { IObservable } from '../../../../../../../../type/observable.type.js';
import { optimizedReactiveFunction } from '../../../alternatives/optimized-reactive-function.js';
import { IReactiveFunctionObservables } from '../../../reactive-function.js';

export function reactiveDivide(
  ...observables: IReactiveFunctionObservables<typeof divide>
): IObservable<ReturnType<typeof divide>> {
  return optimizedReactiveFunction(observables, divide);
}

function divide(a: number, b: number): number {
  return a / b;
}
