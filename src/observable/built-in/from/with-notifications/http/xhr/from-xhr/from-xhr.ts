import { AbortError, createEventListener, NetworkError, noop, UndoFunction } from '@lirx/utils';
import { STATIC_COMPLETE_NOTIFICATION } from '../../../../../../../misc/notifications/built-in/complete/complete-notification.constant.js';
import { createDownloadProgressNotification } from '../../../../../../../misc/notifications/built-in/download-progress/create-download-progress-notification.js';
import { createErrorNotification } from '../../../../../../../misc/notifications/built-in/error/create-error-notification.js';

import { createAbortErrorNotification } from '../../../../../../../misc/notifications/built-in/error/derived/create-abort-error-notification.js';
import { createNextNotification } from '../../../../../../../misc/notifications/built-in/next/create-next-notification.js';
import { STATIC_UPLOAD_COMPLETE_NOTIFICATION } from '../../../../../../../misc/notifications/built-in/upload-complete/upload-complete-notification.constant.js';
import { createUploadProgressNotification } from '../../../../../../../misc/notifications/built-in/upload-progress/create-upload-progress-notification.js';
import { createProgressFromProgressEvent } from '../../../../../../../misc/progress/create-progress-from-progress-event.js';
import { IProgress } from '../../../../../../../misc/progress/progress.type.js';
import { IObserver } from '../../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../../type/observable.type.js';
import {
  areReadableStreamSupported,
  initAndSendXHRFromRequest,
  XHRResponse,
  XHRResponseToReadableStream,
  XHRResponseToResponse,
  XHRResponseToResponseInit,
  XHRResponseTypeExtended,
} from '../xhr-helpers.js';
import {
  IFromXHRObservableNotifications,
  IFromXHRObservableOptions,
} from './from-xhr-observable-notifications.type.js';

/**
 * Uses the Fetch API to make an HTTP request.
 */
export function fromXHR(
  requestInfo: RequestInfo,
  requestInit?: RequestInit,
  options?: IFromXHRObservableOptions,
): IObservable<IFromXHRObservableNotifications> {
  const request: Request = new Request(requestInfo, requestInit);

  const useReadableStream: boolean =
    areReadableStreamSupported() &&
    (options === void 0 || options.useReadableStream === void 0 ? true : options.useReadableStream);

  return (emit: IObserver<IFromXHRObservableNotifications>): IUnsubscribeOfObservable => {
    if (request.signal.aborted) {
      emit(createAbortErrorNotification({ signal: request.signal }));
      return noop;
    } else {
      let running: boolean = true;

      const xhr: XMLHttpRequest = new XMLHttpRequest();
      let stream: ReadableStream<Uint8Array> | undefined;
      let responseType: XHRResponseTypeExtended;

      if (useReadableStream) {
        responseType = 'binary-string';
        stream = XHRResponseToReadableStream(xhr, responseType);
      } else {
        // if !useReadableStream
        responseType = 'blob';
      }

      const end = (): void => {
        running = false;
        removeReadyStateChangeEventListener();
        removeLoadEventListener();
        removeErrorEventListener();
        removeAbortEventListener();
        removeDownloadProgressEventListener();
        removeUploadProgressEventListener();
        removeUploadCompleteEventListener();
      };

      const next = (response: Response): void => {
        emit(createNextNotification<Response>(response));
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
          emit(createAbortErrorNotification({ signal: request.signal }));
        }
      };

      const downloadProgress = (progress: IProgress): void => {
        if (running) {
          emit(createDownloadProgressNotification(progress));
        }
      };

      const uploadProgress = (progress: IProgress): void => {
        if (running) {
          emit(createUploadProgressNotification(progress));
        }
      };

      const uploadComplete = (): void => {
        if (running) {
          emit(STATIC_UPLOAD_COMPLETE_NOTIFICATION);
        }
      };

      const removeReadyStateChangeEventListener: UndoFunction = createEventListener<Event>(
        xhr,
        'readystatechange',
        (): void => {
          if (running) {
            if (stream === void 0) {
              // if !useReadableStream
              if (xhr.readyState === xhr.DONE) {
                next(XHRResponseToResponse(xhr, responseType));
              }
            } else {
              if (xhr.readyState === xhr.HEADERS_RECEIVED) {
                next(new XHRResponse(stream, XHRResponseToResponseInit(xhr)));
              }
            }
          }
        },
      );

      const removeLoadEventListener: UndoFunction = createEventListener<Event>(
        xhr,
        'load',
        complete,
      );

      const removeErrorEventListener: UndoFunction = createEventListener<Event>(
        xhr,
        'error',
        (): void => {
          error(NetworkError.fromRequest(request));
        },
      );

      const removeAbortEventListener = createEventListener<Event>(xhr, 'abort', abort);

      const removeDownloadProgressEventListener: UndoFunction = createEventListener<
        ProgressEvent<XMLHttpRequestEventTarget>
      >(xhr, 'progress', (event: ProgressEvent<XMLHttpRequestEventTarget>): void => {
        downloadProgress(createProgressFromProgressEvent(event));
      });

      const removeUploadProgressEventListener: UndoFunction = createEventListener<
        ProgressEvent<XMLHttpRequestEventTarget>
      >(xhr.upload, 'progress', (event: ProgressEvent<XMLHttpRequestEventTarget>): void => {
        uploadProgress(createProgressFromProgressEvent(event));
      });

      const removeUploadCompleteEventListener: UndoFunction = createEventListener<
        ProgressEvent<XMLHttpRequestEventTarget>
      >(xhr.upload, 'load', uploadComplete);

      initAndSendXHRFromRequest(xhr, responseType, request).catch((error: unknown): void => {
        if (!(error instanceof AbortError)) {
          throw error;
        }
      });

      return (): void => {
        if (running) {
          end();
          xhr.abort();
        }
      };
    }
  };
}
