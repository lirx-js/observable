import { createUnicastSource } from '../../unicast-source/create-unicast-source.js';
import { IUnicastSource } from '../../unicast-source/unicast-source.type.js';
import {
  createReplayLastSource,
  ICreateReplayLastSourceInitialValue,
} from '../create-replay-last-source.js';
import { IReplayLastSource } from '../replay-last-source.type.js';

export type IUnicastReplayLastSource<GValue> = IReplayLastSource<GValue, IUnicastSource<GValue>>;

export function createUnicastReplayLastSource<GValue>(
  ...initialValue: ICreateReplayLastSourceInitialValue<GValue>
): IUnicastReplayLastSource<GValue> {
  return createReplayLastSource<GValue, IUnicastSource<GValue>>(
    createUnicastSource<GValue>(),
    ...initialValue,
  );
}
