import { createImmediate, UndoFunction } from '@lirx/utils';
import { IObserver } from '../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../type/observable.type.js';

export function debounceImmediateObservable<GValue>(
  subscribe: IObservable<GValue>,
): IObservable<GValue> {
  return (emit: IObserver<GValue>): IUnsubscribeOfObservable => {
    let abortTimeout: UndoFunction | null = null;

    const unsubscribe: IUnsubscribeOfObservable = subscribe((value: GValue): void => {
      if (abortTimeout !== null) {
        abortTimeout();
      }
      abortTimeout = createImmediate((): void => {
        abortTimeout = null;
        emit(value);
      });
    });

    return (): void => {
      unsubscribe();
      if (abortTimeout !== null) {
        abortTimeout();
      }
    };
  };
}
