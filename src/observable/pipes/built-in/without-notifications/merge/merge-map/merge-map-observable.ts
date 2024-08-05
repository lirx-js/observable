import { IMapFunction } from '../../../../../../observer/pipes/built-in/map/map-function.type.js';
import { IObservable } from '../../../../../type/observable.type.js';
import { mapObservable } from '../../observer-pipe-related/map/map-observable.js';
import { mergeAllObservable } from '../merge-all/merge-all-observable.js';

export function mergeMapObservable<GIn, GOut>(
  subscribe: IObservable<GIn>,
  mapFunction: IMapFunction<GIn, IObservable<GOut>>,
  maxNumberOfSubscriptions?: number,
): IObservable<GOut> {
  return mergeAllObservable<GOut>(
    mapObservable<GIn, IObservable<GOut>>(subscribe, mapFunction),
    maxNumberOfSubscriptions,
  );
  // return pipeObservable(subscribe, [
  //   mapObservablePipe<GIn, IObservable<GOut>>(mapFunction),
  //   mergeAllObservablePipe<GOut>(maxNumberOfSubscriptions),
  // ]);
}
