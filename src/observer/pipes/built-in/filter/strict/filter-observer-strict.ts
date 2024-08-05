import { IObserver } from '../../../../type/observer.type.js';
import { IFilterFunctionStrict } from './filter-function-strict.type.js';

export function filterObserverStrict<GIn, GOut extends GIn>(
  emit: IObserver<GOut>,
  filterFunction: IFilterFunctionStrict<GIn, GOut>,
): IObserver<GIn> {
  return (value: GIn): void => {
    if (filterFunction(value)) {
      emit(value);
    }
  };
}
