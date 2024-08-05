import { ICompleteNotification } from '../../../../../../../misc/notifications/built-in/complete/complete-notification.type.js';
import { IErrorNotification } from '../../../../../../../misc/notifications/built-in/error/error-notification.type.js';
import { IGenericNotification } from '../../../../../../../misc/notifications/notification.type.js';
import { IObservable } from '../../../../../../type/observable.type.js';

export type IFinallyObservableNotifications =
  | ICompleteNotification
  | IErrorNotification
  | IGenericNotification;

export interface IFinallyObservableCallbackValueFulfilled<GInNextValue> {
  state: 'fulfilled';
  value: GInNextValue;
}

export interface IFinallyObservableCallbackValueRejected {
  state: 'rejected';
  error: unknown;
}

export type IFinallyObservableCallbackValue<GInNextValue> =
  | IFinallyObservableCallbackValueFulfilled<GInNextValue>
  | IFinallyObservableCallbackValueRejected;

export interface IFinallyObservableCallback<GInNextValue> {
  (
    value: IFinallyObservableCallbackValue<GInNextValue>,
  ): IObservable<IFinallyObservableNotifications>;
}
