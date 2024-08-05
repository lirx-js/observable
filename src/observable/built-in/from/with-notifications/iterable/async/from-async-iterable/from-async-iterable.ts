import { IObserver } from '../../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../../type/observable.type.js';
import { fromAsyncIterator } from '../from-async-iterator/from-async-iterator.js';
import { IFromAsyncIterableObservableNotifications } from './from-async-iterable-observable-notifications.type.js';

export function fromAsyncIterable<GValue>(
  asyncIterable: AsyncIterable<GValue>,
): IObservable<IFromAsyncIterableObservableNotifications<GValue>> {
  return (
    emit: IObserver<IFromAsyncIterableObservableNotifications<GValue>>,
  ): IUnsubscribeOfObservable => {
    return fromAsyncIterator<GValue>(asyncIterable[Symbol.asyncIterator]())(emit);
  };
}
