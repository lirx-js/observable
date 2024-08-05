import { IObservable } from '../../../../../../../../type/observable.type.js';
import { optimizedReactiveFunction } from '../../../alternatives/optimized-reactive-function.js';
import { IReactiveFunctionObservables } from '../../../reactive-function.js';

export function reactiveNotEqual(
  ...observables: IReactiveFunctionObservables<typeof notEqual>
): IObservable<ReturnType<typeof notEqual>> {
  return optimizedReactiveFunction(observables, notEqual);
}

function notEqual(a: any, b: any): boolean {
  return a !== b;
}
