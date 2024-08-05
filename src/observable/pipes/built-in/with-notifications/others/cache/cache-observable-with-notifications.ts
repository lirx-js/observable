import { IDefaultNotificationsUnion } from '../../../../../../misc/notifications/default-notifications-union.type.js';
import {
  createUnicastReplaySource,
  IUnicastReplaySource,
} from '../../../../../../observer-observable-pair/build-in/source/built-in/replay-source/derived/create-unicast-replay-source.js';
import { createUnicastSource } from '../../../../../../observer-observable-pair/build-in/source/built-in/unicast-source/create-unicast-source.js';
import { raceWithNotifications } from '../../../../../built-in/from/with-notifications/many-observables/race-with-notifications/race-with-notifications.js';
import { throwError } from '../../../../../built-in/from/with-notifications/others/throw-error/throw-error.js';
import { singleWithNotifications } from '../../../../../built-in/from/with-notifications/values/single/single-with-notifications.js';
import { defer } from '../../../../../built-in/from/without-notifications/values/defer/defer.js';
import { pipeObservable } from '../../../../../helpers/piping/pipe-observable/pipe-observable.js';
import { IObservable } from '../../../../../type/observable.type.js';
import { switchMapObservable } from '../../../without-notifications/merge/merge-map/derived/merge-map-single/merge-map-single-observable.shortcut.js';
import { shareObservablePipe } from '../../../without-notifications/source-related/built-in/share-observable-pipe.js';
import { fulfilledObservablePipe } from '../../then/derived/fulfilled/fulfilled-observable-pipe.js';
import { rejectedObservablePipe } from '../../then/derived/rejected/rejected-observable-pipe.js';
import { autoUnsubscribeObservablePipeWithNotifications } from '../auto-unsubscribe/auto-unsubscribe-observable-pipe-with-notifications.js';

export interface IResetFunction {
  (): void;
}

export type ICacheObservableWithNotificationsResult<GValue> = [
  subscribe: IObservable<IDefaultNotificationsUnion<GValue>>,
  reset: IResetFunction,
];

/**
 * This pipe caches the value(s) sent by a source NotificationObservable.
 * Until, 'reset' or an 'error' occur, the source Observable is only subscribed once,
 * and its values are cached and retransmitted to new subscribers
 *
 * @experimental
 */
export function cacheObservableWithNotifications<GValue>(
  subscribe: IObservable<IDefaultNotificationsUnion<GValue>>,
): ICacheObservableWithNotificationsResult<GValue> {
  let value$: IObservable<IDefaultNotificationsUnion<GValue>> | undefined;

  const { emit: $reset, subscribe: reset$ } = createUnicastSource<void>();

  // used to cache getData with racing result
  const source: IUnicastReplaySource<IDefaultNotificationsUnion<GValue>> =
    createUnicastReplaySource<IDefaultNotificationsUnion<GValue>>();

  const getData$ = pipeObservable(subscribe, [
    fulfilledObservablePipe((value: GValue): IObservable<IDefaultNotificationsUnion<GValue>> => {
      value$ = singleWithNotifications(value); // cache the value
      return value$;
    }),
  ]);

  const errorOnReset$ = switchMapObservable(
    reset$,
    (): IObservable<IDefaultNotificationsUnion<GValue>> => {
      return throwError(new Error(`Reset`));
    },
  );

  const racing$ = pipeObservable(raceWithNotifications([getData$, errorOnReset$]), [
    // cache getData with racing result
    shareObservablePipe<IDefaultNotificationsUnion<GValue>>({
      createSource: () => source,
    }),
    // if rejected,
    rejectedObservablePipe<GValue, IDefaultNotificationsUnion<GValue>>(
      (error: unknown): IObservable<IDefaultNotificationsUnion<GValue>> => {
        value$ = void 0; // reset cached value
        source.reset(); // reset source
        return throwError(error);
      },
    ),
    // share getData with racing result
    shareObservablePipe<IDefaultNotificationsUnion<GValue>>(),
    // when a complete or error is received, unsubscribe of the data, else we could not start a new session in case of error or reset.
    autoUnsubscribeObservablePipeWithNotifications<IDefaultNotificationsUnion<GValue>>(),
  ]);

  const cached$ = defer((): IObservable<IDefaultNotificationsUnion<GValue>> => {
    return value$ === void 0 ? racing$ : value$;
  });

  const reset = (): void => {
    value$ = void 0;
    source.reset();
    $reset();
  };

  return [cached$, reset];
}
