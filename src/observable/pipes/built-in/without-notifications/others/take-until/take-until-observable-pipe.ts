import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { takeUntilObservable } from './take-until-observable.js';

export function takeUntilObservablePipe<GValue>(
  until: IObservable<any>,
): IObservablePipe<GValue, GValue> {
  return (subscribe: IObservable<GValue>): IObservable<GValue> => {
    return takeUntilObservable<GValue>(subscribe, until);
  };
}
