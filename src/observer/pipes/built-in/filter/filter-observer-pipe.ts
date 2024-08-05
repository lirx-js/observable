import { IObserverPipe } from '../../type/observer-pipe.type.js';
import { IFilterFunctionGeneric } from './generic/filter-function-generic.type.js';
import { IFilterFunctionStrict } from './strict/filter-function-strict.type.js';
import { filterObserverPipeStrict } from './strict/filter-observer-pipe-strict.js';

export function filterObserverPipe<GValue>(
  filterFunction: IFilterFunctionGeneric<GValue>,
): IObserverPipe<GValue, GValue>;
export function filterObserverPipe<GIn, GOut extends GIn>(
  filterFunction: IFilterFunctionStrict<GIn, GOut>,
): IObserverPipe<GIn, GOut>;
export function filterObserverPipe<GIn, GOut extends GIn>(
  filterFunction: IFilterFunctionStrict<GIn, GOut> | IFilterFunctionGeneric<GIn>,
): IObserverPipe<GIn, GOut> {
  return filterObserverPipeStrict<GIn, GOut>(filterFunction as IFilterFunctionStrict<GIn, GOut>);
}
