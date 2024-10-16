import { IObservable } from '../../../../../../../type/observable.type.js';
import { single } from '../../../../values/single/single.js';
import { optimizedReactiveFunction } from '../../alternatives/optimized-reactive-function.js';

/**
 * Creates an Observable from a string template.
 *  - reactiveTemplateString`a${source1}b${source2}c`
 */
export function reactiveTemplateString(
  parts: TemplateStringsArray | string[],
  ...observables: IObservable<any>[]
): IObservable<string> {
  const lengthMinusOne: number = parts.length - 1;
  if (lengthMinusOne === 0) {
    // meaning observables === 0
    return single(parts[0]);
  } else {
    return optimizedReactiveFunction(observables, (...values: any[]): string => {
      let str: string = '';
      for (let i = 0; i < lengthMinusOne; i++) {
        str += parts[i] + values[i];
      }
      return str + parts[lengthMinusOne];
    });
  }
}
