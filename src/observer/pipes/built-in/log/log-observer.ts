import { IObserver } from '../../../type/observer.type.js';
import { tapObserver } from '../tap/tap-observer.js';
import { createLogFunctionFromName } from './create-log-function-from-name.js';

export function logObserver<GValue>(emit: IObserver<GValue>, name?: string): IObserver<GValue> {
  return tapObserver<GValue>(emit, createLogFunctionFromName<GValue>(name));
}
