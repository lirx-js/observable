import {
  IObservable,
  IUnsubscribeOfObservable,
} from '../../../../../observable/type/observable.type.js';
import { IObserver } from '../../../../../observer/type/observer.type.js';
import { ISource } from '../../type/source.type.js';
import { IReplayLastSource } from './replay-last-source.type.js';

export type ICreateReplayLastSourceInitialValue<GValue> = [] | [GValue];

export function createReplayLastSource<GValue, GSource extends ISource<GValue>>(
  source: GSource,
  ...initialValue: ICreateReplayLastSourceInitialValue<GValue>
): IReplayLastSource<GValue, GSource> {
  let currentValue: GValue;
  let initialized: boolean;

  if (initialValue.length === 0) {
    initialized = false;
  } else {
    initialized = true;
    currentValue = initialValue[0];
  }

  const emit: IObserver<GValue> = (value: GValue): void => {
    initialized = true;
    currentValue = value;
    source.emit(value);
  };

  const subscribe: IObservable<GValue> = (emit: IObserver<GValue>): IUnsubscribeOfObservable => {
    if (initialized) {
      emit(currentValue as GValue);
    }
    return source.subscribe(emit);
  };

  return {
    ...source,
    getValue: (unsafe?: boolean): GValue => {
      if (initialized || unsafe) {
        return currentValue as GValue;
      } else {
        throw new Error(`No value received`);
      }
    },
    emit,
    subscribe,
  };
}
