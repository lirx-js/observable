import { IObserver } from '../../../../../observer/type/observer.type.js';

export interface ISourceObservableOnSubscribeFunction<GValue> {
  (emit: IObserver<GValue>): boolean;
}
