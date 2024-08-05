import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { variationObservable } from './variation-observable.js';
import { IVariation } from './variation.type.js';

export function variationObservablePipe<GValue>(): IObservablePipe<GValue, IVariation<GValue>> {
  return (subscribe: IObservable<GValue>): IObservable<IVariation<GValue>> => {
    return variationObservable<GValue>(subscribe);
  };
}
