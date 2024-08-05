import { IObservable } from '../../../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../../../type/observable-pipe.type.js';
import { toBooleanObservable } from './to-boolean-observable.js';

export function toBooleanObservablePipe<GValue>(): IObservablePipe<GValue, boolean> {
  return (subscribe: IObservable<GValue>): IObservable<boolean> => {
    return toBooleanObservable<GValue>(subscribe);
  };
}
