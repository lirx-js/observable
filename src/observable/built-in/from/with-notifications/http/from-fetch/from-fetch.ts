import { IObservable } from '../../../../../type/observable.type.js';
import { fromPromiseFactory } from '../../promise/from-promise-factory/from-promise-factory.js';
import { IFromFetchObservableNotifications } from './from-fetch-observable-notifications.type.js';

/**
 * Uses the Fetch API to make an HTTP request.
 */
export function fromFetch(
  requestInfo: RequestInfo,
  requestInit?: RequestInit,
): IObservable<IFromFetchObservableNotifications> {
  return fromPromiseFactory((signal: AbortSignal): Promise<Response> => {
    return fetch(requestInfo, {
      ...requestInit,
      signal,
    });
  }, requestInit);
}
