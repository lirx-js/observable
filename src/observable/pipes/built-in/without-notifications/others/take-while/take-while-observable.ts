import { futureUndo, IsRunningFunction } from '@lirx/utils';
import { IObserver } from '../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../type/observable.type.js';
import { ITakeWhileObservablePredicateFunction } from './take-while-observable-predicate-function.type.js';

export function takeWhileObservable<GValue>(
  subscribe: IObservable<GValue>,
  predicate: ITakeWhileObservablePredicateFunction<GValue>,
): IObservable<GValue> {
  return (emit: IObserver<GValue>): IUnsubscribeOfObservable => {
    return futureUndo(
      (
        unsubscribe: IUnsubscribeOfObservable,
        running: IsRunningFunction,
      ): IUnsubscribeOfObservable => {
        let index: number = 0;
        return subscribe((value: GValue): void => {
          if (running()) {
            if (predicate(value, index++)) {
              emit(value);
            } else {
              unsubscribe();
            }
          }
        });
      },
    );
  };
}
