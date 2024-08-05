import { createMulticastSource } from '../../multicast-source/create-multicast-source.js';
import { IMulticastSource } from '../../multicast-source/multicast-source.type.js';
import { createReplaySource } from '../create-replay-source.js';
import { IReplaySource } from '../replay-source.type.js';

export type IMulticastReplaySource<GValue> = IReplaySource<GValue, IMulticastSource<GValue>>;

export function createMulticastReplaySource<GValue>(
  maxNumberOfValues?: number,
): IMulticastReplaySource<GValue> {
  return createReplaySource<GValue, IMulticastSource<GValue>>(
    createMulticastSource<GValue>(),
    maxNumberOfValues,
  );
}
