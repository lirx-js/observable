import { createTimeout, UndoFunction } from '@lirx/utils';
import { IObserverWithCleanUp } from '../../../../type/observer-with-clean-up.type.js';
import { IObserver } from '../../../../type/observer.type.js';

/**
 * @deprecated
 * @experimental
 * BAD because the timer cannot be cancelled
 */
export function debounceTimeObserver<GValue>(
  emit: IObserver<GValue>,
  duration: number,
): IObserverWithCleanUp<GValue> {
  let abortTimeout: UndoFunction | null = null;

  const end = (): void => {
    if (abortTimeout !== null) {
      abortTimeout();
    }
  };

  return (value: GValue): UndoFunction => {
    end();

    abortTimeout = createTimeout((): void => {
      abortTimeout = null;
      emit(value);
    }, duration);

    return end;
  };
}
