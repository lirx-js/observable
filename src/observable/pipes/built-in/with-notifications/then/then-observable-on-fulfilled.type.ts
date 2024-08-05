import { IObservable } from '../../../../type/observable.type.js';

export interface IThenObservableOnFulfilled<GInNextValue, GOut> {
  (value: GInNextValue): IObservable<GOut>;
}
