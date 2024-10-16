import { IFilterFunctionGeneric } from '../../../../../../observer/pipes/built-in/filter/generic/filter-function-generic.type.js';
import { IFilterFunctionStrict } from '../../../../../../observer/pipes/built-in/filter/strict/filter-function-strict.type.js';
import { IObserver } from '../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../type/observable.type.js';

export function filterObservable<GValue>(
  subscribe: IObservable<GValue>,
  filterFunction: IFilterFunctionGeneric<GValue>,
): IObservable<GValue>;
export function filterObservable<GIn, GOut extends GIn>(
  subscribe: IObservable<GIn>,
  filterFunction: IFilterFunctionStrict<GIn, GOut>,
): IObservable<GOut>;
export function filterObservable<GIn, GOut extends GIn>(
  subscribe: IObservable<GIn>,
  filterFunction: IFilterFunctionStrict<GIn, GOut> | IFilterFunctionGeneric<GIn>,
): IObservable<GOut> {
  return (emit: IObserver<GOut>): IUnsubscribeOfObservable => {
    return subscribe((value: GIn): void => {
      if (filterFunction(value)) {
        emit(value as GOut);
      }
    });
  };
  // return transformObservableWithObserverPipe<GIn, GOut>(subscribe, filterObserverPipe<GIn, GOut>(filterFunction as IFilterFunctionStrict<GIn, GOut>));
}
