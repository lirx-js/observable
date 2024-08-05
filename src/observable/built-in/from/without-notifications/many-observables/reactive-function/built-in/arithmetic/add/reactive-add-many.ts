import { IObservable } from '../../../../../../../../type/observable.type.js';
import { optimizedReactiveFunction } from '../../../alternatives/optimized-reactive-function.js';
import { IReactiveFunctionObservables } from '../../../reactive-function.js';

export function reactiveAddMany(
  ...observables: IReactiveFunctionObservables<typeof addMany>
): IObservable<ReturnType<typeof addMany>> {
  return optimizedReactiveFunction(observables, addMany);
}

function addMany(...values: number[]): number {
  let result: number = 0;
  for (let i = 0, l = values.length; i < l; i++) {
    result += values[i];
  }
  return result;
}
