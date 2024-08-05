import { IObservable } from '../../../../../../../../type/observable.type.js';
import { optimizedReactiveFunction } from '../../../alternatives/optimized-reactive-function.js';
import { IReactiveFunctionObservables } from '../../../reactive-function.js';

export function reactiveEqual(
  ...observables: IReactiveFunctionObservables<typeof equal>
): IObservable<ReturnType<typeof equal>> {
  return optimizedReactiveFunction(observables, equal);
}

function equal(a: any, b: any): boolean {
  return a === b;
}
