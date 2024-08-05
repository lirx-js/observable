import { IGenericSource } from '../../type/source.type.js';

export type ISourceToReadonlySource<GSource extends IGenericSource> = Omit<GSource, 'emit'>;
