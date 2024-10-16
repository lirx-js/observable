import { MAP_FILTER_DISCARD } from '../../../../../../observer/pipes/built-in/map-filter/map-filter-discard.constant.js';
import {
  IMapFilterMapFunction,
  IMapFilterMapFunctionReturn,
} from '../../../../../../observer/pipes/built-in/map-filter/map-filter-map-function.type.js';
import { IObserver } from '../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../type/observable.type.js';

export function mapFilterObservable<GIn, GOut>(
  subscribe: IObservable<GIn>,
  mapFunction: IMapFilterMapFunction<GIn, GOut>,
): IObservable<GOut> {
  return (emit: IObserver<GOut>): IUnsubscribeOfObservable => {
    return subscribe((value: GIn): void => {
      const result: IMapFilterMapFunctionReturn<GOut> = mapFunction(value);
      if (result !== MAP_FILTER_DISCARD) {
        emit(result);
      }
    });
  };
  // return transformObservableWithObserverPipe<GIn, GOut>(subscribe, mapFilterObserverPipe<GIn, GOut>(mapFunction));
}
