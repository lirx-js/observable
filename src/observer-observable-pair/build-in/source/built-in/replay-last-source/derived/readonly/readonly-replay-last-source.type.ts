import { ISource } from '../../../../type/source.type.js';
import { ISourceToReadonlySource } from '../../../readonly-source/source-to-readonly-source.type.js';
import { IReplayLastSource } from '../../replay-last-source.type.js';

export type IReadonlyReplayLastSource<
  GValue,
  GSource extends ISource<GValue>,
> = ISourceToReadonlySource<IReplayLastSource<GValue, GSource>>;
