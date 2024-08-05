import { IObserver } from '../../../../../../../../observer/type/observer.type.js';
import { IHigherOrderObservable } from '../../../../../../../type/derived/higher-order-observable.type.js';
import {
  IObservable,
  IUnsubscribeOfObservable,
} from '../../../../../../../type/observable.type.js';

export function mergeAllSingleObservable<GValue>(
  subscribe: IHigherOrderObservable<GValue>,
): IObservable<GValue> {
  return (emit: IObserver<GValue>): IUnsubscribeOfObservable => {
    let running: boolean = true;
    let childUnsubscribeFunction: IUnsubscribeOfObservable;

    const unsubscribeChild = (): void => {
      if (childUnsubscribeFunction !== void 0) {
        childUnsubscribeFunction();
      }
    };

    const unsubscribe = subscribe((childSubscribe: IObservable<GValue>): void => {
      unsubscribeChild();
      childUnsubscribeFunction = childSubscribe(emit);
    });

    return (): void => {
      if (running) {
        running = false;
        unsubscribe();
        unsubscribeChild();
      }
    };
  };
}
