import { IMapFunction } from '../../../../../../observer/pipes/built-in/map/map-function.type.js';
import { IObserver } from '../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../type/observable.type.js';

export function mapObservable<GIn, GOut>(
  subscribe: IObservable<GIn>,
  mapFunction: IMapFunction<GIn, GOut>,
): IObservable<GOut> {
  return (emit: IObserver<GOut>): IUnsubscribeOfObservable => {
    return subscribe((value: GIn): void => {
      // INFO should support a running variable because the `mapFunction` could call `unsubscribe`
      emit(mapFunction(value));
    });
  };
}
