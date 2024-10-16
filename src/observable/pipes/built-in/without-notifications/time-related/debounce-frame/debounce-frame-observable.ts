import { createAnimationFrame, UndoFunction } from '@lirx/utils';
import { IObserver } from '../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../type/observable.type.js';

export function debounceFrameObservable<GValue>(
  subscribe: IObservable<GValue>,
): IObservable<GValue> {
  return (emit: IObserver<GValue>): IUnsubscribeOfObservable => {
    let abortAnimationFrame: UndoFunction | null = null;

    const unsubscribe: IUnsubscribeOfObservable = subscribe((value: GValue): void => {
      if (abortAnimationFrame !== null) {
        abortAnimationFrame();
      }
      abortAnimationFrame = createAnimationFrame((): void => {
        abortAnimationFrame = null;
        emit(value);
      });
    });

    return (): void => {
      unsubscribe();
      if (abortAnimationFrame !== null) {
        abortAnimationFrame();
      }
    };
  };
}
