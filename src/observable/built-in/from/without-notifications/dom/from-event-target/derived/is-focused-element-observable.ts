import {
  distinctObservable
} from '../../../../../../pipes/built-in/without-notifications/observer-pipe-related/distinct/distinct-observable.js';
import {
  mapObservable
} from '../../../../../../pipes/built-in/without-notifications/observer-pipe-related/map/map-observable.js';
import { IObservable } from '../../../../../../type/observable.type.js';
import { merge } from '../../../many-observables/merge/merge.js';
import { reference } from '../../../values/reference/reference.js';
import { fromEventTarget } from '../from-event-target.js';
import { focusLeaveElementObservable } from './focus-leave-element-observable.js';

/**
 * Creates an Observable emitting true when the element if focused, and false when it is not.
 *
 * @experimental
 */
export function isFocusedElementObservable(element: Element): IObservable<boolean> {
  return distinctObservable(
    merge([
      reference(() => element.contains(document.activeElement)),
      mapObservable<FocusEvent, boolean>(
        fromEventTarget<FocusEvent>(element, 'focusin'),
        () => true,
      ),
      mapObservable<FocusEvent, boolean>(focusLeaveElementObservable(element), () => false),
    ]),
  );
}
