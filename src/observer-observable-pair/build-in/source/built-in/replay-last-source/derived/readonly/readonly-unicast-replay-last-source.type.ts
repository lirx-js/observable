import { ISourceToReadonlySource } from '../../../readonly-source/source-to-readonly-source.type.js';
import { IUnicastReplayLastSource } from '../create-unicast-replay-last-source.js';

export type IReadonlyUnicastReplayLastSource<GValue> = ISourceToReadonlySource<
  IUnicastReplayLastSource<GValue>
>;
