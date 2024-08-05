import { createLogFunctionFromName } from '../../pipes/built-in/log/create-log-function-from-name.js';
import { IObserver } from '../../type/observer.type.js';

export function createLogObserver<GValue>(name?: string): IObserver<GValue> {
  return createLogFunctionFromName<GValue>(name);
}
