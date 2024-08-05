import { noop } from '@lirx/utils';
import { createErrorNotification } from '../../../../../../../misc/notifications/built-in/error/create-error-notification.js';
import { IObserver } from '../../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../../type/observable.type.js';
import { IFromAsyncIteratorObservableNotifications } from '../../../iterable/async/from-async-iterator/from-async-iterator-observable-notifications.type.js';
import { fromReadableStreamReader } from '../from-readable-stream-reader/from-readable-stream-reader.js';
import { IFromReadableStreamObservableNotifications } from './from-readable-stream-observable-notifications.type.js';

export function fromReadableStream<GValue>(
  readableStream: ReadableStream<GValue>,
): IObservable<IFromReadableStreamObservableNotifications<GValue>> {
  type GNotificationsUnion = IFromAsyncIteratorObservableNotifications<GValue>;
  return (emit: IObserver<GNotificationsUnion>): IUnsubscribeOfObservable => {
    if (readableStream.locked) {
      emit(createErrorNotification(new Error('ReadableStream locked.')));
      return noop;
    } else {
      return fromReadableStreamReader<GValue>(readableStream.getReader())(emit);
    }
  };
}
