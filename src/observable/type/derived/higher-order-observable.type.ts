import { IObservable } from '../observable.type.js';

export type IHigherOrderObservable<GValue> = IObservable<IObservable<GValue>>;
