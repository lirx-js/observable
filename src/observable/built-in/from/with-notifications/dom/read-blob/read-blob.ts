import { createEventListener, IRemoveEventListener } from '@lirx/utils';
import { STATIC_COMPLETE_NOTIFICATION } from '../../../../../../misc/notifications/built-in/complete/complete-notification.constant.js';
import { createErrorNotification } from '../../../../../../misc/notifications/built-in/error/create-error-notification.js';
import { createAbortErrorNotification } from '../../../../../../misc/notifications/built-in/error/derived/create-abort-error-notification.js';
import { createNextNotification } from '../../../../../../misc/notifications/built-in/next/create-next-notification.js';
import { createProgressNotification } from '../../../../../../misc/notifications/built-in/progress-notification.js';
import { createProgressFromProgressEvent } from '../../../../../../misc/progress/create-progress-from-progress-event.js';
import { IProgress } from '../../../../../../misc/progress/progress.type.js';
import { IObserver } from '../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../type/observable.type.js';
import {
  IFileReaderReadType,
  IInferFileReaderReturnTypeFromReadType,
  IReadBlobObservableNotifications,
} from './read-blob-observable-notifications.type.js';

export function readBlob<GReadType extends IFileReaderReadType>(
  blob: Blob,
  readType: GReadType,
): IObservable<IReadBlobObservableNotifications<GReadType>> {
  type GReturnType = IInferFileReaderReturnTypeFromReadType<GReadType>;
  type GNotificationsUnion = IReadBlobObservableNotifications<GReadType>;
  return (emit: IObserver<GNotificationsUnion>): IUnsubscribeOfObservable => {
    const fileReader: FileReader = new FileReader();
    let running: boolean = true;

    const end = (): void => {
      running = false;
      removeLoadEventListener();
      removeErrorEventListener();
      removeAbortEventListener();
      removeProgressEventListener();
    };

    const next = (value: GReturnType): void => {
      if (running) {
        emit(createNextNotification<GReturnType>(value));
      }
    };

    const complete = (): void => {
      if (running) {
        end();
        emit(STATIC_COMPLETE_NOTIFICATION);
      }
    };

    const error = (error: any): void => {
      if (running) {
        end();
        emit(createErrorNotification<any>(error));
      }
    };

    const abort = (): void => {
      if (running) {
        end();
        emit(createAbortErrorNotification());
      }
    };

    const progress = (progress: IProgress): void => {
      if (running) {
        emit(createProgressNotification(progress));
      }
    };

    const removeLoadEventListener: IRemoveEventListener = createEventListener<
      ProgressEvent<FileReader>
    >(fileReader, 'load', (): void => {
      next(fileReader.result as GReturnType);
      complete();
    });

    const removeErrorEventListener: IRemoveEventListener = createEventListener<
      ProgressEvent<FileReader>
    >(fileReader, 'error', (): void => {
      error(fileReader.error);
    });

    const removeAbortEventListener: IRemoveEventListener = createEventListener<
      ProgressEvent<FileReader>
    >(fileReader, 'abort', abort);

    const removeProgressEventListener: IRemoveEventListener = createEventListener<
      ProgressEvent<FileReader>
    >(fileReader, 'progress', (event: ProgressEvent<FileReader>): void => {
      progress(createProgressFromProgressEvent(event));
    });

    switch (readType) {
      case 'data-url':
        fileReader.readAsDataURL(blob);
        break;
      case 'text':
        fileReader.readAsText(blob);
        break;
      case 'array-buffer':
        fileReader.readAsArrayBuffer(blob);
        break;
      default:
        throw new TypeError(`Expected 'data-url', 'text', or 'array-buffer' as type`);
    }

    return (): void => {
      if (running) {
        end();
        fileReader.abort();
      }
    };
  };
}
