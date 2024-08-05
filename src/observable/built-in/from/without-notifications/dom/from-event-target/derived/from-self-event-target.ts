import { filterObservable } from '../../../../../../pipes/built-in/without-notifications/observer-pipe-related/filter/filter-observable.js';
import { IObservable } from '../../../../../../type/observable.type.js';
import { fromEventTarget } from '../from-event-target.js';

export function fromSelfEventTarget<GEvent extends Event>(
  target: Omit<EventTarget, 'dispatchEvent'>,
  type: string,
  options?: boolean | AddEventListenerOptions,
): IObservable<GEvent> {
  return filterObservable(
    fromEventTarget<GEvent>(target, type, options),
    (event: GEvent): boolean => {
      return event.target === target;
    },
  );
}
