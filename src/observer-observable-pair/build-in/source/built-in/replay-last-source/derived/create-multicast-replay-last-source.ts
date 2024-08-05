import { createMulticastSource } from '../../multicast-source/create-multicast-source.js';
import { IMulticastSource } from '../../multicast-source/multicast-source.type.js';
import {
  createReplayLastSource,
  ICreateReplayLastSourceInitialValue,
} from '../create-replay-last-source.js';
import { IReplayLastSource } from '../replay-last-source.type.js';

export type IMulticastReplayLastSource<GValue> = IReplayLastSource<
  GValue,
  IMulticastSource<GValue>
>;

export function createMulticastReplayLastSource<GValue>(
  ...initialValue: ICreateReplayLastSourceInitialValue<GValue>
): IMulticastReplayLastSource<GValue> {
  return createReplayLastSource<GValue, IMulticastSource<GValue>>(
    createMulticastSource<GValue>(),
    ...initialValue,
  );
}
