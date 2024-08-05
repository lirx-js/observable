import { IThenObservableInNotifications } from '../../../../../../../../pipes/built-in/with-notifications/then/then-observable.js';
import { IObservablePipe } from '../../../../../../../../pipes/type/observable-pipe.type.js';
import { IObservable } from '../../../../../../../../type/observable.type.js';
import { IFromFetchStreamObservableNotifications } from '../from-fetch-stream-observable-notifications.type.js';
import { responseToStreamObservable } from './response-to-stream-observable.js';

export function responseToStreamObservablePipe(): IObservablePipe<
  IThenObservableInNotifications<Response>,
  IFromFetchStreamObservableNotifications
> {
  return (
    subscribe: IObservable<IThenObservableInNotifications<Response>>,
  ): IObservable<IFromFetchStreamObservableNotifications> => {
    return responseToStreamObservable(subscribe);
  };
}
