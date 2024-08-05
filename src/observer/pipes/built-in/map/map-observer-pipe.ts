import { IObserver } from '../../../type/observer.type.js';
import { IObserverPipe } from '../../type/observer-pipe.type.js';
import { IMapFunction } from './map-function.type.js';
import { mapObserver } from './map-observer.js';

export function mapObserverPipe<GIn, GOut>(
  mapFunction: IMapFunction<GIn, GOut>,
): IObserverPipe<GIn, GOut> {
  return (emit: IObserver<GOut>): IObserver<GIn> => {
    return mapObserver<GIn, GOut>(emit, mapFunction);
  };
}
