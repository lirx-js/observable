import { IObserver } from '../../../type/observer.type.js';
import { IObserverPipe } from '../../type/observer-pipe.type.js';
import { IMapFilterMapFunction } from './map-filter-map-function.type.js';
import { mapFilterObserver } from './map-filter-observer.js';

export function mapFilterObserverPipe<GIn, GOut>(
  mapFunction: IMapFilterMapFunction<GIn, GOut>,
): IObserverPipe<GIn, GOut> {
  return (emit: IObserver<GOut>): IObserver<GIn> => {
    return mapFilterObserver<GIn, GOut>(emit, mapFunction);
  };
}
