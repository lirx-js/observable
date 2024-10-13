import { futureUndo, IsRunningFunction, mergeUndoFunctions } from '@lirx/utils';
import { IObserver } from '../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../type/observable.type.js';

export function takeUntilObservable<GValue>(
  subscribe: IObservable<GValue>,
  until: IObservable<any>,
): IObservable<GValue> {
  return (emit: IObserver<GValue>): IUnsubscribeOfObservable => {
    return futureUndo(
      (
        unsubscribe: IUnsubscribeOfObservable,
        running: IsRunningFunction,
      ): IUnsubscribeOfObservable => {
        return mergeUndoFunctions([
          until(unsubscribe),
          subscribe((value: GValue): void => {
            if (running()) {
              emit(value);
            }
          }),
        ]);
      },
    );
  };
}
