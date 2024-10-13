import { futureUndo } from '@lirx/utils';
import { IObservable, IUnsubscribeOfObservable } from '../../../observable/type/observable.type.js';
import { IObserver } from '../../../observer/type/observer.type.js';

export function subscribeOnce<GValue>(
  subscribe: IObservable<GValue>,
  emit: IObserver<GValue>,
): IUnsubscribeOfObservable {
  return futureUndo((unsubscribe: IUnsubscribeOfObservable): IUnsubscribeOfObservable => {
    return subscribe((value: GValue): void => {
      unsubscribe();
      emit(value);
    });
  });

  // return subscribeWithUnsubscribeArgument<GValue>(subscribe, (value: GValue, unsubscribe: IUnsubscribe): void => {
  //   unsubscribe();
  //   emit(value);
  // });
}
