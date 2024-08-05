import { mapDistinctObservable } from '../../../../../pipes/built-in/without-notifications/observer-pipe-related/map-distinct/map-distinct-observable.js';
import { merge } from '../../many-observables/merge/merge.js';
import { single } from '../../values/single/single.js';
import { fromEventTarget } from '../from-event-target/from-event-target.js';

export const ONLINE_OBSERVABLE = mapDistinctObservable(
  merge([single(void 0), fromEventTarget(window, 'online'), fromEventTarget(window, 'offline')]),
  (): boolean => window.navigator.onLine,
);
