import { IObserver } from '../../../type/observer.type.js';
import { IScanFunction } from './scan-function.type.js';

export function scanObserver<GIn, GOut>(
  emit: IObserver<GOut>,
  scanFunction: IScanFunction<GIn, GOut>,
  initialValue: GOut,
): IObserver<GIn> {
  let previousValue: GOut = initialValue;
  return (value: GIn): void => {
    previousValue = scanFunction(previousValue, value);
    emit(previousValue);
  };
}
