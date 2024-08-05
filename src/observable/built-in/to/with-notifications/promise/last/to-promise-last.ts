import {
  AbortError,
  createEventListener,
  INullish,
  IRemoveEventListener,
  isNullish,
} from '@lirx/utils';
import { notificationsToLastValueObservable } from '../../../../../pipes/built-in/with-notifications/others/notifications-to-values/derived/notifications-to-last-value/notifications-to-last-value-observable.js';
import { IObservable } from '../../../../../type/observable.type.js';
import { IObservableToPromiseOptions } from '../../../without-notifications/promise/to-promise.js';
import { IObservableToPromiseNotifications } from '../all/to-promise-all.js';

export type IObservableToPromiseLastOptions = IObservableToPromiseOptions;

export function toPromiseLast<GValue>(
  subscribe: IObservable<IObservableToPromiseNotifications<GValue>>,
  options?: IObservableToPromiseLastOptions,
): Promise<GValue> {
  return new Promise<GValue>(
    (resolve: (value: GValue) => void, reject: (reason: any) => void): void => {
      let removeAbortEventListener: IRemoveEventListener;
      const signal: AbortSignal | INullish = options?.signal;

      if (!isNullish(signal)) {
        if (signal.aborted) {
          return reject(new AbortError({ signal }));
        } else {
          removeAbortEventListener = createEventListener<Event>(signal, 'abort', (): void => {
            _reject(new AbortError({ signal }));
          });
        }
      }

      const end = (): void => {
        if (removeAbortEventListener !== void 0) {
          removeAbortEventListener();
        }
      };

      const _resolve = (value: GValue): void => {
        end();
        resolve(value);
      };

      const _reject = (error: any): void => {
        end();
        reject(error);
      };

      const _subscribe: IObservable<GValue> = notificationsToLastValueObservable<GValue>(
        subscribe,
        _reject,
      );

      _subscribe(_resolve);
    },
  );
}
