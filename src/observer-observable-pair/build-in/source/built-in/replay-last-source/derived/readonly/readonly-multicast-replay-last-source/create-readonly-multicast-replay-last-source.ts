import { sourceToReadonlySource } from '../../../../readonly-source/source-to-readonly-source.js';
import { createMulticastReplayLastSource } from '../../create-multicast-replay-last-source.js';
import { IReadonlyMulticastReplayLastSource } from './readonly-multicast-replay-last-source.type.js';

export function createReadonlyMulticastReplayLastSource<GValue>(
  initialValue: GValue,
): IReadonlyMulticastReplayLastSource<GValue> {
  return sourceToReadonlySource(createMulticastReplayLastSource<GValue>(initialValue));
}
