import { fulfilledObservable } from '../../../../../../../../pipes/built-in/with-notifications/then/derived/fulfilled/fulfilled-observable.js';
import { IThenObservableInNotifications } from '../../../../../../../../pipes/built-in/with-notifications/then/then-observable.js';
import { IObservable } from '../../../../../../../../type/observable.type.js';
import { responseToBodyObservable } from '../../body/response-to-body-observable.js';
import { IFromFetchArrayBufferObservableNotifications } from '../from-fetch-array-buffer-observable-notifications.type.js';
import { responseToArrayBuffer } from './response-to-array-buffer.js';

export const responseToArrayBufferObservableRaw =
  responseToBodyObservable<ArrayBuffer>(responseToArrayBuffer);

export function responseToArrayBufferObservable(
  subscribe: IObservable<IThenObservableInNotifications<Response>>,
): IObservable<IFromFetchArrayBufferObservableNotifications> {
  return fulfilledObservable(subscribe, responseToArrayBufferObservableRaw);
}
