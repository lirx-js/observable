import { ISource } from '../../type/source.type.js';
import { ISourceToReadonlySource } from './source-to-readonly-source.type.js';

export type IReadonlySource<GValue> = ISourceToReadonlySource<ISource<GValue>>;
