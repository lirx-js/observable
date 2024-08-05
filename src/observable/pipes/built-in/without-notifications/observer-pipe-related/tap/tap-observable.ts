import { ITapFunction } from '../../../../../../observer/pipes/built-in/tap/tap-function.type.js';
import {
  tapObserverPipe
} from '../../../../../../observer/pipes/built-in/tap/tap-observer-pipe.js';
import { IObservable } from '../../../../../type/observable.type.js';
import {
  transformObservableWithObserverPipe
} from '../helpers/transform-observable-with-observer-pipe.js';

/**
 * @see tapObserverPipe
 */
export function tapObservable<GValue>(
  subscribe: IObservable<GValue>,
  tapFunction: ITapFunction<GValue>,
): IObservable<GValue> {
  return transformObservableWithObserverPipe<GValue, GValue>(
    subscribe,
    tapObserverPipe<GValue>(tapFunction),
  );
}
