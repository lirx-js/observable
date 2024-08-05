import { IObserverPipe } from '../../../../../../observer/pipes/type/observer-pipe.type.js';
import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { transformObservableWithObserverPipe } from './transform-observable-with-observer-pipe.js';

/**
 * Converts an observer pipe to an observable pipe
 */
export function observerPipeToObservablePipe<GIn, GOut>(
  observerPipe: IObserverPipe<GIn, GOut>,
): IObservablePipe<GIn, GOut> {
  return (subscribe: IObservable<GIn>): IObservable<GOut> => {
    return transformObservableWithObserverPipe<GIn, GOut>(subscribe, observerPipe);
  };
}
