import { IMapFunction } from '../../../../../../observer/pipes/built-in/map/map-function.type.js';
import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { mergeMapObservable } from './merge-map-observable.js';

export function mergeMapObservablePipe<GIn, GOut>(
  mapFunction: IMapFunction<GIn, IObservable<GOut>>,
  maxNumberOfSubscriptions?: number,
): IObservablePipe<GIn, GOut> {
  return (subscribe: IObservable<GIn>): IObservable<GOut> => {
    return mergeMapObservable<GIn, GOut>(subscribe, mapFunction, maxNumberOfSubscriptions);
  };
}

// export function mergeMapObservablePipe<GIn, GOut>(
//   mapFunction: IMapFunction<GIn, IObservable<GOut>>,
//   maxNumberOfSubscriptions?: number,
// ): IObservablePipe<GIn, GOut> {
//   return pipeObservablePipes([
//     mapObservablePipe<GIn, IObservable<GOut>>(mapFunction),
//     mergeAllObservablePipe<GOut>(maxNumberOfSubscriptions),
//   ]);
// }
