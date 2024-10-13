import {
  AbortError,
  createEventListener,
  futureUndo,
  isNullish,
  Nullish,
  UndoFunction,
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
      let removeAbortEventListener: UndoFunction;
      const signal: AbortSignal | Nullish = options?.signal;

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

      const unsubscribe: IUnsubscribeOfObservable = futureUndo(
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
