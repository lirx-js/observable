import { IThenObservableInNotifications } from '../../../../../../../../pipes/built-in/with-notifications/then/then-observable.js';
import { IObservablePipe } from '../../../../../../../../pipes/type/observable-pipe.type.js';
import { IObservable } from '../../../../../../../../type/observable.type.js';
import { IFromFetchTextObservableNotifications } from '../from-fetch-text-observable-notifications.type.js';
import { responseToTextObservable } from './response-to-text-observable.js';

export function responseToTextObservablePipe(): IObservablePipe<
  IThenObservableInNotifications<Response>,
  IFromFetchTextObservableNotifications
> {
  return (
    subscribe: IObservable<IThenObservableInNotifications<Response>>,
  ): IObservable<IFromFetchTextObservableNotifications> => {
    return responseToTextObservable(subscribe);
  };
}
