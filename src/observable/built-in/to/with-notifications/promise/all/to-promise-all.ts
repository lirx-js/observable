import {
  AbortError,
  createEventListener,
  INullish,
  IRemoveEventListener,
  isNullish,
} from '@lirx/utils';
import { IDefaultInNotificationsUnion } from '../../../../../../misc/notifications/default-notifications-union.type.js';
import { notificationsToValuesObservable } from '../../../../../pipes/built-in/with-notifications/others/notifications-to-values/notifications-to-values-observable.js';
import { IObservable } from '../../../../../type/observable.type.js';
import { IObservableToPromiseOptions } from '../../../without-notifications/promise/to-promise.js';

export type IObservableToPromiseNotifications<GValue> = IDefaultInNotificationsUnion<GValue>;

export interface IObservableToPromiseAllOptions extends IObservableToPromiseOptions {
  maxNumberOfValues?: number; // (default: Infinity)
}

export function toPromiseAll<GValue>(
  subscribe: IObservable<IObservableToPromiseNotifications<GValue>>,
  options?: IObservableToPromiseAllOptions,
): Promise<GValue[]> {
  return new Promise<GValue[]>(
    (resolve: (value: GValue[]) => void, reject: (reason: any) => void): void => {
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

      const _resolve = (values: GValue[]): void => {
        end();
        resolve(values);
      };

      const _reject = (error: any): void => {
        end();
        reject(error);
      };

      const _subscribe: IObservable<GValue[]> = notificationsToValuesObservable<GValue>(
        subscribe,
        _reject,
        options?.maxNumberOfValues,
      );

      _subscribe(_resolve);
    },
  );
}
