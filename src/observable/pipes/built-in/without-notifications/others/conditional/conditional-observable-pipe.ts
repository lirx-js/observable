import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { conditionalObservable } from './conditional-observable.js';

export function conditionalObservablePipe<GValue>(
  condition: IObservable<boolean>,
): IObservablePipe<GValue, GValue> {
  return (subscribe: IObservable<GValue>): IObservable<GValue> => {
    return conditionalObservable<GValue>(subscribe, condition);
  };
}
