import { IObserver } from '../../../type/observer.type.js';
import { IFilterFunctionGeneric } from './generic/filter-function-generic.type.js';
import { IFilterFunctionStrict } from './strict/filter-function-strict.type.js';
import { filterObserverStrict } from './strict/filter-observer-strict.js';

export function filterObserver<GValue>(
  emit: IObserver<GValue>,
  filterFunction: IFilterFunctionGeneric<GValue>,
): IObserver<GValue>;
export function filterObserver<GIn, GOut extends GIn>(
  emit: IObserver<GOut>,
  filterFunction: IFilterFunctionStrict<GIn, GOut>,
): IObserver<GIn>;
export function filterObserver<GIn, GOut extends GIn>(
  emit: IObserver<GOut>,
  filterFunction: IFilterFunctionStrict<GIn, GOut> | IFilterFunctionGeneric<GIn>,
): IObserver<GIn> {
  return filterObserverStrict<GIn, GOut>(emit, filterFunction as IFilterFunctionStrict<GIn, GOut>);
}
