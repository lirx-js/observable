import { IMapFilterMapFunction } from '../../../../../../observer/pipes/built-in/map-filter/map-filter-map-function.type.js';
import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { mapFilterObservable } from './map-filter-observable.js';

export function mapFilterObservablePipe<GIn, GOut>(
  mapFunction: IMapFilterMapFunction<GIn, GOut>,
): IObservablePipe<GIn, GOut> {
  return (subscribe: IObservable<GIn>): IObservable<GOut> => {
    return mapFilterObservable<GIn, GOut>(subscribe, mapFunction);
  };
}
