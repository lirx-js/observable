import { fulfilledObservable } from '../../../../../../../../pipes/built-in/with-notifications/then/derived/fulfilled/fulfilled-observable.js';
import { IThenObservableInNotifications } from '../../../../../../../../pipes/built-in/with-notifications/then/then-observable.js';
import { IObservable } from '../../../../../../../../type/observable.type.js';
import { responseToBodyObservable } from '../../body/response-to-body-observable.js';
import { IFromFetchBlobObservableNotifications } from '../from-fetch-blob-observable-notifications.type.js';
import { responseToBlob } from './response-to-blob.js';

export const responseToBlobObservableRaw = responseToBodyObservable<Blob>(responseToBlob);

export function responseToBlobObservable(
  subscribe: IObservable<IThenObservableInNotifications<Response>>,
): IObservable<IFromFetchBlobObservableNotifications> {
  return fulfilledObservable(subscribe, responseToBlobObservableRaw);
}
