import { IObserver } from '../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../type/observable.type.js';

export interface IDefferFactoryFunction<GValue> {
  (): IObservable<GValue>;
}

export function defer<GValue>(factory: IDefferFactoryFunction<GValue>): IObservable<GValue> {
  return (emit: IObserver<GValue>): IUnsubscribeOfObservable => {
    return factory()(emit);
  };
}
