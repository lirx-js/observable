import {
  mapObservable
} from '../../../../../../pipes/built-in/without-notifications/observer-pipe-related/map/map-observable.js';
import { IObservable } from '../../../../../../type/observable.type.js';
import { merge } from '../../../many-observables/merge/merge.js';
import { fromSelfEventTarget } from './from-self-event-target.js';

/**
 * Creates an Observable emitting true when the element has the mouse over, and false when it has not.
 *
 * @experimental
 */
export function isMouseOverElementObservable(element: Element): IObservable<boolean> {
  return merge([
    mapObservable<MouseEvent, boolean>(
      fromSelfEventTarget<MouseEvent>(element, 'mouseenter'),
      () => true,
    ),
    mapObservable<MouseEvent, boolean>(
      fromSelfEventTarget<MouseEvent>(element, 'mouseleave'),
      () => false,
    ),
  ]);
}
