import { IObserver } from '../../../type/observer.type.js';
import { IMapFunction } from './map-function.type.js';

export function mapObserver<GIn, GOut>(
  emit: IObserver<GOut>,
  mapFunction: IMapFunction<GIn, GOut>,
): IObserver<GIn> {
  return (value: GIn): void => {
    emit(mapFunction(value));
  };
}
