import { ISourceToReadonlySource } from '../../../../readonly-source/source-to-readonly-source.type.js';
import { IMulticastReplayLastSource } from '../../create-multicast-replay-last-source.js';

export type IReadonlyMulticastReplayLastSource<GValue> = ISourceToReadonlySource<
  IMulticastReplayLastSource<GValue>
>;
