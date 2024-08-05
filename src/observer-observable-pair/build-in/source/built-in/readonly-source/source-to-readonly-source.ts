import { IGenericSource } from '../../type/source.type.js';
import { ISourceToReadonlySource } from './source-to-readonly-source.type.js';

export function sourceToReadonlySource<GSource extends IGenericSource>({
  emit,
  ...readonlySource
}: GSource): ISourceToReadonlySource<GSource> {
  return readonlySource;
}
