import { futureUnsubscribe } from '@lirx/unsubscribe';
import {
  AbortError,
  createEventListener,
  INullish,
  IRemoveEventListener,
  isNullish,
} from '@lirx/utils';
import { IObservable, IUnsubscribeOfObservable } from '../../../../type/observable.type.js';

export interface IObservableToPromiseOptions {
  signal?: AbortSignal;
}

export function toPromise<GValue>(
  subscribe: IObservable<GValue>,
  options?: IObservableToPromiseOptions,
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
            removeAbortEventListener();
            unsubscribe();
            reject(new AbortError({ signal }));
          });
        }
      }

      const unsubscribe: IUnsubscribeOfObservable = futureUnsubscribe(
        (unsubscribe: IUnsubscribeOfObservable): IUnsubscribeOfObservable => {
          return subscribe((value: GValue): void => {
            if (removeAbortEventListener !== void 0) {
              removeAbortEventListener();
            }
            unsubscribe();
            resolve(value);
          });
        },
      );
    },
  );
}
