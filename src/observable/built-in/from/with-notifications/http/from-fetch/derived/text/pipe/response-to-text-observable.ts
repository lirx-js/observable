import { fulfilledObservable } from '../../../../../../../../pipes/built-in/with-notifications/then/derived/fulfilled/fulfilled-observable.js';
import { IThenObservableInNotifications } from '../../../../../../../../pipes/built-in/with-notifications/then/then-observable.js';
import { IObservable } from '../../../../../../../../type/observable.type.js';
import { responseToBodyObservable } from '../../body/response-to-body-observable.js';
import { IFromFetchTextObservableNotifications } from '../from-fetch-text-observable-notifications.type.js';
import { responseToText } from './response-to-text.js';

export const responseToTextObservableRaw = responseToBodyObservable<string>(responseToText);

export function responseToTextObservable(
  subscribe: IObservable<IThenObservableInNotifications<Response>>,
): IObservable<IFromFetchTextObservableNotifications> {
  return fulfilledObservable(subscribe, responseToTextObservableRaw);
}
