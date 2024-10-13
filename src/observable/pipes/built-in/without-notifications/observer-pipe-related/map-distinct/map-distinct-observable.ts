import {
  DistinctOptions,
  EQUAL_FUNCTION_STRICT_EQUAL,
  getDistinctPreviousValueFromDistinctInitialValueOptions,
  UNINITIALIZED_TOKEN,
  UninitializedToken,
} from '@lirx/utils';
import { IMapFunction } from '../../../../../../observer/pipes/built-in/map/map-function.type.js';
import { IObserver } from '../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../type/observable.type.js';

export function mapDistinctObservable<GIn, GOut>(
  subscribe: IObservable<GIn>,
  mapFunction: IMapFunction<GIn, GOut>,
  { equal = EQUAL_FUNCTION_STRICT_EQUAL, ...options }: DistinctOptions<GOut> = {},
): IObservable<GOut> {
  return (emit: IObserver<GOut>): IUnsubscribeOfObservable => {
    let previousValue: GOut | UninitializedToken =
      getDistinctPreviousValueFromDistinctInitialValueOptions<GOut>(options);
    return subscribe((value: GIn): void => {
      // INFO should support a running variable because the `mapFunction` could call `unsubscribe` ?
      const _value: GOut = mapFunction(value);
      if (previousValue === UNINITIALIZED_TOKEN || !equal(_value, previousValue)) {
        previousValue = _value;
        emit(_value);
      }
    });
  };
}
