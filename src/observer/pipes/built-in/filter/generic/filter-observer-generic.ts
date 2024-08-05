import { IObserver } from '../../../../type/observer.type.js';
import { IFilterFunctionStrict } from '../strict/filter-function-strict.type.js';
import { filterObserverStrict } from '../strict/filter-observer-strict.js';
import { IFilterFunctionGeneric } from './filter-function-generic.type.js';

export function filterObserverGeneric<GValue>(
  emit: IObserver<GValue>,
  filterFunction: IFilterFunctionGeneric<GValue>,
): IObserver<GValue> {
  return filterObserverStrict<GValue, GValue>(
    emit,
    filterFunction as IFilterFunctionStrict<GValue, GValue>,
  );
}
