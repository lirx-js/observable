import { futureUndo, IsRunningFunction } from '@lirx/utils';
import { IObserver } from '../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../type/observable.type.js';

export function firstObservable<GValue>(subscribe: IObservable<GValue>): IObservable<GValue> {
  return (emit: IObserver<GValue>): IUnsubscribeOfObservable => {
    return futureUndo(
      (
        unsubscribe: IUnsubscribeOfObservable,
        running: IsRunningFunction,
      ): IUnsubscribeOfObservable => {
        return subscribe((value: GValue): void => {
          if (running()) {
            unsubscribe();
            emit(value);
          }
        });
      },
    );
  };
}
