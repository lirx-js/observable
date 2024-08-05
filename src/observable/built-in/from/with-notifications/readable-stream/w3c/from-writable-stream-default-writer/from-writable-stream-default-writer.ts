import { defaultNotificationObserver } from '../../../../../../../misc/notifications/default-notification-observer.js';
import { IObserver } from '../../../../../../../observer/type/observer.type.js';
import { FROM_WRITABLE_STREAM_DEFAULT_WRITER_DEFAULT_ON_ERROR } from './from-writable-stream-default-writer-default-on-error.constant.js';
import { IFromWritableStreamDefaultWriterObserverNotifications } from './from-writable-stream-default-writer-observer-notifications.type.js';
import { IFromWritableStreamDefaultWriterObserverOnError } from './from-writable-stream-default-writer-observer-on-error.type.js';

export function fromWritableStreamDefaultWriter<GValue>(
  writer: WritableStreamDefaultWriter<GValue>,
  onError: IFromWritableStreamDefaultWriterObserverOnError = FROM_WRITABLE_STREAM_DEFAULT_WRITER_DEFAULT_ON_ERROR,
): IObserver<IFromWritableStreamDefaultWriterObserverNotifications<GValue>> {
  return defaultNotificationObserver<GValue>(
    /* next */ (value: GValue): void => {
      writer.write(value).catch(onError);
    },
    /* complete */ (): void => {
      writer.close().catch(onError);
      writer.releaseLock();
    },
    /* error */ (error: unknown): void => {
      writer.abort(error).catch(onError);
      writer.releaseLock();
    },
  );
}
