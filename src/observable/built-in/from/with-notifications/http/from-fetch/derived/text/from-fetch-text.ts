import { IObservable } from '../../../../../../../type/observable.type.js';
import { fromFetch } from '../../from-fetch.js';
import {
  IFromFetchTextObservableNotifications
} from './from-fetch-text-observable-notifications.type.js';
import { responseToTextObservable } from './pipe/response-to-text-observable.js';

/**
 * Uses the Fetch API to make an HTTP request, and returns the result as text
 */
export function fromFetchText(
  requestInfo: RequestInfo,
  requestInit?: RequestInit,
): IObservable<IFromFetchTextObservableNotifications> {
  return responseToTextObservable(fromFetch(requestInfo, requestInit));
}
