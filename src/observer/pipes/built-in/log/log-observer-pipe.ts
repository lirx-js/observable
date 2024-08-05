import { IObserverPipe } from '../../type/observer-pipe.type.js';
import { tapObserverPipe } from '../tap/tap-observer-pipe.js';
import { createLogFunctionFromName } from './create-log-function-from-name.js';

export function logObserverPipe<GValue>(name?: string): IObserverPipe<GValue, GValue> {
  return tapObserverPipe<GValue>(createLogFunctionFromName<GValue>(name));
}
