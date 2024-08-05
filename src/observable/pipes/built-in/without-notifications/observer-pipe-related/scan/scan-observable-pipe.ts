import { IScanFunction } from '../../../../../../observer/pipes/built-in/scan/scan-function.type.js';
import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import { scanObservable } from './scan-observable.js';

export function scanObservablePipe<GIn, GOut>(
  scanFunction: IScanFunction<GIn, GOut>,
  initialValue: GOut,
): IObservablePipe<GIn, GOut> {
  return (subscribe: IObservable<GIn>): IObservable<GOut> => {
    return scanObservable<GIn, GOut>(subscribe, scanFunction, initialValue);
  };
}
