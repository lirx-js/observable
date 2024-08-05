import { fulfilledObservable } from '../../../../../../../../pipes/built-in/with-notifications/then/derived/fulfilled/fulfilled-observable.js';
import { IThenObservableInNotifications } from '../../../../../../../../pipes/built-in/with-notifications/then/then-observable.js';
import { IObservable } from '../../../../../../../../type/observable.type.js';
import { responseToBodyObservable } from '../../body/response-to-body-observable.js';
import { IFromFetchJSONObservableNotifications } from '../from-fetch-json-observable-notifications.type.js';
import { responseToJSON } from './response-to-json.js';

export function responseToJSONObservable<GData>(
  subscribe: IObservable<IThenObservableInNotifications<Response>>,
): IObservable<IFromFetchJSONObservableNotifications<GData>> {
  return fulfilledObservable(subscribe, responseToBodyObservable<GData>(responseToJSON));
}
