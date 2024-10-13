import { createTimeout, UndoFunction } from '@lirx/utils';
import { IObserver } from '../../../../../../../../observer/type/observer.type.js';
import {
  IObservable,
  IUnsubscribeOfObservable,
} from '../../../../../../../type/observable.type.js';

export function bufferTimeObservable<GValue>(
  subscribe: IObservable<GValue>,
  duration: number,
): IObservable<GValue[]> {
  return (emit: IObserver<GValue[]>): IUnsubscribeOfObservable => {
    let currentBuffer: GValue[] = [];
    let abortTimeout: UndoFunction | null = null;

    const unsubscribe: IUnsubscribeOfObservable = subscribe((value: GValue): void => {
      currentBuffer.push(value);
      if (abortTimeout === null) {
        abortTimeout = createTimeout(() => {
          abortTimeout = null;
          const buffer: GValue[] = currentBuffer;
          currentBuffer = [];
          emit(buffer);
        }, duration);
      }
    });

    return (): void => {
      unsubscribe();
      if (abortTimeout !== null) {
        abortTimeout();
      }
    };
  };
}
