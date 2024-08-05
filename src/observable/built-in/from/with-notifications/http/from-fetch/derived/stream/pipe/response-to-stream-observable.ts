import { createNetworkErrorFromResponse } from '@lirx/utils';
import { fulfilledObservable } from '../../../../../../../../pipes/built-in/with-notifications/then/derived/fulfilled/fulfilled-observable.js';
import { IThenObservableInNotifications } from '../../../../../../../../pipes/built-in/with-notifications/then/then-observable.js';
import { IObservable } from '../../../../../../../../type/observable.type.js';
import { throwError } from '../../../../../others/throw-error/throw-error.js';
import { fromPromiseFactory } from '../../../../../promise/from-promise-factory/from-promise-factory.js';
import { fromReadableStream } from '../../../../../readable-stream/w3c/from-readable-stream/from-readable-stream.js';
import { IFromFetchStreamObservableNotifications } from '../from-fetch-stream-observable-notifications.type.js';

export function responseToStreamObservable(
  subscribe: IObservable<IThenObservableInNotifications<Response>>,
): IObservable<IFromFetchStreamObservableNotifications> {
  return fulfilledObservable(
    subscribe,
    (response: Response): IObservable<IFromFetchStreamObservableNotifications> => {
      if (response.ok) {
        if (response.body === null) {
          return fromPromiseFactory<Uint8Array>(() => {
            return response.arrayBuffer().then((buffer: ArrayBuffer) => new Uint8Array(buffer));
          });
          // return throwError(new Error(`Response's body is null`));
        } else {
          return fromReadableStream<Uint8Array>(response.body);
        }
      } else {
        return throwError(createNetworkErrorFromResponse(response));
      }
    },
  );
}
