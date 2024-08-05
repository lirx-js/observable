import { futureUnsubscribe, IRunning } from '@lirx/unsubscribe';
import { IObserver } from '../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../type/observable.type.js';

export function firstObservable<GValue>(subscribe: IObservable<GValue>): IObservable<GValue> {
  return (emit: IObserver<GValue>): IUnsubscribeOfObservable => {
    return futureUnsubscribe(
      (unsubscribe: IUnsubscribeOfObservable, running: IRunning): IUnsubscribeOfObservable => {
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
