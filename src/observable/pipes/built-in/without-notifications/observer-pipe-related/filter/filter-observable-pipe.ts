import { IFilterFunctionGeneric } from '../../../../../../observer/pipes/built-in/filter/generic/filter-function-generic.type.js';
import { IFilterFunctionStrict } from '../../../../../../observer/pipes/built-in/filter/strict/filter-function-strict.type.js';
import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { filterObservable } from './filter-observable.js';

export function filterObservablePipe<GValue>(
  filterFunction: IFilterFunctionGeneric<GValue>,
): IObservablePipe<GValue, GValue>;
export function filterObservablePipe<GIn, GOut extends GIn>(
  filterFunction: IFilterFunctionStrict<GIn, GOut>,
): IObservablePipe<GIn, GOut>;
export function filterObservablePipe<GIn, GOut extends GIn>(
  filterFunction: IFilterFunctionStrict<GIn, GOut> | IFilterFunctionGeneric<GIn>,
): IObservablePipe<GIn, GOut> {
  return (subscribe: IObservable<GIn>): IObservable<GOut> => {
    return filterObservable<GIn, GOut>(
      subscribe,
      filterFunction as IFilterFunctionStrict<GIn, GOut>,
    );
  };
}
