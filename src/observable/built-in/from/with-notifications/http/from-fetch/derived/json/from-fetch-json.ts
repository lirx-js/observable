import { IObservable } from '../../../../../../../type/observable.type.js';
import { fromFetch } from '../../from-fetch.js';
import {
  IFromFetchJSONObservableNotifications
} from './from-fetch-json-observable-notifications.type.js';
import { responseToJSONObservable } from './pipe/response-to-json-observable.js';

/**
 * Uses the Fetch API to make an HTTP request, and returns a JSON object
 */
export function fromFetchJSON<GData>(
  requestInfo: RequestInfo,
  requestInit?: RequestInit,
): IObservable<IFromFetchJSONObservableNotifications<GData>> {
  return responseToJSONObservable<GData>(fromFetch(requestInfo, requestInit));
}
