import { createNetworkErrorFromResponse } from '@lirx/utils';
import { IObservable } from '../../../../../../../type/observable.type.js';
import { throwError } from '../../../../others/throw-error/throw-error.js';
import { fromPromiseFactory } from '../../../../promise/from-promise-factory/from-promise-factory.js';
import { IFromFetchBodyObservableNotifications } from './from-fetch-body-observable-notifications.type.js';
import { IResponseToBodyMapFunction } from './response-to-body-map-function.type.js';

export interface IResponseToBodyObservableFunction<GData> {
  (response: Response): IObservable<IFromFetchBodyObservableNotifications<GData>>;
}

export function responseToBodyObservable<GData>(
  map: IResponseToBodyMapFunction<GData>,
): IResponseToBodyObservableFunction<GData> {
  return (response: Response): IObservable<IFromFetchBodyObservableNotifications<GData>> => {
    if (response.ok) {
      return fromPromiseFactory<GData>(() => map(response));
    } else {
      return throwError(createNetworkErrorFromResponse(response));
    }
  };
}
