import { IObservable } from '../../../../../../../type/observable.type.js';
import { fromFetch } from '../../from-fetch.js';
import {
  IFromFetchArrayBufferObservableNotifications
} from './from-fetch-array-buffer-observable-notifications.type.js';
import { responseToArrayBufferObservable } from './pipe/response-to-array-buffer-observable.js';

/**
 * Uses the Fetch API to make an HTTP request, and returns an ArrayBuffer
 */
export function fromFetchArrayBuffer(
  requestInfo: RequestInfo,
  requestInit?: RequestInit,
): IObservable<IFromFetchArrayBufferObservableNotifications> {
  return responseToArrayBufferObservable(fromFetch(requestInfo, requestInit));
}
