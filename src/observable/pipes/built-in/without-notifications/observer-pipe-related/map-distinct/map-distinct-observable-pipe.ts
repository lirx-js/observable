import { IDistinctOptions } from '@lirx/utils';
import { IMapFunction } from '../../../../../../observer/pipes/built-in/map/map-function.type.js';
import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { mapDistinctObservable } from './map-distinct-observable.js';

export function mapDistinctObservablePipe<GIn, GOut>(
  mapFunction: IMapFunction<GIn, GOut>,
  options?: IDistinctOptions<GOut>,
): IObservablePipe<GIn, GOut> {
  return (subscribe: IObservable<GIn>): IObservable<GOut> => {
    return mapDistinctObservable<GIn, GOut>(subscribe, mapFunction, options);
  };
}
