import {
  DistinctOptions,
  EQUAL_FUNCTION_STRICT_EQUAL,
  getDistinctPreviousValueFromDistinctInitialValueOptions,
  UNINITIALIZED_TOKEN,
  UninitializedToken,
} from '@lirx/utils';
import { IObserver } from '../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../type/observable.type.js';

export function distinctObservable<GValue>(
  subscribe: IObservable<GValue>,
  { equal = EQUAL_FUNCTION_STRICT_EQUAL, ...options }: DistinctOptions<GValue> = {},
): IObservable<GValue> {
  return (emit: IObserver<GValue>): IUnsubscribeOfObservable => {
    let previousValue: GValue | UninitializedToken =
      getDistinctPreviousValueFromDistinctInitialValueOptions<GValue>(options);
    return subscribe((value: GValue): void => {
      if (previousValue === UNINITIALIZED_TOKEN || !equal(value, previousValue)) {
        previousValue = value;
        emit(value);
      }
    });
  };
}

// /**
//  * @see distinctObserverPipe
//  */
// export function distinctObservable<GValue>(
//   subscribe: IObservable<GValue>,
// ): IObservable<GValue> {
//   return transformObservableWithObserverPipe<GValue, GValue>(subscribe, distinctObserverPipe<GValue>());
// }
