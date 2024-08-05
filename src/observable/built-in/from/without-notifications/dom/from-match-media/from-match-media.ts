import { mapObservable } from '../../../../../pipes/built-in/without-notifications/observer-pipe-related/map/map-observable.js';
import { IObservable } from '../../../../../type/observable.type.js';
import { merge } from '../../many-observables/merge/merge.js';
import { reference } from '../../values/reference/reference.js';
import { fromEventTarget } from '../from-event-target/from-event-target.js';

export function fromMatchMedia(query: string): IObservable<boolean> {
  const mediaQueryList: MediaQueryList = matchMedia(query);
  return merge([
    reference(() => mediaQueryList.matches),
    mapObservable<MediaQueryListEvent, boolean>(
      fromEventTarget<MediaQueryListEvent>(mediaQueryList, 'change'),
      (event: MediaQueryListEvent): boolean => event.matches,
    ),
  ]);
}
