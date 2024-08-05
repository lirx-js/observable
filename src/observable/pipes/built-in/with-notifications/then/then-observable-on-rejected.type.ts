import { IObservable } from '../../../../type/observable.type.js';

export interface IThenObservableOnRejected<GOut> {
  (error: any): IObservable<GOut>;
}
