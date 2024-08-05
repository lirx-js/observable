import { IThenObservableInNotifications } from '../../../../../../../../pipes/built-in/with-notifications/then/then-observable.js';
import { IObservablePipe } from '../../../../../../../../pipes/type/observable-pipe.type.js';
import { IObservable } from '../../../../../../../../type/observable.type.js';
import { IFromFetchArrayBufferObservableNotifications } from '../from-fetch-array-buffer-observable-notifications.type.js';
import { responseToArrayBufferObservable } from './response-to-array-buffer-observable.js';

export function responseToArrayBufferObservablePipe(): IObservablePipe<
  IThenObservableInNotifications<Response>,
  IFromFetchArrayBufferObservableNotifications
> {
  return (
    subscribe: IObservable<IThenObservableInNotifications<Response>>,
  ): IObservable<IFromFetchArrayBufferObservableNotifications> => {
    return responseToArrayBufferObservable(subscribe);
  };
}
