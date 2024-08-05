import { IObserver } from '../../../type/observer.type.js';
import { IObserverPipe } from '../../type/observer-pipe.type.js';
import { IScanFunction } from './scan-function.type.js';
import { scanObserver } from './scan-observer.js';

export function scanObserverPipe<GIn, GOut>(
  scanFunction: IScanFunction<GIn, GOut>,
  initialValue: GOut,
): IObserverPipe<GIn, GOut> {
  return (emit: IObserver<GOut>): IObserver<GIn> => {
    return scanObserver<GIn, GOut>(emit, scanFunction, initialValue);
  };
}
