import { IUnicastSource } from '../../../../../../observer-observable-pair/build-in/source/built-in/unicast-source/unicast-source.type.js';
import { ISourceObservablePipeCreateSource } from '../source-observable-pipe-create-source.type.js';

export interface IShareObservablePipeCreateUnicastSource<GValue>
  extends ISourceObservablePipeCreateSource<GValue> {
  (): IUnicastSource<GValue>;
}
