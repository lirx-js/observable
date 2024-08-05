import { IObserverPipe } from '../../../type/observer-pipe.type.js';
import { IFilterFunctionStrict } from '../strict/filter-function-strict.type.js';
import { filterObserverPipeStrict } from '../strict/filter-observer-pipe-strict.js';
import { IFilterFunctionGeneric } from './filter-function-generic.type.js';

export function filterObserverPipeGeneric<GValue>(
  filterFunction: IFilterFunctionGeneric<GValue>,
): IObserverPipe<GValue, GValue> {
  return filterObserverPipeStrict<GValue, GValue>(
    filterFunction as IFilterFunctionStrict<GValue, GValue>,
  );
}
