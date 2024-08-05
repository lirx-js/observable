import { IObserver } from '../../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../../type/observable.type.js';
import { IFromIteratorObservableNotifications } from '../from-iterator/from-iterator-observable-notifications.type.js';
import { fromIteratorWithNotifications } from '../from-iterator/from-iterator-with-notifications.js';
import { IFromIterableObservableNotifications } from './from-iterable-observable-notifications.type.js';

export function fromIterableWithNotifications<GValue>(
  iterable: Iterable<GValue>,
): IObservable<IFromIterableObservableNotifications<GValue>> {
  return (
    emit: IObserver<IFromIteratorObservableNotifications<GValue>>,
  ): IUnsubscribeOfObservable => {
    return fromIteratorWithNotifications<GValue>(iterable[Symbol.iterator]())(emit);
  };
}
