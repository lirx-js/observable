import { IShareObservablePipeCreateMulticastSource } from './share-observable-pipe-create-multicast-source.type.js';
import { IShareObservablePipeCreateUnicastSource } from './share-observable-pipe-create-unicast-source.type.js';

export type IShareObservablePipeCreateSource<GValue> =
  | IShareObservablePipeCreateMulticastSource<GValue>
  | IShareObservablePipeCreateUnicastSource<GValue>;
