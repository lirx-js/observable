import { IObserverPipe } from '../../../../../../observer/pipes/type/observer-pipe.type.js';
import { IObserver } from '../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../type/observable.type.js';

export function transformObservableWithObserverPipe<GIn, GOut>(
  subscribe: IObservable<GIn>,
  observerPipe: IObserverPipe<GIn, GOut>,
): IObservable<GOut> {
  return (emit: IObserver<GOut>): IUnsubscribeOfObservable => {
    return subscribe(observerPipe(emit));
  };
}
