import { createUnicastSource } from '../../unicast-source/create-unicast-source.js';
import { IUnicastSource } from '../../unicast-source/unicast-source.type.js';
import { createReplaySource } from '../create-replay-source.js';
import { IReplaySource } from '../replay-source.type.js';

export type IUnicastReplaySource<GValue> = IReplaySource<GValue, IUnicastSource<GValue>>;

export function createUnicastReplaySource<GValue>(
  maxNumberOfValues?: number,
): IUnicastReplaySource<GValue> {
  return createReplaySource<GValue, IUnicastSource<GValue>>(
    createUnicastSource<GValue>(),
    maxNumberOfValues,
  );
}
