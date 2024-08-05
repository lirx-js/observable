import { IMapFunction } from '../../../../../../observer/pipes/built-in/map/map-function.type.js';
import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { mapObservable } from './map-observable.js';

export function mapObservablePipe<GIn, GOut>(
  mapFunction: IMapFunction<GIn, GOut>,
): IObservablePipe<GIn, GOut> {
  return (subscribe: IObservable<GIn>): IObservable<GOut> => {
    return mapObservable<GIn, GOut>(subscribe, mapFunction);
  };
}
