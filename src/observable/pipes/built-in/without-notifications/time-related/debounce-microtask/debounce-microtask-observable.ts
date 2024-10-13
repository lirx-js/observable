import { createMicrotask, UndoFunction } from '@lirx/utils';
import { IObserver } from '../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../type/observable.type.js';

export function debounceMicrotaskObservable<GValue>(
  subscribe: IObservable<GValue>,
): IObservable<GValue> {
  return (emit: IObserver<GValue>): IUnsubscribeOfObservable => {
    let abortMicrotask: UndoFunction | null = null;

    const unsubscribe: IUnsubscribeOfObservable = subscribe((value: GValue): void => {
      if (abortMicrotask !== null) {
        abortMicrotask();
      }
      abortMicrotask = createMicrotask((): void => {
        abortMicrotask = null;
        emit(value);
      });
    });

    return (): void => {
      unsubscribe();
      if (abortMicrotask !== null) {
        abortMicrotask();
      }
    };
  };
}
