import { IObserver } from '../../../type/observer.type.js';
import { ITapFunction } from './tap-function.type.js';

export function tapObserver<GValue>(
  emit: IObserver<GValue>,
  tapFunction: ITapFunction<GValue>,
): IObserver<GValue> {
  return (value: GValue): void => {
    tapFunction(value);
    emit(value);
  };
}
