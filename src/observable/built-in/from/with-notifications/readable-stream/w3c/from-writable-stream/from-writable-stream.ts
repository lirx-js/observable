import { IObserver } from '../../../../../../../observer/type/observer.type.js';
import { fromWritableStreamDefaultWriter } from '../from-writable-stream-default-writer/from-writable-stream-default-writer.js';
import { IFromWritableStreamObserverNotifications } from './from-writable-stream-observer-notifications.type.js';
import { IFromWritableStreamObserverOnError } from './from-writable-stream-observer-on-error.type.js';

export function fromWritableStream<GValue>(
  writableStream: WritableStream<GValue>,
  onError?: IFromWritableStreamObserverOnError,
): IObserver<IFromWritableStreamObserverNotifications<GValue>> {
  if (writableStream.locked) {
    throw new Error('WritableStream locked.');
  } else {
    return fromWritableStreamDefaultWriter(writableStream.getWriter(), onError);
  }
}
