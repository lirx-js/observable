import {
  DistinctOptions,
  EQUAL_FUNCTION_STRICT_EQUAL,
  getDistinctPreviousValueFromDistinctInitialValueOptions,
  UNINITIALIZED_TOKEN,
  UninitializedToken,
} from '@lirx/utils';
import { IObserver } from '../../../type/observer.type.js';

/**
 * Returns an Observer that emits all items emitted by the source Observer that are distinct by comparison from previous values
 */
export function distinctObserver<GValue>(
  emit: IObserver<GValue>,
  { equal = EQUAL_FUNCTION_STRICT_EQUAL, ...options }: DistinctOptions<GValue> = {},
): IObserver<GValue> {
  let previousValue: GValue | UninitializedToken =
    getDistinctPreviousValueFromDistinctInitialValueOptions<GValue>(options);
  return (value: GValue): void => {
    if (previousValue === UNINITIALIZED_TOKEN || !equal(value, previousValue)) {
      previousValue = value;
      emit(value);
    }
  };
}
