import { IObserver } from '../../../../../observer/type/observer.type.js';

export interface ISourceObservableOnUnsubscribeFunction<GValue> {
  (emit: IObserver<GValue>): boolean;
}
