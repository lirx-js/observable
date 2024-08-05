import { mapDistinctObservable } from '../../../../../../pipes/built-in/without-notifications/observer-pipe-related/map-distinct/map-distinct-observable.js';
import { shareObservableWithMulticastReplayLastSource } from '../../../../../../pipes/built-in/without-notifications/source-related/built-in/derived/multicast-replay-last-source/share-observable-with-multicast-replay-last-source.js';
import { debounceTimeObservable } from '../../../../../../pipes/built-in/without-notifications/time-related/debounce-time/debounce-time-observable.js';
import { IObservable } from '../../../../../../type/observable.type.js';
import { merge } from '../../../many-observables/merge/merge.js';
import { interval } from '../../../time-related/interval/interval.js';
import { single } from '../../../values/single/single.js';
import { fromEventTarget } from '../../from-event-target/from-event-target.js';

let ACTIVE_ELEMENT_OBSERVABLE: IObservable<Element | null> | undefined;

/**
 * @experimental
 */
export function fromActiveElement(): IObservable<Element | null> {
  if (ACTIVE_ELEMENT_OBSERVABLE === void 0) {
    ACTIVE_ELEMENT_OBSERVABLE = shareObservableWithMulticastReplayLastSource(
      mapDistinctObservable(
        merge([
          single(void 0),
          fromEventTarget(document, 'focusin'),
          debounceTimeObservable(fromEventTarget(document, 'focusout'), 0),
          interval(100),
        ]),
        (): Element | null => {
          return document.activeElement;
        },
      ),
    );
  }
  return ACTIVE_ELEMENT_OBSERVABLE;
}
