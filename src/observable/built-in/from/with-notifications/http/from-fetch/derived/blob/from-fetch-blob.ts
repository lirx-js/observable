import { IObservable } from '../../../../../../../type/observable.type.js';
import { fromFetch } from '../../from-fetch.js';
import {
  IFromFetchBlobObservableNotifications
} from './from-fetch-blob-observable-notifications.type.js';
import { responseToBlobObservable } from './pipe/response-to-blob-observable.js';

/**
 * Uses the Fetch API to make an HTTP request, and returns a Blob
 */
export function fromFetchBlob(
  requestInfo: RequestInfo,
  requestInit?: RequestInit,
): IObservable<IFromFetchBlobObservableNotifications> {
  return responseToBlobObservable(fromFetch(requestInfo, requestInit));
}
