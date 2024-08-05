import { IObserver } from '../../../../type/observer.type.js';
import { IObserverPipe } from '../../../type/observer-pipe.type.js';
import { IFilterFunctionStrict } from './filter-function-strict.type.js';
import { filterObserverStrict } from './filter-observer-strict.js';

export function filterObserverPipeStrict<GIn, GOut extends GIn>(
  filterFunction: IFilterFunctionStrict<GIn, GOut>,
): IObserverPipe<GIn, GOut> {
  return (emit: IObserver<GOut>): IObserver<GIn> => {
    return filterObserverStrict<GIn, GOut>(emit, filterFunction);
  };
}
