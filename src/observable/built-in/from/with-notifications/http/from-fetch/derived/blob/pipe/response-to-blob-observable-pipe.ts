import { IThenObservableInNotifications } from '../../../../../../../../pipes/built-in/with-notifications/then/then-observable.js';
import { IObservablePipe } from '../../../../../../../../pipes/type/observable-pipe.type.js';
import { IObservable } from '../../../../../../../../type/observable.type.js';
import { IFromFetchBlobObservableNotifications } from '../from-fetch-blob-observable-notifications.type.js';
import { responseToBlobObservable } from './response-to-blob-observable.js';

export function responseToBlobObservablePipe(): IObservablePipe<
  IThenObservableInNotifications<Response>,
  IFromFetchBlobObservableNotifications
> {
  return (
    subscribe: IObservable<IThenObservableInNotifications<Response>>,
  ): IObservable<IFromFetchBlobObservableNotifications> => {
    return responseToBlobObservable(subscribe);
  };
}
