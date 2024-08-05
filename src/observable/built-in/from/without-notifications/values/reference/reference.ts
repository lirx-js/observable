import { noop } from '@lirx/utils';
import { IObserver } from '../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../type/observable.type.js';

export interface IGetReferenceValue<GValue> {
  (): GValue;
}

export function reference<GValue>(getValue: IGetReferenceValue<GValue>): IObservable<GValue> {
  return (emit: IObserver<GValue>): IUnsubscribeOfObservable => {
    emit(getValue());
    return noop;
  };
}
