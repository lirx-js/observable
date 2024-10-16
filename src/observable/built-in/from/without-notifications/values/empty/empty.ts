import { noop } from '@lirx/utils';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../type/observable.type.js';

export function empty<GValue = any>(): IObservable<GValue> {
  return (): IUnsubscribeOfObservable => {
    return noop;
  };
}
