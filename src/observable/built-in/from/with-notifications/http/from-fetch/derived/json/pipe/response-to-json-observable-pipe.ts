import { IThenObservableInNotifications } from '../../../../../../../../pipes/built-in/with-notifications/then/then-observable.js';
import { IObservablePipe } from '../../../../../../../../pipes/type/observable-pipe.type.js';
import { IObservable } from '../../../../../../../../type/observable.type.js';
import { IFromFetchJSONObservableNotifications } from '../from-fetch-json-observable-notifications.type.js';
import { responseToJSONObservable } from './response-to-json-observable.js';

export function responseToJSONObservablePipe<GData>(): IObservablePipe<
  IThenObservableInNotifications<Response>,
  IFromFetchJSONObservableNotifications<GData>
> {
  return (
    subscribe: IObservable<IThenObservableInNotifications<Response>>,
  ): IObservable<IFromFetchJSONObservableNotifications<GData>> => {
    return responseToJSONObservable<GData>(subscribe);
  };
}
