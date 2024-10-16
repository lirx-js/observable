import { UndoFunction } from '@lirx/utils';

/**
 * @deprecated
 * @experimental
 */
export interface IObserverWithCleanUp<GValue> {
  (value: GValue): UndoFunction;
}

// /* derived */
//
// export type IGenericObserver = IObserver<any>;
//
// export type IInferObserverGValue<GObserver extends IGenericObserver> =
//   GObserver extends IObserver<infer GValue>
//     ? GValue
//     : never;
