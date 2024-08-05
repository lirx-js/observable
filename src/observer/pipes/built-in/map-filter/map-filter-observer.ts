import { IObserver } from '../../../type/observer.type.js';
import { MAP_FILTER_DISCARD } from './map-filter-discard.constant.js';
import {
  IMapFilterMapFunction,
  IMapFilterMapFunctionReturn,
} from './map-filter-map-function.type.js';

export function mapFilterObserver<GIn, GOut>(
  emit: IObserver<GOut>,
  mapFunction: IMapFilterMapFunction<GIn, GOut>,
): IObserver<GIn> {
  return (value: GIn): void => {
    const result: IMapFilterMapFunctionReturn<GOut> = mapFunction(value);
    if (result !== MAP_FILTER_DISCARD) {
      emit(result);
    }
  };
}
